# Moin Portfolio Website 🚀

A modern, high-performance portfolio website showcasing digital marketing expertise and web development skills. Built with cutting-edge technologies and designed for optimal user experience.

## 🌟 Features

- **Modern Design**
  - Responsive layout for all devices
  - Smooth animations and transitions
  - Glass-morphism effects
  - Dark/Light mode support

- **Core Sections**
  - Dynamic Hero Section
  - Service Showcase
  - Case Studies Gallery
  - Interactive Contact Form

- **Performance**
  - Next.js 14 with App Router
  - Optimized images and assets
  - Lazy loading components
  - Fast page transitions

- **Technologies**
  - Next.js 14
  - TypeScript
  - Material UI
  - GSAP Animations
  - Responsive Design
  - SEO Optimized

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/weir1/moin-portfolio-2024.git
cd moin-portfolio-2024
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
moin-portfolio-2024/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/              # UI components
│   └── sections/        # Page sections
├── lib/                 # Utility functions
│   ├── animations/      # Animation utilities
│   └── utils/           # Helper functions
├── public/              # Static assets
├── styles/              # Global styles
└── types/               # TypeScript types
```

## 🛠️ Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

### Code Style

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety

## 📱 Responsive Design

- Mobile First approach
- Breakpoints:
  - Mobile: 320px - 480px
  - Tablet: 481px - 768px
  - Desktop: 769px - 1024px
  - Large Desktop: 1025px+

## 🎨 Design System

- Modern color palette
- Consistent typography
- Reusable components
- Smooth animations

## 🌟 Animation Library

The project includes a custom animation library built with GSAP:

### Features

- Scroll-triggered animations
- Mouse follow effects
- Text reveal animations
- Parallax effects
- Staggered animations

### Usage

```tsx
import { useScrollAnimation, AnimatedSection } from '@/lib/animations';

// Using hooks
const MyComponent = () => {
  const ref = useRef(null);
  useScrollAnimation(ref, { type: 'fadeInUp' });
  
  return <div ref={ref}>Animated content</div>;
};

// Using components
const MyPage = () => {
  return (
    <AnimatedSection animation="fadeInUp" delay={0.2}>
      <h2>This section animates on scroll</h2>
    </AnimatedSection>
  );
};
```

For more details, see the [Animation Library Documentation](./src/lib/animations/README.md).

## 🔍 SEO

- Meta tags optimization
- Schema markup
- Sitemap generation
- Performance optimization

## 📈 Analytics

- Google Analytics 4
- Performance monitoring
- User behavior tracking
- Conversion tracking

## 🚀 Deployment

- Vercel deployment
- Environment configuration
- Performance monitoring
- Error tracking

## 📝 License

This project is private and proprietary. All rights reserved.

## 👤 Author

**Moin**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Upwork: [Your Upwork Profile]

---

Built with ❤️ using Next.js and Modern Web Technologies