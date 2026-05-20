import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  
  const projects = [
    {
      name: "Personal Portfolio Website",
      category: "Interactive Web & 3D Experience",
      tools: "React.js, TypeScript, GSAP, Three.js, WebGL, Framer Motion, Figma",
      image: "/images/portfolio.jpeg",
      github: "https://github.com/Sohummgupta",
      demo: "https://demo.com",
      challenges: "Implementing complex GSAP animations and immersive 3D WebGL contexts while maintaining high frontend performance.",
      impact: "Designed and developed an interactive personal portfolio with modern UI/UX, smooth user interactions, and responsive design."
    },
    {
      name: "UrbanBUNK & Event Dashboard",
      category: "Accommodation & Event Management Platform",
      tools: "React.js, HTML, CSS, Modern Frontend Technologies",
      image: "/images/urbanbunk.png",
      github: "https://github.com",
      demo: "https://demo.com",
      challenges: "Structuring responsive layouts for complex dashboard views and presenting data visualization concepts cleanly.",
      impact: "Built a responsive platform focusing on clean user experience and intuitive layouts for seamless booking management."
    }
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p className="work-category">{project.category}</p>
                  </div>
                </div>
                
                <div className="work-details">
                  <div className="detail-group">
                    <h4>Engineering Challenges</h4>
                    <p>{project.challenges}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Impact & Results</h4>
                    <p>{project.impact}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Tech Stack</h4>
                    <p className="tech-stack-text">{project.tools}</p>
                  </div>
                </div>

                <div className="work-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="work-link">
                    <FaGithub /> GitHub Repository
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="work-link primary-link">
                    Live Demo <MdArrowOutward />
                  </a>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
