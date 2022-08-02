import Image from "next/image"

export default function Logo({ src,height,width }) {
    return (
        <Image src={src} alt="logo" width={width} height={height} />
    )
}