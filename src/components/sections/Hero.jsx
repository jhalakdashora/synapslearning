import { ArrowRight, Download, CheckCircle, Sparkles, Users, BookOpen } from 'lucide-react'

const highlights = [
  { icon: Users, label: 'Industry Expert Faculty' },
  { icon: BookOpen, label: 'Real AI Skills' },
  { icon: Sparkles, label: 'Teacher AI Upskilling' },
]

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0d1340 0%, #131759 30%, #1a2ae8 65%, #2e4df5 100%)',
      }}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient Blobs */}
      <div className="blob w-96 h-96 bg-violet-500 top-20 right-10 animate-pulse-slow" style={{ opacity: 0.12 }} />
      <div className="blob w-80 h-80 bg-cyan-400 bottom-20 left-10 animate-float" style={{ opacity: 0.1 }} />
      <div className="blob w-64 h-64 bg-brand-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ opacity: 0.08 }} />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Launch Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            India's Premier AI Literacy Program for K-12 Schools
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up">
            AI Literacy Program{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-accent-400 via-yellow-300 to-accent-400 bg-clip-text text-transparent">
                for Schools
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M3 9C50 3 150 2 297 9" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Empowering Students of <strong className="text-white">Class 6–9</strong> with Real AI Skills
            That Define Their Future — partnering with forward-thinking schools across India.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <button
              id="hero-book-demo"
              onClick={() => scrollTo('#cta')}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-base transition-all duration-200 shadow-glow-accent hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto justify-center"
            >
              Book a Free Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              id="hero-download-curriculum"
              onClick={() => scrollTo('#curriculum')}
              className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white font-semibold text-base transition-all duration-200 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              View Curriculum
            </button>
          </div>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/80">
                <CheckCircle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-gray-950 to-transparent" />
    </section>
  )
}
