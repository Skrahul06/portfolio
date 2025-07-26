import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.3,
      when: "beforeChildren"
    }
  },
  exit: { 
    opacity: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1],
      when: "afterChildren"
    }
  }
};

const dotVariants = {
  hidden: { 
    y: '0%',
    opacity: 0.6
  },
  visible: (i) => ({
    y: ['0%', '-80%', '0%'],
    opacity: [0.6, 1, 0.6],
    transition: { 
      duration: 1.2,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.15
    }
  }),
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};

const Loading = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Adjust timing to match your loading duration

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-white dark:bg-stone-900 z-50 flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="relative w-32 h-32 flex items-center justify-center mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100 dark:border-stone-800"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-blue-600 dark:border-blue-400 animate-spin"></div>
        <motion.span 
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          {progress}%
        </motion.span>
      </div>
      
      <div className="flex items-center justify-center space-x-2 mb-6">
        {[...Array(3)].map((_, i) => (
          <motion.span
            key={i}
            className="w-3 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
            custom={i}
            variants={dotVariants}
          />
        ))}
      </div>
      
      <motion.div 
        className="w-48 h-1 bg-stone-200 dark:bg-stone-800 rounded-full overflow-hidden mb-4"
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: 192 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <motion.div 
          className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        />
      </motion.div>
      
      <motion.p 
        className="text-sm font-medium text-stone-600 dark:text-stone-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Loading your experience...
      </motion.p>
    </motion.div>
  );
};

export default Loading;
