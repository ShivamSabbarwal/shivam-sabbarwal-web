import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Timeline from "@/components/sections/Timeline";
import TechStack from "@/components/sections/TechStack";
import CreativeProjects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/interactive/ScrollProgress";
import Cursor from "@/components/interactive/Cursor";
import FloatingBubbles from "@/components/interactive/FloatingBubbles";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LoadingProvider, useLoading } from "@/contexts/LoadingContext";

const AppContent = () => {
  const { isLoading } = useLoading();

  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen />
      <ScrollProgress />
      <Cursor />
      <FloatingBubbles count={6} />
      {!isLoading && <Navigation />}
      <Hero />
      <Timeline />
      <TechStack />
      <CreativeProjects />
      <Contact />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
