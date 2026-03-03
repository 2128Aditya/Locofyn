import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load theme
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode toggle
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-sm"
          : "bg-transparent dark:bg-white/5"
      }`}
    >
      <div className="w-full px-6 h-[70px] flex items-center justify-between">

        {/* TEXT LOGO */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-slate-900 dark:text-white">
          Loco<span className="text-orange-500">fyn</span>
        </Link>

        {/* CENTER MENU */}
        <div className="hidden md:flex gap-12 items-center font-bold text-slate-800 dark:text-gray-200">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <a href="/#services" className="hover:text-orange-500 transition">Services</a>
          <a href="/#work" className="hover:text-orange-500 transition">Work</a>
          <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
          <a href="/#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">

          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-12 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-white/10 border border-slate-200 dark:border-white/20 hover:bg-white dark:hover:bg-white/20 transition"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* CTA */}
          <a
            href="https://wa.me/918052269388?text=Hi%20Locofyn,%20I%20want%20to%20build%20a%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white px-7 py-2.5 rounded-xl font-bold transition shadow-md hover:shadow-orange-500/30"
          >
            Get Website
          </a>

          {/* MOBILE MENU BTN */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-slate-900 dark:text-white"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white/95 dark:bg-black/90 backdrop-blur-xl px-6 pb-6 flex flex-col gap-4 text-slate-900 dark:text-white"
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="/#work" onClick={() => setMenuOpen(false)}>Work</a>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          {/* Mobile CTA */}
          <a
            href="https://wa.me/918052269388?text=Hi%20Locofyn,%20I%20want%20to%20build%20a%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white py-3 rounded-lg mt-2 text-center"
          >
            Get Website
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;