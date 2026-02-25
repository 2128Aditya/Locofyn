import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div className="font-[Inter]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="bg"
          className="absolute w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Grow Your Business With{" "}
            <span className="text-orange-400">Locafyn</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-200"
          >
            We create stunning websites for local businesses that bring more customers and growth. contact us for website making.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition shadow-lg"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
            >
              View Work
            </motion.button>
          </motion.div>

          {/* Search Box / Glass Card */}
          <div className="mt-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">

            <input
              type="text"
              placeholder="Enter your business type..."
              className="bg-transparent outline-none text-white placeholder-gray-300 flex-1 px-4"
            />

            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg">
              Get Website
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;