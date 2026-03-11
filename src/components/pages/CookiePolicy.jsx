import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function CookiePolicy() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Cookie Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: March 11, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They are widely used to make
                websites work more efficiently and to provide information to the site owners. Cookies help us understand
                how you interact with our website and allow us to improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. How We Use Cookies</h2>
              <p>Synaps Learning uses cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Essential Cookies:</strong> Required for the basic functionality of our website, such as remembering your theme preference (dark/light mode).</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. Types of Cookies We Use</h2>
              <div className="overflow-x-auto mt-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900 dark:text-white">Cookie Name</th>
                      <th className="text-left py-3 pr-4 font-semibold text-gray-900 dark:text-white">Purpose</th>
                      <th className="text-left py-3 font-semibold text-gray-900 dark:text-white">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="py-3 pr-4 font-mono text-sm">theme</td>
                      <td className="py-3 pr-4">Stores your dark/light mode preference</td>
                      <td className="py-3">Persistent</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Third-Party Cookies</h2>
              <p>
                We may use third-party services that set their own cookies. These include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>EmailJS:</strong> Used to process contact form submissions. EmailJS may use cookies for service functionality.</li>
                <li><strong>Google Fonts:</strong> Used to serve web fonts. Google may collect usage data through its font delivery service.</li>
              </ul>
              <p className="mt-3">
                We have no control over third-party cookies. Please refer to the respective third-party privacy policies for more information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Managing Cookies</h2>
              <p>
                You can manage or delete cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>View what cookies are stored and delete them individually</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific sites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
              <p className="mt-3">
                Please note that disabling cookies may affect the functionality of our website and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices.
                Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Contact Us</h2>
              <p>If you have any questions about our use of cookies, please contact us:</p>
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
