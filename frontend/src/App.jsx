import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Loader from "./components/Loader";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
          <Home />
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;