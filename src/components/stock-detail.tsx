
import React from "react";
import { ArrowLeft, TrendingDown, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

interface StockDetailProps {
  stock: {
    symbol: string;
    name: string;
    price: number;
    change: number;
    pe: number;
    sector: string;
    aiScore: number;
    description?: string;
    fundamentals?: {
      marketCap: string;
      volume: string;
      avgVolume: string;
      high52w: number;
      low52w: number;
      eps: number;
      dividend: string;
      beta: number;
    };
  };
  onClose: () => void;
}

// Generate sample historical data
const generateHistoricalData = (basePrice: number, days: number) => {
  const data = [];
  let price = basePrice;
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Random price fluctuation between -3% and +3%
    const change = (Math.random() * 6 - 3) / 100;
    price = price * (1 + change);
    
    data.push({
      date: `${date.getMonth() + 1}/${date.getDate()}`,
      price: parseFloat(price.toFixed(2)),
      volume: Math.floor(Math.random() * 1000000) + 100000,
    });
  }
  
  return data;
};

// Generate quarterly results data
const generateQuarterlyData = () => {
  return [
    { quarter: "Q1 2024", revenue: 48.2, profit: 12.6, eps: 1.8 },
    { quarter: "Q4 2023", revenue: 46.5, profit: 11.9, eps: 1.7 },
    { quarter: "Q3 2023", revenue: 43.8, profit: 10.4, eps: 1.5 },
    { quarter: "Q2 2023", revenue: 45.1, profit: 11.2, eps: 1.6 },
    { quarter: "Q1 2023", revenue: 42.7, profit: 10.1, eps: 1.4 },
  ];
};

const StockDetail: React.FC<StockDetailProps> = ({ stock, onClose }) => {
  const navigate = useNavigate();
  const historicalData = generateHistoricalData(stock.price, 30);
  const quarterlyData = generateQuarterlyData();

  // Default fundamentals if not provided
  const fundamentals = stock.fundamentals || {
    marketCap: "₹45,620 Cr",
    volume: "2.4M",
    avgVolume: "1.8M",
    high52w: stock.price * 1.3,
    low52w: stock.price * 0.7,
    eps: stock.pe > 0 ? stock.price / stock.pe : 0,
    dividend: "1.2%",
    beta: 1.15,
  };

  return (
    <div className="py-4">
      <Button 
        variant="outline" 
        size="sm" 
        className="mb-4 flex items-center gap-1"
        onClick={onClose}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Screener
      </Button>
      
      <Card className="border-infinity-200 dark:border-infinity-800/30 shadow-lg">
        <CardHeader className="pb-2 border-b">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl">{stock.symbol}</CardTitle>
                <Badge variant="outline">{stock.sector}</Badge>
                {stock.change > 0 ? (
                  <Badge className="bg-green-600">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{stock.change.toFixed(2)}%
                  </Badge>
                ) : (
                  <Badge variant="destructive">
                    <TrendingDown className="h-3 w-3 mr-1" />
                    {stock.change.toFixed(2)}%
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground">{stock.name}</p>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold">₹{stock.price.toFixed(2)}</div>
              <div className={`text-sm ${stock.change > 0 ? "text-green-600" : "text-red-600"}`}>
                {stock.change > 0 ? "+" : ""}{stock.change.toFixed(2)}%
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="chart">Price Chart</TabsTrigger>
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="financials">Financials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="font-medium mb-3">About {stock.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {stock.description || `${stock.name} (${stock.symbol}) is a leading company in the ${stock.sector} sector. The company has shown ${stock.change > 0 ? "positive" : "negative"} growth in recent periods, with current P/E ratio at ${stock.pe.toFixed(2)}. The company's stock is currently trading at ₹${stock.price.toFixed(2)}.`}
                  </p>
                  
                  <h3 className="font-medium mb-3">Key Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Market Cap</div>
                      <div className="font-medium">{fundamentals.marketCap}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">P/E Ratio</div>
                      <div className="font-medium">{stock.pe.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">EPS</div>
                      <div className="font-medium">₹{fundamentals.eps.toFixed(2)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Dividend Yield</div>
                      <div className="font-medium">{fundamentals.dividend}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">AI Analysis</h3>
                  <Card className="border-infinity-200 dark:border-infinity-800/30 bg-infinity-50/50 dark:bg-infinity-950/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span>Overall Score</span>
                        <span className={`font-bold ${
                          stock.aiScore >= 8 ? "text-green-600" :
                          stock.aiScore >= 5 ? "text-amber-600" :
                          "text-red-600"
                        }`}>{stock.aiScore}/10</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Technical</span>
                            <span>{Math.min(10, stock.aiScore + (Math.random() * 2 - 1)).toFixed(1)}/10</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Fundamental</span>
                            <span>{Math.min(10, stock.aiScore + (Math.random() * 2 - 1)).toFixed(1)}/10</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm">
                            <span>Sentiment</span>
                            <span>{Math.min(10, stock.aiScore + (Math.random() * 2 - 1)).toFixed(1)}/10</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="chart">
              <div className="space-y-6">
                <Card className="border-infinity-200 dark:border-infinity-800/30">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg">Price History (30 Days)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                          data={historicalData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis yAxisId="left" domain={['auto', 'auto']} />
                          <Tooltip />
                          <Legend />
                          <Area 
                            type="monotone" 
                            dataKey="price" 
                            name="Stock Price" 
                            stroke={stock.change > 0 ? "#22c55e" : "#ef4444"} 
                            fill={stock.change > 0 ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"} 
                            yAxisId="left"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-infinity-200 dark:border-infinity-800/30">
                  <CardHeader className="pb-0">
                    <CardTitle className="text-lg">Trading Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] mt-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={historicalData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="date" />
                          <YAxis yAxisId="left" />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="volume"
                            name="Volume"
                            fill="#8884d8"
                            yAxisId="left"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="fundamentals">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-infinity-200 dark:border-infinity-800/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Trading Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">Current Price</span>
                        <span className="font-medium">₹{stock.price.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">Market Cap</span>
                        <span className="font-medium">{fundamentals.marketCap}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">52-Week High</span>
                        <span className="font-medium">₹{fundamentals.high52w.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">52-Week Low</span>
                        <span className="font-medium">₹{fundamentals.low52w.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">Volume</span>
                        <span className="font-medium">{fundamentals.volume}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Avg. Volume</span>
                        <span className="font-medium">{fundamentals.avgVolume}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-infinity-200 dark:border-infinity-800/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Financial Ratios</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">P/E Ratio</span>
                        <span className="font-medium">{stock.pe.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">EPS (TTM)</span>
                        <span className="font-medium">₹{fundamentals.eps.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">Dividend Yield</span>
                        <span className="font-medium">{fundamentals.dividend}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span className="text-muted-foreground">Beta</span>
                        <span className="font-medium">{fundamentals.beta.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Sector</span>
                        <span className="font-medium">{stock.sector}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="financials">
              <Card className="border-infinity-200 dark:border-infinity-800/30">
                <CardHeader>
                  <CardTitle className="text-lg">Quarterly Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={quarterlyData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis yAxisId="left" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="revenue" name="Revenue (₹B)" fill="#8884d8" yAxisId="left" />
                        <Bar dataKey="profit" name="Profit (₹B)" fill="#82ca9d" yAxisId="left" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-medium mb-3">EPS Trend</h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={quarterlyData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="quarter" />
                          <YAxis yAxisId="left" />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="eps"
                            name="EPS (₹)"
                            stroke="#ff7300"
                            yAxisId="left"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockDetail;
