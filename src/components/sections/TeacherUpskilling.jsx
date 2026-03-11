import { GraduationCap, Calendar, BarChart3, Brain, Sparkles, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Lesson Planning Tools',
    desc: 'Use AI to generate high-quality lesson plans in minutes, personalized to your subject and student level.',
  },
  {
    icon: BarChart3,
    title: 'Smart Assessments',
    desc: 'Automate quiz generation, grading, and progress tracking — saving hours of repetitive work.',
  },
  {
    icon: Sparkles,
    title: 'AI Productivity Tools',
    desc: 'Master tools like ChatGPT, Gemini, and Notion AI to boost your daily teaching efficiency.',
  },
  {
    icon: CheckCircle,
    title: 'Responsible AI for Education',
    desc: 'Learn to navigate AI ethics, bias, and safe use in the educational context.',
  },
]

const tools = [
  { name: 'ChatGPT', bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', emoji: '🤖' },
  { name: 'Gemini', bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', emoji: '✨' },
  { name: 'Canva AI', bg: 'bg-purple-100 dark:bg-purple-900/30', text: 'text-purple-700 dark:text-purple-300', emoji: '🎨' },
  { name: 'Notion AI', bg: 'bg-gray-100 dark:bg-gray-800', text: 'text-gray-700 dark:text-gray-300', emoji: '📝' },
]

export default function TeacherUpskilling() {
  return (
    <section id="teacher-upskilling" className="section-spacing bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob w-96 h-96 bg-violet-400 -top-20 -right-20" style={{ opacity: 0.06 }} />
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="reveal-left">
            <div className="badge mb-5">
              <GraduationCap className="w-3 h-3" />
              Teacher Program
            </div>
            <h2 className="section-title mb-5">
              Empowering Teachers with{' '}
              <span className="gradient-text">AI Superpowers</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
              A teacher who understands AI creates a generation that masters it.
              Our weekend upskilling workshops are free for all partner schools.
            </p>

            {/* Schedule badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800 mb-8 w-fit">
              <Calendar className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <div>
                <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">Weekend Workshops</p>
                <p className="text-xs text-brand-600/70 dark:text-brand-400/70">Saturday & Sunday | 3 hours per session</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{f.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tools showcase */}
          <div className="reveal-right">
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100/50 dark:from-brand-900/20 to-transparent rounded-bl-full" />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                AI Tools You'll Master
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Hands-on training with industry-leading AI productivity tools
              </p>

              {/* Tool chips */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {tools.map((tool) => (
                  <div key={tool.name} className={`flex items-center gap-3 p-4 rounded-xl ${tool.bg} border border-transparent hover:scale-105 transition-transform duration-200 cursor-default`}>
                    <span className="text-2xl">{tool.emoji}</span>
                    <span className={`font-semibold text-sm ${tool.text}`}>{tool.name}</span>
                  </div>
                ))}
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
