import React, { useState, useEffect } from "react";
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Book, ChevronRight, GraduationCap, FileText, CheckCircle } from "lucide-react";
import { BackButton } from "@/components/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

const LearningResources = () => {
  const [activeRoadmap, setActiveRoadmap] = useState<string>("personal-finance");
  const [progress, setProgress] = useState({
    "personal-finance": 30,
    "stock-market": 15,
    "technical-analysis": 0,
    "fundamental-analysis": 0,
    "risk-management": 0
  });

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Load saved progress from localStorage if available
    const savedProgress = localStorage.getItem("learning-progress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("learning-progress", JSON.stringify(progress));
  }, [progress]);
  
  const roadmaps = [
    {
      id: "personal-finance",
      title: "Personal Finance",
      description: "Learn the basics of managing your money effectively",
      level: "Beginner",
      duration: "4 weeks",
      topics: 10,
      image: "https://images.unsplash.com/photo-1579621970590-9d624316780b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "stock-market",
      title: "Stock Market Basics",
      description: "Understand how stock markets work and how to invest",
      level: "Beginner",
      duration: "6 weeks",
      topics: 12,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "technical-analysis",
      title: "Technical Analysis",
      description: "Learn to analyze price charts and identify patterns",
      level: "Intermediate",
      duration: "8 weeks",
      topics: 15,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "fundamental-analysis",
      title: "Fundamental Analysis",
      description: "Evaluate companies through financial statements",
      level: "Intermediate",
      duration: "10 weeks",
      topics: 14,
      image: "https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "risk-management",
      title: "Risk Management",
      description: "Strategies to protect your portfolio and manage risk",
      level: "Advanced",
      duration: "6 weeks",
      topics: 8,
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1000&auto=format&fit=crop"
    }
  ];
  
  const personalFinanceContent = [
    {
      title: "What Is Personal Finance?",
      content: "It's how you manage your money—earning, spending, saving, and investing—to reach your financial goals. Personal finance encompasses budgeting, banking, insurance, mortgages, investments, retirement planning, and tax and estate planning."
    },
    {
      title: "Money Management",
      content: "Track income vs expenses, make a budget, build an emergency fund, and avoid high-interest debt. Creating a monthly budget helps you understand where your money goes and how to allocate it more effectively towards your goals."
    },
    {
      title: "Banking Basics",
      content: "Know your account types, understand interest, and use digital payments like UPI, NEFT, and net banking safely. Different account types serve different purposes - savings accounts for daily transactions, fixed deposits for higher interest."
    },
    {
      title: "Saving vs Investing",
      content: "Saving stores money safely; investing helps it grow. Start early and balance risk for better returns. Savings are typically for short-term goals and emergencies, while investments are for long-term wealth creation."
    },
    {
      title: "Investment Options",
      content: "Choose from stocks, mutual funds, bonds, gold, real estate, FDs, or crypto—each with its own risk and reward. Understanding the risk-return tradeoff is essential for building a portfolio that matches your financial goals."
    },
    {
      title: "Common Finance Terms",
      content: "Learn key terms: inflation, diversification, liquidity, P/E ratio, capital gains, CAGR, and risk appetite. Understanding these terms helps you make more informed decisions and communicate effectively with financial advisors."
    },
    {
      title: "Taxes Simplified",
      content: "Understand tax slabs, deductions (like 80C), filing returns, and TDS to save more legally. Tax planning is an integral part of financial planning, and knowing the available deductions can significantly increase your savings."
    },
    {
      title: "Insurance & Retirement",
      content: "Plan early with EPF, NPS, or PPF. Protect yourself with term and health insurance. Insurance serves as a financial safety net, while retirement planning ensures you maintain your lifestyle after your working years."
    },
    {
      title: "Avoiding Scams",
      content: "Stay away from schemes with \"guaranteed high returns.\" Always verify before investing. If something sounds too good to be true, it probably is. Research thoroughly and consult trusted advisors before making investment decisions."
    },
    {
      title: "Smart Money Habits",
      content: "Budget, invest regularly, track goals, and avoid emotional decisions in markets. Developing disciplined financial habits is the foundation of long-term financial success and wealth creation."
    }
  ];

  const courseResources = [
    {
      title: "Video Courses",
      items: [
        {
          title: "Introduction to Personal Finance Fundamentals",
          description: "A comprehensive 10-part video series covering the basics of personal finance management",
          duration: "2h 15m",
          level: "Beginner"
        },
        {
          title: "Stock Market for Beginners",
          description: "Learn how stocks work, how to research companies, and make your first investment",
          duration: "3h 40m",
          level: "Beginner"
        },
        {
          title: "Advanced Technical Analysis",
          description: "Master chart patterns, indicators, and trading strategies used by professionals",
          duration: "5h 20m",
          level: "Advanced"
        },
        {
          title: "Understanding Company Financials",
          description: "How to read balance sheets, income statements, and cash flow statements",
          duration: "4h 05m",
          level: "Intermediate"
        },
        {
          title: "Portfolio Diversification Strategies",
          description: "Techniques to spread risk across different asset classes and markets",
          duration: "2h 30m",
          level: "Intermediate"
        }
      ]
    },
    {
      title: "E-Books & Guides",
      items: [
        {
          title: "The Complete Guide to Personal Finance",
          description: "A step-by-step handbook covering all aspects of managing your finances",
          pages: 210,
          format: "PDF, EPUB"
        },
        {
          title: "Stock Market Investing 101",
          description: "Everything you need to know before buying your first stock",
          pages: 185,
          format: "PDF, MOBI"
        },
        {
          title: "Technical Analysis Patterns Explained",
          description: "Visual guide to identifying and trading common chart patterns",
          pages: 156,
          format: "PDF"
        },
        {
          title: "Financial Statement Analysis Guide",
          description: "How to evaluate a company's financial health through its statements",
          pages: 230,
          format: "PDF, EPUB"
        },
        {
          title: "Risk Management Toolkit",
          description: "Practical strategies to protect your investments from market volatility",
          pages: 120,
          format: "PDF"
        }
      ]
    },
    {
      title: "Interactive Tools",
      items: [
        {
          title: "Financial Goal Calculator",
          description: "Plan and track your progress toward specific financial goals",
          type: "Web App"
        },
        {
          title: "Investment Returns Calculator",
          description: "Estimate future value of investments with different contribution schedules",
          type: "Spreadsheet + Web App"
        },
        {
          title: "Risk Assessment Tool",
          description: "Evaluate your risk tolerance and get portfolio recommendations",
          type: "Web App"
        },
        {
          title: "Portfolio Analyzer",
          description: "Upload your holdings to get insights on diversification and performance",
          type: "Web App"
        },
        {
          title: "Tax Planning Assistant",
          description: "Maximize deductions and minimize tax liability with guided planning",
          type: "Web App"
        }
      ]
    },
    {
      title: "Practice Exercises",
      items: [
        {
          title: "Budget Creation Workshop",
          description: "Interactive exercises to build and optimize your personal budget",
          difficulty: "Easy"
        },
        {
          title: "Stock Screening Practice",
          description: "Learn to filter stocks based on various financial criteria",
          difficulty: "Medium"
        },
        {
          title: "Chart Pattern Recognition",
          description: "Test your ability to identify common technical patterns",
          difficulty: "Hard"
        },
        {
          title: "Financial Ratio Analysis",
          description: "Calculate and interpret key ratios from real company financials",
          difficulty: "Medium"
        },
        {
          title: "Portfolio Stress Testing",
          description: "Simulate market crashes and evaluate portfolio resilience",
          difficulty: "Hard"
        }
      ]
    }
  ];

  const stockMarketContent = [
    {
      title: "What Are Stock Markets?",
      content: "Stock markets are venues where buyers and sellers meet to exchange shares of publicly listed companies. They provide companies with access to capital and investors with opportunities for wealth creation through capital appreciation and dividends."
    },
    {
      title: "How Stocks Work",
      content: "When you buy a stock, you're purchasing a small ownership stake in a company. The stock price moves based on supply and demand, which is influenced by company performance, market sentiment, economic factors, and more."
    },
    {
      title: "Market Participants",
      content: "Stock markets involve retail investors, institutional investors, market makers, brokers, regulators, and listed companies. Each plays a specific role in maintaining market functionality and liquidity."
    },
    {
      title: "Stock Exchanges",
      content: "Major exchanges include NYSE, NASDAQ, BSE, and NSE. They provide the infrastructure for trading, ensure transparency, and enforce listing requirements for companies wanting to go public."
    },
    {
      title: "Bull vs Bear Markets",
      content: "A bull market is characterized by rising prices and optimism, while a bear market features falling prices and pessimism. Understanding market cycles helps investors adjust strategies appropriately."
    },
    {
      title: "Market Orders",
      content: "Learn different order types: market orders, limit orders, stop orders, and more. Each serves different purposes and knowing when to use them can significantly impact your trading outcomes."
    },
    {
      title: "Stock Indices",
      content: "Indices like S&P 500, NIFTY, and SENSEX track overall market performance by measuring a selected basket of stocks. They serve as benchmarks against which investment performance is measured."
    },
    {
      title: "Trading vs Investing",
      content: "Trading focuses on short-term price movements, while investing involves holding assets for the long term. Each approach requires different skills, time commitments, and risk management strategies."
    },
    {
      title: "Reading Stock Charts",
      content: "Price charts display historical stock movements and come in various formats like line, bar, and candlestick. Learning to interpret these helps identify trends and potential entry/exit points."
    },
    {
      title: "Common Investment Strategies",
      content: "Explore value investing, growth investing, dollar-cost averaging, and dividend investing. Different strategies suit different goals and risk tolerances."
    },
    {
      title: "Risk Management Basics",
      content: "Never invest money you can't afford to lose. Diversify across sectors and asset classes, use appropriate position sizing, and consider hedging strategies for protecting your portfolio."
    },
    {
      title: "Getting Started with Investing",
      content: "Open a brokerage account, start with a small amount, focus on quality companies or ETFs, reinvest dividends, and stay informed about market developments. Consistency is key for long-term success."
    }
  ];

  const handleStartCourse = (id) => {
    setActiveRoadmap(id);
    window.scrollTo(0, 0);
  };

  const handleMarkComplete = (index) => {
    if (activeRoadmap === "personal-finance") {
      // Calculate new progress based on current topic
      const topicsCompleted = Math.floor(progress["personal-finance"] / 10); // 10% per topic
      const newProgress = (index + 1) > topicsCompleted ? (index + 1) * 10 : progress["personal-finance"];
      
      // Update progress
      setProgress({...progress, "personal-finance": Math.min(newProgress, 100)});
      
      // Show toast notification
      toast.success("Topic marked as complete", {
        description: `You've completed "${personalFinanceContent[index].title}"`,
      });
    } else if (activeRoadmap === "stock-market") {
      // Similar logic for stock market course
      const topicsCompleted = Math.floor(progress["stock-market"] / (100/12)); // 100% divided by 12 topics
      const newProgress = (index + 1) > topicsCompleted ? (index + 1) * (100/12) : progress["stock-market"];
      
      setProgress({...progress, "stock-market": Math.min(Math.round(newProgress), 100)});
      
      toast.success("Topic marked as complete", {
        description: `You've completed "${stockMarketContent[index].title}"`,
      });
    }
  };

  const handleDownloadResource = (resourceTitle) => {
    toast.success("Resource downloaded", {
      description: `${resourceTitle} has been saved to your downloads folder.`,
    });
  };

  const handleOpenTool = (toolTitle) => {
    toast.info("Tool launched", {
      description: `${toolTitle} is now open in a new tab.`,
    });
  };

  const activeContent = activeRoadmap === "personal-finance" ? personalFinanceContent : stockMarketContent;
  const completedTopics = Math.floor(progress[activeRoadmap] / (activeRoadmap === "personal-finance" ? 10 : (100/12)));

  return (
    <div>
      <div className="container mx-auto px-4 pt-4">
        <BackButton />
      </div>
      <FeaturePageTemplate
        title="Learning Resources"
        subtitle="From beginners to advanced traders - learn at your own pace"
        icon={<GraduationCap className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
        description={[
          "Infinity's Learning Resources provides comprehensive educational materials designed to help investors at every stage of their financial journey.",
          "Our structured learning paths combine theory with practical exercises to help you develop the skills and knowledge needed to make informed financial decisions.",
          "From personal finance basics to advanced trading strategies, our content is created by industry experts and presented in an engaging, easy-to-understand format."
        ]}
        image="https://images.unsplash.com/photo-1546422904-90eab23c3d7e?q=80&w=1000&auto=format&fit=crop"
        benefits={[
          {
            title: "Structured Learning Paths",
            description: "Follow our carefully designed roadmaps that guide you from basic concepts to advanced strategies."
          },
          {
            title: "Multi-format Content",
            description: "Access videos, articles, interactive quizzes, and downloadable resources to suit your learning style."
          },
          {
            title: "Progress Tracking",
            description: "Monitor your advancement through courses and receive personalized recommendations based on your interests."
          },
          {
            title: "Expert-created Content",
            description: "Learn from industry professionals with years of experience in finance, investing, and trading."
          },
          {
            title: "Community Learning",
            description: "Join discussion forums to share insights, ask questions, and learn from fellow investors."
          },
          {
            title: "Practical Applications",
            description: "Apply what you've learned through simulations, case studies, and real-world exercises."
          }
        ]}
        howItWorks={[
          {
            step: "Select a Learning Path",
            description: "Choose from our curated roadmaps designed for different skill levels and interests, from personal finance to advanced trading."
          },
          {
            step: "Access Multimedia Content",
            description: "Engage with video lessons, interactive modules, quizzes, and downloadable resources that reinforce key concepts."
          },
          {
            step: "Practice with Tools",
            description: "Apply your knowledge using our simulators, calculators, and interactive tools that provide hands-on experience."
          },
          {
            step: "Track Your Progress",
            description: "Monitor your advancement through courses, earn certificates, and receive personalized recommendations for continued learning."
          },
          {
            step: "Join Community Discussions",
            description: "Connect with fellow learners in topic-specific forums to share insights, ask questions, and deepen your understanding."
          }
        ]}
        useCases={[
          {
            title: "New Investors",
            description: "Build a strong foundation in personal finance and investment basics before entering the markets."
          },
          {
            title: "Intermediate Traders",
            description: "Enhance your technical and fundamental analysis skills to identify better trading opportunities."
          },
          {
            title: "Advanced Investors",
            description: "Master complex strategies, portfolio management techniques, and risk assessment methodologies."
          },
          {
            title: "Financial Advisors",
            description: "Stay updated with the latest investment approaches and tools to better serve your clients."
          }
        ]}
      >
        <div className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="roadmaps" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="roadmaps">Learning Roadmaps</TabsTrigger>
                <TabsTrigger value="courses">Active Courses</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
              </TabsList>
              
              <TabsContent value="roadmaps" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {roadmaps.map((roadmap) => (
                    <Card key={roadmap.id} className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                      <div className="aspect-video relative">
                        <img 
                          src={roadmap.image} 
                          alt={roadmap.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <Badge variant={
                            roadmap.level === "Beginner" ? "default" : 
                            roadmap.level === "Intermediate" ? "secondary" : 
                            "destructive"
                          } className="opacity-90">
                            {roadmap.level}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <CardTitle>{roadmap.title}</CardTitle>
                          <span className="text-xs text-muted-foreground">{roadmap.duration}</span>
                        </div>
                        <CardDescription>{roadmap.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm font-medium">{progress[roadmap.id]}%</span>
                        </div>
                        <Progress value={progress[roadmap.id]} className="h-2" />
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button 
                          className="w-full" 
                          onClick={() => handleStartCourse(roadmap.id)}
                          variant={progress[roadmap.id] > 0 ? "default" : "outline"}
                        >
                          {progress[roadmap.id] > 0 ? "Continue Learning" : "Start Learning"}
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="courses" className="mt-6">
                <Card className="border-infinity-200 dark:border-infinity-800/30 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-infinity-100 dark:bg-infinity-950 rounded-lg flex items-center justify-center">
                        <Book className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-serif">
                          {activeRoadmap === "personal-finance" ? "Personal Finance Basics" : "Stock Market Basics"}
                        </CardTitle>
                        <CardDescription>
                          {activeRoadmap === "personal-finance" 
                            ? "Master the fundamentals of managing your money effectively" 
                            : "Understand how stock markets work and how to invest"}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Your progress</span>
                        <span className="text-sm font-medium">{progress[activeRoadmap]}%</span>
                      </div>
                      <Progress value={progress[activeRoadmap]} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium">Course Content</h3>
                        <div className="text-sm text-muted-foreground">
                          {completedTopics} of {activeContent.length} topics completed
                        </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="w-full">
                        {activeContent.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                              <div className="flex items-center">
                                <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs ${index < completedTopics ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}>
                                  {index < completedTopics ? "✓" : index + 1}
                                </div>
                                <span>{item.title}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-9">
                                <p className="text-muted-foreground mb-4">{item.content}</p>
                                <Button 
                                  size="sm" 
                                  variant={index < completedTopics ? "outline" : "default"}
                                  onClick={() => handleMarkComplete(index)}
                                  className="flex items-center gap-1"
                                >
                                  {index < completedTopics ? (
                                    <>
                                      <CheckCircle className="h-4 w-4" /> Completed
                                    </>
                                  ) : (
                                    "Mark as Complete"
                                  )}
                                </Button>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>

                    {progress[activeRoadmap] === 100 && (
                      <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900/30">
                        <div className="flex items-center gap-2 text-green-700 dark:text-green-400 font-medium mb-2">
                          <CheckCircle className="h-5 w-5" />
                          <span>Course Completed!</span>
                        </div>
                        <p className="text-green-700/80 dark:text-green-400/80 text-sm">
                          Congratulations! You've completed this course. You can now download your certificate or move on to the next course in your learning journey.
                        </p>
                        <Button variant="outline" className="mt-4" onClick={() => toast.success("Certificate downloaded")}>
                          Download Certificate
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="resources" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {courseResources.map((section, idx) => (
                    <Card key={idx} className="h-full">
                      <CardHeader>
                        <CardTitle>{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {section.items.map((item, i) => (
                            <li key={i} className="p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                              <div className="flex items-start">
                                <FileText className="h-5 w-5 mt-0.5 mr-3 text-infinity-600 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-medium">{item.title}</div>
                                  <div className="text-sm text-muted-foreground mb-2">{item.description}</div>
                                  <div className="flex justify-between items-center">
                                    <div className="text-xs">
                                      {item.duration && <Badge variant="outline" className="mr-2">{item.duration}</Badge>}
                                      {item.level && <Badge variant="outline">{item.level}</Badge>}
                                      {item.pages && <Badge variant="outline">{item.pages} pages</Badge>}
                                      {item.format && <Badge variant="outline" className="ml-2">{item.format}</Badge>}
                                      {item.type && <Badge variant="outline">{item.type}</Badge>}
                                      {item.difficulty && (
                                        <Badge 
                                          variant={
                                            item.difficulty === "Easy" ? "default" :
                                            item.difficulty === "Medium" ? "secondary" :
                                            "destructive"
                                          }
                                        >
                                          {item.difficulty}
                                        </Badge>
                                      )}
                                    </div>
                                    <Button 
                                      size="sm" 
                                      variant="ghost"
                                      onClick={() => section.title === "Interactive Tools" ? 
                                        handleOpenTool(item.title) : 
                                        handleDownloadResource(item.title)
                                      }
                                    >
                                      {section.title === "Interactive Tools" ? "Open" : "Download"}
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full">
                          View All {section.title}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </FeaturePageTemplate>
    </div>
  );
};

export default LearningResources;
