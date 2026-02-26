import React, { useState, useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock,
    ChevronLeft,
    ChevronRight,
    Send,
    AlertCircle,
    CheckCircle2,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

const MultipleChoice = ({ team_name }) => {
    const questions = [
        {
            id: 1,
            q: "Bahan yang memiliki sifat konduktor dan isolator tergantung pada kondisi tertentu disebut…",
            a: [
                "Konduktor",
                "Isolator",
                "Semikonduktor",
                "Superkonduktor",
                "Dielektrik",
            ],
            correct: 2,
        },
        {
            id: 2,
            q: "Komponen yang dapat menyimpan energi listrik disebut?",
            a: ["Dioda", "Transistor", "Kapasitor", "Resistor", "Diode"],
            correct: 2,
        },
        {
            id: 3,
            q: "Sebuah saluran transmisi 150 kV, 100 km memiliki parameter R = 0.1 Ω/km, X = 0.5 Ω/km. Hitung impedansi total saluran.",
            a: [
                "10 + j50 Ω",
                "15 + j45 Ω",
                "20 + j40 Ω",
                "25 + j35 Ω",
                "30 + j30 Ω",
            ],
            correct: 0,
        },
        {
            id: 4,
            q: "Satuan kuat arus listrik dalam sistem SI adalah …",
            a: ["Volt", "Ohm", "Ampere", "Coulomb", "Joule"],
            correct: 2,
        },
        {
            id: 5,
            q: "Tegangan listrik rumah tangga 1 fasa di Indonesia umumnya adalah…",
            a: ["110 V", "220 V", "380 V", "400 V", "450 V"],
            correct: 1,
        },
        {
            id: 6,
            q: "Komponen yang menyimpan energi dalam medan magnet adalah …",
            a: ["Resistor", "Kapasitor", "Transistor", "Induktor", "Dioda"],
            correct: 3,
        },
        {
            id: 7,
            q: "Jika tegangan 12 V mengalir pada resistor 6 Ω, maka arusnya adalah ....",
            a: ["0,5 A", "1 A", "1,5 A", "2 A", "3 A"],
            correct: 3,
        },
        {
            id: 8,
            q: "Sebuah trafo step-up memiliki lilitan primer 200 dan sekunder 1000. Jika input 50V, berapa outputnya?",
            a: ["100 V", "150 V", "200 V", "250 V", "300 V"],
            correct: 3,
        },
        {
            id: 9,
            q: "Sebuah kabel memiliki resistansi 0.02 Ω dan mengalirkan arus 200 A. Hitung rugi daya.",
            a: ["600 W", "700 W", "800 W", "900 W", "1000 W"],
            correct: 2,
        },
        {
            id: 10,
            q: "Beban rumah tangga 1.200 W pada tegangan 220 V. Arus yang diperlukan adalah…",
            a: ["3 A", "5,45 A", "6 A", "7 A", "12 A"],
            correct: 1,
        },
        {
            id: 11,
            q: "Jumlah muatan listrik yang mengalir dalam satu detik disebut...",
            a: ["Tegangan", "Arus", "Resistansi", "Energi", "Frekuensi"],
            correct: 1,
        },
        {
            id: 12,
            q: "Delay besar dalam jaringan kontrol menyebabkan…",
            a: [
                "Stabilitas meningkat",
                "Osilasi",
                "Daya naik",
                "Noise hilang",
                "Daya Turun",
            ],
            correct: 1,
        },
        {
            id: 13,
            q: "Apa fungsi dari BTS (Base Transceiver Station) dalam sistem telekomunikasi seluler?",
            a: [
                "Menghubungkan perangkat pengguna dengan jaringan inti",
                "Mengatur alamat IP",
                "Mengkodekan sinyal audio",
                "Menyimpan data pengguna",
                "Menghubungkan perangkat di sekitar",
            ],
            correct: 0,
        },
        {
            id: 14,
            q: "Manakah dari berikut ini yang merupakan alamat IP privat?",
            a: [
                "192.168.1.1",
                "8.8.8.8",
                "172.32.0.1",
                "1.1.1.1",
                "255.255.255.0",
            ],
            correct: 0,
        },
        {
            id: 15,
            q: "Satelit bekerja pada downlink 12 GHz. Panjang gelombangnya adalah …",
            a: ["2.5 cm", "3 cm", "12 cm", "25 cm", "2 cm"],
            correct: 0,
        },
        {
            id: 16,
            q: "Protokol yang digunakan untuk pengiriman file di jaringan adalah ?",
            a: ["HTTP", "SMTP", "RDR", "RDP", "FTP"],
            correct: 4,
        },
        {
            id: 17,
            q: "Perangkat dalam komunikasi nirkabel?",
            a: ["Kabel Lan", "Router", "Monitor", "Telepon Bell", "Modem DSL"],
            correct: 1,
        },
        {
            id: 18,
            q: "Proses mengubah sinyal analog menjadi digital disebut …",
            a: [
                "Modulasi",
                "Demodulasi",
                "Sampling dan kuantisasi",
                "Multiplexing",
                "Encoding",
            ],
            correct: 2,
        },
        {
            id: 19,
            q: "Dalam komunikasi radio, frekuensi pembawa disebut …",
            a: [
                "Baseband",
                "Carrier",
                "Modulator",
                "Demodulator",
                "Transmiter",
            ],
            correct: 1,
        },
        {
            id: 20,
            q: "Elemen dasar yang mengubah informasi menjadi sinyal listrik untuk ditransmisikan adalah…",
            a: [
                "Transmitter",
                "Receiver",
                "Media Transmisi",
                "Protokol",
                "Noise",
            ],
            correct: 0,
        },
        {
            id: 21,
            q: "Media transmisi menggunakan gelombang elektromagnetik tanpa kabel fisik disebut…",
            a: [
                "Wireless",
                "Kabel Coaxial",
                "Serat Optik",
                "Twisted Pair",
                "Gelombang Terpandu",
            ],
            correct: 0,
        },
        {
            id: 22,
            q: "Komponen yang hanya mengalirkan arus satu arah disebut …",
            a: ["Resistor", "Transistor", "Dioda", "Kapasitor", "Reaktor"],
            correct: 2,
        },
        {
            id: 23,
            q: "LED adalah singkatan dari ?",
            a: [
                "Light Emision Diode",
                "Low Efficient Diode",
                "Light Emitting Diode",
                "Least Effort Diode",
                "Semuanya Salah",
            ],
            correct: 2,
        },
        {
            id: 24,
            q: "Fungsi utama dioda adalah …",
            a: [
                "Menyimpan muatan",
                "Menguatkan sinyal",
                "Menyearahkan arus listrik",
                "Mengubah tegangan",
                "Menambah Tegangan",
            ],
            correct: 2,
        },
        {
            id: 25,
            q: "Arus listrik mengalir dari … (arah konvensional)",
            a: [
                "Negatif ke positif",
                "Positif ke negatif",
                "Netral ke negatif",
                "Ground ke positif",
                "Semua Benar",
            ],
            correct: 1,
        },
        {
            id: 26,
            q: "Baterai 9 V dihubungkan ke resistor 3 kΩ. Tentukan arus yang mengalir.",
            a: ["1 mA", "3 mA", "6 mA", "9 mA", "12 mA"],
            correct: 1,
        },
        {
            id: 27,
            q: "Robot line follower: sensor kiri putih (0), sensor kanan hitam (1). Perintah logika motor?",
            a: [
                "Kiri berhenti, kanan maju",
                "Kiri maju, kanan berhenti",
                "Keduanya maju",
                "Keduanya berhenti",
                "Keduanya mundur",
            ],
            correct: 0,
        },
        {
            id: 28,
            q: "Rangkaian paralel 100 Ω dan 300 Ω memiliki resistansi total sebesar…",
            a: ["50 Ω", "75 Ω", "100 Ω", "120 Ω", "200 Ω"],
            correct: 1,
        },
        {
            id: 29,
            q: "Jika biaya listrik Rp1500/kWh, berapa biaya penggunaan energi 0,18 kWh?",
            a: ["Rp200", "Rp240", "Rp250", "Rp270", "Rp300"],
            correct: 3,
        },
        {
            id: 30,
            q: "Bilangan oktal 157 dikonversi ke biner menjadi:",
            a: ["101 111", "110 111", "111 101", "101 101", "100 111"],
            correct: 2,
        },
        {
            id: 31,
            q: "Data 16-bit bernilai 2048 digeser kanan 3 bit. Berapa hasil akhirnya?",
            a: ["256", "512", "1024", "128", "204"],
            correct: 0,
        },
        {
            id: 32,
            q: "Bandwidth 20 Mbps digunakan 10 pengguna secara merata. Kecepatan per pengguna?",
            a: ["1 Mbps", "2 Mbps", "4 Mbps", "5 Mbps", "10 Mbps"],
            correct: 1,
        },
        {
            id: 33,
            q: "Konversi bilangan heksadesimal ‘2F’ ke desimal adalah …",
            a: ["45", "46", "47", "48", "49"],
            correct: 2,
        },
        {
            id: 34,
            q: "Jika sebuah data 500 MB dikompresi menjadi 200 MB, berapa persen kompresinya?",
            a: ["40%", "50%", "60%", "70%", "80%"],
            correct: 2,
        },
        {
            id: 35,
            q: "Output dari gerbang logika OR dengan input 1 dan 0 adalah...",
            a: ["0", "1", "2", "Tidak terdefinisi", "10"],
            correct: 1,
        },
        {
            id: 36,
            q: "Berapakah jumlah baris maksimum pada truth table rangkaian dengan 4 input?",
            a: ["4", "8", "12", "16", "32"],
            correct: 3,
        },
        {
            id: 37,
            q: "RAM termasuk jenis memori …",
            a: [
                "Non-volatile",
                "Permanent memory",
                "Volatile",
                "Sekunder",
                "Magnetic",
            ],
            correct: 2,
        },
        {
            id: 38,
            q: "Unit yang bertugas menampilkan hasil pemrosesan komputer disebut …",
            a: [
                "Input device",
                "Output device",
                "Storage device",
                "Processing unit",
                "Control unit",
            ],
            correct: 1,
        },
        {
            id: 39,
            q: "Komponen utama komputer yang berfungsi sebagai otak pemrosesan adalah …",
            a: ["RAM", "Hard disk", "CPU", "ROM", "GPU"],
            correct: 2,
        },
        {
            id: 40,
            q: "Lapisan penyedia antarmuka layanan jaringan (email/file transfer) bagi pengguna akhir?",
            a: [
                "Presentation",
                "Session",
                "Physical",
                "Application",
                "Love layer",
            ],
            correct: 3,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(30 * 60);
    const [showWarning, setShowWarning] = useState(false);

    const { data, setData, post, processing } = useForm({
        answers: {},
        time_used: 0,
        score: 0,
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

    const handleSelect = (qIndex, aIndex) => {
        setAnswers({ ...answers, [qIndex]: aIndex });
    };

    const handleSubmit = () => {
        let score = 0;
        questions.forEach((q, idx) => {
            if (answers[idx] === q.correct) score += 2.5;
        });

        post("/elsmart/quiz/submit", {
            data: {
                answers,
                time_used: 30 * 60 - timeLeft,
                score: score,
            },
        });
    };

    const cardClass =
        "bg-[#16202a] border border-[#2a3744] rounded-3xl shadow-xl overflow-hidden";

    return (
        <div className="min-h-screen bg-[#0d141c] text-slate-200 font-sans p-4 md:p-8">
            <Head title="Tahap 1: Multiple Choice" />

            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center gap-4">
                        <img src={elsmart} alt="Logo" className="h-12 w-auto" />
                        <div>
                            <h1 className="text-xl font-bold text-white uppercase tracking-tight">
                                Multiple Choice
                            </h1>
                            <p className="text-xs text-frosted-mint-400 font-mono">
                                Penyisihan Tahap 1
                            </p>
                        </div>
                    </div>

                    <div
                        className={`flex items-center gap-3 px-6 py-3 rounded-2xl border ${timeLeft < 300 ? "bg-red-500/10 border-red-500/50 text-red-400" : "bg-[#16202a] border-[#2a3744] text-frosted-mint-400"}`}
                    >
                        <Clock
                            size={20}
                            className={timeLeft < 300 ? "animate-pulse" : ""}
                        />
                        <span className="text-2xl font-black font-mono">
                            {formatTime(timeLeft)}
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className={`${cardClass} p-8 md:p-12`}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-frosted-mint-500 text-dark-spruce-950 px-3 py-1 rounded-lg font-black text-sm">
                                        Soal {currentIndex + 1}
                                    </span>
                                    <div className="h-px flex-1 bg-[#2a3744]"></div>
                                </div>

                                <h2 className="text-lg md:text-xl font-semibold text-slate-100 leading-relaxed mb-10">
                                    {questions[currentIndex].q}
                                </h2>

                                <div className="space-y-4">
                                    {questions[currentIndex].a.map(
                                        (option, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() =>
                                                    handleSelect(
                                                        currentIndex,
                                                        idx,
                                                    )
                                                }
                                                className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 group ${
                                                    answers[currentIndex] ===
                                                    idx
                                                        ? "bg-frosted-mint-500/10 border-frosted-mint-500 text-white shadow-[0_0_20px_rgba(81,186,69,0.1)]"
                                                        : "bg-[#0d141c] border-[#2a3744] hover:border-slate-500 text-slate-400"
                                                }`}
                                            >
                                                <span
                                                    className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold border transition-colors ${
                                                        answers[
                                                            currentIndex
                                                        ] === idx
                                                            ? "bg-frosted-mint-500 border-frosted-mint-500 text-dark-spruce-950"
                                                            : "bg-[#16202a] border-[#2a3744] group-hover:border-slate-500"
                                                    }`}
                                                >
                                                    {String.fromCharCode(
                                                        65 + idx,
                                                    )}
                                                </span>
                                                <span className="font-medium text-base">
                                                    {option}
                                                </span>
                                            </button>
                                        ),
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
                                className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-400 hover:text-white disabled:opacity-30 transition-all"
                            >
                                <ChevronLeft size={20} /> Kembali
                            </button>

                            {currentIndex === questions.length - 1 ? (
                                <button
                                    onClick={() => setShowWarning(true)}
                                    className="flex items-center gap-2 px-8 py-3 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white rounded-xl font-bold shadow-lg shadow-frosted-mint-600/20 transition-all active:scale-95"
                                >
                                    Selesai Ujian <Send size={18} />
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        setCurrentIndex(currentIndex + 1)
                                    }
                                    className="flex items-center gap-2 px-8 py-3 bg-[#16202a] border border-[#2a3744] hover:border-frosted-mint-500 text-white rounded-xl font-bold transition-all active:scale-95"
                                >
                                    Selanjutnya <ChevronRight size={20} />
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className={`${cardClass} p-6 sticky top-24`}>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">
                                Navigasi Soal
                            </h3>
                            <div className="grid grid-cols-5 gap-2">
                                {questions.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`h-10 rounded-lg text-xs font-bold transition-all border ${
                                            currentIndex === idx
                                                ? "bg-white border-white text-dark-spruce-950 scale-110 shadow-lg"
                                                : answers[idx] !== undefined
                                                  ? "bg-frosted-mint-500/20 border-frosted-mint-500/50 text-frosted-mint-400"
                                                  : "bg-[#0d141c] border-[#2a3744] text-slate-500 hover:border-slate-400"
                                        }`}
                                    >
                                        {idx + 1}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-[#2a3744]">
                                <div className="flex justify-between text-xs font-bold text-slate-500 uppercase mb-4">
                                    <span>Progress</span>
                                    <span>
                                        {Math.round(
                                            (Object.keys(answers).length /
                                                questions.length) *
                                                100,
                                        )}
                                        %
                                    </span>
                                </div>
                                <div className="w-full h-2 bg-[#0d141c] rounded-full overflow-hidden border border-[#2a3744]">
                                    <div
                                        className="h-full bg-frosted-mint-500 transition-all duration-500"
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

            {showWarning && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0d141c]/90 backdrop-blur-sm">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-[#16202a] border border-[#2a3744] p-8 rounded-[2.5rem] max-w-md w-full shadow-2xl text-center"
                    >
                        <div className="w-20 h-20 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/20">
                            <AlertCircle size={40} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Selesaikan Ujian?
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Pastikan semua jawaban sudah terisi dengan benar.
                            Anda tidak dapat mengulang tahap ini setelah menekan
                            tombol konfirmasi.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowWarning(false)}
                                className="flex-1 py-4 bg-[#0d141c] border border-[#2a3744] text-slate-300 rounded-2xl font-bold hover:bg-[#1a2530] transition-all"
                            >
                                Periksa Lagi
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex-1 py-4 bg-frosted-mint-600 text-white rounded-2xl font-bold hover:bg-frosted-mint-500 transition-all shadow-lg shadow-frosted-mint-600/20"
                            >
                                Ya, Kirim!
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default MultipleChoice;
