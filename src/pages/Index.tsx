
import React, { useEffect } from "react";
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
import { ScrollToTop } from "@/components/scroll-to-top";

const Index = () => {
  // Scroll to top function when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
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
