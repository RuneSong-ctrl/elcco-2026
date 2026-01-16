import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@/Components/ui/button";
import GundamFull from "/public/images/maskot.png";
import ElccoLogo from "/public/images/logo.png";

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-space-gradient">
            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-40"></div>
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-dark-spruce-950/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-dark-spruce-950/50 to-transparent z-10"></div>

            <div className="container relative z-20 mx-auto flex min-h-screen max-w-[1440px] flex-col items-center justify-center px-6 py-24 md:px-12 lg:flex-row lg:justify-between lg:items-center lg:px-20 lg:py-0 xl:px-32">
                <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl">
                    <img
                        src={ElccoLogo}
                        alt="ELCCO 2026 Logo"
                        className="mb-6 w-28 md:w-36 lg:w-44 drop-shadow-[0_0_20px_rgba(81,186,69,0.4)]"
                        data-aos="fade-down"
                    />

                    <h1
                        className="text-frosted-mint-50 mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        ELCCO{" "}
                        <span className="text-ivory-mist-400 drop-shadow-lg">
                            2026
                        </span>
                    </h1>
                    <h2
                        className="text-frosted-mint-300 mb-6 text-lg font-bold uppercase tracking-[0.2em] sm:text-xl md:text-2xl"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        Electrical and Computer Competition
                    </h2>

                    <p
                        className="text-muted-olive-100 mb-10 max-w-md text-base leading-relaxed sm:text-lg md:max-w-xl"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>

                    <div
                        className="flex flex-wrap justify-center gap-4 lg:justify-start"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        <Button
                            size="lg"
                            className="bg-frosted-mint-500 hover:bg-frosted-mint-400 text-dark-spruce-950 border-frosted-mint-600 border-b-[5px] font-extrabold text-base px-10 py-6 rounded-2xl transition-all hover:-translate-y-1 active:border-b-0 active:translate-y-1 shadow-lg shadow-frosted-mint-900/50"
                        >
                            Register Now
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-frosted-mint-500/50 text-frosted-mint-300 hover:bg-frosted-mint-500/10 hover:text-frosted-mint-100 hover:border-frosted-mint-400 font-bold text-base px-10 py-6 rounded-2xl backdrop-blur-sm transition-all"
                        >
                            Learn More
                        </Button>
                    </div>
                </div>

                <div
                    className="hidden lg:flex relative flex-1 justify-end items-center w-full lg:h-auto pl-10"
                    data-aos="zoom-out-left"
                    data-aos-delay="300"
                    data-aos-duration="1200"
                >
                    <div className="absolute inset-0 bg-radial-[50%_50%_at_50%_50%] from-frosted-mint-500/30 via-transparent to-transparent blur-[60px] -z-10 animate-pulse"></div>

                    <img
                        src={GundamFull}
                        alt="Gundam ELCCO Mascot"
                        className="animate-float relative z-10 w-auto h-auto lg:max-h-[75vh] xl:max-h-[85vh] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
