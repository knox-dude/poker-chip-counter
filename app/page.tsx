"use client";
import VisionImage from "./components/VisionImage";
import Button from "./components/Button";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const DEFAULTIMAGE = "/defaultImage.png";
  const [selectedImage, setSelectedImage] = useState<string>(DEFAULTIMAGE);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.clientWidth);
    }
  }, [selectedImage]);

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 justify-center p-24">
      <h1 className="text-3xl font-bold text-center">Poker Chip Counter</h1>
      <VisionImage
        imageUrl={selectedImage}
        altText="Uploaded Image"
        ref={imageRef}
      />
      <div
        className="flex justify-around"
        style={{ width: `${imageWidth}px` }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <Button text="Upload Image" action={handleUploadClick} />
        <Button text="Analyze Chips" action={() => console.log("Analyze Chips")} />
      </div>
    </main>
  );
}
