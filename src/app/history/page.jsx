"use client"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useRef, useState } from 'react'
import { Play, Users, Trophy, Globe, Rocket, Zap, Award, Target, ChevronRight, ArrowUpRight, Sparkles, Code, Cpu, CpuIcon, Binary, Network, Cloud, Database, Terminal } from 'lucide-react'

export default function History() {
  const [activeYear, setActiveYear] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const timelineRef = useRef(null);

  // Updated timeline with images for each event
  const timelineData = [
    {
      year: "2023",
      events: [
        {
          title: "Foundation of TechWaves ENSB",
          description: "TechWaves ENSB was founded on October 5th by Khenssa Moulahem with a mission to build a vibrant technology community at ENSB.",
          icon: <Rocket className="w-5 h-5" />,
          milestones: ["Official foundation", "First core team created", "Defined vision & goals"],
          color: "from-blue-600 to-cyan-500",
          gradient: "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent",
          image: "/techwaves_fundation.jpg" // Replace with actual image path
        }
      ]
    },
    {
      year: "2024",
      events: [
        {
          title: "Open Day & First Expansion",
          description: "Open Day marked the official launch of the club year — new members, new ambitions and an expanded roadmap.",
          icon: <Users className="w-5 h-5" />,
          milestones: ["Open Day launch", "50+ participants", "Expanded workshops schedule"],
          color: "from-cyan-600 to-blue-500",
          gradient: "bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent",
          image: "/openday-event.jpg" // Replace with actual image path
        },
        {
          title: "Regional Events & DevFest",
          description: "Participation at DevFest Constantine and AI Nexus strengthened our presence in the regional tech community.",
          icon: <Zap className="w-5 h-5" />,
          milestones: ["DevFest & AI Nexus participation", "Networking and visibility", "New project initiations"],
          color: "from-cyan-400 to-blue-500",
          gradient: "bg-gradient-to-br from-cyan-300/20 via-blue-400/10 to-transparent",
          image: "/Devest.jpg" // Replace with actual image path
        }
      ]
    },
    {
      year: "2025",
      events: [
        {
          title: "Workshops, Podcast & Hackathons",
          description: "A busy year of Winter Waves workshops, our first podcast, and multiple hackathons focused on design and AI.",
          icon: <Rocket className="w-5 h-5" />,
          milestones: ["Winter Waves workshops", "TechWaves Podcast launch", "Graphic Design Hackathon", "AITHON participation"],
          color: "from-blue-500 to-blue-600",
          gradient: "bg-gradient-to-br from-blue-400/20 via-blue-600/10 to-transparent",
          image: "/Hackathon.png" // Replace with actual image path
        },
        {
          title: "Pass the Future — International Collaborations",
          description: "In partnership with Skills Area, 'Pass the Future' connected members to training in AI, cybersecurity, and generative AI.",
          icon: <Globe className="w-5 h-5" />,
          milestones: ["Partnership with Skills Area", "Workshops on AI & Cybersecurity", "International collaboration"],
          color: "from-blue-500 to-blue-600",
          gradient: "bg-gradient-to-br from-blue-400/20 via-blue-600/10 to-transparent",
          image: "/passf.jpg" // Replace with actual image path
        },
        {
          title: "Official Huawei ICT Academy Ambassador",
          description: "TechWaves ENSB became the official Huawei ICT Academy Ambassador in Constantine — empowering students with world-class certifications and career pathways.",
          icon: <Award className="w-5 h-5" />,
          milestones: [
            "Huawei Certifications = Career Advantage",
            "Vouchers + ICT Competition = Unique Opportunities",
            "We are the first ambassadors",
            "🚀 TechWaves = the driving force of Huawei ICT Academy in Constantine"
          ],
          color: "from-red-600 to-rose-500",
          gradient: "bg-gradient-to-br from-red-500/20 via-rose-500/10 to-transparent",
          highlight: "red",
          image: "/Huawei.PNG "
        }
      ]
    }
  ]

  // Flatten timeline for easier rendering
  const timeline = timelineData.flatMap(yearData => 
    yearData.events.map(event => ({
      ...event,
      year: yearData.year
    }))
  );

  const stats = [
    {
      number: "1+",
      label: "Years Active",
      description: "Since our founding in 2023",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-500"
    },
    {
      number: "50+",
      label: "Active Members",
      description: "A growing community",
      icon: <Users className="w-6 h-6" />,
      color: "from-cyan-600 to-blue-500"
    },
    {
      number: "20+",
      label: "Events",
      description: "Workshops, conferences, hackathons",
      icon: <Zap className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      number: "10+",
      label: "Projects",
      description: "Innovative solutions developed",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    }
  ]

  // Tech icons for the side decorations
  const techIcons = [
    { icon: <Code className="w-4 h-4" />, color: "text-cyan-400" },
    { icon: <Cpu className="w-4 h-4" />, color: "text-blue-400" },
    { icon: <Binary className="w-4 h-4" />, color: "text-cyan-300" },
    { icon: <Network className="w-4 h-4" />, color: "text-blue-300" },
    { icon: <Cloud className="w-4 h-4" />, color: "text-cyan-400" },
    { icon: <Database className="w-4 h-4" />, color: "text-blue-400" },
    { icon: <Terminal className="w-4 h-4" />, color: "text-cyan-300" },
  ];

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.observe-animation');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Function to check if year should be shown
  const shouldShowYear = (currentIndex) => {
    if (currentIndex === 0) return true;
    return timeline[currentIndex].year !== timeline[currentIndex - 1].year;
  };

  return (
    <>
      <Header />
      <main className="relative min-h-screen bg-slate-950 overflow-hidden">
        {/* Enhanced Progress bar with glow */}
        <div className="fixed top-0 left-0 w-full h-1 bg-slate-900/80 z-50 backdrop-blur-xl">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 relative shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            style={{ width: `${scrollProgress}%` }}
          >
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-r from-transparent to-white/30 animate-shimmer" />
          </div>
        </div>

        {/* Background layers with waves */}
        <div className="fixed inset-0 -z-10">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/30" />
          
          {/* Animated waves background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0 wave-pattern" />
            <div className="absolute inset-0 wave-pattern" style={{ animationDelay: '2s', opacity: 0.3 }} />
            <div className="absolute inset-0 wave-pattern" style={{ animationDelay: '4s', opacity: 0.2 }} />
          </div>

          {/* Floating tech particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
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
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
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
                backgroundSize: '30px 30px',
                transform: 'rotateX(60deg) scale(2)',
                transformOrigin: 'center center',
              }}
            />
          </div>

          <div
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-float-1"
            style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
            }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl animate-float-2"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
              transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`
            }}
          />
          <div
            className="absolute top-2/3 right-1/3 w-72 h-72 rounded-full blur-3xl animate-float-3"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.12) 0%, transparent 70%)',
              transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
            }}
          />
        </div>

        <div className="relative pt-24 lg:pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="max-w-7xl mx-auto text-center mb-20 lg:mb-32">
            <div className="inline-block mb-6 animate-float-badge observe-animation opacity-0">
              <span className="group relative px-6 py-2.5 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-500 inline-flex items-center gap-2 shadow-lg shadow-cyan-500/10">
                <span className="relative">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping absolute" />
                  <span className="w-2 h-2 bg-cyan-400 rounded-full block" />
                </span>
                Our Tech Journey
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 rounded-full animate-shimmer" />
              </span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] observe-animation opacity-0">
              <span className="block relative">
                <span className="absolute inset-0 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent blur-sm">
                  The Story of
                </span>
                <span className="relative bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                  The Story of
                </span>
              </span>
              <span className="block mt-2 relative">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent blur-lg opacity-50 animate-pulse-slow">
                  TechWaves ENSB
                </span>
                <span className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                  TechWaves ENSB
                </span>
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed observe-animation opacity-0 font-light">
              Since 2023, we shape the technological future with
              <span className="text-cyan-400 font-semibold"> innovation </span>
              and
              <span className="text-blue-400 font-semibold"> passion</span>
            </p>

            <div className="flex items-center justify-center gap-8 mt-8 observe-animation opacity-0">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <Code className="w-5 h-5 text-cyan-400 animate-pulse-slow" />
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <Cpu className="w-5 h-5 text-blue-400 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
          </div>

          {/* Stats */}
          <div className="max-w-7xl mx-auto mb-24 lg:mb-36">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative observe-animation opacity-0"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full bg-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 transform group-hover:-translate-y-2 shadow-xl">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl" />

                    <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} mb-4 text-white shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      {stat.icon}
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
                    </div>

                    <div className={`text-4xl lg:text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                      {stat.number}
                    </div>

                    <div className="text-white font-bold mb-1.5 text-base group-hover:text-cyan-400 transition-colors duration-300">
                      {stat.label}
                    </div>
                    <div className="text-slate-400 text-sm font-light">{stat.description}</div>

                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 animate-border-flow" style={{ padding: '1px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Founder Section */}
          <div className="max-w-6xl mx-auto mb-32 lg:mb-40 px-4 sm:px-6 lg:px-8 observe-animation opacity-0">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="relative flex-shrink-0 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-slow" />
                <img
                  src="/khenssa.webp"
                  alt="Khenssa Moulahem"
                  className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-full object-cover border-4 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow" />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 backdrop-blur-xl">
                  Founder & President
                </div>
                <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
                  Khenssa Moulahem
                </h2>
                <p className="text-slate-300 text-base lg:text-lg leading-relaxed font-light mb-6">
                  "TechWaves started as a dream — to build a strong, creative, and united
                  tech community at ENSB. Every line of code and every event we create
                  carries that same passion for innovation and collaboration."
                </p>

                <div className="flex justify-center lg:justify-start gap-4 mt-4">
                  <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse-slow" />
                  <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">
                    Inspiring Leadership
                  </span>
                  <div className="w-10 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto mb-24 lg:mb-36">
            <div className="text-center mb-16 observe-animation opacity-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-semibold mb-4 backdrop-blur-xl">
                <Sparkles className="w-4 h-4" />
                Timeline
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Our
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Evolution</span>
              </h2>
            </div>

            <div className="relative">
              {/* Main timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-blue-500 to-blue-600 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-400 to-blue-500 rounded-full blur-md opacity-50" />
              </div>

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center mb-20 observe-animation opacity-0 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Year Badge - Only show if it's the first event of the year */}
                  {shouldShowYear(index) && (
                    <div
                      className={`group/badge relative lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center z-20 mb-6 lg:mb-0 cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-6 ${
                        activeYear === index ? 'scale-110 rotate-3' : ''
                      }`}
                      onClick={() => setActiveYear(index)}
                    >
                      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-60 group-hover/badge:opacity-100 transition-opacity duration-500 ${
                        item.highlight === "red"
                          ? "bg-gradient-to-br from-red-600 via-rose-500 to-red-400"
                          : `bg-gradient-to-br ${item.color}`
                      }`} />

                      <div className={`absolute inset-0 rounded-2xl ${
                        item.highlight === "red"
                          ? "bg-gradient-to-br from-red-600 via-rose-500 to-red-400"
                          : `bg-gradient-to-br ${item.color}`
                      }`} />

                      <div className="relative w-full h-full flex items-center justify-center backdrop-blur-sm rounded-2xl border-2 border-white/20">
                        <div className={`text-white font-black text-xl lg:text-2xl ${
                          item.highlight === "red" ? "text-rose-100" : ""
                        }`}>
                          {item.year}
                        </div>
                      </div>

                      <div className={`absolute inset-0 rounded-2xl border-2 ${
                        item.highlight === "red"
                          ? "border-rose-400/40 animate-pulse-slow"
                          : "border-cyan-400/30 animate-ping-slow"
                      }`} />
                      <div className={`absolute inset-0 rounded-2xl border ${
                        item.highlight === "red"
                          ? "border-red-500/20 animate-spin-slow"
                          : "border-blue-400/20 animate-spin-slow"
                      }`} />
                    </div>
                  )}

                  {/* Tech decoration for events without year badge */}
                  {!shouldShowYear(index) && (
                    <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10 ${
                      index % 2 === 0 ? 'rotate-12' : '-rotate-12'
                    }`}>
                      <div className="relative group/tech">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center backdrop-blur-sm transition-all duration-500 group-hover/tech:scale-125 group-hover/tech:rotate-45">
                          {techIcons[index % techIcons.length].icon}
                          <div className={techIcons[index % techIcons.length].color} />
                        </div>
                        <div className="absolute inset-0 rounded-xl border border-cyan-400/20 animate-ping-slow" />
                      </div>
                    </div>
                  )}

                  {/* Content Card */}
                  {/* Content Card */}
<div className={`w-full lg:w-[calc(50%-8rem)] ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ${
  !shouldShowYear(index) ? 'lg:mt-12' : ''
}`}>

                    <div
                      className={`group/card relative bg-slate-900/70 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-slate-700/50 transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-1 ${
                        activeYear === index ? 'border-cyan-500/70 shadow-2xl shadow-cyan-500/20' : ''
                      } ${
                        !shouldShowYear(index) ? 'ml-8 lg:ml-0 border-l-4 border-l-cyan-500/50' : ''
                      }`}
                    >
                      {/* Subtle connector line for events in the same year */}
                      {!shouldShowYear(index) && (
                        <div className="absolute -left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-cyan-500/40 to-transparent lg:hidden" />
                      )}

                      <div className={`absolute inset-0 ${item.gradient} rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`} />

                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-2xl" />

                      <div className="relative">
                        <div className="flex items-start gap-4 mb-4">
                          <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${item.color} shadow-lg group-hover/card:shadow-cyan-500/50 transition-all duration-500 group-hover/card:scale-110 group-hover/card:rotate-6`}>
                            {item.icon}
                            <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover/card:text-cyan-400 transition-colors duration-300 mb-1">
                              {item.title}
                            </h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />
                          </div>
                        </div>

                        <p className="text-slate-300 mb-6 leading-relaxed font-light">
                          {item.description}
                        </p>

                        <div className="space-y-3">
                          {item.milestones.map((milestone, mIndex) => (
                            <div
                              key={mIndex}
                              className="group/milestone flex items-center gap-3 text-sm"
                            >
                              <div className="relative">
                                <div className={`w-2 h-2 rounded-full ${item.highlight === "red" ? "bg-gradient-to-r from-red-500 to-rose-400" : `bg-gradient-to-r ${item.color}`} group-hover/milestone:scale-150 transition-transform duration-300`} />
                                <div className={`absolute inset-0 w-2 h-2 rounded-full ${item.highlight === "red" ? "bg-gradient-to-r from-red-500 to-rose-400 blur-sm" : `bg-gradient-to-r ${item.color} blur-sm`} animate-pulse-slow`} />
                              </div>
                              <span className="text-slate-400 group-hover/milestone:text-white transition-colors duration-300 font-light">
                                {milestone}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`absolute ${index % 2 === 0 ? 'right-4' : 'left-4'} bottom-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300`}>
                        <ArrowUpRight className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                  </div>

                  
                  {/* Event Image on the opposite side - POSITION CORRECTED */}
<div className={`hidden lg:block w-110 h-64 absolute ${
  index % 2 === 0 ? 'left-[calc(50%+6rem)]' : 'right-[calc(50%+6rem)]'
} top-1/2 transform -translate-y-1/2 z-10`}>
  <div className="relative group/image w-full h-full">
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
    
    {/* Main image container */}
    <div className="relative w-full h-full overflow-hidden rounded-xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-70 group-hover/image:opacity-40 transition-opacity duration-500" />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/image:translate-x-[100%] transition-transform duration-1000" />
    </div>

    {/* Floating elements */}
    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-500/80 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center">
      <Sparkles className="w-3 h-3 text-white" />
    </div>
    <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-blue-500/80 backdrop-blur-sm border border-blue-400/50 animate-ping-slow" />
    
    {/* Connection line to timeline */}
    <div className={`absolute top-1/2 transform -translate-y-1/2 w-12 h-0.5 ${
      index % 2 === 0 
        ? 'left-0 bg-gradient-to-r from-transparent via-cyan-500 to-cyan-500' 
        : 'right-0 bg-gradient-to-l from-transparent via-cyan-500 to-cyan-500'
    } opacity-60 group-hover/image:opacity-100 transition-opacity duration-300`} />
  </div>
</div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Section */}
          <div className="max-w-6xl mx-auto observe-animation opacity-0">
            <div className="relative group/future">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 rounded-3xl blur-2xl opacity-0 group-hover/future:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-slate-900/70 backdrop-blur-2xl rounded-3xl p-8 lg:p-12 text-center border border-slate-700/50 group-hover/future:border-cyan-500/50 transition-all duration-700 shadow-2xl">
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }} />
                </div>

                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-60 animate-pulse-slow" />
                  <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white shadow-2xl transform group-hover/future:scale-110 group-hover/future:rotate-12 transition-all duration-500">
                    <Target className="w-10 h-10" />
                  </div>
                  <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-ping-slow" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-black text-white mb-4">
                  The Future of
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> TechWaves</span>
                </h3>

                <p className="text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed text-base lg:text-lg font-light">
                  Our story is only getting started. With a growing community, strategic partnerships, and a clear vision, we continue to push the limits of technological innovation at ENSB and beyond.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                  {[
                    {
                      goal: "100+ Members",
                      description: "Active community",
                      icon: <Users className="w-6 h-6" />,
                      color: "from-cyan-500 to-blue-500"
                    },
                    {
                      goal: "International Projects",
                      description: "Global collaboration",
                      icon: <Globe className="w-6 h-6" />,
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      goal: "Innovation Hub",
                      description: "Dedicated space",
                      icon: <Rocket className="w-6 h-6" />,
                      color: "from-cyan-600 to-blue-500"
                    }
                  ].map((item, index) => (
                    <div key={index} className="group/goal relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl blur-xl opacity-0 group-hover/goal:opacity-30 transition-opacity duration-500`} />

                      <div className="relative h-full bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 transition-all duration-500 hover:-translate-y-2 border border-slate-700/50 group-hover/goal:border-cyan-500/50 shadow-lg">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-xl" />

                        <div className={`relative w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white shadow-lg group-hover/goal:shadow-cyan-500/50 transition-all duration-500 group-hover/goal:scale-110 group-hover/goal:rotate-6`}>
                          {item.icon}
                          <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover/goal:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
                        </div>

                        <h4 className="font-bold text-white mb-2 text-base lg:text-lg group-hover/goal:text-cyan-400 transition-colors duration-300">
                          {item.goal}
                        </h4>
                        <p className="text-slate-400 text-sm font-light">{item.description}</p>

                        <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                          <div className={`h-full bg-gradient-to-r ${item.color} rounded-full animate-progress`} style={{ animationDelay: `${index * 0.2}s` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        <style>{`
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

          @keyframes code-fall {
            0% {
              transform: translateY(-20px);
              opacity: 0;
            }
            10% {
              opacity: 0.6;
            }
            90% {
              opacity: 0.6;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }

          @keyframes grid-float {
            0%, 100% { transform: rotateX(60deg) scale(2) translateY(0); }
            50% { transform: rotateX(60deg) scale(2) translateY(-20px); }
          }

          @keyframes grid-flow {
            0% { transform: translateY(0); }
            100% { transform: translateY(40px); }
          }

          @keyframes border-flow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes progress {
            0% { width: 0%; }
            100% { width: 75%; }
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

          @keyframes image-shine {
            0% {
              transform: translateX(-100%) skewX(-12deg);
            }
            100% {
              transform: translateX(100%) skewX(-12deg);
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

          .animate-code-fall {
            animation: code-fall linear infinite;
          }

          .animate-grid-float {
            animation: grid-float 8s ease-in-out infinite;
          }

          .animate-grid-flow {
            animation: grid-flow 20s linear infinite;
          }

          .animate-border-flow {
            background-size: 200% 200%;
            animation: border-flow 3s linear infinite;
          }

          .animate-progress {
            animation: progress 2s ease-out forwards;
          }

          .animate-image-shine {
            animation: image-shine 2s ease-in-out infinite;
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

          /* Smooth scrolling */
          html {
            scroll-behavior: smooth;
          }

          /* Custom scrollbar */
          ::-webkit-scrollbar {
            width: 10px;
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
        `}</style>
      </main>
      <Footer />
    </>
  );
}
