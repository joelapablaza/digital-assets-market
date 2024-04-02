# Capi Market - Digital Assets

### Preview <a href="https://digital-assets-market.onrender.com/" style="color:#1bb8e3;">visitar la página</a>

![Preview](/public/preview.png)

## Este proyecto tiene como fin probar tecnologías como TRPC, Zustand, PayloadCMS, etc

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

## Self-Hosted Next.js con Express

Decidí probar cómo hacer self-hosting de express, de esta manera poder hostear el proyecto donde mejor me quede, y esto también da opciones para utilizar websockets sin pagar el premium de Vercel.

## Para este proyecto he decidido probar PayloadCMS y estas son mis conclusiones:

**Pros**: **Payload CMS** ofrece un sistema robusto enfocado a typescript, lo cual lo hace más seguro a la hora de desarrollar. Y su sistema backend es muy completo y robusto, incluyendo desde algunos drivers para bases de datos hasta registro y login ya integrado.

**Observaciones**: **Payload CMS** Si bien PayloadCMS está en constante mejora y desarrollo, es una solución relativamente nueva en comparación con otras alternativas más establecidas en el mercado. Hasta hace poco, carecía de integraciones oficiales con proveedores de servicios en la nube como AWS, Azure o Google Cloud, y no aceptaba plugins para crear drivers personalizados, lo que podría ser una limitación en ciertos casos de uso. Sin embargo, en las últimas versiones, se han agregado drivers oficiales para los principales proveedores de nube. Aunque su desarrollo sigue mejorando, la metodología es similar a `Next.js`, aunque este no ofrece las alternativas de configuración personalizada que ofrece `Next.js` en el caso de necesitarlas, es muy opinionado y me encontré que es mucho más limitado que otros CMS como Strapi. La configuración puede ser algo tediosa ya que aunque parezca que tienes mucha libertad de customización en realidad no la tienes.

**Conclucion**: Creo que tiene mucho potencial si se va a utilizar en el servicio de hosting de Payload el cual viene con un gran premium en el precio. Pero para utilizar de forma personal o para desplegar en servidores propios recomiendo utilizar algunas de las alternativas más maduras del mercado.

## Features

- 🛠️ Completo mercado construido desde cero en Next.js 14
- 💻 Hermosa página de inicio y páginas de productos incluidas
- 🎨 Modo claro y oscuro
- 💳 Panel de administración completo
- 🛍️ Los usuarios pueden comprar y vender sus propios productos
- 🛒 Carrito de compras persistente localmente
- 🔑 Autenticación utilizando Payload
- 🖥️ Autohospedado Next.js con Express
- 🌟 UI limpia y moderna utilizando shadcn-ui
- ✉️ Correos electrónicos hermosos para registrarse y después de la compra
- ✅ Los administradores pueden verificar productos para garantizar alta calidad
- ⌨️ 100% escrito en TypeScript

## Getting Started

Clona el repo:

```bash
git clone https://github.com/joelapablaza/digital-assets-market.git

# copy .env.example into .env
cp .env.example .env
```

Corre el server de desarrollo:

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
