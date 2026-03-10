import { TrendingUp, Quote, Star } from 'lucide-react'

const stats = [
  {
    value: '72%',
    label: 'of parents prefer schools teaching AI',
    icon: '👨‍👩‍👧',
    color: 'text-brand-600 dark:text-brand-400',
    bg: 'bg-brand-50 dark:bg-brand-950/30',
    border: 'border-brand-200 dark:border-brand-800',
  },
  {
    value: '4x',
    label: 'more admission inquiries for AI-ready schools',
    icon: '📈',
    color: 'text-accent-600 dark:text-accent-400',
    bg: 'bg-accent-50 dark:bg-accent-950/30',
    border: 'border-accent-200 dark:border-accent-800',
  },
  {
    value: '89%',
    label: 'of students report increased confidence in technology',
    icon: '🚀',
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-50 dark:bg-green-950/30',
    border: 'border-green-200 dark:border-green-800',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="section-spacing bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorations */}
      <div className="blob w-80 h-80 bg-violet-400 top-10 -left-20" style={{ opacity: 0.07 }} />
      <div className="blob w-64 h-64 bg-brand-400 bottom-10 -right-10" style={{ opacity: 0.07 }} />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <TrendingUp className="w-3 h-3" />
            Real Impact
          </div>
          <h2 className="section-title mb-4">
            Numbers That{' '}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Schools that partner with Synaps see measurable outcomes — from student confidence
            to admissions growth.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal glass-card p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border ${s.border} ${s.bg}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className={`text-5xl font-black mb-2 ${s.color}`}>{s.value}</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="reveal max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-10 relative overflow-hidden">
            {/* Decorative quote background */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-brand-100 dark:text-brand-900" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                ))}
              </div>

              <blockquote className="text-gray-800 dark:text-gray-200 text-lg md:text-xl font-medium leading-relaxed mb-6">
                "Since introducing the Synaps AI program, our school has seen a remarkable 40% increase in
                admission inquiries this year. Parents are specifically asking about the AI curriculum.
                Our teachers feel more confident than ever, and the students absolutely love the sessions.
                It's been a complete transformation."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-white font-bold text-lg shadow-brand">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Dr. Rekha Sharma</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Principal, Sunrise International School, Jaipur</p>
                </div>
                <div className="ml-auto hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400">Partner School</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
