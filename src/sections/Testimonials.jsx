const Testimonials = () => {
  const data = [
    {
      name: "Rahul Sharma",
      text: "Got my salon website in 2 days. Amazing work!",
    },
    {
      name: "Amit Verma",
      text: "Very professional and clean design. Highly recommend.",
    },
    {
      name: "Sanjay Gupta",
      text: "My business got more customers after website launch.",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1220] text-center px-6">
      <h2 className="text-3xl font-bold mb-16">What Clients Say</h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white/5 p-6 rounded-xl border border-white/10"
          >
            <p className="text-gray-300 mb-4">“{item.text}”</p>
            <h3 className="text-orange-400 font-semibold">{item.name}</h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Testimonials;