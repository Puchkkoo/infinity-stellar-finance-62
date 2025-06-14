
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorldMap } from "./world-map";
import { Map } from "lucide-react";
import MarketDetail from "./market-detail";
import StockTicker from "./stock-ticker";

export function MarketsOverview() {
  const [activeRegion, setActiveRegion] = useState("indian");
  const [selectedMarket, setSelectedMarket] = useState(null);

  // Sample market indices data
  const marketIndices = {
    indian: [
      { name: "NIFTY 50", value: "21,843.24", change: "+1.25%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "SENSEX", value: "71,394.88", change: "+1.31%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "NIFTY BANK", value: "48,259.30", change: "+0.89%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "NIFTY IT", value: "35,612.75", change: "+1.56%", changeClass: "text-green-600 dark:text-green-400" }
    ],
    usa: [
      { name: "S&P 500", value: "5,143.12", change: "+0.75%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "DOW JONES", value: "38,612.25", change: "+0.67%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "NASDAQ", value: "17,321.85", change: "+0.93%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "RUSSELL 2000", value: "2,122.18", change: "-0.12%", changeClass: "text-red-600 dark:text-red-400" }
    ],
    european: [
      { name: "STOXX 600", value: "512.34", change: "+0.42%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "DAX", value: "18,321.05", change: "+0.62%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "CAC 40", value: "8,052.32", change: "+0.38%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "FTSE 100", value: "8,142.18", change: "+0.45%", changeClass: "text-green-600 dark:text-green-400" }
    ],
    asian: [
      { name: "NIKKEI 225", value: "39,523.55", change: "+1.10%", changeClass: "text-green-600 dark:text-green-400" },
      { name: "HANG SENG", value: "19,832.12", change: "-0.24%", changeClass: "text-red-600 dark:text-red-400" },
      { name: "SHANGHAI", value: "3,291.19", change: "-0.18%", changeClass: "text-red-600 dark:text-red-400" },
      { name: "KOSPI", value: "2,752.30", change: "+0.73%", changeClass: "text-green-600 dark:text-green-400" }
    ]
  };

  const handleMarketClick = (marketName) => {
    setSelectedMarket(marketName);
    window.scrollTo(0, 0); // Scroll to top when viewing market details
  };

  const handleCloseMarketDetail = () => {
    setSelectedMarket(null);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Map className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Global Markets</h2>
          <p className="section-subtitle">
            Stay updated with real-time market data from around the world
          </p>
        </div>
        
        {/* Stock Ticker */}
        <div className="mb-8">
          <StockTicker />
        </div>

        {selectedMarket ? (
          <MarketDetail market={selectedMarket} onClose={handleCloseMarketDetail} />
        ) : (
          <>
            <div className="mb-12">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Interactive World Markets</CardTitle>
                  <CardDescription>Click on a country to view its market indices</CardDescription>
                </CardHeader>
                <CardContent className="p-0 relative">
                  {/* Map container */}
                  <div className="h-[450px] w-full relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <WorldMap />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue={activeRegion} value={activeRegion} onValueChange={setActiveRegion} className="w-full">
              <TabsList className="grid grid-cols-4 w-full max-w-xl mx-auto mb-8">
                <TabsTrigger value="indian">Indian</TabsTrigger>
                <TabsTrigger value="usa">USA</TabsTrigger>
                <TabsTrigger value="european">European</TabsTrigger>
                <TabsTrigger value="asian">Asian</TabsTrigger>
              </TabsList>
              
              {Object.keys(marketIndices).map((region) => (
                <TabsContent key={region} value={region}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {marketIndices[region as keyof typeof marketIndices].map((index) => (
                      <Card 
                        key={index.name} 
                        className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                        onClick={() => handleMarketClick(index.name)}
                      >
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg group-hover:text-infinity-600 dark:group-hover:text-infinity-400 transition-colors">
                            {index.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-baseline">
                            <span className="text-2xl font-bold">{index.value}</span>
                            <span className={`font-medium ${index.changeClass}`}>
                              {index.change}
                            </span>
                          </div>
                          <div className="mt-2 text-xs text-muted-foreground group-hover:text-infinity-600/70 dark:group-hover:text-infinity-400/70 transition-colors">
                            Click to view all companies
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </>
        )}
      </div>
    </section>
  );
}
