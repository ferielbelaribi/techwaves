"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Mail, Code, Cpu, Binary, Network, Cloud, Database, Terminal, Sparkles, Users } from 'lucide-react';
import Header from '@/components/Header';
import Section from '@/components/Section';
import Footer from '@/components/Footer';

const TeamShowcase = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Tech icons for the side decorations
  const techIcons = [
    { icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-cyan-400" },
    { icon: <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-blue-400" },
    { icon: <Binary className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-cyan-300" },
    { icon: <Network className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-blue-300" },
    { icon: <Cloud className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-cyan-400" },
    { icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-blue-400" },
    { icon: <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />, color: "text-cyan-300" },
  ];

  // Mouse tracking for parallax effect - only on desktop
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = (window.scrollY / (documentHeight || 1)) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.observe-animation');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Touch handlers for mobile carousel
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const teamMembers = [
    { 
      id: 1, 
      name: 'Zertit Dorsane', 
      role: 'Leader of the club And IT & Development department', 
      linkedin: 'https://www.linkedin.com/in/zdorsane',
      image: '/team/dorsane2.jpg',
      color: 'from-slate-700 to-slate-900' 
    },
    { 
      id: 2, 
      name: 'Zertit Mahinar', 
      role: 'Leader of Graphic Design Department and HR Leader', 
      linkedin: 'https://www.linkedin.com/in/mahinar-zertit-53bbb3324',
      image: '/team/mahinar2.jpg',
      color: 'from-blue-600 to-slate-800' 
    },
    { 
      id: 3, 
      name: 'Boulbnane Razane', 
      role: 'Leader of Marketing & Public Relations', 
      linkedin: 'https://linkedin.com/',
      image: '/team/razane2.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 4, 
      name: 'Bouchama Rym Ines', 
      role: 'CO-Leader of IT & Development Department', 
      linkedin: 'https://www.linkedin.com/in/rym-bouchama-04295130b',
      image: '/team/Rym.png',
      color: 'from-cyan-500 to-blue-600' 
    },
    { 
      id: 5, 
      name: 'Soror Benabderhaman', 
      role: 'Leader of Content Creation & Events Departement', 
      linkedin: 'https://linkedin.com/',
      image: '/team/soror2.jpg',
      color: 'from-slate-700 to-cyan-700' 
    },
    { 
      id: 6, 
      name: 'Assil Bouzelak', 
      role: 'Leader of Organization & Logistics Departement', 
      linkedin: 'https://www.linkedin.com/in/assil-b-a25b72356',
      image: '/team/assil.png',
      color: 'from-blue-600 to-slate-800' 
    },
    { 
      id: 7, 
      name: 'Balquis Khedara', 
      role: ' CO-Leader of Organization & Logistics Departement', 
      linkedin: 'https://linkedin.com/',
      image: '/team/belquis.jpg',
      color: 'from-cyan-600 to-blue-600' 
    },
    { 
      id: 8, 
      name: 'Maram Rouina', 
      role: 'Leader of Photography & Video Editing Departement', 
      linkedin: 'https://linkedin.com/',
      image: '/team/maram2.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 9, 
      name: 'Mohamed abderahman', 
      role: 'Leader of Graphic Design Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/abdou2.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 10, 
      name: 'zendaoui rahma douaa', 
      role: ' IT & Development Department', 
      linkedin: 'https://www.linkedin.com/in/rahma-zendaoui-ba4809268',
      image: '/team/rahma.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 11, 
      name: 'Nada cheghib', 
      role: 'Human Resources Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/nada.png',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 12, 
      name: 'Ikhlef rym', 
      role: 'Human Resources Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/IKHLEFRYM.JPG',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 13, 
      name: 'Rahmani Yasmine', 
      role: 'Human Resources Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/yasmine.JPG',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 14, 
      name: 'Belaribi Feriel', 
      role: 'IT & Development Department', 
      linkedin: 'https://www.linkedin.com/in/feriel-belaribi-3b3694268',
      image: '/team/belferiel.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 15, 
      name: 'Hamidane Yacine', 
      role: 'IT & Development Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/yasine.JPG',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 16, 
      name: 'Mansouri Ahmed', 
      role: 'IT & Development Department', 
      linkedin: 'https://www.linkedin.com/in/ahmed-mansouri-14557b280/',
      image: '/team/ahmed.png',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 17, 
      name: 'Addoun Khaled', 
      role: 'IT & Development Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/khaledaddon.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 18, 
      name: 'Bouchareb Mouad', 
      role: 'Graphic Design Department', 
      linkedin: 'https://www.linkedin.com/in/mouad-bouchareb-89b7aa380',
      image: '/team/mouad.jpeg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 19, 
      name: 'Kharoubi malak', 
      role: 'Media & Photography Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/malakkh.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 20, 
      name: 'Kerkar Sahar', 
      role: 'Human Resources Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/sahar.PNG',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 21, 
      name: 'Khattab hadjer', 
      role: 'Human Resources Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/hadjer.png',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 22, 
      name: 'Maram otmane', 
      role: 'Human Resources Department', 
      linkedin: 'https://linkedin.com/',
      image: '/team/maram.jpg',
      color: 'from-blue-500 to-cyan-600' 
    },
    { 
      id: 23, 
      name: 'Haouari Nour Ayet Errahmane', 
      role: 'Human Resources Department', 
      linkedin: 'https://www.linkedin.com/in/nour-haouari-770b54189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      image: '/team/nour.jpeg',
      color: 'from-blue-500 to-cyan-600' 
    },
  ];

  const departments = [
    {
      id: 1,
      name: 'IT & Development',
      description: 'Building innovative solutions with cutting-edge technologies. Our developers create robust applications, websites, and software that power our digital presence.',
      icon: '💻',
      image: '/departments/it-dev.jpg',
      members: 25,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 2,
      name: 'Graphic Design',
      description: 'Crafting visual stories through creativity and design. Our designers bring ideas to life with stunning graphics, branding, and visual content.',
      icon: '🎨',
      image: '/departments/design.jpg',
      members: 18,
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      name: 'Marketing & Public Relations',
      description: 'Connecting with audiences and building our brand. We manage social media, campaigns, and public communications to grow our community.',
      icon: '📢',
      image: '/departments/marketing.jpg',
      members: 20,
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 4,
      name: 'Content Creation & Events',
      description: 'Creating engaging content and memorable experiences. From articles to workshops, we produce valuable content and organize impactful events.',
      icon: '✨',
      image: '/departments/content.jpg',
      members: 15,
      color: 'from-green-600 to-teal-600'
    },
    {
      id: 5,
      name: 'Organization & Logistics',
      description: 'Ensuring everything runs smoothly behind the scenes. We handle planning, coordination, and resource management for all club activities.',
      icon: '📋',
      image: '/departments/logistics.jpg',
      members: 12,
      color: 'from-yellow-600 to-orange-600'
    },
    {
      id: 6,
      name: 'Photography & Video Editing',
      description: 'Capturing moments and telling visual stories. Our team produces high-quality photos and videos that document our journey and showcase our work.',
      icon: '🎬',
      image: '/departments/media.jpg',
      members: 16,
      color: 'from-pink-600 to-purple-600'
    }
  ];

  const clubStats = [
    { label: 'Active Members', value: 120, icon: '👥', suffix: '+' },
    { label: 'Departments', value: 6, icon: '🏢', suffix: '' },
    { label: 'Projects Completed', value: 45, icon: '✅', suffix: '+' },
    { label: 'Social Followers', value: 5000, icon: '📱', suffix: '+' },
    { label: 'Events Organized', value: 30, icon: '🎉', suffix: '+' },
    { label: 'Partners', value: 15, suffix: '+' },
    { label: 'Leaders', value: 9, icon: '⭐', suffix: '' },
    { label: 'Total Members', value: 106, suffix: '+' },
    { label: 'Departments', value: 6, icon: '📂', suffix: '' }
  ];

  // Animate statistics on mount
  useEffect(() => {
    const stats = {};
    clubStats.forEach((stat, index) => {
      stats[index] = 0;
    });
    setAnimatedStats(stats);

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timers = clubStats.map((stat, index) => {
      let currentStep = 0;
      return setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(stat.value * progress);
        
        setAnimatedStats(prev => ({
          ...prev,
          [index]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timers[index]);
        }
      }, interval);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  const formatStatValue = (index) => {
    const stat = clubStats[index];
    const value = animatedStats[index] || 0;
    
    if (stat.label === 'Social Followers' && value >= 1000) {
      return `${(value / 1000).toFixed(1)}K${stat.suffix}`;
    }
    return `${value}${stat.suffix}`;
  };

  const getCardPosition = (index) => {
    if (isMobile) {
      // Mobile: simple centered carousel
      const isCenter = index === centerIndex;
      return {
        transform: `scale(${isCenter ? 1 : 0.8})`,
        opacity: isCenter ? 1 : 0,
        zIndex: isCenter ? 50 : 10,
        display: isCenter ? 'block' : 'none',
      };
    }

    // Desktop: 3D carousel
    const diff = index - centerIndex;
    const isCenter = diff === 0;
    
    return {
      transform: `
        translateX(${diff * 140}px) 
        translateZ(${isCenter ? 0 : -200}px) 
        scale(${isCenter ? 1.2 : 0.85})
        rotateY(${diff * -5}deg)
      `,
      opacity: Math.abs(diff) > 3 ? 0 : Math.abs(diff) > 2 ? 0.3 : 1,
      zIndex: isCenter ? 50 : 40 - Math.abs(diff) * 10,
      filter: isCenter ? 'brightness(1.2) drop-shadow(0 0 30px rgba(34, 211, 238, 0.8))' : 'brightness(0.7)',
    };
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCenterIndex((prev) => (prev + 1) % teamMembers.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCenterIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  // Auto-rotate only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [isAnimating, isMobile]);

  return (
    <>
      <Header />
      
      {/* Enhanced Progress bar with glow */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-900/80 z-50 backdrop-blur-xl">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 relative shadow-[0_0_20px_rgba(6,182,212,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-r from-transparent to-white/30 animate-shimmer" />
        </div>
      </div>

      <main className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Enhanced Background layers with waves */}
        <div className="fixed inset-0 -z-10">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30" />
          
          {/* Animated waves background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 wave-pattern" />
            <div className="absolute inset-0 wave-pattern" style={{ animationDelay: '2s', opacity: 0.3 }} />
            <div className="absolute inset-0 wave-pattern" style={{ animationDelay: '4s', opacity: 0.2 }} />
          </div>

          {/* Floating tech particles - reduced on mobile */}
          <div className="absolute inset-0">
            {[...Array(isMobile ? 8 : 15)].map((_, i) => (
              <div
                key={i}
                className="absolute tech-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 20}s`
                }}
              >
                {techIcons[Math.floor(Math.random() * techIcons.length)].icon}
              </div>
            ))}
          </div>

          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent animate-gradient-xy"
              style={{
                transform: isMobile ? 'none' : `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              }}
            />
          </div>

          <div className="absolute inset-0 opacity-20" style={{ perspective: '500px' }}>
            <div
              className="absolute inset-0 animate-grid-float"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                  linear-gradient(180deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: isMobile ? '20px 20px' : '30px 30px',
                transform: isMobile ? 'rotateX(60deg) scale(1.5)' : 'rotateX(60deg) scale(2)',
                transformOrigin: 'center center',
              }}
            />
          </div>

          <div
            className="absolute top-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 rounded-full blur-3xl animate-float-1"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-40 h-40 md:w-80 md:h-80 rounded-full blur-3xl animate-float-2"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              transform: isMobile ? 'none' : `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
            }}
          />
          <div
            className="absolute top-2/3 right-1/3 w-36 h-36 md:w-72 md:h-72 rounded-full blur-3xl animate-float-3"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
              transform: isMobile ? 'none' : `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
            }}
          />
        </div>

        <div className="relative pt-20 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto text-center mb-16 lg:mb-32">
            <div className="inline-block mb-4 md:mb-6 animate-float-badge observe-animation opacity-0">
              <span className="group relative px-4 py-2 md:px-6 md:py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-500 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/10">
                <span className="relative">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-ping absolute" />
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full block" />
                </span>
                Meet Our Team
                <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-full animate-shimmer" />
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-6 leading-tight observe-animation opacity-0">
              <span className="block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent blur-sm">
                  TechWaves
                </span>
                <span className="relative bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  TechWaves
                </span>
              </span>
              <span className="block mt-1 md:mt-2 relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent blur-lg opacity-50 animate-pulse-slow">
                  Leadership Team
                </span>
                <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  Leadership Team
                </span>
              </span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed observe-animation opacity-0 font-light px-4">
              Meet the brilliant minds driving innovation and shaping the future of technology at ENSB. 
              Our dedicated leaders work tirelessly to create impactful experiences and foster growth.
            </p>

            <div className="flex items-center justify-center gap-4 md:gap-8 mt-6 md:mt-8 observe-animation opacity-0">
              <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <Code className="w-4 h-4 md:w-5 md:h-5 text-cyan-400 animate-pulse-slow" />
              <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <Cpu className="w-4 h-4 md:w-5 md:h-5 text-blue-400 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <div className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
          </div>

          {/* 3D Carousel Section - RESPONSIVE */}
          <Section title="OUR TEAM" subtitle="Meet the brilliant minds behind our success">
            <div 
              className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center" 
              style={{ perspective: isMobile ? 'none' : '2000px' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Navigation Buttons - Hidden on mobile */}
              {!isMobile && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-4 lg:left-10 z-50 p-2 md:p-3 lg:p-4 bg-cyan-600/50 hover:bg-cyan-500/70 rounded-full backdrop-blur-sm transition transform hover:scale-110"
                    disabled={isAnimating}
                  >
                    <ChevronLeft size={isMobile ? 16 : 20} />
                  </button>

                  <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-4 lg:right-10 z-50 p-2 md:p-3 lg:p-4 bg-cyan-600/50 hover:bg-cyan-500/70 rounded-full backdrop-blur-sm transition transform hover:scale-110"
                    disabled={isAnimating}
                  >
                    <ChevronRight size={isMobile ? 16 : 20} />
                  </button>
                </>
              )}

              {/* Mobile navigation dots */}
              {isMobile && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
                  {teamMembers.slice(0, 5).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCenterIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === centerIndex ? 'bg-cyan-400 scale-125' : 'bg-cyan-400/30'
                      }`}
                    />
                  ))}
                </div>
              )}

              <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                {teamMembers.map((member, index) => {
                  const position = getCardPosition(index);
                  const isCenter = index === centerIndex;
                  
                  return (
                    <div
                      key={member.id}
                      className={`absolute transition-all duration-500 ease-out cursor-pointer ${
                        isMobile ? 'w-64 sm:w-72' : 'w-72'
                      }`}
                      style={{
                        ...position,
                        transformStyle: 'preserve-3d',
                      }}
                      onClick={() => !isAnimating && setCenterIndex(index)}
                    >
                      <div className={`relative bg-gradient-to-br ${member.color} rounded-2xl p-3 md:p-4 border-2 ${
                        isCenter ? 'border-cyan-400' : 'border-cyan-600/30'
                      } shadow-2xl backdrop-blur-sm`}>
                        {isCenter && !isMobile && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse"></div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-600 rounded-2xl blur opacity-30 animate-pulse"></div>
                          </>
                        )}
                        
                        <div className="relative">
                          {/* Member Image */}
                          <div className="aspect-square bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl mb-3 md:mb-4 overflow-hidden relative">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            {/* Fallback display */}
                            <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl">
                              
                            </div>
                          </div>
                          
                          <div className="text-left">
                            <h3 className="text-base md:text-lg font-bold mb-1">{member.name}</h3>
                            <p className="text-xs text-cyan-400 mb-1 font-semibold">{member.role}</p>
                            
                            {/* Social Links */}
                            <div className="flex gap-2">
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-7 h-7 md:w-8 md:h-8 bg-blue-600 hover:bg-blue-500 rounded flex items-center justify-center transition transform hover:scale-110"
                              >
                                <Linkedin size={isMobile ? 12 : 14} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Section>

          {/* Club Statistics Section - RESPONSIVE */}
          <Section title="OUR IMPACT" subtitle="By the numbers">
            <div className="relative w-full max-w-7xl mx-auto py-8 md:py-16">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-cyan-950/30 to-blue-950/30 rounded-3xl"></div>
              
              <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 gap-8 md:gap-12">
                {/* Left Description */}
                <div className="w-full lg:w-1/3 text-center lg:text-left lg:pr-8 order-2 lg:order-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 md:mb-6">
                    Growing Together
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    Our community continues to expand with passionate members, successful projects, and meaningful partnerships. These numbers represent our collective achievements and the impact we're making together.
                  </p>
                </div>

                {/* Center - Rotating Statistics Circle */}
                <div className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2">
                  <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px] flex items-center justify-center">
                    {/* Rotating container with outer stats - simplified on mobile */}
                    <div className="stats-container absolute inset-0">
                      {clubStats.slice(0, isMobile ? 4 : 6).map((stat, index) => {
                        const totalItems = isMobile ? 4 : 6;
                        const angle = (index * 360) / totalItems;
                        const radius = isMobile ? 100 : 140;
                        const x = Math.cos((angle * Math.PI) / 180) * radius;
                        const y = Math.sin((angle * Math.PI) / 180) * radius;
                        
                        return (
                          <div
                            key={index}
                            className="stat-item absolute top-1/2 left-1/2"
                            style={{
                              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                            }}
                          >
                            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-md rounded-full w-20 h-20 md:w-28 md:h-28 border-2 border-cyan-500/40 hover:border-cyan-400 transition-all duration-300 hover:scale-110 flex flex-col items-center justify-center overflow-hidden group cursor-pointer shadow-xl">
                              {/* Hover glow effect */}
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm animate-pulse"></div>
                              </div>

                              {/* Content */}
                              <div className="relative z-10 text-center px-2">
                                <div className="text-xl md:text-3xl mb-1">{stat.icon}</div>
                                <div className="text-base md:text-xl font-bold text-cyan-400">
                                  {formatStatValue(index)}
                                </div>
                                <div className="text-[8px] md:text-[9px] text-gray-400 leading-tight">{stat.label}</div>
                              </div>

                              {/* Sparkle effect */}
                              <div className="absolute top-1 right-1 w-1 h-1 md:w-1.5 md:h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Center circle with rotating bubbles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      {/* Main center circle */}
                      <div className="relative w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full backdrop-blur-sm border-2 border-cyan-500/50 flex flex-col items-center justify-center shadow-2xl shadow-cyan-500/30">
                        <div className="text-xl md:text-2xl font-bold text-cyan-400">Club</div>
                        <div className="text-[10px] md:text-xs text-gray-400">Stats</div>
                      </div>

                      {/* Rotating bubbles around center */}
                      <div className={`bubble-orbit absolute top-1/2 left-1/2 ${
                        isMobile ? 'w-40 h-40' : 'w-56 h-56'
                      }`}>
                        {/* Bubble 1 - Members */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div className="bubble-content w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600/40 to-cyan-600/40 rounded-full backdrop-blur-sm border-2 border-cyan-400/60 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                            <div className="text-sm md:text-lg font-bold text-cyan-300">{animatedStats[7] || 0}+</div>
                            <div className="text-[7px] md:text-[8px] text-gray-300">Members</div>
                          </div>
                        </div>

                        {/* Bubble 2 - Leaders */}
                        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                          <div className="bubble-content w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-full backdrop-blur-sm border-2 border-pink-400/60 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                            <div className="text-sm md:text-lg font-bold text-pink-300">{animatedStats[6] || 0}</div>
                            <div className="text-[7px] md:text-[8px] text-gray-300">Leaders</div>
                          </div>
                        </div>

                        {/* Bubble 3 - Departments */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                          <div className="bubble-content w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-600/40 to-yellow-600/40 rounded-full backdrop-blur-sm border-2 border-orange-400/60 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer">
                            <div className="text-sm md:text-lg font-bold text-orange-300">{animatedStats[8] || 0}</div>
                            <div className="text-[7px] md:text-[8px] text-gray-300">Departments</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Description */}
                <div className="w-full lg:w-1/3 text-center lg:text-right lg:pl-8 order-3">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 md:mb-6">
                    Building Impact
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    From organizing events to creating innovative solutions, our members are at the heart of everything we do. Join us in making a difference and be part of our growing success story.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Departments Section - RESPONSIVE */}
          <Section title="OUR DEPARTMENTS">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 hover:bg-slate-700/60 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group text-center shadow-lg transform hover:-translate-y-1 md:hover:-translate-y-2"
                >
                  {/* Icon Circle */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-slate-700/30 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-600/20 transition-all duration-300 shadow-md">
                    <div className="text-2xl md:text-4xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{dept.icon}</div>
                  </div>

                  {/* Department Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {dept.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 px-1 group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                    {dept.description}
                  </p>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Global Styles */}
        <style jsx global>{`
          @keyframes float-1 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }

          @keyframes float-2 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(-25px, 25px) scale(1.05); }
            66% { transform: translate(25px, -15px) scale(0.95); }
          }

          @keyframes float-3 {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(20px, 30px) scale(1.08); }
            66% { transform: translate(-30px, -20px) scale(0.92); }
          }

          @keyframes float-badge {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          @keyframes gradient-xy {
            0%, 100% { background-position: 0% 0%; }
            25% { background-position: 100% 0%; }
            50% { background-position: 100% 100%; }
            75% { background-position: 0% 100%; }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }

          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(1.5); opacity: 0; }
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes particle {
            0% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              transform: translate(50px, 50px) scale(1);
              opacity: 0;
            }
          }

          @keyframes grid-float {
            0%, 100% { transform: rotateX(60deg) scale(1.5) translateY(0); }
            50% { transform: rotateX(60deg) scale(1.5) translateY(-20px); }
          }

          @keyframes border-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes wave-move {
            0% {
              transform: translateX(-100%) translateY(10px);
            }
            50% {
              transform: translateX(0%) translateY(-5px);
            }
            100% {
              transform: translateX(100%) translateY(10px);
            }
          }

          @keyframes tech-float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0;
            }
            10% {
              opacity: 0.7;
            }
            90% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(-100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes rotate-stats {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes rotate-bubbles {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes counter-rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(-360deg);
            }
          }

          .animate-float-1 {
            animation: float-1 20s ease-in-out infinite;
          }

          .animate-float-2 {
            animation: float-2 18s ease-in-out infinite;
          }

          .animate-float-3 {
            animation: float-3 22s ease-in-out infinite;
          }

          .animate-float-badge {
            animation: float-badge 3s ease-in-out infinite;
          }

          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease infinite;
          }

          .animate-gradient-xy {
            background-size: 200% 200%;
            animation: gradient-xy 15s ease infinite;
          }

          .animate-shimmer {
            animation: shimmer 2s infinite;
          }

          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }

          .animate-ping-slow {
            animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }

          .animate-slide-in {
            animation: slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .animate-particle {
            animation: particle 5s ease-in-out infinite;
          }

          .animate-grid-float {
            animation: grid-float 8s ease-in-out infinite;
          }

          .animate-border-flow {
            background-size: 200% 200%;
            animation: border-flow 3s linear infinite;
          }

          .stats-container {
            animation: rotate-stats 20s linear infinite;
          }

          .stat-item {
            animation: rotate-stats 20s linear infinite reverse;
          }

          .bubble-orbit {
            animation: rotate-bubbles 15s linear infinite;
          }

          .bubble-content {
            animation: counter-rotate 15s linear infinite;
          }

          /* Wave pattern */
          .wave-pattern {
            background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.1), transparent);
            animation: wave-move 8s ease-in-out infinite;
            background-size: 200% 100%;
          }

          /* Tech particles */
          .tech-particle {
            animation: tech-float linear infinite;
            opacity: 0;
            color: rgba(6, 182, 212, 0.6);
          }

          .observe-animation {
            transition: opacity 0.8s, transform 0.8s;
          }

          /* Line clamp utility */
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: #0f172a;
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #06b6d4, #3b82f6);
            border-radius: 5px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #22d3ee, #60a5fa);
          }

          /* Mobile optimizations */
          @media (max-width: 768px) {
            .stats-container,
            .stat-item,
            .bubble-orbit,
            .bubble-content {
              animation-duration: 25s;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
};

export default TeamShowcase;