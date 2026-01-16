import React from "react";
import { Link } from "@inertiajs/react";
import {
    Rocket,
    Instagram,
    Twitter,
    Github,
    Mail,
    ArrowUp,
    ChevronRight,
} from "lucide-react";
import ElccoLogo from "/public/images/logo.png";

const FooterSection = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const quickLinks = [
        { name: "Home Base", href: "/" },
        { name: "Mission Archives", href: "#gallery" },
        { name: "Battlefields", href: "#competitions" },
        { name: "Flight Schedule", href: "#timeline" },
        { name: "Comms Center", href: "#contact" },
    ];

    const supportLinks = [
        { name: "Rulebook 2026", href: "#" },
        { name: "Privacy Protocol", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "FAQ Database", href: "#" },
    ];

    return (
        <footer className="relative w-full bg-dark-spruce-950 pt-20 pb-10 overflow-hidden border-t-2 border-frosted-mint-500/20">
            {/* Background Tech Mesh */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-5 pointer-events-none"></div>

            {/* Glowing Top Line Decoration */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-frosted-mint-500 to-transparent shadow-[0_0_20px_rgba(81,186,69,0.5)]"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                {/* Main Grid Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand Info */}
                    <div className="space-y-6">
                        <Link
                            href="/"
                            className="flex items-center gap-2 group"
                        >
                            <div className="bg-frosted-mint-500/20 p-2 rounded-lg group-hover:bg-frosted-mint-500/40 transition-colors border border-frosted-mint-500/30">
                                <img
                                    src={ElccoLogo}
                                    alt="ELCCO Logo"
                                    className="w-10 h-10 scale-150 object-contain"
                                />
                            </div>
                            <span className="font-extrabold text-2xl text-frosted-mint-50 tracking-wider">
                                ELCCO
                                <span className="text-ivory-mist-400">26</span>
                            </span>
                        </Link>
                        <p className="text-muted-olive-300 text-sm leading-relaxed">
                            Fostering Youth Creativity and Innovation through
                            the Demographic Bonus in the Era of Society 5.0
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Twitter, Github, Mail].map(
                                (Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-dark-spruce-900 border border-frosted-mint-500/20 text-frosted-mint-400 hover:bg-frosted-mint-500 hover:text-dark-spruce-950 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        <Icon className="w-4 h-4" />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-ivory-mist-100 font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-olive-300 hover:text-frosted-mint-400 transition-colors flex items-center gap-2 group text-sm"
                                    >
                                        <ChevronRight className="w-3 h-3 text-frosted-mint-500/50 group-hover:text-frosted-mint-400 group-hover:translate-x-1 transition-transform" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div>
                        <h4 className="text-ivory-mist-100 font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link, idx) => (
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

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-ivory-mist-100 font-bold mb-6 text-lg flex items-center gap-2">
                            <span className="w-1 h-4 bg-frosted-mint-500 rounded-full"></span>
                            Bug Report
                        </h4>
                        <p className="text-muted-olive-300 text-sm mb-4">
                            Hubungi kami jika Anda menemukan bug atau masalah di
                            situs ini
                            <br></br>
                            <a
                                href="#contact"
                                className="text-frosted-mint-400 hover:text-frosted-mint-300 transition-colors"
                            >
                                Whatsapp
                            </a>
                        </p>
                    </div>
                </div>

                {/* Footer Bottom / Copyright */}
                <div className="pt-8 border-t border-frosted-mint-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-muted-olive-400 text-xs text-center md:text-left">
                        © 2026 ELCCO Engineering Force. All systems operational.{" "}
                        <br className="md:hidden" />
                        Built with React & Laravel.
                    </p>

                    <div className="flex items-center gap-6">
                        {/* Scroll to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 px-4 py-2 bg-dark-spruce-900 border border-frosted-mint-500/20 rounded-full hover:border-frosted-mint-500/50 transition-all"
                        >
                            <span className="text-xs font-bold text-frosted-mint-400 group-hover:text-frosted-mint-300">
                                BACK TO TOP
                            </span>
                            <div className="w-6 h-6 rounded-full bg-frosted-mint-500/10 flex items-center justify-center group-hover:bg-frosted-mint-500 group-hover:text-dark-spruce-950 transition-colors">
                                <ArrowUp className="w-3 h-3" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-frosted-mint-500/5 to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default FooterSection;
