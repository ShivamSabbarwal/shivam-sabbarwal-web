# Shivam Sabbarwal - Personal Website

A modern, web3-inspired personal website built with React, TypeScript, and Tailwind CSS. Features smooth animations, glassmorphism effects, and a clean, professional design.

## 🚀 Features

- **Modern Web3 Design**: Dark theme with purple/blue gradients and glassmorphism effects
- **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Elements**: Custom cursor, scroll progress, and particle background
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4 with custom web3 color scheme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: Bun

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Navigation.tsx      # Main navigation with smooth scrolling
│   ├── Hero.tsx           # Hero section with animated elements
│   ├── Work.tsx           # Portfolio showcase
│   ├── Experiments.tsx    # Creative experiments section
│   ├── Contact.tsx        # Contact form and information
│   ├── Footer.tsx         # Footer with social links
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   ├── Cursor.tsx         # Custom cursor component
│   ├── LoadingScreen.tsx  # Animated loading screen
│   └── ParticleBackground.tsx # Animated particle background
├── lib/
│   └── utils.ts           # Utility functions
├── globals.css            # Global styles and web3 theme
└── App.tsx               # Main application component
```

## 🎨 Design Features

### Web3 Aesthetics
- Dark background with subtle gradients
- Purple/blue color scheme with glowing effects
- Glassmorphism cards with backdrop blur
- Animated gradient text effects

### Animations
- Smooth scroll animations with intersection observer
- Floating elements and particle systems
- Hover effects and micro-interactions
- Loading screen with progress animation

### Interactive Elements
- Custom cursor that responds to hover states
- Scroll progress bar at the top
- Animated navigation with active section highlighting
- Particle background for visual depth

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
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

### Build for Production

```bash
bun run build
```

### Preview Production Build

```bash
bun run preview
```

## 🎯 Sections

### Hero Section
- Animated introduction with gradient text
- Feature highlights with icons
- Call-to-action buttons
- Floating background elements

### Work Section
- Featured projects with detailed descriptions
- Project grid with hover effects
- Technology tags and links
- Case study previews

### Experiments Section
- Creative coding projects
- Category filtering
- Interactive project cards
- Technology showcases

### Contact Section
- Contact form with validation
- Social media links
- Contact information
- Animated form interactions

## 🎨 Customization

### Colors
The website uses a custom web3 color scheme defined in `globals.css`:
- Primary: Purple/blue gradient
- Secondary: Complementary colors
- Background: Dark with subtle variations
- Accent: Bright highlights for interactive elements

### Animations
All animations are built with Framer Motion and can be customized in individual components. Key animation types:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

### Content
Update the content in each component file:
- `Hero.tsx`: Personal introduction and tagline
- `Work.tsx`: Portfolio projects and descriptions
- `Experiments.tsx`: Creative projects and experiments
- `Contact.tsx`: Contact information and social links

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Performance

- Optimized bundle size with Vite
- Lazy loading for images and components
- Efficient animations with Framer Motion
- Minimal dependencies for fast loading

## 🔧 Development

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add to `App.tsx`
3. Update navigation in `Navigation.tsx`
4. Add smooth scroll functionality

### Styling Guidelines
- Use Tailwind CSS classes for styling
- Follow the established color scheme
- Maintain consistent spacing and typography
- Use glassmorphism effects for cards and overlays

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Shivam Sabbarwal - [@your-twitter](https://twitter.com/your-twitter) - hello@shivam-sabbarwal.com

Project Link: [https://github.com/your-username/shivam-sabbarwal-web](https://github.com/your-username/shivam-sabbarwal-web)