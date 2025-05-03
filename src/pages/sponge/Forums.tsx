
import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, PlusCircle, Star, Users, Clock, Search, Filter } from "lucide-react";

const SpongeForums = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const forumCategories = [
    { id: "all", name: "All Discussions" },
    { id: "trading", name: "Trading Strategies" },
    { id: "investing", name: "Long-term Investing" },
    { id: "technical", name: "Technical Analysis" },
    { id: "fundamental", name: "Fundamental Analysis" },
    { id: "macro", name: "Macro Economics" },
    { id: "crypto", name: "Cryptocurrencies" },
    { id: "beginners", name: "Beginner's Corner" }
  ];
  
  const discussions = [
    {
      id: 1,
      title: "What indicators work best for day trading Indian markets?",
      author: "TradingMaster",
      authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=50&auto=format&fit=crop",
      category: "trading",
      replies: 24,
      views: 342,
      lastActive: "2 hours ago",
      isHot: true,
      isPinned: true
    },
    {
      id: 2,
      title: "Portfolio allocation strategies for the current market conditions",
      author: "InvestmentGuru",
      authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50&auto=format&fit=crop",
      category: "investing",
      replies: 18,
      views: 276,
      lastActive: "4 hours ago",
      isHot: true,
      isPinned: false
    },
    {
      id: 3,
      title: "How to interpret divergences in RSI and MACD",
      author: "TechnicalTrader",
      authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=50&auto=format&fit=crop",
      category: "technical",
      replies: 31,
      views: 412,
      lastActive: "6 hours ago",
      isHot: false,
      isPinned: false
    },
    {
      id: 4,
      title: "Understanding financial statements for value investing",
      author: "ValueHunter",
      authorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=50&auto=format&fit=crop",
      category: "fundamental",
      replies: 16,
      views: 238,
      lastActive: "10 hours ago",
      isHot: false,
      isPinned: false
    },
    {
      id: 5,
      title: "Impact of global inflation trends on emerging markets",
      author: "MacroObserver",
      authorAvatar: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=50&auto=format&fit=crop",
      category: "macro",
      replies: 29,
      views: 367,
      lastActive: "12 hours ago",
      isHot: true,
      isPinned: false
    },
    {
      id: 6,
      title: "Bitcoin halving event: potential market impact",
      author: "CryptoEnthusiast",
      authorAvatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50&auto=format&fit=crop",
      category: "crypto",
      replies: 42,
      views: 534,
      lastActive: "18 hours ago",
      isHot: true,
      isPinned: false
    },
    {
      id: 7,
      title: "Where to start with stock investing as a complete beginner?",
      author: "NewInvestor",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=50&auto=format&fit=crop",
      category: "beginners",
      replies: 37,
      views: 489,
      lastActive: "1 day ago",
      isHot: false,
      isPinned: true
    }
  ];
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = activeCategory === "all" || discussion.category === activeCategory;
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const sortedDiscussions = [...filteredDiscussions].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return 0;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-4">
          <BackButton />
        </div>
        
        <section className="py-12 bg-gradient-to-b from-orange-500/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-radial from-orange-300/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-64 h-64 bg-gradient-radial from-orange-500/10 to-transparent rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center rounded-full bg-orange-100 p-2 dark:bg-orange-900/40 mb-4">
                <MessageSquare className="h-5 w-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-infinity-600">Sponge Community Forums</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Connect with fellow traders and investors to discuss markets, strategies, and financial insights.
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center max-w-4xl mx-auto">
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search discussions..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <Button className="w-full md:w-auto bg-orange-600 hover:bg-orange-700">
                <PlusCircle className="h-4 w-4 mr-2" />
                New Discussion
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-64 shrink-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <nav className="space-y-1">
                      {forumCategories.map((category) => (
                        <Button 
                          key={category.id} 
                          variant={activeCategory === category.id ? "default" : "ghost"}
                          className={`w-full justify-start ${activeCategory === category.id ? "bg-orange-600 hover:bg-orange-700" : ""}`}
                          onClick={() => setActiveCategory(category.id)}
                        >
                          {category.name}
                        </Button>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Forum Stats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Topics</div>
                        <div className="text-2xl font-bold">1,492</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Posts</div>
                        <div className="text-2xl font-bold">24,853</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Members</div>
                        <div className="text-2xl font-bold">8,761</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="flex-1">
                <Tabs defaultValue="trending" className="mb-6">
                  <TabsList>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="recent">Recent</TabsTrigger>
                    <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">
                    {activeCategory === "all" ? "All Discussions" : forumCategories.find(c => c.id === activeCategory)?.name}
                  </h2>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    <span>Filter</span>
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {sortedDiscussions.length > 0 ? (
                    sortedDiscussions.map((discussion) => (
                      <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <div className="p-4 md:p-6">
                            <div className="flex items-start gap-4">
                              <div className="hidden md:block">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                  <img 
                                    src={discussion.authorAvatar} 
                                    alt={discussion.author}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex flex-wrap gap-2 mb-1">
                                  {discussion.isPinned && (
                                    <Badge variant="outline" className="text-xs">Pinned</Badge>
                                  )}
                                  {discussion.isHot && (
                                    <Badge className="bg-red-500 hover:bg-red-600">Hot</Badge>
                                  )}
                                  <Badge variant="secondary">{forumCategories.find(c => c.id === discussion.category)?.name}</Badge>
                                </div>
                                
                                <h3 className="text-lg font-medium mb-2 hover:text-orange-600 transition-colors">
                                  <a href="#" className="hover:underline">{discussion.title}</a>
                                </h3>
                                
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    <span>Started by {discussion.author}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageSquare className="h-4 w-4" />
                                    <span>{discussion.replies} replies</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="h-4 w-4" />
                                    <span>{discussion.views} views</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{discussion.lastActive}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <Card>
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto" />
                        </div>
                        <h3 className="font-medium text-lg mb-2">No discussions found</h3>
                        <p className="text-muted-foreground mb-6">
                          No discussions matched your search criteria. Try adjusting your filters or search terms.
                        </p>
                        <Button onClick={() => {setSearchQuery(""); setActiveCategory("all");}}>
                          Clear Filters
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button className="bg-orange-600 hover:bg-orange-700">
                    Load More Discussions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SpongeForums;
