import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";

// sections
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import About from "../sections/AboutPage";
import Feature from "../sections/Feature";
import Portfolio from "../sections/Portfolio";
import Testimonials from "../sections/Testimonials";
import Pricing from "../sections/Pricing";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";

const Home = () => {
  return (
    <div className="bg-[#020617] text-white font-[Inter]">

      <Navbar />

      <Hero />
      <Services />
      <About />
      <Feature />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <Contact />

      <Footer />
      <WhatsAppButton />

    </div>
  );
};

export default Home;