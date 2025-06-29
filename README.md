# Jahnavi Singh's Portfolio

A beautiful, Pinterest-style portfolio website showcasing data science projects, skills, and experience. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Responsive design with a Pinterest-style masonry grid layout
- Beautiful animations and transitions
- Project showcase with detailed cards
- Skills section with interactive tags
- Experience timeline
- Certifications display
- Contact form
- Mobile-friendly navigation

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Intersection Observer

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── ProjectCard.tsx
│   │   └── CertificationCard.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   └── projects/
├── package.json
└── README.md
```

## Customization

1. Update the content in `app/page.tsx` with your personal information
2. Add your project images to the `public/projects` directory
3. Modify the color scheme in `tailwind.config.ts`
4. Update the fonts and styles in `app/globals.css`

## Deployment

The site can be easily deployed to Vercel:

```bash
npm run build
```

## License

MIT License - feel free to use this template for your own portfolio!
