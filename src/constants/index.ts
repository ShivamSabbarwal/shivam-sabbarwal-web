// Navigation constants
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Timeline", href: "#timeline" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

// Social links constants
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/ShivamSabbarwal",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.ca/in/shivamsabbarwal",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/shiv.sabb",
    color: "hover:text-pink-400",
  },
] as const;

// Performance constants
export const PERFORMANCE = {
  FLOATING_BUBBLES_COUNT: 12,
} as const;
