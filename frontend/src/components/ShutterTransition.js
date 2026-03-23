// ShutterTransition.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShutterTransition = ({ children }) => {
  const containerRef = useRef(null);
  const shutterRef = useRef(null);

  

  useEffect(() => {
    const container = containerRef.current;
    const shutter = shutterRef.current;

    // Shutter pulls up to reveal footer
    gsap.to(shutter, {
      yPercent: () => {
        const w = window.innerWidth;
    
        if (w >= 1024) return -170; // desktop
        if (w >= 768) return -300;  // tablet
        return -400;                // mobile
      },
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=200%",
        scrub: 4,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // 🔑 recalc on resize
      }
    });
    

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen">
      {/* Bottom Layer - Footer (Always underneath) */}
      <div className="absolute inset-0 h-screen w-full">
        {children[1]}
      </div>

      {/* Top Layer - Services (Shutter that lifts) */}
      <div ref={shutterRef} className="absolute inset-0 h-screen w-full z-10">
        {children[0]}
      </div>
    </div>
  );
};

export default ShutterTransition;
