import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { webpackBundler } from '@payloadcms/bundler-webpack';
import path from 'path';
import { Users } from './collections/Users';
import dotenv from 'dotenv';
import { Products } from './collections/Products';
import { Media } from './collections/Media';
import { ProductFiles } from './collections/Product-File';
import { Orders } from './collections/Orders';
import cloudinaryPlugin from 'payload-cloudinary-plugin/dist/plugins';

dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [Users, Products, Media, ProductFiles, Orders],
  plugins: [cloudinaryPlugin()],
  localization: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    fallback: true,
  },
  routes: {
    admin: '/panel',
  },
  admin: {
    user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- Capi Market',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.png',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
