import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Outfit, Syne, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const syne = Syne({ subsets: ["latin"], variable: "--font-heading" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

const BASE_URL = "https://shivamsabbarwal.dev";

export const viewport: Viewport = {
  themeColor: "#5a8a6a",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shivam Sabbarwal - Senior Software Engineer & Tech Lead",
    template: "%s | Shivam Sabbarwal",
  },
  description: `Experienced full-stack software engineer with ${new Date().getFullYear() - 2018}+ years building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies. Available for consulting and new opportunities.`,
  keywords: [
    "software engineer",
    "full-stack developer",
    "React",
    "Node.js",
    "TypeScript",
    "web development",
    "software consultant",
    "Shivam Sabbarwal",
  ],
  authors: [{ name: "Shivam Sabbarwal" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Shivam Sabbarwal Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/assets/profile-pic.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/profile-pic.jpg"],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Shivam Sabbarwal",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased grain", outfit.variable, syne.variable, geistMono.variable)}
    >
      <head>
        <script src="/theme-init.js" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights debug={false} />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
