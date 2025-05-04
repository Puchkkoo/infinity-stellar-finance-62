
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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

interface CompanyDetailProps {
  company: {
    symbol: string;
    name: string;
    price: number;
    change: number;
    marketCap: string;
    volume: string;
    sector: string;
  };
  onClose: () => void;
}

const CompanyDetail: React.FC<CompanyDetailProps> = ({ company, onClose }) => {
  // Generate sample historical data
  const generateHistoricalData = (startPrice: number, days: number) => {
    const data = [];
    let price = startPrice;
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

  const historicalData = generateHistoricalData(company.price, 90);
  const quarterlyData = generateQuarterlyData();
  
  // Sample company information
  const companyInfo = {
    description: `${company.name} (${company.symbol}) is a leading company in the ${company.sector} sector, founded in 1985. The company has shown consistent growth over the years and is known for its innovative products and services. With a strong market presence and global reach, ${company.name} continues to be a top performer in its industry.`,
    ceo: "John Smith",
    headquarters: "Mumbai, India",
    founded: "1985",
    employees: "42,500+",
    website: "https://www.example.com",
    pe: (Math.random() * 30 + 10).toFixed(2),
    dividend: (Math.random() * 3).toFixed(2) + "%",
    beta: (Math.random() * 1.5 + 0.5).toFixed(2),
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
        Back to Companies
      </Button>
      
      <Card className="mb-6 border-infinity-200 dark:border-infinity-800/30 shadow-lg">
        <CardHeader className="pb-2 border-b">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <CardTitle className="text-2xl">{company.symbol}</CardTitle>
                <Badge variant="outline">{company.sector}</Badge>
              </div>
              <p className="text-muted-foreground">{company.name}</p>
            </div>
            
            <div className="text-right">
              <div className="text-3xl font-bold">₹{company.price.toFixed(2)}</div>
              <div className={`text-sm ${company.change > 0 ? "text-green-600" : "text-red-600"}`}>
                {company.change > 0 ? "+" : ""}{company.change.toFixed(2)}%
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
      
      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="chart">Charts</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Company Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">{companyInfo.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Company Details</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-sm text-muted-foreground">CEO</span>
                          <span className="text-sm font-medium">{companyInfo.ceo}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-sm text-muted-foreground">Headquarters</span>
                          <span className="text-sm font-medium">{companyInfo.headquarters}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-sm text-muted-foreground">Founded</span>
                          <span className="text-sm font-medium">{companyInfo.founded}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-sm text-muted-foreground">Employees</span>
                          <span className="text-sm font-medium">{companyInfo.employees}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Metrics</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-sm text-muted-foreground">Market Cap</span>
                          <span className="text-sm font-medium">{company.marketCap}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-sm text-muted-foreground">P/E Ratio</span>
                          <span className="text-sm font-medium">{companyInfo.pe}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b">
                          <span className="text-sm text-muted-foreground">Dividend Yield</span>
                          <span className="text-sm font-medium">{companyInfo.dividend}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-sm text-muted-foreground">Beta</span>
                          <span className="text-sm font-medium">{companyInfo.beta}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Recent Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={historicalData.slice(-30)} // Last 30 days
                        margin={{
                          top: 5,
                          right: 20,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Trading Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">Volume</span>
                      <span className="text-sm font-medium">{company.volume}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b">
                      <span className="text-sm text-muted-foreground">Day Range</span>
                      <span className="text-sm font-medium">₹{(company.price * 0.98).toFixed(2)} - ₹{(company.price * 1.02).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-sm text-muted-foreground">52 Week Range</span>
                      <span className="text-sm font-medium">₹{(company.price * 0.8).toFixed(2)} - ₹{(company.price * 1.2).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-infinity-50 dark:bg-infinity-900/30 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{company.name} Reports Strong Q1 Results</h4>
                    <p className="text-xs text-muted-foreground">First quarter earnings exceed analyst expectations with 15% YoY growth</p>
                    <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                  </div>
                  <div className="bg-infinity-50 dark:bg-infinity-900/30 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">New Product Launch Announcement</h4>
                    <p className="text-xs text-muted-foreground">{company.name} unveils innovative product line at annual conference</p>
                    <div className="text-xs text-muted-foreground mt-1">1 day ago</div>
                  </div>
                  <div className="bg-infinity-50 dark:bg-infinity-900/30 p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-1">Expansion into European Markets</h4>
                    <p className="text-xs text-muted-foreground">Strategic partnership announced to accelerate growth in Europe</p>
                    <div className="text-xs text-muted-foreground mt-1">3 days ago</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="chart">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex justify-between">
                  <span>Price History (90 Days)</span>
                  <Badge variant="outline">Daily</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={historicalData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="price" 
                        name="Price (₹)" 
                        stroke={company.change > 0 ? "#22c55e" : "#ef4444"} 
                        fill={company.change > 0 ? "rgba(34, 197, 94, 0.2)" : "rgba(239, 68, 68, 0.2)"} 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Trading Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={historicalData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 20,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="volume"
                        name="Volume"
                        fill="#8884d8"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="financials">
          <Card>
            <CardHeader>
              <CardTitle>Quarterly Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={quarterlyData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" name="Revenue (₹B)" fill="#8884d8" />
                    <Bar dataKey="profit" name="Profit (₹B)" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-8">
                <h3 className="font-medium mb-4">EPS Trend</h3>
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
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="eps"
                        name="EPS (₹)"
                        stroke="#ff7300"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="news">
          <Card>
            <CardHeader>
              <CardTitle>Recent News & Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge>Press Release</Badge>
                    <span className="text-sm text-muted-foreground">May 1, 2024</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{company.name} Announces Record Quarter Results</h3>
                  <p className="text-muted-foreground">
                    {company.name} today announced financial results for its fiscal first quarter ended March 31, 2024, reporting revenue of ₹48.2 billion, up 12% year-over-year, and earnings per share of ₹1.8, exceeding analyst expectations.
                  </p>
                  <a href="#" className="text-sm text-infinity-600 dark:text-infinity-400 hover:underline mt-2 inline-block">Read full press release →</a>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">Analyst Report</Badge>
                    <span className="text-sm text-muted-foreground">April 28, 2024</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Growth Outlook Positive as {company.name} Expands Product Line</h3>
                  <p className="text-muted-foreground">
                    Industry analysts project strong growth ahead for {company.name} following the announcement of its expanded product portfolio and entry into new markets. The company's strategic initiatives are expected to drive revenue growth through 2024.
                  </p>
                  <a href="#" className="text-sm text-infinity-600 dark:text-infinity-400 hover:underline mt-2 inline-block">Read analysis →</a>
                </div>
                
                <div className="border-b pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">News</Badge>
                    <span className="text-sm text-muted-foreground">April 15, 2024</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">{company.name} Completes Acquisition of Tech Startup</h3>
                  <p className="text-muted-foreground">
                    {company.name} has completed its acquisition of InnovateTech, a startup specializing in AI-driven solutions. This acquisition is part of {company.name}'s strategy to enhance its technological capabilities and expand its service offerings.
                  </p>
                  <a href="#" className="text-sm text-infinity-600 dark:text-infinity-400 hover:underline mt-2 inline-block">Read more →</a>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">Industry Update</Badge>
                    <span className="text-sm text-muted-foreground">April 5, 2024</span>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Regulatory Changes to Impact {company.sector} Sector</h3>
                  <p className="text-muted-foreground">
                    Recent regulatory changes announced by the government are expected to impact companies in the {company.sector} sector. Analysts suggest {company.name} is well-positioned to adapt to these changes given its robust compliance framework.
                  </p>
                  <a href="#" className="text-sm text-infinity-600 dark:text-infinity-400 hover:underline mt-2 inline-block">Read analysis →</a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CompanyDetail;
