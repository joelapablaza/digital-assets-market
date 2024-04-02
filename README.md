# Capi Market - Digital Assets

## There is also a Spanish Readme

### <a href="https://digital-assets-market.onrender.com/" style="color:#1bb8e3;">Visit the page</a>

![Preview](/public/preview.png)

## This project aims to test technologies such as TRPC, Zustand, PayloadCMS, etc

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

## Self-Hosted Next.js with Express

I decided to try how to do self-hosting of express, in this way to be able to host the project wherever suits me best, and this also gives options to use websockets without paying the Vercel premium.

## For this project I have decided to try PayloadCMS and these are my conclusions:

**Pros**: **Payload CMS** offers a robust system focused on typescript, which makes it more secure when developing. Its backend system is comprehensive and robust, including various database drivers and integrated registration and login functionalities.

**Observations**: **Payload CMS** is constantly improving and developing, it is a relatively new solution compared to other more established alternatives in the market. Until recently, it lacked official integrations with cloud service providers such as AWS, Azure, or Google Cloud, and did not accept plugins for creating custom drivers, which could be a limitation in certain use cases. However, in the latest versions, official drivers for major cloud providers have been added. Although its development is improving, the methodology is similar to `Next.js`, although it does not offer the same level of customizable configuration options that `Next.js` does if needed. It is highly opinionated and I found it to be much more limited than other CMS solutions like Strapi. Configuration can be somewhat tedious as although it may seem like you have a lot of freedom for customization, in reality, you do not.

**Conclucion**: I believe it has a lot of potential if it is going to be used in the Payload hosting service which comes with a large premium in the price. But to use it personally or to deploy on your own servers, I recommend using some of the more mature alternatives on the market.

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

# copy .env.example into .env
cp .env.example .env
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
