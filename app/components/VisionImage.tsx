"use client";
import Image from "next/image";
import React, { forwardRef } from "react";

interface ImageProps {
  imageUrl: string;
  altText: string;
}

const VisionImage = forwardRef<HTMLImageElement, ImageProps>(
  ({ imageUrl, altText }, ref) => {
    return (
      <Image
        src={imageUrl}
        alt={altText}
        height={1236}
        width={617}
        ref={ref as React.RefObject<HTMLImageElement>}
      />
    );
  }
);

export default VisionImage;
