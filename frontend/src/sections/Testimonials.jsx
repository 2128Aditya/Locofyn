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
       <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#fab4b4] to-[#fab4b4] overflow-hidden px-6">
      {/* Heading */}
     <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Clients Say
          </span>
        </h2>
        <p className="text-gray-500 mt-4">
          Real feedback from businesses we’ve helped grow online.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mt-16">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white/60 backdrop-blur-xl p-8 rounded-2xl border border-white/30 shadow-md hover:shadow-2xl transition-all duration-300 text-left"
          >
            {/* Stars */}
            <div className="text-yellow-400 mb-4">★★★★★</div>

            {/* Text */}
            <p className="text-gray-700 leading-relaxed mb-6">
              “{item.text}”
            </p>

            {/* User */}
            <div>
              <h3 className="font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-500 text-sm">
                {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;