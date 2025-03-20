import { Slider, SliderItem } from "@/components/ui/slider"
import FeatureSectionCard from "@/components/ui/card"
import { Feature, Value } from "@/types";

export interface FeatureSectionProps {
    values: Value[];
    content: Feature[]
}

export default function FeatureSection({ values, content }: FeatureSectionProps) {
    return (
        <section>
            {/* Value proposition section */}
            <div id="features" className="text-center px-4 sm:py-32 py-12 ">
                <p className="text-black text-5xl max-sm:text-2xl max-w-xl mx-auto">
                    {values.map((value, i) => (
                        value.type == "highlight" ?
                            <span key={i} className="text-primary font-medium">
                                {" "}{value.text}{" "}
                            </span> :
                            <span key={i}>
                                {value.text}
                            </span>
                    ))}
                </p>
            </div>

            {/* Feature grid sections */}
            <div className="hidden grid-cols-1 md:grid-cols-2 gap-6 px-6 mb-16 sm:grid">
                {content.map((feature, i) => (
                    <FeatureSectionCard key={i} feature={feature} variant={feature.variant} />
                ))}
            </div>

            {/* Feature slider section - replacing the grid */}
            <div className="px-6 py-8 sm:hidden block">
                <Slider
                    className="gap-6 pb-4 -mx-6 px-6"
                    itemClassName="w-[85vw] max-w-[400px] md:w-[400px]"
                    snapAlign="start"
                >
                    {content.map((feature, i) => (
                        <SliderItem key={i}>
                            <FeatureSectionCard feature={feature} variant={feature.variant} />
                        </SliderItem>
                    ))}
                </Slider>
            </div>
        </section>
    )
}
