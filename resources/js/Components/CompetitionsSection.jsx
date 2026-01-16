import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    ArrowRight,
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
} from "lucide-react";

const competitionsData = [
    {
        id: "C-01",
        title: "Lomba Sumobot",
        slug: "sumobot",
        category: "Robotics",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
        desc: "Pertarungan robot otonom di arena sumo. Dorong lawan keluar ring dengan strategi mekanik terbaik.",
        icon: <Bot className="w-5 h-5" />,
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
        title: "Robot Line Follower",
        slug: "line-follower",
        category: "Robotics",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
        desc: "Adu kecepatan dan presisi robot dalam menelusuri lintasan garis. Tuning PID adalah kunci kemenangan.",
        icon: <Zap className="w-5 h-5" />,
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
        category: "IT Network",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bbcbf?q=80&w=2071&auto=format&fit=crop",
        desc: "Uji kemampuan konfigurasi jaringan, troubleshooting, dan packet tracing menggunakan standar Cisco.",
        icon: <Network className="w-5 h-5" />,
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
        title: "Karya Tulis Ilmiah (LKTI)",
        slug: "lkti",
        category: "Research",
        image: "https://images.unsplash.com/photo-1456324504439-367cee110fa2?q=80&w=2070&auto=format&fit=crop",
        desc: "Kompetisi riset ilmiah untuk memecahkan masalah nyata dengan solusi inovatif dan metodologi tepat.",
        icon: <FileText className="w-5 h-5" />,
        waves: [
            {
                name: "Gelombang 1",
                start: "2026-01-17",
                end: "2026-02-02",
                price: "IDR 60.000",
            },
            {
                name: "Gelombang 2",
                start: "2026-02-03",
                end: "2026-02-18",
                price: "IDR 80.000",
            },
            {
                name: "Gelombang 3",
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
        category: "Innovation",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        desc: "Wadah inovasi produk teknologi tepat guna. Wujudkan ide liar menjadi prototipe yang bermanfaat.",
        icon: <Cpu className="w-5 h-5" />,
        waves: [
            {
                name: "Gelombang 1",
                start: "2026-01-17",
                end: "2026-02-27",
                price: "IDR 75.000",
            },
            {
                name: "Gelombang 2",
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
        category: "Academic",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
        desc: "Adu wawasan dan kecepatan berpikir dalam bidang fisika, matematika, dan teknologi elektro.",
        icon: <BrainCircuit className="w-5 h-5" />,
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
        category: "Writing",
        image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2073&auto=format&fit=crop",
        desc: "Tuangkan gagasan kritis dan solutif melalui tulisan yang tajam untuk merespon isu teknologi.",
        icon: <PenTool className="w-5 h-5" />,
        waves: [
            {
                name: "Gelombang 1",
                start: "2026-01-10",
                end: "2026-02-02",
                price: "IDR 50.000",
            },
            {
                name: "Gelombang 2",
                start: "2026-02-03",
                end: "2026-02-18",
                price: "IDR 65.000",
            },
            {
                name: "Gelombang 3",
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
        category: "Creative",
        image: "https://images.unsplash.com/photo-1626785774573-4b799312afc2?q=80&w=2060&auto=format&fit=crop",
        desc: "Sajikan data kompleks menjadi visual yang menarik, informatif, dan estetik dalam poster digital.",
        icon: <ImageIcon className="w-5 h-5" />,
        waves: [
            {
                name: "Gelombang 1",
                start: "2026-01-17",
                end: "2026-02-02",
                price: "IDR 50.000",
            },
            {
                name: "Gelombang 2",
                start: "2026-02-03",
                end: "2026-02-18",
                price: "IDR 65.000",
            },
            {
                name: "Gelombang 3",
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

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

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
                        Siapkan tim terbaikmu untuk menghadapi perlombaan di
                        ELCCO 2026. Pilih jenis lomba dan buktikan kemampuanmu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {competitionsData.map((item, index) => {
                        const { price, label, status } = getPriceInfo(
                            item.waves
                        );

                        return (
                            <Link
                                key={item.id}
                                href={`/competitions/${item.slug}`}
                                className={`group relative h-full flex ${
                                    status === "closed"
                                        ? "pointer-events-none opacity-60"
                                        : ""
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                            >
                                <div className="relative w-full flex flex-col overflow-hidden rounded-2xl border border-frosted-mint-500/20 bg-dark-spruce-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-frosted-mint-500 hover:shadow-[0_0_30px_rgba(81,186,69,0.2)]">
                                    <div className="relative h-48 overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950 to-transparent z-10"></div>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        />
                                        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-dark-spruce-950/90 backdrop-blur-sm border border-frosted-mint-500/30 px-3 py-1 rounded-full text-[10px] font-bold text-frosted-mint-300 uppercase tracking-wide">
                                            {item.icon}
                                            {item.category}
                                        </div>
                                        <div className="absolute top-3 left-3 z-20 font-mono text-xs text-frosted-mint-500 font-bold bg-dark-spruce-950/80 px-2 py-0.5 rounded">
                                            {item.id}
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
                                        <h3 className="mb-2 text-lg font-bold text-frosted-mint-50 group-hover:text-frosted-mint-400 transition-colors leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="mb-6 text-xs text-muted-olive-200 leading-relaxed line-clamp-3 flex-1">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center justify-between border-t border-frosted-mint-500/10 pt-4 mt-auto">
                                            <div>
                                                <div className="flex items-center gap-1.5 mb-0.5">
                                                    <span
                                                        className={`text-[10px] font-bold uppercase px-1.5 rounded ${
                                                            status === "active"
                                                                ? "bg-frosted-mint-500/20 text-frosted-mint-400"
                                                                : "bg-muted-olive-500/20 text-muted-olive-400"
                                                        }`}
                                                    >
                                                        {label}
                                                    </span>
                                                </div>
                                                <p className="font-mono text-sm font-bold text-ivory-mist-300">
                                                    {price}
                                                </p>
                                            </div>
                                            <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-frosted-mint-500/10 text-frosted-mint-400 transition-all group-hover:bg-frosted-mint-500 group-hover:text-dark-spruce-950">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CompetitionsSection;
