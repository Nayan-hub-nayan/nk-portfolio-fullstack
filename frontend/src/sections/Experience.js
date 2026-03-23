import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Code, Rocket, Award, Calendar } from 'lucide-react';

export default function ExperienceJourney() {
  const [visibleItems, setVisibleItems] = useState([]);
  const timelineRefs = useRef([]);

  const experiences = [
    {
      id: 1,
      icon: Briefcase,
      date: '2024 - Present',
      title: 'Web Designing',
      company: 'Windesign Labs',
      description: 'Built responsive and interactive user interfaces for various clients. Collaborated with designers to create pixel-perfect implementations and smooth animations.',
      skills: ['Framer', 'Figma'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      icon: Rocket,
      date: '2024 - 2025',
      title: 'Full Stack Developer',
      company: 'KodeKalp Pvt. Ltd',
      description: 'Developed and maintained multiple client projects using modern web technologies. Improved application performance by 40% through code optimization and caching strategies.',
      skills: [ 'Node.js','Expres.js', 'AWS', 'Docker', 'Kubernetes', 'PostgreSQL & MongoDB', ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: Code,
      date: '2023 - 2024',
      title: 'Frontend Developer',
      company: 'KodeKalp Pvt. Ltd',
      description: 'Built responsive and interactive user interfaces for various clients. Collaborated with designers to create pixel-perfect implementations and smooth animations.',
      skills: ['React', 'Next','JavaScript', 'SASS', 'jQuery'],
      color: 'from-pink-500 to-red-500'
    },
    {
      id: 4,
      icon: GraduationCap,
      date: '2022 - 2025',
      title: "Deploma in Computer Science",
      company: 'University of Technology',
      description: 'Semi-Graduated with honors, specializing in software engineering and web development. Completed a capstone project on machine learning applications in web analytics.',
      skills: ['Algorithms', 'Data Structures', 'Web Dev', 'Github'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      id: 5,
      icon: Award,
      date: '2024',
      title: 'First Internship',
      company: 'SSIT Pvt. Ltd.',
      description: 'Gained hands-on experience in agile development and version control. Contributed to building a customer feedback platform used by 50+ companies.',
      skills: ['Git', 'Python','Django', 'REST APIs', 'HTML/CSS' ],
      color: 'from-yellow-500 to-green-500'
    }
  ];

  useEffect(() => {
    const observers = timelineRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (timelineRefs.current[index]) {
          observer.unobserve(timelineRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <section id='experience' className="relative min-h-screen bg-gradient-to-r from-[#1c1b1b] via-black to-black overflow-hidden pt-[60px] sm:pt-[140px] md:pt-[160px] lg:pt-[80px] pb-[30px] sm:pb-[60px] md:pb-[60px] shadow-[0_30px_120px_rgba(239,0,0,0.35)]">
      
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-5 md:px-5 lg:px-5 sm:max-w-[810px] md:max-w-[810px] lg:max-w-[1280px]">
        
        {/* Header */}
        <h1 className="text-center items-center mb-12">
          <div className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-runiga tracking-wider mb-4 opacity-0 animate-slideUp" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            Experience
          </div>
          <div className="text-gray-400 text-lg md:text-xl font-sacrifice tracking-wider opacity-0 animate-slideUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            My Professional Journey
          </div>
        </h1>

        {/* Timeline Container */}
        <div className="relative flex flex-col gap-16 md:gap-24">
          
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50 blur-sm" />
          </div>

          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={exp.id}
                ref={el => timelineRefs.current[index] = el}
                className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center gap-8`}
              >
                
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 20}ms` }}>
                  
                  <div className="relative bg-black ring-[0.3px] ring-white/50 ring-inset rounded-2xl overflow-hidden group hover:ring-white/80 transition-all duration-500">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-10 blur-xl`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 md:p-8">
                      
                      {/* Date Badge */}
                      <div className="inline-flex items-center gap-2 mb-4">
                        <Calendar size={16} className="text-white/60" />
                        <span className={`text-sm font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.date}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                        {exp.title}
                      </h3>
                      <p className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs md:text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-white/70 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Gradient Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color} opacity-50`} />
                  </div>
                </div>

                {/* Center Icon */}
                <div className={`relative z-20 flex-shrink-0 transition-all duration-500 ${
                  isVisible 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-50'
                }`}
                style={{ transitionDelay: `${index * 20 }ms` }}>
                  
                  <div className="relative w-16 h-16 md:w-20 md:h-20">
                    {/* Outer Glow Ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} opacity-30 blur-xl animate-pulse`} />
                    
                    {/* Main Icon Container */}
                    <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${exp.color} p-[2px] group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>

                    {/* Connection Lines */}
                    <div className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-full' : 'left-full'} w-8 h-[2px] bg-gradient-to-r ${isLeft ? exp.color : `${exp.color.split(' ')[0]} to-transparent`}`} />
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-40px)]" />
              </div>
            );
          })}
        </div>

      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
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
      </div>

      {/* Center Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />

      {/* Secondary Accent Glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 60%)',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.15; transform: scale(1) translate(-50%, -50%); }
          50% { opacity: 0.25; transform: scale(1.1) translate(-50%, -50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}