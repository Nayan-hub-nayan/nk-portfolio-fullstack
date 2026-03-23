import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import Arrow from '../assets/arow1.png'
import { Card1, CardSkeleton, Card3 } from '../component/ProjectCard';
// import web1 from "../assets/images/web1.webp"
// import web from '../assets/images/web1.avif'
// import web2 from '../assets/images/web1.webp'
// import web3 from '../assets/images/web3.webp'
// import web4 from '../assets/images/web4.webp'
// import reap from '../assets/images/reapcapital.png'
import { toast } from "react-toastify";
// import mobileimg from '../assets/images/mobile.webp'
import { Link } from 'react-router-dom';
export default function LatestProject() {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:5000/api/projects');
      const data = await response.json();
      setProjects(data.projects);
      setLoading(false);
    };

    try {
      fetchProjects();
    } catch (error) {
      toast.error("Something went wrong, Please check your internet");
      setLoading(false);
    }



  }, []);


  // const projects = [
  //   {
  //     image: reap,
  //     ownerIcon: "owner1.png",
  //     name: 'Rehana studio',
  //     description: "Description for project 1",
  //     url: "https://reapcapital.in",
  //     likes: 12,
  //     time: "1d",
  //     video: 'https://www.w3schools.com/html/mov_bbb.mp4'
  //   },
  //   {
  //     image: web,
  //     ownerIcon: "owner2.png",
  //     name: 'Rehana studio',

  //     description: "Description for project 2",
  //     url: "https://reapcapital.in",
  //     likes: 34,
  //     time: "7d",
  //     video: 'https://www.w3schools.com/html/mov_bbb.mp4'

  //   },
  //   {
  //     image: web3,
  //     ownerIcon: "owner3.png",
  //     name: 'Rehana studio',

  //     description: "Description for project 3",
  //     url: "https://reapcapital.in",
  //     likes: 28,
  //     time: "13d",
  //     video: 'https://www.w3schools.com/html/mov_bbb.mp4'


  //   },
  //   {
  //     image: web3,
  //     ownerIcon: "owner4.png",
  //     name: 'Rehana studio',

  //     description: "Description for project 4",
  //     url: "https://reapcapital.in",
  //     likes: 51,
  //     time: "10d",
  //     video: 'https://www.w3schools.com/html/mov_bbb.mp4'


  //   },
  //   {
  //     image: web4,
  //     ownerIcon: "owner5.png",
  //     name: 'Rehana studio',

  //     description: "Description for project 5",
  //     url: "https://example.com/project5",
  //     likes: 19,
  //     time: "8d",
  //     video: 'https://www.w3schools.com/html/mov_bbb.mp4'


  //   }
  // ];




  return (
    <section id='projects' className="relative min-h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black  overflow-hidden pt-[60px] sm:pt-[140px] md:pt-[160px] lg:pt-[80px] pb-[20px] sm:pb-[60px] md:pb-[60px] lg:pb-[60px]"
    >
      <div className=" relative max-w-[1280px] mx-auto px-2 sm:px-5 md:px-5 lg:px-5 sm:max-w-[810px] md:max-w-[810px] lg:max-w-[1280px]">


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


        <h1 className="text-center mb-12">
          <div className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-runiga tracking-wider mb-4  opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
            Projects          </div></h1>

        {/* Furniture Image */}
        <div className="relative z-10 flex flex-col justify-center items-center px-2 sm:px-4 md:px-8 pb-6 sm:pb-12">
          <div className="relative w-full max-w-4xl">
            {/* Chair silhouette with gradient */}
            <div className="flex justify-center gap-8 relative w-full">


              {/* Desktop: 3 Column */}
              <div className="hidden relative lg:grid lg:grid-cols-3 gap-6 w-full">

                {/* Card 1 - HiKeys Synthesizer */}
                <div className="flex md:flex-col justify-center gap-8 relative w-full">

                  {loading ? <CardSkeleton /> : <Card1 project={projects[0]} />}

                  {/* Card 1 - HiKeys Synthesizer */}
                  {loading ? <CardSkeleton /> : <Card1 project={projects[1]} />}
                </div>


                {/* Card 2 - Red Monster Design */}
                <Card3 project={projects[0]} />

                {/* Card 3 - 3D Geometric Design */}
                <div className="flex md:flex-col justify-center gap-8 relative w-full">

                  {loading ? <CardSkeleton /> : <Card1 project={projects[3]} />}

                  {/* Card 1 - HiKeys Synthesizer */}
                  {loading ? <CardSkeleton /> : <Card1 project={projects[4]} />}
                </div>

              </div>


              {/* Tablet: 3 Column */}
              <div className="hidden md:grid md:grid-cols-1  lg:hidden gap-8 w-full">

                {/* Card 1 - HiKeys Synthesizer */}
                <div className="flex  justify-center gap-8 relative w-full">
                  {loading ? <CardSkeleton /> : <Card1 project={projects[0]} />}
                  {loading ? <CardSkeleton /> : <Card1 project={projects[1]} />}
                </div>


                {/* Card 2 - Red Monster Design */}
                <Card3 />

                {/* Card 3 - 3D Geometric Design */}
                <div className="flex  justify-center gap-8 relative w-full">

                  {loading ? <CardSkeleton /> : <Card1 project={projects[2]} />}
                  {loading ? <CardSkeleton /> : <Card1 project={projects[3]} />}
                </div>

              </div>


              {/* Mobile: Single Column */}

              <div className="md:hidden space-y-5 px-0 sm:px-2 w-full">

                {/* Card 1 - HiKeys Synthesizer */}
                <Card1 project={projects[4]} />
                <Card3 />
                <Card1 project={projects[1]} />


              </div>



            </div>

          </div>

          <Link to='https://it-agency-site.vercel.app/projects'>
            <div className=" group text-white flex text-xl md:text-xl font-runiga tracking-wider mb-4 mt-6 justify-center items-center gap-2 opacity-0 animate-slideUp" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
              <h1 className=' group-hover:underline'>All Projects </h1> <img src={Arrow} className=' w-4 h-4 group-hover:rotate-[45deg]' /></div>
          </Link>
        </div>
      </div>



      <style jsx>{`
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