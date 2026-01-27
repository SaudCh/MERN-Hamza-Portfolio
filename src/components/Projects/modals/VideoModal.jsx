'use client';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl, projectTitle }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full aspect-video bg-black rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black"
        >
          <X />
        </button>

        {/* Video Player */}
        <video
          src={videoUrl}
          title={projectTitle}
          className="w-full h-full object-contain"
          controls
          autoPlay
          playsInline
        />
      </div>
    </div>
  );
}
