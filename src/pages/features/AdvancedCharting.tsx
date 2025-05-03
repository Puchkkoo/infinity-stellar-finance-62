
import React, { useState, useEffect } from "react";
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { LineChart, Settings, Layers, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, LineChart as RechartsLineChart, AreaChart as RechartsAreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const AdvancedCharting = () => {
  const navigate = useNavigate();
  const [chartType, setChartType] = useState("candlestick");
  const [timeframe, setTimeframe] = useState("1D");
  const [indicators, setIndicators] = useState(["volume"]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        title="Advanced Charting"
        subtitle="Sophisticated technical analysis tools for data-driven trading decisions"
        icon={<LineChart className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
        description={[
          "Infinity's Advanced Charting platform provides professional-grade technical analysis tools designed for traders who demand precision, customization, and depth in their market analysis.",
          "Our charting system combines powerful visualization capabilities with hundreds of technical indicators, drawing tools, and pattern recognition features to help you identify opportunities and make informed trading decisions.",
          "Whether you're a day trader, swing trader, or long-term investor, our advanced charting tools adapt to your strategy and provide the insights you need to navigate the markets with confidence."
        ]}
        image="https://images.unsplash.com/photo-1642543348772-28711d6c1ffd?q=80&w=1000&auto=format&fit=crop"
        benefits={[
          {
            title: "Professional-Grade Tools",
            description: "Access over 100 technical indicators, drawing tools, and chart types used by professional traders."
          },
          {
            title: "Multi-Timeframe Analysis",
            description: "Analyze price action across multiple timeframes simultaneously with synchronized charts."
          },
          {
            title: "Advanced Pattern Recognition",
            description: "Automatically identify chart patterns, candlestick formations, and technical setups in real-time."
          },
          {
            title: "Custom Indicator Builder",
            description: "Create and backtest your own custom technical indicators and trading systems."
          },
          {
            title: "Cross-Market Analysis",
            description: "Compare correlations and relationships between different assets, sectors, and markets."
          },
          {
            title: "Cloud Synchronization",
            description: "Access your saved charts, templates, and studies across all your devices."
          }
        ]}
        howItWorks={[
          {
            step: "Select Your Chart Type",
            description: "Choose from a variety of chart types including candlestick, bar, line, Heikin Ashi, Renko, and more. Each chart type offers different perspectives on price action to suit your analysis style."
          },
          {
            step: "Apply Technical Indicators",
            description: "Add technical indicators from our extensive library covering momentum, trend, volatility, volume, and custom categories. Layer multiple indicators to create a comprehensive technical view."
          },
          {
            step: "Utilize Drawing Tools",
            description: "Apply precision drawing tools including Fibonacci retracements, Elliott Wave counts, pitchforks, and geometric shapes to identify key levels and patterns."
          },
          {
            step: "Set Up Alerts",
            description: "Create price, indicator, and pattern alerts to notify you when specific market conditions occur, allowing you to act quickly on trading opportunities."
          },
          {
            step: "Save & Share Analysis",
            description: "Save your chart layouts as templates for future use or share your technical analysis with colleagues and the Infinity trading community."
          }
        ]}
        useCases={[
          {
            title: "Day Trading & Scalping",
            description: "Utilize tick charts, time-based intraday charts, and momentum indicators to identify short-term trading opportunities with precise entries and exits."
          },
          {
            title: "Swing Trading",
            description: "Analyze daily and weekly timeframes with trend, momentum, and volatility indicators to capture intermediate price movements and optimize position sizing."
          },
          {
            title: "Options Analysis",
            description: "Integrate options data with charts to visualize implied volatility, open interest, and options flow alongside price action for comprehensive derivatives trading."
          },
          {
            title: "Long-Term Investment Analysis",
            description: "Apply technical analysis to monthly and quarterly charts to identify major market cycles, secular trends, and potential turning points for strategic asset allocation."
          }
        ]}
      >
        <div className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-infinity-200 dark:border-infinity-800/30 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-infinity-100/50 to-infinity-50/50 dark:from-infinity-900/50 dark:to-infinity-950/50 border-b border-infinity-200 dark:border-infinity-800/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <CardTitle className="text-xl font-serif flex items-center">
                    <LineChart className="h-5 w-5 text-infinity-600 dark:text-infinity-400 mr-2" />
                    NIFTY 50 Chart
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Select value={chartType} onValueChange={setChartType}>
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Chart Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="candlestick">Candlestick</SelectItem>
                        <SelectItem value="line">Line</SelectItem>
                        <SelectItem value="area">Area</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="heikinashi">Heikin Ashi</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Tabs value={timeframe} onValueChange={setTimeframe} className="w-auto">
                      <TabsList>
                        <TabsTrigger value="1D">1D</TabsTrigger>
                        <TabsTrigger value="1W">1W</TabsTrigger>
                        <TabsTrigger value="1M">1M</TabsTrigger>
                        <TabsTrigger value="3M">3M</TabsTrigger>
                        <TabsTrigger value="1Y">1Y</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Settings className="h-4 w-4" />
                      <span>Indicators</span>
                    </Button>
                    
                    <Button size="sm" variant="outline" className="flex items-center gap-1">
                      <Layers className="h-4 w-4" />
                      <span>Drawing Tools</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0 relative">
                <div className="p-4">
                  <div className="w-full h-[60vh] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 rounded-md overflow-hidden relative">
                    {/* Chart Container */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: "url('https://images.unsplash.com/photo-1642543348772-28711d6c1ffd?q=80&w=1000&auto=format&fit=crop')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      opacity: 0.1
                    }} />
                    
                    <div className="absolute top-0 left-0 w-full h-full bg-white/50 dark:bg-infinity-950/50 p-4">
                      {/* Stock Price Summary */}
                      <div className="flex justify-between mb-4">
                        <div>
                          <h2 className="text-2xl font-bold">NIFTY 50</h2>
                          <p className="text-3xl font-semibold">21,843.24 <span className="text-green-600 text-xl">+1.25%</span></p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-muted-foreground">Range: 21,650.30 - 21,864.75</div>
                          <div className="text-sm text-muted-foreground">Volume: 42.8M</div>
                        </div>
                      </div>
                      
                      {/* Main Chart */}
                      <div className="h-[calc(100%-100px)]">
                        <ResponsiveContainer width="100%" height="100%">
                          {chartType === 'area' ? (
                            <RechartsAreaChart data={niftyChartData}>
                              <defs>
                                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.3} />
                              <XAxis dataKey="date" />
                              <YAxis domain={['auto', 'auto']} />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                                  border: '1px solid #ccc',
                                  borderRadius: '8px' 
                                }}
                              />
                              <Legend />
                              <Area type="monotone" dataKey="close" stroke="#8884d8" fillOpacity={1} fill="url(#colorArea)" />
                              {indicators.includes('volume') && (
                                <Area type="monotone" dataKey="volume" stroke="#82ca9d" fill="#82ca9d" yAxisId={1} />
                              )}
                            </RechartsAreaChart>
                          ) : (
                            <RechartsLineChart data={niftyChartData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.3} />
                              <XAxis dataKey="date" />
                              <YAxis domain={['auto', 'auto']} />
                              <Tooltip 
                                contentStyle={{ 
                                  backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                                  border: '1px solid #ccc',
                                  borderRadius: '8px' 
                                }}
                              />
                              <Legend />
                              <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
                              <Line type="monotone" dataKey="ma20" stroke="#ff7300" dot={false} name="MA 20" />
                              <Line type="monotone" dataKey="ma50" stroke="#387908" dot={false} name="MA 50" />
                              {indicators.includes('volume') && (
                                <Line type="monotone" dataKey="volume" stroke="#82ca9d" yAxisId={1} />
                              )}
                            </RechartsLineChart>
                          )}
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 border-t border-infinity-200 dark:border-infinity-800/30">
                  <h3 className="font-medium mb-2">Technical Analysis Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="font-medium text-sm text-muted-foreground mb-1">Moving Averages</div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">BUY</div>
                        <div className="text-sm">10 out of 12 indicators</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="font-medium text-sm text-muted-foreground mb-1">Oscillators</div>
                      <div className="flex items-center gap-2">
                        <div className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">NEUTRAL</div>
                        <div className="text-sm">5 out of 13 indicators</div>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 p-3 rounded-lg">
                      <div className="font-medium text-sm text-muted-foreground mb-1">Summary</div>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">BUY</div>
                        <div className="text-sm">15 out of 25 indicators</div>
                      </div>
                    </div>
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

// Sample data for chart
const niftyChartData = [
  { date: '1-Jan', open: 21200, high: 21300, low: 21100, close: 21250, volume: 42.5, ma20: 21100, ma50: 20900 },
  { date: '2-Jan', open: 21250, high: 21400, low: 21200, close: 21320, volume: 38.2, ma20: 21120, ma50: 20920 },
  { date: '3-Jan', open: 21320, high: 21500, low: 21280, close: 21450, volume: 45.1, ma20: 21150, ma50: 20940 },
  { date: '4-Jan', open: 21450, high: 21550, low: 21380, close: 21500, volume: 41.3, ma20: 21180, ma50: 20960 },
  { date: '5-Jan', open: 21500, high: 21600, low: 21450, close: 21580, volume: 39.8, ma20: 21200, ma50: 20980 },
  { date: '8-Jan', open: 21580, high: 21650, low: 21520, close: 21620, volume: 36.5, ma20: 21230, ma50: 21000 },
  { date: '9-Jan', open: 21620, high: 21700, low: 21550, close: 21680, volume: 42.8, ma20: 21250, ma50: 21020 },
  { date: '10-Jan', open: 21680, high: 21750, low: 21600, close: 21720, volume: 44.2, ma20: 21280, ma50: 21040 },
  { date: '11-Jan', open: 21720, high: 21800, low: 21650, close: 21760, volume: 40.1, ma20: 21310, ma50: 21060 },
  { date: '12-Jan', open: 21760, high: 21820, low: 21700, close: 21800, volume: 38.9, ma20: 21340, ma50: 21080 },
  { date: '15-Jan', open: 21800, high: 21850, low: 21720, close: 21780, volume: 35.6, ma20: 21360, ma50: 21100 },
  { date: '16-Jan', open: 21780, high: 21830, low: 21700, close: 21750, volume: 37.2, ma20: 21380, ma50: 21120 },
  { date: '17-Jan', open: 21750, high: 21800, low: 21650, close: 21700, volume: 39.5, ma20: 21390, ma50: 21140 },
  { date: '18-Jan', open: 21700, high: 21750, low: 21600, close: 21650, volume: 41.3, ma20: 21400, ma50: 21160 },
  { date: '19-Jan', open: 21650, high: 21700, low: 21550, close: 21620, volume: 38.7, ma20: 21410, ma50: 21180 },
  { date: '22-Jan', open: 21620, high: 21680, low: 21550, close: 21600, volume: 36.4, ma20: 21420, ma50: 21200 },
  { date: '23-Jan', open: 21600, high: 21650, low: 21500, close: 21580, volume: 34.9, ma20: 21430, ma50: 21220 },
  { date: '24-Jan', open: 21580, high: 21650, low: 21520, close: 21630, volume: 37.6, ma20: 21440, ma50: 21240 },
  { date: '25-Jan', open: 21630, high: 21700, low: 21580, close: 21680, volume: 39.8, ma20: 21450, ma50: 21260 },
  { date: '26-Jan', open: 21680, high: 21750, low: 21630, close: 21720, volume: 42.3, ma20: 21470, ma50: 21280 },
  { date: '29-Jan', open: 21720, high: 21800, low: 21680, close: 21780, volume: 44.7, ma20: 21490, ma50: 21300 },
  { date: '30-Jan', open: 21780, high: 21850, low: 21730, close: 21820, volume: 46.2, ma20: 21520, ma50: 21320 },
  { date: '31-Jan', open: 21820, high: 21880, low: 21760, close: 21843.24, volume: 42.8, ma20: 21550, ma50: 21340 }
];

export default AdvancedCharting;
