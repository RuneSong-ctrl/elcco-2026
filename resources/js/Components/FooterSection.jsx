import React from "react";
import { Link } from "@inertiajs/react";
import { Instagram, ArrowUp, ChevronRight, MapPin } from "lucide-react";
import Elcco2026 from "/public/images/elcco2026.webp";

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
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

            {/* Glowing Top Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-frosted-mint-500 to-transparent shadow-[0_0_20px_rgba(81,186,69,0.5)]"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
                    {/* 1. Brand Info */}
                    <div className="lg:col-span-4 space-y-6">
                        {/* Logo Replacement: Gambar ELCCO 2026 Utuh */}
                        <Link href="/" className="inline-block">
                            <img
                                src={Elcco2026}
                                alt="ELCCO 2026 Logo"
                                className="w-48 h-auto object-contain drop-shadow-md"
                            />
                        </Link>

                        <p className="text-white text-sm leading-relaxed">
                            Fostering Youth Creativity and Innovation through
                            the Demographic Bonus in the Era of Society 5.0
                        </p>

                        {/* Social Media Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://instagram.com/elccounud"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-frosted-mint-600 hover:border-frosted-mint-500 transition-all text-sm font-bold shadow-lg group"
                            >
                                <Instagram size={18} />
                                @elccounud
                            </a>
                            <a
                                href="https://tiktok.com/@elccounud"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-frosted-mint-600 hover:border-frosted-mint-500 transition-all text-sm font-bold shadow-lg group"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-music"
                                >
                                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                                </svg>
                                @elccounud
                            </a>
                        </div>
                    </div>

                    {/* 2. Menu Navigation */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            Menu
                        </h4>
                        <ul className="space-y-3">
                            {sitemap.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-white hover:text-frosted-mint-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ChevronRight className="w-3 h-3 text-white group-hover:text-frosted-mint-500 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Google Maps Location */}
                    <div className="lg:col-span-6">
                        <h4 className="text-white font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            HME Location
                        </h4>

                        <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-frosted-mint-500/20 shadow-lg group">
                            <div className="absolute top-4 left-4 bg-dark-spruce-950/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 z-10 flex items-center gap-3">
                                <div className="p-1.5 bg-frosted-mint-500/20 rounded-lg text-frosted-mint-400">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-white">
                                        Prodi Teknik Elektro UNUD
                                    </span>
                                    <span className="text-[10px] text-white">
                                        Jl. Raya Kampus Unud, Jimbaran
                                    </span>
                                </div>
                            </div>

                            <iframe
                                src="https://maps.google.com/maps?q=Program+Studi+Teknik+Elektro+Fakultas+Teknik+Universitas+Udayana&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                            ></iframe>
                        </div>
                        <p className="mt-3 text-xs text-white font-mono text-right">
                            COORDINATES: 8.796° S, 115.176° E
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white text-xs text-center md:text-left">
                        © 2026 ELCCO HME Unud. All rights reserved.{" "}
                        <br className="hidden md:block" />
                        Developed by ELCCO 2026 Comittee.
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
                    >
                        <span className="text-[10px] font-bold text-white group-hover:text-frosted-mint-300 tracking-widest">
                            BACK TO TOP
                        </span>
                        <div className="w-6 h-6 rounded-full bg-frosted-mint-500 flex items-center justify-center text-dark-spruce-950 group-hover:-translate-y-1 transition-transform">
                            <ArrowUp className="w-3 h-3" />
                        </div>
                    </button>
                </div>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-frosted-mint-500/5 to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default FooterSection;
