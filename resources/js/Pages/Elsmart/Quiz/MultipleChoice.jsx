import React, { useState, useEffect, useRef } from "react";
import { Head, router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock,
    ChevronLeft,
    ChevronRight,
    Send,
    AlertCircle,
    AlertTriangle,
} from "lucide-react";
import LCC from "/public/images/LCC.png";

const MultipleChoice = ({ team_name }) => {
    const questions = [
        {
            id: 1,
            q: "Sebuah file berukuran 300 MB akan diunduh melalui koneksi 10 Gbps. Berapa lama waktu yang diperlukan untuk menyelesaikan unduhan?",
            a: [
                "240 milliseconds",
                "325 milliseconds",
                "25 milliseconds",
                "350 milliseconds",
            ],
            correct: 0,
        },
        {
            id: 2,
            q: "Beban 20 Ω dihubungkan pada sumber 220 V. Hitung arus yang mengalir!",
            a: ["10 A", "11 A", "12 A", "13 A"],
            correct: 1,
        },
        {
            id: 3,
            q: "Jika tegangan 220 V dan arus 2 A, maka daya listriknya adalah …",
            a: ["110 W", "220 W", "440 W", "660 W"],
            correct: 2,
        },
        {
            id: 4,
            q: "SUTET (Saluran Udara Tegangan Ekstra Tinggi) di Indonesia umumnya bertegangan…",
            a: ["70 kV", "150 kV", "275 kV", "500 kV"],
            correct: 3,
        },
        {
            id: 5,
            q: "Sebuah trafo step-up memiliki jumlah lilitan pada kumparan primer sebanyak 200 lilitan dan pada kumparan sekunder sebanyak 1000 lilitan. Jika tegangan input pada kumparan primer adalah 50 volt, berapakah tegangan output pada kumparan sekunder?",
            a: ["100 V", "150 V", "200 V", "250 V"],
            correct: 3,
        },
        {
            id: 6,
            q: "Sebuah kabel memiliki resistansi 0.02 Ω dan mengalirkan arus 200 A. Hitung rugi daya.",
            a: ["600 W", "700 W", "800 W", "900 W"],
            correct: 2,
        },
        {
            id: 7,
            q: "Tegangan listrik rumah tangga 1 fasa di Indonesia umumnya adalah…",
            a: ["110 V", "220 V", "380 V", "400 V"],
            correct: 1,
        },
        {
            id: 8,
            q: "Sistem tenaga listrik terdiri dari tiga bagian utama, yaitu…",
            a: [
                "Pembangkit, Transmisi, Distribusi",
                "Produksi, Pengiriman, Konsumen",
                "Pembangkit, Distribusi, Transmisi",
                "Sumber, Jaringan, Beban",
            ],
            correct: 0,
        },
        {
            id: 9,
            q: "Frekuensi standar sistem tenaga listrik di Indonesia adalah…",
            a: ["40 Hz", "45 Hz", "50 Hz", "55 Hz"],
            correct: 2,
        },
        {
            id: 10,
            q: "1 kWh sama dengan …",
            a: ["3600 Joule", "360 Joule", "36.000 Joule", "3.600.000 Joule"],
            correct: 3,
        },
        {
            id: 11,
            q: "Frekuensi sinyal dengan periode 0,02 s adalah…",
            a: ["10 Hz", "25 Hz", "40 Hz", "50 Hz"],
            correct: 3,
        },
        {
            id: 12,
            q: "Sebuah kapasitor 10 µF diisi hingga 12 V. Berapa energi yang tersimpan di dalamnya?",
            a: ["0.36 mJ", "0.6 mJ", "0.72 mJ", "1.2 mJ"],
            correct: 2,
        },
        {
            id: 13,
            q: "Sebuah gelombang AC memiliki nilai RMS 10 V. Berapa nilai puncaknya?",
            a: ["10 V", "12 V", "14,1 V", "16 V"],
            correct: 2,
        },
        {
            id: 14,
            q: "Output dari gerbang logika OR dengan input 1 dan 0 adalah...",
            a: ["0", "1", "2", "Tidak terdefinisi"],
            correct: 1,
        },
        {
            id: 15,
            q: "Bilangan biner 1010 jika dikonversi ke bilangan desimal adalah…",
            a: ["8", "9", "10", "11"],
            correct: 2,
        },
        {
            id: 16,
            q: "Berapa hasil konversi dari bilangan oktal 265 menjadi bilangan biner?",
            a: ["1011 0101", "1100 0011", "1010 1100", "0110 1001"],
            correct: 0,
        },
        {
            id: 17,
            q: "Arus searah (DC) dapat dihasilkan oleh …",
            a: ["Generator AC", "Trafo step-up", "Baterai", "Transformator"],
            correct: 2,
        },
        {
            id: 18,
            q: "RAM merupakan singkatan dari…",
            a: [
                "Read Active Memory",
                "Read Around Memory",
                "Random Access Memory",
                "Ready Access Module",
            ],
            correct: 2,
        },
        {
            id: 19,
            q: "Fungsi kapasitor dalam rangkaian penyearah adalah...",
            a: [
                "Meningkatkan frekuensi",
                "Menyaring tegangan DC",
                "Menstabilkan arus AC",
                "Menghambat arus DC",
            ],
            correct: 1,
        },
        {
            id: 20,
            q: "Komponen utama komputer yang berfungsi sebagai otak pemrosesan adalah …",
            a: ["RAM", "Hard disk", "CPU", "ROM"],
            correct: 2,
        },
        {
            id: 21,
            q: "Sebuah sinyal diinjeksikan ke dalam kabel koaksial dengan daya 1 Watt. Setelah melewati kabel tersebut, daya output terukur menjadi 10 mW. Berapakah nilai total redaman (atenuasi) kabel tersebut dalam satuan dB?",
            a: ["10 dB", "20 dB", "30 dB", "40 dB"],
            correct: 1,
        },
        {
            id: 22,
            q: "Kecepatan bit (bit rate) fisik sebuah saluran adalah 1 Gbps. Jika overhead protokol dan retransmission menyebabkan efisiensi throughput hanya 75%, berapakah throughput efektifnya dalam Mbps?",
            a: ["100 Mbps", "500 Mbps", "750 Mbps", "800 Mbps"],
            correct: 2,
        },
        {
            id: 23,
            q: "Sebuah sinyal sinus memiliki amplitudo puncak 10 V. Tentukan nilai RMS-nya!",
            a: ["5 V", "7,07 V", "8,66 V", "10 V"],
            correct: 1,
        },
        {
            id: 24,
            q: "Sebuah sistem komunikasi digital menggunakan modulasi QPSK (Quadrature Phase-Shift Keying). Jika laju baud (symbol rate) adalah 1 Mbaud, berapakah laju bit (bit rate) yang dihasilkan?",
            a: ["0,5 Mbps", "1 Mbps", "2 Mbps", "4 Mbps"],
            correct: 2,
        },
        {
            id: 25,
            q: "Sebuah sinyal memiliki frekuensi 5 kHz. Tentukan periodenya!",
            a: ["0,02 ms", "0,2 ms", "0,002 ms", "0,5 ms"],
            correct: 1,
        },
        {
            id: 26,
            q: "Sebuah sinyal sinusoidal memiliki amplitudo maksimum 5 V. Nilai RMS-nya adalah…",
            a: ["2,5 V", "3,54 V", "5 V", "1,41 V"],
            correct: 1,
        },
        {
            id: 27,
            q: "Proses penyampaian informasi dari satu pihak ke pihak lain menggunakan media tertentu disebut dengan…",
            a: [
                "Komunikasi Data",
                "Transmisi",
                "Telekomunikasi",
                "Jaringan Komputer",
            ],
            correct: 2,
        },
        {
            id: 28,
            q: "Setiap perangkat yang terhubung ke internet memiliki alamat unik untuk identifikasi dan lokasi. Alamat ini dikenal sebagai 'Alamat IP', di mana 'IP' adalah singkatan dari…",
            a: [
                "Internal Processing",
                "Information Packet",
                "Internet Provider",
                "Internet Protocol",
            ],
            correct: 3,
        },
        {
            id: 29,
            q: "Satuan dasar yang digunakan untuk mengukur frekuensi sinyal dalam sistem komunikasi adalah:",
            a: ["Decibel (dB)", "Baud", "Bit per Second (bps)", "Hertz (Hz)"],
            correct: 3,
        },
        {
            id: 30,
            q: "Frekuensi gelombang mikro digunakan dalam rentang …",
            a: [
                "1 Hz – 10 Hz",
                "100 Hz – 1 kHz",
                "1 MHz – 300 MHz",
                "300 MHz – 300 GHz",
            ],
            correct: 3,
        },
        {
            id: 31,
            q: "Harddisk 2 TB terisi 750 GB → sisa (%)",
            a: ["25%", "37.5%", "50%", "62.5%"],
            correct: 3,
        },
        {
            id: 32,
            q: "Konversikan bilangan desimal 45 ke dalam biner.",
            a: ["100101", "101101", "110011", "111000"],
            correct: 1,
        },
        {
            id: 33,
            q: "1 Kilobyte (KB) setara dengan...",
            a: ["1000 Byte", "1008 Byte", "1024 Byte", "100 Byte"],
            correct: 2,
        },
        {
            id: 34,
            q: "Paket 1500 byte di 10 Mbps → waktu transmisi",
            a: ["0.4 ms", "1.2 ms", "1.5 ms", "12 ms"],
            correct: 1,
        },
        {
            id: 35,
            q: "Sebuah CPU memiliki frekuensi clock 2 MHz. Berapa lama waktu yang dibutuhkan untuk satu siklus clock? (T = 1/f)",
            a: ["2 detik", "0.5 detik", "2 milidetik", "0.5 mikrodetik"],
            correct: 3,
        },
        {
            id: 36,
            q: "Hitung hasil dari operasi logika (A + B)’ jika A = 1 dan B = 0.",
            a: ["0", "1", "2", "Tidak ada"],
            correct: 0,
        },
        {
            id: 37,
            q: "Komponen komputer yang digunakan untuk menyimpan data dalam jangka panjang adalah",
            a: ["CPU", "Cache", "ROM", "Hard disk"],
            correct: 3,
        },
        {
            id: 38,
            q: "Dalam konteks Competitive Programming, mengapa bahasa seperti C++ seringkali menjadi pilihan utama dibandingkan Python untuk kasus yang sangat mengutamakan kecepatan eksekusi?",
            a: [
                "C++ memiliki lebih banyak library bawaan.",
                "C++ lebih mudah dipelajari.",
                "C++ umumnya adalah bahasa compiled yang menghasilkan kode mesin yang lebih cepat, sedangkan Python adalah bahasa interpreted.",
                "Python adalah bahasa compiled.",
            ],
            correct: 2,
        },
        {
            id: 39,
            q: "Alat berikut termasuk input device, kecuali …",
            a: ["Keyboard", "Mouse", "Scanner", "Monitor"],
            correct: 3,
        },
        {
            id: 40,
            q: "Sistem operasi yang bersifat open source adalah …",
            a: ["Windows", "macOS", "Linux", "DOS"],
            correct: 2,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 Menit
    const [showSubmitWarning, setShowSubmitWarning] = useState(false);

    // Sistem Anti Cheat (Maksimal 3 peringatan, ke-4 otomatis blokir)
    const [hasCheated, setHasCheated] = useState(false);
    const [cheatWarningCount, setCheatWarningCount] = useState(0);
    const cheatCounter = useRef(0);
    const lastCheatTime = useRef(0);

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
            // Mencegah double trigger dalam waktu 2 detik (karena blur & visibility hidden jalan bersamaan)
            const now = Date.now();
            if (now - lastCheatTime.current > 2000 && !hasCheated) {
                lastCheatTime.current = now;

                if (cheatCounter.current < 3) {
                    cheatCounter.current += 1;
                    setCheatWarningCount(cheatCounter.current);
                } else {
                    // Peringatan ke-4 = Auto Submit / Block
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

    const handleSelect = (qIndex, aIndex) => {
        if (hasCheated) return;
        setAnswers({ ...answers, [qIndex]: aIndex });
    };

    const handleSubmit = () => {
        let score = 0;
        // Penilaian 2.5 per soal (40 soal * 2.5 = 100 poin)
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correct) score += 2.5;
        });

        router.post("/elsmart/quiz/submit", {
            answers: answers,
            time_used: 30 * 60 - timeLeft,
            score: score,
        });
    };

    const cardClass =
        "bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden";

    return (
        <div className="min-h-screen bg-fern-50 text-slate-800 font-sans p-4 md:p-8 select-none">
            <Head title="Tahap 1: Multiple Choice - LCC 2026" />

            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={LCC}
                            alt="LCC Logo"
                            className="h-12 w-auto"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-slate-900 uppercase tracking-tight">
                                Multiple Choice
                            </h1>
                            <p className="text-sm text-fern-600 font-medium">
                                Penyisihan Tahap 1 - LCC 2026
                            </p>
                        </div>
                    </div>

                    <div
                        className={`flex items-center gap-3 px-6 py-3 rounded-2xl border bg-white shadow-sm ${
                            timeLeft < 300
                                ? "border-red-300 text-red-600"
                                : "border-slate-200 text-slate-900"
                        }`}
                    >
                        <Clock
                            size={20}
                            className={
                                timeLeft < 300
                                    ? "animate-pulse"
                                    : "text-fern-500"
                            }
                        />
                        <span className="text-2xl font-black font-mono tracking-widest">
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className={`${cardClass} p-8 md:p-12`}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="bg-fern-100 text-fern-800 px-4 py-1.5 rounded-lg font-bold text-sm tracking-wide border border-fern-200">
                                        Soal {currentIndex + 1} /{" "}
                                        {questions.length}
                                    </span>
                                    <div className="h-px flex-1 bg-slate-100"></div>
                                </div>

                                <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-relaxed mb-10">
                                    {questions[currentIndex].q}
                                </h2>

                                <div className="space-y-4">
                                    {questions[currentIndex].a.map(
                                        (option, idx) => {
                                            const isSelected =
                                                answers[currentIndex] === idx;
                                            return (
                                                <button
                                                    key={idx}
                                                    onClick={() =>
                                                        handleSelect(
                                                            currentIndex,
                                                            idx,
                                                        )
                                                    }
                                                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-5 group ${
                                                        isSelected
                                                            ? "bg-frosted-mint-50 border-frosted-mint-500 text-slate-900"
                                                            : "bg-white border-slate-200 hover:bg-fern-50 hover:border-fern-300 text-slate-700"
                                                    }`}
                                                >
                                                    <span
                                                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold border transition-colors ${
                                                            isSelected
                                                                ? "bg-frosted-mint-500 border-frosted-mint-500 text-white"
                                                                : "bg-slate-50 border-slate-200 group-hover:border-fern-300 group-hover:bg-white text-slate-500 group-hover:text-fern-600"
                                                        }`}
                                                    >
                                                        {String.fromCharCode(
                                                            65 + idx,
                                                        )}
                                                    </span>
                                                    <span className="font-medium text-lg leading-snug">
                                                        {option}
                                                    </span>
                                                </button>
                                            );
                                        },
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="flex justify-between items-center mt-8">
                            <button
                                disabled={currentIndex === 0}
                                onClick={() =>
                                    setCurrentIndex(currentIndex - 1)
                                }
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-800 hover:text-slate-900 hover:bg-slate-200 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
                            >
                                <ChevronLeft size={20} /> Sebelumnya
                            </button>

                            {currentIndex === questions.length - 1 ? (
                                <button
                                    onClick={() => setShowSubmitWarning(true)}
                                    className="flex items-center gap-2 px-8 py-3 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white rounded-xl font-bold shadow-md shadow-frosted-mint-600/20 transition-all active:scale-95"
                                >
                                    Selesai Ujian <Send size={18} />
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        setCurrentIndex(currentIndex + 1)
                                    }
                                    className="flex items-center gap-2 px-8 py-3 bg-slate-800 hover:bg-fern-700 text-white rounded-xl font-bold transition-all shadow-md active:scale-95"
                                >
                                    Selanjutnya <ChevronRight size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className={`${cardClass} p-6 sticky top-8`}>
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
                                Navigasi Soal
                            </h3>
                            <div className="grid grid-cols-5 gap-2">
                                {questions.map((_, idx) => {
                                    const isAnswered =
                                        answers[idx] !== undefined;
                                    const isCurrent = currentIndex === idx;

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentIndex(idx)}
                                            className={`h-10 rounded-lg text-sm font-semibold transition-all border ${
                                                isCurrent
                                                    ? "bg-slate-800 border-slate-800 text-white scale-105 shadow-md z-10"
                                                    : isAnswered
                                                      ? "bg-frosted-mint-500 border-frosted-mint-600 text-white"
                                                      : "bg-slate-50 border-slate-200 text-slate-500 hover:border-fern-400 hover:bg-fern-50"
                                            }`}
                                        >
                                            {idx + 1}
                                        </button>
                                    );
                                })}
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase mb-3">
                                    <span>Progress</span>
                                    <span className="text-fern-600">
                                        {Object.keys(answers).length} /{" "}
                                        {questions.length} Terjawab
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-frosted-mint-500 transition-all duration-500 ease-out"
                                        style={{
                                            width: `${(Object.keys(answers).length / questions.length) * 100}%`,
                                        }}
                                    ></div>
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

            {/* Modal Submit Normal */}
            <AnimatePresence>
                {showSubmitWarning && !hasCheated && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-white p-8 rounded-[2rem] max-w-md w-full shadow-2xl text-center border border-slate-100"
                        >
                            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-200">
                                <Send size={36} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-3">
                                Selesaikan Ujian?
                            </h2>
                            <p className="text-slate-500 mb-8 leading-relaxed text-sm">
                                Pastikan semua jawaban sudah terisi dengan
                                benar. Anda tidak dapat mengubah jawaban setelah
                                menekan tombol konfirmasi.
                            </p>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setShowSubmitWarning(false)}
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

export default MultipleChoice;
