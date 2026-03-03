import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10 dark:from-orange-500/5 dark:to-pink-500/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[120px] rounded-full animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10 text-center"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-widest mb-8">
          Launch Now
        </div>

        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
          Your Business Deserves a{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            World-Class Website.
          </span>
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mt-6 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          Stop losing customers to outdated designs. Let's build a high-converting digital engine that drives your business forward.
        </p>

<div className="flex flex-col sm:flex-row justify-center gap-6">

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/918052269388?text=Hi%20Locofyn,%20I%20want%20to%20start%20my%20project"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/30 hover:bg-orange-600 hover:scale-105 transition-all active:scale-95 text-center"
  >
    🚀 Start My Project
  </a>

  {/* Work Section Scroll */}
  <a
    href="#work"
    className="bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/80 dark:hover:bg-white/20 transition-all active:scale-95 text-center"
  >
    View Case Studies
  </a>

</div>
      </motion.div>

    </section>
  );
};

export default CTA;