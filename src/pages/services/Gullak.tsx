
import { ServicePageTemplate } from "@/components/service-page-template";

const Gullak = () => {
  return (
    <ServicePageTemplate
      title="Gullak (Mutual Funds)"
      subtitle="Build wealth systematically through our curated mutual fund offerings"
      description={[
        "Infinity's Gullak is a comprehensive mutual fund platform designed to help investors build long-term wealth through systematic investing across carefully selected fund options.",
        "Our platform combines cutting-edge technology with personalized guidance to make mutual fund investing simple, transparent, and effective for both beginners and experienced investors.",
        "With Gullak, you can access a curated selection of top-performing mutual funds across various asset classes, investment styles, and risk profiles, all with zero commission fees."
      ]}
      image="https://images.unsplash.com/photo-1579621970590-9d624316780b?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Zero Commission",
          description: "Invest in mutual funds with absolutely zero commission, maximizing your returns by eliminating unnecessary costs."
        },
        {
          title: "Expert Fund Selection",
          description: "Access funds selected by our research team based on rigorous quantitative and qualitative analysis of performance, risk, and management quality."
        },
        {
          title: "Automatic SIP Management",
          description: "Set up, modify, and track Systematic Investment Plans with flexible frequency options and automatic deductions."
        },
        {
          title: "Goal-based Planning",
          description: "Define specific financial goals and receive personalized fund recommendations and investment strategies to achieve them."
        },
        {
          title: "Performance Analysis",
          description: "Track your investments with detailed performance metrics, benchmark comparisons, and interactive visualization tools."
        },
        {
          title: "Tax Optimization",
          description: "Smart tools to help maximize tax benefits through ELSS funds and optimize capital gains implications of redemptions."
        }
      ]}
      differences={[
        {
          title: "AI-Powered Fund Selection",
          description: "Our proprietary algorithm analyzes thousands of data points to identify funds with consistent alpha generation potential across market cycles."
        },
        {
          title: "Behavioral Finance Integration",
          description: "Gullak incorporates behavioral finance principles to help you overcome common investment biases and maintain disciplined investing habits."
        },
        {
          title: "Holistic Portfolio Approach",
          description: "Unlike standalone fund platforms, Gullak integrates mutual fund investments with your overall financial portfolio for truly optimized asset allocation."
        },
        {
          title: "Personalized Risk Assessment",
          description: "Advanced risk profiling tools that go beyond standard questionnaires to create truly personalized fund recommendations aligned with your risk tolerance."
        }
      ]}
      faqs={[
        {
          question: "How does Gullak offer zero commission investments?",
          answer: "Gullak operates on a direct plan model, eliminating distributor commissions that typically range from 0.5% to 1.5% annually. We generate revenue through other value-added services while keeping the core investment platform commission-free."
        },
        {
          question: "What is the minimum investment amount?",
          answer: "You can start investing with as little as ₹100 for SIPs or ₹500 for lump sum investments in most funds. Some specialized funds may have higher minimums as specified by the fund house."
        },
        {
          question: "How do I redeem my investments?",
          answer: "Redemption is simple through our platform. You can initiate partial or complete redemptions with a few clicks. The proceeds are typically credited to your registered bank account within 2-3 business days, depending on the fund type."
        },
        {
          question: "Can I transfer my existing mutual fund investments to Gullak?",
          answer: "Yes, we provide a simple migration tool to transfer your existing investments to our platform. For regular plan investments, we help you switch to direct plans to immediately reduce your expense ratio and increase returns."
        }
      ]}
    />
  );
};

export default Gullak;
