import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";

// Data Dummy FAQ (Lorem Ipsum)
const faqs = [
    {
        question: "Bagaimana cara mendaftar kompetisi ELCCO 2026?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        question: "Apakah satu tim boleh mengikuti lebih dari satu kategori?",
        answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        question: "Berapa biaya pendaftaran untuk setiap kategori?",
        answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
        question: "Apakah ada penginapan untuk peserta luar daerah?",
        answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
        question: "Kapan technical meeting akan dilaksanakan?",
        answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0); // Default terbuka yang pertama

    return (
        <section
            id="faq"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            {/* Background Decoration (Hexagon Pattern) */}
            <div className="absolute left-0 top-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-5 pointer-events-none mask-gradient-bottom"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-frosted-mint-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Header & Support Box */}
                    <div className="w-full lg:w-1/3" data-aos="fade-right">
                        <div className="sticky top-24">
                            <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase flex items-center gap-2 mb-4">
                                <HelpCircle className="w-4 h-4" />
                                Knowledge Base
                            </span>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-frosted-mint-50 mb-6 leading-tight">
                                Common <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                    Queries
                                </span>
                            </h2>

                            <p className="text-muted-olive-200 text-lg mb-10">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Temukan jawaban cepat untuk
                                misimu di sini.
                            </p>

                            {/* Need Help Box */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-frosted-mint-900/20 to-dark-spruce-900 border border-frosted-mint-500/20 backdrop-blur-md">
                                <h4 className="text-ivory-mist-100 font-bold text-lg mb-2 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-ivory-mist-400" />
                                    Still Confused?
                                </h4>
                                <p className="text-muted-olive-300 text-sm mb-4">
                                    Jika jawaban tidak ditemukan di database,
                                    hubungi operator kami secara langsung.
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-frosted-mint-600/20 hover:bg-frosted-mint-600 text-frosted-mint-400 hover:text-dark-spruce-950 border border-frosted-mint-500/50 rounded-xl font-bold transition-all text-sm"
                                >
                                    Contact Support
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion List */}
                    <div className="w-full lg:w-2/3" data-aos="fade-left">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setActiveIndex(
                                            activeIndex === index ? null : index
                                        )
                                    }
                                    className={`group cursor-pointer rounded-2xl border transition-all duration-300 ${
                                        activeIndex === index
                                            ? "bg-frosted-mint-900/10 border-frosted-mint-500/40 shadow-[0_0_20px_rgba(81,186,69,0.1)]"
                                            : "bg-dark-spruce-900/40 border-frosted-mint-500/10 hover:border-frosted-mint-500/30"
                                    }`}
                                >
                                    {/* Question Header */}
                                    <div className="flex items-center justify-between p-6">
                                        <h3
                                            className={`font-bold text-lg transition-colors ${
                                                activeIndex === index
                                                    ? "text-frosted-mint-400"
                                                    : "text-frosted-mint-50 group-hover:text-frosted-mint-200"
                                            }`}
                                        >
                                            {faq.question}
                                        </h3>
                                        <div
                                            className={`p-2 rounded-full transition-all duration-300 ${
                                                activeIndex === index
                                                    ? "bg-frosted-mint-500 text-dark-spruce-950 rotate-180"
                                                    : "bg-dark-spruce-950 text-frosted-mint-500 group-hover:bg-frosted-mint-500/20"
                                            }`}
                                        >
                                            {activeIndex === index ? (
                                                <Minus size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </div>
                                    </div>

                                    {/* Answer Content (Animated) */}
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{
                                                    height: 0,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    height: "auto",
                                                    opacity: 1,
                                                }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeInOut",
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-0 text-muted-olive-200 leading-relaxed border-t border-frosted-mint-500/10 mt-2">
                                                    <div className="pt-4">
                                                        {faq.answer}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
