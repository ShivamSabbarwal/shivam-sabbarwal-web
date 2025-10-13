import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Route as NotFoundRoute } from './routes/404'
import "./globals.css";

// Create a new router instance
const router = createRouter({ 
  routeTree,
  defaultNotFoundComponent: NotFoundRoute.options.component
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
