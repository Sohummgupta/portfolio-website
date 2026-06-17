import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="relative w-full py-32 px-6  border-t border-white/5" id="contact">
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass rounded-[3rem] p-10 md:p-20 relative overflow-hidden text-center"
        >
          {/* Subtle Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl font-display font-medium text-white mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">Contact.</span>
            </h2>
            
            <a 
              href="mailto:sohummgupta@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-background rounded-full font-medium text-lg hover:bg-champagne transition-colors mb-16"
            >
              <Mail className="w-5 h-5" />
              sohummgupta@gmail.com
            </a>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-t border-white/10 pt-10 w-full max-w-2xl">
              <a 
                href="https://github.com/Sohummgupta" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm font-medium"
              >
                <FaGithub className="w-4 h-4" /> Github <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sohum-gupta-68b86b331" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm font-medium"
              >
                <FaLinkedin className="w-4 h-4" /> LinkedIn <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
              <a 
                href="https://x.com/SohummGupta" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm font-medium"
              >
                <FaXTwitter className="w-4 h-4" /> X <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
              <a 
                href="https://www.instagram.com/sohummgupta/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors text-sm font-medium"
              >
                <FaInstagram className="w-4 h-4" /> Instagram <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
            </div>
            
            <div className="mt-16 text-xs text-text-tertiary">
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
