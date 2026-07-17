import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Calculate horizontal translation based on scroll progress
  // -60% will shift the horizontal track to the left as we scroll down
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);

  const experiences = [
    {
      role: "Bachelor of Technology (B.Tech) in Computer Science",
      company: "Shri Shankaracharya Technical Campus",
      date: "2024 - 2028",
      location: "Bhilai, CG",
      description: [
        "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Web Development."
      ]
    },
    {
      role: "Higher Secondary (Class XII)",
      company: "Manka Public School",
      date: "2023 - 2024",
      location: "Champa, CG",
      description: [
        "Completed higher secondary education with focus on Physics, Chemistry and Mathematics."
      ]
    },
    {
      role: "Secondary School (Class X)",
      company: "Vicon School",
      date: "2021 - 2022",
      location: "Raipur, CG",
      description: [
        "Completed secondary education with a strong foundation in Computer Fundamentals."
      ]
    }
  ];

  return (
    <section id="experience" className="journey-section" ref={targetRef}>
      <div className="journey-sticky-container">
        <div className="journey-header-static">
          <motion.h2 
            className="journey-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            the journey so far
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="timeline-horizontal-scroll">
          <div className="timeline-horizontal-line"></div>
          
          {experiences.map((exp, index) => {
            const isTop = index % 2 === 0;
            return (
              <div key={index} className={`timeline-horizontal-item ${isTop ? 'item-top' : 'item-bottom'}`}>
                <div className="timeline-dot-horizontal"></div>
                <div className="timeline-date-pill-horizontal">
                  {exp.date}
                </div>
                
                <div className="journey-card-wrapper">
                  <motion.div 
                    className="journey-card"
                    whileHover={{ y: isTop ? -8 : 8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="journey-location-tag">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>

                    <div className="journey-card-header">
                      <div className="journey-logo">
                        <GraduationCap size={24} color="#ffffff" />
                      </div>
                      <div className="journey-title-block">
                        <h3>{exp.role}</h3>
                        <h4>{exp.company}</h4>
                      </div>
                    </div>
                    
                    <ul className="journey-bullets">
                      {exp.description.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
