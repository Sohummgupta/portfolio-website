import { PropsWithChildren, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { useLoading } from "../context/LoadingProvider";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const { setLoading } = useLoading();

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setLoading(100);
    }
  }, [setLoading]);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <main className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && children}
      <ReactLenis root>
        <div className="min-h-screen">
          <Landing />
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <Contact />
        </div>
      </ReactLenis>
    </main>
  );
};

export default MainContainer;
