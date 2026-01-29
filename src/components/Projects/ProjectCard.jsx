'use client';

import { useState } from 'react';
import {
  Github,
  ExternalLink,
  Play,
  Star,
  Image as ImageIcon
} from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImageLightbox from './modals/ImageLightbox';
import VideoModal from './modals/VideoModal';
import ReviewModal from './modals/ReviewModal';
import { PrivateCodePopup } from './Popup';

export default function ProjectCard({ project, isDarkMode }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
const [showPrivateCodePopup, setShowPrivateCodePopup] = useState(false);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
<div
  className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
    isDarkMode
      ? 'bg-zinc-900/50 border-zinc-800/30 hover:border-zinc-700/50'
      : 'bg-zinc-900/80 border-zinc-800/30 hover:border-zinc-700/50 shadow-lg hover:shadow-xl'
  }`}
>
  {/* Swiper Global Styles */}
  <style jsx global>{`
    .project-swiper .swiper-button-next,
    .project-swiper .swiper-button-prev {
      color: #2c2c2c;
      background: rgba(207, 169, 125, 0.95);
      backdrop-filter: blur(8px);
      width: 36px;
      height: 36px;
      padding: 6px;
      border-radius: 50%;
      border: 1px solid rgba(207, 169, 125, 0.3);
      opacity: 0;
      transition: all 0.3s ease;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }

    .project-swiper:hover .swiper-button-next,
    .project-swiper:hover .swiper-button-prev {
      opacity: 1;
    }

    .project-swiper .swiper-button-next:after,
    .project-swiper .swiper-button-prev:after {
      font-size: 14px;
      font-weight: bold;
    }

    .project-swiper .swiper-button-next:hover,
    .project-swiper .swiper-button-prev:hover {
      background: rgba(207, 169, 125, 1);
      transform: scale(1.1);
    }

    .project-swiper .swiper-pagination-bullet {
      background: #cfa97d;
      opacity: 0.4;
    }

    .project-swiper .swiper-pagination-bullet-active {
      opacity: 1;
      background: #cfa97d;
    }

    .project-swiper .swiper-pagination {
      bottom: 12px;
    }
  `}</style>

  {/* Image / Media Section */}
  <div
    className={`relative aspect-video overflow-hidden ${
      isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'
    }`}
  >
    {/* Image Count Badge */}
    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-md rounded-lg border border-[#cfa97d]/30">
      <ImageIcon className="w-4 h-4 text-[#cfa97d]" />
      <span className="text-sm font-medium text-[#cfa97d]">
        {project.images.length}
      </span>
    </div>

    {/* Website / Video Button */}
    {project.videoUrl && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsVideoModalOpen(true);
        }}
        className={`absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md border transition-all ${
          isDarkMode
            ? 'bg-zinc-900/80 border-[#cfa97d]/30 text-[#cfa97d] hover:bg-zinc-900/95'
            : 'bg-white/90 border-gray-200 text-gray-800 hover:bg-white'
        }`}
        aria-label="Play demo video"
      >
        <span className="text-sm font-medium">Website</span>
      </button>
    )}

    {/* Swiper */}
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      loop={project.images.length > 1}
      className="h-full w-full project-swiper"
    >
      {project.images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`${project.title} screenshot ${index + 1}`}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
            onClick={() => openLightbox(index)}
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Gradient Overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none ${
        isDarkMode
          ? 'from-zinc-900 via-zinc-900/20'
          : 'from-white via-white/20'
      } opacity-60`}
    />
  </div>

  {/* Content Section */}
  <div className="p-6 space-y-4">
    <div>
      <h3
        className={`text-2xl font-bold mb-2 tracking-tight ${
          isDarkMode ? 'text-white' : 'text-white'
        }`}
      >
        {project.title}
      </h3>
      <p
        className={`leading-relaxed ${
          isDarkMode ? 'text-zinc-400' : 'text-gray-500'
        }`}
      >
        {project.description}
      </p>
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, idx) => (
        <span
          key={idx}
          className={`px-3 py-1 text-xs font-medium rounded-full border ${
            isDarkMode
              ? 'bg-zinc-800/50 text-[#cfa97d] border-zinc-700/50'
              : 'bg-gray-100 text-gray-700 border-gray-200'
          }`}
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Rating */}
    {project.review && (
      <div
        className={`flex items-center gap-2 pt-2 ${
          isDarkMode ? 'text-zinc-400' : 'text-gray-600'
        }`}
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(project.review.rating)
                  ? 'fill-[#cfa97d] text-[#cfa97d]'
                  : 'text-zinc-600'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium">
          {project.review.rating}
        </span>
      </div>
    )}

    {/* Action Buttons */}
    <div className="flex flex-wrap gap-3 pt-2">
      <button
        onClick={() => setShowPrivateCodePopup(true)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-medium text-sm border ${
          isDarkMode
            ? 'bg-zinc-800/50 hover:bg-zinc-800 text-zinc-300 border-zinc-700/50 hover:border-[#cfa97d]/30'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200'
        }`}
      >
        <Github className="w-4 h-4" />
        <span>Code</span>
      </button>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all font-medium text-sm ${
            isDarkMode
              ? 'bg-[#cfa97d] hover:bg-[#b8926d] text-zinc-900'
              : 'bg-gray-900 hover:bg-gray-800 text-white'
          }`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>Live Demo</span>
        </a>
      )}

      {project.videoUrl && (
        <button
          onClick={() => setIsVideoModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#cfa97d] hover:bg-[#b8926d] text-zinc-900 rounded-lg transition-all font-medium text-sm"
        >
          <Play className="w-4 h-4" fill="currentColor" />
          <span>Watch Demo</span>
        </button>
      )}
    </div>
  </div>
</div>



      {/* Modals */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={project.videoUrl}
        projectTitle={project.title}
      />

      <ReviewModal 
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        review={project.review}
        projectTitle={project.title}
      />

      <ImageLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={project.images}
        initialIndex={lightboxIndex}
      />
      <PrivateCodePopup
  isOpen={showPrivateCodePopup}
  onClose={() => setShowPrivateCodePopup(false)}
  isDarkMode={isDarkMode}
/>
    </>
  );
  
}
