import { User } from '../payload-types';
import { BeforeChangeHook } from 'payload/dist/collections/config/types';
import { Access, CollectionConfig } from 'payload/types';

const addUser: BeforeChangeHook = ({ req, data }) => {
  const user = req.user as User | null;
  return { ...data, user: user?.id };
};

const yourOwnAndPurchased: Access = async ({ req }) => {
  const user = req.user as User | null;

  if (user?.role === 'admin') return true;
  if (!user) return false;

  const { docs: products } = await req.payload.find({
    collection: 'productos',
    depth: 0,
    where: {
      user: {
        equals: user.id,
      },
    },
  });

  const ownProductFileIds = products.map((prod) => prod.archivos).flat();

  const { docs: ordenes } = await req.payload.find({
    collection: 'ordenes',
    depth: 2,
    where: {
      user: {
        equals: user.id,
      },
    },
  });

  const purchasedProductFileIds = ordenes
    .map((order) => {
      return order.productos.map((product) => {
        if (typeof product === 'string')
          return req.payload.logger.error(
            'La profundidad de búsqueda no es suficiente para encontrar los ID de archivos comprados'
          );

        return typeof product.archivos === 'string'
          ? product.archivos
          : product.archivos.id;
      });
    })
    .filter(Boolean)
    .flat();

  return {
    id: {
      in: [...ownProductFileIds, ...purchasedProductFileIds],
    },
  };
};

export const ProductFiles: CollectionConfig = {
  slug: 'archivos',
  admin: {
    hidden: ({ user }) => user.role !== 'admin',
    useAsTitle: 'Archivos de Productos',
  },
  hooks: {
    beforeChange: [addUser],
  },
  access: {
    read: yourOwnAndPurchased,
    update: ({ req }) => req.user.role === 'admin',
    delete: ({ req }) => req.user.role === 'admin',
  },
  upload: {
    staticURL: '/product_files',
    staticDir: 'product_files',
    mimeTypes: ['image/*', 'font/*', 'application/postscript'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        condition: () => false,
      },
      hasMany: false,
      required: true,
    },
  ],
};
