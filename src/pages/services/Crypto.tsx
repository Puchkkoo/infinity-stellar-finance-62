
import { ServicePageTemplate } from "@/components/service-page-template";

const Crypto = () => {
  return (
    <ServicePageTemplate
      title="Cryptocurrency Trading"
      subtitle="Trade cryptocurrencies with advanced security and seamless integration"
      description={[
        "Infinity's cryptocurrency platform provides secure, efficient access to digital asset markets with enterprise-grade security and liquidity across major cryptocurrencies and tokens.",
        "Our platform integrates advanced trading tools with institutional-grade custody solutions, allowing you to trade with confidence while maintaining full control of your assets.",
        "Whether you're new to crypto or an experienced trader, our intuitive interface, educational resources, and robust security measures make cryptocurrency investing accessible and secure."
      ]}
      image="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop"
      advantages={[
        {
          title: "Institutional Security",
          description: "Multi-layered security architecture with offline cold storage, multi-signature protocols, and 24/7 monitoring systems."
        },
        {
          title: "Deep Liquidity",
          description: "Access to deep liquidity pools across major exchanges, ensuring efficient execution and minimal price impact."
        },
        {
          title: "100+ Cryptocurrencies",
          description: "Trade established cryptocurrencies and promising emerging tokens on our comprehensive platform."
        },
        {
          title: "Seamless Fiat Integration",
          description: "Easily deposit and withdraw using multiple fiat currencies through our banking network."
        },
        {
          title: "Advanced Trading Tools",
          description: "Full suite of order types, charting tools, and technical indicators specifically optimized for crypto markets."
        },
        {
          title: "Tax Reporting Integration",
          description: "Automatic tracking and reporting of cryptocurrency transactions for tax compliance."
        }
      ]}
      differences={[
        {
          title: "Comprehensive Integration",
          description: "Unlike standalone crypto exchanges, our platform fully integrates cryptocurrency trading with traditional asset classes for unified portfolio management."
        },
        {
          title: "Enhanced Security Framework",
          description: "Our security infrastructure exceeds industry standards with hardware security modules, biometric verification, and continuous penetration testing."
        },
        {
          title: "Regulatory Compliance Focus",
          description: "We maintain full compliance with evolving regulatory frameworks across jurisdictions, ensuring your crypto activities remain fully compliant."
        },
        {
          title: "Real-Time Risk Management",
          description: "Our platform provides continuous monitoring of portfolio risk across traditional and crypto assets, with customizable alerts and constraints."
        }
      ]}
      faqs={[
        {
          question: "How are my cryptocurrencies secured?",
          answer: "We utilize a combination of cold storage (95% of assets), multi-signature authorization, and enterprise-grade encryption. All wallets are insured against security breaches, and we maintain reserves to cover potential incidents."
        },
        {
          question: "What are your trading fees for cryptocurrency?",
          answer: "Our fee structure starts at 0.25% for makers and 0.35% for takers, with volume-based discounts available. We offer transparent pricing with no hidden fees or surcharges."
        },
        {
          question: "Can I transfer existing cryptocurrency into my account?",
          answer: "Yes, you can deposit cryptocurrencies from external wallets to your Infinity account. We provide detailed deposit instructions with QR codes and address verification to ensure secure transfers."
        },
        {
          question: "How do you determine which cryptocurrencies to list?",
          answer: "Our token listing committee evaluates projects based on technology, team credibility, market liquidity, regulatory compliance, and security. We maintain strict standards to protect our clients from fraudulent or high-risk tokens."
        }
      ]}
    />
  );
};

export default Crypto;
