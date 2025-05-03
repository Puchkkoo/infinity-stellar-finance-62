
import React, { useState, useEffect } from "react";
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { PieChart, BarChart, LineChart, PieChartIcon, BarChart3, LineChartIcon, TrendingUp, TrendingDown, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart as RechartsLineChart, Line } from "recharts";

const PortfolioAnalytics = () => {
  const navigate = useNavigate();
  const [selectedTimeframe, setSelectedTimeframe] = useState("1Y");
  
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
        title="Portfolio Analytics"
        subtitle="Gain insights into your investments with powerful AI-driven portfolio analytics"
        icon={<BarChart3 className="h-8 w-8 text-pink-600 dark:text-pink-400" />}
        description={[
          "Flamingo's Portfolio Analytics provides a comprehensive view of your investment performance with advanced visualization and AI-driven insights.",
          "Track your portfolio's growth over time, analyze sector allocation, risk metrics, and get personalized recommendations to optimize your investment strategy.",
          "Our advanced analytical tools help you understand the drivers of your portfolio's performance and identify opportunities for improvement."
        ]}
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
        benefits={[
          {
            title: "Performance Tracking",
            description: "Track your portfolio's performance over time with interactive charts and detailed metrics."
          },
          {
            title: "Risk Analysis",
            description: "Understand your portfolio's risk profile with volatility metrics, drawdown analysis, and stress tests."
          },
          {
            title: "Sector Allocation",
            description: "Visualize your portfolio's exposure to different sectors and get recommendations for optimal diversification."
          },
          {
            title: "AI-Powered Insights",
            description: "Receive personalized insights and recommendations based on your investment goals and market conditions."
          },
          {
            title: "Tax Optimization",
            description: "Identify tax-saving opportunities and get recommendations for tax-efficient investing."
          },
          {
            title: "Goal Tracking",
            description: "Set financial goals and track your progress towards achieving them with custom projections."
          }
        ]}
      >
        <div className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Card className="border-pink-200 dark:border-pink-800/30 shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center">
                  <BarChart3 className="h-6 w-6 text-pink-600 dark:text-pink-400 mr-2" />
                  Portfolio Overview
                </CardTitle>
                <CardDescription>
                  Current portfolio value: ₹15,28,450 <span className="text-green-600">+12.4% YTD</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-end mb-4">
                  <div className="flex gap-2">
                    {["1M", "3M", "6M", "1Y", "3Y", "5Y", "All"].map((timeframe) => (
                      <Button
                        key={timeframe}
                        variant={selectedTimeframe === timeframe ? "default" : "outline"}
                        size="sm"
                        className={selectedTimeframe === timeframe ? "bg-pink-600 hover:bg-pink-700" : ""}
                        onClick={() => setSelectedTimeframe(timeframe)}
                      >
                        {timeframe}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ccc" opacity={0.3} />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                          border: '1px solid #ccc',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#ec4899" activeDot={{ r: 8 }} name="Portfolio Value" strokeWidth={2} />
                      <Line type="monotone" dataKey="benchmark" stroke="#0ea5e9" name="Benchmark (NIFTY 50)" strokeWidth={2} />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                  <MetricCard
                    title="Total Return"
                    value="62.4%"
                    trend="up"
                    trendValue="5.2%"
                    description="All-time return"
                    textColor="text-green-600"
                  />
                  <MetricCard
                    title="Annualized Return"
                    value="18.2%"
                    trend="up"
                    trendValue="2.8%"
                    description="Last 3 years"
                    textColor="text-green-600"
                  />
                  <MetricCard
                    title="Beta"
                    value="0.86"
                    trend="neutral"
                    trendValue=""
                    description="vs. NIFTY 50"
                    textColor="text-blue-600"
                  />
                  <MetricCard
                    title="Sharpe Ratio"
                    value="1.42"
                    trend="up"
                    trendValue="0.12"
                    description="Risk-adjusted return"
                    textColor="text-green-600"
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <Card className="lg:col-span-1 border-pink-200 dark:border-pink-800/30">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center">
                    <PieChartIcon className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2" />
                    Sector Allocation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={sectorData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={90}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {sectorData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-2">AI Insight:</div>
                    <p className="text-sm text-muted-foreground">Your portfolio is heavily weighted towards Technology (34%). Consider diversifying into defensive sectors like Healthcare for better balance.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="lg:col-span-2 border-pink-200 dark:border-pink-800/30">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center">
                    <BarChart3 className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2" />
                    Top Holdings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={topHoldingsData}
                        layout="vertical"
                        margin={{ top: 5, right: 30, left: 30, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                        <XAxis type="number" />
                        <YAxis dataKey="name" type="category" width={80} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" name="Current Value (₹)" fill="#ec4899" radius={[0, 4, 4, 0]} />
                        <Bar dataKey="gain" name="Unrealized Gain (%)" fill="#22c55e" radius={[0, 4, 4, 0]} />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-medium mb-2">AI Insight:</div>
                    <p className="text-sm text-muted-foreground">Reliance Industries has outperformed with 32% gains. Consider taking some profits as it now comprises over 15% of your portfolio.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-pink-200 dark:border-pink-800/30 mb-8">
              <CardHeader>
                <CardTitle className="text-xl font-serif flex items-center">
                  <TrendingUp className="h-5 w-5 text-pink-600 dark:text-pink-400 mr-2" />
                  AI Insights & Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <InsightCard
                    title="Diversification Opportunity"
                    description="Your portfolio is concentrated in Technology stocks. Consider adding exposure to Healthcare and Consumer Staples for better diversification."
                    severity="medium"
                  />
                  <InsightCard
                    title="Tax-Loss Harvesting"
                    description="You can realize a loss on Tata Motors to offset gains from Reliance Industries, potentially saving ₹12,450 in taxes."
                    severity="high"
                  />
                  <InsightCard
                    title="Rebalancing Alert"
                    description="Your portfolio allocation has drifted 8% from your target allocation. Consider rebalancing to maintain your risk profile."
                    severity="medium"
                  />
                  <InsightCard
                    title="Dividend Yield Enhancement"
                    description="Adding ITC to your portfolio could increase your overall dividend yield by 0.4% without significantly altering your risk profile."
                    severity="low"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </FeaturePageTemplate>
    </div>
  );
};

// Sample data for charts
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'];

const sectorData = [
  { name: "Technology", value: 34 },
  { name: "Financial Services", value: 22 },
  { name: "Healthcare", value: 12 },
  { name: "Consumer Goods", value: 10 },
  { name: "Energy", value: 8 },
  { name: "Industrials", value: 7 },
  { name: "Materials", value: 4 },
  { name: "Others", value: 3 }
];

const topHoldingsData = [
  { name: "Reliance", value: 235400, gain: 32 },
  { name: "HDFC Bank", value: 178600, gain: 18 },
  { name: "Infosys", value: 152300, gain: 12 },
  { name: "TCS", value: 143500, gain: 8 },
  { name: "ICICI Bank", value: 125800, gain: 23 }
];

const performanceData = [
  { date: 'Jan', value: 1000000, benchmark: 1000000 },
  { date: 'Feb', value: 1028000, benchmark: 1015000 },
  { date: 'Mar', value: 1042000, benchmark: 1022000 },
  { date: 'Apr', value: 1084000, benchmark: 1045000 },
  { date: 'May', value: 1107000, benchmark: 1063000 },
  { date: 'Jun', value: 1143000, benchmark: 1088000 },
  { date: 'Jul', value: 1187000, benchmark: 1112000 },
  { date: 'Aug', value: 1226000, benchmark: 1134000 },
  { date: 'Sep', value: 1254000, benchmark: 1145000 },
  { date: 'Oct', value: 1296000, benchmark: 1167000 },
  { date: 'Nov', value: 1342000, benchmark: 1189000 },
  { date: 'Dec', value: 1528450, benchmark: 1213000 }
];

// Helper components
const MetricCard = ({ title, value, trend, trendValue, description, textColor }) => (
  <div className="bg-muted/30 p-4 rounded-lg">
    <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
    <div className="flex items-baseline gap-2 mt-1">
      <span className={`text-2xl font-bold ${textColor}`}>{value}</span>
      {trend && trendValue && (
        <span className={`flex items-center text-xs ${trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-blue-600'}`}>
          {trend === 'up' ? <TrendingUp className="h-3 w-3 mr-0.5" /> : trend === 'down' ? <TrendingDown className="h-3 w-3 mr-0.5" /> : null}
          {trendValue}
        </span>
      )}
    </div>
    {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
  </div>
);

const InsightCard = ({ title, description, severity }) => {
  const severityColors = {
    low: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    medium: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
    high: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
  };
  
  const severityLabels = {
    low: "Low Priority",
    medium: "Medium Priority",
    high: "High Priority"
  };
  
  return (
    <div className="flex gap-4 p-4 bg-muted/30 rounded-lg">
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div>
        <Badge className={severityColors[severity]}>{severityLabels[severity]}</Badge>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;
