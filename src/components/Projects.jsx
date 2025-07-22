import React from 'react'
import { motion } from 'framer-motion'
import { SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiPhp, SiLaravel, SiBootstrap } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "botalsepaisa",
    description: "Built secure Node.js/Express APIs for botalsepaisa —a smart recycling platform. Implemented QR-based bottle returns, wallet management, and admin tools. Integrated MongoDB and real-time features for fast user rewards.",
    tech: [SiNodedotjs, SiExpress, SiMongodb, SiJavascript],
    demo: "https://danx06-lab.github.io/botalsepaisa/",
    code: "https://danx06-lab.github.io/botalsepaisa/"
  },
  {
    title: "CMS Platform",
    description: "Developed a CMS with all essential featuresA full-featured CMS with user authentication, article management, custom pages, and profile customization. Built with Laravel for robust backend logic and Bootstrap for a clean, responsive interface.",
    tech: [SiPhp, SiLaravel, SiBootstrap],
    demo: "#",
    code: "#"
  },
]

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
  })
}

const Projects = () => (
  <section className="flex flex-col items-center justify-center py-20 min-h-[60vh] mt-20">
    <h2 className="mb-12 text-center text-5xl font-bold">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants}
          whileHover={{
            y: -10,
            scale: 1.03,
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)"
          }}
          className="bg-white/90 dark:bg-stone-900 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-all"
        >
          <h3 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-tight">
            {project.title}
          </h3>
          <p className="mb-5 px-4 py-3 rounded-lg bg-stone-100/70 dark:bg-stone-800/60 text-stone-700 dark:text-stone-200 text-center shadow">
            {project.description}
          </p>
          <div className="flex gap-3 mb-4">
            {project.tech.map((TechIcon, idx) => (
              <TechIcon key={idx} className="text-2xl" />
            ))}
          </div>
          <div className="flex gap-4">
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow hover:scale-105 transition-all">
              Live Demo
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Projects