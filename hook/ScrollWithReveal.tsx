import { motion, useScroll, useTransform } from 'framer-motion';
import FadeInWhenVisible from './FadeInWhenVisible';

export default function ScrollWithReveal({
  children,
  inputRange = [0.1, 0.15],
  outputRange = [1, 1.5],
  delay = 0,
  ...rest
}) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <FadeInWhenVisible delay={delay}>
      <motion.div style={{ scale }}>
        <motion.div
          style={{
            scaleY: scrollYProgress,
            ...rest,
          }}
        />
        {children}
      </motion.div>
    </FadeInWhenVisible>
  );
}
