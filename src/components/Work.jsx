import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ExternalLink } from 'lucide-react';
import './Work.css';

export default function Work() {
  const projects = [
    {
      id: "01",
      title: "Social Media Content Management",
      description: "Managed and grew a social media page to over 10 million engagements by planning content, maintaining posting schedules, tracking audience engagement, and analyzing performance metrics to improve reach and consistency.",
      tags: ["Social Media", "Growth", "Analytics"],
      status: "Live",
      bgClass: "bg-project-1",
      link: "https://www.instagram.com/meme_tank_india/"
    },
    {
      id: "02",
      title: "Educational Institution Website",
      description: "Developed and maintained a responsive school website. Organized website content, admissions information, contact details, and digital assets while ensuring accurate information management.",
      tags: ["Web Dev", "Responsive UI", "Content Management"],
      status: "Live",
      bgClass: "bg-project-2",
      link: "https://mankapublicschool.vercel.app/"
    },
    {
      id: "03",
      title: "Accommodation Booking Website",
      description: "Built a responsive Accommodation Booking Website using React.js and modern frontend technologies. Implemented responsive layouts and user-centric UI/UX with modern frontend practices and data visualization concepts.",
      tags: ["React.js", "Frontend", "UI/UX"],
      status: "Live",
      bgClass: "bg-project-3",
      link: "https://urban-bunk-phi.vercel.app"
    },
    {
      id: "04",
      title: "Event Management Website",
      description: "A responsive Event Management website with user-centric UI/UX and data visualization.",
      tags: ["React", "UI/UX", "Data Viz"],
      status: "Coming Soon",
      bgClass: "bg-project-4"
    }
  ];

  return (
    <section id="work-projects" className="work-section bg-white">
      <div className="container">
        <motion.h2 
          className="work-header-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          check out <span className="script-text-blue">what I've built</span>
        </motion.h2>

        <div className="projects-stack">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`project-feature-card ${project.bgClass}`}
              style={{ top: `calc(15vh + ${index * 2}rem)` }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 0.98, transition: { duration: 0.4 } }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="project-glass-panel">
                <div className="panel-header">
                  <span className="project-id">{project.id}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-tags-row">
                  {project.tags.map(tag => (
                    <span key={tag} className="glass-tag">{tag}</span>
                  ))}
                </div>
                <p className="project-desc">{project.description}</p>
                
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <motion.button 
                      className="project-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {project.status === "Live" ? <ExternalLink size={16} /> : <Lock size={16} />}
                      <span>{project.status}</span>
                    </motion.button>
                  </a>
                ) : (
                  <motion.button 
                    className="project-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {project.status === "Live" ? <ExternalLink size={16} /> : <Lock size={16} />}
                    <span>{project.status}</span>
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
