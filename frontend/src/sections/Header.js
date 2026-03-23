import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import logo1 from '../assets/logos/logo.png';
import logo2 from '../assets/logos/logo2.png';
export default function Header() {
  const navigate = new useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(true);

 
  

  useEffect(() => {
    // Show plain logo for 1 second
    const logoTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Start curtain animation after logo
    const curtainTimer = setTimeout(() => {
      setShowCurtain(false);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(curtainTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'services','technologies'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  const goToContact = () => {
    navigate('/contact');
    setTimeout(() => {
    scrollToSection('contact');
    }, 0);
    };

  const goToHero = () => {
      navigate('/');
      setTimeout(() => {
      scrollToSection('hero');
      }, 0);
      };



  return (
    <>
      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0px) scale(1);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
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

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-curtainReveal {
          animation: curtainReveal 0.8s ease-in-out forwards;
        }
      `}</style>

      {/* Loading Screen - Plain Dark Background with Logo */}
      {isLoading && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
          <div className="text-5xl md:text-7xl font-serif tracking-widest text-white animate-fadeIn">
            GENEX
          </div>
        </div>
      )}

      {/* Curved Curtain Reveal Animation */}
      {showCurtain && !isLoading && (
        <div className="fixed inset-0 z-[90] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 animate-curtainReveal" />
        </div>
      )}

      <nav className="fixed w-full flex items-center justify-between px-3 sm:px-4 md:px-6 py-4 z-50 transition-all duration-300 backdrop-blur-sm bg-white/0 opacity-0 animate-slideDown">
        <div className="flex items-center space-x-2 cursor-pointer z-50" onClick={() => scrollToSection('home')}>
          
        
        <img
            src={logo1}  // replace with your logo path
            alt="Reap Capital"
            className="w-12 h-auto rounded-[2px] " 
         
  onClick={goToHero}
/>
</div>

        {/* Social Media Icons */}
        <div className="flex gap-2 sm:gap-4">
          {/* LinkedIn */}
          <a
            href="http://linkedin.com/in/nayan-kawalkar-164725352"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-[#c3cad1] hover:fill-[#0228d0] transition-all duration-300" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6C22 7.6 24 10 24 15v9h-5v-8c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.2v8H8z"/>
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Nayan-hub-nayan"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-white hover:fill-gray-400 transition-all duration-300" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/>
            </svg>
          </a>

          {/* X (Twitter) */}
          <a
        href="https://x.com/KawalkarNa61162"
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center 
                   hover:bg-[#c3cad1] transition-all duration-300 hover:-translate-y-1"
      >
        <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-[#c3cad1] hover:fill-black transition-all duration-300" viewBox="0 0 24 24">
          <path d="M18.2 2H21l-6.4 7.3L22 22h-6.2l-4.8-6.2L5.6 22H2.8l6.9-7.9L2 2h6.3l4.4 5.7L18.2 2z"/>
        </svg>
      </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/genex.oo?igsh=Z3ZpeXYzbXVkMTF5"
            className="group w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 transition-all duration-300" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F58529" />
                  <stop offset="50%" stopColor="#DD2A7B" />
                  <stop offset="100%" stopColor="#515BD4" />
                </linearGradient>
              </defs>
              <path className="fill-[#c3cad1] group-hover:fill-[url(#instaGradient)]" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 7.4a2.9 2.9 0 1 0-2.9-2.9 2.9 2.9 0 0 0 2.9 2.9zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
            </svg>
          </a>
        </div>

        {/* MENU BUTTON */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg z-50 flex items-center justify-center"
          >
            <div className="relative w-[24px] h-[24px] transition-all duration-300">
              <span className={`absolute left-0 right-0 mx-auto w-[25px] h-[2px] rounded transition-all duration-300 bg-white ${isMenuOpen ? "rotate-45" : "-translate-y-[6px]"}`} />
              <span className={`absolute left-0 right-0 mx-auto w-[25px] h-[2px] rounded transition-all duration-300 bg-white ${isMenuOpen ? "-rotate-45" : "translate-y-[6px]"}`} />
            </div>
          </button>
        </div>

        {/* MENU DROPDOWN */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-10 flex justify-center w-full transition-all duration-50" onClick={() => setIsMenuOpen(false)}>
            <div className="w-full transition-all duration-500 animate-slideDown" onClick={(e) => e.stopPropagation()}>
              <div className="w-full h-fit inset-0 px-5 pt-24 pb-3 bg-white/10 backdrop-blur-lg transition-all duration-10">
                <div className="bg-[#e7e6e6] rounded-3xl shadow-lg py-0 space-y-3 border border-black">
                  <button onClick={() => scrollToSection('about')} className="block w-full text-[18px] text-black font-medium text-center py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    About
                  </button>
                  <button onClick={() => scrollToSection('team')} className="block w-full text-[18px] text-black font-medium text-center py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Team
                  </button>
                  <button onClick={goToContact} className="block w-full text-[18px] text-black font-medium text-center py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

    
    </>
  );
}


 function HeaderLookbook(){
  
  const [isLoading, setIsLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(true);
  
  useEffect(() => {
    // Show plain logo for 1 second
    const logoTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Start curtain animation after logo
    const curtainTimer = setTimeout(() => {
      setShowCurtain(false);
    }, 1500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(curtainTimer);
    };
  }, []);
  return(
    <nav
      className={`
         fixed w-full flex items-center justify-between 
       px-2 py-4 z-50 transition-all duration-300  backdrop-blur-sm sm:backdrop-blur-sm md:backdrop-blur-0 bg-white/0
     `}>  
     
{/* Loading Screen - Plain Dark Background with Logo */}
{isLoading && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
          <div className="text-5xl md:text-7xl font-serif tracking-widest text-white animate-fadeIn">
            GENEX
          </div>
        </div>
      )}

      {/* Curved Curtain Reveal Animation */}
      {showCurtain && !isLoading && (
        <div className="fixed inset-0 z-[90] pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 animate-curtainReveal" 
            style={{
              clipPath: 'ellipse(150% 100% at 50% 0%)',
              transformOrigin: 'top center'
            }}
          />
        </div>
      )}
     <button  
     className="text-white text-sm tracking-wider hover:text-yellow-500 transition-colors">
          LOOKBOOK
        </button>
        
        <div className="text-white text-3xl font-serif tracking-widest">
          SOLVE
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-white text-sm tracking-wider hover:text-yellow-500 transition-colors">
            SHOP
          </button>
          <button className="flex items-center gap-2 text-white text-sm tracking-wider hover:text-yellow-500 transition-colors">
            CART
            <span className="flex items-center justify-center w-6 h-6 rounded-full border border-white text-xs">
              0
            </span>
          </button>
          <button className="flex flex-col gap-1 w-8">
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
            <span className="w-full h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>
  )
}