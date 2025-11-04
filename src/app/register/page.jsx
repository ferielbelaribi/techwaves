'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  const departments = [
    "IT & Development",
    "Graphic Design", 
    "Marketing & Public Relations",
    "Content Creation & Events",
    "Organization & Logistics",
    "Photography & Video Editing"
  ]

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    const formData = new FormData(event.target)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      university: formData.get('university'),
      field: formData.get('field'),
      department: formData.get('department'),
      studyLevel: formData.get('studyLevel'),
      motivation: formData.get('motivation'),
      newsletter: formData.get('newsletter') === 'on'
    }

    try {
      // 1. Soumission Netlify Forms (automatique avec data-netlify="true")
      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'techwaves-registration',
          ...Object.fromEntries(
            Object.entries(data).map(([key, value]) => [key, String(value)])
          )
        }).toString()
      })

      // 2. Soumission Google Sheets via API Route
      const sheetsResponse = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await sheetsResponse.json()

      if (netlifyResponse.ok && sheetsResponse.ok) {
        setMessage('✅ Application submitted successfully! We will contact you within 48 hours.')
        setIsError(false)
        event.target.reset()
      } else {
        setMessage(`❌ ${result.error || 'Error while sending'}`)
        setIsError(true)
      }
    } catch (error) {
      setMessage('❌ Connection error. Please try again.')
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Header />
    <main>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden py-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" style={{animation: 'bounce 3s infinite'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Join Techwaves
          </h1>
          <p className="text-xl text-gray-300">Become a member of our innovative community</p>
        </div>

        <div className="rounded-2xl p-8 backdrop-blur-md bg-slate-900/70 shadow-2xl shadow-blue-500/10 border border-slate-600/50">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mx-auto mb-4">
              <div className="flex items-center justify-center mx-auto mb-4">
    {/* Remplace par ton logo sans fond */}
    <img src="/techwaveslogo.png" alt="Techwaves" className="h-30 w-auto" />
  </div>
            </div>
            <div className="inline-block border border-cyan-400/30 rounded-full px-6 py-2 mb-3">
              <p className="text-cyan-400 text-sm font-medium tracking-wide">Membership Application</p>
            </div>
            <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Join our innovative tech community
            </p>
          </div>

          {message && (
            <div className={`p-4 rounded-xl mb-6 backdrop-blur-sm border ${
              isError 
                ? 'bg-red-500/20 border-red-400/50 text-red-300' 
                : 'bg-green-500/20 border-green-400/50 text-green-300'
            }`}>
              <p className="text-center font-medium">{message}</p>
            </div>
          )}
          
          <form 
            name="techwaves-registration"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6" 
            onSubmit={handleSubmit}
          >
            {/* Netlify Forms requirements */}
            <input type="hidden" name="form-name" value="techwaves-registration" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-3">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50"
                  placeholder="Your first name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-3">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50"
                  placeholder="Your last name"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50"
                placeholder="+213 XX XX XX XX"
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-semibold text-gray-300 mb-3">
                University
              </label>
              <input
                id="university"
                name="university"
                type="text"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50"
                placeholder="Your university"
                
              />
            </div>

            <div>
              <label htmlFor="field" className="block text-sm font-semibold text-gray-300 mb-3">
                Field of Study *
              </label>
              <input
                id="field"
                name="field"
                type="text"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50"
                placeholder="Your field of study"
                required
              />
            </div>
            
            <div>
              <label htmlFor="department" className="block text-sm font-semibold text-gray-300 mb-3">
                Preferred Department *
              </label>
              <select 
                id="department"
                name="department"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white transition-all duration-300 hover:border-cyan-400/50 cursor-pointer"
                required
              >
                <option value="">Choose a department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="studyLevel" className="block text-sm font-semibold text-gray-300 mb-3">
                Study Level
              </label>
              <select 
                id="studyLevel"
                name="studyLevel"
                className="w-full px-4 py-3 bg-slate-900 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white transition-all duration-300 hover:border-cyan-400/50 cursor-pointer"
              >
                <option value="">Choose your level</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="5th">5th Year</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="motivation" className="block text-sm font-semibold text-gray-300 mb-3">
                Motivation *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                rows="4"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white placeholder-slate-400 transition-all duration-300 backdrop-blur-sm hover:border-cyan-400/50 resize-none"
                placeholder="Why do you want to join Techwaves ENSB? What are your skills and passions?"
                required
              ></textarea>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-slate-800/30 rounded-xl border border-slate-600/50 backdrop-blur-sm">
              <input
                id="newsletter"
                name="newsletter"
                type="checkbox"
                className="w-5 h-5 rounded focus:ring-cyan-400 cursor-pointer transform hover:scale-110 transition-transform"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-300 cursor-pointer">
                I want to receive newsletters and club updates
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-6 rounded-xl hover:scale-105 transition-all duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group relative overflow-hidden shadow-lg shadow-cyan-500/50"
            >
              <span className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </span>
            </button>

            <p className="text-center text-gray-400 text-sm bg-slate-800/30 rounded-lg py-3 border border-slate-600/30">
              We will contact you within 48 hours for an interview
            </p>
          </form>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: "🚀",
              title: "Simple Process",
              description: "Quick registration followed by a friendly interview"
            },
            {
              icon: "👥",
              title: "Active Community",
              description: "Join 50+ passionate tech members"
            },
            {
              icon: "💼",
              title: "Opportunities",
              description: "Access to real projects and training"
            }
          ].map((item, index) => (
            <div key={index} className="rounded-xl p-6 text-center backdrop-blur-md bg-slate-900/60 border border-slate-600 hover:border-cyan-400 transition-all duration-300 group hover:transform hover:-translate-y-1">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
              <h4 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
      </main>
  )
}
