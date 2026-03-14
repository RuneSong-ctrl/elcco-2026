import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ElccoLogoText from "/public/images/logo-logo.png";
import Elsmart from "/public/images/elsmart.png";
import LCC from "/public/images/LCC.png";

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
        <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center px-4 pt-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={`pointer-events-auto relative flex items-center justify-between transition-all duration-500 ease-out border border-white/5 backdrop-blur-xl ${
                    scrolled
                        ? "w-full max-w-5xl bg-dark-spruce-950/80 rounded-full px-6 py-3 shadow-lg shadow-black/20"
                        : "w-full max-w-5xl bg-transparent border-transparent px-6 py-4 rounded-full"
                }`}
            >
                <Link href="/" className="flex items-center gap-3 group">
                    <img
                        src={ElccoLogoText}
                        alt="ELCCO 2026 Logo"
                        className="h-8 md:h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(81,186,69,0.3)] transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                <div className="hidden md:flex items-center gap-1 bg-dark-spruce-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
                    {navLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="px-5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/elsmart/login"
                        className="group flex items-center justify-center px-6 py-2 bg-[#005f32] border-2 border-white rounded-full transition-all duration-300 shadow-[0_4px_15px_rgba(34,197,94,0.3)] hover:shadow-[0_6px_25px_rgba(34,197,94,0.5)] hover:-translate-y-0.5"
                    >
                        <img
                            src={LCC}
                            alt="LCC"
                            className="h-6 lg:h-7 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                        <h1 className="text-white font-bold text-lg ml-2 shadow-black/20">
                            LCC
                        </h1>
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2.5 bg-dark-spruce-800/60 border border-white/10 rounded-full text-white active:scale-95 transition-all hover:bg-dark-spruce-700/60"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="pointer-events-auto absolute top-24 w-[92%] max-w-sm bg-dark-spruce-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:hidden"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between p-4 rounded-2xl text-slate-200 hover:text-white hover:bg-white/5 hover:pl-6 transition-all duration-300 border border-transparent hover:border-white/5"
                                >
                                    <span className="font-bold">
                                        {link.name}
                                    </span>
                                    <span className="text-white/20 text-xs font-mono">
                                        0{idx + 1}
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="p-4 pt-0">
                            <Link
                                href="/elsmart/login"
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center justify-center w-full py-3.5 bg-[#005f32] border-2 border-white rounded-2xl shadow-[0_4px_20px_rgba(34,197,94,0.3)] active:scale-95 transition-all"
                            >
                                <img
                                    src={LCC}
                                    alt="LCC"
                                    className="h-8 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
