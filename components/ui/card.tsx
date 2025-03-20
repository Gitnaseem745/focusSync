import Image from "next/image"
import type { Feature } from "@/types"
import { cn } from "@/lib/utils"

/**
 * Feature section component that can be displayed in text or image variant
 *
 * @param feature - Feature content including title, description and images
 * @param variant - Layout variant (text or image)
 */

interface FeatureSectionCardProps {
    feature: Feature
    variant: "text" | "image"
    className?: string
}

export default function FeatureSectionCard({ feature, variant, className }: FeatureSectionCardProps) {
    // For text variant, show text with descripiton
    if (variant === "text") {
        return (
            <div className="bg-primary-light sm:p-12 p-6 rounded-lg content-center h-full max-w-xl">
                {/* Feature badge */}
                <div className="text-xs text-primary-dark mb-2">{feature.badge}</div>


                {/* Feature title */}
                <h2 className="max-md:text-5xl max-lg:text-3xl max-sm:text-3xl lg:text-5xl font-semibold mb-6">
                    {feature.title}
                </h2>

                {/* Feature description */}
                <p className="text-gray-600 lg:text-lg text-base mb-4">{feature.description}</p>
            </div>
        )
    }

    // For image variant, show image with colored background
    return (
        <div className={cn("rounded-lg p-6 relative overflow-hidden content-center max-w-xl", 
            className, 
            feature.textTop ? "bg-primary-light" : "bg-primary-dark"
            )}>
            {/* Feature title */}
            {feature.textTop && <div className="text-center mb-4">
                <h3 className="text-xl font-medium text-foreground">{feature.title}</h3>
            </div>}

            {/* Feature image */}
            {feature.image && <div className="relative min-h-[300px] max-w-[350px] rounded-lg overflow-hidden mx-auto">
                <Image src={feature.image.src || "/placeholder.svg"} alt={feature.image.alt} width={500} height={100} className="object-cover w-full" />
            </div>}

            {feature.textBottom && <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-background">{feature.title}</h3>
            </div>}
        </div>
    )
}
