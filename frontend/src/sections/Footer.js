import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, ChevronDown } from 'lucide-react';
import { GradientButton } from '../component/Button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = new useNavigate()
  const stats = [
    { emoji: '🚀', number: '50+', label: 'Projects' },
    { emoji: '🤝', number: '30+', label: 'Clients' },
    { emoji: '🌍', number: '15+', label: 'Countries' }
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const HandleExplore=()=>{
    setTimeout(() => {
      scrollToSection('projects');
      }, 0);
  }
  return (
    <footer className="relative flex w-full h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black text-white overflow-hidden flex-col items-center justify-between
     pl-4 pr-4 pt-[60px]
     sm:pl-6 sm:pr-6 sm:pt-[60px] sm:pb-[6px]
     md:pr-[28px] md:pl-[30px] md:pt-[60px] md:pb-[8px]
     lg:pt-[80px] lg:pb-[10px] lg:pr-[40px] lg:pl-[40px] 
     ">
     
     
       {/* Loading Screen - Plain Dark Background with Logo */}
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-60">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
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
      
       
     
      {/* Animated Text Ticker Background */}
      <div className="absolute inset-0 flex flex-col justify-evenly overflow-hidden pointer-events-none opacity-5">
        {/* First ticker row - moving right */}
        <div className="flex whitespace-nowrap animate-scroll-right">
          <div className="flex space-x-8 text-3xl sm:text-4xl md:text-6xl font-black">
            <span>DESIGN • DEVELOP • CREATE • INNOVATE • </span>
            <span>DESIGN • DEVELOP • CREATE • INNOVATE • </span>
            <span>DESIGN • DEVELOP • CREATE • INNOVATE • </span>
          </div>
        </div>
        
        {/* Second ticker row - moving left */}
        <div className="flex whitespace-nowrap animate-scroll-left">
          <div className="flex space-x-8 text-3xl sm:text-4xl md:text-6xl font-black">
            <span>BUILD • CRAFT • INSPIRE • COLLABORATE • </span>
            <span>BUILD • CRAFT • INSPIRE • COLLABORATE • </span>
            <span>BUILD • CRAFT • INSPIRE • COLLABORATE • </span>
          </div>
        </div>
        
        {/* Third ticker row - moving right */}
        <div className="flex whitespace-nowrap animate-scroll-right-slow">
          <div className="flex space-x-8 text-3xl sm:text-4xl md:text-6xl font-black">
            <span>SWEVEN • DESIGN • STUDIO • PORTFOLIO • </span>
            <span>SWEVEN • DESIGN • STUDIO • PORTFOLIO • </span>
            <span>SWEVEN • DESIGN • STUDIO • PORTFOLIO • </span>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circles in background */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border-2 border-white/5 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] border-2 border-white/5 rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 border-2 border-white/5 rounded-full" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 border-2 border-white/5 rounded-full" />
      </div>


      {/* Main Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-5 md:px-5 lg:px-5 w-full">
        
        {/* Top Badge */}
       

        {/* Main Heading */}
        <h1 className="text-center mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tight leading-none">
            Genex
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-0 animate-slideUp" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
          Quiet systems for creative chaos. We build tools that balance elegance and precision.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <button onClick={HandleExplore} className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
            Explore Our Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button onClick={ () => navigate("/contact")} className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
            <Calendar size={20} />
            Book a Schedule
          </button>
        </div>

       

      </div>
        <div className='relative w-full text-xs sm:text-sm md:text-[18px] text-white flex flex-col items-center gap-2 sm:gap-4 md:flex-row md:justify-between z-10 text-center px-4 sm:px-8 mb-4 sm:mb-8 md:mb-12'>
          <a href='mailto:kawalkarnayan07@gmail.com' className='text-white'>nayan@design.com</a>
          <h1 >©<span  className='text-white'>2026</span></h1>
          <h1 className='text-whitw' ><span className='  text-gray-400'>By    </span >  Nayan Kawalkar</h1>
        </div>
       

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right-slow {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right-slow {
          animation: scroll-right-slow 30s linear infinite;
        }
      `}</style>
      
    </footer>
  );
};

export default Footer;



//  function HeroSection() {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const stats = [
//     { emoji: '🚀', number: '50+', label: 'Projects' },
//     { emoji: '🤝', number: '30+', label: 'Clients' },
//     { emoji: '🌍', number: '15+', label: 'Countries' }
//   ];

//   return (
//     <div className="relative min-h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black overflow-hidden flex items-center justify-center">
      
//       {/* Video/Image Background with Overlay */}
//       <div className="absolute inset-0">
//         {/* Dark texture/pattern overlay */}
//         <div 
//           className="absolute inset-0 opacity-40"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
//           }}
//         />
        
//         {/* Gradient overlays */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-5 md:px-5 lg:px-5 w-full">
        
//         {/* Top Badge */}
//         <div className="text-center mb-8 opacity-0 animate-fadeIn" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
//             <span className="text-blue-400 text-sm">🚀</span>
//             <span className="text-gray-400 text-sm">Building the Future of Creative Tools</span>
//           </div>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-center mb-6 opacity-0 animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
//           <div className="text-white text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none">
//             Lasagna
//           </div>
//         </h1>

//         {/* Subtitle */}
//         <p className="text-center text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 opacity-0 animate-slideUp" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
//           Quiet systems for creative chaos. We build tools that balance elegance and precision.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 opacity-0 animate-slideUp" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
//           <button className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2">
//             Explore Our Work
//             <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
//           </button>
          
//           <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm flex items-center gap-2">
//             <Calendar size={20} />
//             Book a Schedule
//           </button>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto opacity-0 animate-scaleIn" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="relative group"
//               style={{ animationDelay: `${1.2 + index * 0.1}s` }}
//             >
//               <div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:bg-black/60 hover:border-white/20 transition-all duration-500 hover:scale-105">
                
//                 {/* Glow effect on hover */}
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
                
//                 {/* Content */}
//                 <div className="relative z-10">
//                   <div className="text-5xl mb-3">{stat.emoji}</div>
//                   <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-400 text-sm uppercase tracking-wider">
//                     {stat.label}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-bounce" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
//           <span className="text-gray-500 text-xs uppercase tracking-widest">Scroll</span>
//           <div className="w-[2px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
//         </div>
//       </div>

//       {/* Animated Grid Background */}
//       <div className="absolute inset-0 opacity-30 pointer-events-none">
//         <div 
//           className="absolute inset-0" 
//           style={{
//             backgroundImage: `
//               linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
//               linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
//             `,
//             backgroundSize: '80px 80px',
//             transform: `translateY(${scrollY * 0.5}px)`
//           }}
//         />
//       </div>

//       {/* Radial Glows */}
//       <div 
//         className="absolute top-1/4 left-1/4 w-[600px] h-[600px] pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
//           filter: 'blur(80px)',
//           animation: 'float 10s ease-in-out infinite'
//         }}
//       />
//       <div 
//         className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)',
//           filter: 'blur(80px)',
//           animation: 'float 12s ease-in-out infinite reverse'
//         }}
//       />

//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
//         @keyframes slideUp {
//           from { 
//             opacity: 0; 
//             transform: translateY(30px); 
//           }
//           to { 
//             opacity: 1; 
//             transform: translateY(0); 
//           }
//         }
//         @keyframes scaleIn {
//           from { 
//             opacity: 0; 
//             transform: scale(0.95); 
//           }
//           to { 
//             opacity: 1; 
//             transform: scale(1); 
//           }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-30px) translateX(20px); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out;
//         }
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out;
//         }
//         .animate-scaleIn {
//           animation: scaleIn 1s ease-out;
//         }
//       `}</style>
//     </div>
//   );
// }