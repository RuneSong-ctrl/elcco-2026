import React from "react";
import { motion } from "framer-motion";

const SponsorsSection = () => {
    const sponsors = [
        "Galactic Corp",
        "Neo Zeon Ind",
        "Anaheim Electronics",
        "Tekkadan",
        "Celestial Being",
        "Zaft Systems",
        "Londo Bell",
        "Titans Group",
    ];

    // Fungsi untuk merender logo box
    const LogoItem = ({ name }) => (
        <div className="flex items-center justify-center min-w-[200px] h-24 mx-4 bg-frosted-mint-900/10 border border-frosted-mint-500/20 rounded-xl backdrop-blur-sm group hover:bg-frosted-mint-500/10 hover:border-frosted-mint-500/50 transition-all duration-300 cursor-pointer">
            <span className="text-frosted-mint-400/60 font-bold text-xl uppercase tracking-widest group-hover:text-frosted-mint-300 transition-colors">
                {name}
            </span>
        </div>
    );

    return (
        <section className="relative w-full py-10 bg-dark-spruce-950 border-y border-frosted-mint-500/10 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-frosted-mint-500/50 text-sm font-mono tracking-[0.3em] uppercase mb-2">
                    Supported By
                </p>
                <h3 className="text-ivory-mist-100 font-bold text-xl">
                    Official Partners
                </h3>
            </div>

            {/* Marquee Container */}
            <div className="relative flex w-full overflow-hidden mask-gradient">
                {/* Gradient Masks (Fade Effect kiri kanan) */}
                <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-dark-spruce-950 to-transparent"></div>
                <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-dark-spruce-950 to-transparent"></div>

                {/* Moving Track */}
                <motion.div
                    className="flex items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30, // Kecepatan (makin besar makin pelan)
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Render List 2x supaya loop tidak putus */}
                    {[...sponsors, ...sponsors].map((sponsor, index) => (
                        <LogoItem key={index} name={sponsor} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SponsorsSection;
