import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Resume from './components/Resume';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main>
          <div style={{ position: 'fixed', top: '1.5rem', left: 0, width: '100%', display: 'flex', justifyContent: 'center', zIndex: 1000 }}>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
          
          {currentPage === 'home' ? (
            <>
              <Hero />
              <About />
              <Skills />
              <Work />
              <Experience />
            </>
          ) : (
            <Resume />
          )}
          
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
