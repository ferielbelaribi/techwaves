// components/Projects.jsx

"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Play, ExternalLink } from 'lucide-react';

function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showB2BVideo, setShowB2BVideo] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 px-4 sm:px-8"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Our Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Innovative solutions built by our community members
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Project 1: GreenCycle */}
          <div 
            className={`group relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-500 overflow-hidden">
              
              {/* Video Thumbnail */}
              <a 
                href="https://www.youtube.com/watch?v=v98DHIO7b7g" 
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 block overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20"
              >
                <img 
                  src="https://img.youtube.com/vi/v98DHIO7b7g/hqdefault.jpg"
                  alt="GreenCycle Project Demo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-500/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-green-300 text-xs font-semibold">
                    Sustainability
                  </span>
                </div>
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  GreenCycle
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  An innovative recycling platform connecting eco-conscious individuals with recycling centers, 
                  making waste management efficient and rewarding through smart technology.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-300 text-xs">Smart Tracking</span>
                  <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-300 text-xs">Rewards System</span>
                  <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-300 text-xs">Impact Analytics</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href="YOUR_YOUTUBE_LINK_HERE" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 border border-green-400/30 text-green-300 text-sm transition-all duration-300 group/btn"
                  >
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Watch Demo
                  </a>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-slate-400 hover:text-green-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: B2B Secure */}
          <div 
            className={`group relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            
            <div className="relative h-full backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 overflow-hidden">
              
              {/* Video Thumbnail */}
              <div 
                className="relative h-64 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 overflow-hidden cursor-pointer"
                onClick={() => setShowB2BVideo(true)}
              >
                {/* Thumbnail Image - Add your thumbnail to public folder as b2b-thumbnail.jpg */}
                <img
                  src="/b2b-thumbnail.png"
                  alt="B2B Secure Demo"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-blue-500/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300 text-xs font-semibold">
                    Security
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  B2B Secure
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  Enterprise-grade document security solution providing end-to-end encryption, 
                  secure sharing, and advanced access controls for business-critical documents.
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs">End-to-End Encryption</span>
                  <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs">Access Control</span>
                  <span className="px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs">Audit Trails</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowB2BVideo(true)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 text-blue-300 text-sm transition-all duration-300 group/btn"
                  >
                    <Play className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    Watch Demo
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-slate-400 hover:text-blue-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.5s' }}
        >
          <p className="text-slate-400 mb-6">Want to showcase your project?</p>
          <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
            <span className="relative flex items-center gap-2">
              Submit Your Project
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>

      {/* Video Modal for B2B */}
      {showB2BVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowB2BVideo(false)}
        >
          <div 
            className="relative max-w-5xl w-full animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowB2BVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors text-lg font-bold"
              aria-label="Close video"
            >
              ✕ Close
            </button>
            <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl">
              <video
                className="w-full"
                controls
                autoPlay
                playsInline
                controlsList="nodownload"
              >
                <source src="/b2b.mp4" type="video/mp4" />
                <source src="/b2b.mov" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;