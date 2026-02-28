import { motion } from "framer-motion";
import { useState } from "react";

const FAQ = () => {
    const faqs = [
        {
            q: "How long does it take to build a website?",
            a: "Depending on complexity, a basic website takes 3-5 days, while complex platforms may take 7-14 days.",
        },
        {
            q: "Will my website work on mobile phones?",
            a: "Yes! Every website we build is 100% mobile-responsive and works perfectly on all devices and screen sizes.",
        },
        {
            q: "Do you provide hosting and domain names?",
            a: "We help you select and set up the best hosting and domain names for your business needs.",
        },
        {
            q: "Can I update the content on my website later?",
            a: "Absolutely. We provide an easy-to-use admin panel or can handle updates for you as part of our support.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section
            id="faq"
            className="relative py-32 px-6 overflow-hidden 
            bg-white dark:bg-[#020617] 
            transition-colors duration-500"
        >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white text-center mb-16">
                    Frequently Asked{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                        Questions
                    </span>
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="rounded-2xl overflow-hidden 
                            bg-slate-50 dark:bg-white/5 
                            border border-slate-200 dark:border-white/10 
                            transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 flex items-center justify-between text-left 
                                hover:bg-slate-100 dark:hover:bg-white/10 
                                transition"
                            >
                                <span className="font-semibold text-slate-800 dark:text-white text-lg">
                                    {faq.q}
                                </span>

                                <span
                                    className={`text-2xl text-gray-500 dark:text-gray-400 transition-transform duration-300 
                                    ${openIndex === i ? "rotate-180" : ""}`}
                                >
                                    ⌄
                                </span>
                            </button>

                            {openIndex === i && (
                                <motion.div
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="px-6 pb-6 text-slate-600 dark:text-gray-400 leading-relaxed"
                                >
                                    {faq.a}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;