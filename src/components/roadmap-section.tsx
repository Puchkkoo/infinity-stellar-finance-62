
import { Calendar, Star } from "lucide-react";

export function RoadmapSection() {
  const roadmapItems = [
    {
      date: "April 2025",
      title: "Advanced Screener",
      description: "Powerful stock screening tools with custom criteria and filters"
    },
    {
      date: "June 2025",
      title: "Portfolio Analytics",
      description: "In-depth analysis of your portfolio performance and risk metrics"
    },
    {
      date: "August 2025",
      title: "Social Trading",
      description: "Follow and copy strategies from top-performing traders"
    },
    {
      date: "October 2025",
      title: "AI-Powered Insights",
      description: "Machine learning-based predictive analytics and recommendations"
    },
    {
      date: "Coming Soon",
      title: "More Features",
      description: "Stay tuned for more exciting features and enhancements",
      special: true
    },
  ];

  return (
    <section className="py-20 bg-infinity-50/50 dark:bg-infinity-950/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full bg-infinity-100 p-2 dark:bg-infinity-900/40 mb-4">
            <Calendar className="h-5 w-5 text-infinity-700 dark:text-infinity-400" />
          </div>
          <h2 className="section-title">Roadmap</h2>
          <p className="section-subtitle">
            Our journey ahead: upcoming features and enhancements
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Stair visualization background */}
          <div className="absolute left-1/2 top-0 h-full w-4 bg-infinity-200 dark:bg-infinity-800/30 transform -translate-x-1/2 rounded-full"></div>
          
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-16 relative`}
            >
              {/* Stair step */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-32 h-12 bg-infinity-100 dark:bg-infinity-900/20 -z-10 rounded-lg shadow-inner" 
                   style={{ top: `${index * 40}px` }}></div>
                   
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-infinity-500 dark:bg-infinity-400 rounded-full border-4 border-white dark:border-infinity-950 z-10 shadow-lg"></div>
              
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className={`p-6 bg-white dark:bg-infinity-900/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  item.special ? 'border-dashed border-2 border-infinity-300 dark:border-infinity-700' : ''
                }`}>
                  <div className="flex items-center mb-2 justify-between">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-infinity-100 dark:bg-infinity-800 text-infinity-700 dark:text-infinity-300">
                      {item.date}
                    </span>
                    {item.special && <Star className="h-4 w-4 text-amber-400" />}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
              
              {/* Spacer for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
