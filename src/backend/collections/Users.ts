import { PrimaryActionEmailHtml } from '../../components/primary-action-email';
import { Access, CollectionConfig } from 'payload/types';

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === 'admin') return true;

  return {
    id: {
      equals: user.id,
    },
  };
};

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return PrimaryActionEmailHtml({
          actionLabel: 'verificar tu cuenta',
          buttonText: 'Verificar Cuenta',
          href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
        });
      },
    },
  },
  access: {
    read: adminsAndUser,
    create: () => true,
    update: ({ req }) => req.user.role === 'admin',
    delete: ({ req }) => req.user.role === 'admin',
  },
  admin: {
    hidden: ({ user }) => user.role !== 'admin',
    defaultColumns: ['id'],
  },
  fields: [
    {
      name: 'productos',
      label: 'Productos',
      admin: {
        condition: () => false,
      },
      type: 'relationship',
      relationTo: 'productos',
      hasMany: true,
    },
    {
      name: 'archivos',
      label: 'Archivos',
      admin: {
        condition: () => false,
      },
      type: 'relationship',
      relationTo: 'archivos',
      hasMany: true,
    },
    {
      name: 'role',
      defaultValue: 'user',
      required: true,

      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Usuario', value: 'user' },
      ],
    },
  ],
};
