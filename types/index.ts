import type { JSX } from "react"

// Navigation item type
export interface NavigationItem {
  label: string
  href: string
}

// CTA button type
export interface CTAButton {
  label: string
  href: string
}

// Download button props
export interface DownloadButtonProps {
  label: string
  href: string
  className?: string
}

// Link type 
export interface LinkType {
    label: string
    href: string
}

// Image type
export interface ImageType {
  src: string
  alt: string
}

// Hero section content
export interface HeroContent {
  headline: string
  tagline?: string
  users: string[]
  badgeSize: number
  downloadCount: string
  image: ImageType
}

// Value proposition section 
export interface Value {
    type?: string
    text: string
}

// Feature type
export interface Feature {
  badge: string
  title: string
  description?: string
  link?: {
    label: string
    href: string
  }
  image?: ImageType
  textTop?: boolean
  textBottom?: boolean
  variant: "text" | "image"
}

// Mobile app section content
export interface MobileAppContent {
  badge: string
  title: string
  description: string
  image: ImageType
}

// Community section content
export interface CommunityContent {
  badge: string
  title: string
  description: string
  image: ImageType
  downloadButton: DownloadButtonProps
}

// Material type
export interface Material {
  src: string
  alt: string
  locked?: boolean
}

// How It Works content
export interface HowItWorksContent {
  badge: string
  titleFirst: string
  titleSecond: string
  description?: string
  materials: Material[]
}

// Download section content
export interface DownloadSectionContent {
  title: string
  qrCode: ImageType
}

// Social link type
export interface SocialLink {
  label: string
  href: string
  icon: (props: { className?: string }) => JSX.Element
}

// Theme type
export type ThemeType = "purple" | "blue" | "green" | "winter"

// SiteConfig type
export interface SiteConfigContent {
    title: string
    tagline: string
    url: string
    ogImage: string
    author: string
    twitterHandle: string
    keywords: string[]
    theme: ThemeType
    logo: ImageType
    navigation: NavigationItem[]
    headerCTA: CTAButton
    downloadButton: DownloadButtonProps
    hero: HeroContent
    values: Value[]
    features: Feature[]
    mobileApp: MobileAppContent
    community: CommunityContent
    howItWorks: HowItWorksContent
    downloadSection: DownloadSectionContent
    socialLinks: SocialLink[]
    legalLinks: LinkType[]
}
