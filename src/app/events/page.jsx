"use client"

import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Clock, Cpu, Code2, Brain, Network, Sparkles, Zap, ArrowDown } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Events() {
  const slides = [
    {
      id: 1,
      title: "TechWaves Open Day — Launching a New Chapter",
      date: "October 15, 2024",
      location: "TechHub Campus",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200",
      tech: ["AI", "Cloud", "Web3"],
    },
    {
      id: 2,
      title: "AI Nexus & DevFest Constantine Participation",
      date: "December 10, 2024",
      location: "Convention Center",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200",
      tech: ["Machine Learning", "TensorFlow", "PyTorch"],
    },
    {
      id: 3,
      title: "Hackathon: Graphic Design Challenge",
      date: "February 19, 2025",
      location: "Innovation Lab",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200",
      tech: ["Figma", "React", "Three.js"],
    },
  ]

  const events = [
    {
      id: 1,
      title: "Winter Waves Workshop — AI & Data Science",
      date: "January 2025",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800",
      type: "Workshop",
      participants: 120,
      duration: "3h",
      level: "Beginner",
      techStack: ["Python", "Pandas", "Scikit-learn"]
    },
    {
      id: 2,
      title: "Pass the Future — AI, Cybersecurity & Skills",
      date: "May 2025",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800",
      type: "Conference",
      participants: 300,
      duration: "1 day",
      level: "All Levels",
      techStack: ["Blockchain", "Zero Trust", "Kubernetes"],
      galleryId: "pass-future-gallery",
      galleryImages: [
        "/event/6026246722025539947.jpg",
        "/event/6026246722025539946.jpg",
        "/event/6026246722025539945.jpg",
        "/event/6026246722025539944.jpg",
        "/event/6026246722025539943.jpg",
        "/event/6026246722025539942.jpg"
      ]
    },
    {
      id: 3,
      title: "AITHON — AI Hackathon with UMCBot",
      date: "April 2025",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800",
      type: "Hackathon",
      participants: 150,
      duration: "48h",
      level: "Advanced",
      techStack: ["OpenAI API", "LangChain", "Vector DB"],
      galleryId: "aithon-gallery",
      galleryImages: [
        "/event/UMCBot.jpg",
        "/event/UMCBot2.jpg",
        "/event/UMCBot3.jpg",
        "/event/UMCBot4.jpg",
        "/event/UMCBot5.jpg",
        "/event/UMCBot6.jpg"
      ]
    },
    {
      id: 4,
      title: "Huawei ICT Academy — Cloud Infrastructure",
      date: "September 2025",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
      type: "Partnership",
      participants: 200,
      duration: "2h",
      level: "Intermediate",
      techStack: ["Cloud Computing", "5G", "IoT"]
    },
    {
      id: 5,
      title: "Full-Stack Development Bootcamp",
      date: "March 2025",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800",
      type: "Bootcamp",
      participants: 80,
      duration: "5 days",
      level: "Beginner",
      techStack: ["Next.js", "Node.js", "PostgreSQL"]
    },
    {
      id: 6,
      title: "Blockchain & Web3 Summit 2025",
      date: "June 2025",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800",
      type: "Summit",
      participants: 250,
      duration: "1 day",
      level: "All Levels",
      techStack: ["Solidity", "Smart Contracts", "DeFi"]
    },
    {
      id: 7,
      title: "Hackathon Graphic Design",
      date: "July 2025",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
      type: "Workshop",
      participants: 60,
      duration: "4h",
      level: "Intermediate",
      techStack: ["Figma", "Prototyping", "Design Systems"],
      galleryId: "uiux-gallery",
      galleryImages: [
        "/event/hackaton.jpg",
        "/event/hackaton2.jpg",
        "/event/hackaton3.jpg",
        "/event/hackaton4.jpg",
        "/event/hackaton5.jpg",
        "/event/hackaton6.jpg"
      ]
    },
    {
      id: 8,
      title: "Tech Career Fair & Networking 2025",
      date: "November 2025",
      image: "https://images.unsplash.com/photo-1551833726-3a7b6d373bef?q=80&w=800",
      type: "Career Fair",
      participants: 500,
      duration: "6h",
      level: "All Levels",
      techStack: ["Networking", "DevOps", "SRE"]
    },
    {
      id: 9,
      title: "Futur Caravan",
      date: "August 2025",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
      type: "Hackathon",
      participants: 100,
      duration: "24h",
      level: "Intermediate",
      techStack: ["React Native", "Flutter", "Firebase"],
      galleryId: "mobile-challenge-gallery",
      galleryImages: [
        "/event/5987769557424653700.jpg",
        "/event/5987769557424653706.jpg",
        "/event/IMG_2144.jpg",
        "/event/futur.jpg",
        "/event/futur2.jpg",
        "/event/futur3.jpg"
      ]
    },
  ]

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isHovering, setIsHovering] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [activeGallery, setActiveGallery] = useState(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    if (isHovering) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length, isHovering])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToGallery = (galleryId) => {
    if (!galleryId) return;
    
    setActiveGallery(galleryId)
    const element = document.getElementById(galleryId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
    }),
  }

  // Tech badges avec couleurs différentes
  const getTechColor = (tech) => {
    const colors = {
      "AI": "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300",
      "Cloud": "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-300",
      "Web3": "from-orange-500/20 to-red-500/20 border-orange-500/30 text-orange-300",
      "Machine Learning": "from-green-500/20 to-emerald-500/20 border-green-500/30 text-green-300",
      "React": "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300",
      "Blockchain": "from-yellow-500/20 to-amber-500/20 border-yellow-500/30 text-yellow-300",
      "default": "from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-300"
    }
    
    for (const [key, value] of Object.entries(colors)) {
      if (tech.includes(key)) return value
    }
    return colors.default
  }

  return (
    <div className="relative min-h-screen text-white font-sans overflow-hidden">
      {/* 🌊 FOND ORIGINAL AVEC VAGUES POUR TOUTE LA PAGE */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient base with pulsation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#030617] via-[#04112b] to-[#020617] animate-techwave-gradient" />

        {/* Soft glowing halo following mouse */}
        <div
          className="absolute w-[50rem] h-[50rem] bg-cyan-500/10 blur-[160px] rounded-full mix-blend-screen pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        />

        {/* Moving waves (faded) */}
        <div className="absolute inset-0 opacity-70 mix-blend-screen">
          <svg
            className="absolute bottom-0 w-[200%] h-[130%] animate-wave-move"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,220 C400,120 800,280 1200,180 L1200,400 L0,400 Z"
              fill="url(#grad1)"
              style={{ opacity: 0.35 }}
            />
            <defs>
              <linearGradient id="grad1" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#00eaff" stopOpacity="0.4" />
                <stop offset="50%" stopColor="#0077ff" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00eaff" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>

          <svg
            className="absolute bottom-0 w-[200%] h-[150%] animate-wave-move-slow"
            viewBox="0 0 1200 400"
            preserveAspectRatio="none"
          >
            <path
              d="M0,260 C400,360 800,120 1200,320 L1200,400 L0,400 Z"
              fill="url(#grad2)"
              style={{ opacity: 0.25 }}
            />
            <defs>
              <linearGradient id="grad2" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#00c3ff" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#005eff" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#00c3ff" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Reflective light lines */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-shimmer" />
        <div className="absolute inset-x-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-shimmer-slow" />
      </div>

      <Header />

      {/* MAIN TITLE */}
      <motion.section 
        className="max-w-6xl mx-auto mt-20 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <Zap size={16} className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">TECH COMMUNITY</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          TechWaves Events
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Where innovation meets community. Explore cutting-edge tech events, workshops, and hackathons.
        </p>

        {/* Tech Stats */}
        <motion.div 
          className="flex justify-center gap-8 mt-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">50+</div>
            <div className="text-gray-400">Tech Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">2K+</div>
            <div className="text-gray-400">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">15+</div>
            <div className="text-gray-400">Technologies</div>
          </div>
        </motion.div>
      </motion.section>

      {/* FEATURED EVENTS */}
      <motion.div 
        className="max-w-6xl mx-auto mt-16 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
              <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
              Featured Events
            </h2>
            <p className="text-gray-400 text-lg">Cutting-edge tech experiences</p>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <Cpu size={20} />
            <span className="text-sm font-semibold">LIVE</span>
          </div>
        </div>
      </motion.div>

      {/* CAROUSEL WITH TECH BADGES */}
      <section
        className="relative mt-8 max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 backdrop-blur-sm"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative w-full h-[450px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={slides[current].id}
              className="absolute w-full h-full"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-full object-cover select-none"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide info with tech badges */}
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div
            key={slides[current].id}
            className="bg-black/60 p-6 rounded-xl backdrop-blur-md border border-cyan-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 text-cyan-400 mb-3 text-sm">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{slides[current].date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                <span>{slides[current].location}</span>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-white leading-tight mb-3">
              {slides[current].title}
            </h2>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2">
              {slides[current].tech.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getTechColor(tech)} border backdrop-blur-sm`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Nav buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-500/30 p-3 rounded-xl backdrop-blur-md border border-cyan-500/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-cyan-500/30 p-3 rounded-xl backdrop-blur-md border border-cyan-500/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 backdrop-blur-md bg-black/30 p-2 rounded-xl border border-cyan-500/20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i === current ? "bg-cyan-400 shadow-[0_0_10px_#00ffff]" : "bg-gray-500/70 hover:bg-cyan-200"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ALL EVENTS */}
      <motion.div 
        className="max-w-6xl mx-auto mt-20 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
          Tech Events Calendar
        </h2>
        <p className="text-gray-400 text-lg">Click on any event to view its dedicated gallery</p>
      </motion.div>

      {/* ENHANCED GRID WITH TECH STACK */}
      <section className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className={`group relative bg-gradient-to-br from-[#0b1220] to-[#071832] border border-cyan-800/30 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm ${
              event.galleryId ? 'cursor-pointer' : 'cursor-default'
            }`}
            whileHover={{ scale: event.galleryId ? 1.02 : 1 }}
            onClick={() => event.galleryId && scrollToGallery(event.galleryId)}
          >
            {/* Tech Level Badge */}
            <div className={`absolute top-3 left-3 z-10 px-2 py-1 text-xs font-semibold rounded-full border backdrop-blur-sm ${
              event.level === "Beginner" ? "bg-green-500/20 border-green-500/30 text-green-300" :
              event.level === "Intermediate" ? "bg-yellow-500/20 border-yellow-500/30 text-yellow-300" :
              "bg-red-500/20 border-red-500/30 text-red-300"
            }`}>
              {event.level}
            </div>

            {/* Click to Gallery Indicator - Only show if gallery exists */}
            {event.galleryId && (
              <div className="absolute top-3 right-3 z-10">
                <div className="flex items-center gap-1 px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded border border-cyan-500/30 backdrop-blur-sm">
                  <ArrowDown size={10} />
                  <span>View Gallery</span>
                </div>
              </div>
            )}

            <div className="relative h-48 overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-12 right-3">
                <span className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs font-semibold rounded border border-cyan-500/30 backdrop-blur-sm">
                  {event.type}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="p-5">
              <p className="text-cyan-400 text-sm font-semibold mb-2 flex items-center gap-1">
                <Calendar size={12} />
                {event.date}
              </p>
              <h3 className="text-lg font-bold text-white leading-tight mb-3 group-hover:text-cyan-200 transition-colors">
                {event.title}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1 mb-3">
                {event.techStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
                {event.techStack.length > 3 && (
                  <span className="px-2 py-1 text-xs bg-gray-800/50 text-gray-400 rounded border border-gray-700/50">
                    +{event.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{event.participants}+</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{event.duration}</span>
                </div>
              </div>

              <button className={`w-full px-4 py-2 border border-cyan-500/40 rounded-lg text-sm font-semibold transition-all duration-200 ${
                event.galleryId 
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 hover:shadow-lg hover:shadow-cyan-500/25'
                  : 'bg-gray-500/20 text-gray-400 cursor-not-allowed'
              }`}>
                <Code2 size={14} className="inline mr-2" />
                {event.galleryId ? 'View Event Gallery' : 'Gallery Coming Soon'}
              </button>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-cyan-500/10 blur-xl rounded-xl" />
            </div>
          </motion.div>
        ))}
      </section>

      {/* GALLERIES SECTION TITLE */}
      <motion.div 
        className="max-w-7xl mx-auto mt-20 px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
          Event Galleries
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the visual journey of each event through our interactive galleries
        </p>
      </motion.div>

      {/* INDIVIDUAL EVENT GALLERIES - ALWAYS VISIBLE */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        {events.map((event, index) => (
          event.galleryId && (
            <EventGallery
              key={event.id}
              event={event}
              isActive={activeGallery === event.galleryId}
              index={index}
            />
          )
        ))}
      </section>

      <Footer />

      {/* Styles */}
      <style jsx>{`
        @keyframes techwave-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-techwave-gradient {
          background-size: 200% 200%;
          animation: techwave-gradient 18s ease-in-out infinite;
        }
        @keyframes wave-move {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-wave-move { animation: wave-move 16s linear infinite; }
        .animate-wave-move-slow { animation: wave-move 26s linear infinite reverse; }
        @keyframes shimmer {
          0% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 10s ease-in-out infinite; }
        .animate-shimmer-slow { animation: shimmer 18s ease-in-out infinite; }
      `}</style>
    </div>
  )
}

// Individual Event Gallery Component - Always Visible with HORIZONTAL effect
function EventGallery({ event, isActive, index }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % event.galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [event.galleryImages.length]);

  const FloatingLayers = ({ images, currentIndex }) => (
    <div className="relative h-[300px] flex items-center justify-center" style={{ perspective: '1200px' }}>
      <div className="relative w-full max-w-2xl">
        {images.map((img, imgIndex) => {
          const isActiveImg = imgIndex === currentIndex;
          const offset = (imgIndex - currentIndex) * 60; // Horizontal offset
          const rotateY = (imgIndex - currentIndex) * 8; // Horizontal rotation (Y-axis)
          const scale = 1 - Math.abs(imgIndex - currentIndex) * 0.1;
          const zIndex = images.length - Math.abs(imgIndex - currentIndex);
          const opacity = 1 - Math.abs(imgIndex - currentIndex) * 0.2;

          return (
            <div
              key={imgIndex}
              className="absolute left-1/2 top-1/2 w-3/4 transition-all duration-700 ease-out"
              style={{
                transform: `translate(calc(-50% + ${offset}px), -50%) rotateY(${rotateY}deg) scale(${scale})`,
                transformStyle: 'preserve-3d',
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
              <div
                className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${
                  isActive && isActiveImg ? 'ring-2 ring-cyan-400 shadow-cyan-500/20 scale-105' : 'ring-1 ring-gray-600/20'
                }`}
                style={{
                  boxShadow: `0 ${15 + imgIndex * 5}px ${30 + imgIndex * 5}px rgba(0, 0, 0, ${0.15 + imgIndex * 0.1})`
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={img} alt={`${event.title} - Image ${imgIndex + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>
                </div>
                
                {isActiveImg && (
                  <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-cyan-400 rounded-full shadow-lg animate-pulse"></div>
                )}
              </div>
            </div>
          );
        })}

        {/* Background Glow - Horizontal orientation */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-16 blur-xl rounded-full bg-cyan-500/10" />
      </div>
    </div>
  );

  return (
    <div 
      id={event.galleryId}
      className={`min-h-[70vh] flex items-center justify-center py-10 transition-all duration-500 border-b border-cyan-500/10 ${
        isActive ? 'opacity-100 scale-100 bg-cyan-500/5 rounded-xl' : 'opacity-90 scale-100'
      }`}
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className={`space-y-5 transition-all duration-700 ${
          isActive ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100'
        }`}>
          <div>
            <div className="text-cyan-400 text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
              <div className="w-3 h-px bg-cyan-400"></div>
              Event Gallery {index + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {event.title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Explore the visual journey of our {event.type.toLowerCase()}. This event brings together {event.participants}+ participants for {event.duration} of intensive learning and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="text-cyan-400 text-xs font-semibold">Event Type</div>
              <div className="text-white text-sm">{event.type}</div>
            </div>
            <div className="space-y-1">
              <div className="text-cyan-400 text-xs font-semibold">Duration</div>
              <div className="text-white text-sm">{event.duration}</div>
            </div>
            <div className="space-y-1">
              <div className="text-cyan-400 text-xs font-semibold">Participants</div>
              <div className="text-white text-sm">{event.participants}+ developers</div>
            </div>
            <div className="space-y-1">
              <div className="text-cyan-400 text-xs font-semibold">Level</div>
              <div className="text-white text-sm">{event.level}</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-cyan-400 text-xs font-semibold">Technologies Covered</div>
            <div className="flex flex-wrap gap-1">
              {event.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2 py-1 bg-cyan-500/10 text-cyan-300 text-xs rounded-full border border-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={`transition-all duration-700 ${
          isActive ? 'translate-x-0 opacity-100' : 'translate-x-0 opacity-100'
        }`}>
          <FloatingLayers 
            images={event.galleryImages} 
            currentIndex={currentImage} 
          />
          
          {/* Gallery Navigation Dots */}
          <div className="flex justify-center mt-5 space-x-2">
            {event.galleryImages.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setCurrentImage(dotIndex)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  dotIndex === currentImage 
                    ? 'bg-cyan-400 shadow-[0_0_6px_#00ffff] scale-110'
                    : 'bg-gray-600 hover:bg-cyan-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
