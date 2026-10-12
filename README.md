# Kabod Bible College Website

A production-ready Next.js 14 website for Kabod Bible College, built with App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Playfair Display (headings) via `next/font/google`

## Brand Colors

| Color          | Hex       |
| -------------- | --------- |
| Purple         | `#5B2D90` |
| Purple Light   | `#7B4DB0` |
| Purple Dark    | `#3D1E60` |
| Gold           | `#F5B800` |
| Gold Light     | `#FFD040` |
| Gold Dark      | `#C99000` |

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── app/                    # Next.js App Router pages & layouts
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Global loading UI
│   ├── error.tsx           # Global error UI
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Page sections (Hero, About, Programs, etc.)
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions & constants
├── public/
│   └── images/             # Static image assets
└── types/                  # TypeScript type definitions
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in values:

```bash
cp .env.local.example .env.local
```
