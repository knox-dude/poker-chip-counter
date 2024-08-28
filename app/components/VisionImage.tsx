"use client"
import Image from "next/image"

interface ImageProps {
  imageUrl: string;
  altText: string;
}
function VisionImage({imageUrl, altText}: ImageProps) {

  return (
    <Image src={imageUrl} alt={altText} height={1236} width={617} />
  )
}

export default VisionImage