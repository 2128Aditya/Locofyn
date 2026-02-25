import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#020617] z-50 overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700 opacity-30 blur-[120px] rounded-full animate-pulse"></div>

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-10 py-8 flex flex-col items-center gap-6 shadow-2xl"
      >

        {/* Animated Logo Circle */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 rounded-full border-4 border-purple-500 border-t-transparent"
        ></motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white text-2xl font-bold tracking-wide"
        >
          Locafyn
        </motion.h1>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-300 text-sm"
        >
          Connecting Local Businesses...
        </motion.p>

        {/* Dots Animation */}
        <div className="flex gap-2 mt-2">
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-150"></span>
          <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></span>
        </div>

      </motion.div>
    </div>
  );
};

export default Loader;