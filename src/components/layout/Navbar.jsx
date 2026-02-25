import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle (FIXED ✅)
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-white/10 backdrop-blur-lg"
        }`}
    >
      {/* FULL WIDTH FIX (no max-width ❌) */}
      <div className="w-full px-6 py-4 flex items-center justify-between text-white">

        {/* LEFT EDGE LOGO */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          Loca<span className="text-orange-400">fyn</span>
        </h1>

        {/* CENTER MENU */}
        <div className="hidden md:flex gap-10 items-center font-medium">
          <a href="#" className="hover:text-orange-400 transition">Home</a>
          <a href="#" className="hover:text-orange-400 transition">Services</a>
          <a href="#" className="hover:text-orange-400 transition">Work</a>
          <a href="#" className="hover:text-orange-400 transition">Contact</a>
        </div>

        {/* RIGHT EDGE */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="bg-white/10 border border-white/20 px-3 py-2 rounded-lg backdrop-blur-md hover:bg-white/20 transition"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* CTA (RIGHT EDGE) */}
          <button className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg font-semibold shadow-lg transition">
            Get Website
          </button>

          {/* Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl px-6 pb-6 text-white flex flex-col gap-4"
        >
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Work</a>
          <a href="#">Contact</a>

          <button className="bg-orange-500 py-2 rounded-lg mt-2">
            Get Website
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;