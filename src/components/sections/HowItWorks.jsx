import { Phone, Settings, Rocket, Users, Award, ChevronRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Discovery Call',
    desc: 'We start with a 30-minute discovery call to understand your school\'s unique needs, timetable, and student profile.',
    duration: '30 min',
    color: 'from-brand-500 to-brand-600',
  },
  {
    number: '02',
    icon: Settings,
    title: 'Customize Plan',
    desc: 'Our team designs a customized delivery plan aligned perfectly with your school timetable and academic calendar.',
    duration: '1–2 days',
    color: 'from-violet-500 to-violet-600',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Kickoff & Deliver',
    desc: 'Expert AI trainers conduct engaging sessions at your school. Students start learning real AI skills from Day 1.',
    duration: 'Ongoing',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    number: '04',
    icon: Users,
    title: 'Teacher Workshops',
    desc: 'Weekend faculty upskilling sessions run in parallel, ensuring your teachers grow alongside the students.',
    duration: 'Weekends',
    color: 'from-accent-500 to-accent-600',
  },
  {
    number: '05',
    icon: Award,
    title: 'Certification',
    desc: 'Students present their AI mini-projects and receive certificates. Schools receive the coveted AI Ready School badge.',
    duration: 'End of term',
    color: 'from-green-500 to-green-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-spacing bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* BG decoration */}
      <div className="blob w-72 h-72 bg-brand-400 bottom-0 right-0" style={{ opacity: 0.05 }} />

      <div className="container-custom relative">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="badge mb-4">
            <ChevronRight className="w-3 h-3" />
            How It Works
          </div>
          <h2 className="section-title mb-4">
            Five Steps to Becoming an{' '}
            <span className="gradient-text">AI-Ready School</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A simple, structured onboarding process ensures a seamless experience
            from discovery to certification.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-200 via-violet-200 to-green-200 dark:from-brand-900 dark:via-violet-900 dark:to-green-900" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="reveal flex items-start gap-6 md:gap-8"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon bubble on the line */}
                <div className="flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white dark:bg-gray-950 border-2 border-brand-200 dark:border-brand-800 flex items-center justify-center text-xs font-bold text-brand-600 dark:text-brand-400">
                    {i + 1}
                  </span>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-5 md:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
