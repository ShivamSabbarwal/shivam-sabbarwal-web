import { createFileRoute, Link } from "@tanstack/react-router";
import SEO from '@/components/SEO'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import { getFullUrl } from '@/lib/utils'
import Cursor from '@/components/interactive/Cursor'
import FloatingBubbles from '@/components/interactive/FloatingBubbles'
import { PERFORMANCE } from '@/constants'

export const Route = createFileRoute('/404')({
  component: () => {
    const notFoundUrl = getFullUrl('/404');
    
    return (
      <>
        <SEO 
          title="Page Not Found - Shivam Sabbarwal"
          description="The page you're looking for doesn't exist. Return to Shivam Sabbarwal's portfolio homepage."
          url={notFoundUrl}
          type="website"
        />
        <FloatingBubbles count={PERFORMANCE.FLOATING_BUBBLES_COUNT} />
        <Cursor />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="text-center space-y-8 px-4">
          <div className="space-y-6">
            <div className="relative">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-primary/20 animate-bounce">404</h1>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Houston, we have a problem!</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto px-2">
              Looks like this page went on vacation without telling anyone! 🏖️
              Maybe it's hiding behind the couch? Or perhaps it got lost in the WiFi? 📶
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button asChild size="lg" className="font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 transition-all duration-300 transform hover:scale-105">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Beam Me Home, Scotty!
              </Link>
            </Button>
          </div>
          
          <div className="text-sm text-muted-foreground/60 max-w-md mx-auto">
            <p>💡 <strong>Pro tip:</strong> Try not to break the internet next time! 😄</p>
          </div>
        </div>
      </div>
    </>
    )
  },
})
