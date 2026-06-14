import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    name: "Personal Portfolio Website",
    category: "Interactive Web & 3D Experience",
    tools: ["React.js", "TypeScript", "GSAP", "Three.js", "Tailwind"],
    image: "/images/portfolio.jpeg",
    github: "https://github.com/Sohummgupta",
    demo: "https://demo.com",
    challenges: "Implementing complex GSAP animations and immersive 3D WebGL contexts while maintaining high frontend performance.",
    impact: "Designed and developed an interactive personal portfolio with modern UI/UX, smooth user interactions, and responsive design."
  },
  {
    name: "UrbanBUNK & Event Dashboard",
    category: "Accommodation & Event Management Platform",
    tools: ["React.js", "HTML", "Tailwind", "Node.js"],
    image: "/images/urbanbunk.png",
    github: "https://github.com",
    demo: "https://demo.com",
    challenges: "Structuring responsive layouts for complex dashboard views and presenting data visualization concepts cleanly.",
    impact: "Built a responsive platform focusing on clean user experience and intuitive layouts for seamless booking management."
  }
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const workFlex = document.querySelector(".work-flex");
      if (!workFlex) return;
      translateX = Math.max(0, workFlex.scrollWidth - workFlex.clientWidth);
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        snap: {
          snapTo: 1 / (document.querySelectorAll(".work-box").length - 1 || 1),
          duration: 0.5,
          delay: 0.1,
          ease: "power1.inOut"
        },
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, { scope: containerRef });
  
  return (
    <section 
      id="work" 
      ref={containerRef}
      className="work-section relative w-full h-screen overflow-hidden bg-black border-t border-white/5 flex flex-col justify-center"
    >
      <div className="work-container w-full flex flex-col justify-center">
        
        {/* HEADER */}
        <div className="mb-14 shrink-0 px-6 md:px-12 lg:px-32 max-w-[1920px] mx-auto w-full">
          <h2 className="text-4xl md:text-6xl font-display font-medium text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
              Projects.
            </span>
          </h2>
        </div>

        {/* PROJECTS CONTAINER */}
        <div className="relative w-full flex items-center overflow-hidden">
          <div className="work-flex flex gap-8 md:gap-16 px-6 md:px-12 lg:px-32 max-w-[1920px] mx-auto w-full">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="work-box w-[85vw] md:w-[500px] lg:w-[650px] h-[500px] lg:h-[580px] shrink-0 rounded-3xl overflow-hidden border border-white/5 bg-[#0b0b0b] group flex flex-col shadow-2xl"
              >
                {/* IMAGE HALF */}
                <div className="relative h-[55%] overflow-hidden bg-black">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                  {/* PILL TAGS */}
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2 pointer-events-none">
                    {project.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-white backdrop-blur-md shadow-lg"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CONTENT HALF */}
                <div className="p-6 md:p-8 flex flex-col justify-between h-[45%]">
                  <div>
                    <p className="text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl text-white font-display mb-4">
                      {project.name}
                    </h3>
                    
                    <p className="text-sm text-text-secondary leading-relaxed mb-3 line-clamp-2">
                      <span className="text-white font-medium">Challenge:</span> {project.challenges}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
                      <span className="text-white font-medium">Impact:</span> {project.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
