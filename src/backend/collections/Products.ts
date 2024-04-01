// import { PRODUCT_CATEGORIES } from '../../constants/constants';
// import { CollectionConfig } from 'payload/types';

// export const Products: CollectionConfig = {
//   slug: 'productos',
//   admin: {
//     useAsTitle: 'name',
//   },
//   access: {},
//   hooks: {},
//   fields: [
//     {
//       name: 'user',
//       type: 'relationship',
//       relationTo: 'users',
//       required: true,
//       hasMany: false,
//       admin: {
//         condition: () => false,
//       },
//     },
//     {
//       name: 'name',
//       label: 'Nombre',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'description',
//       label: 'Descripción',
//       type: 'textarea',
//       required: true,
//     },
//     {
//       name: 'price',
//       label: 'Precio en pesos',
//       min: 1000,
//       type: 'number',
//       required: true,
//     },
//     {
//       name: 'category',
//       label: 'Categorias',
//       type: 'select',
//       options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
//       required: true,
//     },
//     {
//       name: 'archivos',
//       label: 'Archivo(s) del producto',
//       type: 'relationship',
//       required: true,
//       relationTo: 'archivos',
//       hasMany: false,
//     },
//     {
//       name: 'approvedForSale',
//       label: 'Estado del producto',
//       type: 'select',
//       defaultValue: 'pending',
//       access: {
//         create: ({ req }) => req.user.role === 'admin',
//         read: ({ req }) => req.user.role === 'admin',
//         update: ({ req }) => req.user.role === 'admin',
//       },
//       options: [
//         {
//           label: 'Verificación pendiente',
//           value: 'pending',
//         },
//         {
//           label: 'Aprobado',
//           value: 'approved',
//         },
//         {
//           label: 'Denegado',
//           value: 'denied',
//         },
//       ],
//     },
//     {
//       name: 'priceId',
//       access: {
//         create: () => false,
//         read: () => false,
//         update: () => false,
//       },
//       type: 'text',
//       admin: {
//         hidden: true,
//       },
//     },
//     {
//       name: 'stripeId',
//       access: {
//         create: () => false,
//         read: () => false,
//         update: () => false,
//       },
//       type: 'text',
//       admin: {
//         hidden: true,
//       },
//     },
//     {
//       name: 'images',
//       type: 'array',
//       label: 'Imagenes del producto',
//       minRows: 1,
//       maxRows: 4,
//       required: true,
//       labels: {
//         singular: 'Imagen',
//         plural: 'Imágenes',
//       },
//       fields: [
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//         },
//       ],
//     },
//   ],
// };

import {
  AfterChangeHook,
  BeforeChangeHook,
} from 'payload/dist/collections/config/types';
import { PRODUCT_CATEGORIES } from '../../constants/constants';
import { Access, CollectionConfig } from 'payload/types';
import { Producto, User } from '../../backend/payload-types';
import { stripe } from '../../lib/stripe';

const addUser: BeforeChangeHook<Producto> = async ({ req, data }) => {
  const user = req.user;

  return { ...data, user: user.id };
};

const syncUser: AfterChangeHook<Producto> = async ({ req, doc }) => {
  const fullUser = await req.payload.findByID({
    collection: 'users',
    id: req.user.id,
  });

  if (fullUser && typeof fullUser === 'object') {
    const { productos } = fullUser;

    const allIDs = [
      ...(productos?.map((product) =>
        typeof product === 'object' ? product.id : product
      ) || []),
    ];

    const createdProductIDs = allIDs.filter(
      (id, index) => allIDs.indexOf(id) === index
    );

    const dataToUpdate = [...createdProductIDs, doc.id];

    await req.payload.update({
      collection: 'users',
      id: fullUser.id,
      data: {
        productos: dataToUpdate,
      },
    });
  }
};

const isAdminOrHasAccess =
  (): Access =>
  ({ req: { user: _user } }) => {
    const user = _user as User | undefined;

    if (!user) return false;
    if (user.role === 'admin') return true;

    const userProductIDs = (user.productos || []).reduce<Array<string>>(
      (acc, product) => {
        if (!product) return acc;
        if (typeof product === 'string') {
          acc.push(product);
        } else {
          acc.push(product.id);
        }

        return acc;
      },
      []
    );

    return {
      id: {
        in: userProductIDs,
      },
    };
  };

export const Products: CollectionConfig = {
  slug: 'productos',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: isAdminOrHasAccess(),
    update: isAdminOrHasAccess(),
    delete: isAdminOrHasAccess(),
  },
  hooks: {
    afterChange: [syncUser],
    beforeChange: [
      addUser,
      async (args) => {
        if (args.operation === 'create') {
          const data = args.data as Producto;

          const createdProduct = await stripe.products.create({
            name: data.name,
            default_price_data: {
              currency: 'ARS',
              unit_amount: Math.round(data.price * 100),
            },
          });

          const updated: Producto = {
            ...data,
            stripeId: createdProduct.id,
            priceId: createdProduct.default_price as string,
          };

          return updated;
        } else if (args.operation === 'update') {
          const data = args.data as Producto;

          const updatedProduct = await stripe.products.update(data.stripeId!, {
            name: data.name,
            default_price: data.priceId!,
          });

          const updated: Producto = {
            ...data,
            stripeId: updatedProduct.id,
            priceId: updatedProduct.default_price as string,
          };

          return updated;
        }
      },
    ],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
    {
      name: 'name',
      label: 'Nombre',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Detalles del producto',
    },
    {
      name: 'price',
      label: 'Precio en Pesos (ARS)',
      min: 0,
      max: 25000,
      type: 'number',
      required: true,
    },
    {
      name: 'category',
      label: 'Categorias',
      type: 'select',
      options: PRODUCT_CATEGORIES.map(({ label, value }) => ({ label, value })),
      required: true,
    },
    {
      name: 'archivos',
      label: 'Archivo(s) del producto',
      type: 'relationship',
      required: true,
      relationTo: 'archivos',
      hasMany: false,
    },
    {
      name: 'approvedForSale',
      label: 'Estado del producto',
      type: 'select',
      defaultValue: 'pending',
      access: {
        create: ({ req }) => req.user.role === 'admin',
        read: ({ req }) => req.user.role === 'admin',
        update: ({ req }) => req.user.role === 'admin',
      },
      options: [
        {
          label: 'Verificación pendiente',
          value: 'pending',
        },
        {
          label: 'Aprobado',
          value: 'approved',
        },
        {
          label: 'Denegado',
          value: 'denied',
        },
      ],
    },
    {
      name: 'priceId',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'stripeId',
      access: {
        create: () => false,
        read: () => false,
        update: () => false,
      },
      type: 'text',
      admin: {
        hidden: true,
      },
    },
    {
      name: 'images',
      type: 'array',
      label: 'Imagenes del producto',
      minRows: 1,
      maxRows: 4,
      required: true,
      labels: {
        singular: 'Imagen',
        plural: 'Imagenes',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
