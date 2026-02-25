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
    <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#fab4b4] to-[#fab4b4] overflow-hidden px-6">

      {/* Heading (CENTER FIX) */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Work
          </span>
        </h2>
        <p className="text-gray-500 mt-4">
          A glimpse of projects we’ve built to help businesses grow digitally.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mt-16">
        {projects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <div className="relative overflow-hidden rounded-2xl">

              <img
                src={`https://images.unsplash.com/${item.id}?auto=format&fit=crop&w=800&q=80`}
                alt={item.title}
                className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                <a
                  href={item.live}
                  className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition"
                >
                  View
                </a>

                <a
                  href={item.code}
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
                >
                  Code
                </a>

              </div>
            </div>

            <div className="mt-4 text-left">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Portfolio;