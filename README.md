# Adobe Connect - Internal Social Network

A modern web application built with Next.js 15, TypeScript, and Tailwind CSS for Adobe employees to connect and collaborate.

## Features

- 🤝 Coffee Chat Mixer - Connect with colleagues for virtual or in-person coffee chats
- 🗺️ Office Activity Map - Real-time visualization of colleague locations
- 📅 Events Marketplace - Browse and join Adobe-hosted events
- 🎯 Goal Setting - Personalized professional development tracking
- 🏆 Gamification - XP rewards and badges for engagement

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Cobe (3D Globe)
- Lucide Icons

## Getting Started

First, run the development server:

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── coffee-chat/       # Coffee chat feature
│   ├── dashboard/         # User dashboard
│   ├── events/           # Events marketplace
│   └── goals/            # Goal setting
├── components/            # Reusable components
│   ├── layouts/          # Layout components
│   ├── navigation/       # Navigation components
│   └── ui/              # UI components
└── lib/                  # Utilities and helpers
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
