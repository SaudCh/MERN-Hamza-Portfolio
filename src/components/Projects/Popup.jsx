import React from 'react';
export function PrivateCodePopup({ isOpen, onClose, isDarkMode }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-md rounded-xl p-6 shadow-xl ${
          isDarkMode ? 'bg-zinc-900 text-white' : 'bg-white text-gray-900'
        }`}
      >
        <h3 className="text-lg font-semibold mb-2">
          Private Repository
        </h3>

        <p className="text-sm opacity-80 mb-6">
          This project’s source code is private and cannot be shared publicly.
          It can only be reviewed during a live meeting or screen-sharing session.
        </p>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              isDarkMode
                ? 'bg-zinc-800 hover:bg-zinc-700'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
