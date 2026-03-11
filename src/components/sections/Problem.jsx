import { Lightbulb, Rocket, Zap } from 'lucide-react'

const insights = [
  {
    icon: Lightbulb,
    number: '01',
    title: 'Beyond Textbooks — Into the Future',
    body: 'Academic excellence is vital, but the world is evolving fast. Students who also learn AI, critical thinking, and digital skills will be better prepared for tomorrow\'s opportunities.',
    tag: 'Future Ready',
  },
  {
    icon: Rocket,
    number: '02',
    title: 'Schools Can Lead the Change',
    body: 'Forward-thinking schools are already embracing AI literacy as part of their curriculum. By introducing AI early, your school can become a pioneer in shaping future-ready learners.',
    tag: 'Leadership',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Adaptability Is the Real Superpower',
    body: 'In a world where technology shifts every 2–3 years, students who learn to experiment, adapt, and work with AI will have a powerful edge — no matter what career they choose.',
    tag: 'Future Skill',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section-spacing bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 mb-4">
            <Lightbulb className="w-3 h-3" />
            Why AI Matters
          </div>
          <h2 className="section-title mb-4">
            Preparing Students for{' '}
            <span className="gradient-text">Tomorrow's World</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The world is changing rapidly, and schools have the incredible opportunity
            to prepare students with the skills that will define their future.
          </p>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {insights.map((p, i) => (
            <div
              key={p.title}
              className="reveal glass-card group overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-brand-400 to-brand-600" />

              <div className="p-6 md:p-8">
                {/* Tag + Number row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-50 dark:bg-brand-950/30 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                    {p.tag}
                  </span>
                  <span className="text-4xl font-black text-gray-100 dark:text-gray-800 select-none">
                    {p.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="w-6 h-6 text-brand-500" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 reveal">
          <div className="glass-card p-6 md:p-8 border border-brand-200 dark:border-brand-900 bg-brand-50/50 dark:bg-brand-950/10 text-center">
            <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
              <span className="text-brand-600 font-bold">The opportunity is now</span> — equip your students with
              AI skills and set them up for a future full of possibilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
