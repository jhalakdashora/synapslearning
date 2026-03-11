import { BookOpen, Users, GraduationCap, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: BookOpen,
    title: 'AI Curriculum for Students',
    subtitle: 'Classes 6–9',
    description: 'An engaging, age-appropriate AI curriculum that introduces students to real concepts — from machine learning to chatbots — through hands-on projects and interactive sessions.',
    points: ['Theory + Practical projects', 'Age-appropriate content', 'Gamified learning modules', 'Aligned with school curriculum'],
    color: 'from-brand-500 to-brand-600',
    lightBg: 'bg-brand-50 dark:bg-brand-950/20',
    borderColor: 'border-brand-200 dark:border-brand-800',
    iconBg: 'bg-brand-100 dark:bg-brand-900/40',
    iconColor: 'text-brand-600 dark:text-brand-400',
    badge: 'Core Program',
  },
  {
    icon: Users,
    title: 'Industry Expert Faculty',
    subtitle: 'Real AI Practitioners',
    description: 'Our trainers are not just educators — they are working AI professionals from top tech companies who bring real-world experience into the classroom.',
    points: ['Experienced industry experts', 'Active industry practitioners', 'Mentorship sessions', 'Live project guidance'],
    color: 'from-violet-500 to-violet-600',
    lightBg: 'bg-violet-50 dark:bg-violet-950/20',
    borderColor: 'border-violet-200 dark:border-violet-800',
    iconBg: 'bg-violet-100 dark:bg-violet-900/40',
    iconColor: 'text-violet-600 dark:text-violet-400',
    badge: 'Expert Led',
  },
  {
    icon: GraduationCap,
    title: 'Teacher AI Upskilling',
    subtitle: 'Weekend Training Program',
    description: 'We don\'t just train students — we empower teachers. Our weekend workshop series equips faculty with real AI tools they can use immediately to transform their teaching.',
    points: ['Weekend workshop sessions', 'AI productivity tools', 'Smart assessment methods', 'Ongoing support & community'],
    color: 'from-cyan-500 to-cyan-600',
    lightBg: 'bg-cyan-50 dark:bg-cyan-950/20',
    borderColor: 'border-cyan-200 dark:border-cyan-800',
    iconBg: 'bg-cyan-100 dark:bg-cyan-900/40',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    badge: 'For Educators',
  },
]

export default function Solution() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="solution" className="section-spacing bg-white dark:bg-gray-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <BookOpen className="w-3 h-3" />
            Our Solution
          </div>
          <h2 className="section-title mb-4">
            A Complete AI Program{' '}
            <span className="gradient-text">Built for Schools</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Synaps delivers an end-to-end AI education ecosystem — for students, teachers
            and school institutions alike.
          </p>
        </div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`reveal glass-card overflow-hidden group hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border ${sol.borderColor}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${sol.color}`} />

              <div className="p-6 md:p-7">
                {/* Badge */}
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-4 ${sol.lightBg} ${sol.iconColor} border ${sol.borderColor}`}>
                  {sol.badge}
                </span>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${sol.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <sol.icon className={`w-7 h-7 ${sol.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{sol.title}</h3>
                <p className={`text-sm font-medium ${sol.iconColor} mb-3`}>{sol.subtitle}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {sol.description}
                </p>

                {/* Feature points */}
                <ul className="space-y-2 mb-6">
                  {sol.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${sol.color} flex-shrink-0`} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo('#how-it-works')}
                  className={`flex items-center gap-1.5 text-sm font-semibold ${sol.iconColor} hover:gap-3 transition-all duration-200`}
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
