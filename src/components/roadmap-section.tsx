
import React from "react";
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
      title: "Commission-Free Trading",
      description: "Zero commission trades for all users",
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

        <div className="max-w-5xl mx-auto relative">
          {/* Center Timeline */}
          <div className="absolute left-1/2 h-full w-1 bg-gradient-to-b from-pink-400 to-blue-500 transform -translate-x-1/2"></div>
          
          {/* Roadmap items */}
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center mb-16 last:mb-0 relative ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
            >
              {/* Timeline circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center">
                <div className={`w-6 h-6 rounded-full ${item.special ? 'bg-pink-500' : 'bg-blue-500'} z-10 border-4 border-white dark:border-infinity-900 shadow-lg`}></div>
              </div>
              
              {/* Content left or right side */}
              <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}></div>
              
              <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12 text-right"}`}>
                <div className={`p-6 bg-white dark:bg-infinity-900/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  item.special ? 'border-2 border-pink-300 dark:border-pink-700' : ''
                }`}>
                  <h3 className={`text-xl font-serif font-bold mb-2 ${
                    item.special ? 'text-pink-600 dark:text-pink-400' : 'text-blue-600 dark:text-blue-400'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center mb-3 justify-between">
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      item.special 
                        ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300'
                    }`}>
                      {item.date}
                    </span>
                    {item.special && <Star className="h-4 w-4 text-amber-400" />}
                  </div>
                  
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {/* Connection line to timeline */}
                  <div className={`absolute top-1/2 w-10 h-1 transform -translate-y-1/2 ${
                    index % 2 === 0 
                      ? 'right-0 mr-[1px] bg-gradient-to-r from-blue-500 to-pink-400' 
                      : 'left-0 ml-[1px] bg-gradient-to-l from-blue-500 to-pink-400'
                  }`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
