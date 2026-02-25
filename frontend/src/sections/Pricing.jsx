import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹999",
      features: [
        "1 Page Website",
        "Mobile Responsive",
        "Basic Design",
        "WhatsApp Integration",
        "3 Days Delivery",
      ],
    },
    {
      name: "Standard",
      price: "₹1999",
      popular: true,
      features: [
        "Up to 5 Pages Website",
        "Modern UI Design",
        "SEO Optimization",
        "Fast Loading Speed",
        "WhatsApp + Contact Form",
        "5 Days Delivery",
      ],
    },
    {
      name: "Premium",
      price: "₹2999",
      features: [
        "Full Custom Website",
        "Advanced UI/UX",
        "SEO + Performance Optimization",
        "Admin Panel",
        "Payment Integration",
        "7 Days Delivery",
      ],
    },
  ];

  return (
   <section className="relative py-28 bg-gradient-to-br from-[#fab4b4] via-[#fab4b4] to-[#fab4b4] overflow-hidden px-6">


      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Simple{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Pricing
          </span>
        </h2>
        <p className="text-gray-500 mt-4">
          Choose the perfect plan for your business needs.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mt-16">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12, scale: 1.03 }}
            className={`relative p-8 rounded-2xl border shadow-lg transition-all duration-300
              ${
                plan.popular
                  ? "bg-white border-purple-400 scale-105 shadow-2xl"
                  : "bg-white/70 backdrop-blur-xl border-white/30"
              }`}
          >
            {/* Popular Tag */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">
              {plan.name}
            </h3>

            {/* Price */}
            <p className="text-3xl font-bold text-purple-600 mt-4">
              {plan.price}
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-gray-600 text-sm">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Pricing;