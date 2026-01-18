import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Minus,
    HelpCircle,
    MessageSquare,
    ChevronRight,
} from "lucide-react";

const faqs = [
    {
        question: "Apa itu perlombaan ELCCO?",
        answer: (
            <p>
                ELCCO (Electrical and Computer Competition) merupakan event
                perlombaan tahunan tingkat nasional yang diselenggarakan oleh
                Himpunan Mahasiswa Elektro, Fakultas Teknik, Universitas
                Udayana. Kegiatan ini menjadi wadah bagi pelajar dan mahasiswa
                dari seluruh Indonesia untuk menunjukkan kreativitas, inovasi,
                serta keunggulan dalam berbagai cabang lomba yang tersedia.
            </p>
        ),
    },
    {
        question: "Bagaimana cara mendaftar ke lomba ELCCO 2026?",
        answer: (
            <p>
                Peserta dapat melakukan pendaftaran melalui laman resmi{" "}
                <a
                    href="https://elccounud2026.com"
                    className="text-frosted-mint-400 hover:text-frosted-mint-300 underline decoration-frosted-mint-500/30"
                >
                    elccounud2026.com
                </a>{" "}
                atau langsung melalui Google Form pada setiap cabang lomba yang
                tercantum dalam juklak masing-masing kategori.
            </p>
        ),
    },
    {
        question: "Apa saja cabang lomba ELCCO 2026?",
        answer: (
            <div>
                <p className="mb-3">
                    ELCCO 2026 memiliki 8 cabang lomba dengan pembagian kategori
                    sebagai berikut:
                </p>
                <ul className="space-y-2">
                    <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="mt-1 p-1 bg-frosted-mint-500/20 rounded text-frosted-mint-400 flex-shrink-0">
                            <ChevronRight className="w-3 h-3" />
                        </div>
                        <span className="text-sm">
                            <strong className="text-white block mb-0.5">
                                Kategori SMA/SMK:
                            </strong>{" "}
                            Networking, LCC, dan LKTI
                        </span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="mt-1 p-1 bg-purple-500/20 rounded text-purple-400 flex-shrink-0">
                            <ChevronRight className="w-3 h-3" />
                        </div>
                        <span className="text-sm">
                            <strong className="text-white block mb-0.5">
                                Kategori Mahasiswa:
                            </strong>{" "}
                            LKCT
                        </span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                        <div className="mt-1 p-1 bg-blue-500/20 rounded text-blue-400 flex-shrink-0">
                            <ChevronRight className="w-3 h-3" />
                        </div>
                        <span className="text-sm">
                            <strong className="text-white block mb-0.5">
                                Kategori Umum:
                            </strong>{" "}
                            Line Follower (LF), Sumo Bot, Essay, dan Infografis
                        </span>
                    </li>
                </ul>
                <p className="mt-3 text-xs text-slate-400 italic flex items-center gap-1">
                    <HelpCircle className="w-3 h-3 flex-shrink-0" />
                    Informasi lengkap dapat dilihat pada juklak masing-masing
                    cabang lomba.
                </p>
            </div>
        ),
    },
    {
        question: "Apakah lomba dilaksanakan secara offline?",
        answer: (
            <div>
                <p className="mb-3">
                    Tidak sepenuhnya. Pelaksanaan lomba menyesuaikan dengan
                    karakteristik setiap cabang:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-dark-spruce-900 p-3 rounded-lg border border-white/10 text-sm">
                        <strong className="text-frosted-mint-400 block text-xs uppercase tracking-wider mb-1">
                            Online
                        </strong>
                        Essay dan Infografis
                    </div>
                    <div className="bg-dark-spruce-900 p-3 rounded-lg border border-white/10 text-sm">
                        <strong className="text-frosted-mint-400 block text-xs uppercase tracking-wider mb-1">
                            Offline
                        </strong>
                        Line Follower dan Sumo Bot
                    </div>
                    <div className="bg-dark-spruce-900 p-3 rounded-lg border border-white/10 text-sm">
                        <strong className="text-frosted-mint-400 block text-xs uppercase tracking-wider mb-1">
                            Hybrid
                        </strong>
                        LCC dan Networking (Penyisihan Online, Final Offline)
                    </div>
                    <div className="bg-dark-spruce-900 p-3 rounded-lg border border-white/10 text-sm">
                        <strong className="text-frosted-mint-400 block text-xs uppercase tracking-wider mb-1">
                            Research
                        </strong>
                        LKTI & LKCT (Seleksi Paper Online, Final Offline)
                    </div>
                </div>
            </div>
        ),
    },
    {
        question: "Kapan rangkaian perlombaan offline dilaksanakan?",
        answer: (
            <p>
                Rangkaian lomba yang dilaksanakan secara offline akan
                berlangsung pada{" "}
                <span className="inline-block px-2 py-0.5 rounded bg-frosted-mint-500/20 text-frosted-mint-300 font-bold border border-frosted-mint-500/30">
                    10, 11, dan 12 April 2026
                </span>
                . Jadwal lengkap setiap cabang lomba dapat dilihat pada juklak
                masing-masing.
            </p>
        ),
    },
    {
        question: "Apa saja benefit yang didapatkan peserta?",
        answer: (
            <p>
                Peserta yang meraih juara berhak mendapatkan hadiah menarik
                sesuai ketentuan pada juklak. Seluruh peserta juga akan
                memperoleh{" "}
                <strong className="text-white">E-Sertifikat ELCCO 2026</strong>{" "}
                bertaraf nasional serta kesempatan memperluas relasi dengan
                peserta dari berbagai daerah di Indonesia.
            </p>
        ),
    },
    {
        question: "Jika salah isi data pendaftaran, apakah bisa diperbaiki?",
        answer: (
            <p>
                Bisa. Jika terjadi kesalahan pengisian data, peserta dapat
                segera menghubungi{" "}
                <strong className="text-white border-b border-dashed border-slate-500 pb-0.5">
                    Contact Person (CP)
                </strong>{" "}
                cabang lomba yang diikuti untuk mendapatkan arahan terkait
                perbaikan data atau pengisian ulang formulir.
            </p>
        ),
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section
            id="faq"
            className="relative w-full py-16 md:py-24 bg-dark-spruce-950 overflow-hidden"
        >
            {/* Background Atmosphere */}
            <div className="absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
            <div className="absolute right-0 bottom-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-frosted-mint-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    {/* --- LEFT SIDE: INFO --- */}
                    {/* FIXED: Removed 'sticky' on mobile (relative), added 'lg:sticky' for desktop */}
                    <div
                        className="w-full lg:w-1/3 relative lg:sticky lg:top-32"
                        data-aos="fade-right"
                    >
                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <div className="h-[2px] w-12 bg-frosted-mint-500"></div>
                            <span className="text-frosted-mint-400 font-bold uppercase tracking-widest text-sm">
                                Knowledge Base
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                            Frequently <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-white">
                                Asked Questions
                            </span>
                        </h2>

                        <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">
                            Temukan jawaban cepat untuk pertanyaan yang sering
                            diajukan seputar pendaftaran dan pelaksanaan ELCCO
                            2026.
                        </p>

                        <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-frosted-mint-600 rounded-xl text-white shadow-lg shadow-frosted-mint-900/50 flex-shrink-0">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-white font-bold text-lg mb-1">
                                        Butuh Bantuan Lain?
                                    </h4>
                                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                        Jika jawaban tidak ditemukan di sini,
                                        hubungi panitia melalui WhatsApp.
                                    </p>
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-frosted-mint-400 hover:text-white transition-colors group"
                                    >
                                        Hubungi Panitia
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: ACCORDION --- */}
                    <div className="w-full lg:w-2/3" data-aos="fade-left">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setActiveIndex(
                                            activeIndex === index
                                                ? null
                                                : index,
                                        )
                                    }
                                    className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                                        activeIndex === index
                                            ? "bg-dark-spruce-900 border-frosted-mint-500/50 shadow-[0_0_30px_rgba(81,186,69,0.15)]"
                                            : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10"
                                    }`}
                                >
                                    <div className="flex items-start justify-between p-5 md:p-6 gap-4">
                                        <h3
                                            className={`font-bold text-base md:text-lg transition-colors leading-snug ${
                                                activeIndex === index
                                                    ? "text-frosted-mint-400"
                                                    : "text-white group-hover:text-frosted-mint-200"
                                            }`}
                                        >
                                            {faq.question}
                                        </h3>
                                        <div
                                            className={`p-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                                                activeIndex === index
                                                    ? "bg-frosted-mint-500 text-dark-spruce-950 rotate-180"
                                                    : "bg-white/10 text-slate-300 group-hover:bg-white/20"
                                            }`}
                                        >
                                            {activeIndex === index ? (
                                                <Minus size={18} />
                                            ) : (
                                                <Plus size={18} />
                                            )}
                                        </div>
                                    </div>

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
                                            >
                                                <div className="px-5 md:px-6 pb-6 text-slate-300 leading-relaxed border-t border-white/5 pt-4 text-sm md:text-base">
                                                    {faq.answer}
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
