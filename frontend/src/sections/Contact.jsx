import { motion } from "framer-motion";
import contactImg from "../assets/contact.svg";

const Contact = () => {
  return (
    <section className="relative py-32 bg-slate-50 dark:bg-[#0b1120] overflow-hidden px-6 transition-colors duration-500">

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* Info Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-bold text-xs uppercase tracking-widest mb-6">
            Contact Us
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Ready to <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Scale?</span><br />
            Let's Talk.
          </h2>

          <p className="text-slate-600 dark:text-gray-400 mt-8 text-lg leading-relaxed max-w-lg">
            Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help you navigate the digital landscape.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                📍
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Location</p>
                <p className="text-lg font-bold text-slate-800 dark:text-gray-200">Deoria, Uttar Pradesh</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                📧
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Email</p>
                <p className="text-lg font-bold text-slate-800 dark:text-gray-200">hello@locafyn.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-slate-100 dark:border-white/10 group-hover:scale-110 transition-transform">
                📱
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                <p className="text-lg font-bold text-slate-800 dark:text-gray-200">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex gap-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-emerald-500/20 transition-all flex items-center gap-3 active:scale-95"
            >
              <span>💬 Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>

        {/* Form Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Form background blob */}
          <div className="absolute -inset-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-[40px] opacity-10 blur-2xl"></div>

          <form
            className="relative bg-white dark:bg-slate-900/80 backdrop-blur-2xl p-10 md:p-12 rounded-[40px] border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Aditya singh"
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Phone Number</label>
                <input
                  type="text"
                  placeholder="+91xxxxxxxxxx"
                  className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
              <input
                type="email"
                placeholder="Ravi@example.com"
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
              <textarea
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              />
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/20 transition-all active:scale-95 mt-2">
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;