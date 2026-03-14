import React, { useState, useEffect, useRef } from "react";
import { Head, router } from "@inertiajs/react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock,
    Send,
    AlertCircle,
    CheckCircle2,
    FileText,
    Info,
    AlertTriangle,
} from "lucide-react";
import LCC from "/public/images/LCC.png";

const FindWords = ({ team_name }) => {
    // Grid Baru (15x15)
    const initialGrid = [
        [
            "A",
            "H",
            "K",
            "N",
            "Q",
            "A",
            "H",
            "A",
            "M",
            "I",
            "I",
            "A",
            "G",
            "Z",
            "R",
        ],
        [
            "D",
            "G",
            "V",
            "V",
            "I",
            "X",
            "M",
            "O",
            "M",
            "K",
            "A",
            "X",
            "M",
            "E",
            "O",
        ],
        [
            "B",
            "B",
            "V",
            "I",
            "Z",
            "L",
            "D",
            "T",
            "W",
            "L",
            "H",
            "Z",
            "L",
            "N",
            "T",
        ],
        [
            "F",
            "M",
            "E",
            "D",
            "S",
            "U",
            "H",
            "N",
            "I",
            "B",
            "E",
            "O",
            "P",
            "H",
            "K",
        ],
        [
            "C",
            "F",
            "G",
            "I",
            "L",
            "G",
            "S",
            "S",
            "I",
            "R",
            "R",
            "R",
            "L",
            "I",
            "U",
        ],
        [
            "I",
            "B",
            "O",
            "A",
            "K",
            "C",
            "F",
            "O",
            "U",
            "T",
            "O",
            "I",
            "E",
            "F",
            "D",
        ],
        [
            "N",
            "Z",
            "S",
            "H",
            "G",
            "I",
            "U",
            "F",
            "N",
            "R",
            "K",
            "G",
            "X",
            "P",
            "N",
        ],
        [
            "M",
            "I",
            "Y",
            "L",
            "H",
            "D",
            "N",
            "O",
            "P",
            "J",
            "G",
            "G",
            "L",
            "E",
            "O",
        ],
        [
            "U",
            "K",
            "V",
            "M",
            "S",
            "C",
            "K",
            "Q",
            "K",
            "I",
            "W",
            "E",
            "P",
            "A",
            "K",
        ],
        [
            "S",
            "D",
            "P",
            "B",
            "K",
            "O",
            "R",
            "A",
            "Z",
            "B",
            "A",
            "M",
            "R",
            "O",
            "I",
        ],
        [
            "A",
            "R",
            "W",
            "K",
            "R",
            "Q",
            "E",
            "I",
            "B",
            "H",
            "M",
            "U",
            "P",
            "G",
            "M",
        ],
        [
            "F",
            "V",
            "N",
            "K",
            "Q",
            "Z",
            "B",
            "R",
            "K",
            "N",
            "H",
            "S",
            "T",
            "M",
            "E",
        ],
        [
            "C",
            "Z",
            "I",
            "M",
            "O",
            "T",
            "O",
            "R",
            "N",
            "P",
            "L",
            "Z",
            "E",
            "I",
            "S",
        ],
        [
            "H",
            "M",
            "T",
            "P",
            "F",
            "N",
            "P",
            "L",
            "U",
            "T",
            "F",
            "K",
            "O",
            "H",
            "M",
        ],
        [
            "C",
            "A",
            "W",
            "A",
            "L",
            "G",
            "O",
            "R",
            "I",
            "T",
            "M",
            "A",
            "V",
            "X",
            "B",
        ],
    ];

    // Soal Baru
    const questionsList = [
        {
            id: 1,
            q: "Satuan yang digunakan untuk mengukur hambatan listrik dalam rangkaian.",
            a: "OHM",
        },
        {
            id: 2,
            q: "Hukum dalam rangkaian listrik yang menjelaskan konservasi arus dan tegangan.",
            a: "KIRCHHOFF",
        },
        {
            id: 3,
            q: "Material dengan konduktivitas antara konduktor dan isolator.",
            a: "SEMIKONDUKTOR",
        },
        {
            id: 4,
            q: "Chip kecil yang digunakan untuk mengontrol perangkat elektronik.",
            a: "MIKROKONTROLER",
        },
        {
            id: 5,
            q: "Perangkat yang mengubah energi listrik menjadi energi gerak.",
            a: "MOTOR",
        },
        {
            id: 6,
            q: "Perusahaan teknologi yang dikenal sebagai pengembang GPU.",
            a: "NVIDIA",
        },
        {
            id: 7,
            q: "Proses mengubah karakteristik sinyal dalam sistem komunikasi.",
            a: "MODULASI",
        },
        {
            id: 8,
            q: "Komponen komputer yang digunakan untuk memproses grafis.",
            a: "GPU",
        },
        {
            id: 9,
            q: "Langkah-langkah sistematis untuk menyelesaikan suatu masalah.",
            a: "ALGORITMA",
        },
        {
            id: 10,
            q: "Lonjakan tegangan sesaat yang dapat merusak perangkat elektronik.",
            a: "SURGE",
        },
    ];

    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [showWarning, setShowWarning] = useState(false);
    const [foundWords, setFoundWords] = useState([]);

    // Sistem Anti Cheat (3 Peringatan)
    const [hasCheated, setHasCheated] = useState(false);
    const [cheatWarningCount, setCheatWarningCount] = useState(0);
    const cheatCounter = useRef(0);
    const lastCheatTime = useRef(0);

    const isSubmitting = useRef(false);

    // --- TAMBAHAN UNTUK AUTO SUBMIT SAAT ADMIN TUTUP TAHAP ---
    const foundWordsRef = useRef(foundWords);
    const timeLeftRef = useRef(timeLeft);

    useEffect(() => {
        foundWordsRef.current = foundWords;
        timeLeftRef.current = timeLeft;
    }, [foundWords, timeLeft]);

    useEffect(() => {
        const checkAdminStatus = () => {
            axios
                .get("/elsmart/game-status")
                .then((response) => {
                    if (
                        response.data.stage_2 == false ||
                        response.data.stage_2 === "false" ||
                        response.data.stage_2 == 0
                    ) {
                        if (isSubmitting.current) return;
                        isSubmitting.current = true;

                        const score = foundWordsRef.current.length * 10;
                        router.post("/elsmart/quiz/submit-stage2", {
                            found_words: foundWordsRef.current,
                            time_used: 15 * 60 - timeLeftRef.current,
                            score: score,
                        });
                    }
                })
                .catch((error) => console.error(error));
        };

        const statusInterval = setInterval(checkAdminStatus, 3000);
        return () => clearInterval(statusInterval);
    }, []);

    // Disesuaikan menjadi 15x15 array
    const [gridStatus, setGridStatus] = useState(
        Array(15)
            .fill()
            .map(() => Array(15).fill({ isFound: false })),
    );

    const [isDragging, setIsDragging] = useState(false);
    const [selectionStart, setSelectionStart] = useState(null);
    const [selectedPath, setSelectedPath] = useState([]);
    const gridRef = useRef(null);

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
            const now = Date.now();
            if (now - lastCheatTime.current > 2000 && !hasCheated) {
                lastCheatTime.current = now;

                if (cheatCounter.current < 3) {
                    cheatCounter.current += 1;
                    setCheatWarningCount(cheatCounter.current);
                } else {
                    setHasCheated(true);
                    setCheatWarningCount(0);
                }
            }
        };

        const handleVisibilityChange = () => {
            if (document.hidden) handleCheating();
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("blur", handleCheating);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
            window.removeEventListener("blur", handleCheating);
        };
    }, [hasCheated]);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const getPath = (start, current) => {
        if (!start || !current) return [];
        let [r1, c1] = start;
        let [r2, c2] = current;

        let dr = r2 - r1;
        let dc = c2 - c1;

        if (Math.abs(dr) < Math.abs(dc) * 0.5) {
            dr = 0;
        } else if (Math.abs(dc) < Math.abs(dr) * 0.5) {
            dc = 0;
        } else {
            const maxDist = Math.max(Math.abs(dr), Math.abs(dc));
            dr = dr > 0 ? maxDist : -maxDist;
            dc = dc > 0 ? maxDist : -maxDist;
        }

        const path = [];
        const steps = Math.max(Math.abs(dr), Math.abs(dc));
        const stepR = dr === 0 ? 0 : dr > 0 ? 1 : -1;
        const stepC = dc === 0 ? 0 : dc > 0 ? 1 : -1;

        let r = r1;
        let c = c1;
        for (let i = 0; i <= steps; i++) {
            // Batas grid diubah menjadi 15
            if (r >= 0 && r < 15 && c >= 0 && c < 15) {
                path.push([r, c]);
            }
            r += stepR;
            c += stepC;
        }
        return path;
    };

    const handlePointerDown = (r, c) => {
        if (hasCheated) return;
        setIsDragging(true);
        setSelectionStart([r, c]);
        setSelectedPath([[r, c]]);
    };

    const handlePointerEnter = (r, c) => {
        if (hasCheated) return;
        if (!isDragging || !selectionStart) return;
        const newPath = getPath(selectionStart, [r, c]);
        if (newPath.length > 0) setSelectedPath(newPath);
    };

    const handlePointerUp = () => {
        if (hasCheated) return;
        setIsDragging(false);
        checkWord();
        setSelectionStart(null);
        setSelectedPath([]);
    };

    const checkWord = () => {
        if (selectedPath.length === 0) return;

        const wordFormed = selectedPath
            .map(([r, c]) => initialGrid[r][c])
            .join("");
        const reversedWordFormed = selectedPath
            .slice()
            .reverse()
            .map(([r, c]) => initialGrid[r][c])
            .join("");

        const matchedQuestion = questionsList.find(
            (q) =>
                (q.a === wordFormed || q.a === reversedWordFormed) &&
                !foundWords.includes(q.id),
        );

        if (matchedQuestion) {
            setFoundWords((prev) => [...prev, matchedQuestion.id]);
            setGridStatus((prevGrid) => {
                const newGrid = [...prevGrid.map((row) => [...row])];
                selectedPath.forEach(([r, c]) => {
                    newGrid[r][c] = { isFound: true };
                });
                return newGrid;
            });
        }
    };

    const handleSubmit = () => {
        if (isSubmitting.current) return;
        isSubmitting.current = true;

        const score = foundWords.length * 10;
        router.post("/elsmart/quiz/submit-stage2", {
            found_words: foundWords,
            time_used: 15 * 60 - timeLeft,
            score: score,
        });
    };

    const progressPercent = Math.round(
        (foundWords.length / questionsList.length) * 100,
    );

    return (
        <div className="min-h-screen bg-fern-50 text-slate-800 font-sans p-4 md:p-8 select-none">
            <Head title="Tahap 2: Find Words - LCC 2026" />

            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="/images/lcc.png"
                            alt="LCC Logo"
                            className="h-10 w-auto"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-dark-spruce-900 tracking-tight">
                                FIND WORDS
                            </h1>
                            <p className="text-xs text-fern-600 font-medium">
                                Penyisihan Tahap 2 - LCC 2026 • Tim {team_name}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 shadow-sm">
                            <CheckCircle2
                                className="text-frosted-mint-500"
                                size={18}
                            />
                            {foundWords.length} / {questionsList.length}{" "}
                            Ditemukan
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-4 flex flex-col gap-4 min-w-0">
                        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col h-[75vh]">
                            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50 rounded-t-3xl">
                                <div className="flex items-center gap-2">
                                    <FileText
                                        className="text-fern-500"
                                        size={20}
                                    />
                                    <h2 className="font-bold text-dark-spruce-900">
                                        Petunjuk Kata
                                    </h2>
                                </div>
                                <span className="text-xs font-bold text-slate-400">
                                    {progressPercent}%
                                </span>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                                <div className="p-3 bg-blue-50/50 border border-blue-100 rounded-xl flex gap-3 text-xs text-blue-800 mb-4 leading-relaxed">
                                    <Info
                                        className="shrink-0 mt-0.5"
                                        size={16}
                                    />
                                    <p>
                                        Tarik garis lurus (horizontal, vertikal,
                                        atau diagonal) pada kotak huruf untuk
                                        menjawab soal di bawah ini.
                                    </p>
                                </div>

                                {questionsList.map((q, idx) => {
                                    const isFound = foundWords.includes(q.id);
                                    return (
                                        <div
                                            key={q.id}
                                            className={`p-4 rounded-xl border transition-all ${isFound ? "bg-fern-50/50 border-fern-200" : "bg-white border-slate-200 shadow-sm"}`}
                                        >
                                            <div className="flex gap-3">
                                                <div
                                                    className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${isFound ? "bg-fern-500 text-white shadow-md shadow-fern-500/20" : "bg-slate-100 text-slate-500"}`}
                                                >
                                                    {isFound ? (
                                                        <CheckCircle2
                                                            size={14}
                                                        />
                                                    ) : (
                                                        idx + 1
                                                    )}
                                                </div>
                                                <div>
                                                    <p
                                                        className={`text-sm font-medium leading-relaxed ${isFound ? "text-slate-400 line-through decoration-slate-300" : "text-slate-700"}`}
                                                    >
                                                        {q.q}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="p-5 border-t border-slate-100 bg-white rounded-b-3xl">
                                <button
                                    onClick={() => setShowWarning(true)}
                                    className="w-full py-3.5 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white rounded-xl font-bold shadow-md shadow-frosted-mint-600/20 transition-all flex items-center justify-center gap-2"
                                >
                                    Selesai Ujian <Send size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 flex flex-col min-w-0">
                        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-4 md:p-8 flex flex-col items-center overflow-x-auto custom-scrollbar">
                            <div
                                ref={gridRef}
                                className="grid gap-[2px] touch-none bg-slate-100 border-4 border-slate-100 rounded-xl"
                                style={{
                                    // Diubah menjadi 15 kolom agar proporsional
                                    gridTemplateColumns: `repeat(15, minmax(0, 1fr))`,
                                }}
                                onPointerLeave={handlePointerUp}
                                onPointerUp={handlePointerUp}
                            >
                                {initialGrid.map((row, r) =>
                                    row.map((letter, c) => {
                                        const isTemporarilySelected =
                                            selectedPath.some(
                                                ([pr, pc]) =>
                                                    pr === r && pc === c,
                                            );
                                        const isPermanentlyFound =
                                            gridStatus[r][c].isFound;

                                        // Sedikit diperbesar karena kotaknya sekarang 15x15 bukan 20x20
                                        let cellClasses =
                                            "w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex items-center justify-center text-sm sm:text-base md:text-lg font-bold font-mono transition-colors cursor-pointer ";

                                        if (isPermanentlyFound) {
                                            cellClasses +=
                                                "bg-frosted-mint-500 text-white rounded-md shadow-sm";
                                        } else if (isTemporarilySelected) {
                                            cellClasses +=
                                                "bg-fern-200 text-fern-900 rounded-md scale-110 z-10 shadow-md";
                                        } else {
                                            cellClasses +=
                                                "bg-white text-slate-600 hover:bg-slate-50";
                                        }

                                        return (
                                            <div
                                                key={`${r}-${c}`}
                                                className={cellClasses}
                                                onPointerDown={(e) => {
                                                    e.target.releasePointerCapture(
                                                        e.pointerId,
                                                    );
                                                    handlePointerDown(r, c);
                                                }}
                                                onPointerEnter={() =>
                                                    handlePointerEnter(r, c)
                                                }
                                            >
                                                {letter}
                                            </div>
                                        );
                                    }),
                                )}
                            </div>

                            <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-white border border-slate-200 rounded"></div>{" "}
                                    Huruf Acak
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-fern-200 rounded"></div>{" "}
                                    Sedang Dipilih
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-frosted-mint-500 rounded"></div>{" "}
                                    Jawaban Benar
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Peringatan Anti-Cheat 1 s.d 3 */}
            <AnimatePresence>
                {cheatWarningCount > 0 && !hasCheated && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white p-8 rounded-[2rem] max-w-md w-full shadow-2xl text-center border border-amber-200"
                        >
                            <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200">
                                <AlertTriangle size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                Peringatan! ({cheatWarningCount}/3)
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                Anda terdeteksi keluar dari halaman ujian.
                                Tolong jangan membuka tab atau aplikasi lain
                                selama ujian berlangsung.
                                <strong>
                                    {" "}
                                    Jika peringatan mencapai 3 kali, ujian Anda
                                    akan otomatis diakhiri.
                                </strong>
                            </p>
                            <button
                                onClick={() => setCheatWarningCount(0)}
                                className="w-full py-4 bg-amber-500 text-white rounded-xl font-bold hover:bg-amber-600 transition-all shadow-md shadow-amber-500/20"
                            >
                                Saya Mengerti
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Modal Blokir Mutlak (Cheat ke-4) */}
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
                                Pelanggaran Batas Maksimal!
                            </h2>
                            <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                Anda telah mengabaikan peringatan sebanyak 3
                                kali dengan membuka tab atau aplikasi lain di
                                luar halaman ujian. Sesuai dengan peraturan,
                                ujian Anda dihentikan secara otomatis.
                            </p>
                            <button
                                onClick={handleSubmit}
                                className="w-full py-4 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all shadow-md shadow-red-600/20"
                            >
                                Kirim & Kembali ke Dashboard
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
                            className="bg-white p-8 rounded-[2rem] max-w-md w-full shadow-2xl text-center border border-slate-100"
                        >
                            <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-200">
                                <AlertCircle size={40} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                Selesaikan Tahap 2?
                            </h2>
                            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                                Anda telah menemukan{" "}
                                <strong>
                                    {foundWords.length} dari{" "}
                                    {questionsList.length}
                                </strong>{" "}
                                kata.
                                {foundWords.length < questionsList.length &&
                                    " Masih ada kata yang belum ditemukan lho!"}
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setShowWarning(false)}
                                    className="flex-1 py-3.5 bg-slate-100 border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                >
                                    Batal
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="flex-1 py-3.5 bg-frosted-mint-600 text-white rounded-xl font-bold hover:bg-frosted-mint-500 transition-all shadow-md shadow-frosted-mint-600/20"
                                >
                                    Kirim Jawaban
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FindWords;
