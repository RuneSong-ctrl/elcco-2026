import React from "react";
import {
    Mail,
    MapPin,
    MessageCircle,
    Instagram,
    Globe,
    Phone,
} from "lucide-react";

const contactPersons = [
    {
        id: 1,
        name: "Officer Sarah",
        role: "Competition Division",
        number: "+62 812-3456-7890",
        status: "online",
    },
    {
        id: 2,
        name: "Officer Alex",
        role: "Sponsorship & Media",
        number: "+62 821-9876-5432",
        status: "busy",
    },
    {
        id: 3,
        name: "Officer Rian",
        role: "General Inquiry",
        number: "+62 851-5555-6666",
        status: "online",
    },
];

const ContactSection = () => {
    return (
        <section
            id="contact"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden border-t border-frosted-mint-500/10"
        >
            {/* Background Map Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5 pointer-events-none mask-gradient-left"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Side: General Info */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-frosted-mint-500 rounded-full animate-ping"></div>
                            Secure Channel
                        </span>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-frosted-mint-50 mb-6">
                            ELCCO 2026 Contact <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                Persons
                            </span>
                        </h2>

                        <p className="text-muted-olive-200 text-lg mb-10 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam.
                        </p>

                        <div className="space-y-6">
                            {/* Address Box */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-frosted-mint-900/10 border border-frosted-mint-500/20">
                                <div className="p-3 bg-dark-spruce-900 rounded-lg text-frosted-mint-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-frosted-mint-100 font-bold mb-1">
                                        Base Coordinates
                                    </h4>
                                    <p className="text-muted-olive-300 text-sm">
                                        Faculty of Engineering, Udayana
                                        University
                                        <br />
                                        Jimbaran Hill, Bali - Earth
                                    </p>
                                </div>
                            </div>

                            {/* Email Box */}
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-frosted-mint-900/10 border border-frosted-mint-500/20">
                                <div className="p-3 bg-dark-spruce-900 rounded-lg text-frosted-mint-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-frosted-mint-100 font-bold mb-1">
                                        Electronic Mail
                                    </h4>
                                    <p className="text-muted-olive-300 text-sm">
                                        official@elcco2026.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-10 flex gap-4">
                            {[Instagram, Globe, MessageCircle].map(
                                (Icon, idx) => (
                                    <a
                                        key={idx}
                                        href="#"
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-spruce-900 border border-frosted-mint-500/30 text-frosted-mint-400 hover:bg-frosted-mint-500 hover:text-dark-spruce-950 transition-all hover:scale-110"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Right Side: CP Cards (Operator Style) */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-4">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-ivory-mist-100">
                                Active Operators
                            </h3>
                            <div className="flex gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                <span className="text-xs font-mono text-muted-olive-400">
                                    SYSTEM ONLINE
                                </span>
                            </div>
                        </div>

                        {contactPersons.map((cp, index) => (
                            <div
                                key={cp.id}
                                className="group relative flex items-center justify-between p-4 md:p-6 rounded-2xl bg-dark-spruce-900/40 border border-frosted-mint-500/10 hover:border-frosted-mint-500/50 hover:bg-dark-spruce-900/80 backdrop-blur-md transition-all duration-300 hover:translate-x-2"
                                data-aos="fade-left"
                                data-aos-delay={index * 100}
                            >
                                {/* Left: Avatar & Info */}
                                <div className="flex items-center gap-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-frosted-mint-500 to-dark-spruce-800 flex items-center justify-center text-dark-spruce-950 font-bold text-lg">
                                            {cp.name.charAt(8)}
                                        </div>
                                        {/* Status Dot */}
                                        <div
                                            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-dark-spruce-900 ${
                                                cp.status === "online"
                                                    ? "bg-green-500"
                                                    : "bg-yellow-500"
                                            }`}
                                        ></div>
                                    </div>
                                    <div>
                                        <h4 className="text-frosted-mint-50 font-bold text-lg group-hover:text-frosted-mint-300 transition-colors">
                                            {cp.name}
                                        </h4>
                                        <p className="text-muted-olive-400 text-sm font-mono flex items-center gap-1">
                                            <span className="hidden md:inline text-frosted-mint-500/50">
                                                ///
                                            </span>
                                            {cp.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Action Button */}
                                <a
                                    href={`https://wa.me/${cp.number.replace(
                                        /[^0-9]/g,
                                        ""
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-frosted-mint-500/10 text-frosted-mint-400 border border-frosted-mint-500/20 group-hover:bg-frosted-mint-500 group-hover:text-dark-spruce-950 transition-all font-bold text-sm"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span className="hidden md:block">
                                        Chat
                                    </span>
                                </a>
                            </div>
                        ))}

                        {/* Decoration Box */}
                        <div className="mt-4 p-4 rounded-xl bg-ivory-mist-500/5 border border-ivory-mist-500/10 text-center">
                            <p className="text-ivory-mist-200 text-sm font-mono">
                                <span className="text-ivory-mist-500 font-bold">
                                    WARNING:
                                </span>{" "}
                                Please contact during operational hours (0900 -
                                1700 GMT+8)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
