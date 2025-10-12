import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
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
    <ThemeProvider>
      <LoadingProvider>
        <AppContent />
        <TanStackRouterDevtools />
      </LoadingProvider>
    </ThemeProvider>
  ),
});
