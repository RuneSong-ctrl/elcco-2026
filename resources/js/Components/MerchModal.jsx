import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X, Shirt, ArrowRight, Star } from "lucide-react";

const MerchModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* 1. Floating Trigger Button (Pojok Kanan Bawah) */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-frosted-mint-500 text-dark-spruce-950 rounded-full font-bold shadow-[0_0_20px_rgba(81,186,69,0.5)] border border-frosted-mint-300 group hover:shadow-[0_0_30px_rgba(81,186,69,0.8)] transition-shadow"
            >
                <div className="relative">
                    <ShoppingBag className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ivory-mist-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ivory-mist-500"></span>
                    </span>
                </div>
                <span className="hidden md:inline">Official Merch</span>
            </motion.button>

            {/* 2. Modal Overlay & Content */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                        {/* Backdrop Blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-dark-spruce-950/80 backdrop-blur-sm"
                        />

                        {/* Modal Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-dark-spruce-900 border border-frosted-mint-500/30 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            {/* Decoration: Top Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-frosted-mint-500 to-transparent"></div>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-20 p-2 text-muted-olive-400 hover:text-frosted-mint-500 hover:bg-frosted-mint-500/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                {/* Image Section (Top on mobile, Left on Desktop) */}
                                <div className="w-full md:w-2/5 h-48 md:h-auto bg-dark-spruce-950 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop"
                                        alt="Merch"
                                        className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-3 left-3 bg-ivory-mist-500 text-dark-spruce-950 text-xs font-bold px-2 py-1 rounded shadow-lg flex items-center gap-1">
                                        <Star size={10} fill="currentColor" />{" "}
                                        LIMITED
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-3/5 p-6 md:p-8">
                                    <div className="flex items-center gap-2 mb-2 text-frosted-mint-500 text-xs font-mono tracking-widest uppercase">
                                        <Shirt size={14} />
                                        <span>Exo-Suit Series</span>
                                    </div>

                                    <h3 className="text-2xl font-extrabold text-white mb-2">
                                        ELCCO{" "}
                                        <span className="text-frosted-mint-400">
                                            Tactical Tee
                                        </span>
                                    </h3>

                                    <p className="text-muted-olive-300 text-sm leading-relaxed mb-6">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>

                                    {/* Price & Sizes */}
                                    <div className="flex justify-between items-end mb-6 border-b border-frosted-mint-500/10 pb-4">
                                        <div>
                                            <p className="text-xs text-muted-olive-400 mb-1">
                                                Price
                                            </p>
                                            <p className="text-xl font-bold text-ivory-mist-300">
                                                IDR 125.000
                                            </p>
                                        </div>
                                        <div className="flex gap-1">
                                            {["S", "M", "L", "XL"].map(
                                                (size) => (
                                                    <span
                                                        key={size}
                                                        className="w-8 h-8 flex items-center justify-center text-xs font-bold rounded bg-dark-spruce-800 border border-frosted-mint-500/20 text-muted-olive-300 hover:border-frosted-mint-500 hover:text-frosted-mint-400 cursor-pointer transition-colors"
                                                    >
                                                        {size}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* Action Button */}
                                    <button className="w-full py-3 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-frosted-mint-500/20 group">
                                        <span>Pre-Order Now</span>
                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition-transform"
                                        />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MerchModal;
