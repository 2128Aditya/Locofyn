import { motion } from "framer-motion";
import myPhoto from "../assets/me.jpeg";
const team = [
  {
    name: "Aditya Singh",
    role: "Founder & Full Stack Developer",
    img: myPhoto, 
    github: "https://github.com/2128Aditya",
    linkedin: "https://www.linkedin.com/in/aaditya212817",
    portfolio: "#",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-[#FAF7FF] px-6 py-24">

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Meet Our Core Team 🚀
        </h1>
        <p className="text-gray-500 mt-4">
          The minds behind Locafyn
        </p>
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        {team.map((member, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative w-[320px] h-105 rounded-3xl overflow-hidden shadow-xl group"
          >

            {/* Image Full */}
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay Dark */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

            {/* Bottom Box */}
            <div className="absolute bottom-0 w-full p-5 bg-white/90 backdrop-blur-md rounded-t-3xl transition-all duration-500 group-hover:translate-y-[-10px]">

              <h3 className="text-lg font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="text-purple-600 text-sm font-medium">
                {member.role}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4 flex-wrap">

                <a
                  href={member.portfolio}
                  target="_blank"
                  className="text-xs px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Portfolio
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  className="text-xs px-3 py-1 bg-gray-900 text-white rounded-lg hover:bg-black transition"
                >
                  GitHub
                </a>

                <a
                  href={member.linkedin}
                  target="_blank"
                  className="text-xs px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Team;