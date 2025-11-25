import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';

const Privacy: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Privacy Policy - KJR Labs</title>
        <meta name="description" content="Privacy Policy for KJR Labs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-800 mb-8 inline-block">← Back to Home</a>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Information We Collect</h2>
            <p>
              When you contact us through our website, we collect information you provide such as your name, email address, 
              phone number, company name, and message content. This information is used solely to respond to your inquiry 
              and provide our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Communicate about projects and services</li>
              <li>Send project updates and important notifications</li>
              <li>Improve our services and website experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with 
              trusted service providers who assist us in operating our website and conducting our business, provided they 
              agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Cookies</h2>
            <p>
              Our website may use cookies to enhance user experience. You can choose to disable cookies through your 
              browser settings, though this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Your Rights</h2>
            <p>
              You have the right to access, update, or delete your personal information. To exercise these rights, 
              please contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated 
              revision date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:kjrlabs9@gmail.com" className="text-blue-600 hover:text-blue-800">
                kjrlabs9@gmail.com
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: November 25, 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
