import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Resume.css';

export default function Resume() {
  return (
    <div className="resume-page-container">
      <motion.div 
        className="resume-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="resume-badge">✦ RESUME</span>
        <h1 className="resume-title">oh sure, let's keep it formal</h1>
        <p className="resume-subtitle">
          For recruiters, hiring managers, and anyone who prefers<br />the short version.
        </p>
        <a 
          href="/Sohum_Gupta_Resume.png" 
          download="Sohum_Gupta_Resume.png" 
          className="resume-download-btn"
        >
          <Download size={18} />
          <span>Download</span>
        </a>
      </motion.div>

      <motion.div 
        className="resume-document-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="resume-paper">
          <img 
            src="/resume.png" 
            alt="Sohum Gupta Resume" 
            className="resume-image" 
          />
        </div>
      </motion.div>
    </div>
  );
}
