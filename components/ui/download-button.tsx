import Link from "next/link"
import { ArrowRight } from "./icons"
import type { DownloadButtonProps } from "@/types"
import { cn } from "@/lib/utils"

/**
 * Reusable download button component with arrow icon
 *
 * @param label - Button text
 * @param href - Button link URL
 * @param className - Additional CSS classes
 */
export default function DownloadButton({ label, href, className = "" }: DownloadButtonProps) {
    return (
        <Link
            href={href}
            className={cn(`inline-flex items-center bg-primary text-white px-5 py-4 rounded-full hover:bg-primary-dark transition-colors`, className)}
        >
            <span className="mr-2">{label}</span>
            <span className="bg-white rounded-full p-1 flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-primary" />
            </span>
        </Link>
    )
}
