"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const galleryImages = [
  "/mechnova1.webp",
  "/mechnova2.webp",
  "/mechnova3.webp",
  "/mechnova4.webp",
];

export default function GallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Displaying 3 images at a time in a sharp grid
  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(galleryImages[(currentIndex + i) % galleryImages.length]);
    }
    return visible;
  };

  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 overflow-hidden py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {getVisibleImages().map((img, index) => (
          <div
            key={`${img}-${currentIndex}-${index}`}
            className="relative aspect-[3/2] overflow-hidden group shadow-md transition-all duration-700 ease-in-out"
          >
            <Image
              src={img}
              alt={`Exhibition ${index + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Subtle Overlay only on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
          </div>
        ))}
      </div>
      
      {/* Centered Gallery Dots */}
      <div className="flex justify-center items-center gap-2 mt-12">
        {galleryImages.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-500 rounded-full ${
              index === currentIndex 
                ? "w-8 h-2 bg-[#236da9]" 
                : "w-2 h-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
