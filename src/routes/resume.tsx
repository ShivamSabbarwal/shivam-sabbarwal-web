import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import Resume from '@/components/resume'

export const Route = createFileRoute('/resume')({
  component: () => {
    useEffect(() => {
      // Add resume class to body for styling
      document.body.classList.add('resume-page')
      return () => {
        document.body.classList.remove('resume-page')
      }
    }, [])

    return (
      <div className="min-h-screen bg-gray-100">
        {/* Resume Component */}
        <Resume />
      </div>
    )
  },
})
