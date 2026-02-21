import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://brandqraft.co";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        "name": "BrandQraft",
        "url": siteUrl,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteUrl}/logo black.png`,
        },
        "description": "BrandQraft transforms innovative ideas into thriving brands. We specialize in branding, digital marketing, website development, and business scaling solutions for ambitious entrepreneurs.",
        "email": "info@brandqraft.co",
        "telephone": "+919536084444",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No:228, 6-3-252/2, Opp Taj Deccan Workafella, Banjara Hills",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "postalCode": "500082",
          "addressCountry": "IN",
        },
        "sameAs": [
          "https://www.linkedin.com/company/brandqraft",
          "https://twitter.com/brandqraft",
          "https://www.instagram.com/brandqraft",
        ],
        "areaServed": {
          "@type": "Place",
          "name": "Worldwide",
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "BrandQraft Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Branding" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Scaling" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        "name": "BrandQraft",
        "url": siteUrl,
        "publisher": { "@id": `${siteUrl}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${siteUrl}/projects/{search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        "url": siteUrl,
        "name": "BrandQraft | Branding, Digital Marketing & Business Scaling Agency",
        "description": "BrandQraft transforms innovative ideas into thriving brands. End-to-end business lifecycle solutions from ideation to sustainable growth.",
        "isPartOf": { "@id": `${siteUrl}/#website` },
        "about": { "@id": `${siteUrl}/#organization` },
        "inLanguage": "en-US",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageWrapper>
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Approach />
          <WhyUs />
          <Work />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </PageWrapper>
    </>
  );
}
