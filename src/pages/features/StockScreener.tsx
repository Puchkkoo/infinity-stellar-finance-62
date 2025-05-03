
import React, { useState, useEffect } from "react";
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Search, ArrowUpRight, ArrowDownRight, BarChart3, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useNavigate } from "react-router-dom";

const StockScreener = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [peRange, setPeRange] = useState([0, 100]);
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading stock data
    setTimeout(() => {
      setStocks(sampleStocks);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter stocks based on search term and filters
  const filteredStocks = stocks.filter(stock => {
    const matchesSearch = stock.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         stock.sector.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filter === "all" || 
                         (filter === "gainers" && stock.change > 0) ||
                         (filter === "losers" && stock.change < 0);
    
    const matchesPriceRange = stock.price >= priceRange[0] && stock.price <= priceRange[1];
    const matchesPeRange = stock.pe >= peRange[0] && stock.pe <= peRange[1];
    
    return matchesSearch && matchesFilter && matchesPriceRange && matchesPeRange;
  });

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="container mx-auto px-4 pt-4">
        <Button 
          variant="outline" 
          size="sm" 
          className="mb-4 flex items-center gap-1"
          onClick={handleBackClick}
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
      </div>
      <FeaturePageTemplate
        title="AI Stock Screener"
        subtitle="Find the perfect stocks for your portfolio with our advanced AI-powered screening tools"
        icon={<Search className="h-8 w-8 text-pink-600 dark:text-pink-400" />}
        description={[
          "Flamingo's Stock Screener uses artificial intelligence to help you discover investment opportunities across over 5,000 listed companies.",
          "Our advanced filtering system allows you to search for stocks based on fundamentals, technical indicators, and proprietary AI sentiment scores derived from news and social media analysis.",
          "Whether you're looking for value stocks, momentum plays, or dividend generators, our AI-powered screener helps you find exactly what you need in seconds."
        ]}
        image="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
        benefits={[
          {
            title: "AI-Enhanced Screening",
            description: "Our proprietary algorithms analyze market data, news, and social sentiment to surface opportunities you might miss."
          },
          {
            title: "Comprehensive Coverage",
            description: "Screen over 5,000 stocks across major exchanges with real-time data and deep historical analytics."
          },
          {
            title: "Custom Screening Templates",
            description: "Save your favorite screening criteria as templates or use our pre-built strategies for quick analysis."
          },
          {
            title: "Technical Pattern Recognition",
            description: "Automatically detect chart patterns and technical setups across thousands of stocks in seconds."
          },
          {
            title: "Fundamental Analysis",
            description: "Filter by hundreds of fundamental metrics including P/E ratio, dividend yield, profit margins, and more."
          },
          {
            title: "Export & Integration",
            description: "Export your screener results or send them directly to your Flamingo watchlist or portfolio."
          }
        ]}
      >
        <div className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-pink-200 dark:border-pink-800/30 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center">
                  <Search className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-2" />
                  Stock Screener
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Search and filter controls */}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Input
                        placeholder="Search by name, symbol, or sector..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div className="w-full md:w-48">
                      <Select value={filter} onValueChange={setFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Filter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Stocks</SelectItem>
                          <SelectItem value="gainers">Top Gainers</SelectItem>
                          <SelectItem value="losers">Top Losers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Advanced filters */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
                      <Slider 
                        min={0} 
                        max={5000} 
                        step={100} 
                        value={priceRange} 
                        onValueChange={setPriceRange} 
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">P/E Ratio: {peRange[0]} - {peRange[1]}</label>
                      <Slider 
                        min={0} 
                        max={100} 
                        step={1} 
                        value={peRange} 
                        onValueChange={setPeRange} 
                      />
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mt-6">
                    <h3 className="font-medium mb-2">Showing {filteredStocks.length} results</h3>
                    
                    {loading ? (
                      <div className="flex justify-center items-center p-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
                      </div>
                    ) : (
                      <div className="rounded-md border overflow-hidden">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Symbol</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead>Change</TableHead>
                              <TableHead>P/E</TableHead>
                              <TableHead>Sector</TableHead>
                              <TableHead>AI Score</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredStocks.map((stock) => (
                              <TableRow key={stock.symbol}>
                                <TableCell className="font-medium">{stock.symbol}</TableCell>
                                <TableCell>{stock.name}</TableCell>
                                <TableCell>₹{stock.price.toFixed(2)}</TableCell>
                                <TableCell className={stock.change > 0 ? "text-green-600" : "text-red-600"}>
                                  <div className="flex items-center">
                                    {stock.change > 0 ? 
                                      <ArrowUpRight className="h-3 w-3 mr-1" /> : 
                                      <ArrowDownRight className="h-3 w-3 mr-1" />}
                                    {stock.change.toFixed(2)}%
                                  </div>
                                </TableCell>
                                <TableCell>{stock.pe.toFixed(2)}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">{stock.sector}</Badge>
                                </TableCell>
                                <TableCell>
                                  <div className={`font-semibold ${
                                    stock.aiScore >= 8 ? "text-green-600" :
                                    stock.aiScore >= 5 ? "text-amber-600" :
                                    "text-red-600"
                                  }`}>
                                    {stock.aiScore}/10
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </FeaturePageTemplate>
    </div>
  );
};

// Sample stock data
const sampleStocks = [
  { symbol: "RELIANCE", name: "Reliance Industries", price: 2934.75, change: 1.25, pe: 28.5, sector: "Energy", aiScore: 8.5 },
  { symbol: "TCS", name: "Tata Consultancy Services", price: 3502.60, change: -0.78, pe: 35.2, sector: "IT", aiScore: 7.8 },
  { symbol: "HDFCBANK", name: "HDFC Bank", price: 1678.90, change: 0.43, pe: 22.6, sector: "Banking", aiScore: 9.2 },
  { symbol: "INFY", name: "Infosys", price: 1432.50, change: -1.52, pe: 28.1, sector: "IT", aiScore: 6.7 },
  { symbol: "HDFC", name: "Housing Development Finance Corp", price: 2765.80, change: 0.82, pe: 18.4, sector: "Financial Services", aiScore: 7.9 },
  { symbol: "ICICIBANK", name: "ICICI Bank", price: 954.30, change: 1.05, pe: 21.8, sector: "Banking", aiScore: 8.3 },
  { symbol: "SBIN", name: "State Bank of India", price: 589.75, change: -0.34, pe: 12.6, sector: "Banking", aiScore: 7.1 },
  { symbol: "HINDUNILVR", name: "Hindustan Unilever", price: 2435.60, change: 0.28, pe: 65.3, sector: "FMCG", aiScore: 6.9 },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: 865.20, change: 1.67, pe: 36.8, sector: "Telecom", aiScore: 8.1 },
  { symbol: "ITC", name: "ITC Limited", price: 432.10, change: -0.61, pe: 25.4, sector: "FMCG", aiScore: 6.5 },
  { symbol: "KOTAKBANK", name: "Kotak Mahindra Bank", price: 1823.40, change: 0.12, pe: 34.2, sector: "Banking", aiScore: 7.6 },
  { symbol: "ASIANPAINT", name: "Asian Paints", price: 3256.75, change: -2.15, pe: 72.5, sector: "Consumer Goods", aiScore: 5.9 },
  { symbol: "BAJFINANCE", name: "Bajaj Finance", price: 7032.80, change: 2.34, pe: 40.6, sector: "Financial Services", aiScore: 8.7 },
  { symbol: "MARUTI", name: "Maruti Suzuki India", price: 9845.50, change: 0.65, pe: 32.7, sector: "Automobile", aiScore: 7.3 },
  { symbol: "TITAN", name: "Titan Company", price: 2543.25, change: -0.88, pe: 74.3, sector: "Consumer Goods", aiScore: 6.2 }
];

export default StockScreener;
