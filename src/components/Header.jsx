'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import techwaveswhite from '../assets/techwaveslogowhite.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'History', href: '/history' },
    { name: 'Our team', href: '/team' },
    { name: 'Events', href: '/events' },
  ]

  return (
    <>
      {/* Header Principal - Floating Container */}
      <header className="fixed top-0 w-full z-50 pt-6 px-6">
        <div className={`
          container mx-auto max-w-6xl
          bg-black/40 backdrop-blur-2xl
          border border-white/10
          rounded-full
          transition-all duration-500
          ${isScrolled 
            ? 'py-2 shadow-2xl shadow-black/20' 
            : 'py-2.5 shadow-xl shadow-black/10'
          }
        `}>
          <div className="px-6 flex justify-between items-center">
            
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center group relative z-10"
            >
              <Image 
                src={techwaveswhite} 
                alt="Techwaves Logo" 
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation Desktop - Centrée */}
            <nav className="hidden xl:flex items-center space-x-1 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
                    ${pathname === item.href 
                      ? 'text-white bg-white/10' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Desktop - Register avec effet neon */}
            <div className="hidden lg:flex items-center">
              <Link 
                href="/register" 
                className="
                  relative px-6 py-2.5 rounded-full text-sm font-semibold text-white
                  bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600
                  hover:from-blue-400 hover:via-cyan-300 hover:to-blue-500
                  transition-all duration-300
                  shadow-lg shadow-blue-500/40
                  hover:shadow-blue-400/60
                  hover:scale-105
                  border border-cyan-300/30
                  neon-glow
                "
              >
                Join Now
                {/* Effet de lueur supplémentaire */}
                <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md -z-10 animate-pulse"></div>
              </Link>
            </div>

            {/* Menu Mobile Button */}
            <button
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className={`
                w-5 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}
              `}></div>
              <div className={`
                w-5 h-0.5 bg-white rounded-full transition-all duration-300 my-1.5
                ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
              `}></div>
              <div className={`
                w-5 h-0.5 bg-white rounded-full transition-all duration-300
                ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}
              `}></div>
            </button>
          </div>

          {/* Menu Mobile */}
          <div className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${isMenuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}>
            <div className="px-6 pb-4 border-t border-white/5 pt-4">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      ${pathname === item.href 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* CTA Mobile avec le même effet neon */}
                <Link 
                  href="/register" 
                  className="
                    mt-4 px-4 py-3 rounded-xl text-sm font-semibold text-white text-center
                    bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600
                    hover:from-blue-400 hover:via-cyan-300 hover:to-blue-500
                    transition-all duration-300
                    shadow-lg shadow-blue-500/40
                    border border-cyan-300/30
                    relative overflow-hidden
                  "
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                  <div className="absolute inset-0 bg-cyan-400/20 blur-sm -z-10"></div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
