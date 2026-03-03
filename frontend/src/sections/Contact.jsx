import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import contactImg from "../assets/contact.svg";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ldrv4yk",       
        "template_1umlnbi",      
        form.current,
        "7vYH3Y7d4szxdaWq3"      
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
          setLoading(false);
        },
        () => {
          alert("Failed to send ❌");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden 
      bg-slate-50 dark:bg-[#020617] 
      transition-colors duration-500"
    >
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-4 py-2 rounded-full 
          bg-purple-100 dark:bg-purple-900/30 
          text-purple-600 dark:text-purple-400 
          font-bold text-xs uppercase tracking-widest mb-6">
            Contact Us
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Ready to <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Scale?</span><br />
            Let's Talk.
          </h2>

          <p className="text-slate-600 dark:text-gray-400 mt-8 text-lg max-w-lg">
            Whether you have a specific project in mind or just want to explore the possibilities.
          </p>

          {/* INFO */}
          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 dark:border-white/10 backdrop-blur-sm group-hover:scale-110 transition">
                📍
              </div>
              <div>
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">Deoria, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 dark:border-white/10 backdrop-blur-sm group-hover:scale-110 transition">
                📧
              </div>
              <div>
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">hello@locofyn.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-slate-100 dark:border-white/10 backdrop-blur-sm group-hover:scale-110 transition">
                📱
              </div>
              <div>
                <p className="text-xs text-slate-400">Call Us</p>
                <p className="text-lg font-bold text-slate-800 dark:text-white">+91 80522 69388</p>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-12">
            <a
              href="https://wa.me/918052269388"
              target="_blank"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-emerald-500/20 transition"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[40px] opacity-10 blur-2xl"></div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative bg-white dark:bg-white/5 backdrop-blur-2xl p-10 md:p-12 rounded-[40px] border border-slate-200 dark:border-white/10 shadow-2xl dark:shadow-none flex flex-col gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none"
              required
            />

            <input
              type="text"
              name="user_phone"
              placeholder="Phone Number"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white outline-none resize-none"
              required
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-bold shadow-xl shadow-orange-500/20 transition">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;