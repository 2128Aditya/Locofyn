import { motion } from "framer-motion";

const Portfolio = ({ data = [] }) => {

  // 🔥 URL FIX FUNCTION
  const fixURL = (url) => {
    if (!url) return "#";
    if (!url.startsWith("http")) {
      return "https://" + url;
    }
    return url;
  };

  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
          Featured{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Businesses
          </span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Discover local businesses growing with Locafyn 🚀
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 mt-24 relative z-10">
        
        {data.length === 0 ? (
          <p className="text-center col-span-full text-gray-400">
            No businesses found
          </p>
        ) : (
          data.map((item) => (
            <motion.div
              key={item._id}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/10">

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[260px] object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay (ONLY Code + Visit) */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col gap-3 items-center justify-center backdrop-blur-sm">

                    {item.github && (
                      <a
                        href={fixURL(item.github)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 text-white px-5 py-2 rounded-xl font-semibold hover:bg-gray-900 transition"
                      >
                        Code
                      </a>
                    )}

                    {item.live && (
                      <a
                        href={fixURL(item.live)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
                      >
                        Visit
                      </a>
                    )}

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

                  {/* Bottom (ONLY Visit) */}
                  <div className="mt-6">
                    {item.live && (
                      <a
                        href={fixURL(item.live)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-semibold text-sm"
                      >
                        Visit →
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </motion.div>
          ))
        )}

      </div>

    </section>
  );
};

export default Portfolio;