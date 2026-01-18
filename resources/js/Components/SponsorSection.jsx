import React from "react";
import { motion } from "framer-motion";

const SponsorsSection = () => {
    const sponsors = [
        "Sponsor ELCCO",
        "Sponsor ELCCO",
        "Sponsor ELCCO",
        "Sponsor ELCCO",
        "Sponsor ELCCO",
        "Sponsor ELCCO",
    ];

    const LogoItem = ({ name }) => (
        <div className="flex items-center justify-center min-w-[200px] h-24 mx-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm group hover:bg-frosted-mint-500/10 hover:border-frosted-mint-500/50 transition-all duration-300 cursor-pointer">
            <span className="text-slate-500 font-bold text-xl uppercase tracking-widest group-hover:text-frosted-mint-400 transition-colors">
                {name}
            </span>
        </div>
    );

    return (
        <section className="relative w-full py-16 bg-dark-spruce-950 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-10 text-center">
                <p className="text-frosted-mint-500 text-sm font-mono tracking-[0.3em] uppercase mb-3">
                    Supported By
                </p>
                <h3 className="text-white font-bold text-2xl md:text-3xl">
                    Our Partners
                </h3>
            </div>

            <div className="relative flex w-full overflow-hidden">
                <div className="absolute top-0 left-0 z-10 w-32 h-full bg-gradient-to-r from-dark-spruce-950 to-transparent"></div>
                <div className="absolute top-0 right-0 z-10 w-32 h-full bg-gradient-to-l from-dark-spruce-950 to-transparent"></div>

                <motion.div
                    className="flex items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30,
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...sponsors, ...sponsors].map((sponsor, index) => (
                        <LogoItem key={index} name={sponsor} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SponsorsSection;
