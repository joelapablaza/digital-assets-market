import { PRODUCT_CATEGORIES } from '../../constants/constants';
import { CollectionConfig } from 'payload/types';

export const Products: CollectionConfig = {
  slug: 'productos',
  admin: {
    useAsTitle: 'name',
  },
  access: {},
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
      label: 'Descripción',
      type: 'textarea',
      required: true,
    },
    {
      name: 'price',
      label: 'Precio en pesos',
      min: 1000,
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
        plural: 'Imágenes',
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
