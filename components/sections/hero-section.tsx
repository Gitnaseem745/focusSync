import Image from "next/image"
import DownloadButton from "../ui/download-button"
import type { HeroContent, DownloadButtonProps } from "@/types"
import UserBadges from "../ui/user-badges"

/**
 * Hero section with headline, download button and monster image
 *
 * @param content - Hero section content including headline and image
 * @param downloadButton - Download button configuration
 */
interface HeroProps {
    content: HeroContent
    downloadButton: DownloadButtonProps
}

export default function Hero({ content, downloadButton }: HeroProps) {
    return (
        <section className="text-center px-4 pt-8 pb-4">
            {/* Downloads badge */}
            <div className="flex justify-center items-center mb-4">
                <UserBadges imgs={content.users} size={content.badgeSize} />
                <div className="p-1 text-sm text-primary">{content.downloadCount}</div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto mb-6">{content.headline}</h1>

            {/* tagline */}
            {content.tagline &&
                <p className="text-base text-black/60 md:text-xl max-w-3xl mx-auto mb-6">{content.tagline}</p>
            }
            
            {/* Download button */}
            <div className="mb-8">
                <DownloadButton {...downloadButton} />
            </div>

            {/* image */}
            <div className="relative max-h-[600px] max-w-[900px] mx-auto shadow-md rounded-lg border-foreground/50 border overflow-hidden">
                <Image
                    src={content.image.src || "/placeholder.svg"}
                    alt={content.image.alt}
                    width={500}
                    height={300}
                    className="object-cover w-full mx-auto overflow-hidden"
                    priority
                />
            </div>
        </section>
    )
}
