import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentPage, setCurrentPage }) {
  if (currentPage === 'resume') {
    return (
      <motion.nav 
        className="pill-nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <button 
          className="back-btn" 
          onClick={() => setCurrentPage('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem' }}
        >
          <ChevronLeft size={16} />
          Back
        </button>
        <div className="nav-avatar">
          <div className="avatar-circle">
            <img src="/nav_avatar.png" alt="Sohum" />
          </div>
          <span className="nav-name">SOHUM</span>
        </div>
        <div className="nav-links">
          <a href="#about" onClick={() => setCurrentPage('home')}>About</a>
          <a href="#work-projects" onClick={() => setCurrentPage('home')}>Work</a>
          <a href="#" className="active" style={{ color: 'var(--blue-sky-top)' }}>Resume</a>
        </div>
      </motion.nav>
    );
  }

  return (
    <motion.nav 
      className="pill-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-avatar">
        <div className="avatar-circle">
          <img src="/nav_avatar.png" alt="Sohum" />
        </div>
        <span className="nav-name">SOHUM</span>
      </div>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work-projects">Work</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('resume'); }}>Resume</a>
      </div>
    </motion.nav>
  );
}
