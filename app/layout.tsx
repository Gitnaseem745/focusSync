import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { siteConfig } from "@/config/siteConfig";
import Script from "next/script";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the site
 * Uses values from siteConfig
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.tagline,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.tagline,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.tagline,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

/**
 * Root layout component
 * Applies font and provides structure for all pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* viewport for mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}

        {/* JSON-LD Structured Data for better page speed */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": siteConfig.title,
              "operatingSystem": "Web",
              "applicationCategory": "Productivity",
              "description": siteConfig.tagline,
              "author": {
                "@type": "Person",
                "name": siteConfig.author,
              },
              "image": siteConfig.ogImage,
              "url": siteConfig.url,
            }),
          }}
        />
      </body>
    </html>
  );
}
