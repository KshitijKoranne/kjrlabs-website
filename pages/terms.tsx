import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';

const Terms: NextPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Terms & Conditions - KJR Labs</title>
        <meta name="description" content="Terms and Conditions for KJR Labs services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <Link href="/">
          <a className="text-blue-600 hover:text-blue-800 mb-8 inline-block">← Back to Home</a>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
            <p>
              Welcome to KJR Labs. By accessing our website and using our services, you agree to be bound by these Terms and Conditions. 
              Please read them carefully before proceeding.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Services</h2>
            <p>
              KJR Labs provides web development, app development, and related digital services. All projects are subject to a separate 
              agreement and scope of work that will be provided before commencement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Intellectual Property</h2>
            <p>
              All content, designs, code, and materials on this website are the property of KJR Labs unless otherwise stated. 
              Upon full payment, clients receive ownership of the final deliverables as specified in the project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Payment Terms</h2>
            <p>
              Payment terms will be outlined in individual project agreements. Typically, we require a deposit before starting work 
              and final payment upon project completion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Limitation of Liability</h2>
            <p>
              KJR Labs shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. 
              Our liability is limited to the amount paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page. 
              Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Contact</h2>
            <p>
              If you have any questions about these Terms & Conditions, please contact us at{' '}
              <a href="mailto:kjrlabs9@gmail.com" className="text-blue-600 hover:text-blue-800">
                kjrlabs9@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;
