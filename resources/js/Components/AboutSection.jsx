import React from "react";
import about from "/public/images/about.webp";
import sumo from "/public/images/Sumo.png";
import Line from "/public/images/Line-Fol.png";
import networking from "/public/images/Networking.png";
import lcc from "/public/images/LCC.png";
import lkti from "/public/images/LKTI.png";
import lkct from "/public/images/LKCT.png";
import essay from "/public/images/Essay.png";
import infografis from "/public/images/Infografis.png";

const AboutSection = () => {
    const competitions = [
        {
            id: "DIV-01",
            title: "Lomba Sumobot",
            image: sumo,
            category: "Umum",
        },
        {
            id: "DIV-02",
            title: "Line Follower",
            image: Line,
            category: "Umum",
        },
        {
            id: "DIV-03",
            title: "Networking Cisco",
            image: networking,
            category: "SMA/SMK",
        },
        {
            id: "DIV-04",
            title: "Cerdas Cermat (LCC)",
            image: lcc,
            category: "SMA/SMK",
        },
        {
            id: "DIV-05",
            title: "Karya Tulis (LKTI)",
            image: lkti,
            category: "SMA/SMK",
        },
        {
            id: "DIV-06",
            title: "Karya Cipta (LKCT)",
            image: lkct,
            category: "Mahasiswa",
        },
        {
            id: "DIV-07",
            title: "Lomba Essay",
            image: essay,
            category: "Umum",
        },
        {
            id: "DIV-08",
            title: "Lomba Infografis",
            image: infografis,
            category: "Umum",
        },
    ];

    const handleNavigateToCompetition = (e, title) => {
        e.preventDefault();
        const section = document.getElementById("competitions");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            const event = new CustomEvent("open-competition-modal", {
                detail: title,
            });
            window.dispatchEvent(event);
        }, 500);
    };

    return (
        <section
            id="about"
            className="relative w-full py-24 overflow-hidden bg-dark-spruce-950"
        >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-frosted-mint-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div
                        className="w-full lg:w-5/12 relative top-10 lg:top-24"
                        data-aos="fade-right"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-3 shadow-2xl shadow-black/50 group">
                            <div className="absolute top-4 right-4 flex gap-2 z-20">
                                <div className="w-2 h-2 rounded-full bg-frosted-mint-500 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                            </div>

                            <div className="relative overflow-hidden rounded-2xl">
                                <img
                                    src={about}
                                    alt="About Illustration"
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5] scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950/80 via-transparent to-transparent"></div>
                            </div>

                            <div className="absolute bottom-6 left-6 bg-dark-spruce-950/80 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-frosted-mint-500 shadow-lg">
                                <p className="text-white font-mono text-xs tracking-widest">
                                    ELCCO_SYSTEM: ONLINE
                                </p>
                            </div>
                        </div>

                        <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-white/10 rounded-tl-2xl -z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-white/10 rounded-br-2xl -z-0"></div>
                    </div>

                    <div className="w-full lg:w-7/12" data-aos="fade-left">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[2px] w-12 bg-frosted-mint-500"></div>
                            <span className="text-frosted-mint-400 font-bold uppercase tracking-widest text-sm">
                                About ELCCO 2026
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Electrical and Computer <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-white">
                                Competition
                            </span>
                        </h2>

                        <p className="text-slate-300 text-lg leading-relaxed mb-12 border-l-4 border-white/10 pl-6 text-justify">
                            ELCCO (Electrical and Computer Competition) adalah
                            kompetisi nasional yang diselenggarakan oleh
                            Himpunan Mahasiswa Elektro Universitas Udayana
                            sebagai wadah kolaborasi, kreativitas, dan inovasi
                            bagi pelajar serta mahasiswa di seluruh Indonesia.
                            Ajang ini dirancang untuk mengasah potensi hardskill
                            maupun softskill peserta dalam menghadapi pesatnya
                            perkembangan teknologi saat ini.
                        </p>

                        <div className="mt-8">
                            <h4 className="text-white font-bold mb-6 flex items-center gap-3">
                                <span className="w-1.5 h-6 bg-frosted-mint-500 rounded-full"></span>
                                <span className="text-lg tracking-wide">
                                    Daftar Perlombaan
                                </span>
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {competitions.map((item, index) => (
                                    <a
                                        key={index}
                                        href="#competitions"
                                        onClick={(e) =>
                                            handleNavigateToCompetition(
                                                e,
                                                item.title,
                                            )
                                        }
                                        className="group relative p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-frosted-mint-500/30 transition-all duration-300 flex items-center gap-4 cursor-pointer overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[150%] group-hover:animate-shimmer"></div>

                                        <div className="relative z-10 w-12 h-12 flex-shrink-0 flex items-center justify-center bg-dark-spruce-950 rounded-lg border border-white/10 group-hover:border-frosted-mint-500/50 transition-colors shadow-lg">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-8 h-8 object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_8px_rgba(81,186,69,0.6)] transition-all"
                                            />
                                        </div>

                                        <div className="relative z-10 flex-1 min-w-0">
                                            <div className="flex justify-between items-center mb-1">
                                                <h5 className="text-white font-bold text-sm group-hover:text-frosted-mint-300 transition-colors truncate pr-2">
                                                    {item.title}
                                                </h5>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span
                                                    className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                                                        item.category ===
                                                        "SMA/SMK"
                                                            ? "bg-blue-500/10 text-blue-300 border-blue-500/20"
                                                            : item.category ===
                                                                "Mahasiswa"
                                                              ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                                                              : "bg-frosted-mint-500/10 text-frosted-mint-300 border-frosted-mint-500/20"
                                                    }`}
                                                >
                                                    {item.category}
                                                </span>
                                                <span className="text-[10px] font-mono text-slate-500 group-hover:text-white/50 transition-colors">
                                                    {item.id}
                                                </span>
                                            </div>
                                        </div>
                                    </a>
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
