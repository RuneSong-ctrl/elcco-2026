import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    LogOut,
    AlertTriangle,
    Lock,
    Clock,
    FileText,
    Gamepad2,
    CheckCircle2,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

const Dashboard = ({ team_name }) => {
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post("/elsmart/logout");
    };

    const stages = [
        {
            id: 1,
            title: "Multiple Choice",
            subtitle: "Tahap 1",
            duration: "30 Menit",
            questions: "40 Soal",
            locked: true,
        },
        {
            id: 2,
            title: "Find Words",
            subtitle: "Tahap 2",
            duration: "15 Menit",
            questions: "20 Kata",
            locked: true,
        },
        {
            id: 3,
            title: "Match The Box",
            subtitle: "Tahap 3",
            duration: "15 Menit",
            questions: "10 Pasang",
            locked: true,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-dark-spruce-950 font-sans relative overflow-hidden contain-paint pb-20">
            <Head title="Lobby Peserta - ELSMART 2026" />

            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-frosted-mint-500/10 blur-[100px] rounded-full pointer-events-none z-0 transform-gpu"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[100px] rounded-full pointer-events-none z-0 transform-gpu"></div>

            <nav className="relative z-20 border-b border-white/10 bg-dark-spruce-950/80 backdrop-blur-xl top-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <img
                                src={elsmart}
                                alt="Elsmart"
                                className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(81,186,69,0.3)]"
                            />
                            <div className="hidden sm:block h-6 w-px bg-white/20 mx-2"></div>
                            <span className="hidden sm:block text-white font-bold tracking-widest text-sm">
                                LOBBY PESERTA
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-dark-spruce-900 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                                <div className="w-2 h-2 bg-frosted-mint-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-white">
                                    {team_name}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors border border-red-500/20"
                                title="Keluar"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-dark-spruce-900/60 backdrop-blur-md border border-amber-500/30 rounded-2xl p-5 mb-8 flex items-start gap-4 shadow-lg shadow-amber-500/5"
                >
                    <div className="p-3 bg-amber-500/10 rounded-xl shrink-0">
                        <AlertTriangle className="text-amber-400" size={24} />
                    </div>
                    <div>
                        <h3 className="text-amber-400 font-bold mb-1">
                            Perhatian Peserta!
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Peserta dilarang membuka tab, aplikasi, atau website
                            lain selama proses perlombaan berlangsung. Segala
                            bentuk kecurangan akan mengakibatkan diskualifikasi.
                            Harap tunggu aba-aba dari Game Master untuk memulai
                            tahap perlombaan.
                        </p>
                    </div>
                </motion.div>

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
                        <Gamepad2 className="text-frosted-mint-500" />
                        Tahap Perlombaan
                    </h2>
                    <span className="text-xs font-bold bg-dark-spruce-900 text-frosted-mint-400 px-3 py-1.5 rounded-full border border-frosted-mint-500/30">
                        Babak Penyisihan
                    </span>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {stages.map((stage) => (
                        <motion.div
                            key={stage.id}
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-[2rem] border transition-all duration-300 ${
                                stage.locked
                                    ? "bg-dark-spruce-900/40 border-white/5 opacity-80"
                                    : "bg-dark-spruce-900/80 border-frosted-mint-500/50 shadow-[0_0_30px_rgba(34,197,94,0.15)] transform hover:-translate-y-1"
                            }`}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <p className="text-xs font-bold text-frosted-mint-400 uppercase tracking-wider mb-1">
                                            {stage.subtitle}
                                        </p>
                                        <h3 className="text-xl font-black text-white">
                                            {stage.title}
                                        </h3>
                                    </div>
                                    <div
                                        className={`p-3 rounded-2xl ${stage.locked ? "bg-white/5" : "bg-frosted-mint-500/20"}`}
                                    >
                                        {stage.locked ? (
                                            <Lock
                                                size={20}
                                                className="text-slate-400"
                                            />
                                        ) : (
                                            <CheckCircle2
                                                size={20}
                                                className="text-frosted-mint-400"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <Clock
                                            size={16}
                                            className="text-slate-500"
                                        />
                                        <span>
                                            Waktu:{" "}
                                            <strong className="text-white">
                                                {stage.duration}
                                            </strong>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-slate-300">
                                        <FileText
                                            size={16}
                                            className="text-slate-500"
                                        />
                                        <span>
                                            Jumlah:{" "}
                                            <strong className="text-white">
                                                {stage.questions}
                                            </strong>
                                        </span>
                                    </div>
                                </div>

                                <button
                                    disabled={stage.locked}
                                    className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                        stage.locked
                                            ? "bg-white/5 text-slate-500 cursor-not-allowed"
                                            : "bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white shadow-lg active:scale-95"
                                    }`}
                                >
                                    {stage.locked
                                        ? "Terkunci"
                                        : "Mulai Mengerjakan"}
                                </button>
                            </div>

                            {stage.locked && (
                                <div className="absolute inset-0 bg-dark-spruce-950/20 backdrop-blur-[1px] pointer-events-none"></div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboard;
