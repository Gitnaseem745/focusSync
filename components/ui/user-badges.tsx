import Image from "next/image";

export default function UserBadges({ imgs, size }: { imgs: string[], size: number }) {
    return (
        <div className="relative h-10 flex items-center pointer-events-none" style={{ minWidth: `${imgs.length * 20}px`}}>
            {imgs.map((img, i) => (
                <div
                    key={`user-img-${i}`}
                    className={`bg-black rounded-full absolute top-1/2 transform -translate-y-1/2`}
                    style={{ left: `${i * 14}px`, width:`${size}px`, height: `${size}px` }}
                >
                    <Image src={img} width={32} height={32} alt={`user-img-${i}`} className="w-full h-full object-cover rounded-full" />
                </div>
            ))
            }
        </div>
    )
}
