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
    <section
      id="services"
      className="relative py-32 px-6 overflow-hidden 
      bg-slate-50 dark:bg-[#020617] 
      transition-colors duration-500"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 blur-[100px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white"
        >
          Our Premium{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Services
          </span>
        </motion.h2>

        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          We provide high-end digital solutions designed to elevate your brand and accelerate your business growth.
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-24 relative z-10"
      >
        {data.map((itemData, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Glow hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            {/* Card */}
            <div className="relative h-full 
            bg-white dark:bg-white/5 
            p-8 rounded-3xl 
            border border-slate-200 dark:border-white/10 
            shadow-xl shadow-slate-200/50 dark:shadow-none 
            group-hover:border-purple-500/50 
            transition-all duration-300 backdrop-blur-sm">

              {/* Icon */}
              <div className="w-16 h-16 bg-slate-100 dark:bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition">
                {itemData.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {itemData.title}
              </h3>

              {/* Desc */}
              <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                {itemData.desc}
              </p>

              {/* Line */}
              <div className="w-12 group-hover:w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-500"></div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;