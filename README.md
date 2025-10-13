# Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer

A modern, interactive portfolio website showcasing my journey as a Senior Software Engineer with over 7 years of experience in full-stack development, modern web technologies, and technical leadership. Built with React, TypeScript, and Tailwind CSS featuring smooth animations, SEO optimization, and a professional design.

## 🚀 Features

- **Professional Portfolio**: Comprehensive timeline showcasing 7+ years of software engineering experience
- **Interactive Resume**: Dedicated resume page with downloadable PDF functionality
- **Interactive Timeline**: Chronological career journey from education to current leadership roles
- **Project Showcase**: Featured projects including Regent Motel and personal portfolio
- **Modern Design**: Dark theme with smooth animations and professional aesthetics
- **Responsive Layout**: Optimized for all device sizes with mobile-first approach
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Optimized**: Comprehensive SEO with structured data and meta tags
- **Sound Effects**: Interactive audio feedback for enhanced user experience
- **Analytics Ready**: Integrated with Vercel Analytics and Speed Insights

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 with TypeScript
- **Routing**: TanStack Router with file-based routing
- **Styling**: Tailwind CSS 4 with custom design system
- **Animations**: Motion (Framer Motion v12)
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite 7 with optimized bundling
- **Package Manager**: Bun
- **Analytics**: Vercel Analytics & Speed Insights

### Development Tools
- **Linting**: ESLint with TypeScript support
- **Type Checking**: TypeScript 5.8
- **Code Quality**: ESLint plugins for React hooks and refresh
- **Build Optimization**: Manual chunk splitting for better performance

### Professional Experience
- **Languages**: JavaScript, TypeScript, Python, C#, SQL
- **Frontend**: React.js, Redux, TailwindCSS, Radix UI, D3.js, Recharts
- **Backend**: Node.js, Express.js, Python, Django, Flask
- **Database**: PostgreSQL, MongoDB, SQL Server
- **Cloud & Infrastructure**: AWS, WebSockets, WebRTC, Docker
- **Architecture**: Microservices, ETL Pipelines, RESTful APIs

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/             # Navigation, Footer, MainLayout, BasicLayout
│   ├── sections/           # Hero, Timeline, TechStack, Projects, Contact
│   ├── interactive/        # Cursor, FloatingBubbles
│   ├── resume/            # Resume page components (Header, Experience, Education, etc.)
│   ├── ui/                # Reusable UI components (Radix UI primitives)
│   ├── SEO.tsx            # SEO component with structured data
│   └── ErrorBoundary.tsx  # Error boundary component
├── routes/                # TanStack Router (Home, Resume, 404)
├── contexts/              # Theme context
├── config/                # SEO configuration
├── constants/             # App constants
├── hooks/                 # Custom React hooks
├── lib/                   # Utils, audio effects, and utilities
├── main.tsx               # App entry point
└── globals.css            # Global styles and theme
```

## 🎨 Design Features

### Cartoon/3D Aesthetics
- Dark background with subtle gradients
- Angular card design with 3D shadows
- Cartoon-style borders and effects
- TikTok-inspired 3D button styling
- Custom color scheme with cartoon highlights

### Animations
- Smooth scroll animations with intersection observer
- Floating elements and particle systems
- Hover effects and micro-interactions
- Loading screen with progress animation
- Cartoon-style hover animations

### Interactive Elements
- Custom cursor that responds to hover states
- Mobile navigation sheet
- Animated navigation with active section highlighting
- Particle background for visual depth
- Sound effects on interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ShivamSabbarwal/shivam-sabbarwal-web.git
cd shivam-sabbarwal-web
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `bun run dev` - Start development server with hot reload
- `bun run build` - Build for production with TypeScript compilation
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint for code quality checks

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 🎯 Sections

- **Hero**: Professional introduction with skill badges and interactive elements
- **Timeline**: Career journey from 2014-2025 with current roles and achievements
- **Tech Stack**: Technology showcase with interactive cards and hover effects
- **Projects**: Featured projects including Regent Motel and personal portfolio
- **Contact**: Contact form with validation and social links
- **Resume**: Dedicated resume page with downloadable PDF functionality

## 🚀 Deployment

### Vercel Deployment

This project is optimized for deployment on Vercel with the following configuration:

- **Framework**: Vite (React)
- **Build Command**: `bun run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x
- **Analytics**: Vercel Analytics and Speed Insights enabled

### Deployment Steps

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. The build process will use the optimized Vite configuration with manual chunk splitting
4. Analytics and Speed Insights are automatically configured

### Environment Variables

No environment variables are required for basic deployment. The project uses public APIs and static content.

## 🎨 Customization

### Colors
Custom cartoon color scheme in `globals.css`:
- **Primary**: Purple (#8b5cf6)
- **Accent**: Cyan (#06b6d4) 
- **Cartoon Highlight**: Amber (#f59e0b)
- **Background**: Dark blue (#0f0f23)

### Animations
- Scroll animations with Intersection Observer
- Cartoon-style hover effects
- Loading screen with progress
- Floating particle background

### Content
Update content in component files:
- `Hero.tsx`: Introduction and current roles
- `Timeline.tsx`: Career timeline and experience
- `Projects.tsx`: Featured projects
- `Contact.tsx`: Contact information

## 📱 Responsive Design

Fully responsive with mobile-first approach:
- **Mobile**: Touch navigation, optimized typography
- **Tablet**: Balanced layout and interactions  
- **Desktop**: Full feature set with animations

## 🚀 Performance & SEO

### Performance Optimizations
- **Bundle Optimization**: Manual chunk splitting for vendor, router, motion, UI, and icons
- **Code Splitting**: Automatic code splitting with TanStack Router
- **Lazy Loading**: Components loaded on demand
- **Motion Optimization**: Efficient Framer Motion animations with reduced bundle size
- **Vite Optimizations**: Optimized dependency pre-bundling and tree shaking
- **Analytics**: Vercel Analytics and Speed Insights for performance monitoring

### SEO Features
- **Structured Data**: JSON-LD structured data for better search engine understanding
- **Meta Tags**: Comprehensive meta tags for social sharing and search engines
- **Open Graph**: Facebook and Twitter card optimization
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling configuration
- **Manifest**: PWA manifest for mobile optimization
- **Performance**: Core Web Vitals optimization

### SEO Configuration
- **Title Templates**: Dynamic title generation for different pages
- **Meta Descriptions**: Optimized descriptions for each route
- **Keywords**: Targeted keywords for software engineering portfolio
- **Canonical URLs**: Proper canonical URL structure
- **Schema Markup**: Person and ProfilePage schema for enhanced search results

## 🔧 Development

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add to route in `src/routes/` using TanStack Router
3. Update navigation in `Navigation.tsx`
4. Add SEO configuration in `src/config/seo.config.ts`

### Styling Guidelines
- Use Tailwind CSS classes with custom design system
- Follow the established color scheme and spacing
- Maintain consistent component structure
- Use Radix UI primitives for complex components

### Code Quality
- ESLint configuration with React hooks and refresh plugins
- TypeScript strict mode enabled
- Consistent code formatting and structure
- Error boundaries for better error handling

### Audio Integration
- Sound effects for interactive elements
- Audio feedback on user interactions
- Configurable audio settings

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**Shivam Sabbarwal** - Software Engineer & CTO

- **Email**: [shivam.sabb@gmail.com](mailto:shivam.sabb@gmail.com)
- **Phone**: +1 (506) 609-0423
- **Location**: New Westminster, BC, Canada
- **LinkedIn**: [linkedin.ca/in/shivamsabbarwal](https://linkedin.ca/in/shivamsabbarwal)
- **GitHub**: [github.com/ShivamSabbarwal](https://github.com/ShivamSabbarwal)

### Current Roles
- **Software Engineer** at 3vGeomatics (Vancouver, BC)
- **Chief Technology Officer (CTO)** at Remittor (Surrey, BC)

### Project Link
[https://github.com/ShivamSabbarwal/shivam-sabbarwal-web](https://github.com/ShivamSabbarwal/shivam-sabbarwal-web)