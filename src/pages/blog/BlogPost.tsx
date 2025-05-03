
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Calendar, Tag, Share2, BookmarkPlus, ThumbsUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Sample articles data
  const articles = {
    "rising-tariffs-global-markets": {
      title: "The Impact of Rising Tariffs on Global Markets",
      excerpt: "An analysis of how recent tariff changes are reshaping international trade dynamics and market behavior.",
      content: `
        <h2>Introduction</h2>
        <p>In recent months, tariffs have emerged as a dominant force shaping global market dynamics. As countries implement new trade barriers and renegotiate long-standing agreements, investors across the world are grappling with unprecedented levels of uncertainty. This article examines the wide-ranging impact of these tariff policies on various market segments and explores strategies for navigating this complex environment.</p>
        
        <h2>Historical Context</h2>
        <p>Trade barriers have historically served as tools for economic protection and political leverage. The current wave of tariff implementations, however, marks a significant shift from the free-trade consensus that has largely dominated global economic policy since the 1990s. Understanding this historical context provides valuable perspective on current market reactions.</p>
        
        <h2>Impact on Global Supply Chains</h2>
        <p>Perhaps the most immediate effect of rising tariffs has been the disruption of established supply chains. Companies that have spent decades optimizing global production networks are now reassessing their strategies. This reorganization carries significant implications for corporate earnings, operational efficiency, and long-term competitive positioning.</p>
        
        <h2>Market Sector Analysis</h2>
        <p>Different market sectors show varying degrees of sensitivity to tariff changes. Import-dependent industries such as consumer electronics, automotive, and retail face direct cost pressures, while domestically-focused sectors may experience indirect effects through broader economic shifts. This section provides a detailed breakdown of sector-specific impacts.</p>
        
        <h2>Emerging Market Vulnerabilities</h2>
        <p>Emerging markets face particular challenges in the current tariff environment. Export-oriented economies must navigate reduced access to key markets, while simultaneously managing currency pressures and potential capital outflows. This creates a complex risk profile for investors in these markets.</p>
        
        <h2>Investment Strategy Implications</h2>
        <p>In light of these developments, investors may consider several strategic adjustments. Geographic diversification, sector rotation, and increased emphasis on companies with pricing power and flexible supply chains represent potential approaches to mitigating tariff-related risks.</p>
        
        <h2>Looking Forward</h2>
        <p>While predicting the exact trajectory of trade policy remains challenging, several key indicators merit close attention. Political developments, bilateral negotiations, and economic data will provide important signals about the durability and potential expansion of current tariff regimes.</p>
        
        <h2>Conclusion</h2>
        <p>As tariffs reshape the global economic landscape, adaptability becomes a crucial attribute for successful investment. By understanding the multifaceted impact of these policies and maintaining a flexible approach to asset allocation, investors can navigate this period of heightened uncertainty while positioning for long-term growth opportunities.</p>
      `,
      author: "Anupam Singh",
      authorRole: "Chief Markets Strategist",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      date: "May 2, 2025",
      category: "Markets",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      readTime: "8 min read",
      tags: ["Global Trade", "Tariffs", "Market Analysis", "Economic Policy", "International Relations"]
    },
    "understanding-modern-recessions": {
      title: "Understanding Modern Economic Recessions",
      excerpt: "A deep dive into the changing nature of economic downturns in the 21st century global economy.",
      content: `
        <h2>Introduction</h2>
        <p>Economic recessions in the 21st century have taken on new characteristics that distinguish them from historical downturns. From the tech bubble burst to the 2008 financial crisis and the pandemic-induced recession, each event has revealed evolving dynamics in how modern economies contract and recover. This article explores these new patterns and their implications for investors and policymakers.</p>
        
        <h2>The Evolving Nature of Recessions</h2>
        <p>Modern recessions are increasingly characterized by factors that were less prominent in earlier economic history. Financial contagion, technology disruption, and global interconnectedness have created new transmission mechanisms and amplification effects. Understanding these dynamics is essential for anticipating both the onset and resolution of economic contractions.</p>
        
        <h2>Financial System Vulnerabilities</h2>
        <p>Contemporary recessions often originate in, or are significantly amplified by, the financial system. The increasing complexity of financial instruments, growth in non-bank financial intermediaries, and the acceleration of market movements through algorithmic trading have created new systemic vulnerabilities that can rapidly transform sector-specific problems into broader economic crises.</p>
        
        <h2>The Role of Central Banks</h2>
        <p>Central banks have emerged as the first line of defense against modern recessions, deploying increasingly unconventional policy tools to stabilize economies. This expansion of monetary authority has fundamentally altered both the trajectory of recessions and the investment landscape during recovery periods. This section examines the evolving playbook of central bank intervention.</p>
        
        <h2>Fiscal Policy Responses</h2>
        <p>Government fiscal responses have also evolved significantly, with larger, faster, and more directly targeted interventions becoming the norm. From pandemic stimulus checks to industry-specific bailouts, these measures represent a departure from traditional approaches to counter-cyclical spending.</p>
        
        <h2>Labor Market Transformations</h2>
        <p>Modern recessions have revealed and accelerated structural changes in labor markets. Remote work capabilities, gig economy growth, and automation have created new patterns in employment disruption and recovery that differ markedly from historical norms.</p>
        
        <h2>International Transmission</h2>
        <p>The global nature of modern supply chains and financial markets means that recessions now transmit across borders with unprecedented speed and force. This section explores the mechanisms of international contagion and strategies for managing the resulting risks.</p>
        
        <h2>Investment Implications</h2>
        <p>For investors, the changing nature of recessions necessitates adjusted approaches to portfolio construction and risk management. Techniques such as factor diversification, adaptive asset allocation, and strategic use of liquid alternatives may offer enhanced resilience in this new environment.</p>
        
        <h2>Conclusion</h2>
        <p>As modern recessions continue to evolve in their causes, characteristics, and resolution mechanisms, flexibility in economic analysis and investment strategy becomes increasingly valuable. By understanding these new dynamics, stakeholders can better prepare for and respond to economic contractions in the 21st century context.</p>
      `,
      author: "Anupam Singh",
      authorRole: "Chief Markets Strategist",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      date: "April 28, 2025",
      category: "Economy",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=800&auto=format&fit=crop",
      readTime: "12 min read",
      tags: ["Economic Analysis", "Recession", "Financial Markets", "Monetary Policy", "Fiscal Policy"]
    },
    "future-digital-finance-trends": {
      title: "The Future of Digital Finance: Trends to Watch",
      excerpt: "Exploring emerging technologies and innovations shaping the future of financial services.",
      content: `
        <h2>Introduction</h2>
        <p>The financial services industry is undergoing a profound transformation driven by technological innovation. From blockchain to artificial intelligence, emerging technologies are reshaping how financial products are designed, delivered, and consumed. This article explores the key trends that are likely to define the future of digital finance and their implications for investors, institutions, and consumers.</p>
        
        <h2>Decentralized Finance (DeFi)</h2>
        <p>Decentralized finance represents one of the most significant disruptions to traditional financial models. By leveraging blockchain technology to eliminate intermediaries, DeFi platforms are creating new paradigms for lending, borrowing, trading, and investment. This section examines the growth trajectory of DeFi and its potential to reshape financial services architecture.</p>
        
        <h2>Embedded Finance</h2>
        <p>The integration of financial services into non-financial platforms and applications is accelerating. From e-commerce checkout financing to in-app investment features, embedded finance is blurring the boundaries between financial and non-financial experiences. This trend carries significant implications for customer acquisition strategies and competitive dynamics in financial services.</p>
        
        <h2>AI-Driven Financial Services</h2>
        <p>Artificial intelligence is rapidly advancing beyond basic automation to enable more sophisticated applications in risk assessment, customer service, portfolio management, and fraud detection. The growing capability of AI systems to process unstructured data and recognize complex patterns is opening new frontiers in financial products and services.</p>
        
        <h2>Central Bank Digital Currencies</h2>
        <p>As governments and central banks explore the creation of official digital currencies, the potential implications for monetary policy, financial stability, and payment systems are profound. This section explores the current landscape of CBDC development and the possible consequences for financial markets and banking systems.</p>
        
        <h2>Biometric Authentication</h2>
        <p>Advanced biometric technologies are transforming identity verification and security in financial services. From facial recognition to behavioral biometrics, these technologies promise enhanced security with reduced friction. However, they also raise important questions about privacy and data protection.</p>
        
        <h2>Quantum Computing</h2>
        <p>While still in early stages, quantum computing has the potential to fundamentally transform financial modeling, cryptography, and risk management. Financial institutions are beginning to explore quantum applications in portfolio optimization, options pricing, and other computation-intensive areas.</p>
        
        <h2>Regulatory Technology</h2>
        <p>As financial regulations grow more complex, technology solutions for compliance and reporting are becoming increasingly sophisticated. RegTech innovations are helping institutions navigate regulatory requirements more efficiently while providing regulators with better tools for system-wide risk monitoring.</p>
        
        <h2>Conclusion</h2>
        <p>The future of digital finance will be shaped by the complex interplay of these emerging technologies, evolving customer expectations, and regulatory responses. For stakeholders across the financial ecosystem, staying informed about these trends and their potential convergence will be essential for navigating the opportunities and challenges ahead.</p>
      `,
      author: "Anupam Singh",
      authorRole: "Chief Markets Strategist",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
      date: "April 23, 2025",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=800&auto=format&fit=crop",
      readTime: "10 min read",
      tags: ["Digital Finance", "Fintech", "Blockchain", "Artificial Intelligence", "Financial Innovation"]
    },
  };
  
  const article = articles[slug];
  
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="mb-6">The article you're looking for doesn't exist or has been removed.</p>
            <Button asChild>
              <Link to="/indian-street">Back to The Indian Street</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const relatedArticles = Object.values(articles)
    .filter(a => a.category === article.category && a.title !== article.title)
    .slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <BackButton />
          
          <article className="max-w-4xl mx-auto">
            <header>
              <Link 
                to={`/blog/category/${article.category.toLowerCase()}`}
                className="inline-block text-sm font-medium text-green-600 dark:text-green-400 hover:underline mb-4"
              >
                {article.category}
              </Link>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
                {article.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={article.authorImage} 
                      alt={article.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{article.author}</div>
                    <div className="text-sm text-muted-foreground">{article.authorRole}</div>
                  </div>
                </div>
                
                <Separator orientation="vertical" className="hidden sm:block h-6" />
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>
              </div>
            </header>
            
            <div className="aspect-[16/9] relative mb-8 rounded-lg overflow-hidden">
              <img 
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="prose prose-green dark:prose-invert max-w-none mb-10">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
            
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <div key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>Like</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Comment</span>
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="my-10" />
            
            <div className="mb-12">
              <h2 className="text-2xl font-serif font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArticles.map((related, index) => (
                  <Card key={index} className="overflow-hidden">
                    <Link to={`/blog/${Object.keys(articles).find(key => articles[key] === related)}`}>
                      <div className="aspect-[16/9] relative">
                        <img 
                          src={related.image} 
                          alt={related.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-xs font-medium text-green-600 dark:text-green-400 mb-2">
                          {related.category}
                        </div>
                        <h3 className="font-medium mb-2 line-clamp-2 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
