import { motion } from 'framer-motion'
import { CONTACT } from '../../constants'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      staggerChildren: 0.1,
      ease: 'easeOut' 
    } 
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const Contact = () => {
  return (
    <motion.section 
      className="py-16 border-t border-stone-200 dark:border-stone-700"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-medium text-center mb-8"
        variants={itemVariants}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div 
        className="text-center space-y-4 text-stone-600 dark:text-stone-300"
        variants={containerVariants}
      >
        <motion.p variants={itemVariants}>
          {CONTACT.address}
        </motion.p>
        
        <motion.a 
          href={`mailto:${CONTACT.email}`}
          className="inline-block text-blue-600 dark:text-blue-400 hover:underline transition-colors"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.section>
  )
}

export default Contact
