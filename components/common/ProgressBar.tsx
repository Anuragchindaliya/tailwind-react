import { useScroll, useSpring, motion } from "framer-motion";
import React from "react";
const ProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="progress-bar fixed bottom-0 left-0 right-0 h-1 origin-[0%] bg-primary-600"
      style={{ scaleX }}
    />
  );
};

export default ProgressBar;
