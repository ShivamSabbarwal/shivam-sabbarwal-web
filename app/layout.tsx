import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Schibsted_Grotesk, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { cn } from "@/lib/utils";
import { Providers } from "./providers";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const BASE_URL = "https://shivamsabbarwal.dev";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f5ec" },
    { media: "(prefers-color-scheme: dark)", color: "#141b18" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shivam Sabbarwal | Engineering Leader",
    template: "%s | Shivam Sabbarwal",
  },
  description: `Engineering leader with ${new Date().getFullYear() - 2018}+ years building production systems across fintech, SaaS, and enterprise platforms. Open to Engineering Manager and VP of Engineering roles.`,
  keywords: [
    "engineering leader",
    "engineering manager",
    "VP of engineering",
    "senior software engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Shivam Sabbarwal",
  ],
  authors: [{ name: "Shivam Sabbarwal" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Shivam Sabbarwal",
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
      className={cn(
        "antialiased grain",
        schibsted.variable,
        bricolage.variable,
        geistMono.variable,
      )}
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
