        const Feature = () => {
  return (
    <section className="py-24 bg-[#0F172A] px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Not Just a Website —{" "}
            <span className="text-orange-400">A Growth Tool 🚀</span>
          </h2>

          <p className="text-gray-400 mb-6">
            We don’t just design websites. We build digital experiences that
            help your business grow and generate real customers.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>✔ Mobile Optimized</li>
            <li>✔ Fast Loading Speed</li>
            <li>✔ WhatsApp Integration</li>
            <li>✔ Modern UI Design</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9"
            className="rounded-2xl shadow-lg w-full h-[350px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Feature;