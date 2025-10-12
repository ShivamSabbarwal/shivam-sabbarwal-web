import { createFileRoute } from '@tanstack/react-router'
import Hero from '@/components/sections/Hero'
import Timeline from '@/components/sections/Timeline'
import TechStack from '@/components/sections/TechStack'
import CreativeProjects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'

export const Route = createFileRoute('/')({
  component: () => (
    <>
      <Hero />
      <Timeline />
      <TechStack />
      <CreativeProjects />
      <Contact />
    </>
  ),
})
