import { useEffect, useState } from "react";

const Admin = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    whatsapp: "",
    github: "",
    live: "",
  });

  const [image, setImage] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      window.location.href = "/login";
    }
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5000/api/business")
      .then(res => res.json())
      .then(data => setList(data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 URL FIX FUNCTION
  const fixURL = (url) => {
    if (!url) return "";
    if (!url.startsWith("http")) {
      return "https://" + url;
    }
    return url;
  };

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
      alert("Added 🔥");
      setForm({
        name: "",
        description: "",
        whatsapp: "",
        github: "",
        live: "",
      });
      setImage(null);
      fetchData();
    }
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/business/${id}`, {
      method: "DELETE",
    });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white p-10">

      <h1 className="text-3xl font-bold mb-6">Admin Panel 🚀</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-md">

        <input name="name" value={form.name} placeholder="Name" onChange={handleChange} className="p-2 bg-white/10" />
        <input name="description" value={form.description} placeholder="Description" onChange={handleChange} className="p-2 bg-white/10" />
        <input name="whatsapp" value={form.whatsapp} placeholder="WhatsApp" onChange={handleChange} className="p-2 bg-white/10" />
        <input name="github" value={form.github} placeholder="GitHub Link" onChange={handleChange} className="p-2 bg-white/10" />
        <input name="live" value={form.live} placeholder="Live Website Link" onChange={handleChange} className="p-2 bg-white/10" />

        <input type="file" onChange={(e) => setImage(e.target.files[0])} />

        <button className="bg-purple-600 p-2 rounded">Add</button>

      </form>

      {/* LIST */}
      <div className="mt-10 grid gap-4">

        {list.map(item => (
          <div key={item._id} className="bg-white/10 p-4 flex justify-between">

            <div>
              <p className="font-bold">{item.name}</p>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>

            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 px-3 rounded"
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Admin;