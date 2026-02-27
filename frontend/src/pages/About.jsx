import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-[#FAF7FF] text-gray-900 min-h-screen">

      {/* HERO */}
      <section className="text-center px-6 py-24 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          We Build Digital Growth for{" "}
          <span className="text-purple-600">Local Businesses 🚀</span>
        </h1>
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Locafyn helps local businesses go online, attract customers, and grow faster
          with modern digital solutions — all within 48 hours.
        </p>
      </section>

      {/* STORY */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Locafyn was started with a simple vision — to empower local businesses
            with the same digital tools that big brands use.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            We noticed that many small businesses struggle to go online due to lack
            of knowledge or high costs. That’s where Locafyn steps in — making
            digital transformation simple, fast, and affordable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-3xl shadow-lg border border-[#E9D5FF]"
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-600">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To help every local business build a strong digital presence and grow
            in today’s competitive online world.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-4 text-purple-600">
            Our Vision
          </h3>
          <p className="text-gray-600">
            To become the go-to digital partner for local businesses across India.
          </p>
        </motion.div>

      </section>

      {/* STATS */}
      <section className="bg-white py-20 border-y border-[#E9D5FF]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

          <div>
            <h2 className="text-4xl font-extrabold text-purple-600">50+</h2>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-purple-600">48 hrs</h2>
            <p className="text-gray-600 mt-2">Delivery Time</p>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-purple-600">100%</h2>
            <p className="text-gray-600 mt-2">Client Satisfaction</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Locafyn?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E9D5FF]">
            <h3 className="font-semibold text-lg mb-2">⚡ Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Get your business online within 48 hours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E9D5FF]">
            <h3 className="font-semibold text-lg mb-2">💡 Smart Solutions</h3>
            <p className="text-gray-600 text-sm">
              Websites, SEO, WhatsApp integration & automation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow border border-[#E9D5FF]">
            <h3 className="font-semibold text-lg mb-2">📈 Growth Focus</h3>
            <p className="text-gray-600 text-sm">
              We focus on results — leads, traffic, and conversions.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-24 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          Ready to Grow Your Business?
        </h2>
        <p className="text-gray-600 mt-4">
          Let’s take your business online today 🚀
        </p>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="inline-block mt-6 px-8 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
};

export default About;