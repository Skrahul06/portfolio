import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loading from './components/Loading';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="fixed inset-0 -z-10">
              <div className="relative h-full w-full bg-black">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
              </div>
            </div>
            <div className="container mx-auto px-8">
              <Navbar scrollToSection={scrollToSection} />
              <Hero scrollToSection={scrollToSection} />
              <Technologies />
              <div className="mb-80"></div> {/* Adds vertical space */}
              <div id="projects" className="mb-20"></div>
              <Projects />
              <Contact />
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;