import { Flex } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';

export default function StaggerChild({
  children,
  direction,
  delay = 0.3,
  ...rest
}) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: delay,
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
      viewport={{ once: true }}
      whileInView="visible"
      transition={{
        duration: 0.5,
        type: 'spring',
        damping: 12,
        stiffness: 200,
      }}
    >
      <Flex flexFlow={direction} {...rest}>
        {children.map((childrenElement, rowInx) => (
          <motion.span key={rowInx} variants={item}>
            {childrenElement}
          </motion.span>
        ))}
      </Flex>
    </motion.div>
  );
}
