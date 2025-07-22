import React from 'react'
import { EXPERIENCES } from '../../constants'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
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

const Experience = () => {
  return (
    <motion.div className='pb-4' variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.h2 className='my-20 text-center text-4xl' variants={childVariants}>Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience,index)=>(
            <motion.div key={index} className='mb-8 flex flex-wrap lg:justify-center' variants={childVariants}>
            <div className='w-full lg:w-1/4'>
            <p className='mb-2 text-sm text-stone-400'>
            {experience.year}
            </p>
            </div> 
           <div className='w-full max-w-xl lg:w-3/4'> 
           <h3 className='mb-2 font-semibold'>
            {experience.role} -{" "}
            <span className='text-sm text-stone-500 '>
                {experience.company}
            </span>
           </h3>
           <p className='mb-4 text-stone-400'>{experience.description}</p>
           {experience.technologies.map((tech,index)=>(
            <span className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300' key={index}>
            {tech}
            </span>
           ))}
           </div>
        </motion.div>  
        ))}
        </div>
    </motion.div>
  )
}

export default Experience
