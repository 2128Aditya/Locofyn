const Pricing = () => {
  const plans = ["Basic ₹999", "Standard ₹1999", "Premium ₹2999"];

  return (
    <section className="py-24 bg-[#0B1220] text-center">
      <h2 className="text-3xl font-bold mb-12">Pricing</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        {plans.map((p, i) => (
          <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3>{p}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;