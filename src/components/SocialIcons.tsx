import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";

const SocialIcons = () => {
  return (
    <>
      {/* Social Media - Left Center Fixed */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 mix-blend-difference hidden lg:flex">
        <a href="https://github.com/Sohummgupta" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
          <FaGithub className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com/in/sohum-gupta" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
          <FaLinkedinIn className="w-5 h-5" />
        </a>
        <a href="https://x.com/SohummGupta" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
          <FaXTwitter className="w-5 h-5" />
        </a>
        <a href="https://www.instagram.com/sohummgupta/" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
          <FaInstagram className="w-5 h-5" />
        </a>
      </div>

      {/* Resume - Right Side Fixed */}
      <a 
        href="/Resume.pdf" 
        target="_blank" 
        className="fixed right-6 bottom-10 z-50 flex items-center gap-2 group hidden lg:flex mix-blend-difference"
      >
        <span className="text-white/50 group-hover:text-white text-xs tracking-widest font-medium uppercase transition-colors">Resume</span>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-white/10 transition-all duration-300">
          <TbNotes className="w-5 h-5" />
        </div>
      </a>
    </>
  );
};

export default SocialIcons;
