import { motion } from "framer-motion";
import aboutImg from "../assets/about.svg";

const About = () => {
  return (
        <section className="relative py-28 bg-linear-to-br from-[#fab4b4] via-[#fab4b4] to-[#fab4b4] overflow-hidden px-6">
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-62.5 h-62.5 bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-62.5 h-62.5 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About{" "}
            <span className="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Locafyn
            </span>
          </h2>
<p className="text-black font-medium mt-6 leading-relaxed">
  Locafyn is a modern digital solutions platform dedicated to helping local businesses
  grow in the digital world. We specialize in building high-performance websites,
  scalable mobile applications, and powerful digital systems tailored to your needs.
</p>

<p className="text-black font-medium mt-4 leading-relaxed">
  Our focus is not just on design, but on delivering real results. We combine strategy,
  creativity, and technology to create solutions that improve visibility, increase
  engagement, and drive business growth.
</p>

<p className="text-black font-medium mt-4 leading-relaxed">
  Whether you are a startup or an established business, Locafyn helps you build a strong
  digital presence and scale efficiently in today’s competitive environment.
</p>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">50+</h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">30+</h3>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">5+</h3>
              <p className="text-gray-600 text-sm">Industries Served</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="about"
            className="w-[90%] max-w-md drop-shadow-2xl hover:scale-105 transition duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;