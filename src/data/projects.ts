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
  {
    slug: "cyfi",
    title: "CyFi",
    category: "Branding, Social Media & Web Development",
    description:
      "Complete brand identity, bilingual website, and social media presence for a premium cybersecurity company protecting businesses across Saudi Arabia.",
    tags: ["Branding", "Web Development", "SEO", "Social Media"],
    color: "bg-sea-green/30",
    accentColor: "#1A7A8A",
    thumbnail: "/project%20images/cyfi1.png",
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
            src: "/project%20images/cyfilogo.png",
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
          brandPillars: [
            { title: "Authority", description: "Positioning CyFi as a market leader, not just a service provider" },
            { title: "Trust", description: "Building visual and verbal credibility in every touchpoint" },
            { title: "Innovation", description: "Reflecting CyFi's cutting-edge technical capabilities" },
            { title: "Precision", description: "Meticulous attention to detail that mirrors cybersecurity discipline" },
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
            "/project%20images/cyfi3.png",
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
  {
    slug: "elevate-fitness",
    title: "Elevate Fitness",
    category: "Branding & Web Development",
    description:
      "Complete brand overhaul and e-commerce platform for a premium fitness studio chain.",
    tags: ["Branding", "E-commerce", "UX Design"],
    color: "bg-sunset/20",
    accentColor: "#E16A3D",
    imagePlaceholders: [
      "bg-gradient-to-br from-sunset/30 to-sunset/10",
      "bg-gradient-to-br from-sunset/20 to-nile-blue/30",
      "bg-gradient-to-br from-sunset/40 to-kraft/20",
    ],
    challenge:
      "Elevate Fitness needed a complete brand transformation to position themselves as a premium fitness destination. Their existing brand felt outdated and failed to communicate the high-end experience they offered.",
    solution:
      "We developed a bold, modern brand identity centered around empowerment and transformation. The new e-commerce platform was built with seamless booking integration, membership management, and a content hub for fitness resources.",
    results: [
      "200% increase in online membership sign-ups",
      "Brand recognition improved by 85% in target demographics",
      "E-commerce revenue grew 3x within the first quarter",
    ],
    servicesProvided: ["Brand Strategy", "Visual Identity", "Website Development", "E-commerce Integration"],
  },
  {
    slug: "northwind-capital",
    title: "Northwind Capital",
    category: "Website & Digital Strategy",
    description:
      "Sophisticated web presence for a boutique investment firm targeting high-net-worth clients.",
    tags: ["Web Design", "SEO", "Content Strategy"],
    color: "bg-sea-green/30",
    accentColor: "#1C9290",
    imagePlaceholders: [
      "bg-gradient-to-br from-sea-green/30 to-sea-green/10",
      "bg-gradient-to-br from-sea-green/20 to-pine/30",
      "bg-gradient-to-br from-sea-green/40 to-nile-blue/20",
    ],
    challenge:
      "Northwind Capital required a digital presence that conveyed trust, expertise, and exclusivity. Their target audience — high-net-worth individuals — demanded a level of sophistication that their previous website couldn't deliver.",
    solution:
      "We designed a minimal, elegant website with premium typography, subtle animations, and a private client portal. The content strategy positioned their team as thought leaders through market insights and investment commentary.",
    results: [
      "150% increase in qualified lead inquiries",
      "Client portal adoption rate of 92%",
      "Page 1 Google ranking for 15+ target keywords",
    ],
    servicesProvided: ["Web Design", "SEO Optimization", "Content Strategy", "Client Portal Development"],
  },
  {
    slug: "terra-botanics",
    title: "Terra Botanics",
    category: "Brand Identity & Marketing",
    description:
      "Organic skincare brand from concept to market, including packaging and digital campaigns.",
    tags: ["Brand Identity", "Packaging", "Digital Marketing"],
    color: "bg-kraft/30",
    accentColor: "#B79E7B",
    imagePlaceholders: [
      "bg-gradient-to-br from-kraft/30 to-kraft/10",
      "bg-gradient-to-br from-kraft/20 to-sunset/20",
      "bg-gradient-to-br from-kraft/40 to-sea-green/10",
    ],
    challenge:
      "Terra Botanics was a new organic skincare line entering a crowded market. They needed a brand that communicated purity, sustainability, and premium quality from day one.",
    solution:
      "We built the entire brand from the ground up — naming, visual identity, packaging design, and digital launch strategy. The earthy, botanical aesthetic was carried across every touchpoint, from product labels to social media templates.",
    results: [
      "Sold out initial product run within 3 weeks of launch",
      "40K+ social media followers in first 2 months",
      "Featured in 5+ wellness publications",
    ],
    servicesProvided: ["Brand Identity", "Packaging Design", "Digital Marketing", "Social Media Strategy"],
  },
  {
    slug: "cloudscale-solutions",
    title: "CloudScale Solutions",
    category: "Web App & Growth",
    description:
      "B2B SaaS platform redesign that increased conversions by 140% in the first quarter.",
    tags: ["Product Design", "Development", "Growth"],
    color: "bg-pine/40",
    accentColor: "#016A6D",
    imagePlaceholders: [
      "bg-gradient-to-br from-pine/30 to-pine/10",
      "bg-gradient-to-br from-pine/20 to-sea-green/20",
      "bg-gradient-to-br from-pine/40 to-nile-blue/30",
    ],
    challenge:
      "CloudScale's SaaS platform had strong technology but weak user experience and marketing. High bounce rates and low trial-to-paid conversion were limiting growth.",
    solution:
      "We redesigned the entire user interface with a focus on clarity and conversion. The marketing site was rebuilt with compelling case studies, interactive demos, and optimized funnels. Growth marketing campaigns drove targeted traffic.",
    results: [
      "140% increase in trial-to-paid conversions",
      "Bounce rate reduced by 60%",
      "Monthly recurring revenue doubled in 6 months",
    ],
    servicesProvided: ["Product Design", "Web Development", "Growth Marketing", "Conversion Optimization"],
  },
];
