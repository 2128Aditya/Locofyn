import { useEffect, useState } from "react";

const Admin = () => {
  const [active, setActive] = useState("business");

  // BUSINESS STATE
  const [form, setForm] = useState({
    name: "",
    description: "",
    whatsapp: "",
    github: "",
    live: "",
  });
  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);

  // TEAM STATE
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

  // FETCH BUSINESS
  const fetchBusiness = () => {
    fetch("http://localhost:5000/api/business")
      .then((res) => res.json())
      .then((data) => setList(data));
  };

  // FETCH TEAM
  const fetchTeam = () => {
    fetch("http://localhost:5000/api/team")
      .then((res) => res.json())
      .then((data) => setTeamList(data));
  };

  const fixURL = (url) => {
    if (!url) return "";
    if (!url.startsWith("http")) return "https://" + url;
    return url;
  };

  // ADD BUSINESS
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", form.name);
    data.append("description", form.description);
    data.append("whatsapp", form.whatsapp);
    data.append("github", fixURL(form.github));
    data.append("live", fixURL(form.live));
    data.append("image", image);

    const res = await fetch("http://localhost:5000/api/business/add", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (result.success) {
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
  };

  // DELETE BUSINESS
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/business/${id}`, {
      method: "DELETE",
    });
    fetchBusiness();
  };

  // ADD TEAM
  const handleTeamSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", teamForm.name);
    data.append("role", teamForm.role);
    data.append("github", fixURL(teamForm.github));
    data.append("linkedin", fixURL(teamForm.linkedin));
    data.append("portfolio", fixURL(teamForm.portfolio));
    data.append("image", teamImage);

    const res = await fetch("http://localhost:5000/api/team/add", {
      method: "POST",
      body: data,
    });

    const result = await res.json();

    if (result.success) {
      alert("Team member added 🔥");
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
  };

  // DELETE TEAM
  const deleteTeam = async (id) => {
    await fetch(`http://localhost:5000/api/team/${id}`, {
      method: "DELETE",
    });
    fetchTeam();
  };

  return (
    <div className="flex min-h-screen bg-[#FAF7FF]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-[#E9D5FF] p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-purple-600 mb-10">
          Locafyn Admin
        </h2>

        <nav className="space-y-4 text-gray-600">
          <p
            onClick={() => setActive("business")}
            className={`cursor-pointer ${active === "business" && "text-purple-600 font-semibold"}`}
          >
            Businesses
          </p>

          <p
            onClick={() => setActive("team")}
            className={`cursor-pointer ${active === "team" && "text-purple-600 font-semibold"}`}
          >
            Team
          </p>
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 p-6 md:p-10">

        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-8">
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

        {/* BUSINESS SECTION */}
        {active === "business" && (
          <div className="grid lg:grid-cols-2 gap-10">

            {/* FORM */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h2 className="text-lg font-semibold mb-4">
                Add New Business
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">

                <input name="name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Name"
                  className="w-full p-3 border rounded-lg"
                />

                <textarea name="description" value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Description"
                  className="w-full p-3 border rounded-lg"
                />

                <input name="whatsapp" value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  placeholder="WhatsApp"
                  className="w-full p-3 border rounded-lg"
                />

                <input name="github" value={form.github}
                  onChange={(e) => setForm({ ...form, github: e.target.value })}
                  placeholder="GitHub"
                  className="w-full p-3 border rounded-lg"
                />

                <input name="live" value={form.live}
                  onChange={(e) => setForm({ ...form, live: e.target.value })}
                  placeholder="Live"
                  className="w-full p-3 border rounded-lg"
                />

                <input type="file" onChange={(e) => setImage(e.target.files[0])} />

                <button className="w-full bg-purple-600 text-white py-3 rounded-lg">
                  Add Business
                </button>

              </form>
            </div>

            {/* LIST */}
            <div>
              <h2 className="text-lg font-semibold mb-4">
                All Businesses
              </h2>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

                {list.map((item) => (
                  <div key={item._id}
                    className="bg-white p-4 rounded-xl shadow border flex justify-between items-center">

                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-3 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>
                ))}

              </div>
            </div>

          </div>
        )}

        {/* TEAM SECTION */}
        {active === "team" && (
          <div className="grid lg:grid-cols-2 gap-10">

            {/* FORM */}
            <div className="bg-white p-6 rounded-xl shadow border">
              <h2 className="text-lg font-semibold mb-4">
                Add Team Member
              </h2>

              <form onSubmit={handleTeamSubmit} className="space-y-4">

                <input placeholder="Name"
                  onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                  className="w-full p-3 border rounded-lg"
                />

                <input placeholder="Role"
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

                <input placeholder="Portfolio"
                  onChange={(e) => setTeamForm({ ...teamForm, portfolio: e.target.value })}
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
            <div>
              <h2 className="text-lg font-semibold mb-4">
                All Team Members
              </h2>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">

                {teamList.map((item) => (
                  <div key={item._id}
                    className="bg-white p-4 rounded-xl shadow border flex justify-between items-center">

                    <div className="flex items-center gap-3">
                      <img src={item.image}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
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

          </div>
        )}

      </div>
    </div>
  );
};

export default Admin;