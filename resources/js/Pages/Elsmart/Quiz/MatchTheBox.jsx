import React, { useState, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock,
    Send,
    AlertCircle,
    CheckCircle2,
    Image as ImageIcon,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

import gambar1 from "/public/images/gambar1.jpg";
import gambar2 from "/public/images/gambar2.jpg";
import gambar3 from "/public/images/gambar3.jpg";
import gambar4 from "/public/images/gambar4.jpg";
import gambar5 from "/public/images/gambar5.jpg";
import gambar6 from "/public/images/gambar6.jpg";
import gambar7 from "/public/images/gambar7.jpg";
import gambar8 from "/public/images/gambar8.jpg";
import gambar9 from "/public/images/gambar9.jpg";
import gambar10 from "/public/images/gambar10.jpg";

const MatchTheBox = ({ team_name }) => {
    const items = [
        { id: 1, img: gambar1, correct: "Motherboard" },
        { id: 2, img: gambar2, correct: "George Simon Ohm" },
        { id: 3, img: gambar3, correct: "vscode" },
        { id: 4, img: gambar4, correct: "Multimeter" },
        { id: 5, img: gambar5, correct: "Mosvet" },
        { id: 6, img: gambar6, correct: "Bipolar Junction Transistor (BJT)" },
        { id: 7, img: gambar7, correct: "ESP32" },
        { id: 8, img: gambar8, correct: "Akumulator" },
        { id: 9, img: gambar9, correct: "motor" },
        { id: 10, img: gambar10, correct: "Servo" },
    ];

    const options = [...items].map((item) => item.correct).sort();

    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [answers, setAnswers] = useState({});
    const [showWarning, setShowWarning] = useState(false);
    const [hasCheated, setHasCheated] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }
        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        const handleCheating = () => {
            if (document.visibilityState === "hidden" || document.hidden) {
                setHasCheated(true);
            }
        };

        const handleBlur = () => {
            setHasCheated(true);
        };

        document.addEventListener("visibilitychange", handleCheating);
        window.addEventListener("blur", handleBlur);

        return () => {
            document.removeEventListener("visibilitychange", handleCheating);
            window.removeEventListener("blur", handleBlur);
        };
    }, []);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const handleSelect = (id, value) => {
        if (hasCheated) return;
        setAnswers({ ...answers, [id]: value });
    };

    const handleSubmit = () => {
        let score = 0;
        items.forEach((item) => {
            if (answers[item.id] === item.correct) score += 10;
        });

        router.post("/elsmart/quiz/submit-stage3", {
            answers: answers,
            time_used: 15 * 60 - timeLeft,
            score: score,
        });
    };

    const answeredCount = Object.keys(answers).filter(
        (k) => answers[k] !== "",
    ).length;
    const progressPercent = Math.round((answeredCount / items.length) * 100);

    return (
        <div className="min-h-screen bg-fern-50 text-slate-800 font-sans p-4 md:p-8">
            <Head title="Tahap 3: Match The Box" />

            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <img src={elsmart} alt="Logo" className="h-12 w-auto" />
                        <div>
                            <h1 className="text-xl font-bold text-dark-spruce-900 uppercase tracking-tight">
                                Match The Box
                            </h1>
                            <p className="text-sm text-fern-600 font-medium">
                                Penyisihan Tahap 3 • Tim {team_name}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 shadow-sm">
                            <CheckCircle2
                                className="text-frosted-mint-500"
                                size={18}
                            />
                            {answeredCount} / {items.length} Terjawab
                        </div>
                        <div
                            className={`flex items-center gap-3 px-6 py-2.5 rounded-xl border bg-white shadow-sm ${timeLeft < 180 ? "border-red-300 text-red-600 animate-pulse" : "border-slate-200 text-dark-spruce-900"}`}
                        >
                            <Clock
                                size={20}
                                className={
                                    timeLeft < 180 ? "" : "text-fern-500"
                                }
                            />
                            <span className="text-xl font-black font-mono tracking-widest">
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-slate-200 p-6 md:p-8 rounded-3xl shadow-sm mb-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3 text-dark-spruce-900">
                            <ImageIcon className="text-fern-500" size={24} />
                            <h2 className="text-lg font-bold">
                                Pasangkan Gambar
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 w-1/3 max-w-xs">
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-frosted-mint-500 transition-all duration-500"
                                    style={{ width: `${progressPercent}%` }}
                                ></div>
                            </div>
                            <span className="text-sm font-bold text-slate-400">
                                {progressPercent}%
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:border-fern-300 transition-all hover:shadow-md group"
                            >
                                <div className="aspect-square bg-white p-4 flex items-center justify-center border-b border-slate-100 relative">
                                    <span className="absolute top-3 left-3 w-7 h-7 bg-fern-100 text-fern-800 rounded-lg flex items-center justify-center text-xs font-bold border border-fern-200 z-10">
                                        {item.id}
                                    </span>
                                    <img
                                        src={item.img}
                                        alt={`Soal ${item.id}`}
                                        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-4">
                                    <select
                                        disabled={hasCheated}
                                        value={answers[item.id] || ""}
                                        onChange={(e) =>
                                            handleSelect(
                                                item.id,
                                                e.target.value,
                                            )
                                        }
                                        className={`w-full text-sm font-medium rounded-xl border px-3 py-2.5 outline-none focus:ring-2 focus:ring-fern-500 transition-all cursor-pointer ${
                                            answers[item.id]
                                                ? "bg-frosted-mint-50 border-frosted-mint-500 text-dark-spruce-900"
                                                : "bg-white border-slate-300 text-slate-500"
                                        } ${hasCheated ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        <option value="" disabled>
                                            Pilih Jawaban...
                                        </option>
                                        {options.map((opt, idx) => (
                                            <option
                                                key={idx}
                                                value={opt}
                                                className="text-slate-800"
                                            >
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex justify-end pt-6 border-t border-slate-100">
                        <button
                            disabled={hasCheated}
                            onClick={() => setShowWarning(true)}
                            className="w-full md:w-auto px-10 py-4 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white rounded-xl font-bold shadow-md shadow-frosted-mint-600/20 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Selesai Ujian <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {hasCheated && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white p-8 rounded-[2rem] max-w-md w-full shadow-2xl text-center border border-red-100"
                        >
                            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-200">
                                <AlertCircle size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                Pelanggaran Terdeteksi!
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                Anda terdeteksi membuka tab atau aplikasi lain
                                di luar halaman ujian. Sesuai dengan peraturan
                                kompetisi, ujian Anda diakhiri secara otomatis
                                dan nilai Anda saat ini telah dikirim ke sistem.
                            </p>
                            <button
                                onClick={handleSubmit}
                                className="w-full py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-md shadow-red-600/20"
                            >
                                Kembali ke Dashboard
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showWarning && !hasCheated && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="bg-white p-8 rounded-[2rem] max-w-md w-full shadow-2xl text-center border border-slate-100"
                        >
                            <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200">
                                <AlertCircle size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                Selesaikan Tahap 3?
                            </h2>
                            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                                Anda telah memasangkan{" "}
                                <strong>
                                    {answeredCount} dari {items.length}
                                </strong>{" "}
                                gambar.
                                {answeredCount < items.length &&
                                    " Masih ada gambar yang belum dijawab lho!"}
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setShowWarning(false)}
                                    className="flex-1 py-3.5 bg-slate-100 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    Periksa Lagi
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 py-3.5 bg-frosted-mint-600 text-white rounded-xl font-bold hover:bg-frosted-mint-500 transition-all shadow-md shadow-frosted-mint-600/20"
                                >
                                    Ya, Kirim!
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MatchTheBox;
