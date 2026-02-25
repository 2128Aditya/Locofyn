import { motion } from "framer-motion";

const Services = () => {
  const data = [
    {
      title: "Website Development",
      desc: "We create high-performance, responsive websites tailored to your business goals. From landing pages to full-scale platforms, we ensure speed, SEO optimization and a seamless user experience that converts visitors into customers.",
      icon: "🌐",
    },
    {
      title: "App Development",
      desc: "Custom Android & iOS applications built with modern technologies. We focus on performance, clean UI and scalability to deliver smooth and engaging mobile experiences for your users.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      desc: "We design intuitive interfaces that enhance user engagement and usability. Our approach combines creativity with user psychology to deliver visually appealing and highly functional designs.",
      icon: "🎨",
    },
    {
      title: "Branding & Identity",
      desc: "Build a strong brand with unique logos, color systems and visual identity. We help businesses stand out with memorable and impactful branding strategies.",
      icon: "✨",
    },
    {
      title: "SEO Optimization",
      desc: "Improve your search rankings and online visibility with advanced SEO strategies. We optimize your website for performance, keywords and long-term growth.",
      icon: "🚀",
    },
    {
      title: "Social Media Marketing",
      desc: "Grow your audience and increase engagement through targeted campaigns, content strategy and platform optimization across social channels.",
      icon: "📣",
    },
    {
      title: "Data Analytics",
      desc: "Turn complex data into actionable insights. We help you understand user behavior, trends and performance metrics to make smarter business decisions.",
      icon: "📊",
    },
    {
      title: "ERP Solutions",
      desc: "Streamline your business operations with custom ERP systems. Automate workflows, manage resources efficiently and gain real-time insights.",
      icon: "⚙️",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#fab4b4] to-[#fab4b4] overflow-hidden px-6">

      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Our{" "}
          <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <p className="text-gray-500 mt-5">
          We provide complete digital solutions to help your business grow efficiently and stand out online.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6 mt-20"
      >
        {data.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -12, scale: 1.04 }}
            className="group relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

            {/* Card */}
            <div className="relative bg-[#1e293b] p-8 rounded-3xl border border-white/10 shadow-lg group-hover:shadow-2xl transition-all duration-300">

              {/* Icon */}
              <div className="text-4xl mb-5 group-hover:scale-110 transition">
                {itemData.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {itemData.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                {itemData.desc}
              </p>

              {/* Divider */}
              <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-purple-400 to-pink-400 mt-6 transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Services;