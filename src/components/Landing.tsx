import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  return (
    <section 
      id="landingDiv"
      className="landing-section relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle Ambient Background Gradient (Optimized for WebGL Performance) */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_rgba(7,7,7,0)_60%)] transform-gpu"></div>
      </div>

      <div className="landing-container relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center h-full pt-20 pb-10">
        
        {/* Left Side: Clean Intro */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col justify-center space-y-6 hidden md:flex"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">Available for work</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-sm tracking-[0.2em] text-text-secondary uppercase">An Aspiring Software Developer.</h2>
          </div>
        </motion.div>

        {/* Center: Blank Space for 3D Character */}
        <div className="w-full h-full pointer-events-none relative justify-center items-center hidden md:flex">
          
          {/* Subtle particles or ambient floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold-light rounded-full blur-[2px] opacity-50"
          />
          <motion.div 
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-champagne rounded-full blur-[3px] opacity-30"
          />
        </div>

        {/* Right Side: Massive Typography */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col justify-start md:justify-center items-center md:items-end text-center md:text-right space-y-8 pt-10 md:pt-0 w-full"
        >
          <h1 className="text-white text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-[0.9] tracking-tight mb-4">
            I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#fce2a1] to-[#d4af37]">Sohum Gupta</span>
          </h1>

          <div className="flex items-center gap-4">
            <a 
              href="#work" 
              className="group flex items-center gap-2 px-6 py-3 bg-white text-background font-medium rounded-full hover:bg-champagne transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-text-tertiary font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-1/2 bg-gold"
            animate={{ top: ['-50%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Landing;
