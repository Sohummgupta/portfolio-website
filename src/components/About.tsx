import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about-section relative w-full py-32 px-6 overflow-hidden min-h-screen flex items-center border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto w-full flex justify-end">
        <div className="w-full lg:w-[55%] flex flex-col gap-12">
        
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="about-me"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">Me.</span>
            </h2>
            <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-light relative z-10">
                I’m a Computer Science Engineering student passionate about building modern, immersive, and user-focused digital experiences. With a strong foundation in C, C++, Java, and Python, I’m continuously expanding my expertise in full-stack development using React, Node.js, MongoDB, and SQL.
                <br /><br />
                I enjoy blending clean design with efficient engineering to create responsive and impactful applications. Driven by curiosity and continuous learning, I actively explore emerging technologies, AI tools, and innovative workflows to sharpen my skills and build meaningful solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
