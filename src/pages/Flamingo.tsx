
import React, { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Box, BarChart3, LineChart, Users, Shield, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Flamingo = () => {
  const navigate = useNavigate();

  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDemoClick = () => {
    toast.success("Demo mode activated! You can now explore all premium features for the next 30 minutes.");
  };

  const handleStartedClick = () => {
    window.location.href = "/register";
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Back button */}
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
        
        <section className="py-20 bg-gradient-to-b from-pink-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-pink-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center rounded-full bg-pink-100 p-2 dark:bg-pink-900/40 mb-4">
                  <Box className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-infinity-600">Flamingo</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  A modern brokerage platform designed for today's investors. Experience seamless trading with powerful tools and competitive pricing.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-pink-600 hover:bg-pink-700" onClick={handleStartedClick}>
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" onClick={handleDemoClick}>
                    View Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-50 dark:from-pink-900/30 dark:to-infinity-900/30 rounded-lg overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop" 
                      alt="Trading interface" 
                      className="absolute inset-0 object-cover w-full h-full opacity-60 dark:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-lg font-medium text-pink-900 dark:text-pink-100">NIFTY 50</p>
                          <p className="text-2xl font-bold">21,843.24</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-600 dark:text-green-400 font-medium">+1.25%</p>
                          <p className="text-sm text-muted-foreground">Today</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-200 dark:bg-pink-800/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Advanced Trading Tools</h2>
              <p className="section-subtitle">
                All the tools you need for informed investing decisions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Charting</h3>
                <p className="text-muted-foreground mb-6">Interactive charts with over 100+ indicators and drawing tools for technical analysis.</p>
                <Link to="/features/advanced-charting" className="text-pink-600 dark:text-pink-400 font-medium hover:underline mt-auto">
                  Learn more →
                </Link>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6">
                  <LineChart className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Stock Screener</h3>
                <p className="text-muted-foreground mb-6">Find stocks that match your criteria with our powerful screener and filtering tools.</p>
                <Link to="/features/stock-screener" className="text-pink-600 dark:text-pink-400 font-medium hover:underline mt-auto">
                  Learn more →
                </Link>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Portfolio Analytics</h3>
                <p className="text-muted-foreground mb-6">Track, manage and analyze your investments in one place with detailed reports.</p>
                <Link to="/features/portfolio-analytics" className="text-pink-600 dark:text-pink-400 font-medium hover:underline mt-auto">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <Tabs defaultValue="charts" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="charts">Charts</TabsTrigger>
                <TabsTrigger value="screener">Screener</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              </TabsList>
              
              <TabsContent value="charts" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1642790246569-50ef6dbb0d55?q=80&w=2070&auto=format&fit=crop"
                        alt="Advanced charts"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                      <div className="text-center relative z-10">
                        <h3 className="text-xl font-bold mb-2">Advanced Charting</h3>
                        <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                          Interactive charts with over 100+ indicators and drawing tools. Analyze market trends with precision using customizable timeframes.
                        </p>
                        <Button className="bg-pink-600 hover:bg-pink-700">Explore Charts</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="screener" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?q=80&w=2071&auto=format&fit=crop"
                        alt="Stock screener"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                      <div className="text-center relative z-10">
                        <h3 className="text-xl font-bold mb-2">Stock Screener</h3>
                        <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                          Find stocks that match your criteria with our powerful screener. Filter by fundamentals, technicals, and over 150 parameters.
                        </p>
                        <Button className="bg-pink-600 hover:bg-pink-700">Try Screener</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-muted rounded-md flex items-center justify-center relative overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                        alt="Portfolio analytics"
                        className="absolute inset-0 w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                      <div className="text-center relative z-10">
                        <h3 className="text-xl font-bold mb-2">Portfolio Analytics</h3>
                        <p className="text-muted-foreground max-w-lg mx-auto mb-6">
                          Track, manage and analyze your investments in one place. Get insights into sector allocation, risk assessment, and performance metrics.
                        </p>
                        <Button className="bg-pink-600 hover:bg-pink-700">View Demo</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-pink-50/50 dark:bg-infinity-950/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-pink-100 p-2 dark:bg-pink-900/40 mb-4">
                <Shield className="h-5 w-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="section-title">Why Choose Flamingo?</h2>
              <p className="section-subtitle">
                We're not just another brokerage - we're reinventing trading
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="bg-white dark:bg-infinity-900/60 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Zero Brokerage</h3>
                  <p className="text-muted-foreground text-sm">Trade equity delivery at zero cost, with flat rates for intraday and F&O.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-infinity-900/60 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">High Security</h3>
                  <p className="text-muted-foreground text-sm">Enterprise-grade security with 2FA, biometric authentication, and 256-bit encryption.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-infinity-900/60 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Lightning Fast</h3>
                  <p className="text-muted-foreground text-sm">Execute trades in microseconds with our high-performance infrastructure.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-infinity-900/60 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                    <svg className="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Education</h3>
                  <p className="text-muted-foreground text-sm">Comprehensive learning resources to help you make informed decisions.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mb-16">
              <h2 className="section-title">Pricing Plans</h2>
              <p className="section-subtitle">
                Transparent pricing designed to suit investors of all levels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Basic</h3>
                    <div className="text-3xl font-bold mb-4">₹0</div>
                    <p className="text-muted-foreground mb-6">Perfect for beginners</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Free equity delivery
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Basic charting
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        5 watchlists
                      </li>
                    </ul>
                    
                    <Button className="w-full" onClick={handleStartedClick}>Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-pink-200 dark:border-pink-800 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-xs font-bold uppercase px-3 py-1 rounded-full w-max mx-auto mb-4">Popular</div>
                    <h3 className="text-xl font-bold mb-2">Pro</h3>
                    <div className="text-3xl font-bold mb-4">₹299<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                    <p className="text-muted-foreground mb-6">For active traders</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Everything in Basic
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Advanced charting
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        20 watchlists
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Stock screener
                      </li>
                    </ul>
                    
                    <Button className="w-full bg-pink-600 hover:bg-pink-700" onClick={handleStartedClick}>Get Started</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">Premium</h3>
                    <div className="text-3xl font-bold mb-4">₹999<span className="text-sm text-muted-foreground font-normal">/month</span></div>
                    <p className="text-muted-foreground mb-6">For professional traders</p>
                    
                    <ul className="space-y-3 text-left mb-8">
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Everything in Pro
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        API access
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Algo trading
                      </li>
                      <li className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                        Dedicated support
                      </li>
                    </ul>
                    
                    <Button className="w-full" onClick={handleStartedClick}>Get Started</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Flamingo;
