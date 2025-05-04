
import { useEffect, useRef } from "react";

export function GalaxyBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const createStars = () => {
      // Clear existing stars first
      const existingStars = container.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size (1-3px)
        const size = Math.random() * 2 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.7 + 0.3;
        
        // Random animation delay
        const animDelay = Math.random() * 5;
        
        star.style.cssText = `
          left: ${x}%;
          top: ${y}%;
          width: ${size}px;
          height: ${size}px;
          opacity: ${opacity};
          animation: star-blink 3s infinite ease-in-out;
          animation-delay: ${animDelay}s;
        `;
        
        container.appendChild(star);
      }

      // Create a few shooting stars
      for (let i = 0; i < 3; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random position
        const startX = Math.random() * 80;
        const startY = Math.random() * 40;
        
        // Random length (50-100px)
        const length = Math.random() * 50 + 50;
        
        // Random animation delay (0-15s)
        const animDelay = Math.random() * 15;
        
        shootingStar.style.cssText = `
          left: ${startX}%;
          top: ${startY}%;
          width: ${length}px;
          animation: shooting-star 5s infinite ease-out;
          animation-delay: ${animDelay}s;
        `;
        
        container.appendChild(shootingStar);
      }

      // Create CSS for animations if they don't exist already
      if (!document.getElementById('star-animations')) {
        const style = document.createElement('style');
        style.id = 'star-animations';
        style.textContent = `
          @keyframes star-blink {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
          }
          
          @keyframes shooting-star {
            0% {
              transform: translateX(0) translateY(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            40% {
              transform: translateX(250px) translateY(250px);
              opacity: 0;
            }
            100% {
              transform: translateX(250px) translateY(250px);
              opacity: 0;
            }
          }
          
          @keyframes drift {
            0% {
              transform: translate(0, 0) rotate(0deg);
            }
            50% {
              transform: translate(5px, -5px) rotate(5deg);
            }
            100% {
              transform: translate(0, 0) rotate(0deg);
            }
          }
          
          @keyframes galaxy-spin {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
          
          .star {
            position: absolute;
            background-color: white;
            border-radius: 50%;
          }
          
          .shooting-star {
            position: absolute;
            height: 1px;
            background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1));
            border-radius: 10px;
            transform: rotate(45deg);
          }
          
          .animate-drift {
            animation: drift 20s infinite ease-in-out;
          }
          
          .animate-galaxy-spin {
            animation: galaxy-spin 120s linear infinite;
          }
        `;
        document.head.appendChild(style);
      }
    };
    
    createStars();
    
    // Recreate stars when window resizes
    const handleResize = () => {
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Nebula-like gradients */}
      <div className="absolute w-1/2 h-1/2 top-0 left-0 rounded-full 
        bg-gradient-radial from-blue-500/20 to-transparent 
        blur-[100px] transform -translate-x-1/2 -translate-y-1/3 animate-drift"></div>
      
      <div className="absolute w-1/2 h-1/2 bottom-0 right-0 rounded-full 
        bg-gradient-radial from-purple-700/15 to-transparent 
        blur-[100px] transform translate-x-1/4 translate-y-1/3 animate-drift" 
        style={{ animationDelay: "-5s" }}></div>
      
      <div className="absolute w-1/3 h-1/3 top-1/2 left-1/2 rounded-full 
        bg-gradient-radial from-infinity-600/20 to-transparent 
        blur-[80px] transform -translate-x-1/2 -translate-y-1/2 animate-drift" 
        style={{ animationDelay: "-10s" }}></div>
      
      {/* Galaxy spiral simulation */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 
        border border-white/5 rounded-full opacity-10 animate-galaxy-spin"></div>
      
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 
        border border-white/5 rounded-full opacity-20 animate-galaxy-spin"
        style={{ animationDuration: '100s' }}></div>
      
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 
        border border-white/5 rounded-full opacity-30 animate-galaxy-spin"
        style={{ animationDuration: '80s' }}></div>
    </div>
  );
}
