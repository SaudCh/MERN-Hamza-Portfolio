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

export default function ProjectCard({ project, isDarkMode }) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <div 
        className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
          isDarkMode 
            ? 'bg-zinc-950 border-zinc-800/50 hover:border-zinc-700/50' 
            : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
        }`}
      >
        
        {/* Image Section with Swiper */}
        <div className={`relative aspect-video overflow-hidden ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
          {/* Image Count Badge */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
            <ImageIcon className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">{project.images.length}</span>
          </div>

          {/* Video Play Button */}
          {project.videoUrl && (
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className={`absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md border transition-all ${
                isDarkMode 
                  ? 'bg-black/60 border-white/20 text-white hover:bg-black/80' 
                  : 'bg-white/90 border-gray-200 text-gray-800 hover:bg-white'
              }`}
              aria-label="Play demo video"
            >
              <Play className="w-4 h-4" fill="currentColor" />
              <span className="text-sm font-medium">Video</span>
            </button>
          )}

          {/* Swiper Carousel */}
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
          <div className={`absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none ${
            isDarkMode ? 'from-zinc-950 via-zinc-950/20' : 'from-white via-white/20'
          } opacity-60`} />
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className={`text-2xl font-bold mb-2 tracking-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.title}
            </h3>
            <p className={`leading-relaxed ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
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
                    ? 'bg-zinc-800/50 text-zinc-300 border-zinc-700/50' 
                    : 'bg-gray-100 text-gray-700 border-gray-200'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Client Rating Preview */}
          {project.review && (
            <div className={`flex items-center gap-2 pt-2 ${
              isDarkMode ? 'text-zinc-400' : 'text-gray-600'
            }`}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${
                      i < Math.floor(project.review.rating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-zinc-600'
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{project.review.rating}</span>
              <span className="text-sm">• {project.review.clientName}</span>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm border ${
                isDarkMode 
                  ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700/50 hover:border-zinc-600' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200'
              }`}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
            
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
                  isDarkMode 
                    ? 'bg-white hover:bg-zinc-100 text-zinc-900' 
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
                className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                <span>Watch Demo</span>
              </button>
            )}

            {project.review && (
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm border ${
                  isDarkMode 
                    ? 'bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-400 border-yellow-600/30' 
                    : 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200'
                }`}
              >
                <Star className="w-4 h-4" />
                <span>Client Review</span>
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
    </>
  );
}
