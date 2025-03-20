import Image from "next/image"
import DownloadButton from "../ui/download-button"
import type { DownloadSectionContent, DownloadButtonProps } from "@/types"

/**
 * Download section with QR code
 *
 * @param content - Download section content including title and QR code
 * @param downloadButton - Download button configuration
 */
interface DownloadSectionProps {
  content: DownloadSectionContent
  downloadButton: DownloadButtonProps
}

export default function DownloadSection({ content, downloadButton }: DownloadSectionProps) {
  return (
    <section id="download" className="px-6 py-16 text-center">
      {/* QR code image */}
      <div className="mb-6">
        <div className="relative h-[180px] w-[180px] mx-auto pointer-events-none rounded-lg overflow-hidden">
          <Image
            src={content.qrCode.src || "/placeholder.svg"}
            alt={content.qrCode.alt}
            width={500}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-4xl xl:text-5xl max-w-3xl font-bold mx-auto mb-8">{content.title}</h2>

      {/* Download button */}
      <div className="flex justify-center">
        <DownloadButton {...downloadButton} />
      </div>
    </section>
  )
}
