// import { SparklesCore } from "./sparkles";
import { SparklesCore } from "./Sparkles";
import { motion } from "framer-motion";
// import { TextGlow } from "./textGlow";
import { TextGlow } from "./TextGlow";

export function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
      <SparklesCore />
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <TextGlow>Welcome to Quiz Masalaa</TextGlow>
        <p className="py-6 text-xl">Your last-minute tuition platform</p>
        <button className="btn btn-primary animate-pulse transition duration-500 ease-in-out hover:scale-110">
          Explore Courses
        </button>
      </motion.div>
    </div>
  );
}
