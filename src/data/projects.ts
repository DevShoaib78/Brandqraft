export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  accentColor: string;
  // Placeholder colors for image cycling (will be replaced with real images)
  imagePlaceholders: string[];
  // Detail page content
  challenge: string;
  solution: string;
  results: string[];
  servicesProvided: string[];
}

export const projects: Project[] = [
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
