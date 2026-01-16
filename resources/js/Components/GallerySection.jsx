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
            <div className="absolute inset-0 bg-[linear-gradient(rgba(11,26,10,0.9),rgba(11,26,10,0.9)),url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
                    data-aos="fade-down"
                >
                    <div>
                        <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase">
                            Database Access
                        </span>
                        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-frosted-mint-50">
                            ELCCO{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                Archives
                            </span>
                        </h2>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-muted-olive-400 font-mono text-sm">
                            TOTAL_RECORDS: {archives.length}
                        </p>
                        <p className="text-muted-olive-400 font-mono text-sm">
                            STATUS: DECLASSIFIED
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {archives.map((item) => (
                        <motion.div
                            layoutId={`card-${item.id}`}
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className={`relative group cursor-pointer overflow-hidden rounded-2xl border border-frosted-mint-500/10 bg-dark-spruce-900 ${item.colSpan}`}
                            whileHover={{ scale: 0.98 }}
                        >
                            <motion.img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            <motion.div className="absolute inset-0 bg-dark-spruce-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 backdrop-blur-[2px]">
                                <div className="absolute top-4 right-4 text-frosted-mint-400">
                                    <ZoomIn className="w-6 h-6" />
                                </div>
                                <span className="text-frosted-mint-400 text-xs font-mono uppercase tracking-widest mb-1">
                                    LOG_DATE: {item.year}
                                </span>
                                <h3 className="text-ivory-mist-50 font-bold text-xl">
                                    {item.title}
                                </h3>
                                <div className="w-full h-[1px] bg-frosted-mint-500/50 mt-3 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1/2 h-full bg-frosted-mint-400 animate-[loading_1s_infinite]"></div>
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
                                className="absolute inset-0 bg-dark-spruce-950/90 backdrop-blur-md"
                            />

                            {archives.map(
                                (item) =>
                                    item.id === selectedId && (
                                        <motion.div
                                            layoutId={`card-${item.id}`}
                                            key={item.id}
                                            className="relative w-full max-w-4xl bg-dark-spruce-900 rounded-3xl overflow-hidden shadow-2xl border border-frosted-mint-500/30"
                                        >
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedId(null);
                                                }}
                                                className="absolute top-4 right-4 z-50 p-2 bg-dark-spruce-950/50 hover:bg-frosted-mint-500 rounded-full text-white transition-colors"
                                            >
                                                <X size={24} />
                                            </button>

                                            <div className="relative aspect-video">
                                                <motion.img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                />

                                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-dark-spruce-950 to-transparent">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="px-2 py-1 text-xs font-bold bg-frosted-mint-500 text-dark-spruce-950 rounded">
                                                            {item.category}
                                                        </span>
                                                        <span className="text-frosted-mint-300 font-mono text-xs">
                                                            #{item.year}_ARCHIVE
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                            )}
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default GallerySection;
