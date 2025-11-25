import type { NextPage } from "next";
import Head from "next/head";
import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Skills from "../components/skills";
import Works from "../components/works";
import TrustedBy from "../components/trustedby";
import ContactUs from "../components/contactus";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>KJR Labs - Web Development & App Development Done Right | Expert Digital Solutions</title>
        <meta name="title" content="KJR Labs - Web Development & App Development Done Right | Expert Digital Solutions" />
        <meta name="description" content="KJR Labs delivers cutting-edge web development and app development services. We help businesses ship better websites and apps faster, so you can focus on growing your business. Expert team, proven results." />
        <meta name="keywords" content="web development, app development, software development, mobile app development, website design, custom web applications, React development, Next.js development, digital solutions, KJR Labs" />
        <meta name="author" content="KJR Labs" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://kjrlabs.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kjrlabs.com/" />
        <meta property="og:title" content="KJR Labs - Web Development & App Development Done Right" />
        <meta property="og:description" content="We help businesses ship better websites and apps faster. Expert web development and app development services to accelerate your digital presence." />
        <meta property="og:image" content="https://kjrlabs.com/assets/letter-k.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="KJR Labs" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://kjrlabs.com/" />
        <meta name="twitter:title" content="KJR Labs - Web Development & App Development Done Right" />
        <meta name="twitter:description" content="We help businesses ship better websites and apps faster. Expert web development and app development services to accelerate your digital presence." />
        <meta name="twitter:image" content="https://kjrlabs.com/assets/letter-k.png" />
        <meta name="twitter:creator" content="@kjrlabs" />

        {/* Additional SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/letter-k.png" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KJR Labs",
              "url": "https://kjrlabs.com",
              "logo": "https://kjrlabs.com/assets/letter-k.png",
              "description": "Expert web development and app development services. We help businesses ship better websites and apps faster.",
              "sameAs": [
                "https://twitter.com/kjrlabs",
                "https://linkedin.com/company/kjrlabs",
                "https://github.com/kjrlabs"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contact@kjrlabs.com"
              }
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "KJR Labs",
              "url": "https://kjrlabs.com",
              "description": "Web development and app development done right",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://kjrlabs.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - ProfessionalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "KJR Labs",
              "image": "https://kjrlabs.com/assets/letter-k.png",
              "url": "https://kjrlabs.com",
              "telephone": "+1-XXX-XXX-XXXX",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 0,
                "longitude": 0
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "50"
              }
            })
          }}
        />
      </Head>

      <Masthead />
      <AboutUs />
      <Skills />
      {/* <Works /> */}
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
