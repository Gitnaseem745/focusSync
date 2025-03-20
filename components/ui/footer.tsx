import Link from "next/link"
import Image from "next/image"
import type { SocialLink } from "@/types"

/**
 * Footer component with logo and social links
 *
 * @param logo - Logo configuration with src and alt text
 * @param socialLinks - Array of social media links
 */
interface FooterProps {
  logo: {
    src: string
    alt: string
  }
  socialLinks: SocialLink[]
}

export default function Footer({ logo, socialLinks }: FooterProps) {
  return (
    <footer className="flex justify-between items-center px-6 py-4 border-t">
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
