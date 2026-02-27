import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: "photo-1522335789203-aabd1fc54bc9",
      title: "Salon Website",
      desc: "Modern responsive website for a local salon with booking system.",
      live: "#",
      code: "#",
    },
    {
      id: "photo-1558611848-73f7eb4001a1",
      title: "Gym Landing Page",
      desc: "High-converting landing page designed for fitness businesses.",
      live: "#",
      code: "#",
    },
    {
      id: "photo-1504674900247-0877df9cc836",
      title: "Restaurant Website",
      desc: "Elegant restaurant website with menu and online ordering.",
      live: "#",
      code: "#",
    },
    {
      id: "photo-1492724441997-5dc865305da7",
      title: "Portfolio Website",
      desc: "Clean and professional portfolio design for developers.",
      live: "#",
      code: "#",
    },
    {
      id: "photo-1460925895917-afdab827c52f",
      title: "Business Dashboard",
      desc: "Analytics dashboard with modern UI and data visualization.",
      live: "#",
      code: "#",
    },
    {
      id: "photo-1504384308090-c894fdcc538d",
      title: "Startup Website",
      desc: "Complete startup website with modern UI and animations.",
      live: "#",
      code: "#",
    },
  ];

  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
          Our Recent{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Explore our portfolio of successful projects where we've helped businesses establish a dominant digital presence.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mt-24 relative z-10">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">

              <div className="relative overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=800&q=80`}
                  alt={item.title}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a
                    href={item.live}
                    className="bg-white text-black px-6 py-2.5 rounded-xl font-bold hover:bg-gray-200 transition active:scale-95"
                  >
                    Live Demo
                  </a>
                  <a
                    href={item.code}
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition active:scale-95"
                  >
                    Details
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider">
                  <span>View Case Study</span>
                  <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;