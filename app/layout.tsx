import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { siteConfig } from "@/config/siteConfig"

// Load Inter font
const inter = Inter({ subsets: ["latin"] })

/**
 * Metadata for the site
 * Uses values from siteConfig
 */
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.tagline,
}

/**
 * Root layout component
 * Applies font and provides structure for all pages
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
