import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#e1e5f2] to-[#f7ecd9] overflow-hidden text-center px-6">

      {/* Glow */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-orange-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Ready to Grow Your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            Business Online?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mt-6">
          Get a modern, high-converting website that helps you attract customers,
          increase sales and build a strong online presence.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          {/* Primary CTA */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition">
            🚀 Get Started
          </button>

          {/* Secondary CTA */}
          <button className="bg-white/70 backdrop-blur-md border border-white/40 px-8 py-3 rounded-xl font-semibold text-gray-900 hover:bg-white transition">
            View Pricing
          </button>

        </div>
      </motion.div>

    </section>
  );
};

export default CTA;