import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Hero = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center text-center min-h-[60vh] pb-4 lg:mb-36'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-8xl'>Sk Rahul</motion.h2>
      <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tighter text-transparent'>Full Stack Developer</motion.span>
      <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter'>
        I’m a full stack developer who loves to turn coffee and code into pixel-perfect experiences! From crafting slick UIs with React, Next.js, and Tailwind CSS, to building powerful APIs with Node.js and Express, I thrive on making the web fun and functional. Databases! I speak fluent MongoDB, MySQL, and PostgreSQL. I’m always up for a challenge—whether it’s deploying with Docker and AWS, or wiring up real-time magic with Socket.io and GraphQL. Let’s team up and build something unforgettable!
      </motion.p>
      <motion.a
        variants={childVariants}
        href='/SK RAHUL.docx'
        target='_blank'
        rel="noopener noreferrer"
        download
        className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'
      >
        Download Resume
      </motion.a>
    </motion.div>
  )
}

export default Hero