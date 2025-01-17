import React from 'react';
import './Homepage.css';
import { AnimatePresence, motion } from 'framer-motion';

const headingArray = ['C', 'a', 'r', 'i', 'n', 'a', 'm', 'i'];

const Homepage = () => {
  return (
  <AnimatePresence mode='wait'>
    <motion.div
      className="Homepage"
      key="HomePage"
      exit={{
        x: 1000,
      }}
    >
      <motion.h1
        initial={{ y: 48, scale: 0.8, opacity: 0 }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 1.6, ease: 'easeInOut' },
        }}
        exit={{x : 100}}
      >
        {headingArray.map((letter, index) => (
          <motion.span
            key={index}
            whileHover={{
              scale: 1.2,
              transition: { type: 'spring', stiffness: 500, damping: 25 },
              color: '#379237',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, letterSpacing: '16px' }}
        animate={{
          opacity: 1,
          letterSpacing: '48px',
          transition: { duration: 1.2, delay: 0.6, ease: 'easeInOut' },
        }}
      >
        Studios
      </motion.p>
    </motion.div>
  </AnimatePresence>
  );
};

export default Homepage;
