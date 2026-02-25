import { motion } from "framer-motion";
import contactImg from "../assets/contact.svg";

const Contact = () => {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#e1e5f2] to-[#f7ecd9] overflow-hidden px-6">

      {/* Glow Effects */}
      <div className="absolute top-[-80px] left-[-80px] w-[250px] h-[250px] bg-pink-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[250px] h-[250px] bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Have a project in mind? Let’s build something amazing together.
            Fill out the form and we’ll get back to you quickly.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-3 text-gray-700">
            <p>📍 Deoria, Uttar Pradesh</p>
            <p>📧 locafyn@gmail.com</p>
            <p>📱 +91 98765 43210</p>
          </div>

          {/* SVG IMAGE */}
          <motion.img
            src={contactImg}
            alt="contact"
            className="mt-8 w-[80%] max-w-sm drop-shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-gray-200 shadow-xl flex flex-col gap-5"
        >

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Mobile */}
          <input
            type="text"
            placeholder="Mobile Number"
            className="p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Message */}
          <textarea
            rows="4"
            placeholder="Your Message"
            className="p-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />

          {/* Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg transition">
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
};

export default Contact;