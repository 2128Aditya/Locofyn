import { motion } from "framer-motion";
import featureImg from "../assets/fwt.svg";

const Feature = () => {
  return (
    <section
      className="relative py-28 px-6 overflow-hidden 
      bg-gradient-to-br 
      from-[#f9f4f4] via-[#ffffff] to-[#fafafa] 
      dark:from-[#0B0F19] dark:via-[#080C14] dark:to-[#05070D] 
      transition-colors duration-500"
    >
      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-400/20 dark:bg-purple-700/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-400/20 dark:bg-pink-700/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={featureImg}
            alt="feature"
            className="w-[90%] max-w-lg drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Not Just a Website —{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              A Growth Tool 🚀
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
            At Locafyn, we don’t just create websites — we build powerful digital
            platforms designed to attract customers, improve engagement, and drive
            real business growth.
          </p>

          {/* FEATURES */}
          <div className="mt-8 space-y-4">
            {[
              "Fully Responsive & Mobile Optimized",
              "Blazing Fast Loading Performance",
              "WhatsApp & Lead Integration",
              "Modern UI/UX with Conversion Focus",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8 }}
                className="flex items-center gap-3 
                bg-white/60 dark:bg-[#111827] 
                backdrop-blur-md px-4 py-3 rounded-xl 
                border border-white/30 dark:border-white/10 
                shadow-sm transition"
              >
                <span className="text-green-500 text-lg">✔</span>
                <p className="text-gray-800 dark:text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
            Get Your Website
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Feature;