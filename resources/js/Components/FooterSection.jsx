import React from "react";
import { Link } from "@inertiajs/react";
import { Instagram, ArrowUp, ChevronRight, MapPin } from "lucide-react";
import ElccoLogo from "/public/images/logo.png";

const FooterSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const sitemap = [
        { name: "Home", href: "/" },
        { name: "About ELCCO", href: "#about" },
        { name: "Competitions", href: "#competitions" },
        { name: "Timeline", href: "#timeline" },
        { name: "Gallery", href: "#gallery" },
    ];

    return (
        <footer className="relative w-full bg-dark-spruce-950 pt-20 pb-10 overflow-hidden border-t-2 border-frosted-mint-500/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-frosted-mint-500 to-transparent shadow-[0_0_20px_rgba(81,186,69,0.5)]"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* 1. Brand Info (4 Columns) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link
                            href="/"
                            className="flex items-center gap-3 group"
                        >
                            <div className="bg-frosted-mint-500/20 p-2 rounded-lg border border-frosted-mint-500/30">
                                <img
                                    src={ElccoLogo}
                                    alt="ELCCO Logo"
                                    className="w-10 h-10 object-contain drop-shadow-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-2xl text-frosted-mint-50 leading-none tracking-wider">
                                    ELCCO
                                    <span className="text-ivory-mist-400">
                                        26
                                    </span>
                                </span>
                                <span className="text-[10px] text-muted-olive-400 uppercase tracking-[0.2em]">
                                    Electrical and Computer Competition
                                </span>
                            </div>
                        </Link>
                        <p className="text-muted-olive-300 text-sm leading-relaxed">
                            Fostering Youth Creativity and Innovation through
                            the Demographic Bonus in the Era of Society 5.0
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com/elccounud"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-dark-spruce-900 border border-frosted-mint-500/20 text-frosted-mint-400 hover:bg-frosted-mint-500 hover:text-dark-spruce-950 transition-all text-sm font-bold"
                            >
                                <Instagram size={16} />
                                @elccounud
                            </a>
                        </div>
                    </div>

                    {/* 2. Menu Navigation (2 Columns) */}
                    <div className="lg:col-span-2">
                        <h4 className="text-ivory-mist-100 font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            Menu
                        </h4>
                        <ul className="space-y-3">
                            {sitemap.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-muted-olive-300 hover:text-frosted-mint-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ChevronRight className="w-3 h-3 text-frosted-mint-500/50 group-hover:text-frosted-mint-400 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Google Maps Location (6 Columns - Wide) */}
                    <div className="lg:col-span-6">
                        <h4 className="text-ivory-mist-100 font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            HME Location
                        </h4>

                        <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-frosted-mint-500/20 shadow-lg group">
                            {/* Overlay Title */}
                            <div className="absolute top-0 left-0 bg-dark-spruce-950/90 backdrop-blur-sm px-4 py-2 rounded-br-2xl border-b border-r border-frosted-mint-500/20 z-10 flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-frosted-mint-500" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-frosted-mint-50">
                                        Prodi Teknik Elektro UNUD
                                    </span>
                                    <span className="text-[10px] text-muted-olive-400">
                                        Jl. Raya Kampus Unud, Jimbaran
                                    </span>
                                </div>
                            </div>

                            {/* Google Maps Iframe (Updated Address) */}
                            <iframe
                                src="https://maps.google.com/maps?q=Program+Studi+Teknik+Elektro+Fakultas+Teknik+Universitas+Udayana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                            ></iframe>
                        </div>
                        <p className="mt-3 text-xs text-muted-olive-400 font-mono text-right">
                            COORDINATES: 8.796° S, 115.176° E
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-frosted-mint-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-olive-500 text-xs text-center md:text-left">
                        © 2026 ELCCO HME Unud. All rights reserved.{" "}
                        <br className="md:hidden" />
                        Developed by ELCCO 2026 Comittee.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 px-4 py-2 bg-dark-spruce-900 border border-frosted-mint-500/10 rounded-full hover:border-frosted-mint-500/30 transition-all"
                    >
                        <span className="text-[10px] font-bold text-frosted-mint-500/70 group-hover:text-frosted-mint-400">
                            SYSTEM REBOOT (TOP)
                        </span>
                        <div className="w-6 h-6 rounded-full bg-frosted-mint-500/10 flex items-center justify-center group-hover:bg-frosted-mint-500 group-hover:text-dark-spruce-950 transition-colors">
                            <ArrowUp className="w-3 h-3" />
                        </div>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-frosted-mint-500/5 to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default FooterSection;
