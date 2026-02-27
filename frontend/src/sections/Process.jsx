import { motion } from "framer-motion";

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Discovery",
            desc: "We dive deep into your business goals, target audience, and competition to craft a winning strategy.",
            icon: "🔍",
        },
        {
            number: "02",
            title: "Design",
            desc: "Our designers create a bespoke, premium visual identity and user interface for your brand.",
            icon: "🎨",
        },
        {
            number: "03",
            title: "Development",
            desc: "We build your high-performance website using modern technologies for maximum speed and security.",
            icon: "💻",
        },
        {
            number: "04",
            title: "Launch & Support",
            desc: "We go live and provide ongoing optimization to ensure your digital presence keeps growing.",
            icon: "🚀",
        },
    ];

    return (
        <section id="process" className="relative py-32 bg-slate-50 dark:bg-[#0b1120] overflow-hidden px-6 transition-colors duration-500">

            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-500/5 blur-[100px] rounded-full"></div>

            {/* Heading */}
            <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white">
                    Our Strategic{" "}
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        Workflow
                    </span>
                </h2>
                <p className="text-slate-600 dark:text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
                    A proven, four-step process designed to take your business from concept to digital dominance.
                </p>
            </div>

            {/* Steps Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-24 relative z-10">
                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative"
                    >
                        {/* Connecting line for desktop */}
                        {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-12 left-1/2 w-full h-[2px] bg-slate-200 dark:bg-white/10 z-0"></div>
                        )}

                        {/* Card Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            {/* Number Circle */}
                            <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-[#0b1120] shadow-xl group-hover:scale-110 group-hover:border-orange-500 transition-all duration-500 overflow-hidden relative">
                                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity"></div>
                                <span className="text-3xl font-black text-slate-900 dark:text-white relative z-10">{step.number}</span>
                            </div>

                            {/* Text Area */}
                            <div className="mt-8 text-center p-6 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg group-hover:shadow-orange-500/10 transition-all">
                                <div className="text-4xl mb-4">{step.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                                <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Process;
