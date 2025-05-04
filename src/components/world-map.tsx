
import { useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function WorldMap() {
  // Sample market data
  const markets = {
    india: { 
      name: "Indian Markets", 
      indices: [
        { name: "NIFTY 50", value: "21,843.24", change: "+1.25%" },
        { name: "SENSEX", value: "71,394.88", change: "+1.31%" },
        { name: "NIFTY BANK", value: "48,259.30", change: "+0.89%" }
      ]
    },
    usa: { 
      name: "USA Markets", 
      indices: [
        { name: "S&P 500", value: "5,143.12", change: "+0.75%" },
        { name: "DOW JONES", value: "38,612.25", change: "+0.67%" },
        { name: "NASDAQ", value: "17,321.85", change: "+0.93%" }
      ]
    },
    europe: { 
      name: "European Markets", 
      indices: [
        { name: "STOXX 600", value: "512.34", change: "+0.42%" },
        { name: "DAX", value: "18,321.05", change: "+0.62%" },
        { name: "FTSE 100", value: "8,142.18", change: "+0.45%" }
      ]
    },
    china: { 
      name: "Chinese Markets", 
      indices: [
        { name: "Shanghai", value: "3,291.19", change: "-0.18%" },
        { name: "Shenzhen", value: "2,058.87", change: "-0.22%" },
        { name: "CSI 300", value: "3,581.94", change: "-0.14%" }
      ]
    },
    japan: { 
      name: "Japanese Markets", 
      indices: [
        { name: "Nikkei 225", value: "39,523.55", change: "+1.10%" },
        { name: "TOPIX", value: "2,756.21", change: "+0.85%" },
        { name: "JPX-Nikkei 400", value: "24,893.47", change: "+0.92%" }
      ]
    },
    uk: { 
      name: "UK Markets", 
      indices: [
        { name: "FTSE 100", value: "8,142.18", change: "+0.38%" },
        { name: "FTSE 250", value: "21,587.52", change: "+0.42%" },
        { name: "FTSE All-Share", value: "4,436.73", change: "+0.40%" }
      ]
    },
    germany: { 
      name: "German Markets", 
      indices: [
        { name: "DAX", value: "18,321.05", change: "+0.62%" },
        { name: "MDAX", value: "26,984.73", change: "+0.54%" },
        { name: "TecDAX", value: "3,384.92", change: "+0.48%" }
      ]
    },
    brazil: { 
      name: "Brazilian Markets", 
      indices: [
        { name: "Bovespa", value: "129,324.15", change: "-0.22%" },
        { name: "IBrX 100", value: "54,872.36", change: "-0.18%" },
        { name: "IBrX 50", value: "22,436.81", change: "-0.20%" }
      ]
    },
    australia: { 
      name: "Australian Markets", 
      indices: [
        { name: "ASX 200", value: "7,835.45", change: "+0.91%" },
        { name: "ASX 300", value: "7,628.73", change: "+0.87%" },
        { name: "All Ordinaries", value: "8,092.31", change: "+0.90%" }
      ]
    }
  };

  const [selectedMarket, setSelectedMarket] = useState<string | null>(null);

  // Function to determine the position of clickable hotspots on the map
  const getMarketPosition = (market: string) => {
    switch (market) {
      case 'india':
        return 'top-[45%] left-[68%]';
      case 'usa':
        return 'top-[35%] left-[22%]';
      case 'europe':
        return 'top-[30%] left-[50%]';
      case 'china':
        return 'top-[40%] left-[75%]';
      case 'japan':
        return 'top-[38%] left-[82%]';
      case 'uk':
        return 'top-[25%] left-[45%]';
      case 'germany':
        return 'top-[28%] left-[50%]';
      case 'brazil':
        return 'top-[65%] left-[32%]';
      case 'australia':
        return 'top-[70%] left-[85%]';
      default:
        return '';
    }
  };

  // Function to determine marker color based on market performance
  const getMarkerColor = (market: string) => {
    const marketData = markets[market as keyof typeof markets];
    if (!marketData) return 'bg-gray-400';
    
    // Calculate if more indices are positive than negative
    const positiveIndices = marketData.indices.filter(index => index.change.startsWith('+')).length;
    const isPositive = positiveIndices > marketData.indices.length / 2;
    
    return isPositive ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className="relative w-full aspect-[21/9] bg-infinity-100 dark:bg-infinity-900/30 rounded-xl overflow-hidden">
      {/* World map image */}
      <img 
        src="/lovable-uploads/e5337efd-8bfa-4ae7-9c77-4dc1b265c84a.png" 
        alt="World Map"
        className="absolute inset-0 w-full h-full object-contain" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-infinity-100/40 dark:to-infinity-900/50"></div>

      {/* Market hotspots */}
      {Object.keys(markets).map((market) => (
        <Popover key={market}>
          <PopoverTrigger asChild>
            <button
              className={`absolute ${getMarketPosition(market)} w-5 h-5 md:w-6 md:h-6 rounded-full ${getMarkerColor(market)} animate-pulse shadow-lg hover:w-7 hover:h-7 md:hover:w-8 md:hover:h-8 transition-all duration-200 z-10 border-2 border-white/70`}
              onClick={() => setSelectedMarket(market)}
              aria-label={markets[market as keyof typeof markets]?.name}
            />
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0 backdrop-blur-sm bg-white/90 dark:bg-infinity-900/90 border border-infinity-200 dark:border-infinity-700 shadow-xl rounded-xl overflow-hidden">
            <div className="relative overflow-hidden">
              <div className={`absolute inset-0 opacity-10 ${getMarkerColor(market)} blur-md`}></div>
              <div className="p-4 space-y-3 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${getMarkerColor(market)}`}></div>
                  <h3 className="font-serif font-bold text-xl text-infinity-800 dark:text-infinity-200">
                    {markets[market as keyof typeof markets]?.name}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {markets[market as keyof typeof markets]?.indices.map((index, idx) => (
                    <div key={idx} className="flex justify-between items-center p-2 bg-white/50 dark:bg-infinity-800/30 rounded-lg hover:bg-white/80 dark:hover:bg-infinity-800/50 transition-colors">
                      <span className="font-medium">{index.name}</span>
                      <div className="flex items-center">
                        <span className="font-semibold mr-2">{index.value}</span>
                        <span className={index.change.startsWith('+') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                          {index.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-infinity-200 dark:via-infinity-700 to-transparent my-2"></div>
                
                <div className="pt-2">
                  <a 
                    href={`/markets?region=${market}`} 
                    className="text-infinity-600 dark:text-infinity-400 font-medium hover:underline flex items-center group"
                  >
                    View all indices
                    <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white/80 dark:bg-infinity-900/80 backdrop-blur-sm p-3 rounded-lg text-xs shadow-lg border border-infinity-200 dark:border-infinity-700">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-green-500 border border-white/70"></div>
          <span className="font-medium">Positive growth</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-white/70"></div>
          <span className="font-medium">Negative growth</span>
        </div>
      </div>
    </div>
  );
}
