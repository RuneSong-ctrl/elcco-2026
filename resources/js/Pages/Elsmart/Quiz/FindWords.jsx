import React, { useState, useEffect, useRef } from "react";
import { Head, useForm } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    Clock,
    Send,
    AlertCircle,
    CheckCircle2,
    FileText,
    Info,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

const FindWords = ({ team_name }) => {
    const initialGrid = [
        [
            "A",
            "V",
            "W",
            "R",
            "E",
            "S",
            "I",
            "S",
            "T",
            "O",
            "R",
            "E",
            "N",
            "L",
            "I",
            "P",
            "D",
            "C",
            "N",
            "A",
        ],
        [
            "S",
            "R",
            "A",
            "Q",
            "L",
            "H",
            "R",
            "M",
            "E",
            "N",
            "L",
            "U",
            "C",
            "H",
            "S",
            "Y",
            "D",
            "R",
            "A",
            "W",
        ],
        [
            "K",
            "A",
            "D",
            "O",
            "K",
            "O",
            "H",
            "M",
            "L",
            "X",
            "G",
            "X",
            "M",
            "J",
            "E",
            "A",
            "D",
            "H",
            "N",
            "G",
        ],
        [
            "A",
            "C",
            "F",
            "I",
            "E",
            "L",
            "K",
            "W",
            "A",
            "R",
            "L",
            "M",
            "I",
            "P",
            "O",
            "T",
            "K",
            "A",
            "S",
            "O",
        ],
        [
            "R",
            "H",
            "G",
            "I",
            "K",
            "B",
            "P",
            "T",
            "R",
            "A",
            "F",
            "O",
            "I",
            "A",
            "P",
            "H",
            "S",
            "B",
            "B",
            "R",
        ],
        [
            "G",
            "O",
            "H",
            "I",
            "S",
            "D",
            "R",
            "O",
            "R",
            "L",
            "I",
            "O",
            "V",
            "I",
            "R",
            "E",
            "O",
            "I",
            "A",
            "T",
        ],
        [
            "A",
            "R",
            "I",
            "P",
            "I",
            "E",
            "L",
            "S",
            "M",
            "A",
            "R",
            "T",
            "K",
            "T",
            "I",
            "B",
            "L",
            "A",
            "R",
            "K",
        ],
        [
            "M",
            "A",
            "G",
            "K",
            "O",
            "R",
            "T",
            "I",
            "N",
            "C",
            "N",
            "O",
            "T",
            "R",
            "O",
            "Y",
            "M",
            "I",
            "L",
            "Q",
        ],
        [
            "I",
            "N",
            "D",
            "A",
            "R",
            "N",
            "N",
            "L",
            "R",
            "O",
            "A",
            "I",
            "K",
            "E",
            "G",
            "K",
            "B",
            "T",
            "N",
            "O",
        ],
        [
            "W",
            "G",
            "W",
            "O",
            "Y",
            "D",
            "K",
            "F",
            "D",
            "K",
            "K",
            "O",
            "Q",
            "G",
            "G",
            "R",
            "I",
            "G",
            "Y",
            "N",
        ],
        [
            "A",
            "H",
            "A",
            "P",
            "U",
            "C",
            "D",
            "C",
            "Y",
            "I",
            "A",
            "K",
            "A",
            "A",
            "G",
            "A",
            "B",
            "U",
            "M",
            "B",
        ],
        [
            "I",
            "E",
            "S",
            "K",
            "I",
            "E",
            "R",
            "U",
            "D",
            "G",
            "P",
            "K",
            "R",
            "I",
            "S",
            "K",
            "N",
            "V",
            "U",
            "N",
        ],
        [
            "T",
            "X",
            "T",
            "H",
            "D",
            "B",
            "A",
            "T",
            "E",
            "R",
            "A",
            "I",
            "A",
            "M",
            "O",
            "O",
            "K",
            "G",
            "T",
            "G",
        ],
        [
            "K",
            "O",
            "A",
            "O",
            "Q",
            "R",
            "R",
            "T",
            "E",
            "L",
            "S",
            "C",
            "O",
            "L",
            "I",
            "N",
            "L",
            "Q",
            "A",
            "D",
        ],
        [
            "R",
            "I",
            "R",
            "S",
            "C",
            "F",
            "S",
            "G",
            "I",
            "N",
            "I",
            "D",
            "I",
            "H",
            "G",
            "S",
            "O",
            "F",
            "L",
            "N",
        ],
        [
            "A",
            "I",
            "U",
            "A",
            "K",
            "A",
            "F",
            "H",
            "E",
            "C",
            "T",
            "S",
            "I",
            "I",
            "L",
            "E",
            "P",
            "Q",
            "G",
            "D",
        ],
        [
            "S",
            "O",
            "S",
            "D",
            "H",
            "R",
            "T",
            "E",
            "H",
            "F",
            "O",
            "N",
            "I",
            "D",
            "U",
            "R",
            "A",
            "R",
            "T",
            "Y",
        ],
        [
            "R",
            "D",
            "A",
            "K",
            "O",
            "N",
            "D",
            "U",
            "K",
            "S",
            "R",
            "O",
            "L",
            "E",
            "I",
            "K",
            "T",
            "Q",
            "A",
            "S",
        ],
        [
            "A",
            "W",
            "F",
            "H",
            "A",
            "S",
            "A",
            "Y",
            "R",
            "S",
            "E",
            "B",
            "O",
            "N",
            "G",
            "W",
            "A",
            "S",
            "D",
            "T",
        ],
        [
            "W",
            "R",
            "D",
            "S",
            "E",
            "I",
            "G",
            "R",
            "E",
            "W",
            "T",
            "E",
            "G",
            "Y",
            "W",
            "R",
            "K",
            "T",
            "I",
            "Q",
        ],
    ];

    const questionsList = [
        {
            id: 1,
            q: "Komponen yang memiliki fungsi untuk menghambat arus listrik",
            a: "RESISTOR",
        },
        { id: 2, q: "Aliran muatan listrik disebut juga?", a: "ARUS" },
        { id: 3, q: "Sumber arus listrik searah", a: "DC" },
        {
            id: 4,
            q: "Besaran listrik yang mempunyai satuan Volt",
            a: "TEGANGAN",
        },
        {
            id: 5,
            q: "Komponen elektronika yang menyimpan energi dalam medan listrik",
            a: "KAPASITOR",
        },
        {
            id: 6,
            q: "Komponen elektronika yang menyimpan energi dalam medan magnet",
            a: "INDUKTOR",
        },
        {
            id: 7,
            q: "Hukum dasar yang menyebutkan terkait hubungan antara tegangan, arus dan hambatan",
            a: "OHM",
        },
        {
            id: 8,
            q: "Susunan rangkaian listrik dengan hanya ada satu jalur arus",
            a: "SERI",
        },
        {
            id: 9,
            q: "Alat untuk menaikan atau menurunkan tegangan",
            a: "TRAFO",
        },
        {
            id: 10,
            q: "Komponen yang dapat mengubah energi kimia menjadi arus listrik dan digunakan sumber energi",
            a: "BATERAI",
        },
    ];

    const [timeLeft, setTimeLeft] = useState(15 * 60);
    const [showWarning, setShowWarning] = useState(false);
    const [foundWords, setFoundWords] = useState([]);

    const [gridStatus, setGridStatus] = useState(
        Array(20)
            .fill()
            .map(() => Array(20).fill({ isFound: false })),
    );

    const [isDragging, setIsDragging] = useState(false);
    const [selectionStart, setSelectionStart] = useState(null);
    const [selectedPath, setSelectedPath] = useState([]);

    const gridRef = useRef(null);

    const { post } = useForm({
        time_used: 0,
        score: 0,
        found_words: [],
    });

    useEffect(() => {
        if (timeLeft <= 0) {
            handleSubmit();
            return;
        }
        const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

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
            if (r >= 0 && r < 20 && c >= 0 && c < 20) {
                path.push([r, c]);
            }
            r += stepR;
            c += stepC;
        }
        return path;
    };

    const handlePointerDown = (r, c) => {
        setIsDragging(true);
        setSelectionStart([r, c]);
        setSelectedPath([[r, c]]);
    };

    const handlePointerEnter = (r, c) => {
        if (!isDragging || !selectionStart) return;
        const newPath = getPath(selectionStart, [r, c]);
        if (newPath.length > 0) setSelectedPath(newPath);
    };

    const handlePointerUp = () => {
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
        const score = foundWords.length * 10;
        post("/elsmart/quiz/submit-stage2", {
            data: {
                found_words: foundWords,
                time_used: 15 * 60 - timeLeft,
                score: score,
            },
        });
    };

    const progressPercent = Math.round(
        (foundWords.length / questionsList.length) * 100,
    );

    return (
        <div className="min-h-screen bg-fern-50 text-slate-800 font-sans p-4 md:p-8 select-none">
            <Head title="Tahap 2: Find Words" />

            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                    <div className="flex items-center gap-4">
                        <img src={elsmart} alt="Logo" className="h-10 w-auto" />
                        <div>
                            <h1 className="text-xl font-bold text-dark-spruce-900 tracking-tight">
                                FIND WORDS
                            </h1>
                            <p className="text-xs text-fern-600 font-medium">
                                Penyisihan Tahap 2 • Tim {team_name}
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
                                    gridTemplateColumns: `repeat(20, minmax(0, 1fr))`,
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

                                        let cellClasses =
                                            "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center text-xs sm:text-sm md:text-base font-bold font-mono transition-colors cursor-pointer ";

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

            {showWarning && (
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
                                {foundWords.length} dari {questionsList.length}
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
        </div>
    );
};

export default FindWords;
