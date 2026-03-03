import { motion } from "framer-motion";
import me from "../assets/me.jpeg";
const Team = () => {

  // 🔥 STATIC TEAM DATA
  const team = [
    {
      _id: "1",
      name: "Aditya Singh",
      role: "Founder & Full Stack Developer",
      image: me,
      github: "https://github.com/2128Aditya",
      linkedin: "https://www.linkedin.com/in/aaditya212817",
      portfolio: "https://aditya-portfolio-v2-aoz4.vercel.app/",
    },
    {
      _id: "2",
      name: "Aditya Singh",
      role: "Co-Founder & Frontend Developer",
      image: Ravi,
      github: "https://github.com/Adityasingh-an",
      linkedin: "https://www.linkedin.com/in/aditya-singh-a3173a27a/",
      portfolio: "https://github.com/Adityasingh-an",
    }
  ];

  const fixURL = (url) => {
    if (!url) return "";
    if (!url.startsWith("http")) return "https://" + url;
    return url;
  };

  return (
    <div className="min-h-screen bg-[#FAF7FF] px-6 py-24">

      {/* HEADING */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Meet Our Core Team 🚀
        </h1>
        <p className="text-gray-500 mt-4">
          The minds behind Locofyn
        </p>
      </div>

      {/* TEAM CARDS */}
      <div className="flex justify-center flex-wrap gap-10">
        {team.map((member) => (
          <motion.div
            key={member._id}
            whileHover={{ scale: 1.05 }}
            className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden shadow-xl group"
          >

            {/* IMAGE */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

            {/* INFO */}
            <div className="absolute bottom-0 w-full p-5 bg-white/90 backdrop-blur-md rounded-t-3xl transition-all duration-500 group-hover:-translate-y-2">

              <h3 className="text-lg font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="text-purple-600 text-sm font-medium">
                {member.role}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4 flex-wrap">

                {member.portfolio && (
                  <a
                    href={fixURL(member.portfolio)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    Portfolio
                  </a>
                )}

                {member.github && (
                  <a
                    href={fixURL(member.github)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 bg-gray-900 text-white rounded-lg hover:bg-black transition"
                  >
                    GitHub
                  </a>
                )}

                {member.linkedin && (
                  <a
                    href={fixURL(member.linkedin)}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    LinkedIn
                  </a>
                )}

              </div>

            </div>

          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Team;