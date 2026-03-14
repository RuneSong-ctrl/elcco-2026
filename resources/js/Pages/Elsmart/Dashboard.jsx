import React, { useState, useEffect } from "react";
import { Head, useForm, Link } from "@inertiajs/react";
import axios from "axios";
import { motion } from "framer-motion";
import {
    LogOut,
    AlertTriangle,
    Clock,
    FileText,
    Gamepad2,
    CheckCircle2,
    Users,
    GraduationCap,
    Trophy,
    Lock,
    CheckCircle,
} from "lucide-react";
import LCC from "/public/images/LCC.png";

const Dashboard = ({ team_name, school_name, members, current_stage }) => {
    const { post } = useForm();
    const [gameStatus, setGameStatus] = useState({
        stage_1: false,
        stage_2: false,
        stage_3: false,
    });

    useEffect(() => {
        const fetchStatus = () => {
            // Endpoint backend tetap dipertahankan
            axios
                .get("/elsmart/game-status")
                .then((response) => setGameStatus(response.data))
                .catch((error) => console.error(error));
        };

        fetchStatus();
        const intervalId = setInterval(fetchStatus, 3000);

        return () => clearInterval(intervalId);
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        // Endpoint logout tetap
        post("/elsmart/logout");
    };

    const isStageCompleted = (stageId) => {
        if (current_stage === "finished") return true;
        if (current_stage === "t3" && stageId < 3) return true;
        if (current_stage === "t2" && stageId < 2) return true;
        return false;
    };

    const stages = [
        {
            id: 1,
            title: "Multiple Choice",
            subtitle: "Tahap 1",
            duration: "30 Menit",
            questions: "40 Soal",
            url: "/elsmart/quiz/multiple-choice", // URL tetap
            isOpen: gameStatus.stage_1,
            isCompleted: isStageCompleted(1),
        },
        {
            id: 2,
            title: "Find Words",
            subtitle: "Tahap 2",
            duration: "15 Menit",
            questions: "10 Kata",
            url: "/elsmart/quiz/find-words", // URL tetap
            isOpen: gameStatus.stage_2,
            isCompleted: isStageCompleted(2),
        },
        {
            id: 3,
            title: "Match The Box",
            subtitle: "Tahap 3",
            duration: "15 Menit",
            questions: "10 Pasang",
            url: "/elsmart/quiz/match-the-box", // URL tetap
            isOpen: gameStatus.stage_3,
            isCompleted: isStageCompleted(3),
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
        <div className="min-h-screen bg-fern-50 font-sans relative overflow-hidden contain-paint pb-20 text-muted-olive-900">
            <Head title="Lobby Peserta - LCC 2026" />

            {/* Efek Stars & Ambient Background */}
            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-30"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-frosted-mint-300/20 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/60 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>

            <nav className="relative z-20 border-b border-fern-200 bg-white/80 backdrop-blur-lg top-0 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-3">
                            <img
                                src={LCC}
                                alt="LCC"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="hidden sm:block h-6 w-px bg-fern-200 mx-2"></div>
                            <span className="hidden sm:block text-muted-olive-800 font-bold tracking-widest text-sm opacity-90">
                                LOBBY PESERTA
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-white border border-fern-200 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
                                <div className="w-2.5 h-2.5 bg-frosted-mint-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(81,186,69,0.5)]"></div>
                                <span className="text-sm font-bold text-muted-olive-800">
                                    {team_name}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-colors border border-red-100 focus:outline-none focus:ring-2 focus:ring-red-400/50"
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
                        <div className="p-2 bg-white rounded-lg border border-fern-200 shadow-sm">
                            <Users
                                className="text-frosted-mint-500"
                                size={22}
                            />
                        </div>
                        <h2 className="text-2xl font-black text-muted-olive-900 tracking-tight">
                            Profil Tim
                        </h2>
                    </div>

                    <div className="bg-white/90 backdrop-blur-sm border border-fern-100 rounded-[2rem] p-6 md:p-8 shadow-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 border-b border-fern-100 pb-8 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3.5 bg-gradient-to-br from-frosted-mint-100 to-white rounded-2xl shrink-0 border border-frosted-mint-200 shadow-sm">
                                    <Trophy
                                        className="text-frosted-mint-600"
                                        size={26}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-muted-olive-400 uppercase tracking-wider mb-1">
                                        Nama Tim
                                    </p>
                                    <p className="text-2xl font-black text-muted-olive-900">
                                        {team_name}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3.5 bg-gradient-to-br from-blue-50 to-white rounded-2xl shrink-0 border border-blue-100 shadow-sm">
                                    <GraduationCap
                                        className="text-blue-500"
                                        size={26}
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-muted-olive-400 uppercase tracking-wider mb-1">
                                        Instansi
                                    </p>
                                    <p className="text-xl font-bold text-muted-olive-800">
                                        {school_name || "Tidak ada data"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-base font-bold text-muted-olive-800 mb-5">
                                Daftar Anggota Tim
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                                {displayMembers.map((member, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-fern-50/50 border border-fern-100 rounded-2xl p-5 flex items-center gap-4 hover:border-frosted-mint-300 transition-colors shadow-sm"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-frosted-mint-600 font-black text-lg shrink-0 border border-fern-200 shadow-sm">
                                            {idx === 0 ? "K" : `A${idx}`}
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-xs text-frosted-mint-600 font-bold tracking-wide mb-1 uppercase">
                                                {member.role}
                                            </p>
                                            <p className="text-base font-bold text-muted-olive-900 truncate">
                                                {member.name}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {current_stage === "finished" ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-gradient-to-r from-frosted-mint-50 to-white border border-frosted-mint-200 rounded-2xl p-6 mb-10 flex flex-col md:flex-row items-center justify-center gap-5 shadow-sm text-center md:text-left"
                    >
                        <div className="p-4 bg-frosted-mint-500 rounded-full shrink-0 shadow-lg shadow-frosted-mint-500/30">
                            <CheckCircle className="text-white" size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl text-frosted-mint-700 font-black mb-1">
                                Seluruh Tahap Selesai!
                            </h3>
                            <p className="text-muted-olive-700 font-medium">
                                Terima kasih telah berpartisipasi dalam LCC
                                2026. Silakan pantau informasi selanjutnya dari
                                panitia.
                            </p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 flex items-start gap-5 shadow-sm"
                    >
                        <div className="p-3 bg-amber-100 rounded-xl shrink-0">
                            <AlertTriangle
                                className="text-amber-600"
                                size={26}
                            />
                        </div>
                        <div>
                            <h3 className="text-lg text-amber-800 font-black mb-2">
                                Perhatian Peserta!
                            </h3>
                            <p className="text-base text-amber-700/90 leading-relaxed font-medium">
                                Peserta dilarang membuka tab, aplikasi, atau
                                website lain selama proses perlombaan
                                berlangsung. Segala bentuk kecurangan akan
                                mengakibatkan diskualifikasi. Anda dapat memulai
                                pengerjaan setelah akses dibuka oleh Game
                                Master.
                            </p>
                        </div>
                    </motion.div>
                )}

                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-white rounded-lg border border-fern-200 shadow-sm">
                            <Gamepad2
                                className="text-frosted-mint-500"
                                size={22}
                            />
                        </div>
                        <h2 className="text-2xl font-black text-muted-olive-900 tracking-tight">
                            Tahap Perlombaan
                        </h2>
                    </div>
                    <span className="text-sm font-bold bg-white text-frosted-mint-600 px-4 py-2 rounded-full border border-fern-200 shadow-sm">
                        Babak Penyisihan
                    </span>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {stages.map((stage) => {
                        const isLockedByAdmin = !stage.isOpen;
                        const isDone = stage.isCompleted;

                        let cardStyle =
                            "bg-white border-fern-200 shadow-md shadow-fern-100 hover:-translate-y-1 hover:shadow-lg";
                        if (isDone)
                            cardStyle =
                                "bg-frosted-mint-50 border-frosted-mint-200 opacity-95";
                        else if (isLockedByAdmin)
                            cardStyle =
                                "bg-slate-50 border-slate-200 opacity-80 grayscale-[15%]";

                        return (
                            <motion.div
                                key={stage.id}
                                variants={itemVariants}
                                className={`relative overflow-hidden rounded-[2rem] border transition-all duration-300 ${cardStyle}`}
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-8">
                                        <div>
                                            <p className="text-sm font-bold text-frosted-mint-600 uppercase tracking-widest mb-1.5 opacity-90">
                                                {stage.subtitle}
                                            </p>
                                            <h3 className="text-2xl font-black text-muted-olive-900 leading-tight">
                                                {stage.title}
                                            </h3>
                                        </div>
                                        <div
                                            className={`p-3.5 rounded-2xl border ${
                                                isDone
                                                    ? "bg-frosted-mint-500 text-white shadow-md shadow-frosted-mint-500/30 border-transparent"
                                                    : stage.isOpen
                                                      ? "bg-frosted-mint-100 text-frosted-mint-600 border-frosted-mint-200"
                                                      : "bg-slate-100 text-slate-400 border-slate-200"
                                            }`}
                                        >
                                            {isDone ? (
                                                <CheckCircle size={22} />
                                            ) : stage.isOpen ? (
                                                <CheckCircle2 size={22} />
                                            ) : (
                                                <Lock size={22} />
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-10">
                                        <div className="flex items-center gap-3 text-base text-muted-olive-600 font-medium">
                                            <div className="p-1.5 bg-fern-50 rounded-lg">
                                                <Clock
                                                    size={18}
                                                    className="text-muted-olive-400"
                                                />
                                            </div>
                                            <span>
                                                Waktu:{" "}
                                                <strong className="text-muted-olive-900 font-bold ml-1">
                                                    {stage.duration}
                                                </strong>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3 text-base text-muted-olive-600 font-medium">
                                            <div className="p-1.5 bg-fern-50 rounded-lg">
                                                <FileText
                                                    size={18}
                                                    className="text-muted-olive-400"
                                                />
                                            </div>
                                            <span>
                                                Jumlah:{" "}
                                                <strong className="text-muted-olive-900 font-bold ml-1">
                                                    {stage.questions}
                                                </strong>
                                            </span>
                                        </div>
                                    </div>

                                    {isDone ? (
                                        <button
                                            disabled
                                            className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 bg-frosted-mint-100 text-frosted-mint-600 cursor-not-allowed border border-frosted-mint-200"
                                        >
                                            <CheckCircle size={18} /> Selesai
                                            Dikerjakan
                                        </button>
                                    ) : stage.isOpen ? (
                                        <Link
                                            href={stage.url}
                                            className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white bg-gradient-to-r from-frosted-mint-500 to-frosted-mint-600 hover:from-frosted-mint-600 hover:to-frosted-mint-700 text-white shadow-lg shadow-frosted-mint-500/25 active:scale-[0.98] border border-frosted-mint-500 focus:ring-frosted-mint-500"
                                        >
                                            Mulai Mengerjakan
                                        </Link>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                                        >
                                            <Lock size={16} /> Terkunci
                                        </button>
                                    )}
                                </div>

                                {isLockedByAdmin && !isDone && (
                                    <div className="absolute inset-0 bg-slate-50/10 pointer-events-none"></div>
                                )}
                            </motion.div>
                        );
                    })}
                </motion.div>
            </main>
        </div>
    );
};

export default Dashboard;
