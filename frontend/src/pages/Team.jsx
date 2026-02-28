import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`${API}/api/team`);
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeam();
  }, []);

  const fixURL = (url) => {
    if (!url) return "";
    if (!url.startsWith("http")) return "https://" + url;
    return url;
  };

  return (
    <div className="min-h-screen bg-[#FAF7FF] px-6 py-24">

      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Meet Our Core Team 🚀
        </h1>
        <p className="text-gray-500 mt-4">
          The minds behind Locafyn
        </p>
      </div>

      <div className="flex justify-center flex-wrap gap-10">
        {team.map((member) => (
          <motion.div
            key={member._id}
            whileHover={{ scale: 1.05 }}
            className="relative w-[320px] h-[420px] rounded-3xl overflow-hidden shadow-xl group"
          >

            {/* IMAGE */}
            <img
              src={member.image || "/fallback.jpg"}
              onError={(e) => (e.target.src = "/fallback.jpg")}
              alt={member.name}
              className="w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>

            {/* INFO */}
            <div className="absolute bottom-0 w-full p-5 bg-white/90 rounded-t-3xl">

              <h3 className="font-bold text-lg">
                {member.name}
              </h3>

              <p className="text-purple-600 text-sm">
                {member.role}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">

                {member.portfolio && (
                  <a href={fixURL(member.portfolio)} target="_blank"
                    className="text-xs px-3 py-1 bg-purple-600 text-white rounded">
                    Portfolio
                  </a>
                )}

                {member.github && (
                  <a href={fixURL(member.github)} target="_blank"
                    className="text-xs px-3 py-1 bg-black text-white rounded">
                    GitHub
                  </a>
                )}

                {member.linkedin && (
                  <a href={fixURL(member.linkedin)} target="_blank"
                    className="text-xs px-3 py-1 bg-blue-600 text-white rounded">
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