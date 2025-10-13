import type { SEOProps } from '@/components/SEO'
import { getFullUrl, getBaseUrl } from '@/lib/utils'

// Create a function that returns SEO config with dynamic URLs
export const getHomeSEO = (): SEOProps => {
  const baseUrl = getBaseUrl();
  const fullUrl = getFullUrl();
  
  return {
    title: "Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer",
    description: "Experienced full-stack software engineer with 7+ years building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies. Available for consulting and new opportunities.",
    keywords: "software engineer, full-stack developer, React, Node.js, TypeScript, web development, software consultant, Shivam Sabbarwal, portfolio",
    url: fullUrl,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shivam Sabbarwal",
      "jobTitle": "Senior Software Engineer",
      "description": "Full-stack software engineer with over 7 years of experience building scalable web applications and innovative digital solutions",
      "url": fullUrl,
      "image": `${baseUrl}/assets/profile-pic.jpg`,
      "sameAs": [
        "https://github.com/shivamsabbarwal",
        "https://linkedin.com/in/shivamsabbarwal"
      ],
      "knowsAbout": [
        "Software Engineering",
        "Full-Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Web Development",
        "Software Architecture"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Software Engineer",
        "description": "Full-stack software engineer specializing in modern web technologies"
      }
    }
  }
}

// For backward compatibility, export a default instance
export const homeSEO = getHomeSEO();
