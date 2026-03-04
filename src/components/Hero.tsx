import React from 'react';

const Hero = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative min-h-screen bg-[#7DD3FC] dark:bg-[#0C4A6E] font-['Montserrat',sans-serif] text-white transition-colors duration-300 overflow-x-hidden">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&family=Noto+Sans+JP:wght@300;400;700&display=swap');
          
          .text-outline {
              -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
              color: transparent;
          }
          .hero-image-mask {
              mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
              -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
          }
        `}
      </style>

      {/* Noise overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Navigation */}


      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-8 left-8 z-50 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all"
      >
        <svg className="dark:hidden" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
        </svg>
        <svg className="hidden dark:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
      </button>

      {/* Main Content */}
      <main className="relative min-h-[100vh] flex items-center justify-center p-4 pt-28 pb-24">
        <div className="absolute top-[-5%] left-[-5%] w-64 h-64 bg-[#FDE047] rounded-full blur-[80px] opacity-40 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#FDE047] rounded-full hidden lg:block opacity-90"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-[#FDE047] rounded-full hidden lg:block opacity-90"></div>
        <div className="absolute bottom-10 left-40 w-28 h-28 bg-[#FDE047] rounded-full hidden lg:block opacity-90"></div>

        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between z-10 -mt-4 lg:-mt-12">
          {/* Left Column */}
          <div className="w-full lg:w-1/3 text-center lg:text-left space-y-4 mb-12 lg:mb-0 mt-6 lg:mt-0">
            <div className="space-y-1">
              <p className="font-['Noto_Sans_JP',sans-serif] text-sm tracking-widest opacity-80">Welcome to my Portfolio!</p>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter">
                ARCHITA<br />DAS
              </h1>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className="h-[2px] w-full max-w-[256px] bg-white/40"></div>
            </div>
            <div className="space-y-2 max-w-xs text-white mx-auto lg:mx-0">
              <p className="text-sm tracking-wide leading-relaxed italic">
                Aspiring Software Developer | Full Stack Enthusiast
              </p>
            </div>
          </div>

          {/* Center Column - Image */}
          <div className="relative w-full lg:w-2/5 flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#FDE047] rounded-full"></div>
            <div className="absolute z-10 w-full pointer-events-none select-none">
              <h2 className="text-outline text-6xl sm:text-7xl lg:text-9xl font-black text-center leading-none opacity-40">
                ARCHITA<br />DAS
              </h2>
            </div>
            <div className="absolute z-20 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden flex items-end justify-center">
              {/* <img
                alt="Stylish Portrait of Archita Das"
                className="w-[240px] sm:w-[300px] lg:w-[400px] h-auto object-cover hover:scale-[1.02] transition-transform duration-700 mt-10"
                src="/profile.png"
              /> */}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/3 text-center lg:text-right space-y-4 mt-12 lg:mt-0">
            <div className="space-y-1">
              <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tighter uppercase">
                BUILDING<br />ELEGANT WEB APPS
              </h2>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="h-[2px] w-full max-w-[256px] bg-white/40"></div>
            </div>
            <div className="space-y-4 max-w-xs mx-auto lg:ml-auto lg:mr-0">
              <p className="font-['Noto_Sans_JP',sans-serif] text-sm tracking-wide leading-loose ">
                Passionate about building elegant web applications and solving
                complex problems with clean, efficient code.
              </p>
              <div className="pt-8 flex flex-col items-center lg:items-end gap-4">
                <a href="#projects" className="px-8 py-3 bg-[#9876d8] hover:bg-[#8563c7] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center">
                  View Projects
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </a>
                <a href="#resume" className="px-8 py-3 border border-white/50 hover:bg-white/10 text-white rounded-full font-bold transition-all hover:scale-105 inline-flex items-center">
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full p-8 flex flex-col md:flex-row justify-between items-center md:items-end z-40 gap-4 md:gap-0">
        <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
          <span className="text-[10px] tracking-widest uppercase opacity-50">Follow the journey</span>
          <a className="text-sm font-bold tracking-widest hover:text-[#FDE047] transition-colors" href="https://github.com/archita050206" target="_blank" rel="noreferrer">GITHUB.COM/ARCHITA050206</a>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" href="https://github.com/archita050206" target="_blank" rel="noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path></svg>
          </a>
          <a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" href="https://linkedin.com/in/architadas" target="_blank" rel="noreferrer">
            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Hero;