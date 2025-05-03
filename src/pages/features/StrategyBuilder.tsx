
import { FeaturePageTemplate } from "@/components/feature-page-template";
import { BarChart2 } from "lucide-react";

const StrategyBuilder = () => {
  return (
    <FeaturePageTemplate
      title="Live Strategy Builder"
      subtitle="Interactive platform to build and test options strategies based on real-time market data"
      icon={<BarChart2 className="h-8 w-8 text-infinity-600 dark:text-infinity-400" />}
      description={[
        "Infinity's Live Strategy Builder is an advanced options trading platform that allows you to create, analyze, and execute complex options strategies using real-time market data and sophisticated analytics.",
        "Our intuitive visual interface makes it easy to construct multi-leg options strategies, visualize potential outcomes across different price scenarios, and understand key risk metrics before you place a trade.",
        "Powered by real-time options pricing models and contextual learning from your past strategies, the platform helps you identify optimal entry and exit points, balance risk and reward, and implement advanced options strategies with confidence."
      ]}
      image="https://images.unsplash.com/photo-1560221328-12fe60f83ab8?q=80&w=1000&auto=format&fit=crop"
      benefits={[
        {
          title: "Visual Strategy Builder",
          description: "Drag-and-drop interface to create spreads, iron condors, butterflies, and custom multi-leg strategies with ease."
        },
        {
          title: "Real-time Risk Analytics",
          description: "Instant calculation of Greeks, profit/loss scenarios, probability of profit, and break-even points as you build strategies."
        },
        {
          title: "Strategy Comparison",
          description: "Compare multiple strategies side-by-side to identify the optimal approach for your market outlook and risk tolerance."
        },
        {
          title: "Historical Backtest",
          description: "Test how your strategy would have performed historically under similar market conditions."
        },
        {
          title: "AI Strategy Suggestions",
          description: "Receive AI-powered recommendations for strategy adjustments based on changing market conditions and your risk parameters."
        },
        {
          title: "One-Click Execution",
          description: "Seamlessly execute complex strategies with a single click, with automatic price improvement algorithms."
        }
      ]}
      howItWorks={[
        {
          step: "Select Underlying Asset",
          description: "Choose from stocks, ETFs, or indices and immediately access current price, volatility, and relevant options chains with real-time pricing."
        },
        {
          step: "Build Your Strategy",
          description: "Use the visual builder to construct your strategy by selecting option strikes, expirations, and quantities. Add multiple legs to create spreads, condors, or custom combinations."
        },
        {
          step: "Analyze Risk Profile",
          description: "View interactive profit/loss graphs, risk metrics, and probability analysis. Adjust parameters to optimize the strategy for your market outlook and risk tolerance."
        },
        {
          step: "Test Different Scenarios",
          description: "Use scenario analysis tools to see how your strategy might perform under different price movements, volatility changes, or time decay scenarios."
        },
        {
          step: "Execute with Precision",
          description: "When ready, execute the entire strategy as a single order with our smart execution algorithm that optimizes for best pricing and fill quality."
        }
      ]}
      useCases={[
        {
          title: "Income Generation",
          description: "Build covered call, cash-secured put, or credit spread strategies optimized for consistent income generation while managing downside risk."
        },
        {
          title: "Directional Trading",
          description: "Construct debit spreads, back spreads, or ratio spreads to capitalize on expected directional moves with defined risk parameters."
        },
        {
          title: "Volatility Strategies",
          description: "Design iron condors, butterflies, or calendar spreads to profit from specific volatility environments or anticipated changes in volatility."
        },
        {
          title: "Risk Hedging",
          description: "Create protective strategies to hedge existing portfolio positions against market downturns or specific risk factors."
        }
      ]}
    />
  );
};

export default StrategyBuilder;
