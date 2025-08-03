import React from 'react'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaAws } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb, SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap, SiExpress, SiGraphql, SiSocketdotio, SiMysql, SiFirebase, SiVercel, SiNetlify } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { motion } from 'framer-motion'

const techIcons = [
  { Icon: FaHtml5, color: 'text-orange-500', delay: 0 },
  { Icon: FaCss3Alt, color: 'text-blue-500', delay: 0.1 },
  { Icon: SiJavascript, color: 'text-yellow-400', delay: 0.2 },
  { Icon: SiTypescript, color: 'text-blue-400', delay: 0.3 },
  { Icon: RiReactjsLine, color: 'text-cyan-400', delay: 0.4 },
  { Icon: TbBrandNextjs, color: 'text-white', delay: 0.5 },
  { Icon: SiTailwindcss, color: 'text-cyan-500', delay: 0.6 },
  { Icon: SiBootstrap, color: 'text-purple-700', delay: 0.7 },
  { Icon: FaNodeJs, color: 'text-green-700', delay: 0.8 },
  { Icon: SiExpress, color: 'text-gray-700 dark:text-white', delay: 0.9 },
  { Icon: SiGraphql, color: 'text-pink-500', delay: 1.0 },
  { Icon: SiSocketdotio, color: 'text-gray-800', delay: 1.1 },
  { Icon: SiMysql, color: 'text-blue-600', delay: 1.2 },
  { Icon: BiLogoPostgresql, color: 'text-sky-600', delay: 1.3 },
  { Icon: SiMongodb, color: 'text-green-500', delay: 1.4 },
  { Icon: SiFirebase, color: 'text-yellow-500', delay: 1.5 },
  { Icon: FaDocker, color: 'text-blue-400', delay: 1.6 },
  { Icon: FaGitAlt, color: 'text-orange-600', delay: 1.7 },
  { Icon: FaGithub, color: 'text-white', delay: 1.8 },
  { Icon: SiVercel, color: 'text-white', delay: 1.9 },
  { Icon: SiNetlify, color: 'text-blue-400', delay: 2.0 },
  { Icon: FaAws, color: 'text-yellow-700', delay: 2.1 },
]

const Technologies = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center min-h-[40vh] mt-65' 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className='my-20 text-center text-5xl' 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
      >
        Technologies
      </motion.h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        {techIcons.map(({ Icon, color, delay }, idx) => (
          <motion.div
            key={idx}
            className={`p-4 ${color}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: [0, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Icon className='text-7xl' />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Technologies
