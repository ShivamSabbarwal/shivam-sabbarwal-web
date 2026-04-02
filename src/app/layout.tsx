import type { Metadata, Viewport } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import "./globals.css";

const BASE_URL = "https://shivamsabbarwal.dev";

export const viewport: Viewport = {
  themeColor: "#3b82f6",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "Shivam Sabbarwal - Senior Software Engineer & Full-Stack Developer",
    template: "%s | Shivam Sabbarwal",
  },
  description:
    "Experienced full-stack software engineer with 7+ years building scalable web applications. Specialized in React, Node.js, TypeScript, and modern web technologies. Available for consulting and new opportunities.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights debug={false} />
        <Analytics debug={false} />
      </body>
    </html>
  );
}
