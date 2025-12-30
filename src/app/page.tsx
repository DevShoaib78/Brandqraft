import { Header } from "@/components/Header";
import { PageWrapper } from "@/components/PageWrapper";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Approach } from "@/components/sections/Approach";
import { WhyUs } from "@/components/sections/WhyUs";
import { Work } from "@/components/sections/Work";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <WhyUs />
        <Work />
        <CTA />
      </main>
      <Footer />
    </PageWrapper>
  );
}
