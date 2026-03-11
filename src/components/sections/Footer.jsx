import { Brain, Mail, Phone, ArrowUp, Linkedin, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Program',
    links: [
      { label: 'AI Curriculum', href: '#curriculum' },
      { label: 'Teacher Upskilling', href: '#teacher-upskilling' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Benefits', href: '#benefits' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Synaps', href: '#solution' },
      { label: 'Why Choose Us', href: '#why-choose-us' },
      { label: 'Impact & Results', href: '#impact' },
      { label: 'Partner With Us', href: '#cta' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
      { label: 'Terms of Service', href: '/terms-of-service', isRoute: true },
      { label: 'Cookie Policy', href: '/cookie-policy', isRoute: true },
    ],
  },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href === '#') return
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shadow-brand">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-xl">Synaps</div>
                <div className="text-brand-400 text-[10px] font-semibold uppercase tracking-widest">AI for Schools</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              India's premier AI literacy program for K-12 schools. We're on a mission to
              ensure every student is prepared for an AI-powered future.
            </p>

            {/* Contact */}
            <div className="space-y-3 mb-6">
              <a href="mailto:learningsynaps@gmail.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-400 transition-colors group">
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:text-brand-400" />
                learningsynaps@gmail.com
              </a>
              <a href="tel:+917014447069" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-brand-400 transition-colors group">
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:text-brand-400" />
                +91 7014447069
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Twitter, label: 'Twitter / X', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-sm text-gray-400 hover:text-brand-400 transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Synaps Learning Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-600">
              Made with ❤️ in India | Shaping AI-ready schools
            </p>
            <button
              onClick={scrollTop}
              id="scroll-to-top"
              className="w-8 h-8 rounded-xl bg-gray-800 hover:bg-brand-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
