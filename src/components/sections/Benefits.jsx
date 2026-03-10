import { CheckCircle, BookOpen, Users, Briefcase } from 'lucide-react'

const benefitGroups = [
  {
    audience: 'Students',
    emoji: '🎓',
    icon: BookOpen,
    color: 'from-brand-500 to-brand-600',
    cardBg: 'bg-brand-50 dark:bg-brand-950/20',
    borderColor: 'border-brand-200 dark:border-brand-800',
    tagColor: 'text-brand-600 dark:text-brand-400',
    benefits: [
      'Age-appropriate AI curriculum',
      'Hands-on AI mini-projects',
      'Industry-recognized certificates',
      'Progress tracking & reports',
    ],
  },
  {
    audience: 'Teachers',
    emoji: '👩‍🏫',
    icon: Users,
    color: 'from-violet-500 to-violet-600',
    cardBg: 'bg-violet-50 dark:bg-violet-950/20',
    borderColor: 'border-violet-200 dark:border-violet-800',
    tagColor: 'text-violet-600 dark:text-violet-400',
    benefits: [
      'AI productivity workshops',
      'Smart assessment tools',
      'AI lesson planning support',
      'Educator AI certificate',
    ],
  },
  {
    audience: 'Schools',
    emoji: '🏫',
    icon: Briefcase,
    color: 'from-accent-500 to-accent-600',
    cardBg: 'bg-accent-50 dark:bg-accent-950/20',
    borderColor: 'border-accent-200 dark:border-accent-800',
    tagColor: 'text-accent-600 dark:text-accent-400',
    benefits: [
      '"AI Ready School" badge',
      'Admission marketing advantage',
      'Zero infrastructure investment',
      'Co-branded PR & media support',
    ],
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-spacing bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <CheckCircle className="w-3 h-3" />
            What You Get
          </div>
          <h2 className="section-title mb-4">
            Everything Your School Needs{' '}
            <span className="gradient-text">to Lead the AI Era</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A complete package for students, teachers, and your institution —
            designed for maximum impact with zero friction.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefitGroups.map((group, i) => (
            <div
              key={group.audience}
              className={`reveal glass-card overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border ${group.borderColor}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top gradient */}
              <div className={`h-1.5 bg-gradient-to-r ${group.color}`} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl">{group.emoji}</div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-0.5">
                      For
                    </p>
                    <h3 className={`text-xl font-bold ${group.tagColor}`}>{group.audience}</h3>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-3">
                  {group.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${group.color} flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
