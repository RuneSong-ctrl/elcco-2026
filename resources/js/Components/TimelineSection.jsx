import React from "react";
import { Flag, Calendar, Rocket, Target, Trophy, Clock } from "lucide-react";

const events = [
    {
        id: 1,
        date: "01 Feb 2026",
        title: "Registration Open",
        desc: "Pendaftaran dibuka untuk seluruh divisi kompetisi. Siapkan tim dan mecha terbaikmu.",
        icon: <Flag className="w-5 h-5" />,
        status: "completed", // completed, active, upcoming
    },
    {
        id: 2,
        date: "20 Feb 2026",
        title: "Technical Meeting",
        desc: "Penjelasan aturan teknis dan sesi tanya jawab live streaming via Holo-Net (Zoom).",
        icon: <Calendar className="w-5 h-5" />,
        status: "active",
    },
    {
        id: 3,
        date: "01 Mar 2026",
        title: "Project Submission",
        desc: "Batas akhir pengumpulan proposal, kode program, dan blueprint desain.",
        icon: <Clock className="w-5 h-5" />,
        status: "upcoming",
    },
    {
        id: 4,
        date: "10 Mar 2026",
        title: "Finalist Announcement",
        desc: "Pengumuman 5 besar tim terbaik yang akan melaju ke babak Grand Final.",
        icon: <Target className="w-5 h-5" />,
        status: "upcoming",
    },
    {
        id: 5,
        date: "15 Mar 2026",
        title: "Grand Final & Awarding",
        desc: "Presentasi offline di markas pusat dan penyerahan gelar juara galaksi.",
        icon: <Trophy className="w-5 h-5" />,
        status: "upcoming",
    },
];

const TimelineSection = () => {
    return (
        <section
            id="timeline"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-frosted-mint-500/20 to-transparent hidden md:block"></div>

            {/* Mobile Line (Left Aligned) */}
            <div className="absolute top-0 left-8 w-[2px] h-full bg-gradient-to-b from-transparent via-frosted-mint-500/20 to-transparent md:hidden"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="text-center mb-20" data-aos="fade-down">
                    <span className="text-frosted-mint-400 font-bold uppercase tracking-[0.3em] text-sm">
                        Mission Roadmap
                    </span>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-frosted-mint-50">
                        Flight{" "}
                        <span className="text-ivory-mist-400">Schedule</span>
                    </h2>
                </div>

                {/* Timeline Items */}
                <div className="relative flex flex-col gap-12 md:gap-0">
                    {events.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                                index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                        >
                            {/* 1. Content Side (Empty for balancing on Desktop) */}
                            <div className="hidden md:block md:w-5/12"></div>

                            {/* 2. Center Node (The Glowing Dot) */}
                            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                {/* Outer Ring */}
                                <div
                                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center bg-dark-spruce-950 z-20 transition-all duration-500 ${
                                        item.status === "completed"
                                            ? "border-frosted-mint-500 shadow-[0_0_15px_rgba(81,186,69,0.5)]"
                                            : item.status === "active"
                                            ? "border-ivory-mist-400 shadow-[0_0_15px_rgba(255,187,0,0.5)] animate-pulse"
                                            : "border-frosted-mint-900"
                                    }`}
                                >
                                    {/* Inner Dot */}
                                    <div
                                        className={`w-3 h-3 rounded-full ${
                                            item.status === "completed"
                                                ? "bg-frosted-mint-500"
                                                : item.status === "active"
                                                ? "bg-ivory-mist-400"
                                                : "bg-frosted-mint-900"
                                        }`}
                                    ></div>
                                </div>
                            </div>

                            {/* 3. Card Content Side */}
                            <div
                                className="w-full pl-16 md:pl-0 md:w-5/12 relative"
                                data-aos={
                                    index % 2 === 0 ? "fade-left" : "fade-right"
                                }
                            >
                                <div
                                    className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                                        item.status === "active"
                                            ? "bg-frosted-mint-900/30 border-frosted-mint-500/50 shadow-lg shadow-frosted-mint-900/20"
                                            : "bg-dark-spruce-900/40 border-frosted-mint-500/10 hover:border-frosted-mint-500/30"
                                    }`}
                                >
                                    {/* Date Badge */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <span
                                            className={`px-3 py-1 text-xs font-bold rounded-full border ${
                                                item.status === "active"
                                                    ? "bg-ivory-mist-500/20 text-ivory-mist-300 border-ivory-mist-500/30"
                                                    : "bg-frosted-mint-500/10 text-frosted-mint-400 border-frosted-mint-500/20"
                                            }`}
                                        >
                                            {item.date}
                                        </span>
                                    </div>

                                    {/* Title & Icon */}
                                    <div className="flex items-start justify-between gap-4 mb-2">
                                        <h3
                                            className={`text-xl font-bold ${
                                                item.status === "active"
                                                    ? "text-ivory-mist-100"
                                                    : "text-frosted-mint-50"
                                            }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <div
                                            className={`p-2 rounded-lg ${
                                                item.status === "active"
                                                    ? "bg-ivory-mist-500/20 text-ivory-mist-400"
                                                    : "bg-dark-spruce-950 text-frosted-mint-500"
                                            }`}
                                        >
                                            {item.icon}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-olive-200 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Connector Line for Mobile (Horizontal connector to the main vertical line) */}
                                <div className="absolute top-8 left-8 w-8 h-[2px] bg-frosted-mint-500/20 md:hidden"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
