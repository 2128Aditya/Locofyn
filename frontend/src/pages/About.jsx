import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { label: "Projects Delivered", value: "50+", icon: "🚀" },
    { label: "Delivery Time", value: "48 hrs", icon: "⚡" },
    { label: "Client Satisfaction", value: "100%", icon: "⭐" },
  ];

  const values = [
    {
      title: "Fast Delivery",
      desc: "We respect your time. Get your professional business presence online in record time.",
      icon: "⏱️",
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "Smart Solutions",
      desc: "From SEO to WhatsApp automation, we integrate tools that actually grow your business.",
      icon: "💡",
      color: "from-blue-500 to-indigo-500",
    },
    {
      title: "Growth Focus",
      desc: "We don't just build websites; we build engines for lead generation and brand authority.",
      icon: "📈",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#020617] text-slate-900 dark:text-white transition-colors duration-500">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-500/10 dark:bg-purple-600/5 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-sm tracking-wider uppercase mb-6">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              We Craft <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Digital Excellence</span><br />
              for Local Heroes
            </h1>
            <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Locafyn isn't just a web agency. We're your digital growth partners,
              dedicated to bringing the power of the modern web to every local entrepreneur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-500 dark:text-gray-400 font-medium uppercase tracking-widest text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              The <span className="text-orange-500">Locafyn</span> Story
            </h2>
            <div className="space-y-6 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in Deoria, Locafyn was born from a simple observation: while the world was moving online at light speed,
                our local businesses were being left behind by high costs and complex technology.
              </p>
              <p>
                We decided to bridge that gap. We stripped away the jargon and the unnecessary delays
                to create a process that delivers premium, conversion-ready websites in just 48 hours.
              </p>
              <p>
                Today, we're proud to have helped dozens of businesses transition from "offline"
                to "online leaders" in their respective industries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-[40px] opacity-20 blur-2xl"></div>
            <div className="relative bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[40px] border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center text-orange-600">🎯</span>
                    Our Mission
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400">
                    To democratize the web by providing every local business owner with world-class digital tools and strategies.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600">👁️</span>
                    Our Vision
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400">
                    To be the most trusted digital growth partner for individual entrepreneurs and small businesses across the nation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Partners Choose Us</h2>
            <p className="text-slate-600 dark:text-gray-400 text-lg">Our core philosophy is simple: Your growth is our growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-900 p-10 rounded-[32px] border border-slate-100 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-3xl mb-8 text-white shadow-lg shadow-inherit opacity-90`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 dark:from-white/5 dark:to-white/[0.02] p-12 md:p-20 rounded-[60px] relative overflow-hidden border border-white/10"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/10 blur-[100px] rounded-full"></div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 relative z-10 leading-tight">
            Ready to Start Your<br />Digital Journey?
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 relative z-10 max-w-xl mx-auto">
            Join 50+ businesses that have transformed their brand with Locafyn.
          </p>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-[24px] font-bold text-lg transition-all active:scale-95 shadow-2xl shadow-orange-500/30"
          >
            Start Growing Today 🚀
          </a>
        </motion.div>
      </section>

    </div>
  );
};

export default About;
