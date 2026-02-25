const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="background"
        className="absolute w-full h-full object-cover scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Glow Effect */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500/20 blur-3xl rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Grow Your Business With{" "}
          <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
            Locafyn
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          We create modern websites for local businesses that bring real customers and growth.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">

          <button className="bg-orange-500 px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition shadow-lg">
            Get Started
          </button>

          <button className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-xl hover:bg-white/20 transition">
            View Work
          </button>

        </div>

        {/* Glass Input Box */}
        <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 flex flex-col md:flex-row gap-3 items-center shadow-lg">

          <input
            type="text"
            placeholder="Enter your business type..."
            className="bg-transparent outline-none text-white placeholder-gray-300 flex-1 px-4 py-2"
          />

          <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg font-medium">
            Get Website
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;