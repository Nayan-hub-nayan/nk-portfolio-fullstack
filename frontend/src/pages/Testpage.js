import React, { useState, useEffect, useRef } from 'react';

const AnimatedPortfolio = () => {
  const [loaded, setLoaded] = useState(false);
  const [letterStates, setLetterStates] = useState([]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const text = "Empowering Your Vision";
    const letters = text.split('');
    
    // Initialize all letters as not visible
    setLetterStates(new Array(letters.length).fill(false));
    
    setTimeout(() => setLoaded(true), 100);
    
    // Animate each letter sequentially with blur effect
    letters.forEach((_, index) => {
      setTimeout(() => {
        setLetterStates(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 800 + (index * 80)); // Each letter appears 80ms after previous
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const renderAnimatedText = () => {
    const text = "Empowering Your Vision";
    const words = text.split(' ');
    let letterIndex = 0;

    return (
      <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block">
            {word.split('').map((letter, i) => {
              const currentIndex = letterIndex++;
              return (
                <span
                  key={i}
                  className={`inline-block transition-all duration-500 ${
                    letterStates[currentIndex]
                      ? 'opacity-100 blur-0 translate-y-0'
                      : 'opacity-0 blur-md translate-y-4'
                  }`}
                >
                  {letter}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
            {wordIndex === 0 && <br />}
            {wordIndex === 1 && <br />}
          </span>
        ))}
      </h1>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <style>{`
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideFromLeft {
          from {
            transform: translateX(-200px) scale(0.5);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideFromTop {
          from {
            transform: translateY(-200px) scale(0.5);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideFromBottom {
          from {
            transform: translateY(200px) scale(0.5);
            opacity: 0;
          }
          to {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideFromRight {
          from {
            transform: translateX(200px) rotate(90deg) scale(0.5);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes diagonalSlide {
          from {
            transform: translate(150px, -150px) scale(0.3);
            opacity: 0;
          }
          to {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        .hero-bg {
          animation: slideDown 1s ease-out;
        }

        .object-1 {
          animation: slideFromLeft 1s ease-out 0.5s both;
        }

        .object-2 {
          animation: slideFromTop 1s ease-out 0.7s both;
        }

        .object-3 {
          animation: slideFromBottom 1s ease-out 0.9s both;
        }

        .object-4 {
          animation: slideFromRight 1.2s ease-out 1.1s both;
        }

        .hero-image {
          animation: diagonalSlide 1.5s ease-out 1.3s both;
        }

        .scroll-element {
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .scroll-element.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card-hover {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 50px rgba(16, 185, 129, 0.4);
        }

        .info-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .info-card:hover {
          transform: translateX(10px);
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.15) 100%);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background with top-to-down animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-emerald-800 hero-bg"></div>

        {/* Animated Objects */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-emerald-400 rounded-full opacity-20 object-1"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-emerald-300 rounded-lg opacity-20 object-2"></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-emerald-500 opacity-20 object-3" style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-40 right-20 w-36 h-36 bg-emerald-200 rounded-full opacity-20 object-4"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-between h-full max-w-7xl mx-auto px-8">
          <div className="flex-1">
            {renderAnimatedText()}
            <p className={`text-xl md:text-2xl text-emerald-100 transition-all duration-700 ${letterStates[20] ? 'opacity-100 blur-0' : 'opacity-0 blur-md'}`}>
              Creative Design & Development
            </p>
          </div>

          {/* Hero Image - Diagonal Animation */}
          <div className="flex-1 flex justify-center items-center">
            <div className="hero-image relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl transform rotate-6 shadow-2xl"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-emerald-300 text-lg font-semibold">Creative Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={el => sectionsRef.current[0] = el} className="py-20 px-4 md:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-element text-5xl font-bold mb-12 text-emerald-400">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="scroll-element info-card bg-gray-800 p-8 rounded-2xl border border-gray-700" style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">Creative Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                I transform ideas into stunning digital experiences through innovative design and cutting-edge technology.
              </p>
            </div>

            <div className="scroll-element info-card bg-gray-800 p-8 rounded-2xl border border-gray-700" style={{ transitionDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-300">Performance Focus</h3>
              <p className="text-gray-300 leading-relaxed">
                Every project is optimized for speed, accessibility, and seamless user experience across all devices.
              </p>
            </div>
          </div>

          <div className="scroll-element bg-gradient-to-r from-gray-800 to-gray-700 p-10 rounded-2xl border border-gray-600" style={{ transitionDelay: '0.3s' }}>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              With years of experience in web development, I specialize in creating beautiful, functional digital experiences that leave lasting impressions. My approach combines aesthetic excellence with technical precision.
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, index) => (
                <span key={tech} className="px-5 py-2 bg-emerald-600 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={el => sectionsRef.current[1] = el} className="py-20 px-4 md:px-20 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-element text-5xl font-bold mb-12 text-emerald-400">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'E-Commerce Platform', desc: 'Full-stack shopping experience with real-time inventory', color: 'from-emerald-500 to-emerald-700' },
              { title: 'Portfolio Dashboard', desc: 'Analytics dashboard with interactive data visualization', color: 'from-teal-500 to-teal-700' },
              { title: 'Social Media App', desc: 'Real-time messaging and content sharing platform', color: 'from-cyan-500 to-cyan-700' }
            ].map((project, index) => (
              <div 
                key={index}
                className="scroll-element card-hover bg-gray-900 rounded-2xl overflow-hidden border border-gray-700"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={`h-56 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
                  <span className="text-8xl font-bold text-white opacity-20">0{index + 1}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-emerald-300">{project.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.desc}
                  </p>
                  <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all hover:scale-105 font-semibold">
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={el => sectionsRef.current[2] = el} className="py-20 px-4 md:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="scroll-element text-5xl font-bold mb-12 text-emerald-400">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'React & Next.js', level: 95, icon: '⚛️' },
              { name: 'UI/UX Design', level: 90, icon: '🎨' },
              { name: 'Node.js & APIs', level: 85, icon: '⚙️' },
              { name: 'Animation & Motion', level: 88, icon: '✨' }
            ].map((skill, index) => (
              <div 
                key={skill.name}
                className="scroll-element info-card bg-gray-800 p-6 rounded-2xl border border-gray-700"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-xl font-semibold text-gray-200">{skill.name}</span>
                  </div>
                  <span className="text-emerald-400 text-xl font-bold">{skill.level}%</span>
                </div>
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 shadow-lg shadow-emerald-500/50"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={el => sectionsRef.current[3] = el} className="py-20 px-4 md:px-20 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-element bg-gradient-to-br from-emerald-600 to-emerald-800 p-12 rounded-3xl text-center shadow-2xl">
            <h2 className="text-5xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              Have a project in mind? Let's create something amazing together and bring your vision to life.
            </p>
            <button className="px-10 py-4 bg-white text-emerald-700 text-xl font-bold rounded-xl transition-all hover:scale-110 hover:shadow-2xl">
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-center text-gray-400">
        <p>© 2024 Portfolio. Crafted with passion and precision.</p>
      </footer>
    </div>
  );
};

export default AnimatedPortfolio;