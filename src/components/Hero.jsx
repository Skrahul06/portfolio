import React from 'react';
import { motion } from 'framer-motion';

// Split text into words
const name = "Sk Rahul".split(" ");
const title = "Full Stack Developer".split(" ");

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { 
      staggerChildren: 0.08, 
      delayChildren: 0.04 * i,
    },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          className="mb-6"
          variants={container}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center overflow-hidden">
            {name.map((word, index) => (
              <motion.span
                key={index}
                className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mr-2 ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}
                variants={child}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1,
                }}
              >
                {word}{' '}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8"
          variants={container}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center overflow-hidden">
            {title.map((word, index) => (
              <motion.span
                key={index}
                className={`text-xl sm:text-2xl md:text-3xl font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mr-2 ${
                  index % 2 === 0 ? 'text-right' : 'text-left'
                }`}
                variants={child}
                initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1 + 0.3, // Slight delay after name animation
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p 
          className="text-stone-300 text-lg sm:text-xl max-w-3xl mx-auto mb-10 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          I'm a full stack developer who loves to turn coffee and code into pixel-perfect experiences! 
          From crafting slick UIs with React, Next.js, and Tailwind CSS, to building powerful APIs with 
          Node.js and Express, I thrive on making the web fun and functional. Databases! I speak fluent 
          MongoDB, MySQL, and PostgreSQL. I’m always up for a challenge—whether it’s deploying with 
          Docker and AWS, or wiring up real-time magic with Socket.io and GraphQL. Let’s team up and 
          build something unforgettable!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="/SK RAHUL.docx"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-full px-8 py-3 text-sm hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;