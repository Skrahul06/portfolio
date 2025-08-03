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
  SiMysql
} from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
  }
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const Projects = () => {
  const getTechIcon = (tech) => {
    const Icon = tech.icon;
    return (
      <motion.div 
        key={tech.name} 
        className="flex items-center space-x-1 bg-stone-800 px-2 py-1 rounded-full text-xs text-stone-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon className="w-3 h-3" />
        <span>{tech.name}</span>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-16 text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-6xl px-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-black text-stone-200 rounded-xl overflow-hidden border border-stone-600 hover:border-blue-600 transition-all"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              y: -5,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              transition: { duration: 0.3 }
            }}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <motion.h3 
                  className="text-xl font-bold text-white"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.div 
                  className="flex space-x-2"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-blue-500 transition-colors"
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
                      className="text-stone-400 hover:text-white transition-colors"
                      aria-label="View Code"
                    >
                      <SiGithub className="w-4 h-4" />
                    </a>
                  )}
                </motion.div>
              </div>

              <motion.p 
                className="text-stone-400 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-2 mt-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {project.tech.map(tech => getTechIcon(tech))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
