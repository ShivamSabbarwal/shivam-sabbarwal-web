import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/sections/Hero'
import Timeline from '@/components/sections/Timeline'
import TechStack from '@/components/sections/TechStack'
import CreativeProjects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import SEO from '@/components/SEO'
import { getHomeSEO } from '@/config/seo.config'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <SEO {...getHomeSEO()} />
      <Hero />
      <Timeline />
      <TechStack />
      <CreativeProjects />
      <Contact />
    </>
  ),
})
