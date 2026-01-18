import React from "react";
import { Mail, MapPin, MessageCircle, User, Phone, Users } from "lucide-react";

const competitionCPs = [
    { id: 1, name: "Intan Sintya", role: "LKTI", number: "081339281377" },
    { id: 2, name: "Irfan", role: "LKCT", number: "082146823161" },
    { id: 3, name: "Ega", role: "Infografis", number: "085858925010" },
    { id: 4, name: "Dito", role: "LCC", number: "082281060852" },
    { id: 5, name: "Bram", role: "Essay", number: "081237809269" },
    { id: 6, name: "Ali", role: "Networking", number: "082125593110" },
    { id: 7, name: "Diva", role: "Sumo Bot", number: "087776062214" },
    { id: 8, name: "Deari", role: "Line Follower", number: "085338715789" },
];

const chairman = {
    name: "Deva",
    role: "Ketua Panitia",
    number: "081353514501",
};

const ContactSection = () => {
    // Helper untuk format link WA
    const getWaLink = (number) => {
        const cleanNumber = number.replace(/[^0-9]/g, "");
        if (cleanNumber.startsWith("0")) {
            return `https://wa.me/62${cleanNumber.slice(1)}`;
        }
        return `https://wa.me/${cleanNumber}`;
    };

    return (
        <section
            id="contact"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden border-t border-white/5"
        >
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-frosted-mint-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* --- KIRI: Informasi Umum & Ketua --- */}
                    <div className="w-full lg:w-5/12" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="h-[2px] w-10 bg-frosted-mint-500"></span>
                            <span className="text-frosted-mint-400 font-bold text-sm uppercase tracking-widest">
                                Contact Person
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Hubungi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-white">
                                Panitia ELCCO
                            </span>
                        </h2>

                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Jika Anda memiliki pertanyaan terkait pendaftaran,
                            teknis lomba, atau kerjasama, silakan hubungi
                            narahubung kami.
                        </p>

                        <div className="space-y-8">
                            {/* Card Ketua Panitia */}
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 shadow-xl backdrop-blur-md relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-frosted-mint-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-frosted-mint-500/20"></div>

                                <div className="flex items-start gap-5 relative z-10">
                                    <div className="p-4 rounded-xl bg-frosted-mint-600 text-white shadow-lg shadow-frosted-mint-900/50">
                                        <User size={28} />
                                    </div>
                                    <div className="flex-1 ">
                                        <h4 className="text-white font-bold text-xl mb-1">
                                            {chairman.name}
                                        </h4>
                                        <p className="text-frosted-mint-300 text-sm font-bold uppercase tracking-wide mb-2">
                                            {chairman.role}
                                        </p>
                                        <p className="text-slate-300 font-mono text-sm mb-5 border-b border-white/10 pb-4 inline-block pr-8">
                                            {chairman.number}
                                        </p>

                                        <div>
                                            <a
                                                href={getWaLink(
                                                    chairman.number,
                                                )}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-dark-spruce-950 hover:bg-frosted-mint-400 rounded-full font-bold text-sm transition-all shadow-md"
                                            >
                                                <MessageCircle size={18} />
                                                Chat WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Info Sekretariat */}
                            <div className="pt-6 border-t border-white/10">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                        <MapPin className="w-6 h-6 text-slate-400" />
                                    </div>
                                    <div>
                                        <h5 className="text-white font-bold text-base mb-1">
                                            Teknik Elektro Universitas Udayana
                                        </h5>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Prodi Teknik Elektro, Fakultas
                                            Teknik Universitas Udayana,
                                            Jimbaran, Bali.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- KANAN: Grid Narahubung Lomba --- */}
                    <div className="w-full lg:w-7/12" data-aos="fade-left">
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3">
                                <div className="p-2 bg-white/10 rounded-lg">
                                    <Users className="w-5 h-5 text-frosted-mint-400" />
                                </div>
                                Narahubung Cabang Lomba
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {competitionCPs.map((cp, index) => (
                                <div
                                    key={cp.id}
                                    className="group flex flex-col p-5 rounded-xl bg-dark-spruce-900 border border-white/5 hover:border-frosted-mint-500/30 hover:bg-dark-spruce-800/80 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-frosted-mint-500/10 text-frosted-mint-400 border border-frosted-mint-500/20 uppercase tracking-wider mb-2">
                                                {cp.role}
                                            </span>
                                            <h4 className="text-white font-bold text-lg group-hover:text-frosted-mint-200 transition-colors">
                                                {cp.name}
                                            </h4>
                                        </div>
                                        <a
                                            href={getWaLink(cp.number)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2.5 rounded-lg bg-white/5 text-slate-300 hover:bg-frosted-mint-600 hover:text-white transition-all shadow-sm"
                                            title="Chat WhatsApp"
                                        >
                                            <MessageCircle size={20} />
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                                        <Phone
                                            size={14}
                                            className="text-slate-500"
                                        />
                                        <span className="text-slate-300 font-mono text-sm tracking-wide">
                                            {cp.number}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Note Operasional */}
                        <div className="mt-8 text-center bg-white/5 p-4 rounded-xl border border-white/5">
                            <p className="text-slate-400 text-xs italic">
                                *Harap menghubungi narahubung pada jam
                                operasional (09.00 - 21.00 WITA) untuk respon
                                yang lebih cepat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
