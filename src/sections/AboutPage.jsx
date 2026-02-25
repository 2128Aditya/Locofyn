import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const AboutPage = () => {
  return (
    <div className="bg-[#020617] text-white font-[Inter]">

      <Navbar />

      {/* HERO */}
      <section className="py-24 text-center bg-[#0B1220]">
        <h1 className="text-4xl md:text-5xl font-bold">
          About <span className="text-orange-400">Locafyn</span>
        </h1>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          We help local businesses grow online with modern, fast and high-converting websites.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-400 mb-4">
              Locafyn is a modern web development service focused on helping
              small and local businesses build their online presence.
            </p>

            <p className="text-gray-400 mb-4">
              We believe that every business deserves a professional website
              that not only looks good but also brings real customers.
            </p>

            <p className="text-gray-400">
              Our goal is simple — build fast, clean and conversion-focused
              websites that help businesses grow.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="about"
              className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section className="py-24 bg-[#0B1220] text-center px-6">
        <h2 className="text-3xl font-bold mb-6">Our Mission 🚀</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Our mission is to make local businesses visible online by providing
          high-quality websites at affordable prices. We focus on real results,
          not just design.
        </p>
      </section>

      {/* WHY US */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

          {[
            "Fast Delivery",
            "Modern Design",
            "Affordable Pricing",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              {item}
            </div>
          ))}

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default AboutPage;