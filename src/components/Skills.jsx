import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code, Layout, Database, Wrench } from 'lucide-react';
import './Skills.css';

export default function Skills() {
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
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-65%"]);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} className="category-icon" />,
      skills: ["C", "C++", "Java", "Python"]
    },
    {
      title: "Frontend Technologies",
      icon: <Layout size={24} className="category-icon" />,
      skills: ["HTML", "CSS", "JavaScript", "React.js"]
    },
    {
      title: "Database & Backend",
      icon: <Database size={24} className="category-icon" />,
      skills: ["MongoDB", "SQL", "Node.js", "Express.js"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench size={24} className="category-icon" />,
      skills: ["Git", "GitHub", "Figma"]
    },
    {
      title: "AI Tools",
      icon: <Code size={24} className="category-icon" />,
      skills: ["Claude AI", "ChatGPT", "Google Antigravity", "Gemini"]
    }
  ];

  return (
    <section id="skills" className="skills-section" ref={targetRef}>
      <div className="skills-sticky-container">
        <div className="skills-bg-pattern"></div>
        
        <div className="skills-header-static">
          <motion.h2 
            className="skills-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Tech I <span className="script-text-blue">build with</span>
          </motion.h2>
        </div>

        <motion.div style={{ x }} className="skills-horizontal-scroll">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-card"
            >
              <div className="card-header">
                <div className="icon-wrapper">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
