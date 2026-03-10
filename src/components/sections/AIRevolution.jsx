import { useEffect, useRef, useState } from 'react'
import { TrendingUp, Briefcase, Brain, Clock } from 'lucide-react'

const stats = [
  {
    icon: Briefcase,
    value: '85%',
    suffix: '',
    label: 'of jobs in 2030 don\'t exist yet',
    description: 'The world is changing faster than education systems can adapt',
    color: 'from-brand-500 to-brand-600',
    bgLight: 'bg-brand-50',
    bgDark: 'dark:bg-brand-950/30',
    border: 'border-brand-200 dark:border-brand-800',
    textColor: 'text-brand-600 dark:text-brand-400',
  },
  {
    icon: TrendingUp,
    value: '97M',
    suffix: '+',
    label: 'new AI jobs emerging by 2026',
    description: 'The AI economy is the biggest opportunity of our generation',
    color: 'from-violet-500 to-violet-600',
    bgLight: 'bg-violet-50',
    bgDark: 'dark:bg-violet-950/30',
    border: 'border-violet-200 dark:border-violet-800',
    textColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Brain,
    value: '3x',
    suffix: '',
    label: 'higher earning potential for AI-literate professionals',
    description: 'AI skills are the most valuable differentiator in today\'s job market',
    color: 'from-cyan-500 to-cyan-600',
    bgLight: 'bg-cyan-50',
    bgDark: 'dark:bg-cyan-950/30',
    border: 'border-cyan-200 dark:border-cyan-800',
    textColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    icon: Clock,
    value: '12',
    suffix: '',
    label: 'is the ideal age to start learning AI',
    description: 'Early AI exposure builds foundational thinking that lasts a lifetime',
    color: 'from-accent-500 to-accent-600',
    bgLight: 'bg-accent-50',
    bgDark: 'dark:bg-accent-950/30',
    border: 'border-accent-200 dark:border-accent-800',
    textColor: 'text-accent-600 dark:text-accent-400',
  },
]

function CountUp({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const numTarget = parseFloat(target.replace(/[^0-9.]/g, ''))
    const isM = target.includes('M')
    const isX = target.includes('x') || target.includes('%')
    const start = Date.now()

    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * numTarget * 10) / 10
      setCount(current)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target, duration])

  const display = target.includes('M')
    ? `${Math.round(count)}M`
    : target.includes('%')
    ? `${Math.round(count)}%`
    : target.includes('x')
    ? `${count % 1 === 0 ? count : count.toFixed(1)}x`
    : target

  return <span ref={ref}>{display}{suffix}</span>
}

export default function AIRevolution() {
  return (
    <section id="ai-revolution" className="section-spacing bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <TrendingUp className="w-3 h-3" />
            The AI Revolution
          </div>
          <h2 className="section-title mb-4">
            The World Has Already Changed.{' '}
            <span className="gradient-text">Has Your School?</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The data is clear — AI is transforming every industry. Schools that prepare students now
            will produce tomorrow's leaders.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal glass-card p-6 md:p-8 text-center hover:-translate-y-2 hover:shadow-brand transition-all duration-300 border ${stat.border}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.textColor}`}>
                <CountUp target={stat.value} />
              </div>
              <p className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2 leading-snug">
                {stat.label}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
