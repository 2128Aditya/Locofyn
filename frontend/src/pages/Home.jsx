import { useEffect, useState } from "react";
import WhatsAppButton from "../components/common/WhatsAppButton";

// sections
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Feature from "../sections/Feature";
import Process from "../sections/Process";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";

const Home = () => {
  const [businesses, setBusinesses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/business")
      .then((res) => res.json())
      .then((data) => setBusinesses(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white font-[Inter] transition-colors duration-500 min-h-screen">

      <Hero />
      <Services />
      <Process />
      <Feature />

      {/* 🔥 Dynamic Portfolio */}
      <Portfolio data={businesses} />

      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />

      <WhatsAppButton />
    </div>
  );
};

export default Home;