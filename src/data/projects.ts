// === Case Study Story Types ===

export interface StoryHook {
  text: string[];
  details?: { label: string; value: string }[];
}

export interface ChapterLogo {
  src: string;
  narrative: string[];
}

export interface BrandColor {
  name: string;
  hex: string;
}

export interface BrandPillar {
  title: string;
  description: string;
}

export interface ChapterHighlight {
  title: string;
  description: string;
}

export interface ChapterStat {
  value: string;
  label: string;
}

export interface ProjectChapter {
  number: string;
  label: string;
  title: string;
  narrative: string[];
  isImpact?: boolean;
  logo?: ChapterLogo;
  brandColors?: BrandColor[];
  brandPillars?: BrandPillar[];
  highlights?: ChapterHighlight[];
  stats?: ChapterStat[];
  images?: string[];
}

export interface ProjectStory {
  tagline: string;
  hook: StoryHook;
  chapters: ProjectChapter[];
  conclusion: {
    quote: string;
    narrative: string[];
  };
}

// === Core Project Type ===

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  accentColor: string;
  // Real images (optional — used when actual project photos are available)
  thumbnail?: string;
  thumbnailFit?: "cover" | "contain";
  projectImages?: string[];
  // Placeholder colors for image cycling (fallback when no real images)
  imagePlaceholders: string[];
  // Detail page content
  challenge: string;
  solution: string;
  results: string[];
  servicesProvided: string[];
  // Extended case study narrative (optional — enables cinematic layout)
  story?: ProjectStory;
}

export const projects: Project[] = [
  // ─── CyFi ────────────────────────────────────────────────────────────────
  {
    slug: "cyfi",
    title: "CyFi",
    category: "Branding, Social Media & Web Development",
    description:
      "Complete brand identity, bilingual website, and social media presence for a premium cybersecurity company protecting businesses across Saudi Arabia.",
    tags: ["Branding", "Web Development", "SEO", "Social Media"],
    color: "bg-sea-green/30",
    accentColor: "#1A7A8A",
    thumbnail: "/project%20images/cyfilogo.png",
    projectImages: [
      "/project%20images/cyfi1.png",
      "/project%20images/cyfi2.png",
      "/project%20images/cyfi3.png",
    ],
    imagePlaceholders: [
      "bg-gradient-to-br from-sea-green/30 to-nile-blue/40",
      "bg-gradient-to-br from-sea-green/20 to-pine/30",
      "bg-gradient-to-br from-pine/30 to-sea-green/10",
    ],
    challenge:
      "CyFi arrived with elite capabilities and zero visibility. Founded in Riyadh in 2020, they had the technical depth, the team, and the ambition to become Saudi Arabia's most trusted cybersecurity partner — but no brand to show for it. In a market where trust is the product, being invisible was the biggest vulnerability of all. They needed everything: a brand identity that commanded authority in both English and Arabic, a digital presence that earned credibility, and a social voice that could build a real audience in one of the Middle East's most competitive sectors.",
    solution:
      "We started where every great brand starts — with identity. Before a single line of code or caption was written, BrandQraft developed CyFi's complete brand guidelines from scratch: logo system, color palette, typography, iconography, and a visual language built to work flawlessly in both English and Arabic. The aesthetic needed to feel premium, precise, and Saudi-first — a brand that could stand alongside global security giants and hold its ground.\n\nFrom brand, we moved to build. We designed and developed cyfi.sa from the ground up — a fully bilingual website with genuine right-to-left Arabic support. The site was architected for performance and SEO from day one: structured data, semantic markup, optimized metadata, and content built around the exact search terms Saudi businesses use when looking for security partners. An interactive security self-assessment tool was built into the site, giving visitors an immediate reason to engage and giving CyFi a steady stream of qualified leads through WhatsApp.\n\nSimultaneously, we took ownership of CyFi's social media. We built a content strategy rooted in thought leadership — demystifying cybersecurity for Saudi business owners, highlighting regulatory shifts, and positioning CyFi's team as the experts you call before something goes wrong.",
    results: [
      "Complete brand identity and design system built from zero — logo, colors, typography, and bilingual usage guidelines",
      "cyfi.sa launched with full English/Arabic bilingual support and genuine RTL layout",
      "Page 1 Google rankings achieved for multiple cybersecurity keywords across Saudi Arabia",
      "Interactive security assessment tool generating consistent qualified leads via WhatsApp",
      "Active social media presence established, positioning CyFi as a KSA cybersecurity authority",
    ],
    servicesProvided: [
      "Brand Identity & Design Guidelines",
      "Website Design & Development",
      "SEO Strategy & Optimization",
      "Bilingual (AR/EN) Implementation",
      "Social Media Management",
      "Content Strategy",
    ],
    story: {
      tagline: "From Zero Visibility to Industry Authority",
      hook: {
        text: [
          "CyFi arrived with elite cybersecurity capabilities — and zero brand presence.",
          "Founded in Riyadh in 2020, they had the technical depth to protect Saudi Arabia's most critical digital infrastructure. What they lacked was equally critical: a brand that could communicate that authority. In a market where trust is the product, being invisible was their biggest vulnerability. They needed everything — a brand identity that commanded authority in both English and Arabic, a digital presence that earned credibility, and a social voice that could build a real audience in one of the Middle East's most competitive sectors.",
        ],
        details: [
          { label: "Industry", value: "Cybersecurity" },
          { label: "Location", value: "Riyadh, Saudi Arabia" },
          { label: "Founded", value: "2020" },
          { label: "Scope", value: "End-to-End Partnership" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "The Beginning",
          title: "Brand Foundation",
          narrative: [
            "Every great brand starts with identity. Before a single line of code was written or a social post drafted, BrandQraft went deep into CyFi's DNA — their mission, their market position, their competition, and their aspiration to become Saudi Arabia's most trusted cybersecurity name.",
            "The challenge was clear: build a brand that commands authority in both English and Arabic, in a sector where credibility isn't given — it's earned.",
          ],
          logo: {
            src: "/project%20images/cyfi5.png",
            narrative: [
              "The CyFi mark was designed to sit at the intersection of cybersecurity precision and approachable trust. Sharp geometry and clean lines communicate technical authority, while the balanced composition ensures the brand feels premium without being intimidating.",
              "The mark needed to function flawlessly across both English and Arabic contexts — on digital platforms, print materials, and presentation decks alike. Every element was crafted with intent: from the letterforms to the spacing, the logo embodies CyFi's mission of making cybersecurity accessible yet authoritative.",
            ],
          },
          brandColors: [
            { name: "Deep Navy", hex: "#0D1636" },
            { name: "Dark Indigo", hex: "#171F4B" },
            { name: "Royal Indigo", hex: "#363F91" },
            { name: "Sky Blue", hex: "#579CD1" },
            { name: "Soft Teal", hex: "#7DC6BF" },
            { name: "Magenta Pink", hex: "#CE5DA3" },
            { name: "Off-White", hex: "#F8F9FA" },
          ],
        },
        {
          number: "02",
          label: "Digital Presence",
          title: "Building the Platform",
          narrative: [
            "With the brand foundation locked in, we moved to build CyFi's digital home. cyfi.sa was designed and developed from the ground up — not as a brochure site, but as a conversion engine.",
            "Full bilingual support with genuine right-to-left Arabic layout. SEO architecture baked in from day one: structured data, semantic markup, and content strategically mapped to the exact search terms Saudi businesses use when looking for cybersecurity partners.",
          ],
          highlights: [
            { title: "Bilingual Architecture", description: "Full English & Arabic with native RTL support across every page and component" },
            { title: "SEO-First Development", description: "Structured data, semantic markup, and metadata optimized for Saudi market search terms" },
            { title: "Lead Generation Engine", description: "Interactive security self-assessment tool generating qualified leads via WhatsApp" },
            { title: "Performance Optimized", description: "Built for speed, accessibility, and search engine visibility from the ground up" },
          ],
          images: [
            "/project%20images/cyfi1.png",
            "/project%20images/cyfi2.png",
          ],
        },
        {
          number: "03",
          label: "Growth Phase",
          title: "Amplifying the Voice",
          narrative: [
            "A brand without a voice is just a logo. BrandQraft took ownership of CyFi's social media presence, building a content strategy rooted in thought leadership.",
            "The goal wasn't just to post — it was to position CyFi as the experts Saudi businesses call before something goes wrong. We demystified cybersecurity for business owners, highlighted regulatory shifts in the KSA market, and turned complex technical concepts into clear, compelling content.",
          ],
          stats: [
            { value: "Thought Leadership", label: "Content strategy built around deep expertise and market authority" },
            { value: "Brand Voice", label: "Consistent, authoritative tone established across all platforms" },
            { value: "Audience Growth", label: "Targeted community building in the KSA cybersecurity market" },
            { value: "Visual Consistency", label: "Unified brand expression from social posts to presentations" },
          ],
          images: [
            "/project%20images/cyfi4.png",
          ],
        },
        {
          number: "04",
          label: "The Transformation",
          title: "Execution & Impact",
          narrative: [
            "The numbers tell one story. The transformation tells another. CyFi went from an unknown entity to a recognized authority in Saudi Arabia's cybersecurity landscape — a journey measured not just in metrics, but in the trust they've earned and the partnerships they've built.",
          ],
        },
      ],
      conclusion: {
        quote: "From zero visibility to industry authority — this is what a true brand partnership delivers.",
        narrative: [
          "CyFi's transformation is a testament to what's possible when strategy, design, and execution move as one. BrandQraft didn't just build a brand — we became an extension of the CyFi team, invested in their growth at every stage.",
          "This is how we work. This is what we deliver.",
        ],
      },
    },
  },

  // ─── Hasco ───────────────────────────────────────────────────────────────
  {
    slug: "hasco",
    title: "HASCO Group",
    category: "Web Development",
    description:
      "A flagship website for one of Saudi Arabia's most diversified conglomerates — built to represent 20+ years of multi-sector expertise across tourism, construction, marine, logistics, and beyond.",
    tags: ["Web Development", "UI/UX Design", "SEO"],
    color: "bg-pine/35",
    accentColor: "#004A81",
    thumbnail: "/project%20images/hasco1.png",
    thumbnailFit: "contain",
    imagePlaceholders: [
      "bg-gradient-to-br from-pine/40 to-nile-blue/50",
      "bg-gradient-to-br from-pine/25 to-sea-green/20",
      "bg-gradient-to-br from-sea-green/30 to-pine/15",
    ],
    challenge:
      "HASCO Group is a Saudi conglomerate operating across six critical sectors — Tourism & Events, Hospitality, Construction, Supply Chain, Marine, and Logistics. With over 20 years of experience and landmark clients including NEOM, Saudi Aramco, and Red Sea Global, the depth of their capabilities was undeniable. Their website was not. The existing digital presence failed to communicate the scale, the credibility, or the integrated strength of a group that operates from Jeddah Port to the Arabian Gulf. A conglomerate of this stature needed a digital platform worthy of its legacy.",
    solution:
      "BrandQraft approached the HASCO website as an architecture challenge as much as a design challenge — the primary task was making six distinct sectors feel like a single, unified force without losing the specificity that each sector demands.\n\nWe developed a site structure that leads with HASCO's breadth and depth: a strong group-level identity landing into clearly organized sector pages, each communicating its own expertise while remaining visually and tonally consistent with the parent brand. The design language drew directly from HASCO's official color system — Primary Blue (#004A81) and Light Blue (#66AADD) — applied with the clean, minimalist restraint that the brand philosophy demands.\n\nThe build was executed with Montserrat for headings and display text and Helvetica/Arial for body copy, faithful to the brand's typography guidelines. Performance, accessibility, and SEO were built in from the ground up — ensuring the site performs as well in search as it does in a client pitch.",
    results: [
      "Full multi-sector website launched — presenting HASCO Group's six divisions as a cohesive, authoritative digital presence",
      "Design system built faithfully on HASCO's official brand palette and typography guidelines",
      "Sector-specific pages crafted for Tourism, Hospitality, Construction, Supply Chain, Marine, and Logistics",
      "SEO-optimized architecture targeting key Saudi market search terms across all six operational sectors",
      "Mobile-first, performance-optimized build worthy of HASCO's landmark clients — NEOM, Aramco, Red Sea Global",
    ],
    servicesProvided: [
      "Website Design & Development",
      "Multi-Sector Information Architecture",
      "UI/UX Design",
      "SEO Strategy & Optimization",
      "Performance Optimization",
      "Brand-Faithful Design System",
    ],
    story: {
      tagline: "Six Sectors. One Uncompromising Digital Presence.",
      hook: {
        text: [
          "HASCO Group operates at the backbone of Saudi Arabia's most ambitious projects — and their website needed to say so.",
          "With over 20 years of experience spanning six critical industries, HASCO has delivered for NEOM, Saudi Aramco, Amaala, and Red Sea Global. Their portfolio of completed projects runs into the hundreds. Their digital presence didn't reflect any of it. BrandQraft built them a platform worthy of the conglomerate behind it.",
        ],
        details: [
          { label: "Type", value: "Saudi Conglomerate" },
          { label: "Location", value: "Saudi Arabia" },
          { label: "Experience", value: "20+ Years" },
          { label: "Sectors", value: "6 Core Divisions" },
          { label: "Notable Clients", value: "NEOM, Saudi Aramco, Red Sea Global" },
          { label: "Scope", value: "Website Design & Development" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "Discovery",
          title: "Understanding the Scale",
          narrative: [
            "Building a website for a conglomerate is a different problem than building one for a single-service business. The challenge isn't showcasing one thing well — it's making six distinct sectors feel like one coherent, formidable group.",
            "BrandQraft began with a deep audit of HASCO's operational structure, client relationships, and brand identity system. Every design and architecture decision that followed was anchored in a single goal: reflect the true scale of what HASCO has built over two decades.",
          ],
          highlights: [
            { title: "Tourism & Events", description: "Tourism planning and premium event management across Saudi Arabia's most high-profile destinations" },
            { title: "Hospitality", description: "Hotel, cruise, and hospitality operations — delivering world-class guest experiences" },
            { title: "Construction", description: "Major project delivery including NEOM and Jeddah district developments" },
            { title: "Supply Chain & Logistics", description: "End-to-end supply chain solutions, freight, port operations, and transport logistics serving Amaala and Jeddah Port" },
          ],
        },
        {
          number: "02",
          label: "Design & Build",
          title: "One Brand. Six Divisions.",
          narrative: [
            "The visual direction was drawn directly from HASCO's official brand system — Primary Blue (#004A81) and Light Blue (#66AADD), applied with the clean, minimalist discipline the brand philosophy demands. Montserrat for headings. Helvetica for body. No deviation, no creative liberties — just a faithful, elevated execution of the identity HASCO had already established.",
            "The site architecture was engineered to carry the weight of the group's portfolio: a strong group-level identity that flows into sector-specific pages, each authoritative in its own right while remaining unmistakably HASCO.",
          ],
          highlights: [
            { title: "Brand-Faithful Design", description: "Every color, typeface, and spacing decision executed true to HASCO's official brand guidelines" },
            { title: "Multi-Sector Architecture", description: "Site structure that presents six divisions with clarity — unified at the group level, specific at the sector level" },
            { title: "SEO-First Build", description: "Technical SEO and semantic markup targeting search terms across all six operational sectors" },
            { title: "Performance Optimized", description: "Fast, mobile-first build built for both the boardroom presentation and the Google search result" },
          ],
        },
        {
          number: "03",
          label: "The Impact",
          title: "A Platform Worthy of the Group",
          isImpact: true,
          narrative: [
            "HASCO Group now has a digital presence that reflects what it truly is — one of Saudi Arabia's most capable and experienced multi-sector conglomerates. A website that earns the room before a single conversation begins.",
          ],
        },
      ],
      conclusion: {
        quote: "A conglomerate that has built for NEOM deserves a website built with the same ambition.",
        narrative: [
          "HASCO's new platform represents their full scope — from the Arabian Gulf to the logistics corridors of Jeddah, from hospitality to heavy construction — presented with the clarity and authority their clients expect.",
          "This is what enterprise-level web development looks like.",
        ],
      },
    },
  },

  // ─── Mubadara ────────────────────────────────────────────────────────────
  {
    slug: "mubadara",
    title: "Mubadara",
    category: "Brand Identity",
    description:
      "A complete brand identity built for a bold new venture — strategy, visual identity, and design system crafted to carry the weight of a transformative mission.",
    tags: ["Branding", "Brand Strategy", "Identity Design"],
    color: "bg-kraft/40",
    accentColor: "#D97706",
    imagePlaceholders: [
      "bg-gradient-to-br from-kraft/40 to-sunset/20",
      "bg-gradient-to-br from-sunset/25 to-kraft/30",
      "bg-gradient-to-br from-kraft/35 to-nile-blue/30",
    ],
    challenge:
      "Mubadara was born with purpose — a clear mission, a passionate founding team, and a compelling vision for what they were building. The brand hadn't caught up. Their identity was generic, forgettable, and disconnected from the depth of what the initiative actually represented. They needed a visual language that could carry their story, signal their ambition, and earn credibility in rooms where first impressions are everything.",
    solution:
      "We started by going deep on the meaning behind the name and the mission driving the organization. Mubadara — initiative, enterprise, the courage to begin — became the creative north star.\n\nFrom there, BrandQraft developed a complete brand identity: logo system, color palette, typography hierarchy, and a set of core brand pillars that give the visual language its direction. Every element was designed to feel purposeful and to age well — built not just for launch, but for the long term.",
    results: [
      "Complete brand identity delivered — logo system, color palette, typography, and usage guidelines",
      "Brand pillars established, giving the organization a clear visual and verbal foundation to build on",
      "Design system documented and handed over for consistent application across all touchpoints",
      "Identity that communicates ambition and purpose at every level — from pitch decks to print",
    ],
    servicesProvided: [
      "Brand Strategy",
      "Logo Design & Identity System",
      "Color & Typography Guidelines",
      "Brand Pillars & Positioning",
      "Brand Guidelines Document",
    ],
    story: {
      tagline: "An Identity as Bold as the Initiative",
      hook: {
        text: [
          "Mubadara had the vision. The brand needed to match it.",
          "When a new venture steps into the world, its brand is its first argument — the visual case it makes before a single word is spoken. Mubadara's founding team understood this. They came to BrandQraft with a mission worth representing and the clarity to know their current identity wasn't doing it justice. We built them the brand they deserved.",
        ],
        details: [
          { label: "Scope", value: "Complete Brand Identity" },
          { label: "Deliverable", value: "Full Brand Guidelines" },
          { label: "Approach", value: "Strategy-Led Design" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "The Foundation",
          title: "Strategy & Identity",
          narrative: [
            "Brand identity without strategy is decoration. BrandQraft's process always begins with understanding — the mission, the market, the audience, and the long-term ambition of the organization.",
            "For Mubadara, we went deep on what the name means, what the initiative stands for, and how the brand needed to feel to the people it was built for. That thinking became the creative brief — and the creative brief became the brand.",
          ],
          brandColors: [
            { name: "Deep Charcoal", hex: "#1C1917" },
            { name: "Warm Brown", hex: "#44403C" },
            { name: "Rich Amber", hex: "#B45309" },
            { name: "Golden Yellow", hex: "#D97706" },
            { name: "Soft Gold", hex: "#FCD34D" },
            { name: "Ivory", hex: "#FEFCE8" },
          ],
        },
        {
          number: "02",
          label: "Visual Language",
          title: "Building the Identity",
          narrative: [
            "With strategy as the foundation, we developed the complete visual identity system — a set of tools that gives Mubadara a consistent, powerful presence across every context and touchpoint.",
            "The brand pillars were developed alongside the visual language, ensuring that every design decision connects back to what the organization truly stands for.",
          ],
          brandPillars: [
            { title: "Purpose-Driven", description: "Every element of the brand serves the mission — nothing is decorative, everything is intentional." },
            { title: "Clarity", description: "Complex ideas communicated simply and powerfully — a brand anyone can understand at a glance." },
            { title: "Heritage", description: "Rooted in meaning and culture, built to honor where the name comes from and where it's going." },
            { title: "Growth", description: "A brand system designed to evolve — scalable, adaptable, and built for the long run." },
          ],
        },
        {
          number: "03",
          label: "The Impact",
          title: "A Brand Ready for the World",
          isImpact: true,
          narrative: [
            "Mubadara launched with an identity that reflects the full weight of what the initiative represents — a brand that opens doors, commands rooms, and communicates intent before the first meeting even begins.",
          ],
        },
      ],
      conclusion: {
        quote: "A brand is a promise made visible — and Mubadara's promise is now impossible to miss.",
        narrative: [
          "When identity and mission align, everything changes. Mubadara now steps into every conversation with the visual authority its work has always deserved.",
          "This is why brand strategy comes first.",
        ],
      },
    },
  },

  // ─── Oneders Clinics ─────────────────────────────────────────────────────
  {
    slug: "oneders-clinics",
    title: "Oneders Clinics",
    category: "Branding, Website & Social Media",
    description:
      "End-to-end brand transformation for a patient-centered clinic chain — from identity and website to a social media presence that builds trust before the first appointment.",
    tags: ["Branding", "Web Development", "Social Media", "Healthcare"],
    color: "bg-sea-green/25",
    accentColor: "#0EA5E9",
    imagePlaceholders: [
      "bg-gradient-to-br from-sea-green/35 to-pine/25",
      "bg-gradient-to-br from-pine/30 to-sea-green/15",
      "bg-gradient-to-br from-sea-green/25 to-nile-blue/40",
    ],
    challenge:
      "Oneders Clinics was built on a philosophy that healthcare should feel human — warm, accessible, and genuinely patient-first. But their brand, website, and social media presence told a completely different story: clinical, generic, and indistinguishable from every other healthcare provider in the market. Patients were choosing competitors not because the care was better, but because the presentation was. That needed to change.",
    solution:
      "BrandQraft reimagined Oneders from the ground up. The brand identity was redesigned to carry warmth and trust in equal measure — a visual language that feels approachable without sacrificing the professionalism healthcare demands.\n\nThe website was rebuilt as an information-rich, easy-to-navigate platform designed to convert site visitors into booked appointments. Every page was structured to answer the questions patients actually ask before choosing a clinic.\n\nOn social media, we built a content strategy rooted in patient education and community trust — consistent, human-centered content that positions Oneders as the clinic that genuinely cares.",
    results: [
      "Complete brand identity redesigned — reflecting the warmth and expertise that defines the Oneders experience",
      "New website launched with patient-first navigation, service pages, and appointment-focused conversion",
      "SEO-optimized content driving local organic search visibility for clinic services",
      "Social media presence established with a consistent voice that educates, reassures, and builds loyalty",
      "Unified brand expression across all digital and physical touchpoints",
    ],
    servicesProvided: [
      "Brand Identity & Guidelines",
      "Website Design & Development",
      "SEO Strategy",
      "Social Media Management",
      "Content Strategy",
      "Patient-Focused UX Design",
    ],
    story: {
      tagline: "Where Healthcare Gets a Human Face",
      hook: {
        text: [
          "Oneders Clinics was built to do healthcare differently — and their brand needed to show it.",
          "The name said it all: healthcare that creates wonders, delivered with the kind of warmth that makes patients feel like people, not numbers. But the brand, website, and social presence that represented them in the world said something else entirely. Generic. Cold. Forgettable. In healthcare, trust is the deciding factor — and trust starts with how a brand presents itself. BrandQraft rebuilt everything.",
        ],
        details: [
          { label: "Industry", value: "Healthcare / Clinics" },
          { label: "Scope", value: "Branding, Website & Social Media" },
          { label: "Focus", value: "Trust & Patient Conversion" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "Brand Identity",
          title: "A Brand That Earns Trust",
          narrative: [
            "In healthcare, your brand is a clinical decision. Patients choose providers they trust — and trust begins with how a brand looks and feels before a single word is read.",
            "BrandQraft developed a complete identity for Oneders that sits at the intersection of warmth and credibility. The visual language communicates care without sacrificing professionalism — a balance that takes real craft to achieve.",
          ],
          brandColors: [
            { name: "Deep Teal", hex: "#0F3460" },
            { name: "Medical Blue", hex: "#0369A1" },
            { name: "Sky Blue", hex: "#0EA5E9" },
            { name: "Healing Green", hex: "#34D399" },
            { name: "Soft Mint", hex: "#ECFDF5" },
            { name: "Pure White", hex: "#FFFFFF" },
          ],
          brandPillars: [
            { title: "Humanity", description: "People come first — the brand reflects genuine care for every patient who walks through the door." },
            { title: "Trust", description: "Earned through consistency, transparency, and the reassurance that only true expertise can provide." },
            { title: "Approachability", description: "Healthcare without barriers — a brand that makes people feel welcome, not intimidated." },
            { title: "Excellence", description: "Clinical quality and human delivery — proof that warmth and expertise aren't mutually exclusive." },
          ],
        },
        {
          number: "02",
          label: "Digital Presence",
          title: "A Website That Converts Visitors to Patients",
          narrative: [
            "The Oneders website had one job: turn someone searching for a clinic into a booked appointment. That requires more than good design — it requires a deep understanding of what patients need to see before they commit.",
            "We rebuilt the site from the ground up with patient-first information architecture, clear service pages, trust signals throughout, and conversion points designed around the real decision-making journey.",
          ],
          highlights: [
            { title: "Patient-First Navigation", description: "Information architecture built around how patients actually search for and evaluate healthcare providers" },
            { title: "Service Pages That Inform", description: "Clear, empathetic service descriptions that answer the questions patients ask before booking" },
            { title: "Local SEO Optimization", description: "Technical and content SEO driving visibility for clinic location and treatment keywords" },
            { title: "Trust-Driven Design", description: "Testimonials, credentials, and reassurance signals placed at every key decision point" },
          ],
        },
        {
          number: "03",
          label: "Social Media",
          title: "Building a Community of Trust",
          narrative: [
            "Healthcare brands that win on social media aren't the loudest ones — they're the most helpful ones. BrandQraft built a social strategy for Oneders rooted in patient education and community connection.",
            "Consistent content that demystifies treatments, answers common health questions, and introduces the team behind the care. Every post built on the same foundation: Oneders is the clinic that genuinely cares.",
          ],
          stats: [
            { value: "Patient Education", label: "Content that answers real questions and positions Oneders as a trusted health resource" },
            { value: "Community Building", label: "Consistent presence that turns followers into loyal patients and brand advocates" },
            { value: "Team Visibility", label: "Human-centered content that introduces the people behind the care" },
            { value: "Visual Consistency", label: "Every post reflects the warmth and professionalism of the Oneders brand" },
          ],
        },
        {
          number: "04",
          label: "The Transformation",
          title: "Execution & Impact",
          narrative: [
            "Oneders Clinics went from a generic healthcare provider with a forgettable digital presence to a brand patients actively seek out — and actively recommend. The transformation runs deeper than aesthetics: every touchpoint now reflects the genuine care that defines the Oneders experience.",
          ],
        },
      ],
      conclusion: {
        quote: "When a healthcare brand truly reflects the care behind it, patients notice — and they choose you.",
        narrative: [
          "Oneders Clinics now shows up in the world the way their patients experience them: warm, credible, and genuinely different from everyone else in the market.",
          "That alignment between brand and reality is what we build for.",
        ],
      },
    },
  },

  // ─── Elite Style ─────────────────────────────────────────────────────────
  {
    slug: "elite-style",
    title: "Elite Style",
    category: "Branding, Website & Social Media",
    description:
      "Premium brand identity, e-commerce website, and social media strategy for a fashion-forward styling brand — built to look as good as the work it represents.",
    tags: ["Branding", "Web Development", "Social Media", "Fashion"],
    color: "bg-sunset/25",
    accentColor: "#7C3AED",
    imagePlaceholders: [
      "bg-gradient-to-br from-sunset/30 to-kraft/20",
      "bg-gradient-to-br from-kraft/35 to-sunset/15",
      "bg-gradient-to-br from-sunset/20 to-nile-blue/35",
    ],
    challenge:
      "Elite Style was already delivering exceptional results for their clients — wardrobe transformations, personal styling consultations, and fashion direction that genuinely changed how people presented themselves. But their own brand looked like anything but elite. A mismatched visual identity, a website that undersold everything they offered, and a social presence that didn't scratch the surface of the quality behind the work. In fashion, your brand is your portfolio. Theirs wasn't telling the right story.",
    solution:
      "BrandQraft rebuilt Elite Style's entire brand presence from the ground up — starting with a premium visual identity that matched the caliber of their work.\n\nThe website was designed as both a portfolio and a conversion platform — showcasing the transformative results Elite Style delivers while making it effortless for potential clients to book consultations. Every design decision was made to feel luxurious yet approachable.\n\nOn social media, we built a strategy around aspiration and education — content that showcases their work, shares styling insight, and builds a loyal audience of potential clients who come to see Elite Style as the authority in personal fashion.",
    results: [
      "Premium brand identity established — visual language that finally matches the elite quality of the work",
      "New website launched as a portfolio-forward, conversion-optimized platform for new client acquisition",
      "Booking inquiries increased through clear calls-to-action and consultation-focused page design",
      "Social media strategy launched positioning Elite Style as the definitive styling authority in their market",
      "Consistent, aspirational content driving organic follower growth and inbound consultation requests",
    ],
    servicesProvided: [
      "Brand Identity & Design System",
      "Website Design & Development",
      "Portfolio & Booking UX",
      "Social Media Management",
      "Content Strategy",
      "Visual Direction",
    ],
    story: {
      tagline: "A Brand as Polished as the Work Behind It",
      hook: {
        text: [
          "Elite Style was transforming clients. Their brand wasn't doing the same for them.",
          "In fashion and personal styling, your own presentation is your strongest pitch. It's the proof before the pitch — the first thing a potential client sees and uses to decide if you're the one they trust with their image. Elite Style's work was exceptional. Their brand wasn't reflecting it. BrandQraft changed that entirely.",
        ],
        details: [
          { label: "Industry", value: "Fashion & Personal Styling" },
          { label: "Scope", value: "Branding, Website & Social Media" },
          { label: "Focus", value: "Premium Positioning & Client Acquisition" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "Brand Identity",
          title: "Building the Premium Identity",
          narrative: [
            "Premium brands don't happen by accident — they're constructed with deliberate intent. BrandQraft developed Elite Style's complete visual identity with one objective: make the brand feel as exceptional as the service it represents.",
            "We built a design system that communicates luxury without exclusion — sophisticated, aspirational, and immediately recognizable as a cut above the competition.",
          ],
          brandColors: [
            { name: "Jet Black", hex: "#0A0A0A" },
            { name: "Deep Plum", hex: "#3B0764" },
            { name: "Rich Violet", hex: "#6D28D9" },
            { name: "Champagne Gold", hex: "#D4AF37" },
            { name: "Warm Cream", hex: "#FEF9F0" },
            { name: "Pure White", hex: "#FFFFFF" },
          ],
          brandPillars: [
            { title: "Confidence", description: "Style as the most visible form of self-expression — the brand channels the confidence it helps clients find." },
            { title: "Premium", description: "Uncompromising quality in every decision — from the cut of a jacket to the weight of a business card." },
            { title: "Personal", description: "Every client is an individual — the brand reflects a styling philosophy that rejects one-size-fits-all." },
            { title: "Timeless", description: "Beyond trends, above seasons — a brand and a styling philosophy built to last." },
          ],
        },
        {
          number: "02",
          label: "Digital Presence",
          title: "A Website Worth Wearing",
          narrative: [
            "In fashion, the experience of a brand is inseparable from the brand itself. Elite Style's website needed to feel luxurious from the first scroll — while remaining laser-focused on converting visitors into consultation bookings.",
            "We designed a portfolio-forward platform that showcases transformations, communicates the methodology, and makes the path to booking as seamless as possible.",
          ],
          highlights: [
            { title: "Portfolio-Forward Design", description: "Transformation results front and center — the work speaks for itself before any copy does" },
            { title: "Booking-Optimized Flow", description: "Consultation journey designed to reduce friction and convert interest into booked appointments" },
            { title: "Luxury UI Design", description: "Typographic elegance, generous white space, and a visual language that communicates premium at every scroll" },
            { title: "Mobile-First Experience", description: "Built for how fashion-conscious audiences actually browse — on their phones, in their own time" },
          ],
        },
        {
          number: "03",
          label: "Social Media",
          title: "The Platform for Aspiration",
          narrative: [
            "Fashion lives on social media. Elite Style's social strategy was built to do two things: showcase the transformative results of their work, and position them as the authority clients turn to for styling guidance.",
            "Consistent, high-quality content. Behind-the-scenes process. Client spotlights. Trend commentary. A feed that looks exactly like a premium styling brand should — and that builds a community of ideal clients.",
          ],
          stats: [
            { value: "Transformation Content", label: "Before/after showcases that demonstrate the tangible impact of Elite Style's work" },
            { value: "Styling Authority", label: "Educational content establishing Elite Style as the go-to voice for fashion guidance" },
            { value: "Community Growth", label: "A following built from ideal client profiles — people who are ready to invest in their image" },
            { value: "Brand Consistency", label: "Every post, story, and reel reflecting the same premium visual standard" },
          ],
        },
        {
          number: "04",
          label: "The Transformation",
          title: "Execution & Impact",
          narrative: [
            "Elite Style's brand now matches the transformation they deliver for clients. Every touchpoint — from the first Instagram impression to the website booking flow — reflects the premium, personal, and purposeful brand they've built.",
          ],
        },
      ],
      conclusion: {
        quote: "In fashion, you are judged before you speak. Elite Style now makes that first impression count.",
        narrative: [
          "A brand that looks elite attracts elite clients. The quality was always there — now the brand tells the story it deserves to tell.",
          "That's the power of brand alignment done right.",
        ],
      },
    },
  },

  // ─── 4 Arms Syndicate ────────────────────────────────────────────────────
  {
    slug: "4-arms-syndicate",
    title: "4 Arms Syndicate",
    category: "Branding, Website & Social Media",
    description:
      "Bold identity, immersive website, and a social media strategy for a multi-discipline creative collective that refuses to be defined by a single category.",
    tags: ["Branding", "Web Development", "Social Media", "Creative"],
    color: "bg-sunset/30",
    accentColor: "#DC2626",
    imagePlaceholders: [
      "bg-gradient-to-br from-sunset/40 to-nile-blue/50",
      "bg-gradient-to-br from-sunset/25 to-pine/20",
      "bg-gradient-to-br from-pine/30 to-sunset/20",
    ],
    challenge:
      "4 Arms Syndicate operates across disciplines — a collective with the range, the craft, and the ambition to build something that doesn't fit into a single category. Their work was powerful. Their brand was non-existent. No coherent identity, a website that failed to contain the scope of what they do, and a social presence that didn't come close to representing the force they actually are. They needed a brand as bold and multi-dimensional as the work they produce.",
    solution:
      "BrandQraft built 4 Arms Syndicate's brand identity from the ground up — a visual language designed to command attention and communicate strength without explanation. Bold, unapologetic, and built to hold its own in any context.\n\nThe website was designed as an immersive showcase — a platform built to present the full breadth of the collective's work while making their capabilities undeniable to any visitor. Content-heavy, visually driven, and built to impress.\n\nOn social, we built a presence as bold as the brand: a content strategy that documents process, showcases output, and builds a following that actively engages with the collective's work.",
    results: [
      "Distinctive brand identity built from scratch — bold, recognizable, and impossible to confuse with anyone else",
      "Immersive website launched showcasing the full breadth of the collective's capabilities and portfolio",
      "Social media strategy and content established, building a community around the Syndicate's work and process",
      "Consistent brand expression across all digital touchpoints — from portfolio to social to communications",
      "Brand positioning that commands authority across every discipline the collective operates in",
    ],
    servicesProvided: [
      "Brand Identity & Strategy",
      "Logo Design & Visual System",
      "Website Design & Development",
      "Portfolio Showcase Platform",
      "Social Media Management",
      "Content Strategy",
    ],
    story: {
      tagline: "Four Disciplines. One Unstoppable Force.",
      hook: {
        text: [
          "4 Arms Syndicate was already doing remarkable work. The brand needed to announce it.",
          "A collective this bold, this multi-dimensional, and this deliberately unconventional doesn't fit into a standard brief — and their brand needed to reflect that. No templates. No compromise. BrandQraft built an identity that captures the raw energy and collective strength of four arms moving as one.",
        ],
        details: [
          { label: "Type", value: "Creative Collective" },
          { label: "Scope", value: "Branding, Website & Social Media" },
          { label: "Approach", value: "Bold & Uncompromising" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "Brand Identity",
          title: "An Identity That Commands Rooms",
          narrative: [
            "Some brands are meant to whisper. 4 Arms Syndicate was built to speak loudly, clearly, and without apology. BrandQraft developed an identity that captures the collective's energy — bold geometry, a powerful palette, and a visual language that makes an impact before a single word is read.",
            "The brand system was built to work across every context the Syndicate operates in — from digital platforms to physical materials, from portfolio decks to social thumbnails.",
          ],
          brandColors: [
            { name: "Carbon Black", hex: "#0A0A0A" },
            { name: "Dark Charcoal", hex: "#1C1C1C" },
            { name: "Deep Crimson", hex: "#7F1D1D" },
            { name: "Bold Red", hex: "#DC2626" },
            { name: "Fire Orange", hex: "#F97316" },
            { name: "Off-White", hex: "#F5F5F4" },
          ],
          brandPillars: [
            { title: "Boldness", description: "No half-measures — the brand makes a statement and stands behind it completely." },
            { title: "Craft", description: "Precision and intention in every execution — the work speaks louder than any claim." },
            { title: "Collective Strength", description: "Four disciplines moving as one — the brand reflects the power of real collaboration." },
            { title: "Impact", description: "Work that changes how people think, feel, and see. That's the standard. That's the brand." },
          ],
        },
        {
          number: "02",
          label: "Digital Presence",
          title: "A Website as Bold as the Work",
          narrative: [
            "The 4 Arms Syndicate website had one job: make any visitor understand, within seconds, that they're looking at something different. Something better. Something worth paying attention to.",
            "We built an immersive portfolio platform that presents the full scope of the collective's capabilities — visually dominant, content-rich, and designed to leave an impression.",
          ],
          highlights: [
            { title: "Immersive Portfolio Design", description: "Work front and center — a showcase platform that lets the output do the talking" },
            { title: "Multi-Discipline Showcase", description: "Site architecture that communicates breadth without losing the impact of each discipline" },
            { title: "Bold Visual Direction", description: "UI design as strong as the brand — dark, high-contrast, and built to impress" },
            { title: "Performance & Speed", description: "Fast-loading despite the visual intensity — built for the audience, not just the aesthetic" },
          ],
        },
        {
          number: "03",
          label: "Social Media",
          title: "Building the Following",
          narrative: [
            "A collective's social media is its ongoing proof of work. BrandQraft built 4 Arms Syndicate a social presence that documents the process, showcases the output, and builds a community that shows up for what the brand stands for.",
            "Every post, every story, every reel — consistent in its boldness, its craft, and its refusal to be ordinary.",
          ],
          stats: [
            { value: "Process Documentation", label: "Behind-the-scenes content that builds credibility and invites the audience into the work" },
            { value: "Output Showcase", label: "Portfolio content that demonstrates the calibre and breadth of the collective's output" },
            { value: "Community Building", label: "A growing following of collaborators, clients, and advocates for the Syndicate's work" },
            { value: "Consistent Brand Voice", label: "Bold, direct, and unmistakably 4 Arms — every piece of content in lockstep with the brand" },
          ],
        },
        {
          number: "04",
          label: "The Transformation",
          title: "Execution & Impact",
          narrative: [
            "4 Arms Syndicate now has a brand presence equal to the work they produce. The identity, the platform, and the social strategy work together as a single, unified force — the kind of brand expression that makes people stop, look twice, and reach out.",
          ],
        },
      ],
      conclusion: {
        quote: "A collective this powerful deserves a brand that commands the same attention as the work.",
        narrative: [
          "4 Arms Syndicate is no longer a hidden force. The brand announces them — boldly, consistently, and without compromise.",
          "That's what we build for the ones who refuse to be ordinary.",
        ],
      },
    },
  },

  // ─── Saratoga ────────────────────────────────────────────────────────────
  {
    slug: "saratoga",
    title: "Saratoga",
    category: "Brand Identity",
    description:
      "A distinguished brand identity for a premium venture — crafted to communicate heritage, refinement, and the kind of quality that speaks before any introduction is made.",
    tags: ["Branding", "Brand Strategy", "Luxury", "Identity Design"],
    color: "bg-kraft/35",
    accentColor: "#CA8A04",
    imagePlaceholders: [
      "bg-gradient-to-br from-kraft/45 to-pine/30",
      "bg-gradient-to-br from-pine/35 to-kraft/20",
      "bg-gradient-to-br from-kraft/30 to-nile-blue/40",
    ],
    challenge:
      "Saratoga was entering a market defined by heritage, distinction, and the kind of quality that doesn't need to announce itself — it's simply felt. To command premium positioning from day one, they needed more than a logo: they needed a brand with genuine depth. One that could hold its own against names with decades of history and communicate, with absolute clarity, that Saratoga belongs at the top of its category.",
    solution:
      "BrandQraft developed Saratoga's complete brand identity through a process that began with understanding exactly what 'premium' means in their specific market context — and then building a visual language that embodies that standard with precision.\n\nEvery element — the logo, the color palette, the typography system, the brand pillars — was designed with longevity in mind. This is a brand built not just for launch, but for decades of consistent, confident application across every context it will be seen in.",
    results: [
      "Complete premium brand identity delivered — logo system, color palette, typography, and comprehensive brand guidelines",
      "Brand pillars established, providing a clear strategic foundation for all future communications",
      "Visual language designed for longevity — a system that will remain relevant and powerful for years to come",
      "Design guidelines documented for consistent application across print, digital, and environmental contexts",
    ],
    servicesProvided: [
      "Brand Strategy & Positioning",
      "Logo Design & Identity System",
      "Premium Color & Typography System",
      "Brand Pillars & Messaging Framework",
      "Comprehensive Brand Guidelines",
    ],
    story: {
      tagline: "Legacy, Crafted From Scratch",
      hook: {
        text: [
          "Saratoga was stepping into a world that rewards distinction. Their brand needed to be built for it.",
          "Premium positioning isn't claimed — it's communicated. Through every visual choice, every typographic decision, every application of color and space, a premium brand either earns the room or loses it. BrandQraft built Saratoga a brand that earns it, every time.",
        ],
        details: [
          { label: "Scope", value: "Complete Brand Identity" },
          { label: "Positioning", value: "Premium / Distinction" },
          { label: "Deliverable", value: "Full Brand Guidelines" },
        ],
      },
      chapters: [
        {
          number: "01",
          label: "The Foundation",
          title: "Crafting the Identity",
          narrative: [
            "Premium brand identity is as much about what you leave out as what you include. BrandQraft's process for Saratoga began with deep immersion in the category, the competition, and the specific visual language of distinction in their market.",
            "The resulting identity is clean without being cold, refined without being inaccessible — a brand that communicates quality at every scale and in every application.",
          ],
          brandColors: [
            { name: "Deep Forest", hex: "#14532D" },
            { name: "Hunter Green", hex: "#166534" },
            { name: "Rich Gold", hex: "#92400E" },
            { name: "Gold Leaf", hex: "#CA8A04" },
            { name: "Warm Brass", hex: "#D97706" },
            { name: "Ivory", hex: "#FAFAF0" },
          ],
        },
        {
          number: "02",
          label: "Visual Language",
          title: "The Language of Distinction",
          narrative: [
            "A great brand system gives an organization the tools to communicate consistently and powerfully across every touchpoint — from a business card to a billboard, from a digital ad to a printed menu.",
            "Saratoga's brand pillars were developed alongside the visual system, ensuring that every design decision is anchored in what the brand truly stands for and where it's going.",
          ],
          brandPillars: [
            { title: "Heritage", description: "A brand that draws from a legacy of excellence — one that feels earned, not manufactured." },
            { title: "Refinement", description: "Precision in every detail, elegance in every choice — quality that shows without needing to shout." },
            { title: "Experience", description: "A brand felt as much as it is seen — designed to create a lasting impression at every touchpoint." },
            { title: "Distinction", description: "Standing apart in the ways that matter most — unmistakably Saratoga, unmistakably premium." },
          ],
        },
        {
          number: "03",
          label: "The Impact",
          title: "A Brand Ready to Lead",
          isImpact: true,
          narrative: [
            "Saratoga launched with an identity that puts them in immediate contention at the top of their category — a brand that communicates legacy from day one, even as they're still writing it.",
          ],
        },
      ],
      conclusion: {
        quote: "The best brands don't just enter the market — they redefine the standard the moment they arrive.",
        narrative: [
          "Saratoga now carries the visual weight of a heritage brand — built from scratch, designed for the long term, and impossible to ignore.",
          "This is what premium brand identity looks like when craft and strategy move as one.",
        ],
      },
    },
  },
];
