import { motion } from "framer-motion";

const team = [
  {
    name: "Aditya Singh",
    role: "Full Stack Developer",
    img: "https://i.pravatar.cc/300?img=3",
    github: "https://github.com/2128Aditya",
    linkedin: "https://www.linkedin.com/in/aaditya212817",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-24">

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-20">
        Our Core Team 🚀
      </h1>

      {/* Card */}
      <div className="flex justify-center">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-xl p-8 text-center transition-all"
          >

            {/* Role Badge */}
            <div className="inline-block mb-6 px-5 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
              {member.role}
            </div>

            {/* Passport Image */}
            <div className="w-40 h-40 mx-auto mb-6">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover rounded-2xl border border-slate-200"
              />
            </div>

            {/* Name */}
            <h2 className="text-2xl font-bold text-slate-900">
              {member.name}
            </h2>

            {/* Social Buttons */}
            <div className="flex justify-center gap-4 mt-6">

              <a
                href={member.github}
                target="_blank"
                className="px-5 py-2 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition"
              >
                GitHub
              </a>

              <a
                href={member.linkedin}
                target="_blank"
                className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
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