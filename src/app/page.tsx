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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BrandQraft",
    "url": "https://brandqraft.co",
    "logo": "https://brandqraft.co/logo black.png",
    "description": "BrandQraft transforms innovative ideas into thriving brands. We specialize in branding, digital marketing, website development, and business scaling solutions for ambitious entrepreneurs.",
    "email": "info@brandqraft.co",
    "telephone": "+919536084444",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/brandqraft",
      "https://twitter.com/brandqraft",
      "https://www.instagram.com/brandqraft"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://brandqraft.co/#services?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "serviceType": [
      "Branding",
      "Digital Marketing",
      "Website Development",
      "Business Scaling"
    ]
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
