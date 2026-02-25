const Contact = () => {
  return (
    <section className="py-24 bg-[#020617] text-center px-6">
      <h2 className="text-3xl font-bold mb-12">Contact Us</h2>

      <form className="max-w-xl mx-auto flex flex-col gap-4">

        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded bg-white/10 border border-white/10 outline-none"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="p-3 rounded bg-white/10 border border-white/10 outline-none"
        />

        <textarea
          placeholder="Your Message"
          className="p-3 rounded bg-white/10 border border-white/10 outline-none"
        />

        <button className="bg-orange-500 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;