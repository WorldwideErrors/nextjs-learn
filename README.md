# Next.js App Router Course - Starter

## Introduction
This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.
For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Tech Stack
- React
- Next.js
- Typescript

## Packages
- Tailwindcss
- Postgres
- Bcrypt
- Heroicons

## Projectstructuur
```
/
├── app/                   # App Router: routes, page’s, layouts and components
├── public/                # Static files (images, favicon, fonts)
│
├── auth.config.ts         # Configuratie voor authenticatie
├── auth.ts                # Helper/handler voor authenticatieflows
├── middleware.ts          # Middleware (authenticatie, redirects, headers)
│
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies en scripts
├── pnpm-lock.yaml         # Lockfile (depends on package manager)
│
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind configuration
│
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
└── README.md              # Projectdocumentation
```

## Features
- ✅ Next.js App Router
- 🔐 Authenticatie (via middleware & config)
- 🎨 Tailwind CSS (Styling)
- ⚡ TypeScript supported
- 🔧 Configured ESLint, PostCSS, Tailwind & Next.js settings

## Installatie
```
git clone https://github.com/WorldwideErrors/nextjs-learn.git
cd nextjs-learn

pnpm install
npm install

npm run dev
```

x Jeffrey // WorldWideErrors
