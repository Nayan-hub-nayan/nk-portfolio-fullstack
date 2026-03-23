import React, { useState , useRef} from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import web1 from '../assets/images/web1.avif'
import web2 from '../assets/images/web1.webp'
import web3 from '../assets/images/web3.webp'
import web4 from '../assets/images/web4.webp'
import mobileimg from '../assets/images/mobile.webp'

export default function Services() {




  const items = [
    { img: web1,  },
    { img: web2,  },
    { img: web3,  },
   
  ];
  const [liked, setLiked] = useState({ card1: false, card2: false });
  const [likes, setLikes] = useState({ card1: 246, card2: 189 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleLike = (card) => {
    setLiked(prev => ({ ...prev, [card]: !prev[card] }));
    setLikes(prev => ({
      ...prev,
      [card]: prev[card] + (liked[card] ? -1 : 1)
    }));
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };
  



  return (
<section id='sevices' className="relative min-h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black rounded-[20px] sm:rounded-[30px] md:rounded-[40px]
overflow-hidden pt-[60px] sm:pt-[140px] md:pt-[160px] lg:pt-[80px] pb-[30px] sm:pb-[60px] md:pb-[60px] 
shadow-[0_30px_120px_rgba(239,0,0,0.35)]






">

    <div className=" relative max-w-[1280px] mx-auto px-5 sm:px-5 md:px-5 lg:px-5 sm:max-w-[810px] md:max-w-[810px] lg:max-w-[1280px]">      
      
    
    <h1 className="text-center items-center mb-12">
          <div className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-runiga tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            Services
          </div></h1>
          
         
          
          

<div className='flex flex-col gap-8'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  sm:gap-8 md:gap-8 items-stretch">
          
          {/* ================= CARD 1 ================= */}
          <div className='flex flex-col gap-8'>
          <div 
            className="relative bg-black ring-[0.3px] ring-white/50 ring-inset rounded-2xl overflow-hidden h-full flex justify-center items-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative z-10 flex w-full h-full justify-center items-center px-4 sm:px-8 md:px-16 ">
              {/* CONTENT */}
              <div className="w-full h-fit flex justify-center items-center">
                <img
                  ref={imageRef}
                  src={mobileimg}
                  alt="AI App Interface"
                  className="w-full max-w-[350px] h-auto object-contain transition-transform duration-200 ease-out"
                  style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`
                  }}
                />
              </div>
            </div>
          </div>
          <h1 className="text-center items-center mb-12">
          <div className="text-white text-xl md:text-xl font-sacrifice tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          
          <div><del>₹1,50,000</del><t/>    ₹1,20,000</div>

          <div>Mobile App</div>

          </div>
         </h1></div>

          {/* ================= CARD 2 (Middle) ================= */}
            <div className='flex flex-col gap-8'>
          <div className="relative bg-black ring-[0.3px] ring-white/50 ring-inset rounded-2xl overflow-hidden h-full flex justify-center items-center">
          <div className="relative z-10 flex w-full h-full justify-center items-center px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16 overflow-hidden">

{/* TOP INNER SHADOW */}
             {/* TICKER CONTAINER */}
              <div className=" relative w-full max-h-[300px] overflow-hidden text-white z-40 rounded-lg">
                
                {/* BOTTOM INNER SHADOW */}

              <div className="pointer-events-none max-w-[180px] absolute -top-1 left-1/2 -translate-x-1/2
 w-full h-10
  bg-gradient-to-b from-black/80 via-black/40 to-transparent z-40  rounded-[6px]"  />

{/* BOTTOM INNER SHADOW */}
<div className="pointer-events-none max-w-[180px] absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-10
  bg-gradient-to-t from-black/80 via-black/40 to-transparent z-40  rounded-[6px]"  /> 

                <div className=" relative flex flex-col animate-scroll-vertical gap-8">
                  {[...items, ...items].map((item, i) => (
                    <div
                      key={i}
                      className="h-fit flex items-center justify-center"
                    >
                      <img
                        src={item.img}
                        alt=""
                        className="w-[180px] h-[120px] object-contain rounded rounded-[6px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
          {/* CONTENT */}
          <h1 className="text-center items-center mb-12">
          <div className="text-white text-xl md:text-xl font-sacrifice tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          
          <div><del>₹1,00,000</del><t/>    ₹70,000</div>
          <div>Website</div>

          </div>
         </h1>
         </div>

          {/* ================= CARD 3 ================= */}
          <div className='flex flex-col gap-8'>
          <div className="relative bg-black ring-[0.3px] ring-white/50 ring-inset rounded-2xl overflow-hidden h-full flex justify-center items-center">
            <div className="relative z-10 flex w-full h-full justify-center items-center px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16">
              {/* CONTENT */}
              <div className="w-full h-fit bg-gradient-to-br from-zinc-900 to-black rounded-[6px] overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-white/5">
                <div className="relative bg-white p-8 aspect-[4/3] flex items-center justify-center w-full">
                  {/* Synthesizer Image */}
                  <div className="w-full">
                    <div className="bg-gray-200 rounded-lg p-6 shadow-lg">
                      {/* Synth Controls */}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <a href="#" className="block text-sm text-blue-400 hover:text-blue-300 transition-colors">
                    hikeys1977.com
                  </a>
                  
                  <div className="flex items-center gap-6 pt-2">
                    <button 
                      onClick={() => handleLike('card1')}
                      className="flex items-center gap-2 hover:scale-110 transition-transform"
                    >
                      <Heart 
                        size={20} 
                        className={liked.card1 ? 'fill-blue-500 text-blue-500' : 'text-gray-400'} 
                      />
                      <span className={liked.card1 ? 'text-blue-500' : 'text-gray-400'}>{likes.card1}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                      <MessageCircle size={20} />
                      <span>47</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-center items-center mb-12">
          <div className="text-white text-xl md:text-xl font-sacrifice tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          
          <div>  ₹30,000</div>
          <div>AI Agents</div>

          </div>
         </h1></div>
        </div>

     
        </div>


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

            


      {/* Furniture Image */}
      
      </div>

    

      <style jsx>{`
        @keyframes scrollVertical {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-300px);
          }
        }

        .animate-scroll-vertical {
          animation: scrollVertical 8s linear infinite;
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