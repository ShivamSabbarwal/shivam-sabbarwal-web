import type { ReactNode } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
