import { siteConfig } from "@/config/siteConfig"
import Header from "@/components/ui/header"
import Hero from "@/components/sections/hero-section"
import MobileAppSection from "@/components/sections/mobile-app-section"
import DownloadSection from "@/components/sections/download-section"
import Footer from "@/components/ui/footer"
import TopButton from "@/components/ui/button-top"
import FeatureSection from "@/components/sections/features-section"
import HowItWorks from "@/components/sections/how-it-works-section"
import CommunitySection from "@/components/sections/community-section"

/**
 * Main landing page component that assembles all sections
 * Uses the theme specified in siteConfig
 */
export default function Home() {
    const { theme } = siteConfig

    return (
        <div className={`landing-page ${theme} relative`}>
            {/* Main container with background color from theme */}
            <div className="bg-background min-h-screen flex flex-col items-center">
                <div className="w-full max-w-[1200px] bg-background">
                    {/* Header with navigation and CTA */}
                    <Header logo={siteConfig.logo} navigation={siteConfig.navigation} cta={siteConfig.headerCTA} />

                    {/* Hero section with main headline and monster */}
                    <Hero content={siteConfig.hero} downloadButton={siteConfig.downloadButton} />

                    {/* Features section with features slider for mobile */}
                    <FeatureSection values={siteConfig.values} content={siteConfig.features} />

                    {/* Mobile app showcase section */}
                    <MobileAppSection content={siteConfig.mobileApp} downloadButton={siteConfig.downloadButton} />

                    {/* How it works section */}
                    <HowItWorks content={siteConfig.howItWorks} />

                    {/* Mobile app showcase section */}
                    <CommunitySection content={siteConfig.community} downloadButton={siteConfig.community.downloadButton} />

                    {/* QR code download section */}
                    <DownloadSection content={siteConfig.downloadSection} downloadButton={siteConfig.downloadButton} />

                    {/* Footer with logo and social links */}
                    <Footer logo={siteConfig.logo} socialLinks={siteConfig.socialLinks} legalLinks={siteConfig.legalLinks} />

                    {/* Button to redirect to top of the window */}
                    <TopButton />
                </div>
            </div>
        </div>
    )
}
