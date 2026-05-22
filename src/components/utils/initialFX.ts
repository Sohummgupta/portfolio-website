import gsap from "gsap";

export function initialFX() {
  document.body.style.overflowY = "auto";
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
  
  gsap.to("body", {
    backgroundColor: "#070707", // Tailwind background color
    duration: 0.5,
  });

  // Framer Motion handles the component-level entrance animations now.
}
