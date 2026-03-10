import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowRight, Mail, Phone, Send, CheckCircle, Sparkles, AlertCircle } from 'lucide-react'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function CTA() {
  const [formData, setFormData] = useState({ name: '', school: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:  formData.name, 
          time:     formData.school,
          email:   formData.email,
          message:      formData.phone,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Please try again or email us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="cta" className="section-spacing relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0d1340 0%, #131759 40%, #1a2ae8 80%, #2e4df5 100%)' }} />
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Blobs */}
      <div className="blob w-80 h-80 bg-violet-500 top-10 right-20" style={{ opacity: 0.15 }} />
      <div className="blob w-64 h-64 bg-accent-400 bottom-10 left-20" style={{ opacity: 0.1 }} />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
              Join 50+ Schools Already Transforming Education
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              The Future Is AI.
              <br />
              <span className="bg-gradient-to-r from-accent-400 to-yellow-300 bg-clip-text text-transparent">
                Your School Can Lead It.
              </span>
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Book a free discovery call today. No commitments, no pressure —
              just a conversation about your school's future.
            </p>
          </div>

          {/* Form + Contact layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Form */}
            <div className="lg:col-span-3 reveal">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mb-2">
                      <CheckCircle className="w-9 h-9 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">We'll be in touch!</h3>
                    <p className="text-white/70 text-sm">
                      Thank you for your interest. Our team will contact you within 24 hours to schedule the discovery call.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-white font-bold text-lg mb-1">Book Your Free Demo</h3>
                    <p className="text-white/60 text-sm mb-5">Fill the form and we'll call you within 24 hours</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/70 text-xs font-medium mb-1.5" htmlFor="contact-name">Your Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Dr. Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/70 text-xs font-medium mb-1.5" htmlFor="contact-school">School Name</label>
                        <input
                          id="contact-school"
                          name="school"
                          type="text"
                          required
                          value={formData.school}
                          onChange={handleChange}
                          placeholder="Delhi Public School"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/70 text-xs font-medium mb-1.5" htmlFor="contact-email">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="principal@school.edu.in"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-white/70 text-xs font-medium mb-1.5" htmlFor="contact-phone">Phone Number</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-400 focus:ring-1 focus:ring-brand-400 transition-colors"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center gap-2 text-red-300 text-sm bg-red-500/10 border border-red-400/30 rounded-xl px-4 py-3">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      id="cta-submit-form"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 disabled:opacity-70 text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5 shadow-glow-accent mt-2"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Partner With Us
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Contact info + Trust */}
            <div className="lg:col-span-2 reveal flex flex-col gap-6">
              {/* Contact card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
                <h4 className="text-white font-semibold mb-4">Or reach us directly</h4>
                <div className="space-y-3">
                  <a href="mailto:learningsynaps@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="text-sm">learningsynaps@gmail.com</span>
                  </a>
                  <a href="tel:+917877377184" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">+91 7877377184</span>
                  </a>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 space-y-4">
                {[
                  { emoji: '✅', text: 'No commitment required' },
                  { emoji: '⚡', text: 'Response within 24 hours' },
                  { emoji: '🎯', text: 'Customized for your school' },
                  { emoji: '🆓', text: 'First consultation is free' },
                ].map(({ emoji, text }) => (
                  <div key={text} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="text-lg">{emoji}</span>
                    <span>{text}</span>
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
