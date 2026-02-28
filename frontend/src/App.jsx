import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Team from "./pages/Team";


const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element && element.scrollIntoView) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} /> {/* ✅ MAIN FIX */}
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;