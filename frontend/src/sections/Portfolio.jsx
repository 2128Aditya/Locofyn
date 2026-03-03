import { motion } from "framer-motion";
import project1 from "../assets/pp.png"; 

const Portfolio = () => {

  const projects = [
    {
      id: 1,
      name: "UTKARSH 2026",
      description: "BBD UNIVERSITY ANNUAL FEST WEBSITE.",
      image: project1,
      live: "https://bbd-utkarsh.org"
    }
  ];

  const fixURL = (url) => {
    if (!url) return "#";
    if (!url.startsWith("http")) {
      return "https://" + url;
    }
    return url;
  };

  return (
    <section
      id="work"
      className="relative py-32 px-6 overflow-hidden 
      bg-white dark:bg-[#020617] 
      transition-colors duration-500"
    >

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
          Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Here are some projects We’ve built with passion and creativity 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mt-24 relative z-10">

        {projects.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -10 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-3xl 
            bg-slate-100 dark:bg-white/5 
            border border-slate-200 dark:border-white/10 
            shadow-lg dark:shadow-none 
            transition-all duration-500 
            group-hover:shadow-2xl group-hover:shadow-blue-500/10">

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">

                  <a
                    href={fixURL(item.live)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    Visit Website
                  </a>

                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>

                <p className="text-slate-600 dark:text-gray-400 text-sm mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom */}
                <div className="mt-6">
                  <a
                    href={fixURL(item.live)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold text-sm"
                  >
                    Visit Website →
                  </a>
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