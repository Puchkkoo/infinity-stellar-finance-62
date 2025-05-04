
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GalaxyBackground } from "./galaxy-background";

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Dark background */}
      <div className="absolute inset-0 bg-[#0B0A13]"></div>
      
      {/* Star/Galaxy background */}
      <div className="absolute inset-0">
        <GalaxyBackground />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-4 text-infinity-400/80">
            <p>The Future of Financial Technology</p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            <span className="text-infinity-500">Infinity</span>{" "}
            <span className="text-white">Financial</span>
            <br />
            <span className="text-white">Capital</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Empowering individuals through innovative financial solutions. Where modern technology meets traditional financial wisdom.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-infinity-500 hover:bg-infinity-600">
              <Link to="/products">Explore Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-16 max-w-md mx-auto">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                128+
              </div>
              <div className="text-gray-400">Global Markets</div>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                24/7
              </div>
              <div className="text-gray-400">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
