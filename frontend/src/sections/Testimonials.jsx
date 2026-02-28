import { motion } from "framer-motion";

const Testimonials = () => {
  const data = [
    {
      name: "Rahul Sharma",
      role: "Salon Owner",
      text: "Locafyn built my salon website in just a few days. The design is clean, fast, and my customers love it.",
    },
    {
      name: "Amit Verma",
      role: "Gym Owner",
      text: "Very professional work. The website looks amazing and helped me attract more clients online.",
    },
    {
      name: "Sanjay Gupta",
      role: "Restaurant Owner",
      text: "After launching my website, I started getting more orders and inquiries. Highly recommended service!",
    },
  ];

  return (
    <section
      className="relative py-32 px-6 overflow-hidden 
      bg-slate-50 dark:bg-[#020617] 
      transition-colors duration-500"
    >
      {/* Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
          Client{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Don't just take our word for it. Hear from the entrepreneurs who have transformed their businesses with Locafyn.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-24 relative z-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glow hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            {/* Card */}
            <div className="relative h-full 
            bg-white dark:bg-white/5 
            backdrop-blur-sm p-10 rounded-3xl 
            border border-slate-200 dark:border-white/10 
            shadow-xl shadow-slate-200/50 dark:shadow-none 
            transition-all duration-300">

              {/* Quote */}
              <div className="text-5xl text-purple-600/20 dark:text-purple-400/20 absolute top-8 right-8">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-500 mb-6">
                {"★★★★★".split("").map((star, idx) => (
                  <span key={idx}>{star}</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-700 dark:text-gray-300 leading-relaxed mb-8 text-lg italic">
                “{item.text}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h3>

                  <p className="text-slate-500 dark:text-gray-400 text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;