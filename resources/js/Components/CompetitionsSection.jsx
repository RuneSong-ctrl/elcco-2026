import React, { useState, useEffect } from "react";
import {
    Bot,
    PenTool,
    Network,
    BrainCircuit,
    Cpu,
    FileText,
    ImageIcon,
    Zap,
    Clock,
    AlertCircle,
    Download,
    ChevronRight,
    Filter,
    X,
    Calendar,
    ExternalLink,
} from "lucide-react";

// Import images (Pastikan path ini benar sesuai struktur projectmu)
import infografis from "/public/images/Infografis.png";
import lcc from "/public/images/LCC.png";
import lkti from "/public/images/LKTI.png";
import Line from "/public/images/Line-Fol.png";
import sumobot from "/public/images/Sumo.png";
import networking from "/public/images/Networking.png";
import essay from "/public/images/Essay.png";
import lkct from "/public/images/LKCT.png";

const competitionsData = [
    {
        id: "C-01",
        title: "Lomba Sumobot",
        target: "Umum",
        category: "Robotics",
        image: sumobot,
        desc: "Kompetisi di mana robot otonom dirancang khusus untuk mendorong lawan keluar dari ring sumo. Menguji strategi mekanik, kekuatan pendorong, dan sensor otonom dalam pertarungan sengit.",
        keyFeatures: [
            "Autonomous Battle",
            "Mechanical Strategy",
            "Open for All",
        ],
        icon: <Bot className="w-5 h-5" />,
        registerLink: "https://bit.ly/Sumo26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/1SmT4Fl6Mk5-ot5J9Uvjx5VDBHdgHgYp5/view?usp=drive_link",
        waves: [
            {
                name: "Normal",
                start: "2026-01-17",
                end: "2026-03-07",
                price: "IDR 200.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 210.000",
            },
        ],
    },
    {
        id: "C-02",
        title: "Line Follower",
        target: "Umum",
        category: "Robotics",
        image: Line,
        desc: "Lomba robot line follower adalah kompetisi di mana robot otonom dirancang khusus untuk bergerak mengikuti garis panduan di lantai, biasanya garis hitam di permukaan putih atau sebaliknya, menggunakan sensor cahaya untuk mendeteksi perbedaan warna dan mikrokontroler untuk mengontrol motor roda agar tetap berada di jalur. Kecepatan dan akurasi robot mengikuti jalur adalah yang utama. Kompetisi ini melatih keterampilan mekanik & elektronik, pengendalian terhadap robot dan kemampuan pemecahan masalah peserta.",
        keyFeatures: ["Speed & Accuracy", "PID Control", "Line Tracking"],
        icon: <Zap className="w-5 h-5" />,
        registerLink: "https://bit.ly/LF26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/1gV4kp-OTEO3wXtjeLyGJqAzsv36b6c_4/view?usp=drive_link",
        waves: [
            {
                name: "Normal",
                start: "2026-01-17",
                end: "2026-03-07",
                price: "IDR 200.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 210.000",
            },
        ],
    },
    {
        id: "C-03",
        title: "Networking Cisco",
        target: "SMA/SMK",
        category: "IT Network",
        image: networking,
        desc: "Lomba Networking Cisco Packet Tracer adalah kompetisi yang menantang peserta untuk merancang dan mengonfigurasi jaringan menggunakan cisco packet tracer. penilaian dilakukan berdasarkan completion rate, yaitu seberapa lengkap dan benar peserta menyelesaikan tugas atau skenario jaringan yang diberikan.",
        keyFeatures: ["Packet Tracer", "Network Config", "Topology Design"],
        icon: <Network className="w-5 h-5" />,
        registerLink: "https://bit.ly/Networking26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/16g4jzY-gHRU-miYKqNkUXXtvXaThKaSJ/view?usp=drive_link",
        waves: [
            {
                name: "Normal",
                start: "2026-01-17",
                end: "2026-03-07",
                price: "IDR 85.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 85.000",
            },
        ],
    },
    {
        id: "C-04",
        title: "Karya Tulis (LKTI)",
        target: "SMA/SMK",
        category: "Research",
        image: lkti,
        desc: "Lomba Karya Tulis Ilmiah (LKTI) ELCCO 2026 merupakan kompetisi ilmiah tingkat nasional yang bertujuan mewadahi generasi muda dalam mengembangkan gagasan kritis, inovatif, dan berbasis penelitian guna menjawab tantangan pembangunan di Era Society 5.0, dengan mengusung tema “Smart Youth for Smart Nation: Optimalisasi Bonus Demografi di Era Society 5.0” yang menekankan peran strategis pemuda dalam memanfaatkan ilmu pengetahuan dan teknologi untuk mengoptimalkan potensi bonus demografi Indonesia melalui solusi yang aplikatif, berkelanjutan, dan berorientasi pada kesejahteraan masyarakat.",
        keyFeatures: ["Research Based", "Scientific Paper", "Society 5.0"],
        icon: <FileText className="w-5 h-5" />,
        registerLink: "https://bit.ly/LKTI26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/1ecdMyxIjbfWfl342mZXpEWyZ6DvtuRhm/view?usp=drive_link",
        waves: [
            {
                name: "Gel 1",
                start: "2026-01-17",
                end: "2026-02-02",
                price: "IDR 60.000",
            },
            {
                name: "Gel 2",
                start: "2026-02-03",
                end: "2026-02-18",
                price: "IDR 80.000",
            },
            {
                name: "Gel 3",
                start: "2026-02-19",
                end: "2026-03-07",
                price: "IDR 100.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 110.000",
            },
        ],
    },
    {
        id: "C-05",
        title: "Karya Cipta (LKCT)",
        target: "Mahasiswa",
        category: "Innovation",
        image: lkct,
        desc: "Lomba Karya Cipta Teknologi (LKCT) ELCCO 2026 adalah kompetisi ilmiah tingkat nasional yang dirancang sebagai respons terhadap era Society 5.0, di mana teknologi tidak lagi sekadar alat industri, melainkan solusi yang berpusat pada manusia (human-centric). Kompetisi ini mewajibkan peserta untuk merancang prototipe fungsional (baik berupa alat/perangkat keras maupun perangkat lunak) yang didukung oleh analisis akademis dalam bentuk Karya Tulis Ilmiah. LKCT hadir sebagai wadah utama untuk mencetak inovator muda yang mampu menciptakan teknologi inklusif guna mengakselerasi potensi Generasi Emas Indonesia 2045.",
        keyFeatures: ["Prototyping", "Hardware/Software", "Innovation"],
        icon: <Cpu className="w-5 h-5" />,
        registerLink: "https://bit.ly/LKCT26Elcco",
        guidebookLink:
            "https://drive.google.com/file/d/16pewxH9i7CFEAFnoQ9pHdwhv_4d91Itd/view?usp=drive_link",
        waves: [
            {
                name: "Gel 1",
                start: "2026-01-17",
                end: "2026-02-27",
                price: "IDR 75.000",
            },
            {
                name: "Gel 2",
                start: "2026-02-28",
                end: "2026-03-07",
                price: "IDR 100.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-13",
                price: "IDR 110.000",
            },
        ],
    },
    {
        id: "C-06",
        title: "Cerdas Cermat (LCC)",
        target: "SMA/SMK",
        category: "Academic",
        image: lcc,
        desc: "Lomba Cerdas Cermat (LCC) merupakan kompetisi adu cepat dan tepat dalam menjawab soal-soal pengetahuan di bidang kelistrikan (power, elektronika, komputer, dan telekomunikasi) serta pengetahuan umum sains dan logika. Lomba ini bertujuan untuk mengasah kemampuan berpikir kritis, kerja sama tim, dan kecepatan analisis peserta melalui beberapa babak kompetitif yang menantang dan edukatif.",
        keyFeatures: ["Quiz Battle", "Critical Thinking", "Teamwork"],
        icon: <BrainCircuit className="w-5 h-5" />,
        registerLink: "https://bit.ly/LCC26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/1RVCS1vYkayfA-pPN9DNvwQ8wILhB8mOD/view?usp=drive_link",
        waves: [
            {
                name: "Normal",
                start: "2026-01-17",
                end: "2026-03-07",
                price: "IDR 80.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 110.000",
            },
        ],
    },
    {
        id: "C-07",
        title: "Lomba Essay",
        target: "Umum",
        category: "Writing",
        image: essay,
        desc: "Lomba Essay adalah ajang kompetisi menulis yang mendorong generasi muda untuk menuangkan gagasan kritis, kreatif, dan solutif terhadap berbagai isu aktual. Melalui tulisan berbasis data dan pemikiran logis, peserta diajak menyampaikan ide yang inovatif serta berdampak positif bagi masyarakat dan masa depan.",
        keyFeatures: ["Critical Writing", "Problem Solving", "Idea Pitching"],
        icon: <PenTool className="w-5 h-5" />,
        registerLink: "https://bit.ly/Essay26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/13fgjEzR2gAXv3aprE0u7LMR4E64wIsfO/view?usp=drive_link",
        waves: [
            {
                name: "Gel 1",
                start: "2026-01-10",
                end: "2026-02-02",
                price: "IDR 50.000",
            },
            {
                name: "Gel 2",
                start: "2026-02-03",
                end: "2026-02-18",
                price: "IDR 65.000",
            },
            {
                name: "Gel 3",
                start: "2026-02-19",
                end: "2026-03-07",
                price: "IDR 80.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 100.000",
            },
        ],
    },
    {
        id: "C-08",
        title: "Lomba Infografis",
        target: "Umum",
        category: "Creative",
        image: infografis,
        desc: "Lomba Infografis ELCCO 2026 adalah kompetisi nasional bagi mahasiswa untuk menyampaikan informasi secara efektif melalui perpaduan narasi dan visualisasi data yang kreatif. Ajang ini bertujuan mengasah kemampuan berpikir kritis serta keterampilan komunikasi visual peserta dalam mengolah data yang akurat guna menjawab tantangan era Society 5.0. Melalui tema 'Solving Problem with Elegance through The Pen Stroke of The Youth', kompetisi ini mendorong generasi muda menjadi agen perubahan yang inovatif menuju Indonesia Emas 2045.",
        keyFeatures: ["Visual Design", "Data Storytelling", "Creativity"],
        icon: <ImageIcon className="w-5 h-5" />,
        registerLink: "https://bit.ly/Infografis26ELCCO",
        guidebookLink:
            "https://drive.google.com/file/d/1aJYFcAc_Rwo45zPiCLzuTJ9ylopDSh4R/view?usp=drive_link",
        waves: [
            {
                name: "Gel 1",
                start: "2026-01-17",
                end: "2026-02-02",
                price: "IDR 50.000",
            },
            {
                name: "Gel 2",
                start: "2026-02-03",
                end: "2026-02-18",
                price: "IDR 65.000",
            },
            {
                name: "Gel 3",
                start: "2026-02-19",
                end: "2026-03-07",
                price: "IDR 80.000",
            },
            {
                name: "Extend",
                start: "2026-03-08",
                end: "2026-03-12",
                price: "IDR 100.000",
            },
        ],
    },
];

const CompetitionsSection = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [filter, setFilter] = useState("All");
    const [selectedCompetition, setSelectedCompetition] = useState(null);

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    // Parse Tanggal Lokal (WITA Compatible)
    const parseLocalDate = (dateStr) => {
        const [year, month, day] = dateStr.split("-").map(Number);
        const date = new Date(year, month - 1, day);
        date.setHours(0, 0, 0, 0);
        return date;
    };

    const getPriceInfo = (waves) => {
        const now = currentDate;
        const activeWave = waves.find((wave) => {
            const start = parseLocalDate(wave.start);
            const end = parseLocalDate(wave.end);
            end.setHours(23, 59, 59);
            return now >= start && now <= end;
        });

        if (activeWave) {
            return {
                price: activeWave.price,
                label: activeWave.name,
                status: "active",
            };
        }

        const firstStart = parseLocalDate(waves[0].start);
        if (now < firstStart) {
            return {
                price: null,
                label: `Opens ${waves[0].start.split("-")[2]} Jan`,
                status: "upcoming",
            };
        }

        return { price: null, label: "Registration Closed", status: "closed" };
    };

    // Fungsi cek status per gelombang untuk Modal
    const getWaveStatus = (wave) => {
        const now = currentDate;
        const start = parseLocalDate(wave.start);
        const end = parseLocalDate(wave.end);
        end.setHours(23, 59, 59);

        if (now >= start && now <= end) return "active";
        if (now < start) return "upcoming";
        return "closed";
    };

    const filteredCompetitions = competitionsData.filter((item) => {
        if (filter === "All") return true;
        return item.target === filter;
    });

    const closeModal = () => setSelectedCompetition(null);

    return (
        <section
            id="competitions"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-0 w-full h-px bg-frosted-mint-500"></div>
                <div className="absolute bottom-20 left-0 w-full h-px bg-frosted-mint-500"></div>
                <div className="absolute top-0 left-1/4 w-px h-full bg-frosted-mint-500"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-frosted-mint-500"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase bg-frosted-mint-900/20 px-4 py-1 rounded-full border border-frosted-mint-500/30">
                        8 Competitions
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-frosted-mint-50">
                        Choose Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                            Competitions
                        </span>
                    </h2>
                    <p className="mt-4 text-muted-olive-200 max-w-2xl mx-auto">
                        Tentukan targetmu! Pilih kategori yang sesuai dengan
                        jenjang pendidikan atau keahlianmu.
                    </p>
                </div>

                {/* Filter */}
                <div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    data-aos="fade-up"
                >
                    {["All", "SMA/SMK", "Mahasiswa", "Umum"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                                filter === cat
                                    ? "bg-frosted-mint-500 text-dark-spruce-950 border-frosted-mint-500 shadow-lg shadow-frosted-mint-500/20 scale-105"
                                    : "bg-dark-spruce-900/50 text-muted-olive-400 border-frosted-mint-500/20 hover:border-frosted-mint-500/50 hover:text-frosted-mint-300"
                            }`}
                        >
                            {cat === "All" && <Filter className="w-4 h-4" />}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredCompetitions.map((item, index) => {
                        const { price, label, status } = getPriceInfo(
                            item.waves
                        );

                        return (
                            <div
                                key={item.id}
                                className={`group relative h-full flex flex-col overflow-hidden rounded-2xl border border-frosted-mint-500/20 bg-dark-spruce-900/60 backdrop-blur-md transition-all duration-300 hover:border-frosted-mint-500 hover:shadow-[0_0_30px_rgba(81,186,69,0.15)] hover:-translate-y-1 ${
                                    status === "closed"
                                        ? "opacity-60 grayscale"
                                        : ""
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="relative h-48 overflow-hidden block">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950 to-transparent z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-10rem w-10rem object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div
                                        className={`absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border shadow-lg backdrop-blur-md ${
                                            item.target === "SMA/SMK"
                                                ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
                                                : item.target === "Mahasiswa"
                                                ? "bg-purple-500/20 text-purple-300 border-purple-500/30"
                                                : "bg-frosted-mint-500/20 text-frosted-mint-300 border-frosted-mint-500/30"
                                        }`}
                                    >
                                        {item.target}
                                    </div>

                                    {status !== "active" && (
                                        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 px-2 py-1 bg-ivory-mist-500 text-dark-spruce-950 text-[10px] font-bold rounded shadow-lg">
                                            {status === "upcoming" ? (
                                                <Clock className="w-3 h-3" />
                                            ) : (
                                                <AlertCircle className="w-3 h-3" />
                                            )}
                                            {status === "upcoming"
                                                ? "OPENS SOON"
                                                : "CLOSED"}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-1 flex-col p-5">
                                    <div className="block">
                                        <h3 className="mb-2 text-lg font-bold text-frosted-mint-50 group-hover:text-frosted-mint-400 transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mb-4 text-xs text-muted-olive-200 leading-relaxed line-clamp-3">
                                            {item.desc}
                                        </p>
                                    </div>

                                    <div className="mt-auto pt-4 border-t border-frosted-mint-500/10">
                                        {/* Tampilkan harga HANYA jika status Active */}
                                        {status === "active" && (
                                            <div className="flex justify-between items-end mb-4">
                                                <div>
                                                    <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-frosted-mint-500/20 text-frosted-mint-400">
                                                        {label}
                                                    </span>
                                                    <p className="font-mono text-lg font-bold text-ivory-mist-300 mt-1">
                                                        {price}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex flex-col gap-2">
                                            <button
                                                onClick={() =>
                                                    setSelectedCompetition(item)
                                                }
                                                className="w-full py-2.5 rounded-xl border border-frosted-mint-500/30 text-frosted-mint-400 hover:bg-frosted-mint-500/10 hover:border-frosted-mint-500 transition-all text-xs font-bold flex items-center justify-center gap-2"
                                            >
                                                Lihat Detail
                                                <ChevronRight className="w-3.5 h-3.5" />
                                            </button>

                                            <a
                                                href={item.registerLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`w-full py-2.5 rounded-xl text-dark-spruce-950 font-bold transition-all text-xs shadow-lg flex items-center justify-center gap-2 ${
                                                    status === "closed"
                                                        ? "bg-gray-600 cursor-not-allowed text-gray-400"
                                                        : "bg-frosted-mint-500 hover:bg-frosted-mint-400 hover:shadow-frosted-mint-500/30 hover:-translate-y-0.5"
                                                }`}
                                                onClick={(e) =>
                                                    status === "closed" &&
                                                    e.preventDefault()
                                                }
                                            >
                                                <ExternalLink className="w-3.5 h-3.5" />
                                                Daftar Sekarang
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredCompetitions.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted-olive-400">
                            Tidak ada kompetisi di kategori ini.
                        </p>
                    </div>
                )}
            </div>

            {/* --- MODAL DETAIL --- */}
            {selectedCompetition && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-spruce-950/80 backdrop-blur-md animate-in fade-in duration-200"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-dark-spruce-900 border border-frosted-mint-500/20 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-50 p-2 bg-dark-spruce-950/50 rounded-full text-frosted-mint-400 hover:bg-frosted-mint-500 hover:text-dark-spruce-950 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Left: Image (Cover) */}
                        <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-dark-spruce-950">
                            <img
                                src={selectedCompetition.image}
                                alt={selectedCompetition.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-900 via-transparent to-transparent md:bg-gradient-to-r"></div>

                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-frosted-mint-500 text-dark-spruce-950 flex items-center gap-1">
                                        {selectedCompetition.icon}
                                        {selectedCompetition.category}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-dark-spruce-950/80 text-frosted-mint-400 border border-frosted-mint-500/30">
                                        {selectedCompetition.target}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                                {selectedCompetition.title}
                            </h2>

                            <div className="prose prose-invert prose-sm mb-6 text-muted-olive-200 leading-relaxed text-justify">
                                <p>{selectedCompetition.desc}</p>
                            </div>

                            {/* Key Features */}
                            <div className="mb-6">
                                <h4 className="text-sm font-bold text-frosted-mint-500 uppercase tracking-wider mb-3">
                                    Key Features
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedCompetition.keyFeatures.map(
                                        (feature, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-frosted-mint-500/10 text-frosted-mint-300 border border-frosted-mint-500/20 flex items-center gap-2"
                                            >
                                                <ChevronRight className="w-3 h-3" />
                                                {feature}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Waves / Pricing in Modal */}
                            <div className="mb-8 p-4 rounded-xl bg-dark-spruce-950/50 border border-frosted-mint-500/10">
                                <h4 className="text-sm font-bold text-ivory-mist-200 mb-3 flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-frosted-mint-500" />
                                    Timeline & Biaya Pendaftaran
                                </h4>
                                <div className="space-y-2">
                                    {selectedCompetition.waves.map(
                                        (wave, i) => {
                                            const waveStatus =
                                                getWaveStatus(wave);
                                            return (
                                                <div
                                                    key={i}
                                                    className={`flex justify-between items-center text-xs border-b border-frosted-mint-500/10 pb-2 last:border-0 last:pb-0 ${
                                                        waveStatus !== "active"
                                                            ? "opacity-50"
                                                            : ""
                                                    }`}
                                                >
                                                    <span className="text-muted-olive-300">
                                                        {wave.name} (
                                                        {wave.start} -{" "}
                                                        {wave.end})
                                                    </span>
                                                    <span className="font-bold text-frosted-mint-400 font-mono">
                                                        {waveStatus ===
                                                        "upcoming"
                                                            ? "Coming Soon"
                                                            : wave.price}
                                                    </span>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-auto grid grid-cols-2 gap-3">
                                <a
                                    href={selectedCompetition.guidebookLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-frosted-mint-500/30 text-frosted-mint-400 hover:bg-frosted-mint-500/10 hover:border-frosted-mint-500 transition-all font-bold text-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    Download Juklak
                                </a>
                                <a
                                    href={selectedCompetition.registerLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-dark-spruce-950 font-bold transition-all text-sm shadow-lg ${
                                        getPriceInfo(selectedCompetition.waves)
                                            .status === "closed"
                                            ? "bg-gray-600 cursor-not-allowed text-gray-400"
                                            : "bg-frosted-mint-500 hover:bg-frosted-mint-400 hover:shadow-frosted-mint-500/30"
                                    }`}
                                    onClick={(e) =>
                                        getPriceInfo(selectedCompetition.waves)
                                            .status === "closed" &&
                                        e.preventDefault()
                                    }
                                >
                                    Daftar Sekarang
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default CompetitionsSection;
