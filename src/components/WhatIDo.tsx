import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python"]
  },
  {
    title: "Frontend Technologies",
    items: ["HTML", "CSS", "JavaScript", "React.js"]
  },
  {
    title: "Database & Backend",
    items: ["MongoDB", "SQL", "Node.js", "Express.js"]
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Figma", "AI Tools"]
  },
  {
    title: "Soft Skills",
    items: ["Problem-Solving", "Communication", "Teamwork", "Continuous Learning"]
  },
  {
    title: "Hobbies & Interests",
    items: ["Finance & Tech", "Photography", "Cinematography", "Music"]
  }
];

const WhatIDo = () => {
  return (
    <div className="whatIDO" id="skills">
      <div className="what-box">
        <h2 className="title">
          S<span className="hat-h2">KILLS</span>
        </h2>
      </div>
      <div className="what-box skills-box">
        <div className="skills-grid">
          {skills.map((category, idx) => (
            <div className="skill-category" key={idx}>
              <div className="skill-border"></div>
              <div className="skill-category-inner">
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.items.map((item, i) => (
                    <span className="skill-tag" key={i}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
