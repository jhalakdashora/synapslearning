import { AlertTriangle, GraduationCap, Zap } from 'lucide-react'

const problems = [
  {
    icon: GraduationCap,
    number: '01',
    title: 'Marks Are Not Future Readiness',
    body: 'A child scoring 95% may still be completely unprepared for an AI-driven world. Academic excellence alone no longer guarantees career success in the coming decade.',
    tag: 'Academic Illusion',
  },
  {
    icon: AlertTriangle,
    number: '02',
    title: 'Schools Charge Fees But Teach Nothing Future Relevant',
    body: 'Many schools still ignore AI, automation, and digital skills entirely. Parents pay lakhs in tuition while their children learn skills that will be obsolete by graduation.',
    tag: 'Broken System',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Adaptability Is the Real Skill',
    body: 'In a world where technology shifts every 2-3 years, students must learn to experiment, pivot, and adapt. The ability to work with AI is not optional — it\'s foundational.',
    tag: 'Future Skill',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section-spacing bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 mb-4">
            <AlertTriangle className="w-3 h-3" />
            The Hard Truth
          </div>
          <h2 className="section-title mb-4">
            The Reality No School{' '}
            <span className="text-red-500">Tells You</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The education system was designed for the industrial age. But your child will live and work
            in the age of artificial intelligence.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="reveal glass-card group overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-red-400 to-red-600" />

              <div className="p-6 md:p-8">
                {/* Tag + Number row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800">
                    {p.tag}
                  </span>
                  <span className="text-4xl font-black text-gray-100 dark:text-gray-800 select-none">
                    {p.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <p.icon className="w-6 h-6 text-red-500" />
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
          <div className="glass-card p-6 md:p-8 border border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/10 text-center">
            <p className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200">
              <span className="text-red-500 font-bold">The question isn't IF</span> AI will change your child's career —
              it's whether your school is preparing them for it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
