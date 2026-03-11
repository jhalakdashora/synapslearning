import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Terms of Service</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10">Last updated: March 11, 2026</p>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Synaps Learning website and services ("Services"), you agree to be bound by these
                Terms of Service ("Terms"). If you do not agree with these Terms, please do not use our Services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Description of Services</h2>
              <p>
                Synaps Learning Pvt. Ltd. provides AI literacy programs for schools, including student curriculum delivery,
                teacher upskilling workshops, and related educational services. Our Services are offered to schools,
                educators, and educational institutions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. User Responsibilities</h2>
              <p>By using our Services, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Provide accurate and complete information when filling out forms or registering</li>
                <li>Use the Services only for lawful purposes and in accordance with these Terms</li>
                <li>Not reproduce, distribute, or create derivative works from our content without prior written consent</li>
                <li>Not attempt to gain unauthorized access to our systems or networks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Intellectual Property</h2>
              <p>
                All content on the Synaps website — including text, graphics, logos, images, curriculum materials, and software —
                is the property of Synaps Learning Pvt. Ltd. or its licensors and is protected by intellectual property laws.
                You may not use, copy, or distribute any content without our prior written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Program Partnerships</h2>
              <p>
                Schools or institutions partnering with Synaps for AI programs are subject to separate partnership agreements.
                These Terms govern general website usage only. Specific program terms, pricing, and deliverables will be
                outlined in individual partnership contracts.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Disclaimer of Warranties</h2>
              <p>
                Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied.
                We do not guarantee that the Services will be uninterrupted, error-free, or free of harmful components.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Synaps Learning Pvt. Ltd. shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of or inability to use the Services,
                even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the content, privacy practices,
                or terms of any third-party sites. We encourage you to review the terms and policies of any linked websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising
                from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
                on our website. Your continued use of the Services after any changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">11. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
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
