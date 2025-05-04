
import { useEffect, useRef, useState } from 'react';

interface Stock {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export default function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>([
    { symbol: "RELIANCE", price: "2934.75", change: "+1.25%", isPositive: true },
    { symbol: "TCS", price: "3502.60", change: "-0.78%", isPositive: false },
    { symbol: "HDFCBANK", price: "1678.90", change: "+0.43%", isPositive: true },
    { symbol: "INFY", price: "1432.50", change: "-1.52%", isPositive: false },
    { symbol: "ICICIBANK", price: "954.30", change: "+1.05%", isPositive: true },
    { symbol: "AAPL", price: "178.42", change: "+0.82%", isPositive: true },
    { symbol: "MSFT", price: "412.65", change: "+1.12%", isPositive: true },
    { symbol: "GOOGL", price: "147.53", change: "-0.32%", isPositive: false },
    { symbol: "AMZN", price: "178.25", change: "+0.58%", isPositive: true },
    { symbol: "TSLA", price: "172.63", change: "-2.14%", isPositive: false },
    { symbol: "NVDA", price: "824.76", change: "+1.87%", isPositive: true },
    { symbol: "META", price: "493.58", change: "+0.76%", isPositive: true },
    { symbol: "JPM", price: "198.37", change: "+0.42%", isPositive: true },
    { symbol: "V", price: "276.42", change: "-0.18%", isPositive: false },
    { symbol: "WMT", price: "59.87", change: "+0.25%", isPositive: true },
  ]);
  
  const tickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tickerElement = tickerRef.current;
    const containerElement = containerRef.current;
    
    if (!tickerElement || !containerElement) return;
    
    // Clone the ticker content for continuous scrolling
    const clone = tickerElement.cloneNode(true);
    containerElement.appendChild(clone);
    
    // Calculate animation duration based on content width
    const tickerWidth = tickerElement.offsetWidth;
    const animationDuration = tickerWidth / 50; // Adjust speed here
    
    // Set CSS animation
    containerElement.style.animation = `ticker ${animationDuration}s linear infinite`;
    
    // Pause on hover
    const handleMouseEnter = () => {
      containerElement.style.animationPlayState = 'paused';
    };
    
    const handleMouseLeave = () => {
      containerElement.style.animationPlayState = 'running';
    };
    
    containerElement.addEventListener('mouseenter', handleMouseEnter);
    containerElement.addEventListener('mouseleave', handleMouseLeave);
    
    // Update prices randomly every 5 seconds to simulate live updates
    const interval = setInterval(() => {
      setStocks(prevStocks => {
        return prevStocks.map(stock => {
          // 30% chance of updating a stock
          if (Math.random() > 0.7) {
            const changeValue = (Math.random() * 2 - 1) * 0.5; // Random change between -0.5% and +0.5%
            const isPositive = changeValue > 0;
            return {
              ...stock,
              change: `${isPositive ? "+" : ""}${changeValue.toFixed(2)}%`,
              isPositive
            };
          }
          return stock;
        });
      });
    }, 5000);
    
    return () => {
      clearInterval(interval);
      containerElement.removeEventListener('mouseenter', handleMouseEnter);
      containerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <div className="w-full overflow-hidden bg-infinity-50 dark:bg-infinity-900/30 shadow-sm rounded-md border border-infinity-200 dark:border-infinity-800/50">
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="py-2 px-3 border-b border-infinity-200 dark:border-infinity-800/50 flex items-center justify-between">
        <span className="text-sm font-medium">Live Market Updates</span>
        <span className="text-xs text-muted-foreground">Hover to pause</span>
      </div>
      <div className="p-2 overflow-hidden whitespace-nowrap">
        <div ref={containerRef} className="inline-block whitespace-nowrap">
          <div ref={tickerRef} className="inline-block">
            {stocks.map((stock, index) => (
              <span key={index} className="inline-flex items-center mr-8">
                <span className="font-semibold mr-2">{stock.symbol}</span>
                <span className="mr-2">{stock.price}</span>
                <span className={stock.isPositive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                  {stock.change}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
