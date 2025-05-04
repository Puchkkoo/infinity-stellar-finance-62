
import React, { useEffect } from "react";
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Book, Microscope, BarChart4, LineChart, PieChart } from "lucide-react";
import { BackButton } from "@/components/back-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart as RechartsLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart as RechartsPieChart,
  Pie
} from "recharts";

const SentimentAnalysisDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const sentimentData = [
    { date: "Apr 1", twitter: 65, news: 72, reddit: 58, overall: 67 },
    { date: "Apr 2", twitter: 68, news: 70, reddit: 62, overall: 68 },
    { date: "Apr 3", twitter: 70, news: 68, reddit: 65, overall: 69 },
    { date: "Apr 4", twitter: 75, news: 72, reddit: 69, overall: 73 },
    { date: "Apr 5", twitter: 72, news: 75, reddit: 68, overall: 72 },
    { date: "Apr 6", twitter: 68, news: 70, reddit: 65, overall: 68 },
    { date: "Apr 7", twitter: 65, news: 68, reddit: 62, overall: 65 },
    { date: "Apr 8", twitter: 62, news: 64, reddit: 60, overall: 62 },
    { date: "Apr 9", twitter: 60, news: 62, reddit: 58, overall: 60 },
    { date: "Apr 10", twitter: 63, news: 65, reddit: 61, overall: 63 },
    { date: "Apr 11", twitter: 67, news: 68, reddit: 64, overall: 67 },
    { date: "Apr 12", twitter: 70, news: 72, reddit: 68, overall: 70 },
    { date: "Apr 13", twitter: 72, news: 75, reddit: 70, overall: 73 },
    { date: "Apr 14", twitter: 75, news: 78, reddit: 73, overall: 76 },
  ];
  
  const topPositiveTopics = [
    { name: "Earnings Report", score: 82 },
    { name: "New Technology", score: 78 },
    { name: "Market Expansion", score: 75 },
    { name: "Strategic Partnership", score: 71 },
    { name: "Product Launch", score: 68 },
  ];
  
  const topNegativeTopics = [
    { name: "Regulatory Concerns", score: 32 },
    { name: "Competition Threat", score: 35 },
    { name: "Supply Chain Issues", score: 38 },
    { name: "Management Change", score: 42 },
    { name: "Market Volatility", score: 45 },
  ];
  
  const sourcesAnalysis = [
    { name: "Twitter", value: 35 },
    { name: "Financial News", value: 25 },
    { name: "Reddit", value: 20 },
    { name: "Analyst Reports", value: 15 },
    { name: "Press Releases", value: 5 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div>
      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>
      
      <div className="py-8 bg-gradient-to-b from-indigo-50/50 to-background dark:from-indigo-950/20 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <div className="inline-flex items-center justify-center rounded-full bg-indigo-100 p-2 dark:bg-indigo-900/40 mb-4">
                <Microscope className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Sentiment Analysis</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Real-time sentiment analysis of news, social media, and market commentary to identify trading opportunities
              </p>
            </div>
            
            <div className="flex-1">
              <Card className="overflow-hidden border-indigo-200 dark:border-indigo-900/30">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                    alt="AI Sentiment Analysis"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
                    <div className="p-6 text-white">
                      <p className="font-medium">Our advanced AI algorithms analyze thousands of sources in real-time</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="trends">Sentiment Trends</TabsTrigger>
              <TabsTrigger value="topics">Key Topics</TabsTrigger>
              <TabsTrigger value="sources">Data Sources</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span> Overall Sentiment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">76%</div>
                    <p className="text-sm text-muted-foreground mb-2">Positive sentiment based on all sources</p>
                    <Progress value={76} className="h-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span> Social Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">72%</div>
                    <p className="text-sm text-muted-foreground mb-2">Based on Twitter, Reddit, StockTwits</p>
                    <Progress value={72} className="h-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span> News Media
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">78%</div>
                    <p className="text-sm text-muted-foreground mb-2">Based on financial news outlets</p>
                    <Progress value={78} className="h-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span> Analyst Reports
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">81%</div>
                    <p className="text-sm text-muted-foreground mb-2">Based on professional analysis</p>
                    <Progress value={81} className="h-2" />
                  </CardContent>
                </Card>
              </div>
              
              <Card className="mb-10">
                <CardHeader>
                  <CardTitle>Sentiment Correlation with Price Movement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={sentimentData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis yAxisId="left" orientation="left" domain={[0, 100]} />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line 
                          yAxisId="left"
                          type="monotone" 
                          dataKey="overall" 
                          stroke="#8884d8" 
                          strokeWidth={2}
                          name="Overall Sentiment" 
                        />
                        <Line 
                          yAxisId="right"
                          type="monotone" 
                          dataKey="twitter" 
                          stroke="#82ca9d" 
                          name="Twitter Sentiment" 
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Positive Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topPositiveTopics.map((topic, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <div>{topic.name}</div>
                            <div className="font-medium">{topic.score}%</div>
                          </div>
                          <Progress value={topic.score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Top Negative Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topNegativeTopics.map((topic, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <div>{topic.name}</div>
                            <div className="font-medium">{topic.score}%</div>
                          </div>
                          <Progress value={topic.score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="trends" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Trends Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={sentimentData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis domain={[50, 100]} />
                        <Tooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="twitter" 
                          stroke="#1DA1F2" 
                          strokeWidth={2}
                          name="Twitter" 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="news" 
                          stroke="#FF4500" 
                          strokeWidth={2}
                          name="News Media" 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="reddit" 
                          stroke="#FF5700" 
                          strokeWidth={2}
                          name="Reddit" 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="overall" 
                          stroke="#6366F1" 
                          strokeWidth={3}
                          name="Overall Sentiment" 
                        />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="topics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart4 className="h-5 w-5 mr-2 text-green-500" />
                      Positive Sentiment by Topic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topPositiveTopics}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Bar dataKey="score" fill="#10B981">
                            {topPositiveTopics.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={`#10B981`} fillOpacity={(100 - index * 10) / 100} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart4 className="h-5 w-5 mr-2 text-red-500" />
                      Negative Sentiment by Topic
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[350px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={topNegativeTopics}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis domain={[0, 100]} />
                          <Tooltip />
                          <Bar dataKey="score" fill="#EF4444">
                            {topNegativeTopics.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={`#EF4444`} fillOpacity={(100 - index * 10) / 100} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="sources" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-indigo-500" />
                    Sentiment Analysis by Source
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={sourcesAnalysis}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={150}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {sourcesAnalysis.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="py-12 bg-indigo-50/30 dark:bg-indigo-950/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits of AI-Powered Sentiment Analysis</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Harness the power of artificial intelligence to gain insights that traditional analysis can't provide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-red-100 dark:bg-red-900/30 mr-3">
                    <Book className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  Real-Time Sentiment Scoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor sentiment for stocks, sectors, and broader markets continuously throughout trading hours, with alerts for significant shifts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 mr-3">
                    <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  Social Media Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track sentiment across Twitter, Reddit, StockTwits, and other platforms frequented by retail and professional traders.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/30 mr-3">
                    <Book className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  News Impact Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quantify the impact of breaking news and research reports on market sentiment and asset prices with historical context.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-100 dark:bg-yellow-900/30 mr-3">
                    <Book className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  Sentiment Divergence Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive notifications when sentiment significantly diverges from price action, indicating potential trade opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 mr-3">
                    <Book className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  Historical Sentiment Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Analyze historical sentiment data to identify recurring patterns and their correlation with price movements over time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/30 mr-3">
                    <Book className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  Customizable Dashboards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create personalized sentiment dashboards focused on your specific watchlist, portfolio, or investment themes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentAnalysisDetail;
