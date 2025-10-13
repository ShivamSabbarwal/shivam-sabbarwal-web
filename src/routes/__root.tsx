import { createRootRoute, Outlet, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import MainLayout from "@/components/layout/MainLayout";
import BasicLayout from "@/components/layout/BasicLayout";

const AppContent = () => {
  const location = useLocation();
  const isResumePage = location.pathname === "/resume";
  const is404Page = location.pathname === "/404";

  if (isResumePage || is404Page) {
    return (
      <BasicLayout>
        <Outlet />
      </BasicLayout>
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
      <ThemeProvider>
        <AppContent />
        <TanStackRouterDevtools />
        <SpeedInsights debug={false} />
        <Analytics debug={false} />
      </ThemeProvider>
    </ErrorBoundary>
  ),
});
