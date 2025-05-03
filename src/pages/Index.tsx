
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ProductsSection } from "@/components/products-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturesSection } from "@/components/features-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { MissionSection } from "@/components/mission-section";
import { NewsSection } from "@/components/news-section";
import { MarketsOverview } from "@/components/markets-overview";

const Index = () => {
  // Scroll to top function for all button clicks
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener when component mounts
  React.useEffect(() => {
    // Add click listener to all buttons and links
    const buttons = document.querySelectorAll('button, a');
    buttons.forEach(button => {
      button.addEventListener('click', scrollToTop);
    });

    // Cleanup function
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', scrollToTop);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <MissionSection />
        <ProductsSection />
        <ServicesSection />
        <FeaturesSection />
        <MarketsOverview />
        <RoadmapSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
