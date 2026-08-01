import Link from "next/link";
import { LuHouse } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="hero-glow absolute w-[500px] h-[500px] top-[20%] left-[10%]" />
      <div className="hero-glow absolute w-[400px] h-[400px] bottom-[15%] right-[10%] opacity-50" />

      <div className="text-center space-y-8 px-4 relative">
        <div className="space-y-6">
          <h1 className="text-7xl sm:text-9xl font-normal tracking-tight text-primary/20">404</h1>
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-foreground">
            Page not found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex justify-center">
          <Button render={<Link href="/" />} nativeButton={false} size="lg">
            <LuHouse className="w-4 h-4 mr-2" />
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
}
