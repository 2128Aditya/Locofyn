import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹XXX",
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
      price: "₹XXXX",
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
      price: "₹XXXXX",
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
    <section className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
          Invest in Your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Digital Growth
          </span>
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Choose a transparent and value-driven pricing plan that scales with your business ambitions.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mt-24 relative z-10">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15, scale: 1.02 }}
            className={`relative p-10 rounded-[32px] border transition-all duration-500 flex flex-col
              ${plan.popular
                ? "bg-slate-900 dark:bg-white border-transparent text-white dark:text-slate-900 shadow-2xl shadow-orange-500/10"
                : "bg-white dark:bg-slate-900/50 backdrop-blur-sm border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:border-orange-500/30"
              }`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                Most Popular
              </div>
            )}

            {/* Plan Info */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold uppercase tracking-widest mb-4 ${plan.popular ? 'text-orange-400' : 'text-orange-500'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                <span className={`text-sm opacity-60 ${plan.popular ? 'text-white/70 dark:text-slate-500' : 'text-slate-500 dark:text-gray-400'}`}>
                  / project
                </span>
              </div>
            </div>

            {/* Features List */}
            <ul className="flex-1 space-y-4 mb-10">
              {plan.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs ${plan.popular ? 'bg-orange-400 text-slate-900' : 'bg-orange-500 text-white'}`}>
                    ✓
                  </span>
                  <span className={`text-sm font-medium ${plan.popular ? 'text-white/90 dark:text-slate-800' : 'text-slate-600 dark:text-gray-300'}`}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 shadow-lg hover:scale-105 hover:shadow-orange-500/20
              ${plan.popular
                ? "bg-white dark:bg-slate-900 text-slate-900 dark:text-white hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500"
                : "bg-orange-500 text-white hover:bg-orange-600 shadow-orange-500/20"
              }`}>
              Subscribe Now
            </button>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Pricing;