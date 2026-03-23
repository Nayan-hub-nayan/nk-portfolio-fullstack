



import React, { useState, useEffect } from 'react';

import { GradientButton } from '../component/Button';


export default function FurnitureLanding() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [hideIndicator, setHideIndicator] = useState(false);


  return (

    <section id='hero' className="relative min-h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black  overflow-hidden"
    >
      <div
        className={`hidden md:block absolute bottom-[50px] left-1/2 -translate-x-1/2 text-center z-[100]
  transition-opacity duration-300
  ${hideIndicator ? "opacity-0" : "opacity-100"}`}
      >
        <div className="text-[0.9rem] text-gray-400 mb-2.5 tracking-[2px]">
          SCROLL
        </div>

        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full relative mx-auto">
          <span className="absolute top-[10px] left-1/2 -translate-x-1/2
      w-[6px] h-[10px] bg-indigo-500 rounded-[3px]
      animate-scroll-indicator"
          />
        </div>
      </div>



      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)G
            `,
            backgroundSize: '80px 80px'
          }}
        />
        {/* Center bright glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,140,0,0.08) 30%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
      </div>
      {/* Center Radial Glow - Primary */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />

      {/* Secondary Accent Glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px]"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite'
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>


      {/* Navigation */}


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center 
     
      
        pl-8  pr-8 pt-60
           sm:pl-[1px] sm:pr-[1px] sm:pt-[120px] sm: pb-[100px]

          /* Medium (md) */
          md:pr-[28px] md:pl-[30px] md:pt-[120px] md:pb-[120px]
          /* Large (lg) */
         lg:pt-[170px] lg:pb-[140px] lg:pr-[40px] lg:pl-[40px] lg:rounded-bl-[50px] lg:rounded-br-[50px]">
        <h1 className="text-center mb-20 md:mb-12">
          <div className="text-white text-6xl md:text-9xl font-serif tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            DESIGN
          </div>
          <div class="ticker w-full ">
            <div class="ticker-inner text-white text-8xl md:text-9xl font-valty tracking-wider ">
              <div class="item text-[#e930dd]">Website</div>
              <div class="item text-[#2eac6f]">APPS</div>
              <div class="item text-[#e23d37]">Agents</div>
            </div>
          </div>

        </h1>

        <div className=" transition-all duration-300 opacity-0 animate-slideUp" style={{ animationDelay: '2.4s', animationFillMode: 'forwards' }}>
          < GradientButton />
        </div>

      </div>



      <style jsx>{`
      
       .ticker {
  width: 100%;        /* full width */
  height: 100px;      /* height of one line */
  overflow: hidden;
  position: relative;
  display: flex;      /* to center inner content */
  justify-content: center;  /* center horizontally */
}

.ticker-inner {
  display: flex;
  flex-direction: column;
  animation: tickerMove 6s infinite;
}

.item {
  height: 100px;  /* same as ticker height */
  display: flex;
  align-items: center;
  justify-content: center;  /* centers text */
}


/* SLIDE ANIMATION */
@keyframes tickerMove {
  0%   { transform: translateY(0); }
  25%  { transform: translateY(0); }

  33%  { transform: translateY(-100px); }
  58%  { transform: translateY(-100px); }

  66%  { transform: translateY(-200px); }
  91%  { transform: translateY(-200px); }

  100% { transform: translateY(0); }
}

       
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideDown {
          from { 
            opacity: 0; 
            transform: translateY(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.9); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
        @keyframes curtainReveal {
          0% {
            clip-path: ellipse(150% 100% at 50% 0%);
            opacity: 1;
          }
          100% {
            clip-path: ellipse(150% 0% at 50% 0%);
            opacity: 0;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.8s ease-out 1.6s forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 1s ease-out;
        }
        .animate-curtainReveal {
          animation: curtainReveal 1s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
    </section>


  );
}