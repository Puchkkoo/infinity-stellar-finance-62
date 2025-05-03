
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WorldMap } from "./world-map";
import { ChartBarIcon, Map } from "lucide-react";
import { useState } from "react";

export function MarketsOverview() {
  const [activeRegion, setActiveRegion] = useState("indian");

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

  const handleRegionSelect = (region: string) => {
    setActiveRegion(region);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Map className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Global Markets</h2>
          <p className="section-subtitle">
            Stay updated with real-time market data from around the world
          </p>
        </div>

        <div className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Interactive World Markets</CardTitle>
              <CardDescription>Click on a region to view its market indices</CardDescription>
            </CardHeader>
            <CardContent className="p-0 relative">
              <div className="h-[500px] w-full relative">
                <WorldMap onRegionSelect={handleRegionSelect} />
                
                {/* 3D Popup Market Data */}
                <div className="absolute top-4 right-4 p-6 bg-white/90 dark:bg-infinity-900/90 backdrop-blur-lg rounded-xl shadow-2xl border border-infinity-200 dark:border-infinity-800 w-72 transform transition-all duration-500 animate-fade-in z-50">
                  <h3 className="text-lg font-serif font-semibold mb-3 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-infinity-500 mr-2"></span>
                    {activeRegion.charAt(0).toUpperCase() + activeRegion.slice(1)} Markets
                  </h3>
                  
                  <div className="space-y-3">
                    {marketIndices[activeRegion as keyof typeof marketIndices].map((index, i) => (
                      <div key={i} className="flex justify-between items-center p-2 bg-white/50 dark:bg-infinity-800/30 rounded-lg">
                        <span className="font-medium">{index.name}</span>
                        <div className="flex items-center">
                          <span className="font-semibold mr-2">{index.value}</span>
                          <span className={`${index.changeClass}`}>
                            {index.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 3D Effect Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none rounded-xl"></div>
                  <div className="absolute -bottom-2 -right-2 w-full h-full bg-infinity-200/20 dark:bg-infinity-700/10 rounded-xl transform rotate-2 -z-10"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-infinity-200/10 dark:bg-infinity-700/5 rounded-xl transform rotate-3 -z-20"></div>
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
                  <Card key={index.name} className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg group-hover:text-infinity-600 dark:group-hover:text-infinity-400 transition-colors">{index.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-baseline">
                        <span className="text-2xl font-bold">{index.value}</span>
                        <span className={`font-medium ${index.changeClass}`}>
                          {index.change}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
