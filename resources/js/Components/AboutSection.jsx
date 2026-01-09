import React from "react";
import { Cpu, Globe, Trophy, Target } from "lucide-react";

const AboutSection = () => {
    const features = [
        {
            icon: <Trophy className="w-6 h-6 text-frosted-mint-500" />,
            title: "Elite Competition",
            desc: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            icon: <Cpu className="w-6 h-6 text-frosted-mint-500" />,
            title: "Advanced Tech",
            desc: "Adipiscing elit sed do eiusmod tempor.",
        },
        {
            icon: <Globe className="w-6 h-6 text-frosted-mint-500" />,
            title: "Global Scale",
            desc: "Incididunt ut labore et dolore magna.",
        },
        {
            icon: <Target className="w-6 h-6 text-frosted-mint-500" />,
            title: "Precision Focus",
            desc: "Ut enim ad minim veniam quis nostrud.",
        },
    ];

    return (
        <section
            id="about"
            className="relative w-full py-24 overflow-hidden bg-dark-spruce-950"
        >
            <div className="absolute top-0 right-0 w-96 h-96 bg-frosted-mint-600/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-ivory-mist-500/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 xl:px-32">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div
                        className="w-full lg:w-1/2 relative"
                        data-aos="fade-right"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-frosted-mint-500/20 bg-dark-spruce-900/40 backdrop-blur-sm p-2 shadow-2xl shadow-frosted-mint-900/20">
                            <div className="absolute top-4 right-4 flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-frosted-mint-500 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-frosted-mint-500/30"></div>
                            </div>

                            <img
                                src="https://images.unsplash.com/photo-1535378437323-9555f3e7f6aa?q=80&w=2000&auto=format&fit=crop"
                                alt="About Illustration"
                                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[4/3]"
                            />

                            <div className="absolute bottom-6 left-6 bg-dark-spruce-950/80 backdrop-blur-md px-4 py-2 rounded-lg border-l-4 border-frosted-mint-500">
                                <p className="text-frosted-mint-50 font-mono text-xs tracking-widest">
                                    SYSTEM_STATUS: ONLINE
                                </p>
                            </div>
                        </div>

                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-frosted-mint-500/30 rounded-tl-3xl -z-0"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-frosted-mint-500/30 rounded-br-3xl -z-0"></div>
                    </div>

                    <div className="w-full lg:w-1/2" data-aos="fade-left">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-[2px] w-12 bg-frosted-mint-500"></div>
                            <span className="text-frosted-mint-400 font-bold uppercase tracking-widest text-sm">
                                About ELCCO 2026
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-frosted-mint-50 mb-6 leading-tight">
                            Lorem ipsum dolore <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                Elcco Competitions
                            </span>
                        </h2>

                        <p className="text-muted-olive-100 text-lg leading-relaxed mb-8 border-l-2 border-frosted-mint-900 pl-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-frosted-mint-900/10 border border-frosted-mint-500/10 hover:bg-frosted-mint-500/10 hover:border-frosted-mint-500/30 transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-dark-spruce-950 group-hover:scale-110 transition-transform">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-frosted-mint-100 font-bold mb-1">
                                                {item.title}
                                            </h4>
                                            <p className="text-muted-olive-300 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
