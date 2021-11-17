import { motion, useTransform, useViewportScroll } from 'framer-motion';
import SlideUpWhenVisible from './FadeInWhenVisible';

export default function ScrollWithReveal({
  children,
  inputRange = [0.1, 0.15],
  outputRange = [1, 1.5],
}) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <SlideUpWhenVisible>
      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
          }}
        />
        {children}
      </motion.div>
    </SlideUpWhenVisible>
  );
}
