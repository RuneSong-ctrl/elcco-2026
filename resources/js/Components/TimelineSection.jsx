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
            title: "Extend Masa Pendaftaran",
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
            title: "Extend Masa Pendaftaran",
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
            title: "Extend Masa Pendaftaran",
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
            title: "Extend Masa Pendaftaran",
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
            title: "Extend Masa Pendaftaran",
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
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-frosted-mint-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-12 lg:px-20">
                <div className="text-center mb-16" data-aos="fade-down">
                    <span className="text-frosted-mint-400 font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                        ELCCO 2026
                    </span>
                    <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                        Competition{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-white">
                            Timeline
                        </span>
                    </h2>
                </div>

                <div className="flex justify-start md:justify-center overflow-x-auto pb-6 mb-12 gap-3 scrollbar-hide px-4 w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border flex-shrink-0 ${
                                activeTab === tab.id
                                    ? "bg-frosted-mint-600 text-white border-frosted-mint-500 shadow-lg shadow-frosted-mint-500/25 scale-105"
                                    : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            <img
                                src={tab.image}
                                alt={tab.label}
                                className={`w-4 h-4 object-contain ${activeTab === tab.id ? "brightness-200 grayscale-0" : "grayscale opacity-70"}`}
                            />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-12"
                        >
                            {timelineData[activeTab].map((item, index) => (
                                <div
                                    key={index}
                                    className={`relative flex flex-col md:flex-row items-center w-full ${
                                        index % 2 === 0
                                            ? "md:flex-row-reverse"
                                            : ""
                                    }`}
                                >
                                    <div className="hidden md:block w-1/2"></div>

                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                                        <div
                                            className={`w-10 h-10 rounded-full border-4 flex items-center justify-center bg-dark-spruce-950 transition-all duration-500 ${
                                                item.status === "active"
                                                    ? "border-frosted-mint-500 shadow-[0_0_20px_rgba(34,197,94,0.5)] scale-110"
                                                    : "border-white/10"
                                            }`}
                                        >
                                            <div
                                                className={`w-3 h-3 rounded-full ${
                                                    item.status === "active"
                                                        ? "bg-white animate-pulse"
                                                        : "bg-slate-600"
                                                }`}
                                            ></div>
                                        </div>
                                    </div>

                                    <div
                                        className={`w-full pl-16 md:pl-0 md:w-1/2 ${
                                            index % 2 === 0
                                                ? "md:pr-12 md:text-right"
                                                : "md:pl-12 md:text-left"
                                        }`}
                                    >
                                        <div
                                            className={`group relative p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                                                item.status === "active"
                                                    ? "bg-frosted-mint-900/20 border-frosted-mint-500/30"
                                                    : "bg-white/5 border-white/5 hover:border-white/20"
                                            }`}
                                        >
                                            {item.status === "active" && (
                                                <div className="absolute inset-0 bg-frosted-mint-500/5 rounded-2xl animate-pulse"></div>
                                            )}

                                            <div
                                                className={`flex flex-col gap-3 ${
                                                    index % 2 === 0
                                                        ? "md:items-end"
                                                        : "md:items-start"
                                                }`}
                                            >
                                                {/* BAGIAN TANGGAL: Dibuat sangat kontras */}
                                                <div
                                                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-extrabold w-fit tracking-wide shadow-md ${
                                                        item.status === "active"
                                                            ? "bg-frosted-mint-500 text-dark-spruce-950 shadow-[0_0_15px_rgba(81,186,69,0.4)]"
                                                            : "bg-white/10 text-white border border-white/20"
                                                    }`}
                                                >
                                                    {React.cloneElement(
                                                        item.icon,
                                                        {
                                                            className:
                                                                "w-4 h-4",
                                                        },
                                                    )}
                                                    {item.date}
                                                </div>

                                                <h3
                                                    className={`text-xl font-bold leading-tight ${
                                                        item.status === "active"
                                                            ? "text-white"
                                                            : "text-slate-200 group-hover:text-white"
                                                    }`}
                                                >
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </div>
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
