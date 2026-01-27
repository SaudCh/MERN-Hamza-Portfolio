const About = () => {
  const skills = [
    { name: 'HTML/CSS', category: 'Frontend', years: 2 },
    { name: 'JavaScript', category: 'Core', },
    { name: 'Nextjs', category: 'Frontend', years: 2 },
    { name: 'Node/Express', category: 'Backend', },
    { name: 'MongoDB', category: 'Database',  },
    { name: 'MySQL', category: 'Database', },
  ];

  return (
    <section id="about" className="relative  overflow-hidden bg-gray-50">
  
      <div className="container relative mx-auto px-6 py-24 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-[1fr,1.2fr] lg:gap-24">
          
          {/* Left Column - Identity */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Terminal-style header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-sm text-emerald-700">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-600"></span>
                  ~/developer
                </span>
              </div>
              
              <h1 className="font-['Outfit'] text-7xl font-black leading-none tracking-tight text-stone-900 lg:text-8xl">
                Hamza
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-600 to-transparent"></div>
              
              <p className="font-mono text-lg text-emerald-700">
                {'>'} MERN_Stack_Developer.init()
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-6 text-stone-800">
              <p className="text-lg leading-relaxed">
                Crafting digital experiences for <span className="text-stone-900 font-semibold">2+ years</span>. 
                I transform ambitious ideas into production-ready web applications using the MERN stack, 
                Next.js, and Tailwind CSS.
              </p>
              
              <p className="text-base leading-relaxed">
                From concept to deployment, I build full-stack solutions with clean architecture, 
                modern UI/UX, and scalable backends. Every line of code is intentional, every 
                pixel deliberate.
              </p>
            </div>

            {/* Principles */}
            <div className="space-y-3">
              {[
                'Clean, maintainable code',
                'Pixel-perfect implementations',
                'Performance-first mindset',
                'Clear communication'
              ].map((principle, i) => (
                <div 
                  key={i}
                  className="group flex items-center gap-3 font-mono text-sm text-stone-700 transition-colors hover:text-emerald-700"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <span className="text-emerald-600/60 transition-colors group-hover:text-emerald-700">→</span>
                  {principle}
                </div>
              ))}
            </div>

            {/* Status indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-600"></div>
                <span className="font-mono text-xs text-stone-600">Available for work</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
                <span className="font-mono text-xs text-stone-600">Response time: &lt;2h</span>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Display */}
          <div className="flex flex-col justify-center">
            <div className="relative rounded-2xl border border-stone-300/80 bg-white/60 p-8 shadow-xl shadow-stone-200/50 backdrop-blur-xl lg:p-10">
              {/* Terminal header bar */}
              <div className="mb-8 flex items-center gap-2 border-b border-stone-200 pb-4">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="ml-3 font-mono text-xs text-stone-400">stack.config</span>
              </div>

              {/* Skills grid */}
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-emerald-700/80">
                    Technology Stack
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {skills.map((skill, i) => (
                      <div
                        key={i}
                        className="group relative overflow-hidden rounded-lg border border-stone-200 bg-white/80 p-5 shadow-sm transition-all hover:border-emerald-400/40 hover:bg-emerald-50/30 hover:shadow-md"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {/* Hover gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 opacity-0 transition-opacity group-hover:from-emerald-50/80 group-hover:via-emerald-50/20 group-hover:to-transparent group-hover:opacity-100"></div>
                        
                        <div className="relative">
                          <div className="mb-3 flex items-start justify-between">
                            <div>
                              <div className="mb-1 font-mono text-sm font-semibold text-stone-900">
                                {skill.name}
                              </div>
                              <div className="font-mono text-xs text-stone-500">
                                {skill.category}
                              </div>
                            </div>
                            {/* <div className="rounded-full bg-emerald-100 px-2.5 py-1 font-mono text-xs text-emerald-700">
                              {skill.years}y
                            </div> */}
                          </div>
                          
                          {/* Decorative corner accent */}
                          <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-emerald-400/0 transition-colors group-hover:border-emerald-400/30"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 gap-4 rounded-lg border border-stone-200 bg-gradient-to-br from-white to-stone-50/50 p-6 shadow-sm">
                  <div className="text-center">
                    <div className="font-['Outfit'] text-3xl font-bold text-emerald-600">50+</div>
                    <div className="mt-1 font-mono text-xs text-stone-500">Projects</div>
                  </div>
                  <div className="border-x border-stone-200 text-center">
                    <div className="font-['Outfit'] text-3xl font-bold text-emerald-600">2+</div>
                    <div className="mt-1 font-mono text-xs text-stone-500">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="font-['Outfit'] text-3xl font-bold text-emerald-600">100%</div>
                    <div className="mt-1 font-mono text-xs text-stone-500">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Soft glow effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-emerald-200/20 blur-[128px]"></div>
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cyan-200/20 blur-[128px]"></div>
    </section>
  );
};

export default About;