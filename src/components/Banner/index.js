import { forwardRef } from 'react';
import hamzaImg from '../../assets/images/hamza.png';
import ArrowDownIcon from '../icons/ArrowDownIcon';

const Banner = forwardRef(({}, ref) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-50%] right-[-20%] w-[800px] h-[800px] bg-[#d4a574]/8 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] bg-[#d4a574]/5 rounded-full blur-3xl animate-float-reverse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Hero Content */}
          <div className="animate-slide-in-left">
            {/* Label */}
            <div className="inline-flex items-center gap-3 text-[#d4a574] text-sm font-medium tracking-[0.15em] uppercase mb-8 animate-fade-in-delay-1">
              <span className="w-10 h-[1px] bg-[#d4a574]" />
              <span>Web Developer & Business Developer</span>
            </div>

            {/* Heading */}
            <h1 className="font-playfair text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight mb-6 animate-fade-in-delay-2">
              Hi, I'm
              <span className="block text-[#d4a574] font-bold">Hamza</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl font-light text-white/60 leading-relaxed mb-12 max-w-lg animate-fade-in-delay-3">
          Building high-performance web applications with Next.js, combining elegant code and thoughtful design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-4">
              <a
                href="#contact"
                className="group relative px-10 py-4 bg-[#d4a574] text-[#1a1a1a] font-medium tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,165,116,0.3)] hover:-translate-y-0.5"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Hire Me
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              <a
                href="#projects"
                className="group px-10 py-4 border border-[#d4a574]/30 text-white font-medium tracking-wider transition-all duration-300 hover:border-[#d4a574] hover:bg-[#d4a574]/10 hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-3">
                  View Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto lg:ml-auto">
              {/* Image Frame */}
              <div className="relative aspect-[5/6] bg-gradient-to-br from-[#d4a574]/10 to-transparent border border-[#d4a574]/20 overflow-hidden group">
                <img
                    src={hamzaImg}
                  alt="Hamza - Web Developer"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-110 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-[1.15]"
                />
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-30 bg-gradient-to-45 from-[#d4a574] via-transparent to-[#d4a574]" />
              </div>

              {/* Decorative Circles */}
              <div className="hidden md:block absolute -top-8 -right-8 w-32 h-32 border border-[#d4a574]/30 rounded-full animate-rotate" />
              <div className="hidden md:block absolute -bottom-10 -left-10 w-32 h-32 border border-[#d4a574]/30 rounded-full animate-rotate-reverse" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mt-20 lg:mt-14 animate-fade-in-delay-5">
          <div className="text-center sm:text-left">
            <div className="font-playfair text-5xl font-bold text-[#d4a574] leading-none mb-2">
              2+
            </div>
            <div className="text-sm text-white/50 uppercase tracking-widest">
              Years Experience
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-playfair text-5xl font-bold text-[#d4a574] leading-none mb-2">
              100+
            </div>
            <div className="text-sm text-white/50 uppercase tracking-widest">
              Projects Done
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div className="font-playfair text-5xl font-bold text-[#d4a574] leading-none mb-2">
              50+
            </div>
            <div className="text-sm text-white/50 uppercase tracking-widest">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Banner;
