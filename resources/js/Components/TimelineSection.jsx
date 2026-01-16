import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Flag,
    Calendar,
    Rocket,
    Target,
    Trophy,
    Clock,
    Bot,
    Zap,
    Network,
    FileText,
    Cpu,
    BrainCircuit,
    PenTool,
    ImageIcon,
} from "lucide-react";

import infografis from "/public/images/Infografis.png";
import lcc from "/public/images/LCC.png";
import lkti from "/public/images/LKTI.png";
import Line from "/public/images/Line-Fol.png";
import sumobot from "/public/images/Sumo.png";
import networking from "/public/images/Networking.png";
import essay from "/public/images/Essay.png";
import lkct from "/public/images/LKCT.png";

const timelineData = {
    sumobot: [
        {
            date: "17 Jan - 07 Mar",
            title: "Pendaftaran Normal",
            icon: <Flag />,
            status: "active",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Masa Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "14 Mar 2026",
            title: "Technical Meeting",
            icon: <Calendar />,
            status: "upcoming",
        },
        {
            date: "10 - 12 Apr 2026",
            title: "Pelaksanaan Lomba",
            icon: <Bot />,
            status: "upcoming",
        },
        {
            date: "12 Apr 2026",
            title: "Pengumuman Juara",
            icon: <Trophy />,
            status: "upcoming",
        },
    ],
    lf: [
        {
            date: "17 Jan - 07 Mar",
            title: "Pendaftaran Normal",
            icon: <Flag />,
            status: "active",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Masa Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "14 Mar 2026",
            title: "Technical Meeting",
            icon: <Calendar />,
            status: "upcoming",
        },
        {
            date: "10 Apr 2026",
            title: "Running Test",
            icon: <Zap />,
            status: "upcoming",
        },
        {
            date: "11 - 12 Apr 2026",
            title: "Race Day",
            icon: <Rocket />,
            status: "upcoming",
        },
    ],
    lkti: [
        {
            date: "17 Jan - 02 Feb",
            title: "Pendaftaran Gel 1",
            icon: <Flag />,
            status: "active",
        },
        {
            date: "03 Feb - 18 Feb",
            title: "Pendaftaran Gel 2",
            icon: <Flag />,
            status: "upcoming",
        },
        {
            date: "19 Feb - 07 Mar",
            title: "Pendaftaran Gel 3",
            icon: <Flag />,
            status: "upcoming",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Masa Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "13 Mar - 17 Mar",
            title: "Seleksi Full Paper",
            icon: <FileText />,
            status: "upcoming",
        },
        {
            date: "18 Mar 2026",
            title: "Pengumuman Finalis",
            icon: <Target />,
            status: "upcoming",
        },
        {
            date: "10 Apr 2026",
            title: "Grand Final",
            icon: <Rocket />,
            status: "upcoming",
        },
    ],
    lkct: [
        {
            date: "17 Jan - 13 Feb",
            title: "Pendaftaran & Abstrak",
            icon: <Flag />,
            status: "active",
        },
        {
            date: "19 Feb 2026",
            title: "Pengumuman Abstrak",
            icon: <Target />,
            status: "upcoming",
        },
        {
            date: "19 Feb - 27 Feb",
            title: "Full Paper Gel 1",
            icon: <FileText />,
            status: "upcoming",
        },
        {
            date: "28 Feb - 07 Mar",
            title: "Full Paper Gel 2",
            icon: <FileText />,
            status: "upcoming",
        },
        {
            date: "08 Mar - 13 Mar",
            title: "Extend Full Paper",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "18 Mar 2026",
            title: "Pengumuman Finalis",
            icon: <Target />,
            status: "upcoming",
        },
        {
            date: "11 Apr 2026",
            title: "Grand Final",
            icon: <Cpu />,
            status: "upcoming",
        },
    ],
    lcc: [
        {
            date: "17 Jan - 07 Mar",
            title: "Pendaftaran",
            icon: <Flag />,
            status: "active",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Masa Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "13 Mar 2026",
            title: "Technical Meeting",
            icon: <Calendar />,
            status: "upcoming",
        },
        {
            date: "15 Mar 2026",
            title: "Penyisihan (Online)",
            icon: <BrainCircuit />,
            status: "upcoming",
        },
        {
            date: "12 Apr 2026",
            title: "Semifinal & Final",
            icon: <Trophy />,
            status: "upcoming",
        },
    ],
    essay: [
        {
            date: "10 Jan - 02 Feb",
            title: "Pendaftaran Gel 1",
            icon: <Flag />,
            status: "active",
        },
        {
            date: "03 Feb - 18 Feb",
            title: "Pendaftaran Gel 2",
            icon: <Flag />,
            status: "upcoming",
        },
        {
            date: "19 Feb - 07 Mar",
            title: "Pendaftaran Gel 3",
            icon: <Flag />,
            status: "upcoming",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "18 Mar 2026",
            title: "Pengumuman Finalis",
            icon: <Target />,
            status: "upcoming",
        },
        {
            date: "29 Mar 2026",
            title: "Presentasi & Awarding",
            icon: <Trophy />,
            status: "upcoming",
        },
    ],
    infografis: [
        {
            date: "17 Jan - 02 Feb",
            title: "Pendaftaran Gel 1",
            icon: <ImageIcon />,
            status: "active",
        },
        {
            date: "03 Feb - 18 Feb",
            title: "Pendaftaran Gel 2",
            icon: <ImageIcon />,
            status: "upcoming",
        },
        {
            date: "19 Feb - 07 Mar",
            title: "Pendaftaran Gel 3",
            icon: <ImageIcon />,
            status: "upcoming",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "18 Mar 2026",
            title: "Pengumuman Finalis",
            icon: <Target />,
            status: "upcoming",
        },
        {
            date: "29 Mar 2026",
            title: "Presentasi & Awarding",
            icon: <Trophy />,
            status: "upcoming",
        },
    ],
    networking: [
        {
            date: "17 Jan - 07 Mar",
            title: "Pendaftaran",
            icon: <Network />,
            status: "active",
        },
        {
            date: "08 Mar - 12 Mar",
            title: "Masa Extend",
            icon: <Clock />,
            status: "upcoming",
        },
        {
            date: "13 Mar 2026",
            title: "TM Penyisihan",
            icon: <Calendar />,
            status: "upcoming",
        },
        {
            date: "15 Mar 2026",
            title: "Penyisihan",
            icon: <Zap />,
            status: "upcoming",
        },
        {
            date: "10 Apr 2026",
            title: "Grand Final",
            icon: <Rocket />,
            status: "upcoming",
        },
    ],
};

const tabs = [
    { id: "sumobot", label: "Sumobot", image: sumobot },
    { id: "lf", label: "Line Follower", image: Line },
    { id: "networking", label: "Networking", image: networking },
    { id: "lkti", label: "LKTI", image: lkti },
    { id: "lkct", label: "LKCT", image: lkct },
    { id: "lcc", label: "LCC", image: lcc },
    { id: "essay", label: "Essay", image: essay },
    { id: "infografis", label: "Infografis", image: infografis },
];

const TimelineSection = () => {
    const [activeTab, setActiveTab] = useState("sumobot");

    return (
        <section
            id="timeline"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-frosted-mint-500/20 to-transparent hidden md:block"></div>
            <div className="absolute top-0 left-8 w-[2px] h-full bg-gradient-to-b from-transparent via-frosted-mint-500/20 to-transparent md:hidden"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="text-center mb-16" data-aos="fade-down">
                    <span className="text-frosted-mint-400 font-bold uppercase tracking-[0.3em] text-sm">
                        Mission Roadmap
                    </span>
                    <h2 className="mt-3 text-3xl md:text-5xl font-extrabold text-frosted-mint-50">
                        Flight{" "}
                        <span className="text-ivory-mist-400">Schedule</span>
                    </h2>
                </div>

                <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-20 gap-3 scrollbar-hide px-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                                activeTab === tab.id
                                    ? "bg-frosted-mint-500 text-dark-spruce-950 border-frosted-mint-500 shadow-[0_0_15px_rgba(81,186,69,0.4)]"
                                    : "bg-dark-spruce-900/50 text-muted-olive-400 border-frosted-mint-500/20 hover:border-frosted-mint-500/50 hover:text-frosted-mint-300"
                            }`}
                        >
                            <img
                                src={tab.image}
                                alt={tab.label}
                                className="w-5 h-5 object-contain"
                            />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-20 md:gap-24"
                        >
                            {timelineData[activeTab].map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-start md:items-center w-full ${
                                        index % 2 === 0
                                            ? "md:flex-row-reverse"
                                            : ""
                                    }`}
                                >
                                    <div className="hidden md:block md:w-5/12"></div>

                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                                        <div
                                            className={`w-10 h-10 rounded-full border-4 flex items-center justify-center bg-dark-spruce-950 z-20 transition-all duration-500 ${
                                                item.status === "active"
                                                    ? "border-ivory-mist-400 shadow-[0_0_20px_rgba(255,187,0,0.6)] animate-pulse"
                                                    : "border-frosted-mint-900"
                                            }`}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full ${
                                                    item.status === "active"
                                                        ? "bg-ivory-mist-400"
                                                        : "bg-frosted-mint-900"
                                                }`}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="w-full pl-20 md:pl-0 md:w-5/12 relative">
                                        <div
                                            className={`flex items-center gap-5 p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                                                item.status === "active"
                                                    ? "bg-frosted-mint-900/30 border-frosted-mint-500/50 shadow-lg shadow-frosted-mint-900/20"
                                                    : "bg-dark-spruce-900/40 border-frosted-mint-500/10 hover:border-frosted-mint-500/30"
                                            }`}
                                        >
                                            <div
                                                className={`p-3 rounded-xl flex-shrink-0 ${
                                                    item.status === "active"
                                                        ? "bg-ivory-mist-500/20 text-ivory-mist-400"
                                                        : "bg-dark-spruce-950 text-frosted-mint-500 border border-frosted-mint-500/10"
                                                }`}
                                            >
                                                {React.cloneElement(item.icon, {
                                                    className: "w-6 h-6",
                                                })}
                                            </div>

                                            <div>
                                                <div className="mb-1">
                                                    <span
                                                        className={`text-xs font-bold uppercase tracking-wider ${
                                                            item.status ===
                                                            "active"
                                                                ? "text-ivory-mist-300"
                                                                : "text-muted-olive-400"
                                                        }`}
                                                    >
                                                        {item.date}
                                                    </span>
                                                </div>
                                                <h3
                                                    className={`text-xl font-bold leading-tight ${
                                                        item.status === "active"
                                                            ? "text-ivory-mist-50"
                                                            : "text-frosted-mint-50"
                                                    }`}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="absolute top-1/2 left-8 w-12 h-[2px] bg-frosted-mint-500/20 md:hidden -translate-y-1/2"></div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;
