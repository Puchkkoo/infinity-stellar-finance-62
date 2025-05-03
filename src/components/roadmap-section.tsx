
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

        <div className="relative max-w-5xl mx-auto">
          {/* Stair visualization - more pronounced and visible */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-infinity-400 dark:bg-infinity-600/50 transform -translate-x-1/2"></div>
          
          {/* Enhanced stairs visualization */}
          <div className="absolute inset-0 left-1/2 transform -translate-x-1/2 w-72 z-0">
            {/* Vertical segments */}
            {roadmapItems.map((_, idx) => (
              <div 
                key={`v-${idx}`}
                className="absolute w-1 bg-infinity-400 dark:bg-infinity-600/50"
                style={{
                  left: idx % 2 === 0 ? '0px' : '100%',
                  top: `${idx * 120}px`,
                  height: '120px'
                }}
              ></div>
            ))}
            
            {/* Horizontal segments - the actual stair steps */}
            {roadmapItems.map((_, idx) => (
              idx < roadmapItems.length - 1 && (
                <div 
                  key={`h-${idx}`}
                  className="absolute h-1 bg-infinity-400 dark:bg-infinity-600/50"
                  style={{
                    left: idx % 2 === 0 ? '0px' : '36px',
                    top: `${(idx + 1) * 120}px`,
                    width: '100%'
                  }}
                ></div>
              )
            ))}
          </div>
          
          {roadmapItems.map((item, index) => (
            <div 
              key={index}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start mb-28 relative`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-infinity-500 dark:bg-infinity-400 rounded-full border-4 border-white dark:border-infinity-950 z-10 shadow-lg"></div>
              
              {/* Content box with better positioning */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16'} relative z-10`}>
                <div className={`p-6 bg-white dark:bg-infinity-900/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  item.special ? 'border-dashed border-2 border-infinity-300 dark:border-infinity-700' : ''
                }`}>
                  {/* Feature label in pink - matching the image */}
                  <h3 className="text-xl font-serif font-bold mb-2 text-pink-600 dark:text-pink-400">{item.title}</h3>
                  
                  {/* Date tag */}
                  <div className="flex items-center mb-2 justify-between">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-infinity-100 dark:bg-infinity-800 text-infinity-700 dark:text-infinity-300">
                      {item.date}
                    </span>
                    {item.special && <Star className="h-4 w-4 text-amber-400" />}
                  </div>
                  
                  <p className="text-muted-foreground">{item.description}</p>
                  
                  {/* Arrow pointing to the timeline, matching the image */}
                  <div 
                    className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0 -mr-12 transform rotate-180' : 'left-0 -ml-12'} transform -translate-y-1/2`}
                  >
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path 
                        d="M0 10H30M30 10L20 0M30 10L20 20" 
                        stroke="#EC4899" 
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Empty space for the other side */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
