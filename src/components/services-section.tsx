
import { HandCoins } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicesSection() {
  const services = [
    {
      title: "Equity",
      description: "Trade in stocks across major global exchanges with competitive pricing",
      color: "bg-gradient-to-br from-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop",
      url: "/services/equity"
    },
    {
      title: "Forex",
      description: "Access global currency markets with institutional-grade liquidity and tools",
      color: "bg-gradient-to-br from-green-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1000&auto=format&fit=crop",
      url: "/services/forex"
    },
    {
      title: "Crypto",
      description: "Trade cryptocurrencies with advanced security and seamless integration",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1000&auto=format&fit=crop",
      url: "/services/crypto"
    },
    {
      title: "F&O",
      description: "Access futures and options with advanced risk management tools",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=1000&auto=format&fit=crop",
      url: "/services/fno"
    },
    {
      title: "Gullak (Mutual Funds)",
      description: "Build wealth systematically through our curated mutual fund offerings",
      color: "bg-gradient-to-br from-infinity-500 to-infinity-700",
      image: "https://images.unsplash.com/photo-1579621970590-9d624316780b?q=80&w=1000&auto=format&fit=crop",
      url: "/services/gullak"
    },
    {
      title: "Portfolio Management",
      description: "Expert portfolio management services tailored to your financial goals",
      color: "bg-gradient-to-br from-purple-500 to-indigo-700",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      url: "/services/portfolio-management"
    }
  ];

  return (
    <section className="py-20 bg-infinity-50/50 dark:bg-infinity-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <HandCoins className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive financial services designed to meet your diverse investment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              to={service.url}
              className="feature-card group relative overflow-hidden rounded-xl h-64 flex flex-col justify-end hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-xl font-serif font-bold mb-2 drop-shadow-md group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-white/90 drop-shadow-md max-w-[90%]">{service.description}</p>
                <div className="mt-3 flex items-center font-medium text-sm opacity-0 group-hover:opacity-100 transform -translate-x-5 group-hover:translate-x-0 transition-all duration-300">
                  Explore <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="absolute top-0 right-0 m-4 bg-white/90 dark:bg-infinity-900/90 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-3 group-hover:translate-y-0">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 15L11 11L15 15L21 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
