import adVideo from "../assets/ad.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover scale-105"
      >
        <source src={adVideo} type="video/mp4" />
      </video>

      {/* Theme-aware Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/70 dark:from-black/70 dark:via-black/60 dark:to-[#020617]/90 transition-colors duration-500"></div>

      {/* Animated Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 dark:bg-orange-400/10 blur-[120px] rounded-full top-10 left-1/2 -translate-x-1/2 animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 py-20">

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white transition-colors">
          Build Your Digital presence With{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Locafyn
          </span>
        </h1>

        {/* Subtext */}
       <p className="mt-8 text-black text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We craft high-performance websites that transform your business and drive measurable growth in the digital era.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-5 justify-center flex-wrap">
          <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-600 hover:scale-105 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
            Get Started
          </button>

          <button className="bg-white/40 dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/60 dark:hover:bg-white/20 transition-all active:scale-95">
            View Work
          </button>
        </div>

        {/* Glass Input Box */}
        <div className="mt-12 bg-white/60 dark:bg-white/5 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-2xl transition-all max-w-2xl mx-auto">
          <div className="flex items-center gap-3 flex-1 w-full px-4">
            <span className="text-2xl opacity-60">🏢</span>
            <input
              type="text"
              placeholder="What is your business type? (e.g. Gym, Salon)"
              className="bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-gray-400 w-full py-2 font-medium"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/20 transition-all w-full md:w-auto active:scale-95">
            Get Website
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;