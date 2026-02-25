import { motion } from "framer-motion";
import featureImg from "../assets/fwt.svg";  

const Feature = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#fab4b4] to-[#fab4b4] overflow-hidden px-6">

      {/* Glow */}
      <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT (SVG IMAGE) */}
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

        {/* RIGHT (TEXT) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Not Just a Website —{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              A Growth Tool 🚀
            </span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            At Locafyn, we don’t just create websites — we build powerful digital
            platforms designed to attract customers, improve engagement, and drive
            real business growth.
          </p>

          {/* Features List */}
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
                className="flex items-center gap-3 bg-white/60 backdrop-blur-md px-4 py-3 rounded-xl border border-white/30 shadow-sm"
              >
                <span className="text-green-500 text-lg">✔</span>
                <p className="text-gray-800">{item}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition">
            Get Your Website
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Feature;