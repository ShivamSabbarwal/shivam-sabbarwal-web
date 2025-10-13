import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import MainLayout from "@/components/layout/MainLayout";
import ResumeLayout from "@/components/layout/ResumeLayout";

const AppContent = () => {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";

  if (isResumePage) {
    return (
      <ResumeLayout>
        <Outlet />
      </ResumeLayout>
    );
  }

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <LoadingProvider>
            <AppContent />
            <TanStackRouterDevtools />
            <SpeedInsights debug={false} />
            <Analytics debug={false} />
          </LoadingProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  ),
});
