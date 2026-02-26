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
    Users,
    GraduationCap,
    Trophy,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

const Dashboard = ({ team_name, school_name, members }) => {
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

    const displayMembers = members || [
        { name: "Belum diatur", role: "Ketua" },
        { name: "Belum diatur", role: "Anggota 1" },
        { name: "Belum diatur", role: "Anggota 2" },
    ];

    return (
        <div className="min-h-screen bg-dark-spruce-950 font-sans relative overflow-hidden contain-paint pb-20 text-slate-100">
            <Head title="Lobby Peserta - ELSMART 2026" />

            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-frosted-mint-500/5 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>

            <nav className="relative z-20 border-b border-white/10 bg-dark-spruce-950/90 backdrop-blur-lg top-0 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <img
                                src={elsmart}
                                alt="Elsmart"
                                className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(81,186,69,0.2)]"
                            />
                            <div className="hidden sm:block h-6 w-px bg-white/20 mx-2"></div>
                            <span className="hidden sm:block text-white font-semibold tracking-widest text-sm opacity-90">
                                LOBBY PESERTA
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-black/30 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-inner">
                                <div className="w-2.5 h-2.5 bg-frosted-mint-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(81,186,69,0.8)]"></div>
                                <span className="text-sm font-semibold text-white">
                                    {team_name}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors border border-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                                title="Keluar"
                            >
                                <LogOut size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <div className="p-2 bg-frosted-mint-500/10 rounded-lg border border-frosted-mint-500/20">
                            <Users
                                className="text-frosted-mint-400"
                                size={22}
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            Profil Tim
                        </h2>
                    </div>

                    <div className="bg-black/20 border border-white/10 rounded-[2rem] p-6 md:p-8 shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border-b border-white/10 pb-8 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3.5 bg-gradient-to-br from-frosted-mint-500/20 to-transparent rounded-2xl shrink-0 border border-frosted-mint-500/30">
                                    <Trophy
                                        className="text-frosted-mint-400"
                                        size={26}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                        Nama Tim
                                    </p>
                                    <p className="text-2xl font-bold text-white">
                                        {team_name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3.5 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl shrink-0 border border-blue-500/30">
                                    <GraduationCap
                                        className="text-blue-400"
                                        size={26}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                                        Instansi / Universitas
                                    </p>
                                    <p className="text-xl font-semibold text-slate-200">
                                        {school_name || "Tidak ada data"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-base font-semibold text-slate-300 mb-5">
                                Daftar Anggota Tim
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {displayMembers.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-black/30 border border-white/5 rounded-2xl p-5 flex items-center gap-4 hover:border-frosted-mint-500/40 transition-colors shadow-sm"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-dark-spruce-900 flex items-center justify-center text-frosted-mint-400 font-bold text-lg shrink-0 border border-white/10 shadow-inner">
                                            {idx === 0 ? "K" : `A${idx}`}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-xs text-frosted-mint-400 font-bold tracking-wide mb-1 uppercase">
                                                {member.role}
                                            </p>
                                            <p className="text-base font-semibold text-white truncate">
                                                {member.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6 mb-10 flex items-start gap-5 shadow-md"
                >
                    <div className="p-3 bg-amber-500/20 rounded-xl shrink-0">
                        <AlertTriangle className="text-amber-400" size={26} />
                    </div>
                    <div>
                        <h3 className="text-lg text-amber-400 font-bold mb-2">
                            Perhatian Peserta!
                        </h3>
                        <p className="text-base text-slate-300 leading-relaxed">
                            Peserta dilarang membuka tab, aplikasi, atau website
                            lain selama proses perlombaan berlangsung. Segala
                            bentuk kecurangan akan mengakibatkan diskualifikasi.
                            Harap tunggu aba-aba dari Game Master untuk memulai
                            tahap perlombaan.
                        </p>
                    </div>
                </motion.div>

                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-frosted-mint-500/10 rounded-lg border border-frosted-mint-500/20">
                            <Gamepad2
                                className="text-frosted-mint-400"
                                size={22}
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            Tahap Perlombaan
                        </h2>
                    </div>
                    <span className="text-sm font-semibold bg-black/40 text-frosted-mint-400 px-4 py-2 rounded-full border border-frosted-mint-500/30 shadow-inner">
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
                                    ? "bg-black/40 border-white/5 opacity-80 grayscale-[20%]"
                                    : "bg-black/20 border-frosted-mint-500/50 shadow-[0_8px_30px_rgba(34,197,94,0.1)] transform hover:-translate-y-1"
                            }`}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <p className="text-sm font-bold text-frosted-mint-400 uppercase tracking-widest mb-1.5 opacity-90">
                                            {stage.subtitle}
                                        </p>
                                        <h3 className="text-2xl font-bold text-white leading-tight">
                                            {stage.title}
                                        </h3>
                                    </div>
                                    <div
                                        className={`p-3.5 rounded-2xl ${
                                            stage.locked
                                                ? "bg-white/5 border border-white/10"
                                                : "bg-frosted-mint-500/20 border border-frosted-mint-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                                        }`}
                                    >
                                        {stage.locked ? (
                                            <Lock
                                                size={22}
                                                className="text-slate-400"
                                            />
                                        ) : (
                                            <CheckCircle2
                                                size={22}
                                                className="text-frosted-mint-400"
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-4 mb-10">
                                    <div className="flex items-center gap-3 text-base text-slate-300">
                                        <div className="p-1.5 bg-white/5 rounded-lg">
                                            <Clock
                                                size={18}
                                                className="text-slate-400"
                                            />
                                        </div>
                                        <span>
                                            Waktu:{" "}
                                            <strong className="text-white font-semibold ml-1">
                                                {stage.duration}
                                            </strong>
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-base text-slate-300">
                                        <div className="p-1.5 bg-white/5 rounded-lg">
                                            <FileText
                                                size={18}
                                                className="text-slate-400"
                                            />
                                        </div>
                                        <span>
                                            Jumlah:{" "}
                                            <strong className="text-white font-semibold ml-1">
                                                {stage.questions}
                                            </strong>
                                        </span>
                                    </div>
                                </div>

                                <button
                                    disabled={stage.locked}
                                    className={`w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-spruce-950 ${
                                        stage.locked
                                            ? "bg-white/5 text-slate-500 cursor-not-allowed border border-white/5"
                                            : "bg-gradient-to-r from-frosted-mint-600 to-frosted-mint-500 hover:from-frosted-mint-500 hover:to-frosted-mint-400 text-white shadow-lg shadow-frosted-mint-500/20 active:scale-[0.98] border border-frosted-mint-400/50 focus:ring-frosted-mint-500"
                                    }`}
                                >
                                    {stage.locked
                                        ? "Terkunci"
                                        : "Mulai Mengerjakan"}
                                </button>
                            </div>

                            {stage.locked && (
                                <div className="absolute inset-0 bg-dark-spruce-950/10 pointer-events-none"></div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboard;
