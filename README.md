# Ikhwan Surgical Instruments

A modern e-commerce platform for surgical instruments built with React, TypeScript, and Sanity CMS.

## Features

- 🛒 Full e-commerce functionality with shopping cart and checkout
- 📦 Product catalog with categories and filters
- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 📝 Content management with Sanity CMS
- 🔍 Product search and filtering
- 💳 Shopping cart with local storage persistence
- 📱 Fully responsive design
- 🎭 Integrated Sanity Studio at `/studio` route

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **CMS**: Sanity.io
- **Routing**: React Router v6
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- A Sanity.io account and project ([create one here](https://sanity.io/))

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd ikhwan-surgical-instruments
```

2. Install dependencies:
```sh
npm install
```

3. Set up environment variables:
```sh
cp .env.example .env
```

Edit `.env` and add your Sanity project credentials:
```
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
VITE_SANITY_STUDIO_PROJECT_ID=your-project-id
VITE_SANITY_STUDIO_DATASET=production
```

4. Start the development server:
```sh
npm run dev
```

The app will be available at `http://localhost:8080`

### Sanity Studio

Access the Sanity Studio content management interface at:
- Local: `http://localhost:8080/studio`
- Production: `https://yoursite.com/studio`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run sanity` - Start Sanity Studio (standalone)
- `npm run sanity:deploy` - Deploy Sanity Studio to sanity.studio
- `npm run sanity:manage` - Open Sanity project management

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React context providers
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions and configurations
│   ├── pages/          # Page components
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── sanity.config.ts    # Sanity CMS configuration
├── vite.config.ts      # Vite configuration
└── vercel.json         # Vercel deployment configuration
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings
4. Deploy!

### Environment Variables for Production

Make sure to set these in your Vercel project settings:
- `VITE_SANITY_PROJECT_ID`
- `VITE_SANITY_DATASET`
- `VITE_SANITY_STUDIO_PROJECT_ID`
- `VITE_SANITY_STUDIO_DATASET`

### CORS Configuration

Add your production domain to Sanity CORS origins:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Navigate to API → CORS Origins
4. Add your Vercel domain

## License

All rights reserved.

## Contact

For inquiries, please contact [your-email@example.com]
