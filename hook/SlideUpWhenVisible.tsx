import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function SlideUpWhenVisible({
  children,
  threshold = 0.35,
  ...rest
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });
  const variants = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: 50, scale: 0.65 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{
        duration: 0.5,
        type: 'spring',
        damping: 12,
        stiffness: 200,
      }}
      variants={variants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
