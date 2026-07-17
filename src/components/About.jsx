import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import signatureImg from '../assets/signature.png';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);

  const text = "I turn messy, real-world problems into products people actually understand — interfaces that feel obvious, systems that scale, and details that quietly do the work.";
  
  // We want to highlight the word "understand" with a special class.
  const words = text.split(" ").map((word, index) => {
    if (word === "understand") {
      return (
        <span key={index} className="word script-text-blue">
          {word}&nbsp;
        </span>
      );
    }
    return (
      <span key={index} className="word">
        {word}&nbsp;
      </span>
    );
  });

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animate each word
      gsap.to('.word', {
        opacity: 1,
        stagger: 1, // stagger value determines sequence delay in scrub
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
        }
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* What I Do Section */}
      <section id="about" className="what-i-do bg-white">
        <div className="container">
          <div className="section-layout">
            <div className="left-col">
              <div className="section-label">✦ WHAT I DO</div>
            </div>
            <div className="right-col">
              {/* GSAP Scroll-Linked Highlights applied here */}
              <h2 className="wid-text" ref={textRef}>
                {words}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-me bg-white">
        <div className="container">
          <div className="section-layout about-layout">
            <div className="left-col polaroid-col">
              <motion.div 
                className="polaroid-wrapper"
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring" }}
                whileHover={{ rotate: 0, scale: 1.02 }}
              >
                <div className="polaroid">
                  <div className="polaroid-img-container">
                     <img src="/profile.jpg" alt="Sohum Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="right-col">
              <div className="section-label">✦ ABOUT ME</div>
              <div className="about-text">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  My journey into computer science started with a deep interest in logic and problem-solving. I began with C++ and Python, spending years experimenting with algorithms. During college, I worked on designing web experiences, which helped me build a strong foundation across different areas of frontend development.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Today, I focus on building responsive web products, where I enjoy turning complex workflows into experiences that feel simple and intuitive. I'm particularly drawn to problems that sit at the intersection of user needs, clean code, and beautiful design.
                </motion.p>
              </div>
              <motion.div 
                className="signature"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              >
                <img src={signatureImg} alt="Sohum signature" style={{ height: '80px', objectFit: 'contain' }} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
