import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function SparklesCore() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Ensure client-side rendering

  return (
    <motion.div
      animate={{
        x: [0, 10, -10, 10, -10],
        y: [0, 10, -10, 10, -10],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="w-full h-full bg-gradient-to-r from-pink-400 via-yellow-400 to-teal-400 opacity-50"></div>
    </motion.div>
  );
}
