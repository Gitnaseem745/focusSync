import { Material } from "@/types";
import Image from "next/image";
import { Lock } from "./icons";

export default function ImagesGrid({ content }: { content: { materials: Material[] } }) {
    return (
      <div className="grid md:grid-cols-[350px_auto] grid-cols-1 gap-10 w-full mx-auto justify-items-center items-center ">
        
        {/* Left Column - Large Image */}
        <div className="relative h-[350px] max-w-[350px] w-full flex justify-center items-center bg-primary-light rounded-lg pointer-events-none overflow-hidden">
         {content.materials && <Image
            src={content.materials[0].src || "/placeholder.svg"}
            alt={content.materials[0].alt}
            width={500}
            height={100}
            className="object-cover w-full h-full"
          />}
        </div>
  
        {/* Right Column - Small material Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 max-w-5xl mx-auto">
          {content.materials?.slice(1).map((material, index) => (
            <div key={index} className="relative h-[165px] w-[180px] max-sm:w-[160px] flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden">
              
              {/* Blurred effect for locked materials */}
              <div className={`absolute inset-0 pointer-events-none ${material.locked ? "blur-md opacity-50" : ""}`}>
                <Image
                  src={material.src || "/placeholder.svg"}
                  alt={material.alt}
                  width={250}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
  
              {/* Lock icon for locked materials */}
              {material.locked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-200 rounded-full p-2">
                    <Lock />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
  
      </div>
    );
  }
