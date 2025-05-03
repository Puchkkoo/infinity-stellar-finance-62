
import { Award, BarChart2, Lock, Smartphone, BookOpen, Layers, Search, Microscope } from "lucide-react";
import { Link } from "react-router-dom";

export function FeaturesSection() {
  const features = [
    {
      icon: <Layers className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Algo Trading",
      description: "Deploy automated trading strategies based on predefined parameters and market conditions",
      image: "https://images.unsplash.com/photo-1542482378-4e3530c8e525?q=80&w=1000&auto=format&fit=crop",
      url: "/features/algo-trading"
    },
    {
      icon: <Microscope className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Sentiment Analysis",
      description: "AI-powered analysis of news and social media to identify market sentiment and trading opportunities",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      url: "/features/sentiment-analysis"
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Live Strategy Builder",
      description: "Interactive platform to build and test options strategies based on real-time market data",
      image: "https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=1000&auto=format&fit=crop",
      url: "/features/strategy-builder"
    },
    {
      icon: <Search className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Advanced Charting",
      description: "Professional-grade charting tools with over 100 indicators and drawing tools",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
      url: "/features/advanced-charting"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Mobile Trading",
      description: "Trade on the go with our feature-rich mobile applications for iOS and Android",
      image: "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?q=80&w=1000&auto=format&fit=crop",
      url: "/features/mobile-trading"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-infinity-600 dark:text-infinity-400" />,
      title: "Learning Resources",
      description: "Comprehensive educational content to help you make informed investment decisions",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1000&auto=format&fit=crop",
      url: "/features/learning-resources"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Award className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Advanced AI-powered tools and capabilities that set our platform apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <Link 
              key={feature.title} 
              to={feature.url}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden mb-6 h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-infinity-900/30 group-hover:bg-infinity-900/20 transition-all"></div>
                <div className="absolute top-4 left-4 p-3 rounded-full bg-infinity-100/90 dark:bg-infinity-900/90 backdrop-blur-sm">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-infinity-600 dark:group-hover:text-infinity-400 transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
