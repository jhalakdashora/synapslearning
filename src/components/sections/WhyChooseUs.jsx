import { Trophy, Tag, Server, Megaphone, Star } from 'lucide-react'

const reasons = [
  {
    icon: Trophy,
    emoji: '🏆',
    title: 'Win the Admission Season',
    desc: 'Schools offering AI programs see 4x more admission inquiries during enrollment season. Be the school every parent talks about.',
    stat: '4x More Inquiries',
    statColor: 'text-brand-600 dark:text-brand-400',
  },
  {
    icon: Star,
    emoji: '⭐',
    title: 'Differentiated School Brand',
    desc: 'Become the AI-ready school in your city. Parents and students actively seek schools with cutting-edge programs.',
    stat: 'Top Parent Choice',
    statColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    icon: Server,
    emoji: '🖥️',
    title: 'Zero Infrastructure Cost',
    desc: 'No need for special labs, expensive hardware, or dedicated AI classrooms. We bring everything — trainers, content, devices.',
    stat: '₹0 Setup Cost',
    statColor: 'text-green-600 dark:text-green-400',
  },
  {
    icon: Megaphone,
    emoji: '📢',
    title: 'PR & Media Recognition',
    desc: 'We actively promote partner schools as AI-forward institutions. Get featured in education news, social media, and local press.',
    stat: 'Media Coverage',
    statColor: 'text-accent-600 dark:text-accent-400',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section-spacing bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <Trophy className="w-3 h-3" />
            Why Schools Choose Us
          </div>
          <h2 className="section-title mb-4">
            Your School Wins More{' '}
            <span className="gradient-text">Than Just Awards</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Partnering with Synaps isn't just an educational investment —
            it's a strategic advantage for your school's brand and growth.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal glass-card p-7 md:p-8 group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex gap-6"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-violet-50 dark:from-brand-950/40 dark:to-violet-950/40 flex items-center justify-center text-2xl border border-gray-100 dark:border-gray-800 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {r.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white text-base leading-tight">{r.title}</h3>
                  <span className={`text-xs font-bold whitespace-nowrap flex-shrink-0 px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 ${r.statColor}`}>
                    {r.stat}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 reveal">
          <div className="glass-card p-6 md:p-8 text-center bg-gradient-to-r from-brand-50 to-violet-50 dark:from-brand-950/20 dark:to-violet-950/20 border border-brand-200 dark:border-brand-800">
            <p className="text-brand-700 dark:text-brand-300 font-semibold text-base md:text-lg">
              🤝 Partner schools receive a co-branded{' '}
              <strong>"AI Ready School"</strong> badge,{' '}
              digital certificate, and marketing support
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
