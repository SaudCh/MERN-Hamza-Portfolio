// import { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import ProjectDetails from './ProjectDetails';
// import projects from '../../projects';

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 5,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 564 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 564, min: 0 },
//     items: 1,
//   },
// };

// const Projects = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <section id="projects" className="container mx-auto py-6 px-8 sm:px-12">
//       <h3 className="text-primary  col-span-2 text-center text-xl font-bold md:text-left">
//         Projects
//       </h3>
//       <Carousel responsive={responsive} infinite containerClass="mt-10">
//         {projects.map((project) => (
//           <div className=" px-4 md:px-10">
//             <div className="relative overflow-hidden rounded-3xl bg-gray-400 px-28 py-40 shadow-md">
//               <img
//                 src={project.mainImage}
//                 alt={project.name}
//                 className="absolute inset-0 h-full w-full cursor-pointer object-cover"
//                 onClick={() => setSelectedProject(project)}
//               />
//             </div>
//             <p className="text-center">{project.title}</p>
//           </div>
//         ))}
//       </Carousel>

//       {selectedProject && <ProjectDetails project={selectedProject} />}
//     </section>
//   );
// };

// export default Projects;




'use client';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import ProjectsGrid from './ProjectsGrid';

export default function ProjectsWithSwiper() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section id="projects" className={`min-h-screen py-24 px-6 ${isDarkMode ? 'bg-black' : ''}`}>
      <div className="container mx-auto px-6 lg:px-16">
        
        <header className="flex justify-between mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-white'}`}>
            Featured Projects
          </h2>
 {/* <button
            onClick={() => setIsDarkMode(!isDarkMode)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all border ${
                  isDarkMode 
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700' 
                    : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200 shadow-sm'
                }`}
                aria-label="Toggle theme"
              >
         {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span className="font-medium">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span className="font-medium">Dark</span>
                  </>
                )}
          </button> */}
        </header>

        <ProjectsGrid isDarkMode={isDarkMode} />
      </div>
    </section>
  );
}



























// 'use client';

// import { useState } from 'react';
// import { Github, ExternalLink, Play, X, Sun, Moon, Star, User, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// // Example projects data with reviews
// const projectsData = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
//     tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
//     images: [
//       "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
//     ],
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     github: "https://github.com/yourusername/ecommerce-platform",
//     demo: "https://demo.yoursite.com",
//     review: {
//       clientName: "Sarah Johnson",
//       clientRole: "CEO, TechMart Inc",
//       clientImage: "https://i.pravatar.cc/150?img=5",
//       rating: 5,
//       comment: "Exceptional work! The platform exceeded our expectations. The team delivered a robust, scalable solution that has significantly improved our online sales. Highly professional and responsive throughout the project.",
//       projectDuration: "3 months",
//       completedDate: "December 2024"
//     }
//   },
//   {
//     id: 2,
//     title: "AI Content Generator",
//     description: "Machine learning powered content generation tool with natural language processing capabilities.",
//     tags: ["Python", "TensorFlow", "React", "FastAPI"],
//     images: [
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
//       "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=80",
//       "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200&q=80"
//     ],
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     github: "https://github.com/yourusername/ai-content-generator",
//     review: {
//       clientName: "Michael Chen",
//       clientRole: "Marketing Director, ContentPro",
//       clientImage: "https://i.pravatar.cc/150?img=12",
//       rating: 5,
//       comment: "Revolutionary tool that transformed our content creation process. The AI is incredibly accurate and has saved us countless hours. The developer was professional, communicative, and delivered ahead of schedule.",
//       projectDuration: "4 months",
//       completedDate: "November 2024"
//     }
//   },
//   {
//     id: 3,
//     title: "Task Management App",
//     description: "Collaborative project management tool with real-time updates, kanban boards, and team analytics.",
//     tags: ["Vue.js", "Node.js", "MongoDB", "Socket.io"],
//     images: [
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
//       "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80"
//     ],
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     github: "https://github.com/yourusername/task-manager",
//     demo: "https://tasks.yoursite.com",
//     review: {
//       clientName: "Emily Rodriguez",
//       clientRole: "Project Manager, DevTeam Co",
//       clientImage: "https://i.pravatar.cc/150?img=9",
//       rating: 4.5,
//       comment: "Great project management solution! The real-time collaboration features work flawlessly. Minor UI suggestions were quickly addressed. Would definitely work with this developer again.",
//       projectDuration: "2 months",
//       completedDate: "January 2025"
//     }
//   }
// ];

// // Image Lightbox Component
// const ImageLightbox = ({ isOpen, onClose, images, initialIndex }) => {
//   const [currentIndex, setCurrentIndex] = useState(initialIndex);

//   if (!isOpen) return null;

//   const nextImage = () => {
//     setCurrentIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
//       onClick={onClose}
//     >
//       <button
//         onClick={onClose}
//         className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
//         aria-label="Close lightbox"
//       >
//         <X className="w-6 h-6" />
//       </button>

//       {/* Navigation */}
//       {images.length > 1 && (
//         <>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               prevImage();
//             }}
//             className="absolute left-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
//             aria-label="Previous image"
//           >
//             <ChevronLeft className="w-3 h-3" />
//           </button>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               nextImage();
//             }}
//             className="absolute right-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
//             aria-label="Next image"
//           >
//             <ChevronRight className="w-3 h-3" />
//           </button>
//         </>
//       )}

//       {/* Image */}
//       <div className="relative max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
//         <img
//           src={images[currentIndex]}
//           alt={`Full size view ${currentIndex + 1}`}
//           className="w-full h-full object-contain rounded-lg"
//         />
//         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm font-medium">
//           {currentIndex + 1} / {images.length}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Video Modal Component
// const VideoModal = ({ isOpen, onClose, videoUrl, projectTitle }) => {
//   if (!isOpen) return null;

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//       onClick={onClose}
//     >
//       <div 
//         className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
//           aria-label="Close video"
//         >
//           <X className="w-6 h-6" />
//         </button>
//         <iframe
//           src={videoUrl}
//           title={`${projectTitle} Demo Video`}
//           className="w-full h-full"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     </div>
//   );
// };

// // Client Review Modal Component
// const ReviewModal = ({ isOpen, onClose, review, projectTitle }) => {
//   if (!isOpen) return null;

//   const fullStars = Math.floor(review.rating);
//   const hasHalfStar = review.rating % 1 !== 0;

//   return (
//     <div 
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
//       onClick={onClose}
//     >
//       <div 
//         className="relative w-full max-w-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
//           aria-label="Close review"
//         >
//           <X className="w-5 h-5" />
//         </button>

//         <div className="p-8">
//           {/* Header */}
//           <div className="mb-6">
//             <h3 className="text-2xl font-bold text-white mb-2">Client Review</h3>
//             <p className="text-zinc-400">{projectTitle}</p>
//           </div>

//           {/* Rating */}
//           <div className="flex items-center gap-2 mb-6">
//             <div className="flex gap-1">
//               {[...Array(fullStars)].map((_, i) => (
//                 <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//               ))}
//               {hasHalfStar && (
//                 <div className="relative">
//                   <Star className="w-5 h-5 text-yellow-400" />
//                   <div className="absolute inset-0 overflow-hidden w-1/2">
//                     <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
//                   </div>
//                 </div>
//               )}
//               {[...Array(5 - Math.ceil(review.rating))].map((_, i) => (
//                 <Star key={`empty-${i}`} className="w-5 h-5 text-zinc-600" />
//               ))}
//             </div>
//             <span className="text-lg font-semibold text-white">{review.rating}</span>
//           </div>

//           {/* Client Info */}
//           <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/10">
//             <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0">
//               {review.clientImage ? (
//                 <img src={review.clientImage} alt={review.clientName} className="w-full h-full object-cover" />
//               ) : (
//                 <div className="w-full h-full flex items-center justify-center">
//                   <User className="w-8 h-8 text-zinc-600" />
//                 </div>
//               )}
//             </div>
//             <div>
//               <h4 className="text-lg font-semibold text-white">{review.clientName}</h4>
//               <p className="text-sm text-zinc-400">{review.clientRole}</p>
//             </div>
//           </div>

//           {/* Review Comment */}
//           <div className="mb-6">
//             <p className="text-zinc-300 leading-relaxed text-lg">
//               "{review.comment}"
//             </p>
//           </div>

//           {/* Project Details */}
//           <div className="flex gap-6 pt-6 border-t border-zinc-800">
//             <div>
//               <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Duration</p>
//               <p className="text-sm font-medium text-white">{review.projectDuration}</p>
//             </div>
//             <div>
//               <p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Completed</p>
//               <p className="text-sm font-medium text-white">{review.completedDate}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Project Card Component
// const ProjectCard = ({ project, isDarkMode }) => {
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
//   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
//   const [isLightboxOpen, setIsLightboxOpen] = useState(false);
//   const [lightboxIndex, setLightboxIndex] = useState(0);

//   const openLightbox = (index) => {
//     setLightboxIndex(index);
//     setIsLightboxOpen(true);
//   };

//   return (
//     <>
//       <div 
//         className={`group relative rounded-2xl overflow-hidden border transition-all duration-500 ${
//           isDarkMode 
//             ? 'bg-zinc-950 border-zinc-800/50 hover:border-zinc-700/50' 
//             : 'bg-white border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl'
//         }`}
//       >
//         {/* Image Section with Swiper */}
//         <div className={`relative aspect-video overflow-hidden ${isDarkMode ? 'bg-zinc-900' : 'bg-gray-100'}`}>
//           {/* Image Count Badge */}
//           <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-white/20">
//             <ImageIcon className="w-4 h-4 text-white" />
//             <span className="text-sm font-medium text-white">{project.images.length}</span>
//           </div>

//           {/* Video Play Button */}
//           {project.videoUrl && (
//             <button
//               onClick={() => setIsVideoModalOpen(true)}
//               className={`absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md border transition-all ${
//                 isDarkMode 
//                   ? 'bg-black/60 border-white/20 text-white hover:bg-black/80' 
//                   : 'bg-white/90 border-gray-200 text-gray-800 hover:bg-white'
//               }`}
//               aria-label="Play demo video"
//             >
//               <Play className="w-4 h-4" fill="currentColor" />
//               <span className="text-sm font-medium">Video</span>
//             </button>
//           )}

//           {/* Swiper Carousel */}
//           <Swiper
//             modules={[Navigation, Pagination, Autoplay]}
//             navigation
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000, disableOnInteraction: true }}
//             loop={project.images.length > 1}
//             className="h-full w-full project-swiper"
//           >
//             {project.images.map((image, index) => (
//               <SwiperSlide key={index}>
//                 <img
//                   src={image}
//                   alt={`${project.title} screenshot ${index + 1}`}
//                   className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
//                   onClick={() => openLightbox(index)}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Gradient Overlay */}
//           <div className={`absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none ${
//             isDarkMode ? 'from-zinc-950 via-zinc-950/20' : 'from-white via-white/20'
//           } opacity-60`} />
//         </div>

//         {/* Content Section */}
//         <div className="p-6 space-y-4">
//           <div>
//             <h3 className={`text-2xl font-bold mb-2 tracking-tight ${
//               isDarkMode ? 'text-white' : 'text-gray-900'
//             }`}>
//               {project.title}
//             </h3>
//             <p className={`leading-relaxed ${
//               isDarkMode ? 'text-zinc-400' : 'text-gray-600'
//             }`}>
//               {project.description}
//             </p>
//           </div>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2">
//             {project.tags.map((tag, idx) => (
//               <span
//                 key={idx}
//                 className={`px-3 py-1 text-xs font-medium rounded-full border ${
//                   isDarkMode 
//                     ? 'bg-zinc-800/50 text-zinc-300 border-zinc-700/50' 
//                     : 'bg-gray-100 text-gray-700 border-gray-200'
//                 }`}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Client Rating Preview */}
//           {project.review && (
//             <div className={`flex items-center gap-2 pt-2 ${
//               isDarkMode ? 'text-zinc-400' : 'text-gray-600'
//             }`}>
//               <div className="flex gap-0.5">
//                 {[...Array(5)].map((_, i) => (
//                   <Star 
//                     key={i} 
//                     className={`w-4 h-4 ${
//                       i < Math.floor(project.review.rating) 
//                         ? 'fill-yellow-400 text-yellow-400' 
//                         : 'text-zinc-600'
//                     }`} 
//                   />
//                 ))}
//               </div>
//               <span className="text-sm font-medium">{project.review.rating}</span>
//               <span className="text-sm">• {project.review.clientName}</span>
//             </div>
//           )}

//           {/* Links */}
//           <div className="flex flex-wrap gap-3 pt-2">
//             <a
//               href={project.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm border ${
//                 isDarkMode 
//                   ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700/50 hover:border-zinc-600' 
//                   : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200'
//               }`}
//             >
//               <Github className="w-4 h-4" />
//               <span>Code</span>
//             </a>
            
//             {project.demo && (
//               <a
//                 href={project.demo}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm ${
//                   isDarkMode 
//                     ? 'bg-white hover:bg-zinc-100 text-zinc-900' 
//                     : 'bg-gray-900 hover:bg-gray-800 text-white'
//                 }`}
//               >
//                 <ExternalLink className="w-4 h-4" />
//                 <span>Live Demo</span>
//               </a>
//             )}

//             {project.videoUrl && (
//               <button
//                 onClick={() => setIsVideoModalOpen(true)}
//                 className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm"
//               >
//                 <Play className="w-4 h-4" fill="currentColor" />
//                 <span>Watch Demo</span>
//               </button>
//             )}

//             {project.review && (
//               <button
//                 onClick={() => setIsReviewModalOpen(true)}
//                 className={`flex items-center gap-2 px-4 py-2.5 rounded-lg transition-colors font-medium text-sm border ${
//                   isDarkMode 
//                     ? 'bg-yellow-600/10 hover:bg-yellow-600/20 text-yellow-400 border-yellow-600/30' 
//                     : 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200'
//                 }`}
//               >
//                 <Star className="w-4 h-4" />
//                 <span>Client Review</span>
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Modals */}
//       <VideoModal 
//         isOpen={isVideoModalOpen}
//         onClose={() => setIsVideoModalOpen(false)}
//         videoUrl={project.videoUrl}
//         projectTitle={project.title}
//       />

//       <ReviewModal 
//         isOpen={isReviewModalOpen}
//         onClose={() => setIsReviewModalOpen(false)}
//         review={project.review}
//         projectTitle={project.title}
//       />

//       <ImageLightbox
//         isOpen={isLightboxOpen}
//         onClose={() => setIsLightboxOpen(false)}
//         images={project.images}
//         initialIndex={lightboxIndex}
//       />
//     </>
//   );
// };

// // Main Projects Component
// export default function ProjectsWithSwiper() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <>
//       {/* Custom Swiper Styles */}
//       <style jsx global>{`
//         .project-swiper .swiper-button-next,
//         .project-swiper .swiper-button-prev {
//           color: #000000;
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(8px);
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           border: 1px solid rgba(0, 0, 0, 0.1);
//           opacity: 0;
//           transition: all 0.3s ease;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
//         }
        
//         .project-swiper:hover .swiper-button-next,
//         .project-swiper:hover .swiper-button-prev {
//           opacity: 1;
//         }
        
//         .project-swiper .swiper-button-next:after,
//         .project-swiper .swiper-button-prev:after {
//           font-size: 14px;
//           font-weight: bold;
//         }
        
//         .project-swiper .swiper-button-next:hover,
//         .project-swiper .swiper-button-prev:hover {
//           background: rgba(255, 255, 255, 1);
//           transform: scale(1.1);
//         }
        
//         .project-swiper .swiper-pagination-bullet {
//           background: white;
//           opacity: 0.4;
//         }
        
//         .project-swiper .swiper-pagination-bullet-active {
//           opacity: 1;
//           background: white;
//         }
        
//         .project-swiper .swiper-pagination {
//           bottom: 12px;
//         }
//       `}</style>

//       <section className={`min-h-screen py-24 px-6 transition-colors duration-500 ${
//         isDarkMode ? 'bg-black' : 'bg-gray-50'
//       }`}>
//         <div className="max-w-7xl mx-auto">
//           {/* Header with Theme Toggle */}
//           <div className="mb-16 space-y-4">
//             <div className="flex items-start justify-between gap-4 flex-wrap">
//               <div>
//                 <h2 className={`text-5xl md:text-6xl font-bold tracking-tight mb-4 ${
//                   isDarkMode ? 'text-white' : 'text-gray-900'
//                 }`}>
//                   Featured Projects
//                 </h2>
//                 <p className={`text-xl max-w-2xl ${
//                   isDarkMode ? 'text-zinc-400' : 'text-gray-600'
//                 }`}>
//                   A collection of my recent work with client testimonials and detailed showcases.
//                 </p>
//               </div>
              
//               {/* Theme Toggle Button */}
//               <button
//                 onClick={toggleTheme}
//                 className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all border ${
//                   isDarkMode 
//                     ? 'bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-700' 
//                     : 'bg-white hover:bg-gray-50 text-gray-900 border-gray-200 shadow-sm'
//                 }`}
//                 aria-label="Toggle theme"
//               >
//                 {isDarkMode ? (
//                   <>
//                     <Sun className="w-5 h-5" />
//                     <span className="font-medium">Light</span>
//                   </>
//                 ) : (
//                   <>
//                     <Moon className="w-5 h-5" />
//                     <span className="font-medium">Dark</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Projects Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {projectsData.map((project) => (
//               <ProjectCard 
//                 key={project.id} 
//                 project={project} 
//                 isDarkMode={isDarkMode}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }