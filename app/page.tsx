"use client"
import VisionImage from "./components/VisionImage";
import UploadButtons from "./components/UploadButtons";
import React, { useState } from "react";

export default function Home() {

  const DEFAULTIMAGE = "/defaultImage.png"
  const [selectedImage, setSelectedImage] = useState<string>(DEFAULTIMAGE);

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

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 justify-center p-24">
      <h1 className="text-3xl font-bold text-center">Poker Chip Counter</h1>
      <VisionImage imageUrl={DEFAULTIMAGE} altText="Default Image" />
      <UploadButtons />
    </main>
  );
}
