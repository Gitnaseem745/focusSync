import Link from "next/link"
import Image from "next/image"
import type { ImageType, LinkType, SocialLink } from "@/types"

/**
 * Footer component with logo and social links
 *
 * @param logo - Logo configuration with src and alt text
 * @param legalLinks - Array of legal pages links
 * @param socialLinks - Array of social media links
 */
interface FooterProps {
    logo: ImageType
    socialLinks: SocialLink[]
    legalLinks: LinkType[]
}

export default function Footer({ logo, socialLinks, legalLinks }: FooterProps) {
    return (
        <footer className="flex justify-between items-center sm:flex-row flex-col gap-y-6 px-6 py-4 border-t">
            {/* Logo */}
            <div className="text-primary font-medium text-xl">
                <Link href="/">
                    {logo.src ? (
                        <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} width={100} height={30} className="h-8 w-auto" />
                    ) : (
                        logo.alt
                    )}
                </Link>
            </div>

            {/* Legal links */}
            <div className="space-x-8 text-center">
                {legalLinks.map((link, i) => (
                    <Link key={i} href={link.href} aria-label={link.label} className="text-sm text-gray-700 hover:text-primary">
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Social links */}
            <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} aria-label={link.label} className="text-gray-500 hover:text-primary">
                        <span className="sr-only">{link.label}</span>
                        <link.icon className="h-5 w-5" />
                    </Link>
                ))}
            </div>
        </footer>
    )
}
