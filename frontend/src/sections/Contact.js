import React, { useState, useEffect } from 'react';
import { Code2, Database, Globe, Terminal, CheckCircle, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (e) => {
    setIsSubmitted(false);
    setIsLoading(false);

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputs = e.currentTarget.parentElement.querySelectorAll('input, select, textarea');
    let isValid = true;

    inputs.forEach(input => {
      if (!input.validity.valid) {
        isValid = false;
        input.reportValidity();
      }
    });

    if (!isValid) return;

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: 'Portfolio Contact',
        to_email: 'kawalkarnayan07@gmail.com', // Replace with your email
        subject: "New Project Inquiry from Portfolio",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        project_type: formData.projectType,
        message: formData.message,
        full_message: `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}
Message: ${formData.message}`
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_1vwb4jz',       // ✔ Your EmailJS Service ID
          template_id: 'template_d0tzgbo',    // ✔ Your EmailJS Template ID
          user_id: 'MgFJ2C2MNo_B5mb2T',       // ✔ Your EmailJS Public Key
          template_params: templateParams     // ✔ Params for your template
        })
      });
      

      if (response.ok) {
        setIsLoading(false);
        setIsSubmitted(true);
        setShowSuccessMessage(true);
        
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
        
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            message: ''
          });
          setIsSubmitted(false);
        }, 6000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setIsLoading(false);
      alert('Failed to submit form. Please try again.');
    }
  };

  const [letterStates, setLetterStates] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const TEXT = "Let's Build Something Extraordinary Together";

  useEffect(() => {
    const letters = TEXT.split('');
    setLetterStates(new Array(letters.length).fill(false));
    setTimeout(() => setLoaded(true), 100);

    letters.forEach((_, index) => {
      setTimeout(() => {
        setLetterStates(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 500 + index * 40);
    });
  }, []);

  const renderAnimatedText = (text, startIndex = 0) => {
    const words = text.split(" ");
    let globalIndex = startIndex;

    return words.map((word, wIndex) => {
      return (
        <span key={wIndex} className="inline-block mr-[0.3em]">
          {word.split("").map((letter, lIndex) => {
            const index = globalIndex++;
            return (
              <span
                key={lIndex}
                className={`inline-block transition-all duration-500 ${
                  letterStates[index]
                    ? "opacity-100 blur-0 translate-y-0"
                    : "opacity-0 blur-md translate-y-4"
                }`}
              >
                {letter}
              </span>
            );
          })}
        </span>
      );
    });
  };

  return (
    <>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <style>{`
          @keyframes slideDownBg {
            from {
              transform: translateY(-30%);
            }
            to {
              transform: translateY(0);
            }
          }

          @keyframes floatIn {
            from {
              transform: translateY(30px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .hero-bg-animate {
            animation: slideDownBg 1s ease-out;
          }

          .text-float {
            animation: floatIn 0.8s ease-out;
          }

          .button-animate {
            animation: floatIn 1s ease-out 2s both;
          }

          .neon-border {
            box-shadow: 
              0 0 5px rgba(59, 130, 246, 0.5),
              0 0 10px rgba(59, 130, 246, 0.3),
              inset 0 0 15px rgba(59, 130, 246, 0.1);
          }

          .neon-border:hover {
            box-shadow: 
              0 0 10px rgba(59, 130, 246, 0.8),
              0 0 20px rgba(59, 130, 246, 0.5),
              inset 0 0 20px rgba(59, 130, 246, 0.2);
          }

          .code-icon {
            animation: float 3s ease-in-out infinite;
          }

          .grid-pattern {
            background-image: 
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }

          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          
        `}</style>

        {/* Main Content */}
        <section id="contact" className="w-full h-fit bg-black overflow-hidden relative">
          <div style={{
  width: "100%",
  height: "100%",
  background:
    "radial-gradient(ellipse at top center, #1a2a6c 0%, #000 100%)",
}}

            className="
              w-full h-fit
              
              rounded-bl-[60px] rounded-br-[60px]
              overflow-hidden relative hero-bg-animate
              pl-[12px] pr-[12px]
              pt-[160px] pb-[60px]
              sm:pl-[12px] sm:pr-[12px] sm:pt-[140px] sm:pb-[120px]
              md:pl-[30px] md:pr-[28px] md:pt-[170px] md:pb-[80px]
              lg:pt-[170px] lg:pb-[80px] lg:pl-[0px] lg:pr-[0px] lg:rounded-bl-[50px] lg:rounded-br-[50px]
            "
          >
          
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 grid-pattern opacity-30"></div>

            <div className="max-w-[1280px] mx-auto px-2.5 sm:px-2 md:px-2 lg:px-10 relative z-10 text-center md:text-left">
              <div className="grid sm:grid md:grid lg:grid-cols-[1fr_auto] gap-12 items-stretch">
                
                {/* Left Side */}
                <div className="text-white w-full mt-0 lg:mt-14">
                  <h1 className="text-[34px] md:text-[43px] font-inter lg:text-[53px] leading-tight font-bold max-w-[681px] md:max-w-[680px] lg:max-w-[1280px] mb-6 tracking-[-1.44px]">
                    {renderAnimatedText("Let's Build Something Extraordinary Together", 0)}
                  </h1>

                  <div className="space-y-4 mt-8">
                    {/* Service Items */}
                    <div className="flex items-center w-full text-left gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
                        <Code2 className="text-blue-400 w-6 h-6" />
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg md:text-lg lg:text-lg w-full text-left font-inter">
                        Full-Stack Development & Architecture
                      </p>
                    </div>

                    <div className="flex items-center w-full text-left gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
                        <Database className="text-purple-400 w-6 h-6" />
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg md:text-lg lg:text-lg w-full text-left font-inter">
                        Cloud Solutions & DevOps
                      </p>
                    </div>

                    <div className="flex items-center w-full text-left gap-3">
                      <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/50">
                        <Globe className="text-cyan-400 w-6 h-6" />
                      </div>
                      <p className="text-gray-300 text-base sm:text-lg md:text-lg lg:text-lg w-full text-left font-inter">
                        Custom Web & Mobile Applications
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full flex justify-start items-start md:justify-end">
                  
                  {/* Success Message Popup */}
                  {showSuccessMessage && (
                    <div className="fixed top-24 left-15 sm:top-30 sm:left-15 md:top-20 md:left-28 lg:top-20 lg:left-1/3 transform -translate-x-1/2 z-50 animate-slideDown">
                      <div className="bg-gray-900 border border-blue-500/50 rounded-2xl shadow-2xl px-4 py-3 sm:px-6 sm:py-4 flex items-start sm:items-center gap-3 font-inter">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-100 font-medium text-sm sm:text-base leading-snug font-inter">
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="bg-gray-900/80 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-5 shadow-xl w-full max-w-[1280px] md:max-w-[1280px] lg:max-w-[510px] neon-border">
                    <h2 className="text-[18px] font-semibold font-inter text-white mb-4 text-left flex items-center gap-2">
                      <Terminal className="w-5 h-5 text-blue-400" />
                      Get In Touch
                    </h2>

                    <div className="space-y-3 flex flex-col gap-2">
                      <div className="flex gap-3">
                        {/* Name */}
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          pattern="^[A-Za-z ]+$"
                          onInvalid={(e) => e.target.setCustomValidity("Please fill in this field.")}
                          onInput={(e) => e.target.setCustomValidity("")}
                          className="w-full px-3 py-3 bg-black/50 border border-gray-700 rounded-xl 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                     text-white font-medium text-[16px] font-inter placeholder-gray-500"
                        />

                        {/* Phone */}
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          pattern="^[0-9]{10}$"
                          onInvalid={(e) => e.target.setCustomValidity("Please enter a valid 10-digit phone number.")}
                          onInput={(e) => e.target.setCustomValidity("")}
                          className="w-full px-3 py-3 bg-black/50 border border-gray-700 rounded-xl 
                                     focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                     text-white font-medium text-[16px] font-inter placeholder-gray-500"
                        />
                      </div>

                      {/* Email */}
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Please enter a valid email address.")}
                        onInput={(e) => e.target.setCustomValidity("")}
                        className="w-full px-3 py-3 bg-black/50 border border-gray-700 rounded-xl 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                   text-white font-medium text-[16px] font-inter placeholder-gray-500"
                      />

                      {/* Company */}
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name (Optional)"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 bg-black/50 border border-gray-700 rounded-xl 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                   text-white font-medium text-[16px] font-inter placeholder-gray-500"
                      />

                      {/* Project Type */}
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        onInvalid={(e) => e.target.setCustomValidity("Please select a project type.")}
                        onInput={(e) => e.target.setCustomValidity("")}
                        className="w-full px-3 py-3 bg-black/50 border border-gray-700 rounded-xl
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                   text-white font-medium appearance-none cursor-pointer text-[16px] font-inter"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M5 7.5L10 12.5L15 7.5' stroke='%239CA3AF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1.25rem center",
                        }}
                      >
                        <option value="">Select Project Type</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Backend/API">Backend/API</option>
                        <option value="DevOps/Cloud">DevOps/Cloud</option>
                        <option value="Consulting">Consulting</option>
                        <option value="Other">Other</option>
                      </select>

                      {/* Message */}
                      <textarea
                        name="message"
                        placeholder="Tell me about your project..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        onInvalid={(e) => e.target.setCustomValidity("Please tell me about your project.")}
                        onInput={(e) => e.target.setCustomValidity("")}
                        className="w-full px-3 py-3 bg-black/50 border border-gray-700 rounded-xl 
                                   focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none 
                                   text-white font-medium text-[16px] font-inter placeholder-gray-500 resize-none"
                      />

                      {/* Submit Button */}
                      <button
                        onClick={handleSubmit}
                        disabled={isLoading || isSubmitted}
                        className={`
                          w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600
                          transition-all duration-300 cursor-pointer z-20 
                          text-white font-semibold text-lg py-4 rounded-[18px] mt-2 
                          flex items-center justify-center gap-2
                          shadow-lg hover:shadow-blue-500/50
                          ${isLoading ? "cursor-wait opacity-70" : ""}
                          ${isSubmitted ? "bg-green-600 hover:bg-green-600" : ""}
                        `}
                      >
                        {isLoading ? (
                          <div className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></div>
                        ) : isSubmitted ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>Message Sent!</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>

                      <p className="text-[14px] font-medium text-gray-400 leading-normal mt-4 text-left font-inter">
                        I typically respond within 24 hours. Your information is kept confidential and will never be shared.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Icons */}
            <div className="absolute top-20 left-10 opacity-20 code-icon" style={{ animationDelay: '0s' }}>
              <Code2 className="w-24 h-24 text-blue-400" />
            </div>
            <div className="absolute bottom-20 right-10 opacity-20 code-icon" style={{ animationDelay: '1s' }}>
              <Terminal className="w-32 h-32 text-purple-400" />
            </div>
            <div className="absolute top-1/2 right-20 opacity-20 code-icon" style={{ animationDelay: '2s' }}>
              <Database className="w-20 h-20 text-cyan-400" />
            </div>
            <div className="absolute bottom-32 left-20 opacity-20 code-icon" style={{ animationDelay: '1.5s' }}>
              <Globe className="w-28 h-28 text-blue-300" />
            </div>
          </div>
          
      
        </section>
      </div>
    </>
  );
}