"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ArrowRight, Menu, Github, Linkedin, Mail, Play , Facebook, Twitter, Instagram} from "lucide-react";
import techwaveswhite from '../assets/techwaveslogowhite.png';
import mahinar from "../assets/mahinar.png";
import dorsane from "../assets/dorsane.png";
import club3 from "../assets/club3.png";
import club4 from "../assets/club4.png";
import club5 from "../assets/club5.png";

function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentCard, setCurrentCard] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observers = {};
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            setIsVisible(prev => ({ ...prev, [key]: entry.isIntersecting }));
          },
          { threshold: 0.2 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });
    return () => Object.values(observers).forEach(observer => observer.disconnect());
  }, []);
  
  const textOpacity = Math.max(1 - scrollY / 400, 0);
  const logoTranslateY = Math.min(scrollY * 0.3, 200);
  const logoScale = Math.max(1.5 - scrollY / 800, 0.8);
  
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = (scrollTop / (docHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const cards = [
    {
      title: "Workshops & Seminars",
      description: "Join our regular workshops covering everything from web development to AI and machine learning."
    },
    {
      title: "Networking Events",
      description: "Connect with fellow tech enthusiasts, potential collaborators, and industry professionals."
    },
    {
      title: "Certification Programs",
      description: "Earn certifications in various tech domains to boost your resume and skills."
    }
  ];

  const logos = ["🚀", "💻", "🎯", "⚡", "🔥", "💡", "🌟", "🎨"];

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) setCurrentCard((prev) => (prev + 1) % cards.length);
    else if (diff < -50) setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

 return (
  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen overflow-hidden p-4" style={{ overflow: 'hidden' }}>
      <style jsx global>{`
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes float { 0%, 100% { transform: translateY(0px) translateX(0px); } 50% { transform: translateY(-15px) translateX(8px); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes bounce-right { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(4px); } }
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes expand-width { 0% { width: 0; } 100% { width: 100%; } }
        @keyframes line-down { 0% { transform: translateY(-100%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(100%); opacity: 0; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); } 50% { box-shadow: 0 0 30px rgba(6, 182, 212, 0.8); } }
        @keyframes slide-down { 0% { transform: translateY(-15px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes slide-up { 0% { transform: translateY(15px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes fade-in-up { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        @keyframes scale-in { 0% { transform: scale(0.9); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
        .animate-float { animation: float 15s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 3s ease-in-out infinite; }
        .animate-bounce-right { animation: bounce-right 1s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        .animate-expand-width { animation: expand-width 0.8s ease-out forwards; }
        .animate-line-down { animation: line-down 1.5s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-slide-down { animation: slide-down 0.5s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.7s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.7s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.7s ease-out forwards; }
        .animate-scroll-left { animation: scroll-left 25s linear infinite; }
        
        /* Hide default scrollbar */
        body {
          overflow-y: scroll;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Scroll Progress Roadmap */}
      <div className="fixed left-3.5 -translate-x-1/2 top-0 h-full w-px pointer-events-none z-40">
        <div className="absolute inset-0 w-px bg-slate-700/40" />
        <div 
          className="absolute top-0 left-0 w-px bg-gradient-to-b from-white via-slate-300 to-slate-600 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          style={{ 
            height: `${scrollProgress}%`,
            filter: scrollProgress < 15 ? `blur(${(15 - scrollProgress) / 3}px)` : 'blur(0px)'
          }}
        />
        <div 
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out"
          style={{ top: `${scrollProgress}%` }}
        >
          <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-white/30 animate-ping" />
          <div className="relative w-2.5 h-2.5 rounded-full bg-gradient-to-br from-white to-slate-200 shadow-md shadow-white/50">
            <div className="absolute inset-0.5 rounded-full bg-white" />
          </div>
        </div>
        {[25, 50, 75].map((milestone) => (
          <div
            key={milestone}
            className={`absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              scrollProgress >= milestone 
                ? 'bg-white scale-100 opacity-100' 
                : 'bg-slate-600 scale-75 opacity-50'
            }`}
            style={{ top: `${milestone}%` }}
          />
        ))}
      </div>

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/15 filter blur-2xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/15 filter blur-2xl animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>


      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-20 px-8">
  
  {/* Animated background glow */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>

  <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
    
    {/* Glowing blue arc at top - Enhanced glow */}
    <div className="relative mb-6 w-full max-w-3xl animate-fade-in">
      <svg 
        viewBox="0 0 400 100" 
        className="w-full h-auto"
        style={{ 
          filter: 'drop-shadow(0 0 40px rgba(59, 130, 246, 1)) drop-shadow(0 0 60px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 80px rgba(59, 130, 246, 0.6))'
        }}
      >
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(6, 182, 212, 0)" />
            <stop offset="15%" stopColor="rgba(6, 182, 212, 0.9)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 1)" />
            <stop offset="85%" stopColor="rgba(6, 182, 212, 0.9)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
          </linearGradient>
        </defs>
        <path
          d="M 20 70 Q 200 10, 380 70"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>

  

    {/* Logo - Bigger */}
    <div className="relative mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
      <img 
        src={techwaveswhite.src} 
        alt="Techwaves Club Official Logo" 
        className="w-100 sm:w-80 lg:w-96 mx-auto relative z-10"
      />
    </div>
      {/* Main Heading - positioned inside curve */}
    <h1 
      className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-white text-center mb-2 animate-fade-in -mt-12"
      style={{ 
        opacity: textOpacity, 
        animationDelay: '0.1s',
        fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
      }}
    >
      ENSB  tech club.
    </h1>
    
    {/* Subheading */}
    <p 
      className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide text-gray-400 text-center mb-12 animate-fade-in"
      style={{ 
        opacity: textOpacity, 
        animationDelay: '0.2s',
        fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif"
      }}
    >
      The future of innovation.
    </p>

    {/* Description */}
    <p 
      className="text-gray-400 text-center max-w-2xl mb-10 text-lg leading-relaxed animate-fade-in"
      style={{ opacity: textOpacity, animationDelay: '0.3s' }}
    >
      Powerful, self-serve student engagement tools and activities. Supercharge your skills & keep members engaged from anywhere.
    </p>

    {/* CTA Buttons */}
          <div 
            className="relative z-10 flex flex-col sm:flex-row flex-wrap gap-5 justify-center mb-20 animate-fade-in-up px-8"
            style={{ 
              opacity: textOpacity,
              animationDelay: '0.4s'
            }}
          >
            <button className="group relative bg-slate-800 hover:bg-slate-700 text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-slate-700/40">
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-slate-700 to-slate-600 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative text-base">Read More</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group relative bg-gradient-to-r from-cyan-700 to-cyan-700 hover:from-cyan-400 hover:to-blue-500 text-white px-10 py-4 rounded-full flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40">
              <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative font-semibold text-base">Join the Club</span>
              <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Social Links */}
          <div 
            className="flex flex-col sm:flex-row items-center gap-5 sm:space-x-5 pt-10 border-t border-slate-700/50 animate-fade-in-up px-8"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="text-slate-400 text-base">Follow us:</span>
            <div className="flex space-x-4">
              <a href="#" className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 p-3 rounded-full hover:scale-110 hover:rotate-6">
                <Github size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="#" className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 p-3 rounded-full hover:scale-110 hover:rotate-6">
                <Linkedin size={20} className="group-hover:animate-pulse" />
              </a>
              <a href="#" className="group text-slate-400 hover:text-cyan-400 transition-all duration-300 bg-slate-800/30 hover:bg-slate-800/60 p-3 rounded-full hover:scale-110 hover:rotate-6">
                <Mail size={20} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

   

    
  </div>
</section>
     
     
    

      
     
      {/* Club Photos Section */}
      
      {/* Club Photos Section */}
      <section 
        ref={el => sectionRefs.current['photos'] = el}
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-8 md:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            {/* Left Side - Text */}
            {/* Left Side - Text */}
<div 
  className={`text-white transition-all duration-1000 ${
    isVisible.photos ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
  }`}
>
  <div className="inline-block mb-4">
    <div className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-600 mb-3" />
  </div>
  
  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
    <span className="typing-animation">
      MORE THAN<br />
      <span className="bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">
        JUST A CLUB
      </span>
    </span>
  </h2>
  
  <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
    We're a <span className="text-blue-300 font-semibold">family</span> of dreamers and innovators, 
    where every idea matters and every voice is heard. Together, we don't just learn technology—we 
    grow, inspire each other, and create memories that last a lifetime. This is where 
    <span className="text-blue-400 font-semibold"> belonging </span>meets purpose.
  </p>
</div>
           

            {/* Right Side - Scattered Photos */}
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
              
              {/* Photo 1 - Top Left */}
              <div 
                className={`absolute top-0 left-0 sm:left-8 w-[220px] sm:w-[280px] md:w-[320px] transform rotate-[-8deg] hover:rotate-[-4deg] transition-all duration-500 hover:scale-105 hover:z-30 z-20 shadow-2xl ${
                  isVisible.photos ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="bg-white p-2 rounded-lg group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={club3.src}
                    alt="Club members gathering"
                    className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover rounded"
                  />
                </div>
              </div>

              {/* Photo 2 - Center Right */}
              <div 
                className={`absolute top-24 sm:top-32 right-0 w-[220px] sm:w-[280px] md:w-[320px] transform rotate-[10deg] hover:rotate-[6deg] transition-all duration-500 hover:scale-105 hover:z-30 z-10 shadow-2xl ${
                  isVisible.photos ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
                }`}
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="bg-white p-2 rounded-lg group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={club4.src}
                    alt="Educatek event"
                    className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover rounded"
                  />
                </div>
              </div>

              {/* Photo 3 - Bottom Center */}
              <div 
                className={`absolute bottom-0 sm:bottom-8 left-8 sm:left-20 w-[220px] sm:w-[280px] md:w-[320px] transform rotate-[-5deg] hover:rotate-[-2deg] transition-all duration-500 hover:scale-105 hover:z-30 z-30 shadow-2xl ${
                  isVisible.photos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="bg-white p-2 rounded-lg group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={club5.src}
                    alt="Outdoor club activity"
                    className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover rounded"
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>


      {/* leaders section */}
      {/* Leaders Section */}
<section className="relative py-24 px-4">
  
  <div className="relative max-w-5xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-20">
      <div className="inline-block mb-4">
        <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Leadership Team</span>
      </div>
      <h2 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Meet Our Leaders
      </h2>
      <p className="text-blue-200/80 text-xl max-w-2xl mx-auto">
        The visionaries driving TechWaves forward with passion and dedication
      </p>
    </div>

    {/* Leaders Container */}
    <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
      
      {/* President Card - Dorsane Zertit */}
      <div className="group relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-2xl border border-blue-300/20 hover:border-blue-300/40 transition-all duration-500 hover:-translate-y-2">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-md opacity-30"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300/30 shadow-2xl">
                <img 
                  src={dorsane.src} 
                  alt="Dorsane Zertit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold text-white mb-2">Dorsane Zertit</h3>
            <div className="flex flex-col gap-1">
              <p className="text-blue-400 font-bold text-base">President of TechWaves</p>
              <p className="text-cyan-300 font-semibold text-sm">Public Relations</p>
            </div>
          </div>
          
          {/* Bio */}
          <p className="text-white/90 text-center mb-6 leading-relaxed text-sm">
            Leading TechWaves with strategic vision and fostering meaningful connections within our community. Dedicated to building bridges and creating impactful experiences for every member.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Facebook className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Co-Leader Card - Zertit Mahinar */}
      <div className="group relative lg:mt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl p-6 shadow-2xl border border-blue-300/20 hover:border-blue-300/40 transition-all duration-500 hover:-translate-y-2">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-30"></div>
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-300/30 shadow-2xl">
                <img 
                  src={mahinar.src}
                  alt="Zertit Mahinar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold text-white mb-2">Zertit Mahinar</h3>
            <div className="flex flex-col gap-1">
              <p className="text-cyan-400 font-bold text-base">Co-Leader</p>
              <p className="text-blue-300 font-semibold text-sm">Organizer & Human Resources</p>
            </div>
          </div>
          
          {/* Bio */}
          <p className="text-white/90 text-center mb-6 leading-relaxed text-sm">
            Orchestrating seamless operations and nurturing our talent ecosystem. Committed to creating a collaborative environment where innovation thrives and every member feels valued.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-blue-500/20 hover:bg-blue-500/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 border border-blue-300/20">
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
      

      {/* What We Offer Section */}
      {/* What We Offer Section */}
<section 
  ref={el => sectionRefs.current['cards'] = el}
  className="relative z-20 px-6 sm:px-12 py-24 min-h-screen flex items-center justify-center"
>
  <div className="max-w-5xl w-full mx-auto">
    
    <div 
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        What We <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Offer</span>
      </h2>
      <p className="text-slate-400 text-base">Swipe through to discover our community features</p>
      <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
    </div>

    {/* Stacked Cards Container */}
    <div 
      className="relative h-96 w-full flex items-center justify-center mb-16"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {cards.map((card, idx) => {
        const offset = (idx - currentCard + cards.length) % cards.length;
        const isActive = idx === currentCard;
        
        let xOffset = 0;
        let yOffset = 0;
        
        if (offset === 0) {
          xOffset = 0;
          yOffset = 0;
        } else if (offset === 1) {
          xOffset = isMobile ? 0 : 320;
          yOffset = isMobile ? 50 : 25;
        } else if (offset === 2) {
          xOffset = isMobile ? 0 : -320;
          yOffset = isMobile ? 100 : 25;
        }
        
        return (
          <div
            key={idx}
            className="absolute w-full h-full max-w-md transition-all duration-500 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${offset === 0 ? 1 : 0.9})`,
              opacity: offset < 3 ? (offset === 0 ? 1 : 0.5) : 0,
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: cards.length - offset
            }}
          >
            <div className="relative h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500 group overflow-hidden">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-bl-full"></div>

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-block p-3 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Dot Indicators */}
    <div className="flex justify-center items-center gap-4">
      {cards.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setCurrentCard(idx)}
          className="transition-all duration-300"
          aria-label={`Go to card ${idx + 1}`}
        >
          <div 
            className={`rounded-full transition-all duration-300 ${
              idx === currentCard 
                ? 'w-7 h-2 bg-gradient-to-r from-cyan-400 to-blue-500' 
                : 'w-2 h-2 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        </button>
      ))}
    </div>
  </div>
</section>
      
     
    

      

      


{/* huewei */}
{/* Features Section */}
{/* Features Section */}
<section className="relative z-20 px-4 py-32">
  <div className="max-w-4xl mx-auto">
    
    {/* Header */}
    <div className="mb-20">
      <h2 className="text-4xl font-light text-white mb-4">About Techwaves ENSB</h2>
      <p className="text-gray-400 text-lg leading-relaxed">
        Founded on October 5th by Zertit Dorsane, Techwaves ENSB is dedicated to technology and innovation. 
        We organize workshops, hackathons, conferences, and tech-related activities for students.
      </p>
    </div>

    {/* Founder Section */}
    <div className="mb-24 pb-24 border-b border-slate-800">
      <h3 className="text-2xl font-light text-white mb-6">
        Our Founder & Leader
      </h3>
      
      <p className="text-gray-400 text-lg leading-relaxed mb-6">
        <span className="text-white">Zertit Dorsane</span>, founder and leader of Techwaves ENSB, 
        brings extensive experience and recognition to the club as Ambassador of Skills Area Egypt and 
        Huawei ICT Academy Constantine Ambassador.
      </p>
      
      <p className="text-gray-500 text-base">
        We are proud Huawei ICT Academy Ambassadors, bringing world-class tech education to our community.
      </p>
    </div>

    {/* What We Offer */}
    <div className="mb-24">
      <h3 className="text-2xl font-light text-white mb-12">What We Offer</h3>
      
      <div className="space-y-8">
        <div>
          <h4 className="text-white text-lg mb-2">Workshops</h4>
          <p className="text-gray-400">Hands-on technical training and skill-building sessions</p>
        </div>
        
        <div>
          <h4 className="text-white text-lg mb-2">Hackathons</h4>
          <p className="text-gray-400">Exciting competitions and innovation challenges</p>
        </div>
        
        <div>
          <h4 className="text-white text-lg mb-2">Conferences</h4>
          <p className="text-gray-400">Tech talks with industry experts and thought leaders</p>
        </div>
      </div>
    </div>

    {/* Bottom Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      <div>
        <h4 className="text-white text-lg mb-2">Events</h4>
        <p className="text-gray-400 text-sm">Join our upcoming club events and activities</p>
      </div>
      
      <div>
        <h4 className="text-white text-lg mb-2">Membership</h4>
        <p className="text-gray-400 text-sm">Become a member and enjoy exclusive benefits</p>
      </div>
      
      <div>
        <h4 className="text-white text-lg mb-2">Community</h4>
        <p className="text-gray-400 text-sm">Connect with fellow members and grow together</p>
      </div>
    </div>

  </div>
</section>
 
    </div>
  );
}

export default Hero;