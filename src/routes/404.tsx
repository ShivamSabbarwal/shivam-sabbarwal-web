import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/404')({
  component: () => (
    <>
      <SEO 
        title="Page Not Found - Shivam Sabbarwal"
        description="The page you're looking for doesn't exist. Return to Shivam Sabbarwal's portfolio homepage."
        url="https://shivamsabbarwal.com/404"
        type="website"
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="text-center space-y-8 px-4">
          <div className="space-y-4">
            <h1 className="text-9xl font-black text-primary/20">404</h1>
            <h2 className="text-4xl font-bold text-foreground">Page Not Found</h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="font-semibold" onClick={() => window.history.back()}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </>
  ),
})
