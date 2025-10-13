import type { ReactNode } from "react";
import Cursor from "@/components/interactive/Cursor";
import FloatingBubbles from "@/components/interactive/FloatingBubbles";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { PERFORMANCE } from "@/constants";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <FloatingBubbles count={PERFORMANCE.FLOATING_BUBBLES_COUNT} />
      <Navigation />
      <Cursor />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
