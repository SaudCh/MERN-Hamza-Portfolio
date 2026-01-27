'use client';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ isOpen, onClose, images, initialIndex }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
        
      <button onClick={onClose} className="absolute top-6 right-6 p-3 bg-white/10 text-white rounded-full">
        <X />
      </button>

      {images.length > 1 && (
        <>
          <button onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i - 1 + images.length) % images.length); }}
            className="absolute left-6 p-3 bg-white/10 text-white rounded-full">
            <ChevronLeft className="!w-3 !h-3" />
          </button>

          <button onClick={(e) => { e.stopPropagation(); setCurrentIndex((i) => (i + 1) % images.length); }}
            className="absolute right-6 p-3 bg-white/10 text-white rounded-full">
            <ChevronRight className="!w-3 !h-3"/>
          </button>
        </>
      )}

      <img src={images[currentIndex]} className="max-h-[90vh] object-contain rounded-lg" />
    </div>
  );
}
