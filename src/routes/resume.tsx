import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import Resume from '@/components/resume'
import SEO from '@/components/SEO'
import { getFullUrl } from '@/lib/utils'

export const Route = createFileRoute('/resume')({
  component: () => {
    useEffect(() => {
      // Add resume class to body for styling
      document.body.classList.add('resume-page')
      return () => {
        document.body.classList.remove('resume-page')
      }
    }, [])

    const resumeUrl = getFullUrl('/resume');

    return (
      <>
        <SEO 
          title="Resume - Shivam Sabbarwal"
          description="Download Shivam Sabbarwal's resume. Senior Software Engineer with 7+ years of experience in full-stack development, React, Node.js, TypeScript, and modern web technologies."
          keywords="resume, CV, software engineer resume, full-stack developer resume, Shivam Sabbarwal resume, software engineer CV"
          url={resumeUrl}
          type="profile"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "name": "Shivam Sabbarwal Resume",
            "description": "Professional resume of Shivam Sabbarwal, Senior Software Engineer",
            "url": resumeUrl,
            "mainEntity": {
              "@type": "Person",
              "name": "Shivam Sabbarwal",
              "jobTitle": "Senior Software Engineer",
              "description": "Full-stack software engineer with over 7 years of experience"
            }
          }}
        />
        <div className="min-h-screen bg-gray-100">
          {/* Resume Component */}
          <Resume />
        </div>
      </>
    )
  },
})
