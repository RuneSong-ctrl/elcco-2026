import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import galeri1 from "/public/images/galeri1.jpeg";
import galeri2 from "/public/images/galeri2.jpeg";
import galeri3 from "/public/images/galeri3.jpeg";
import galeri4 from "/public/images/galeri4.jpeg";
import galeri5 from "/public/images/galeri5.jpeg";
import galeri6 from "/public/images/galeri6.jpeg";

const archives = [
    {
        id: 1,
        title: "Lomba LKCT",
        year: "2025",
        category: "Innovation",
        src: galeri1,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        id: 2,
        title: "Lomba Line Follower",
        year: "2025",
        category: "Robotics",
        src: galeri2,
        colSpan: "col-span-1",
    },
    {
        id: 3,
        title: "Lomba LCC",
        year: "2025",
        category: "Academic",
        src: galeri3,
        colSpan: "col-span-1",
    },
    {
        id: 4,
        title: "Lomba Line Follower",
        year: "2025",
        category: "Robotics",
        src: galeri4,
        colSpan: "col-span-1",
    },
    {
        id: 5,
        title: "Lomba Sumo Bot",
        year: "2025",
        category: "Robotics",
        src: galeri5,
        colSpan: "col-span-1 md:col-span-2",
    },
    {
        id: 6,
        title: "Lomba Line Follower",
        year: "2025",
        category: "Robotics",
        src: galeri6,
        colSpan: "col-span-1",
    },
];

const GallerySection = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section
            id="gallery"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    data-aos="fade-down"
                >
                    <div>
                        <span className="text-frosted-mint-400 font-mono tracking-[0.2em] text-sm uppercase bg-frosted-mint-900/20 px-3 py-1 rounded border border-frosted-mint-500/20">
                            Database Access
                        </span>
                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white">
                            ELCCO{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-white">
                                Archives
                            </span>
                        </h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-slate-400 font-mono text-sm">
                            TOTAL_RECORDS:{" "}
                            <span className="text-white">
                                {archives.length}
                            </span>
                        </p>
                        <p className="text-slate-400 font-mono text-sm">
                            STATUS:{" "}
                            <span className="text-frosted-mint-400">
                                DECLASSIFIED
                            </span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
                    {archives.map((item) => (
                        <motion.div
                            layoutId={`card-${item.id}`}
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-dark-spruce-900/50 backdrop-blur-sm ${item.colSpan}`}
                            whileHover={{ y: -5 }}
                        >
                            <motion.img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                            />

                            <motion.div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950 via-dark-spruce-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <div className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full backdrop-blur-md border border-white/10">
                                    <ZoomIn className="w-5 h-5" />
                                </div>
                                <span className="text-frosted-mint-400 text-xs font-mono uppercase tracking-widest mb-1 bg-black/40 w-fit px-2 py-0.5 rounded backdrop-blur-sm">
                                    LOG_DATE: {item.year}
                                </span>
                                <h3 className="text-white font-bold text-xl drop-shadow-lg">
                                    {item.title}
                                </h3>
                                <div className="w-full h-[2px] bg-white/10 mt-3 relative overflow-hidden rounded-full">
                                    <div className="absolute top-0 left-0 w-1/3 h-full bg-frosted-mint-500 animate-[loading_1s_infinite]"></div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-dark-spruce-950/95 backdrop-blur-xl"
                            />

                            {archives.map(
                                (item) =>
                                    item.id === selectedId && (
                                        <motion.div
                                            layoutId={`card-${item.id}`}
                                            key={item.id}
                                            className="relative w-full max-w-5xl bg-dark-spruce-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                                        >
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedId(null);
                                                }}
                                                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-frosted-mint-600 rounded-full text-white transition-colors border border-white/10 backdrop-blur-md"
                                            >
                                                <X size={24} />
                                            </button>

                                            <div className="relative aspect-video md:aspect-[21/9]">
                                                <motion.img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />

                                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-dark-spruce-950 via-dark-spruce-950/80 to-transparent">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="px-3 py-1 text-xs font-bold bg-frosted-mint-600 text-white rounded border border-frosted-mint-500">
                                                            {item.category}
                                                        </span>
                                                        <span className="text-slate-300 font-mono text-xs tracking-wider">
                                                            #{item.year}
                                                            _ARCHIVE_ID_
                                                            {item.id}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ),
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GallerySection;
