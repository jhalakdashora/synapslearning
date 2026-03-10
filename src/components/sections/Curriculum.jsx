import { useState } from 'react'
import { BookOpen, Code2, Lightbulb, Shield, Cpu, MessageSquare, Image, Terminal, Wrench, ChevronRight } from 'lucide-react'

const classes = {
  '6-7': {
    label: 'Class 6–7',
    tag: 'Theory Foundation',
    tagColor: 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/30 border-brand-200 dark:border-brand-800',
    color: 'brand',
    topics: [
      { icon: Lightbulb, title: 'What is AI?', desc: 'Introduction to artificial intelligence and how machines learn' },
      { icon: BookOpen, title: 'History of AI', desc: 'From Alan Turing to ChatGPT — the journey of artificial intelligence' },
      { icon: Cpu, title: 'AI in Daily Life', desc: 'Spotify, Netflix, Google Maps — spotting AI around us' },
      { icon: Wrench, title: 'Data & Patterns', desc: 'How AI finds patterns in huge datasets to make decisions' },
      { icon: Shield, title: 'Robotics Concepts', desc: 'Introduction to robots, sensors, and automation fundamentals' },
      { icon: Shield, title: 'AI Ethics', desc: 'Privacy, bias, fairness — the responsible use of AI' },
    ],
  },
  '8-9': {
    label: 'Class 8–9',
    tag: 'Theory + Practical',
    tagColor: 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/30 border-violet-200 dark:border-violet-800',
    color: 'violet',
    topics: [
      { icon: Cpu, title: 'Machine Learning Basics', desc: 'Supervised vs unsupervised learning with real examples' },
      { icon: Code2, title: 'Neural Networks', desc: 'How the brain-inspired AI models learn and predict' },
      { icon: MessageSquare, title: 'NLP Basics', desc: 'Teaching computers to understand human language' },
      { icon: MessageSquare, title: 'Chatbot Creation', desc: 'Build your own AI chatbot using real tools' },
      { icon: Image, title: 'AI Image Tools', desc: 'Hands-on with Midjourney, DALL·E, and AI image generation' },
      { icon: Terminal, title: 'Python Basics', desc: 'Learn Python as your gateway to AI programming' },
      { icon: Wrench, title: 'Mini AI Project', desc: 'A capstone project to showcase AI skills and earn certification' },
    ],
  },
}

export default function Curriculum() {
  const [active, setActive] = useState('6-7')
  const cls = classes[active]

  return (
    <section id="curriculum" className="section-spacing bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="badge mb-4">
            <BookOpen className="w-3 h-3" />
            Curriculum
          </div>
          <h2 className="section-title mb-4">
            A Curriculum That{' '}
            <span className="gradient-text">Actually Matters</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Carefully designed by AI experts and educators for progressive, age-appropriate learning.
            No fluff — just skills that matter.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-center mb-10 reveal">
          <div className="inline-flex p-1.5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            {Object.entries(classes).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                id={`tab-class-${key.replace('-', '')}`}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === key
                    ? 'bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tag */}
        <div className="text-center mb-8 reveal">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${cls.tagColor}`}>
            {cls.tag}
          </span>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cls.topics.map((topic, i) => (
            <div
              key={topic.title}
              className="reveal glass-card p-5 group hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center ${
                active === '6-7'
                  ? 'bg-brand-100 dark:bg-brand-900/30'
                  : 'bg-violet-100 dark:bg-violet-900/30'
              } group-hover:scale-110 transition-transform duration-200`}>
                <topic.icon className={`w-5 h-5 ${
                  active === '6-7' ? 'text-brand-600 dark:text-brand-400' : 'text-violet-600 dark:text-violet-400'
                }`} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{topic.title}</h4>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{topic.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 reveal text-center">
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-50 dark:bg-brand-950/30 border border-brand-200 dark:border-brand-800 text-brand-700 dark:text-brand-300 text-sm">
            <ChevronRight className="w-4 h-4" />
            Curriculum can be customized to align with your school's timetable and academic schedule
          </div>
        </div>
      </div>
    </section>
  )
}
