
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SentimentAnalysis = () => {
  return (
    <FeaturePageTemplate
      title="Sentiment Analysis"
      subtitle="AI-powered analysis of news and social media to identify market sentiment and trading opportunities"
      icon={<Microscope className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "Infinity's Sentiment Analysis tool leverages advanced AI algorithms to analyze vast amounts of financial news, social media, and market commentary in real-time, providing you with actionable insights about market sentiment.",
        "Our proprietary Natural Language Processing (NLP) system can detect subtle shifts in market mood across multiple sources, quantify sentiment for specific assets, sectors, or themes, and alert you to potential opportunities or risks before they're reflected in price.",
        "By incorporating sentiment data into your trading and investment decisions, you gain an information edge beyond traditional technical and fundamental analysis, helping you capitalize on market perception shifts before they become consensus."
      ]}
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Real-time Sentiment Scoring",
          description: "Monitor sentiment for stocks, sectors, and broader markets updated continuously throughout trading hours."
        },
        {
          title: "Social Media Analysis",
          description: "Track sentiment across Twitter, Reddit, StockTwits, and other platforms frequented by retail and professional traders."
        },
        {
          title: "News Impact Assessment",
          description: "Quantify the impact of breaking news and research reports on market sentiment and asset prices."
        },
        {
          title: "Sentiment Divergence Alerts",
          description: "Receive notifications when sentiment significantly diverges from price action, indicating potential trade opportunities."
        },
        {
          title: "Historical Sentiment Patterns",
          description: "Analyze historical sentiment data to identify recurring patterns and their correlation with price movements."
        },
        {
          title: "Customizable Dashboards",
          description: "Create personalized sentiment dashboards focused on your specific watchlist, portfolio, or investment themes."
        }
      ]}
      howItWorks={[
        {
          step: "Data Collection",
          description: "Our system continuously monitors and collects data from thousands of sources, including financial news sites, social media platforms, analyst reports, earnings calls, and regulatory filings."
        },
        {
          step: "Natural Language Processing",
          description: "Advanced AI algorithms analyze text to extract sentiment, identifying positive, negative, or neutral expressions and weighing their significance based on context and source credibility."
        },
        {
          step: "Entity Recognition",
          description: "The system identifies specific companies, assets, sectors, or economic themes being discussed, linking sentiment to relevant investment instruments."
        },
        {
          step: "Sentiment Quantification",
          description: "Raw sentiment data is processed into numerical scores and visual indicators, making it easy to interpret and compare sentiment across different assets or time periods."
        },
        {
          step: "Alert Generation",
          description: "The platform monitors for significant sentiment shifts, unusual activity patterns, or sentiment-price divergences, generating real-time alerts based on your preferences."
        }
      ]}
      useCases={[
        {
          title: "Event-Driven Trading",
          description: "Monitor sentiment shifts during major market events, earnings announcements, or economic releases to capture short-term trading opportunities."
        },
        {
          title: "Contrarian Strategies",
          description: "Identify extreme sentiment readings that often precede market reversals, allowing you to implement contrarian trading strategies with better timing."
        },
        {
          title: "Sector Rotation",
          description: "Track relative sentiment changes across different sectors to identify potential sector rotation trends before they become apparent in price action."
        },
        {
          title: "Risk Management",
          description: "Use sentiment indicators as an early warning system for potential problems affecting your portfolio holdings, allowing proactive risk management."
        }
      ]}
      additionalContent={
        <div className="py-12 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-6">Explore Our AI-Powered Analysis Dashboard</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get deep insights into market sentiment with our interactive dashboard featuring real-time data visualization and advanced analytics
            </p>
            <Button size="lg" className="bg-infinity-600 hover:bg-infinity-700" asChild>
              <Link to="/features/sentiment-analysis-detail">
                View Sentiment Analysis Dashboard
              </Link>
            </Button>
          </div>
        </div>
      }
    />
  );
};

export default SentimentAnalysis;
