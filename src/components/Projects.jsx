import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJavascript, 
  SiPhp, 
  SiLaravel, 
  SiBootstrap,
  SiGithub,
  SiMysql,
  
} from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Botalsepaisa",
    description: "Built secure Node.js/Express APIs for botalsepaisa —a smart recycling platform. Implemented QR-based bottle returns, wallet management, and admin tools. Integrated MongoDB and real-time features for fast user rewards.",
    tech: [
      { icon: SiNodedotjs, name: 'Node.js' },
      { icon: SiExpress, name: 'Express' },
      { icon: SiMongodb, name: 'MongoDB' },
      { icon: SiJavascript, name: 'JavaScript' }
    ],
    demo: "https://danx06-lab.github.io/botalsepaisa/",
    code: "https://github.com/Skrahul06/botalsepaisa"
  },
  {
    title: "CMS Platform",
    description: "A full-featured CMS with user authentication, article management, custom pages, and profile customization. Built with Laravel for robust backend logic and Bootstrap for a clean, responsive interface.",
    tech: [
      { icon: SiPhp, name: 'PHP' },
      { icon: SiLaravel, name: 'Laravel' },
      { icon: SiBootstrap, name: 'Bootstrap' }
    ],
    demo: "#",
    code: "#"
  },

  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product catalog, and payment integration.",
    tech: [
      { icon: SiPhp, name: 'PHP' },
      { icon: SiJavascript, name: 'JavaScript' },
      { icon: SiMysql, name: 'MySQL' },
      { icon: SiBootstrap, name: 'Bootstrap' }
    ],
    demo: "#",
    code: "#"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut'
    }
  }),
  hover: {
    y: -5,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

const Projects = () => {
  // Get tech icon component by name
  const getTechIcon = (tech) => {
    const Icon = tech.icon;
    return (
      <div key={tech.name} className="flex items-center space-x-1 bg-stone-100 dark:bg-stone-800 px-2 py-1 rounded-full text-xs">
        <Icon className="w-3 h-3" />
        <span>{tech.name}</span>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 min-h-screen flex flex-col items-center justify-center">
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        My <span className="text-blue-600 dark:text-blue-400">Projects</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-white dark:bg-stone-900 rounded-xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800"
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.demo !== "#" && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  )}
                  {project.code && (
                    <a 
                      href={project.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
                      aria-label="View Code"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-stone-600 dark:text-stone-400 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map(tech => getTechIcon(tech))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;