import React from "react";
import {
    Bot, // Sumobot
    Activity, // Line Follower
    Network, // Cisco
    Cpu, // LKCT
    FileText, // LKTI
    PenTool, // Essay
    BrainCircuit, // LCC
    ImageIcon, // Infografis
} from "lucide-react";

const AboutSection = () => {
    const competitions = [
        {
            id: "DIV-01",
            title: "Lomba Sumobot",
            icon: <Bot className="w-5 h-5" />,
            category: "Robotics",
        },
        {
            id: "DIV-02",
            title: "Lomba Robot Line Follower",
            icon: <Activity className="w-5 h-5" />,
            category: "Robotics",
        },
        {
            id: "DIV-03",
            title: "Lomba Networking Cisco",
            icon: <Network className="w-5 h-5" />,
            category: "IT / Network",
        },
        {
            id: "DIV-04",
            title: "Lomba Cerdas Cermat (LCC)",
            icon: <BrainCircuit className="w-5 h-5" />,
            category: "Academic",
        },
        {
            id: "DIV-05",
            title: "Lomba Karya Tulis Ilmiah (LKTI)",
            icon: <FileText className="w-5 h-5" />,
            category: "Research",
        },
        {
            id: "DIV-06",
            title: "Lomba Karya Cipta Teknologi",
            icon: <Cpu className="w-5 h-5" />,
            category: "Innovation",
        },
        {
            id: "DIV-07",
            title: "Lomba Essay",
            icon: <PenTool className="w-5 h-5" />,
            category: "Writing",
        },
        {
            id: "DIV-08",
            title: "Lomba Infografis",
            icon: <ImageIcon className="w-5 h-5" />,
            category: "Creative",
        },
    ];

    return (
        <section
            id="about"
            className="relative w-full py-24 overflow-hidden bg-dark-spruce-950"
        >
            {/* Background Orbs (Visual Tema Space/Gundam) */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-frosted-mint-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivory-mist-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    {/* --- LEFT SIDE: ILLUSTRATION --- */}
                    <div
                        className="w-full lg:w-5/12 relative top-24"
                        data-aos="fade-right"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-frosted-mint-500/20 bg-dark-spruce-900/40 backdrop-blur-sm p-2 shadow-2xl shadow-frosted-mint-900/20">
                            {/* Tech Decor Top Right */}
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-frosted-mint-500 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-frosted-mint-500/30"></div>
                            </div>

                            <img
                                src="https://images.unsplash.com/photo-1535378437323-9555f3e7f6aa?q=80&w=2000&auto=format&fit=crop"
                                alt="About Illustration"
                                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/5]"
                            />

                            <div className="absolute bottom-6 left-6 bg-dark-spruce-950/80 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-frosted-mint-500">
                                <p className="text-frosted-mint-50 font-mono text-xs tracking-widest">
                                    ELCCO_SYSTEM: ONLINE
                                </p>
                            </div>
                        </div>

                        {/* Decor Corners (Visual Mecha) */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-frosted-mint-500/30 rounded-tl-3xl -z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-frosted-mint-500/30 rounded-br-3xl -z-0"></div>
                    </div>

                    {/* --- RIGHT SIDE: CONTENT & GRID --- */}
                    <div className="w-full lg:w-7/12" data-aos="fade-left">
                        {/* Header Title */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-12 bg-frosted-mint-500"></div>
                            <span className="text-frosted-mint-400 font-bold uppercase tracking-widest text-sm">
                                About ELCCO 2026
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-frosted-mint-50 mb-6 leading-tight">
                            Electrical and Computer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                Competition
                            </span>
                        </h2>

                        {/* Deskripsi Asli (Tidak diubah) */}
                        <p className="text-muted-olive-100 text-lg leading-relaxed mb-10 border-l-2 border-frosted-mint-900 pl-6 text-justify">
                            ELCCO (Electrical and Computer Competition) adalah
                            kompetisi nasional yang diselenggarakan oleh
                            Himpunan Mahasiswa Elektro Universitas Udayana
                            sebagai wadah kolaborasi, kreativitas, dan inovasi
                            bagi pelajar serta mahasiswa di seluruh Indonesia.
                            Ajang ini dirancang untuk mengasah potensi hardskill
                            maupun softskill peserta dalam menghadapi pesatnya
                            perkembangan teknologi saat ini.
                        </p>

                        {/* COMPETITION GRID (Tampilan Mecha, Konten Real) */}
                        <div className="mb-4">
                            <h4 className="text-ivory-mist-100 font-bold mb-4 flex items-center gap-2">
                                <span className="w-2 h-2 bg-frosted-mint-500 rounded-sm"></span>
                                Daftar Perlombaan
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3">
                                {competitions.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group relative p-3 rounded-lg bg-frosted-mint-900/10 border border-frosted-mint-500/10 hover:bg-frosted-mint-500/20 hover:border-frosted-mint-500/40 transition-all duration-300 cursor-default flex items-center gap-3"
                                    >
                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 bg-frosted-mint-500/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                        {/* Icon Box */}
                                        <div className="p-2 rounded-md bg-dark-spruce-950 text-frosted-mint-400 group-hover:text-frosted-mint-300 transition-colors border border-frosted-mint-500/20">
                                            {item.icon}
                                        </div>

                                        {/* Text Info */}
                                        <div className="relative z-10 flex-1">
                                            <div className="flex justify-between items-center mb-0.5">
                                                <h5 className="text-frosted-mint-50 font-bold text-sm group-hover:text-white transition-colors">
                                                    {item.title}
                                                </h5>
                                                <span className="text-[10px] font-mono text-frosted-mint-500/40">
                                                    {item.id}
                                                </span>
                                            </div>
                                            <p className="text-[10px] text-muted-olive-400 uppercase tracking-wide">
                                                Kategori: {item.category}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
