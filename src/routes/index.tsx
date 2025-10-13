import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/sections/Hero'
import Timeline from '@/components/sections/Timeline'
import TechStack from '@/components/sections/TechStack'
import CreativeProjects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import SEO from '@/components/SEO'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <SEO 
        title="Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer"
        description="Experienced full-stack software engineer with 7+ years building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies. Available for consulting and new opportunities."
        keywords="software engineer, full-stack developer, React, Node.js, TypeScript, web development, software consultant, Shivam Sabbarwal, portfolio"
        url="https://shivamsabbarwal.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shivam Sabbarwal",
          "jobTitle": "Senior Software Engineer",
          "description": "Full-stack software engineer with over 7 years of experience building scalable web applications and innovative digital solutions",
          "url": "https://shivamsabbarwal.com",
          "image": "https://shivamsabbarwal.com/assets/profile-pic.jpg",
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
        }}
      />
      <Hero />
      <Timeline />
      <TechStack />
      <CreativeProjects />
      <Contact />
    </>
  ),
})
