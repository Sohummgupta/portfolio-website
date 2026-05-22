import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  if (percent >= 100 && !loaded) {
    setLoaded(true);
    setTimeout(() => {
      setIsLoaded(true);
    }, 600); // Changes text to "Welcome"
  }

  useEffect(() => {
    if (isLoaded && !clicked) {
      setTimeout(() => {
        setClicked(true); // Triggers massive expansion
      }, 1000); 
    }
  }, [isLoaded, clicked]);

  useEffect(() => {
    if (clicked) {
      import("./utils/initialFX").then((module) => {
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          
          const loadingScreen = document.querySelector('.loading-screen') as HTMLElement;
          if (loadingScreen) {
             loadingScreen.style.transition = "opacity 0.8s ease";
             loadingScreen.style.opacity = "0";
             setTimeout(() => setIsLoading(false), 800);
          } else {
             setIsLoading(false);
          }
        }, 1000); // 1s expansion animation
      });
    }
  }, [clicked, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div className={`loading-screen`}>
      {/* Premium Marquee Background */}
      <div className="loading-marquee">
        <Marquee speed={40} gradient={false}>
          <span> An Aspiring Software Developer </span> 
          <span> An Aspiring Software Developer </span>
          <span> An Aspiring Software Developer </span> 
          <span> An Aspiring Software Developer </span>
        </Marquee>
      </div>

      {/* Interactive Pill */}
      <div
        className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
        onMouseMove={handleMouseMove}
      >
        <div className="loading-hover"></div>
        
        <div className={`loading-button ${isLoaded ? "loading-complete" : ""}`}>
          <div className="loading-content">
            <div className="loading-content-in">
              Loading <span className="mono-percent">{percent < 100 ? percent.toString().padStart(2, '0') : percent}%</span>
            </div>
          </div>
          <div className="loading-content2">
            <span>Welcome</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      const rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
