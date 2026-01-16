import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import ElccoLogo from "/public/images/logo.png";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#timeline" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // PERUBAHAN DISINI: pt-6 diubah jadi pt-2 agar lebih naik ke atas
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-2 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                // Layout Navbar
                className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-out border border-frosted-mint-500/20 shadow-[0_0_25px_rgba(81,186,69,0.1)] backdrop-blur-xl ${
                    scrolled
                        ? "w-full max-w-5xl bg-dark-spruce-950/80 rounded-full px-6 py-3" // Saat Scroll (Kapsul Kecil)
                        : "w-full max-w-7xl bg-transparent border-transparent shadow-none px-6 py-4" // Saat di Atas (Transparan Lebar)
                }`}
            >
                {/* 1. Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-frosted-mint-500/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <img
                            src={ElccoLogo}
                            alt="ELCCO Logo"
                            className="relative w-10 h-10 object-contain drop-shadow-md"
                        />
                    </div>
                    <span className="font-extrabold text-xl text-frosted-mint-50 tracking-wider">
                        ELCCO<span className="text-ivory-mist-400">26</span>
                    </span>
                </Link>

                {/* 2. Desktop Menu (Center) */}
                <div className="hidden md:flex items-center gap-1 bg-dark-spruce-900/50 p-1.5 rounded-full border border-frosted-mint-500/10 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-5 py-2 text-sm font-medium text-muted-olive-200 hover:text-white hover:bg-frosted-mint-500/10 rounded-full transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* 3. Action Button (Right) */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#competitions"
                        className="group flex items-center gap-2 px-6 py-2.5 bg-frosted-mint-500 hover:bg-frosted-mint-400 text-dark-spruce-950 font-bold rounded-full transition-all shadow-[0_0_15px_rgba(81,186,69,0.3)] hover:shadow-[0_0_25px_rgba(81,186,69,0.5)] hover:-translate-y-0.5"
                    >
                        <Zap size={18} className="fill-current" />
                        <span>Register Now</span>
                    </a>
                </div>

                {/* 4. Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2.5 bg-dark-spruce-800/50 border border-frosted-mint-500/20 rounded-full text-frosted-mint-400 active:scale-95 transition-all"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* --- MOBILE MENU OVERLAY (Panel Terpisah) --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        // Panel Mobile Menu (Muncul di bawah navbar)
                        className="pointer-events-auto absolute top-20 w-[92%] max-w-sm bg-dark-spruce-900/95 backdrop-blur-2xl border border-frosted-mint-500/20 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:hidden"
                    >
                        {/* Mobile Links */}
                        <div className="p-4 flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl text-frosted-mint-50 hover:bg-frosted-mint-500/10 hover:pl-6 transition-all duration-300 border border-transparent hover:border-frosted-mint-500/10"
                                >
                                    <span className="font-bold">
                                        {link.name}
                                    </span>
                                    <span className="text-frosted-mint-500/50 text-xs font-mono">
                                        0{idx + 1}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Mobile Action Footer */}
                        <div className="p-4 pt-0">
                            <a
                                href="#competitions"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-4 bg-frosted-mint-500 text-dark-spruce-950 font-bold rounded-2xl shadow-lg active:scale-95 transition-transform"
                            >
                                <Zap size={20} className="fill-current" />
                                Register Competition
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
