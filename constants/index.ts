import { LuGithub, LuLinkedin, LuInstagram } from "react-icons/lu";

export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Career", href: "#timeline" },
  { name: "Capabilities", href: "#tech-stack" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
] as const;

export const SOCIAL_ICONS = {
  GitHub: LuGithub,
  LinkedIn: LuLinkedin,
  Instagram: LuInstagram,
} as const;

export * from "./content";
