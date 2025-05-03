
import React, { useState } from "react";
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Book, ChevronRight, GraduationCap, FileText } from "lucide-react";
import { BackButton } from "@/components/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LearningResources = () => {
  const [activeRoadmap, setActiveRoadmap] = useState<string>("personal-finance");
  const [progress, setProgress] = useState({
    "personal-finance": 30,
    "stock-market": 15,
    "technical-analysis": 0,
    "fundamental-analysis": 0,
    "risk-management": 0
  });
  
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
        "Introduction to Personal Finance Fundamentals",
        "Stock Market for Beginners",
        "Advanced Technical Analysis",
        "Understanding Company Financials",
        "Portfolio Diversification Strategies"
      ]
    },
    {
      title: "E-Books & Guides",
      items: [
        "The Complete Guide to Personal Finance",
        "Stock Market Investing 101",
        "Technical Analysis Patterns Explained",
        "Financial Statement Analysis Guide",
        "Risk Management Toolkit"
      ]
    },
    {
      title: "Interactive Tools",
      items: [
        "Financial Goal Calculator",
        "Investment Returns Calculator",
        "Risk Assessment Tool",
        "Portfolio Analyzer",
        "Tax Planning Assistant"
      ]
    },
    {
      title: "Practice Exercises",
      items: [
        "Budget Creation Workshop",
        "Stock Screening Practice",
        "Chart Pattern Recognition",
        "Financial Ratio Analysis",
        "Portfolio Stress Testing"
      ]
    }
  ];

  const handleStartCourse = (id) => {
    setActiveRoadmap(id);
  };

  const handleMarkComplete = (index) => {
    if (activeRoadmap === "personal-finance") {
      const newProgress = Math.min(progress["personal-finance"] + 10, 100);
      setProgress({...progress, "personal-finance": newProgress});
    }
  };

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
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant={roadmap.level === "Beginner" ? "default" : roadmap.level === "Intermediate" ? "secondary" : "destructive"}>
                            {roadmap.level}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{roadmap.duration}</span>
                        </div>
                        <CardTitle>{roadmap.title}</CardTitle>
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
                        <CardTitle className="text-2xl">Personal Finance Basics</CardTitle>
                        <CardDescription>Master the fundamentals of managing your money effectively</CardDescription>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Your progress</span>
                        <span className="text-sm font-medium">{progress["personal-finance"]}%</span>
                      </div>
                      <Progress value={progress["personal-finance"]} className="h-2" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">Course Content</h3>
                      <Accordion type="single" collapsible className="w-full">
                        {personalFinanceContent.map((item, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>
                              <div className="flex items-center">
                                <div className={`w-6 h-6 rounded-full mr-3 flex items-center justify-center text-xs ${index < progress["personal-finance"] / 10 ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"}`}>
                                  {index < progress["personal-finance"] / 10 ? "✓" : index + 1}
                                </div>
                                <span>{item.title}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="pl-9">
                                <p className="text-muted-foreground mb-4">{item.content}</p>
                                <Button 
                                  size="sm" 
                                  variant={index < progress["personal-finance"] / 10 ? "outline" : "default"}
                                  onClick={() => handleMarkComplete(index)}
                                >
                                  {index < progress["personal-finance"] / 10 ? "Completed" : "Mark as Complete"}
                                </Button>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
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
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-infinity-600" />
                              <span>{item}</span>
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
