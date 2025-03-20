import Image from "next/image"
import Link from "next/link"
import type { NavigationItem, CTAButton } from "@/types"

/**
 * Header component with logo, navigation links and CTA button
 *
 * @param logo - Logo configuration with src and alt text
 * @param navigation - Array of navigation items with labels and URLs
 * @param cta - Call to action button configuration
 */
interface HeaderProps {
  logo: {
    src: string
    alt: string
  }
  navigation: NavigationItem[]
  cta: CTAButton
}

export default function Header({ logo, navigation, cta }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-6 py-6">
      {/* Logo */}
      <div className="text-primary font-medium text-xl">
        <Link href="/">
          {logo.src ? (
            <Image src={logo.src || "/placeholder.svg?height=30&width=100"} alt={logo.alt} width={100} height={30} className="h-8 w-auto" />
          ) : (
            logo.alt
          )}
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex items-center">
        <nav className="hidden md:flex space-x-8 mr-8">
          {navigation.map((item, index) => (
            <Link key={index} href={item.href} className="text-sm text-gray-700 hover:text-primary" >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          href={cta.href}
          className="bg-black text-white text-sm px-5 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          {cta.label}
        </Link>
      </div>
    </header>
  )
}
