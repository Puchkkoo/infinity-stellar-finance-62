
import { ServicePageTemplate } from "@/components/service-page-template";

const Forex = () => {
  return (
    <ServicePageTemplate
      title="Forex Trading"
      subtitle="Access global currency markets with institutional-grade liquidity and tools"
      description={[
        "Infinity's Forex trading platform offers comprehensive access to the world's largest financial market, with competitive spreads, deep liquidity, and advanced analytics tools.",
        "Our platform provides real-time market data, customizable charts, and powerful risk management tools to help you navigate currency markets with confidence.",
        "Whether you're day trading or implementing long-term currency strategies, our Forex offering delivers the precision, speed, and reliability that sophisticated traders demand."
      ]}
      image="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Tight Spreads",
          description: "Industry-leading pricing with some of the tightest spreads available in the retail forex market."
        },
        {
          title: "Advanced Execution",
          description: "Ultra-low latency execution with minimal slippage and high fill rates, even during volatile market conditions."
        },
        {
          title: "30+ Currency Pairs",
          description: "Trade major, minor, and exotic currency pairs with institutional-grade liquidity and depth."
        },
        {
          title: "Sophisticated Order Types",
          description: "Execute complex trading strategies with our comprehensive suite of order types including OCO and trailing stops."
        },
        {
          title: "Seamless Integration",
          description: "Forex trading is fully integrated with our other products, allowing for cross-asset strategies and portfolio management."
        },
        {
          title: "24/5 Market Access",
          description: "Trade currencies around the clock during market hours with continuous support and liquidity."
        }
      ]}
      differences={[
        {
          title: "Institutional-Grade Infrastructure",
          description: "Our platform is built on the same technology used by institutional forex traders, providing superior execution and reliability."
        },
        {
          title: "AI-Powered Analysis",
          description: "Unique market insights derived from our proprietary AI analysis of global economic factors affecting currency movements."
        },
        {
          title: "True Price Transparency",
          description: "We provide complete visibility into our pricing model with no hidden markups or manipulation of spreads during market events."
        },
        {
          title: "Integrated Risk Management",
          description: "Sophisticated risk management tools, including position sizing calculators and scenario analysis for currency portfolios."
        }
      ]}
      faqs={[
        {
          question: "What leverage do you offer for forex trading?",
          answer: "We offer flexible leverage options ranging from 1:1 to 1:30 for retail clients, with higher options available for professional clients. Our risk management tools help you determine the appropriate leverage for your trading strategy."
        },
        {
          question: "How do you source liquidity for forex trading?",
          answer: "We aggregate liquidity from multiple tier-1 banks and electronic communication networks (ECNs) to ensure deep order books and tight spreads across all currency pairs."
        },
        {
          question: "Can I automate my forex trading strategies?",
          answer: "Yes, our platform supports algorithmic trading through our API, custom indicators, and integration with popular trading languages like MQL and Python."
        },
        {
          question: "What are your trading hours for forex?",
          answer: "Our forex market is available 24 hours a day from Sunday 5PM ET to Friday 5PM ET, allowing you to trade during all major global market sessions."
        }
      ]}
    />
  );
};

export default Forex;
