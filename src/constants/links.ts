// Constants for all external and internal links used throughout the application

export const SOCIAL_LINKS = {
  github: {
    url: "https://github.com/shubhambhattog",
    label: "GitHub"
  },
  twitter: {
    url: "https://twitter.com/yourusername", 
    label: "Twitter"
  },
  linkedin: {
    url: "https://linkedin.com/in/shubhambhattog",
    label: "LinkedIn"
  },
  youtube: {
    url: "https://youtube.com/@shubhambhattog",
    label: "YouTube"
  },
  instagram: {
    url: "https://instagram.com/yourusername",
    label: "Instagram"
  }
} as const;

// Hitesh Choudhary's actual social links (for reference/attribution)
export const HITESH_LINKS = {
  github: {
    url: "https://github.com/hiteshchoudhary",
    label: "Hitesh's GitHub"
  },
  twitter: {
    url: "https://twitter.com/hiteshchoudhary",
    label: "Hitesh's Twitter"
  },
  youtube: {
    url: "https://youtube.com/@chaiaurcode",
    label: "Chai aur Code"
  },
  linkedin: {
    url: "https://linkedin.com/in/hiteshchoudhary",
    label: "Hitesh's LinkedIn"
  },
  website: {
    url: "https://hiteshchoudhary.com",
    label: "Hitesh's Website"
  },
  learncodeonline: {
    url: "https://learncodeonline.in",
    label: "LearnCodeOnline"
  }
} as const;

// OpenAI and API related links
export const API_LINKS = {
  openai: {
    apiKeys: "https://platform.openai.com/api-keys",
    documentation: "https://platform.openai.com/docs",
    pricing: "https://openai.com/pricing"
  }
} as const;

// Project repository and deployment links
export const PROJECT_LINKS = {
  repository: {
    url: "https://github.com/yourusername/gen-ai-projects",
    label: "Source Code"
  },
  liveDemo: {
    url: "https://your-deployed-app.vercel.app",
    label: "Live Demo"
  },
  documentation: {
    url: "https://github.com/yourusername/gen-ai-projects#readme",
    label: "Documentation"
  }
} as const;

// Internal navigation links
export const NAV_LINKS = {
  home: "/",
  projects: "/projects",
  about: "/about",
  hiteshPersona: "/projects/hitesh-persona"
} as const;

// External resources and learning links
export const RESOURCE_LINKS = {
  nextjs: {
    url: "https://nextjs.org",
    label: "Next.js"
  },
  tailwind: {
    url: "https://tailwindcss.com",
    label: "Tailwind CSS"
  },
  vercel: {
    url: "https://vercel.com",
    label: "Vercel"
  },
  typescript: {
    url: "https://typescriptlang.org",
    label: "TypeScript"
  }
} as const;

// Contact and support links
export const CONTACT_LINKS = {
  email: {
    url: "mailto:your-email@example.com",
    label: "Email"
  },
  support: {
    url: "mailto:support@your-domain.com",
    label: "Support"
  }
} as const;

// All links combined for easy access
export const ALL_LINKS = {
  social: SOCIAL_LINKS,
  hitesh: HITESH_LINKS,
  api: API_LINKS,
  project: PROJECT_LINKS,
  nav: NAV_LINKS,
  resources: RESOURCE_LINKS,
  contact: CONTACT_LINKS
} as const;

// Helper function to get a link by path
export const getLink = (category: keyof typeof ALL_LINKS, key: string): string => {
  const categoryLinks = ALL_LINKS[category] as any;
  return categoryLinks[key]?.url || "#";
};

// Helper function to get a link label by path
export const getLinkLabel = (category: keyof typeof ALL_LINKS, key: string): string => {
  const categoryLinks = ALL_LINKS[category] as any;
  return categoryLinks[key]?.label || key;
};
