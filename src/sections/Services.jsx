import { motion } from "framer-motion";

const Services = () => {
  const data = [
    {
      title: "Business Website",
      desc: "Fast, responsive & conversion-focused websites designed to grow your business.",
      icon: "🌐",
    },
    {
      title: "Portfolio",
      desc: "Showcase your work with a clean, modern and highly professional portfolio.",
      icon: "💼",
    },
    {
      title: "Lead Generation",
      desc: "Turn your visitors into real customers with smart UI & conversion strategies.",
      icon: "📈",
    },
  ];

  // container animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // card animation
  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#4c4d4e] via-[#454649] to-[#f934a1]">
      
      {/* subtle background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          What We{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Do
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 mt-5"
        >
          We help local businesses grow online with powerful, modern and scalable digital solutions.
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6 mt-20"
      >
        {data.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -12, scale: 1.04 }}
            className="group relative"
          >
            {/* glow border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-md transition duration-500"></div>

            {/* card */}
            <div className="relative bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/40 shadow-md group-hover:shadow-2xl transition-all duration-300">
              
              {/* icon */}
              <div className="text-4xl mb-5 transform group-hover:scale-110 transition">
                {itemData.icon}
              </div>

              {/* title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {itemData.title}
              </h3>

              {/* desc */}
              <p className="text-gray-500 mt-3 leading-relaxed">
                {itemData.desc}
              </p>

              {/* bottom line animation */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-6 transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;