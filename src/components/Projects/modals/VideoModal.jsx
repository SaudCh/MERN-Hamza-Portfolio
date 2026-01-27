'use client';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, videoUrl, projectTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-5xl w-full aspect-video" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full">
          <X />
        </button>
        <iframe src={videoUrl} title={projectTitle} className="w-full h-full" allowFullScreen />
      </div>
    </div>
  );
}
