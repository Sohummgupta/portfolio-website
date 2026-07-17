import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0.8, 1], [100, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.8, 1], [0, 0.15]);

  return (
    <footer className="footer-sky">
      <div className="clouds-bg footer-clouds"></div>
      <div className="container footer-content-wrapper">
        <motion.h2 
          className="footer-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          lets <span className="script-text">build</span><br/>incredible work together.
        </motion.h2>
        
        <div className="footer-info">
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="footer-label">Email</span>
            <a href="mailto:sohummgupta@gmail.com" className="footer-link">sohummgupta@gmail.com</a>
          </motion.div>
          <motion.div 
            className="footer-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="footer-label">Social</span>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/sohum-gupta-68b86b331/" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://www.instagram.com/sohummgupta/" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/SohummGupta" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaXTwitter size={18} />
              </a>
              <a href="https://github.com/Sohummgupta" target="_blank" rel="noopener noreferrer" className="social-circle">
                <FaGithub size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div 
        className="giant-name"
        style={{ y: y1, opacity: opacity1 }}
      >
        SOHUM
      </motion.div>
    </footer>
  );
}
