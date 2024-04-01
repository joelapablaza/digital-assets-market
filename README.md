# Capi Market - Digital Assets

### Preview <a href="https://digital-assets-market.onrender.com/" style="color:#1bb8e3;">visitar la página</a>

![Preview](/public/preview.png)

## Este proyecto tiene como fin probar tecnologias como TRPC, Zustand PayloadCMS, etc

- Next 14
- TRPC
- Zod
- Zustand
- Shadcn
- Tailwind
- Stripe
- Resend
- Nodemailer
- Hookform
- PayloadCMS

## Self-Hosted Express

Decidi probar como hacer self-hosting de express, de esta manera poder hostear el proyecto donde
mejor me quede, y esto tambien da opciones para utilizar websockets sin pagar el premium de Vercel.

## Para este proyecto he decidido probar PayloadCMS y estas son mis conclusiones:

**Pros**: **Payload CMS** ofrece un sistema robusto enfocado a typescript, lo cual lo hace
más seguro a la hora de desarrollar.

**Cons**: **Payload CMS** es relativamente nuevo y no existe soporte oficial para Cloudinaty por ejemplo.
Aunque su desarrollo sigue mejorando, la metodologia es similar a `Next.js`, aunque este no ofrece las
alternativas de configuracion personalizada que ofrece `Next.js` en el caso de necesitarlas, es muy opinionado y
me encontre que es mucho mas limitado que otros CMSs como Strapi. La configuracion puede ser algo
tediosa ya que aunque parezca que tienes mucha libertad de customizacion en realidad no la tienes.

**Conclucion**: Creo que tiene mucho potencial si se va a utilizar en el servicio de hosting de Payload el cual
viene con un gran premium en el precio. Pero para utilizar de forma personal o para desplegar en servidores propios
recomiendo utilizar algunas de las alternativas mas maduras del mercado.

## Features

- 🛠️ Complete marketplace built from scratch in Next.js 14
- 💻 Beautiful landing page & product pages included
- 🎨 White and Dark mode
- 💳 Full admin dashboard
- 🛍️ Users can purchase and sell their own products
- 🛒 Locally persisted shopping cart
- 🔑 Authentication using Payload
- 🖥️ Learn how to self-host Next.js
- 🌟 Clean, modern UI using shadcn-ui
- ✉️ Beautiful emails for signing up and after purchase
- ✅ Admins can verify products to ensure high quality
- ⌨️ 100% written in TypeScript

## Getting Started

Clone the Repo:

```bash
git clone https://github.com/joelapablaza/digital-assets-market.git
```

Run the development server:

```bash
npm install
# or
yarn install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
