
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/60"></div>
      
      {/* Galaxy background */}
      <div className="absolute inset-0 opacity-30 dark:opacity-60">
        <div className="galaxy-background"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            <span className="font-serif">Infinity</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-infinity-600 via-infinity-500 to-infinity-700">
              Financial Capital
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Empowering your financial journey with cutting-edge technology, expert insights, and a suite of innovative products designed for the modern investor.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <Link to="/markets">Explore Markets</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-infinity-600 dark:text-infinity-500">
                180+
              </div>
              <div className="text-muted-foreground">Global Markets</div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-bold text-infinity-600 dark:text-infinity-500">
                24/7
              </div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
