import type { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <Navigation />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
