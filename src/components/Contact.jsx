import { motion } from 'framer-motion'
import {CONTACT} from '../../constants'

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const Contact = () => {
  return (
    <motion.div className="border-t border-stone-900 pb-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <motion.h2 className="my-10 text-center text-4xl " variants={containerVariants}>
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
          <motion.p className='my-4' variants={containerVariants}>
          {CONTACT.address}
          </motion.p>
          
         <motion.a href ="a" className='border-b' variants={containerVariants}>
          {CONTACT.email}
         </motion.a>
      </div>
    </motion.div>
  )
}

export default Contact
