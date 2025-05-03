
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Rocket className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Our Mission</h2>
          <p className="section-subtitle">Revolutionizing finance through innovation and integrity</p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif text-foreground/90 mb-8 leading-relaxed">
            "When Finance Stops, We Take Over."
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            At Infinity, we are committed to empowering individuals and shaping the future of global finance through innovative AI technology, exceptional service, and unwavering integrity.
          </p>
          
          <Button size="lg" asChild className="hover:scale-105 transition-transform">
            <Link to="/mission">Learn More About Our Mission</Link>
          </Button>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-infinity-50/10 to-infinity-100/10 dark:from-infinity-950/10 dark:to-infinity-900/10 z-0"></div>
    </section>
  );
}
