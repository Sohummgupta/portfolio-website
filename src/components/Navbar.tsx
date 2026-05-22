import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navLinks[i].name);
          return;
        }
      }
      if (window.scrollY < 200) setActive("");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-6'}`}
    >
      <nav className="relative flex items-center justify-between w-full max-w-6xl px-6 py-3 mx-auto glass rounded-full shadow-2xl shadow-black/20">
        
        {/* Logo Area */}
        <a href="#" onClick={(e) => handleClick(e, "#")} className="flex items-center group">
          <div 
            className="h-10 md:h-16 w-[160px] md:w-[220px] bg-gradient-to-r from-[#d4af37] via-[#fce2a1] to-[#d4af37] group-hover:scale-105 transition-transform"
            style={{ 
              maskImage: 'url(/images/logo.png)', 
              WebkitMaskImage: 'url(/images/logo.png)',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'left center',
              WebkitMaskPosition: 'left center',
              filter: 'drop-shadow(0 0 8px rgba(255, 215, 0, 0.6))'
            }}
          />
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              <a 
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-white ${active === link.name ? 'text-white' : 'text-text-secondary'}`}
              >
                {active === link.name && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a 
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          className="hidden md:block px-5 py-2 text-sm font-medium text-background bg-champagne hover:bg-white rounded-full transition-colors"
        >
          Let's Connect
        </a>

      </nav>
    </motion.header>
  );
};

export default Navbar;
