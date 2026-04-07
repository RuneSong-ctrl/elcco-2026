import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/Components/Navbar";
import FooterSection from "@/Components/FooterSection";
import { Trophy } from "lucide-react";
import LineFollowerStandings from "@/Components/LineFollowerStandings";
import SumobotStandings from "@/Components/SumobotStandings";

export default function Standings() {
    const [activeTab, setActiveTab] = useState("line-follower");

    useEffect(() => {
        AOS.init({
            duration: 600,
            once: true,
            easing: "ease-out-quad",
        });
    }, []);

    return (
        <div className="min-h-screen bg-dark-spruce-950 font-sans flex flex-col relative overflow-hidden contain-paint text-slate-100">
            <Head title="Live Standings - ELCCO 2026" />

            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen will-change-transform"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu will-change-transform"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-frosted-mint-500/20 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu will-change-transform"></div>

            <Navbar />

            <main className="flex-grow relative z-10 flex flex-col items-center pt-36 md:pt-40 pb-20 px-4 sm:px-6 max-w-7xl mx-auto w-full">
                <div className="text-center mb-10" data-aos="fade-down">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Trophy className="text-frosted-mint-400" size={32} />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider drop-shadow-md">
                            Live Standings
                        </h1>
                    </div>
                    <p className="text-slate-300 font-light tracking-wide max-w-2xl mx-auto text-sm md:text-base">
                        Pantau langsung hasil pertandingan, perolehan waktu, dan
                        bagan kompetisi ELCCO 2026 secara real-time.
                    </p>
                </div>

                <div
                    className="flex p-1.5 bg-dark-spruce-900/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg mb-12"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <button
                        onClick={() => setActiveTab("line-follower")}
                        className={`relative px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                            activeTab === "line-follower"
                                ? "text-dark-spruce-950"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        {activeTab === "line-follower" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-frosted-mint-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}
                        <span className="relative z-10">Line Follower</span>
                    </button>
                    <button
                        onClick={() => setActiveTab("sumobot")}
                        className={`relative px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                            activeTab === "sumobot"
                                ? "text-dark-spruce-950"
                                : "text-slate-400 hover:text-white"
                        }`}
                    >
                        {activeTab === "sumobot" && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-frosted-mint-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                                initial={false}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                }}
                            />
                        )}
                        <span className="relative z-10">SumoBot</span>
                    </button>
                </div>

                <div className="w-full" data-aos="fade-up" data-aos-delay="200">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === "line-follower" ? (
                                <LineFollowerStandings />
                            ) : (
                                <SumobotStandings />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
            <FooterSection />

            <style jsx="true">{`
                .custom-scrollbar::-webkit-scrollbar {
                    height: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(52, 211, 153, 0.5);
                }
            `}</style>
        </div>
    );
}
