import { motion, useAnimation } from 'framer-motion';

export default function StaggerChild({ children, ...rest }) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        type: 'spring',
        damping: 12,
        stiffness: 200,
      }}
    >
      {children.map((childrenElement, rowInx) => (
        <motion.span key={rowInx} variants={item}>
          {childrenElement}
        </motion.span>
      ))}
    </motion.div>
  );
}
