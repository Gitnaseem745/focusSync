import Image from "next/image"
import DownloadButton from "../ui/download-button"
import type { MobileAppContent, DownloadButtonProps } from "@/types"

/**
 * Mobile app showcase section with phone image and description
 *
 * @param content - Mobile app section content
 * @param downloadButton - Download button configuration
 */
interface MobileAppSectionProps {
  content: MobileAppContent
  downloadButton: DownloadButtonProps
}

export default function MobileAppSection({ content, downloadButton }: MobileAppSectionProps) {
  return (
    <section id="app-preview" className="px-6 py-16 flex flex-col md:flex-row items-center">
      {/* Mobile phone image */}
      <div className="md:w-1/2 mb-8 md:mb-0 w-full relative max-h-[400px] max-w-[400px] mx-auto pointer-events-none">
        {/* <div className="relative h-[400px] max-w-[300px] mx-auto pointer-events-none"> */}
          <Image
            src={content.image.src || ""}
            alt={content.image.alt}
            width={500}
            height={300}
            className="object-cover w-full"
          />
        </div>
      {/* </div> */}

      {/* Content section */}
      <div className="md:w-1/2">
        {/* Badge */}
        <div className="text-primary text-sm mb-4">{content.badge}</div>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">{content.title}</h2>

        {/* Description */}
        <p className="text-gray-600 mb-8 max-w-md">{content.description}</p>

        {/* Download button */}
        <DownloadButton {...downloadButton} />
      </div>
    </section>
  )
}
