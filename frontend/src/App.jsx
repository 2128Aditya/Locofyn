import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Admin from "./pages/Admin"; // ✅ IMPORT ADD

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Team from "./pages/Team";

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
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AdminLogin />} />
            <Route path="/admin" element={<Admin />} /> {/* ✅ MAIN FIX */}
            <Route path="/team" element={<Team />} />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;