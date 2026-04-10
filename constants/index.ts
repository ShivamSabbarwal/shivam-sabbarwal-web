// Navigation constants
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Timeline", href: "#timeline" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

// Performance constants
export const PERFORMANCE = {
  FLOATING_BUBBLES_COUNT: 12,
} as const;

// Social icon map (shared by Hero + Footer)
import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";
export const SOCIAL_ICONS = {
  GitHub: LuGithub,
  LinkedIn: LuLinkedin,
  Instagram: LuInstagram,
} as const;

// Re-export all site content
export * from "./content";
