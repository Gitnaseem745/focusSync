import type { HowItWorksContent } from "@/types"
import ImagesGrid from "@/components/ui/images-grid"

/**
 * HowItWorks with Images grid showing unlockable content
 *
 * @param content - How It Works content including title and images array
 */
interface HowItWorksProps {
  content: HowItWorksContent
}

export default function HowItWorks({ content }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="px-6 py-16 text-center overflow-hidden">
      {/* Badge */}
      <div className="text-primary text-sm mb-4">{content.badge}</div>

      {/* Title */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-2xl font-bold mb-4 mx-auto">{content.titleFirst} <br className="sm:block hidden" /> {content.titleSecond}</h2>

      {/* Description */}
      <p className="text-gray-600 max-w-md mb-12 mx-auto">{content.description}</p>

      {/* Images grid */}
     <ImagesGrid content={content}/>
     
    </section>
  )
}
