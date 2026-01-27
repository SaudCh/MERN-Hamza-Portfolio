'use client';
import { X, Star, User } from 'lucide-react';

export default function ReviewModal({ isOpen, onClose, review, projectTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="bg-zinc-900 p-8 rounded-2xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 bg-white/10 text-white p-2 rounded-full">
          <X />
        </button>

        <h3 className="text-2xl font-bold text-white mb-2">Client Review</h3>
        <p className="text-zinc-400 mb-6">{projectTitle}</p>

        <div className="flex items-center gap-4 mb-6">
          {review.clientImage ? (
            <img src={review.clientImage} className="w-16 h-16 rounded-full" />
          ) : (
            <User className="w-16 h-16 text-zinc-500" />
          )}
          <div>
            <p className="text-white font-semibold">{review.clientName}</p>
            <p className="text-zinc-400">{review.clientRole}</p>
          </div>
        </div>

        <p className="text-zinc-300 text-lg mb-6">"{review.comment}"</p>
      </div>
    </div>
  );
}
