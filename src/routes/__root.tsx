import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import ScrollProgress from "@/components/interactive/ScrollProgress";
import Cursor from "@/components/interactive/Cursor";
import FloatingBubbles from "@/components/interactive/FloatingBubbles";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const AppContent = () => {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  return (
    <div className="min-h-screen bg-background">
      {!isResumePage && (
        <>
          <LoadingScreen />
          <ScrollProgress />
          <FloatingBubbles count={12} />
          <Navigation />
          <Cursor />
        </>
      )}
      <Outlet />
      {!isResumePage && <Footer />}
    </div>
  );
};

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <ThemeProvider>
        <LoadingProvider>
          <AppContent />
          <TanStackRouterDevtools />
          <SpeedInsights />
          <Analytics />
        </LoadingProvider>
      </ThemeProvider>
    </ErrorBoundary>
  ),
});
