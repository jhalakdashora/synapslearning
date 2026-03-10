import { useState, useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X, Brain } from 'lucide-react'

const navLinks = [
  { label: 'Why AI', href: '#ai-revolution' },
  { label: 'Program', href: '#solution' },
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'For Schools', href: '#why-choose-us' },
  { label: 'How It Works', href: '#how-it-works' },
]

export default function Navbar({ isDark, setIsDark }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-md border-b border-gray-200/50 dark:border-gray-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shadow-brand group-hover:shadow-brand-lg transition-all duration-300 group-hover:scale-105">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Synaps
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase transition-colors duration-300 ${isScrolled ? 'text-brand-500' : 'text-brand-200'}`}>
                AI for Schools
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`nav-link ${isScrolled ? '' : '!text-white/80 hover:!text-white after:!bg-white'}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              id="theme-toggle"
              aria-label="Toggle dark mode"
              className={`p-2 rounded-xl transition-all duration-200 hover:scale-110 ${
                isScrolled
                  ? 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('#cta')}
              className="hidden md:flex btn-primary"
              id="nav-book-demo"
            >
              Book a Demo
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileRef}
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800`}
      >
        <div className="container-custom py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-brand-50 dark:hover:bg-brand-950/40 hover:text-brand-600 dark:hover:text-brand-400 font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#cta')}
            className="btn-primary mt-2 w-full justify-center"
            id="mobile-book-demo"
          >
            Book a Demo
          </button>
        </div>
      </div>
    </header>
  )
}
