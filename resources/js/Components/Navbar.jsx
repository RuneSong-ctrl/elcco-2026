import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Competitions", href: "#competitions" },
    { name: "Timeline", href: "#timeline" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                layout
                initial={{ y: -100, opacity: 0 }}
                animate={{
                    y: 0,
                    opacity: 1,
                    width: isOpen
                        ? "90%"
                        : scrolled
                        ? "fit-content"
                        : "fit-content",
                    borderRadius: "9999px",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`
          relative flex items-center bg-dark-spruce-950/70 backdrop-blur-xl border border-frosted-mint-500/20 shadow-[0_0_20px_rgba(81,186,69,0.15)]
          ${isOpen ? "flex-col p-6 rounded-[2rem]" : "px-6 py-3 rounded-full"}
        `}
            >
                {/* Header Section (Logo + Toggle) */}
                <div
                    className={`flex items-center justify-between w-full ${
                        isOpen ? "mb-6" : "gap-8"
                    }`}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-frosted-mint-500/20 p-1.5 rounded-full group-hover:bg-frosted-mint-500/40 transition-colors">
                            <Rocket className="w-5 h-5 text-frosted-mint-400" />
                        </div>
                        <span className="font-bold text-lg text-frosted-mint-50 tracking-wider">
                            ELCCO<span className="text-ivory-mist-400">26</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    {!isOpen && (
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-1.5 text-sm font-medium text-muted-olive-200 hover:text-frosted-mint-300 transition-colors rounded-full hover:bg-frosted-mint-500/10"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    )}

                    {/* Action Button (Desktop) */}
                    {!isOpen && (
                        <div className="hidden md:block">
                            <Link
                                href="/login"
                                className="px-5 py-2 text-sm font-bold bg-frosted-mint-600 text-white rounded-full hover:bg-frosted-mint-500 shadow-lg shadow-frosted-mint-900/50 transition-all"
                            >
                                Login
                            </Link>
                        </div>
                    )}

                    {/* Mobile Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 bg-frosted-mint-500/10 rounded-full text-frosted-mint-400 hover:bg-frosted-mint-500/20 transition-colors"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Content (Animate Presence) */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="w-full flex flex-col gap-2 md:hidden overflow-hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center py-3 text-muted-olive-100 font-medium hover:bg-frosted-mint-500/10 rounded-xl transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-frosted-mint-500/20 my-2" />
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="w-full py-3 bg-frosted-mint-600 text-center font-bold text-white rounded-xl shadow-lg hover:bg-frosted-mint-500"
                            >
                                Login / Register
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
}
