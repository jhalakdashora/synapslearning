import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function PrivacyPolicy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container-custom">
          <div className="flex items-center gap-4 h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: March 11, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Introduction</h2>
              <p>
                Synaps Learning Pvt. Ltd. ("Synaps", "we", "our", or "us") is committed to protecting the privacy of our users.
                This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website
                or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Personal Information:</strong> Name, email address, phone number, school name, and designation when you fill out our contact or demo booking forms.</li>
                <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and other diagnostic data collected automatically.</li>
                <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience. See our Cookie Policy for details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>To respond to your inquiries and schedule demo sessions</li>
                <li>To provide, maintain, and improve our services</li>
                <li>To send you updates, promotional materials, and other relevant information (you can opt out anytime)</li>
                <li>To monitor and analyze usage and trends to improve user experience</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Sharing of Information</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our website and services (e.g., email delivery services).</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy,
                unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Access, correct, or delete your personal information</li>
                <li>Withdraw consent for data processing</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:learningsynaps@gmail.com" className="text-brand-600 dark:text-brand-400 hover:underline">learningsynaps@gmail.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Children's Privacy</h2>
              <p>
                Our AI literacy programs are designed for students of Class 6–9. We do not knowingly collect personal information
                directly from children. All data collection from minors is done through their schools or parents/guardians.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the
                updated policy on this page with a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="list-none pl-0 space-y-1 mt-3">
                <li>📧 Email: <a href="mailto:learningsynaps@gmail.com" className="text-brand-600 dark:text-brand-400 hover:underline">learningsynaps@gmail.com</a></li>
                <li>📞 Phone: <a href="tel:+917014447069" className="text-brand-600 dark:text-brand-400 hover:underline">+91 7014447069</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
