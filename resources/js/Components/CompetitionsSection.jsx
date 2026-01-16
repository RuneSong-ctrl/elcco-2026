import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
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
} from "lucide-react";

const competitionsData = [
    {
        id: "C-01",
        title: "Lomba Sumobot",
        slug: "sumobot",
        target: "Umum",
        category: "Robotics",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
        desc: "Kompetisi di mana robot otonom dirancang khusus untuk mendorong lawan keluar dari ring sumo. Menguji strategi mekanik, kekuatan pendorong, dan sensor otonom dalam pertarungan sengit.",
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
        slug: "line-follower",
        target: "Umum",
        category: "Robotics",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
        desc: "Kompetisi robot otonom yang dirancang khusus untuk bergerak mengikuti garis panduan di lantai menggunakan sensor cahaya dan mikrokontroler. Kecepatan dan akurasi robot mengikuti jalur adalah yang utama.",
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
        slug: "networking",
        target: "SMA/SMK",
        category: "IT Network",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop",
        desc: "Kompetisi yang menantang peserta untuk merancang dan mengonfigurasi jaringan menggunakan Cisco Packet Tracer. Penilaian dilakukan berdasarkan completion rate dan ketepatan skenario jaringan.",
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
        slug: "lkti",
        target: "SMA/SMK",
        category: "Research",
        image: "https://images.unsplash.com/photo-1456324504439-367cee110fa2?q=80&w=2070&auto=format&fit=crop",
        desc: "Kompetisi ilmiah tingkat nasional untuk mewadahi gagasan kritis, inovatif, dan berbasis penelitian guna menjawab tantangan Era Society 5.0 dengan tema 'Smart Youth for Smart Nation'.",
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
        slug: "lkct",
        target: "Mahasiswa",
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        desc: "Kompetisi merancang prototipe fungsional (hardware/software) yang human-centric sebagai respons terhadap era Society 5.0. Wadah pencetak inovator muda untuk akselerasi Indonesia Emas 2045.",
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
        slug: "lcc",
        target: "SMA/SMK",
        category: "Academic",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
        desc: "Kompetisi adu cepat dan tepat dalam menjawab soal pengetahuan kelistrikan, elektronika, dan sains umum. Mengasah berpikir kritis, kerja sama tim, dan kecepatan analisis peserta.",
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
        slug: "essay",
        target: "Umum",
        category: "Writing",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
        desc: "Ajang kompetisi menulis untuk menuangkan gagasan kritis, kreatif, dan solutif terhadap isu aktual. Mendorong ide inovatif berbasis data yang berdampak positif bagi masyarakat.",
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
        slug: "infografis",
        target: "Umum",
        category: "Creative",
        image: "https://images.unsplash.com/photo-1626785774573-4b799312afc2?q=80&w=2060&auto=format&fit=crop",
        desc: "Kompetisi menyampaikan informasi melalui perpaduan narasi dan visualisasi data kreatif. Mengasah kemampuan komunikasi visual untuk menjawab tantangan era Society 5.0.",
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

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    const filteredCompetitions = competitionsData.filter((item) => {
        if (filter === "All") return true;
        return item.target === filter;
    });

    const getPriceInfo = (waves) => {
        const now = currentDate;
        const activeWave = waves.find((wave) => {
            const start = new Date(wave.start);
            const end = new Date(wave.end);
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

        const firstStart = new Date(waves[0].start);
        if (now < firstStart) {
            return {
                price: waves[0].price,
                label: `Opens ${waves[0].start.split("-")[2]} Jan`,
                status: "upcoming",
            };
        }

        return {
            price: "Closed",
            label: "Registration Closed",
            status: "closed",
        };
    };

    return (
        <section
            id="competitions"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-0 w-full h-px bg-frosted-mint-500"></div>
                <div className="absolute bottom-20 left-0 w-full h-px bg-frosted-mint-500"></div>
                <div className="absolute top-0 left-1/4 w-px h-full bg-frosted-mint-500"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-frosted-mint-500"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase bg-frosted-mint-900/20 px-4 py-1 rounded-full border border-frosted-mint-500/30">
                        8 Competitions
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-frosted-mint-50">
                        Choose Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                            Competition
                        </span>
                    </h2>
                    <p className="mt-4 text-muted-olive-200 max-w-2xl mx-auto">
                        Tentukan targetmu! Pilih kategori yang sesuai dengan
                        jenjang pendidikan atau keahlianmu.
                    </p>
                </div>

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
                                <Link
                                    href={`/competitions/${item.slug}`}
                                    className="relative h-48 overflow-hidden block"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950 to-transparent z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                                </Link>

                                <div className="flex flex-1 flex-col p-5">
                                    <Link
                                        href={`/competitions/${item.slug}`}
                                        className="block"
                                    >
                                        <h3 className="mb-2 text-lg font-bold text-frosted-mint-50 group-hover:text-frosted-mint-400 transition-colors leading-tight">
                                            {item.title}
                                        </h3>

                                        <p className="mb-4 text-xs text-muted-olive-200 leading-relaxed line-clamp-3">
                                            {item.desc}
                                        </p>
                                    </Link>

                                    <div className="mt-auto pt-4 border-t border-frosted-mint-500/10">
                                        <div className="flex justify-between items-end mb-4">
                                            <div>
                                                <span
                                                    className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                                                        status === "active"
                                                            ? "bg-frosted-mint-500/20 text-frosted-mint-400"
                                                            : "bg-muted-olive-500/20 text-muted-olive-400"
                                                    }`}
                                                >
                                                    {label}
                                                </span>
                                                <p className="font-mono text-lg font-bold text-ivory-mist-300 mt-1">
                                                    {price}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <a
                                                href={item.guidebookLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-frosted-mint-500/30 text-frosted-mint-400 hover:bg-frosted-mint-500/10 transition-all text-xs font-bold"
                                            >
                                                <Download className="w-3.5 h-3.5" />
                                                Guidebook
                                            </a>

                                            <a
                                                href={item.registerLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-dark-spruce-950 font-bold transition-all text-xs shadow-lg ${
                                                    status === "closed"
                                                        ? "bg-gray-600 cursor-not-allowed text-gray-400"
                                                        : "bg-frosted-mint-500 hover:bg-frosted-mint-400 hover:shadow-frosted-mint-500/30 hover:-translate-y-0.5"
                                                }`}
                                                onClick={(e) =>
                                                    status === "closed" &&
                                                    e.preventDefault()
                                                }
                                            >
                                                Register
                                                <ChevronRight className="w-3.5 h-3.5" />
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
        </section>
    );
};

export default CompetitionsSection;
