import { ArrowRight, Shield, Cpu, Sparkles } from 'lucide-react'

const categories = [
  {
    type: 'Blue Collar',
    emoji: '🔧',
    icon: Shield,
    risk: 'Low Risk',
    riskColor: 'text-green-600 dark:text-green-400',
    riskBg: 'bg-green-50 dark:bg-green-950/30',
    riskBorder: 'border-green-200 dark:border-green-800',
    cardBg: 'bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-gray-900',
    accentBar: 'from-green-400 to-green-500',
    jobs: ['Plumbers', 'Electricians', 'Carpenters', 'Mechanics', 'Welders'],
    insight: 'Physical dexterity jobs resist full automation — but AI tools will augment these roles significantly.',
    trend: 'Stable',
  },
  {
    type: 'White Collar',
    emoji: '💼',
    icon: Cpu,
    risk: 'High Risk',
    riskColor: 'text-red-600 dark:text-red-400',
    riskBg: 'bg-red-50 dark:bg-red-950/30',
    riskBorder: 'border-red-200 dark:border-red-800',
    cardBg: 'bg-gradient-to-b from-red-50 to-white dark:from-red-950/20 dark:to-gray-900',
    accentBar: 'from-red-400 to-red-500',
    jobs: ['Accountants', 'Data Entry', 'Junior Analysts', 'Copywriters', 'Customer Support'],
    insight: 'Routine cognitive tasks are being rapidly replaced by AI. These roles face the highest displacement risk.',
    trend: 'Declining',
  },
  {
    type: 'AI Collar',
    emoji: '🤖',
    icon: Sparkles,
    risk: 'High Growth',
    riskColor: 'text-brand-600 dark:text-brand-400',
    riskBg: 'bg-brand-50 dark:bg-brand-950/30',
    riskBorder: 'border-brand-200 dark:border-brand-800',
    cardBg: 'bg-gradient-to-b from-brand-50 to-white dark:from-brand-950/20 dark:to-gray-900',
    accentBar: 'from-brand-400 to-violet-500',
    jobs: ['AI Prompt Engineers', 'Automation Designers', 'AI Tool Builders', 'Human-AI Collaboration Leads', 'AI Ethics Officers'],
    insight: 'The fastest-growing job category in human history. AI-collar roles require the skills we teach at Synaps.',
    trend: 'Explosive',
    featured: true,
  },
]

export default function FutureWork() {
  return (
    <section id="future-work" className="section-spacing bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <Cpu className="w-3 h-3" />
            Future of Work
          </div>
          <h2 className="section-title mb-4">
            Three Futures.{' '}
            <span className="gradient-text">Only One Wins.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The global workforce is splitting into three tiers. The question is: which tier
            are you preparing your students for?
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div
              key={cat.type}
              className={`reveal glass-card overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                cat.featured ? 'ring-2 ring-brand-500 dark:ring-brand-400 shadow-brand-lg' : ''
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {cat.featured && (
                <div className="text-center py-2 bg-gradient-to-r from-brand-500 to-violet-500 text-white text-xs font-bold tracking-wider uppercase">
                  ✦ The Future is Here
                </div>
              )}

              {/* Accent bar */}
              <div className={`h-1.5 bg-gradient-to-r ${cat.accentBar}`} />

              <div className="p-6 md:p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-3xl">{cat.emoji}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{cat.type}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cat.riskBg} ${cat.riskColor} ${cat.riskBorder}`}>
                      {cat.risk}
                    </span>
                  </div>
                </div>

                {/* Jobs list */}
                <ul className="space-y-2 mb-5">
                  {cat.jobs.map((job) => (
                    <li key={job} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <ArrowRight className={`w-3.5 h-3.5 flex-shrink-0 ${cat.riskColor}`} />
                      {job}
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed italic">
                    {cat.insight}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trend:</span>
                    <span className={`text-xs font-bold ${cat.riskColor}`}>{cat.trend}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom insight */}
        <div className="mt-12 text-center reveal">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Source: World Economic Forum | McKinsey Global Institute | LinkedIn Economic Graph
          </p>
        </div>
      </div>
    </section>
  )
}
