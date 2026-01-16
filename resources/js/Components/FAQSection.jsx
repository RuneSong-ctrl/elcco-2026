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
                    className="text-frosted-mint-400 hover:underline"
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
                <p className="mb-2">
                    ELCCO 2026 memiliki 8 cabang lomba dengan pembagian kategori
                    sebagai berikut:
                </p>
                <ul className="list-none space-y-1 ml-1">
                    <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-frosted-mint-500 mt-1 flex-shrink-0" />
                        <span>
                            <strong className="text-ivory-mist-200">
                                Kategori SMA/SMK:
                            </strong>{" "}
                            Networking, LCC, dan LKTI
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-frosted-mint-500 mt-1 flex-shrink-0" />
                        <span>
                            <strong className="text-ivory-mist-200">
                                Kategori Mahasiswa:
                            </strong>{" "}
                            LKCT
                        </span>
                    </li>
                    <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-frosted-mint-500 mt-1 flex-shrink-0" />
                        <span>
                            <strong className="text-ivory-mist-200">
                                Kategori Umum:
                            </strong>{" "}
                            Line Follower (LF), Sumo Bot, Essay, dan Infografis
                        </span>
                    </li>
                </ul>
                <p className="mt-2 text-xs text-muted-olive-400 italic">
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
                <p className="mb-2">
                    Tidak sepenuhnya. Pelaksanaan lomba menyesuaikan dengan
                    karakteristik setiap cabang:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <li className="bg-dark-spruce-800/50 p-2 rounded border border-frosted-mint-500/10 text-sm">
                        <strong className="text-frosted-mint-400 block">
                            Online
                        </strong>{" "}
                        Essay dan Infografis
                    </li>
                    <li className="bg-dark-spruce-800/50 p-2 rounded border border-frosted-mint-500/10 text-sm">
                        <strong className="text-frosted-mint-400 block">
                            Offline
                        </strong>{" "}
                        Line Follower dan Sumo Bot
                    </li>
                    <li className="bg-dark-spruce-800/50 p-2 rounded border border-frosted-mint-500/10 text-sm">
                        <strong className="text-frosted-mint-400 block">
                            Hybrid
                        </strong>{" "}
                        LCC dan Networking (Penyisihan Online, Final Offline)
                    </li>
                    <li className="bg-dark-spruce-800/50 p-2 rounded border border-frosted-mint-500/10 text-sm">
                        <strong className="text-frosted-mint-400 block">
                            Research
                        </strong>{" "}
                        LKTI & LKCT (Seleksi Paper Online, Final Offline)
                    </li>
                </ul>
            </div>
        ),
    },
    {
        question: "Kapan rangkaian perlombaan offline dilaksanakan?",
        answer: (
            <p>
                Rangkaian lomba yang dilaksanakan secara offline akan
                berlangsung pada{" "}
                <strong className="text-ivory-mist-200">
                    10, 11, dan 12 April 2026
                </strong>
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
                <strong className="text-ivory-mist-200">
                    E-Sertifikat ELCCO 2026
                </strong>{" "}
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
                <strong className="text-ivory-mist-200">
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
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            <div className="absolute left-0 top-0 w-64 h-64 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-5 pointer-events-none mask-gradient-bottom"></div>
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-frosted-mint-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-1/3" data-aos="fade-right">
                        <div className="sticky top-32">
                            <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase flex items-center gap-2 mb-4">
                                <HelpCircle className="w-4 h-4" />
                                Knowledge Base
                            </span>

                            <h2 className="text-4xl md:text-5xl font-extrabold text-frosted-mint-50 mb-6 leading-tight">
                                Frequently <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                    Asked Questions
                                </span>
                            </h2>

                            <p className="text-muted-olive-200 text-lg mb-10">
                                Database jawaban untuk pertanyaan yang sering
                                diajukan oleh calon peserta ELCCO 2026.
                            </p>

                            <div className="p-6 rounded-2xl bg-gradient-to-br from-frosted-mint-900/20 to-dark-spruce-900 border border-frosted-mint-500/20 backdrop-blur-md">
                                <h4 className="text-ivory-mist-100 font-bold text-lg mb-2 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-ivory-mist-400" />
                                    Butuh Bantuan Lain?
                                </h4>
                                <p className="text-muted-olive-300 text-sm mb-4">
                                    Jika jawaban tidak ditemukan di sini,
                                    hubungi panitia melalui WhatsApp.
                                </p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-frosted-mint-600/20 hover:bg-frosted-mint-600 text-frosted-mint-400 hover:text-dark-spruce-950 border border-frosted-mint-500/50 rounded-xl font-bold transition-all text-sm"
                                >
                                    Hubungi Panitia
                                </a>
                            </div>
                        </div>
                    </div>

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
                                    <div className="flex items-center justify-between p-6">
                                        <h3
                                            className={`font-bold text-lg transition-colors pr-8 leading-snug ${
                                                activeIndex === index
                                                    ? "text-frosted-mint-400"
                                                    : "text-frosted-mint-50 group-hover:text-frosted-mint-200"
                                            }`}
                                        >
                                            {faq.question}
                                        </h3>
                                        <div
                                            className={`p-2 rounded-full flex-shrink-0 transition-all duration-300 ${
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
                                                <div className="px-6 pb-6 pt-0 text-muted-olive-200 leading-relaxed border-t border-frosted-mint-500/10 mt-2 text-sm md:text-base">
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
