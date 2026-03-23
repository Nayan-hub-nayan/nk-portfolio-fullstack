import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs } from "react-icons/si";

export default function Technologies() {
    // const items = [
    //   { logo: "/logo1.png", text: "India vs NZ T20" },
    //   { logo: "/logo2.png", text: "Tickets from ₹5,000" },
    //   { logo: "/logo3.png", text: "Limited Seats" },
    //   { logo: "/logo1.png", text: "India vs NZ T20" },
    //   { logo: "/logo2.png", text: "Tickets from ₹5,000" },
    //   { logo: "/logo3.png", text: "Limited Seats" },
    //   { logo: "/logo1.png", text: "India vs NZ T20" },
    //   { logo: "/logo2.png", text: "Tickets from ₹5,000" },
    //   { logo: "/logo3.png", text: "Limited Seats" },
    // ];

    const TechItem=({ icon, name }) =>{
      return (
        <div className="flex items-center gap-3 text-white/70 hover:text-white transition">
  
  <div className=" flex items-center justify-center rounded-full">
    <span className="text-[28px] sm:text-[32px] md:text-[40px]">
      {icon}
    </span>
  </div>

  <span className="text-[14px] sm:text-[16px] md:text-[20px] font-medium">
    {name}
  </span>

</div>

      );
    }

   

  return (
<section id='technologies' className="relative  bg-gradient-to-r from-[#1c1b1b] via-black to-black  overflow-hidden pt-[60px] sm:pt-[140px] md:pt-[160px] lg:pt-[80px] pb-[40px] sm:pb-[110px] md:pb-[110px] lg:pb-[110px]"
   >
    <div className=" relative max-w-[1280px] mx-auto px-2 sm:px-5 md:px-5 lg:px-5 sm:max-w-[810px] md:max-w-[810px] lg:max-w-[1280px]">      
      
    
    <h1 className="text-center items-center mb-12">
          <div className=" underline text-white text-xl md:text-3xl font-sacrifice tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          Tech Stack & Platform
          </div></h1>
          {/* inter: ['Inter', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
        eagle: ["EagleHorizon", "sans-serif"],
        gradzy: ["Gradzy", "sans-serif"],
        kugile: ["Kugile", "sans-serif"],
        runiga: ["Runiga", "sans-serif"],
        sacrifice */}
          

        <div className="flex w-max animate-marquee gap-8 sm:gap-12 md:gap-20 ">
        <TechItem icon={<FaReact />} name="React" />
      <TechItem icon={<FaNodeJs />} name="Node.js" />
      <TechItem icon={<SiMongodb />} name="MongoDB" />
      <TechItem icon={<SiExpress />} name="Express" />
      <TechItem icon={<SiNextdotjs />} name="Next.js" />
      <TechItem icon={<FaGitAlt />} name="Git" />
      <TechItem icon={<FaGithub />} name="GitHub" />

      <TechItem icon={<FaReact />} name="React" />
      <TechItem icon={<FaNodeJs />} name="Node.js" />
      <TechItem icon={<SiMongodb />} name="MongoDB" />
      <TechItem icon={<SiExpress />} name="Express" />
      <TechItem icon={<SiNextdotjs />} name="Next.js" />
      <TechItem icon={<FaGitAlt />} name="Git" />
      <TechItem icon={<FaGithub />} name="GitHub" />
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

                  
      </div>

      <style jsx>{`
        @keyframes marquee {
            to {
                transform: translateX(-50%);
            }
            }
        .animate-marquee {
             animation: marquee 15s linear infinite;
        }

            `}</style>

     
    </section>

    
  );
}

     
  
  