
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { BackButton } from "@/components/back-button";
import { useEffect } from "react";

const IndianStreet = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredArticles = [
    {
      title: "The Impact of Rising Tariffs on Global Markets",
      excerpt: "An analysis of how recent tariff changes are reshaping international trade dynamics and market behavior.",
      date: "May 2, 2025",
      category: "Markets",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      readTime: "8 min read",
      slug: "rising-tariffs-global-markets"
    },
    {
      title: "Understanding Modern Economic Recessions",
      excerpt: "A deep dive into the changing nature of economic downturns in the 21st century global economy.",
      date: "April 28, 2025",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      readTime: "12 min read",
      slug: "understanding-modern-recessions"
    },
    {
      title: "The Future of Digital Finance: Trends to Watch",
      excerpt: "Exploring emerging technologies and innovations shaping the future of financial services.",
      date: "April 23, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
      readTime: "10 min read",
      slug: "future-digital-finance-trends"
    }
  ];

  const latestNews = [
    {
      title: "Reserve Bank Announces New Monetary Policy",
      time: "2 hours ago",
      category: "Economy"
    },
    {
      title: "Tech Giants Report Q1 Earnings Above Expectations",
      time: "4 hours ago",
      category: "Markets"
    },
    {
      title: "Government Unveils New Infrastructure Investment Plan",
      time: "6 hours ago",
      category: "Policy"
    },
    {
      title: "Global Commodity Prices Show Signs of Stabilization",
      time: "8 hours ago",
      category: "Commodities"
    },
    {
      title: "Banking Sector Reforms: What Investors Need to Know",
      time: "10 hours ago",
      category: "Banking"
    }
  ];

  const categories = [
    { name: "Markets", icon: "chart-bar", path: "markets" },
    { name: "Economy", icon: "trending-up", path: "economy" },
    { name: "Corporate", icon: "briefcase", path: "corporate" },
    { name: "Technology", icon: "smartphone", path: "technology" },
    { name: "Trade", icon: "trending-up", path: "trade" },
    { name: "Banking", icon: "banknote", path: "banking" },
    { name: "Energy", icon: "zap", path: "energy" },
    { name: "Global", icon: "globe", path: "global" }
  ];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "chart-bar":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        );
      case "trending-up":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        );
      case "briefcase":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
      case "smartphone":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
      case "banknote":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        );
      case "zap":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        );
      case "globe":
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 pt-4">
          <BackButton />
        </div>
        
        <section className="py-20 bg-gradient-to-b from-green-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-green-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-green-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-2 dark:bg-green-900/40 mb-4">
                  <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-infinity-600">The Indian Street</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                  Stay informed with the latest financial news, market trends, and expert analysis from India and around the world.
                </p>
              </div>
              
              <div className="flex-1">
                <Card className="overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" 
                      alt="Featured Article" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <div className="text-white">
                        <div className="text-sm font-medium mb-2">Featured Article</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-2">The Digital Transformation of Financial Markets</h3>
                        <p className="text-sm text-white/80">How technology is reshaping the financial landscape in India and globally</p>
                        <Link to="/blog/future-digital-finance-trends" className="inline-block mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-white text-sm font-medium">Read Article</Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="featured" className="w-full">
              <TabsList className="grid w-full max-w-xl mx-auto grid-cols-3 mb-12">
                <TabsTrigger value="featured">Featured</TabsTrigger>
                <TabsTrigger value="latest">Latest</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>
              
              <TabsContent value="featured" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {featuredArticles.map((article, index) => (
                    <Card key={index} className="overflow-hidden">
                      <div className="aspect-[16/9] relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center mb-1">
                          <Link 
                            to={`/blog/category/${article.category.toLowerCase()}`}
                            className="text-xs font-medium text-green-600 dark:text-green-400 hover:underline"
                          >
                            {article.category}
                          </Link>
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                        </div>
                        <Link to={`/blog/${article.slug}`}>
                          <h3 className="text-lg font-bold leading-tight hover:text-green-600 dark:hover:text-green-400 transition-colors">{article.title}</h3>
                        </Link>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <div className="flex justify-between items-center w-full">
                          <div className="text-xs text-muted-foreground">{article.readTime}</div>
                          <Link 
                            to={`/blog/${article.slug}`}
                            className="text-sm text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors"
                          >
                            Read More
                          </Link>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="latest" className="mt-6">
                <div className="max-w-3xl mx-auto">
                  <div className="border-l border-muted pl-6 space-y-8">
                    {latestNews.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-green-500 border-4 border-background"></div>
                        <time className="text-sm text-muted-foreground">{item.time}</time>
                        <h3 className="text-lg font-medium mt-1">{item.title}</h3>
                        <span className="inline-block text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full mt-2">{item.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="trending" className="mt-6">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="text-3xl text-muted-foreground">#</div>
                    <h3 className="text-2xl font-bold">Trending Topics</h3>
                    <div className="flex flex-wrap gap-3 justify-center mt-6">
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#IndianMarkets</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#EconomicPolicy</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#DigitalRupee</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#GlobalTrade</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#StartupFunding</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#TechStocks</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#CryptoRegulation</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#SustainableInvesting</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#FinTech</span>
                      <span className="px-4 py-2 bg-muted rounded-full text-sm">#InvestmentStrategy</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <section className="py-16 bg-green-50/50 dark:bg-green-950/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="section-title">Categories</h2>
              <p className="section-subtitle">
                Explore our comprehensive coverage across different financial domains
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Link 
                  key={index}
                  to={`/blog/category/${category.path}`} 
                  className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <h3 className="font-medium text-center">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndianStreet;
