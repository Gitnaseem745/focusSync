/**
 * Site configuration file
 * Contains all content, theme settings, and configuration for the site
 * Centralizing content makes it easy to update and maintain
 */
import { Facebook, Instagram, Twitter } from "@/components/ui/icons"
import type { SiteConfigContent, ThemeType } from "@/types"

// Theme configuration
// Can be changed to switch between different color schemes
const theme: ThemeType = "green"

export const siteConfig: SiteConfigContent = {
    // Site metadata
    title: "FocusSync",
    tagline: "Stay Focused. Build Habits. Achieve More.",
    url: "https://yourwebsite.com/",  // Use a placeholder
    ogImage: "/images/og-image.jpg",
    author: "Your Name", // Placeholder for customization
    twitterHandle: "@yourhandle", // Generic or empty
    keywords: ["app", "productivity", "habit-tracker", "mobile", "tool", "productive"],
    
    // Theme setting - controls which color scheme to use
    theme,

    // Logo configuration
    logo: {
        src: "",
        alt: "FocusSync",
    },

    // Navigation links
    navigation: [
        { label: "Features", href: "#features" },
        { label: "About Us", href: "#app-preview" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Community", href: "#community" },
        { label: "Download", href: "#download" },
    ],

    // Header CTA button
    headerCTA: {
        label: "Try for free",
        href: "/#",
    },

    // Download button configuration (reused in multiple sections)
    downloadButton: {
        label: "Download now",
        href: "/#",
    },

    // Hero section content
    hero: {
        headline: "Stay on track and crush your goals with focus-driven rewards!",
        tagline: "Track your progress, maintain streaks, and build lasting habits with an intuitive productivity tool.",
        users: ["/users/user-6.jpg", "/users/user-5.jpg", "/users/user-3.jpg", "/users/user-1.jpg"],
        badgeSize: 35, // value in pixels
        downloadCount: "+71K downloads",
        image: {
            src: "/hero_img.png",
            alt: "FocusSync Hero Image",
        },
    },

    // Value proposition section
    values: [
        {
            text: "Take control of how you"
        },
        {
            type: "highlight",
            text: "spend your time"
        },
        {
            text: "and unlock insights into how your"
        },
        {
            type: "highlight",
            text: "habits shape your mind."
        },
    ],

    // Feature sections
    features: [
        {
            badge: "Stay Focused",
            title: "Stay focused with structured work sessions",
            description:
                "Work in focused intervals and let FocusSync automatically block distractions to enhance your productivity.",
            variant: "text",
        },
        {
            badge: "",
            title: "Join a focus-driven community",
            image: {
                src: "/community/community-2.png",
                alt: "Habit streak tracking",
            },
            textBottom: true,
            variant: "image",
        },
        {
            badge: "Boost Efficiency",
            title: "Prioritize tasks with smart to-do lists",
            description:
                "Organize your tasks with AI-powered to-do lists that adapt to your schedule, helping you focus on what matters most and achieve more effortlessly.",
            variant: "text",
        },
        {
            badge: "Become More Productive",
            title: "Analyze your productivity trends",
            description:
                "Get detailed insights and analytics on your focus sessions, helping you identify patterns and optimize your workflow.",
            variant: "text",
        },
    ],

    // Mobile app section
    mobileApp: {
        badge: "About FocusSync",
        title: "Your personal productivity assistant, always with you",
        description:
            "Effortlessly plan your day, track habits with ease, and maintain streaks to build consistency, ensuring you stay organized, focused, and in control of your tasks.",
        image: {
            src: "/app-preview.png",
            alt: "Mobile app interface",
        },
    },

    // Community Section with own download button 
    community: {
        badge: "Join the community",
        title: "Join a motivated community to stay focused",
        description:
            "Compete with friends or join focus challenges to keep yourself accountable and stay productive together",
        image: {
            src: "/community/community-1.png",
            alt: "Mobile app interface",
        },
        downloadButton: {
            label: "Join Community",
            href: "/#"
        }
    },

    // How It Works section
    howItWorks: {
        badge: "How FocusSync Works",
        titleFirst: "Keep your streak alive",
        titleSecond: "and unlock special perks!",
        description: "Stay consistent to earn badges, XP, and unlock premium productivity templates for free!",
        materials: [
            {
                src: "/material/badge-2.jpg",
                alt: "Badge 2",
                locked: false,
            },
            {
                src: "/material/xp-badge-3.jpg",
                alt: "Badge 3",
                locked: false,
            },
            {
                src: "/material/badge-7.jpg",
                alt: "Badge 7",
                locked: false,
            },
            {
                src: "/material/badge-11.jpg",
                alt: "Badge 11",
                locked: false,
            },
            {
                src: "/material/template-theme.jpg",
                alt: "Template Theme",
                locked: true,
            },
            {
                src: "/material/badge-5.jpg",
                alt: "Badge 5",
                locked: true,
            },
            {
                src: "/material/xp-badge-3.jpg",
                alt: "XP Badge 3",
                locked: true,
            },
            {
                src: "/material/badge-10.jpg",
                alt: "Badge 10",
                locked: true,
            },
            {
                src: "/material/badge-9.jpg",
                alt: "Badge 9",
                locked: true,
            },
        ],
    },

    // Download section with QR code
    downloadSection: {
        title: "Take control of your productivity today!",
        qrCode: {
            src: "/qr_code.jpg",
            alt: "QR code to download app",
        },
    },

    // Legal pages links
    legalLinks: [
        { label: "Disclaimer", href: "/#" },
        { label: "Privacy Policy", href: "/#" }, 
        { label: "Terms of Service", href: "/#" },
    ],

    // Social media links
    socialLinks: [
        {
            label: "Facebook",
            href: "https://facebook.com",
            icon: Facebook,
        },
        {
            label: "Instagram",
            href: "https://instagram.com",
            icon: Instagram,
        },
        {
            label: "Twitter",
            href: "https://twitter.com",
            icon: Twitter,
        },
    ],
}
