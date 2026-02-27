import { motion } from "framer-motion";

const team = [
  {
    name: "Aditya Singh",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/300?img=3",
    github: "https://github.com/2128Aditya",
    linkedin: "https://www.linkedin.com/in/aaditya212817",
  },
  {
    name: "Aman Pandey",
    role: "Frontend Developer",
    img: "https://i.pravatar.cc/300?img=5",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Abhay Dubey",
    role: "Backend Developer",
    img: "https://i.pravatar.cc/300?img=7",
    github: "#",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-[#FAF7FF] px-6 py-24">

      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Our Core Team 🚀
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Meet the people building Locafyn
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all border border-[#E9D5FF]"
          >

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[220px] object-cover"
              />
            </div>

            {/* Info */}
            <div className="mt-5 text-center">
              <h3 className="text-xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="text-purple-600 text-sm font-medium mt-1">
                {member.role}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">

              <a
                href={member.github}
                target="_blank"
                className="px-4 py-2 bg-gray-900 text-white rounded-xl text-sm hover:bg-black transition"
              >
                GitHub
              </a>

              <a
                href={member.linkedin}
                target="_blank"
                className="px-4 py-2 bg-purple-600 text-white rounded-xl text-sm hover:bg-purple-700 transition"
              >
                LinkedIn
              </a>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Team;