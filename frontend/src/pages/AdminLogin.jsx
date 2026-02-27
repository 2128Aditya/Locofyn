import { useState } from "react";

const AdminLogin = () => {
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Login Success 🔥");
      localStorage.setItem("admin", "true");
      window.location.href = "/admin";
    } else {
      alert("Wrong ID Password ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white">
      <form onSubmit={handleLogin} className="bg-white/10 p-8 rounded-xl">
        
        <h2 className="text-2xl mb-4">Admin Login</h2>

        <input
          placeholder="Username"
          className="w-full p-2 mb-3 text-black"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 text-black"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="bg-purple-600 w-full p-2 rounded">
          Login
        </button>

      </form>
    </div>
  );
};

export default AdminLogin;