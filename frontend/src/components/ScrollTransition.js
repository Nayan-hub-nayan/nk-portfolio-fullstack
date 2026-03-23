import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  try {
    gsap.registerPlugin(ScrollTrigger);
  } catch (error) {
    console.warn('ScrollTrigger registration failed:', error);
  }
}

/**
 * ScrollTransition Component
 * Creates a smooth scroll-based vertical section transition like modern Framer websites.
 * 
 * Features:
 * - Two full-screen sections (100vh each)
 * - Top section moves upward and exits on scroll
 * - Bottom section slides up from below
 * - Smooth, continuous, scroll-driven animation
 * - Works on desktop and mobile
 * 
 * @param {React.ReactNode} children - Two child sections to transition between
 * @param {string} className - Additional CSS classes for the container
 */
const ScrollTransition = ({ children, className = '' }) => {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!gsap || !ScrollTrigger) {
      console.error('GSAP or ScrollTrigger not available. Make sure GSAP is installed: npm install gsap');
      return;
    }
    if (!containerRef.current || !section1Ref.current || !section2Ref.current) return;

    const container = containerRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;

    // Set initial positions
    gsap.set(section1, {
      position: 'sticky',
      top: 0,
      zIndex: 2,
      willChange: 'transform, opacity',
    });
    
    gsap.set(section2, {
      position: 'relative',
      zIndex: 1,
      y: '100vh',
      willChange: 'transform, opacity',
    });

    // Create the scroll animation timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=200vh',
        scrub: 1, // Smooth scrubbing (1 = smooth, true = instant)
        pin: false,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const vh = window.innerHeight;
          
          // Section 1: Move up and fade out
          gsap.set(section1, {
            y: -progress * vh,
            opacity: Math.max(0, 1 - progress * 1.2), // Fade out faster
          });

          // Section 2: Slide up from below and fade in
          gsap.set(section2, {
            y: (1 - progress) * vh,
            opacity: Math.min(1, progress * 1.2 + 0.1), // Fade in
          });
        },
        onRefresh: () => {
          // Recalculate on resize
          ScrollTrigger.refresh();
        }
      }
    });

    scrollTriggerRef.current = timeline.scrollTrigger;

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
      timeline.kill();
    };
  }, []);

  // Ensure we have exactly 2 children
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length !== 2) {
    console.warn('ScrollTransition expects exactly 2 children');
    return <div>{children}</div>;
  }

  return (
    <div 
      ref={containerRef}
      className={`scroll-transition-container ${className}`}
      style={{
        height: '200vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        ref={section1Ref}
        className="scroll-section-1"
        style={{
          height: '100vh',
          width: '100%',
          position: 'sticky',
          top: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {childrenArray[0]}
      </div>
      
      <div 
        ref={section2Ref}
        className="scroll-section-2"
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {childrenArray[1]}
      </div>
    </div>
  );
};

export default ScrollTransition;
