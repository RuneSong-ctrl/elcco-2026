import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/Components/ui/button";
import GundamFull from "/public/images/maskot.webp";
import ElccoLogo from "/public/images/logo.webp";
import ELCCO2026 from "/public/images/elcco2026.webp";

const HeroSection = () => {
    const { scrollY } = useScroll();

    const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
    const opacityParallax = useTransform(scrollY, [0, 400], [0.6, 0.1]);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out-cubic",
            disable: "mobile",
        });
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-dark-spruce-950 pt-24 pb-20 md:pb-28 contain-paint">
            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"></div>

            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[120px] rounded-full pointer-events-none z-0 will-change-transform"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-frosted-mint-500/20 blur-[120px] rounded-full pointer-events-none z-0 will-change-transform"></div>

            <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
                <motion.div
                    className="relative w-full h-[120%] lg:w-[80%] blur-[1px] mix-blend-normal will-change-transform"
                    style={{
                        y: yParallax,
                        opacity: opacityParallax,
                    }}
                >
                    <img
                        src={GundamFull}
                        alt="ELCCO Mascot Character"
                        className="w-full h-full object-cover lg:object-contain object-center filter grayscale-[15%] contrast-125 brightness-110"
                        width="1200"
                        height="1000"
                        decoding="async"
                        fetchPriority="high"
                        loading="eager"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950/60 via-dark-spruce-950/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-dark-spruce-950/20 mix-blend-multiply z-10"></div>
            </div>

            <div className="container relative z-20 mx-auto px-6 flex flex-col items-center text-center">
                <img
                    src={ElccoLogo}
                    alt="ELCCO Logo Icon"
                    className="w-40 md:w-44 lg:w-52 mb-6 drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] animate-float-slow"
                    data-aos="fade-down"
                    width="192"
                    height="192"
                    loading="eager"
                />

                <div
                    className="mb-3 w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px]"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    <img
                        src={ELCCO2026}
                        alt="ELCCO 2026 Title"
                        className="w-full h-auto object-contain mx-auto"
                        style={{
                            filter: "drop-shadow(0 0 1px rgba(255,255,255,0.4)) drop-shadow(0 0 8px rgba(52, 211, 153, 0.3)) drop-shadow(0 0 20px rgba(52, 211, 153, 0.1))",
                        }}
                        width="450"
                        height="150"
                        loading="eager"
                    />
                </div>

                <h2
                    className="text-white mb-3 text-base font-bold uppercase tracking-[0.25em] sm:text-lg md:text-xl lg:text-2xl leading-tight drop-shadow-md"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Electrical & Computer Competition
                </h2>

                <p
                    className="text-slate-200 mb-8 max-w-xl text-sm leading-relaxed sm:text-base md:text-lg font-light tracking-wide"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Fostering Youth Creativity and Innovation through the
                    Demographic Bonus in the Era of{" "}
                    <span className="text-frosted-mint-400 font-extrabold text-shadow-glow">
                        Society 5.0
                    </span>
                </p>

                <div
                    className="flex flex-wrap justify-center gap-4 sm:gap-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    <Button
                        size="lg"
                        className="group relative overflow-hidden bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white font-bold text-base px-8 py-6 rounded-full shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-transform hover:scale-105 active:scale-95 border border-frosted-mint-400/50"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer z-0"></span>
                        <a
                            href="#competitions"
                            className="relative z-10 flex items-center gap-2"
                        >
                            Register Now
                        </a>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-white/20 text-white hover:bg-white hover:text-dark-spruce-950 font-bold text-base px-8 py-6 rounded-full backdrop-blur-sm transition-transform hover:scale-105 active:scale-95 hover:border-white shadow-lg"
                    >
                        <a href="#about">Learn More</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
