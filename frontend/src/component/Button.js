import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export  function GradientButton() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const buttonRef = useRef(null);
  const navigate = new useNavigate()

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 50, y: 50 });
  };

  const clickHandle =()=>{
    navigate("/contact")

  }

  return (
      <div className="relative">
        {/* Sparkle effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <button
          ref={buttonRef}
          onClick={clickHandle}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative px-6 py-3 sm:px-8 sm:py-3 md:px-12 md:py-4 rounded-full text-white text-sm sm:text-base md:text-lg font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] overflow-hidden transition-all duration-300 hover:scale-105"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(120, 120, 120, 0.25) 15%, 
              rgba(60, 60, 60, 0.2) 35%, 
              rgba(20, 20, 20, 0.9) 60%,
              rgba(0, 0, 0, 1) 100%)`,
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(4px)',
          }}
        >
          {/* Inner glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(255, 255, 255, 0.4) 0%, 
                rgba(100, 100, 100, 0.2) 40%,
                transparent 70%)`,
            }}
          ></div>

          {/* Sparkle overlay */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div 
              className="absolute w-2 h-2 bg-white rounded-full opacity-80 blur-sm"
              style={{
                left: `${mousePosition.x}%`,
                top: `${mousePosition.y}%`,
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.3s ease-out',
              }}
            ></div>
          </div>

          {/* Text */}
          <span className="relative z-10 font-serif ">Let's Talk</span>

          {/* Border shine effect */}
          <div 
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background: `linear-gradient(${(mousePosition.x / 100) * 360}deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.3) 50%, 
                transparent 100%)`,
              opacity: 0.5,
            }}
          ></div>
        </button>

        {/* Outer glow */}
        <div 
          className="absolute inset-0 rounded-full blur-xl opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              rgba(255, 255, 255, 0.3) 0%, 
              transparent 60%)`,
          }}
        ></div>
     

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
}