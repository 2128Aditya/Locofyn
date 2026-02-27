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
        <section id="faq" className="relative py-32 bg-white dark:bg-[#020617] overflow-hidden px-6 transition-colors duration-500">

            {/* Background glow */}
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
                            className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                            >
                                <span className="font-bold text-slate-800 dark:text-gray-200 text-lg">
                                    {faq.q}
                                </span>
                                <span className={`text-2xl transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    ⌄
                                </span>
                            </button>

                            {openIndex === i && (
                                <div className="px-6 pb-6 text-slate-600 dark:text-gray-400 leading-relaxed transition-all">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
