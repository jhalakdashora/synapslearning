import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import AIRevolution from './components/sections/AIRevolution'
import Problem from './components/sections/Problem'
import FutureWork from './components/sections/FutureWork'
import Solution from './components/sections/Solution'
import Curriculum from './components/sections/Curriculum'
import TeacherUpskilling from './components/sections/TeacherUpskilling'
import WhyChooseUs from './components/sections/WhyChooseUs'
import HowItWorks from './components/sections/HowItWorks'
import Benefits from './components/sections/Benefits'
import Impact from './components/sections/Impact'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import TermsOfService from './components/pages/TermsOfService'
import CookiePolicy from './components/pages/CookiePolicy'
import { useScrollReveal } from './hooks/useScrollReveal'

function HomePage({ isDark, setIsDark }) {
  useScrollReveal()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <main>
        <Hero />
        <AIRevolution />
        <Problem />
        <FutureWork />
        <Solution />
        <Curriculum />
        <TeacherUpskilling />
        <WhyChooseUs />
        <HowItWorks />
        <Benefits />
        <Impact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
    return false
  })

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className={isDark ? 'dark' : ''}>
      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </div>
  )
}

export default App
