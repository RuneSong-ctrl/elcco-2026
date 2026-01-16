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
        // Hapus karakter non-digit, pastikan format 62...
        const cleanNumber = number.replace(/[^0-9]/g, "");
        if (cleanNumber.startsWith("0")) {
            return `https://wa.me/62${cleanNumber.slice(1)}`;
        }
        return `https://wa.me/${cleanNumber}`;
    };

    return (
        <section
            id="contact"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden border-t border-frosted-mint-500/10"
        >
            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* --- KIRI: Informasi Umum & Ketua --- */}
                    <div className="w-full lg:w-5/12" data-aos="fade-right">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="h-px w-8 bg-frosted-mint-500"></span>
                            <span className="text-frosted-mint-500 font-bold text-sm uppercase tracking-wider">
                                COntact Person
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-frosted-mint-50 mb-6 leading-tight">
                            Hubungi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                                Panitia ELCCO
                            </span>
                        </h2>

                        <p className="text-muted-olive-200 text-lg mb-10 leading-relaxed">
                            Jika Anda memiliki pertanyaan terkait pendaftaran,
                            teknis lomba, atau kerjasama, silakan hubungi
                            narahubung kami.
                        </p>

                        <div className="space-y-6">
                            {/* Card Ketua Panitia */}
                            <div className="p-6 rounded-2xl bg-dark-spruce-900 border border-frosted-mint-500/20 shadow-lg group hover:border-frosted-mint-500/40 transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full bg-frosted-mint-500/10 text-frosted-mint-400">
                                        <User size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold text-lg mb-1">
                                            {chairman.name}
                                        </h4>
                                        <p className="text-frosted-mint-500 text-sm font-medium mb-1 uppercase tracking-wide">
                                            {chairman.role}
                                        </p>
                                        <p className="text-muted-olive-300 font-mono text-sm mb-4">
                                            {chairman.number}
                                        </p>

                                        <a
                                            href={getWaLink(chairman.number)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white rounded-lg font-bold text-sm transition-all"
                                        >
                                            <MessageCircle size={16} />
                                            Chat WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Info Sekretariat */}
                            <div className="space-y-4 pt-4 border-t border-frosted-mint-500/10">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-muted-olive-400 mt-1" />
                                    <div>
                                        <h5 className="text-frosted-mint-50 font-bold text-sm">
                                            Teknik Elektro Universitas Udayana
                                        </h5>
                                        <p className="text-muted-olive-300 text-sm mt-1">
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
                        <div className="flex items-center justify-between mb-6 border-b border-frosted-mint-500/10 pb-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <Users className="w-5 h-5 text-frosted-mint-500" />
                                Narahubung Cabang Lomba
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {competitionCPs.map((cp, index) => (
                                <div
                                    key={cp.id}
                                    className="group flex flex-col p-5 rounded-xl bg-dark-spruce-900/50 border border-frosted-mint-500/10 hover:border-frosted-mint-500/30 hover:bg-dark-spruce-900 transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 50}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <span className="text-xs font-bold text-frosted-mint-500 uppercase tracking-wider mb-1 block">
                                                {cp.role}
                                            </span>
                                            <h4 className="text-white font-bold text-base">
                                                {cp.name}
                                            </h4>
                                        </div>
                                        <a
                                            href={getWaLink(cp.number)}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 rounded-lg bg-frosted-mint-500/10 text-frosted-mint-400 hover:bg-frosted-mint-500 hover:text-white transition-colors"
                                            title="Chat WhatsApp"
                                        >
                                            <MessageCircle size={20} />
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-2 mt-auto pt-3 border-t border-frosted-mint-500/5">
                                        <Phone
                                            size={14}
                                            className="text-muted-olive-400"
                                        />
                                        <span className="text-muted-olive-200 font-mono text-sm tracking-wide">
                                            {cp.number}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Note Operasional */}
                        <div className="mt-8 text-center">
                            <p className="text-muted-olive-400 text-xs italic">
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
