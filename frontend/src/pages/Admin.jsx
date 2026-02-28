import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const Admin = () => {
  const [active, setActive] = useState("business");

  // ================= BUSINESS =================
  const [form, setForm] = useState({
    name: "",
    description: "",
    whatsapp: "",
    github: "",
    live: "",
  });
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);

  // ================= TEAM =================
  const [teamForm, setTeamForm] = useState({
    name: "",
    role: "",
    github: "",
    linkedin: "",
    portfolio: "",
  });
  const [teamImage, setTeamImage] = useState(null);
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      window.location.href = "/login";
    }
    fetchBusiness();
    fetchTeam();
  }, []);

  const fixURL = (url) => {
    if (!url) return "";
    if (!url.startsWith("http")) return "https://" + url;
    return url;
  };

  // ================= BUSINESS =================

  const fetchBusiness = async () => {
    try {
      const res = await fetch(`${API}/api/business`);
      const data = await res.json();
      setList(data);
    } catch {
      alert("❌ Failed to fetch business");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !image) {
      return alert("⚠️ Name & Image required");
    }

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("description", form.description);
      data.append("whatsapp", form.whatsapp);
      data.append("github", fixURL(form.github));
      data.append("live", fixURL(form.live));
      data.append("image", image);

      const res = await fetch(`${API}/api/business/add`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        alert("✅ Business Added");
        setForm({
          name: "",
          description: "",
          whatsapp: "",
          github: "",
          live: "",
        });
        setImage(null);
        fetchBusiness();
      }
    } catch {
      alert("❌ Failed to add business");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this business?")) return;

    await fetch(`${API}/api/business/${id}`, {
      method: "DELETE",
    });

    fetchBusiness();
  };

  // ================= TEAM =================

  const fetchTeam = async () => {
    try {
      const res = await fetch(`${API}/api/team`);
      const data = await res.json();
      setTeamList(data);
    } catch {
      alert("❌ Failed to fetch team");
    }
  };

  const handleTeamSubmit = async (e) => {
    e.preventDefault();

    if (!teamForm.name || !teamForm.role || !teamImage) {
      return alert("⚠️ Name, Role & Image required");
    }

    try {
      const data = new FormData();
      data.append("name", teamForm.name);
      data.append("role", teamForm.role);
      data.append("github", fixURL(teamForm.github));
      data.append("linkedin", fixURL(teamForm.linkedin));
      data.append("portfolio", fixURL(teamForm.portfolio));
      data.append("image", teamImage);

      const res = await fetch(`${API}/api/team/add`, {
        method: "POST",
        body: data,
      });

      const result = await res.json();

      if (result.success) {
        alert("🔥 Team member added");
        setTeamForm({
          name: "",
          role: "",
          github: "",
          linkedin: "",
          portfolio: "",
        });
        setTeamImage(null);
        fetchTeam();
      }
    } catch {
      alert("❌ Failed to add team member");
    }
  };

  const deleteTeam = async (id) => {
    if (!confirm("Delete this member?")) return;

    await fetch(`${API}/api/team/${id}`, {
      method: "DELETE",
    });

    fetchTeam();
  };

  return (
    <div className="flex min-h-screen bg-[#FAF7FF]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-purple-600 mb-10">
          Locafyn Admin
        </h2>

        <nav className="space-y-4">
          <p
            onClick={() => setActive("business")}
            className={`cursor-pointer ${active === "business" && "text-purple-600 font-bold"}`}
          >
            Businesses
          </p>

          <p
            onClick={() => setActive("team")}
            className={`cursor-pointer ${active === "team" && "text-purple-600 font-bold"}`}
          >
            Team
          </p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 p-6 md:p-10">

        {/* TOPBAR */}
        <div className="flex justify-between mb-8">
          <h1 className="text-2xl font-bold capitalize">{active}</h1>
          <button
            onClick={() => {
              localStorage.removeItem("admin");
              window.location.href = "/login";
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        {/* ================= TEAM ================= */}
        {active === "team" && (
          <div className="grid lg:grid-cols-2 gap-10">

            {/* FORM */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="mb-4 font-semibold">Add Member</h2>

              <form onSubmit={handleTeamSubmit} className="space-y-4">

                <input placeholder="Name"
                  value={teamForm.name}
                  onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                />

                <input placeholder="Role"
                  value={teamForm.role}
                  onChange={(e) => setTeamForm({ ...teamForm, role: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                />

                <input placeholder="GitHub"
                  onChange={(e) => setTeamForm({ ...teamForm, github: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                />

                <input placeholder="LinkedIn"
                  onChange={(e) => setTeamForm({ ...teamForm, linkedin: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                />

                <input type="file"
                  onChange={(e) => setTeamImage(e.target.files[0])}
                />

                <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
                  Add Member
                </button>

              </form>
            </div>

            {/* LIST */}
            <div className="space-y-4">
              {teamList.map((item) => (
                <div key={item._id}
                  className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      onError={(e) => e.target.src = "/fallback.jpg"}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteTeam(item._id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;