import React from "react";
import { Link } from "@inertiajs/react";
import { ArrowRight, Code, Cpu, PenTool, Sword } from "lucide-react";

// Data Dummy Kompetisi
const competitions = [
    {
        id: 1,
        title: "Gundam UI/UX Design",
        slug: "gundam-ui-ux",
        category: "Design",
        price: "IDR 150.000",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        desc: "ancang antarmuka kokpit mecha masa depan. Fokus pada efisiensi pilot dan estetika futuristik.",
        icon: <PenTool className="w-5 h-5" />,
    },
    {
        id: 2,
        title: "Mecha Assembly (IoT)",
        slug: "mecha-assembly",
        category: "Robotics",
        price: "IDR 200.000",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        desc: "Rakit dan program lengan robotik cerdas menggunakan Arduino/Raspberry Pi untuk misi penyelamatan.",
        icon: <Cpu className="w-5 h-5" />,
    },
    {
        id: 3,
        title: "Cyber Defense CTF",
        slug: "cyber-defense",
        category: "Cyber Security",
        price: "IDR 100.000",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        desc: "Lindungi sistem pertahanan satelit dari serangan hacker musuh dalam kompetisi Capture The Flag.",
        icon: <Code className="w-5 h-5" />,
    },
    {
        id: 4,
        title: "Battle Royal Coding",
        slug: "battle-royal-coding",
        category: "Competitive Programming",
        price: "IDR 120.000",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        desc: "Selesaikan algoritma navigasi luar angkasa tercepat sebelum oksigen habis. Speed is key.",
        icon: <Sword className="w-5 h-5" />,
    },
];

const CompetitionsSection = () => {
    return (
        <section
            id="competitions"
            className="relative w-full py-24 bg-dark-spruce-950 overflow-hidden"
        >
            {/* Background Tech Lines Decoration */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-20 left-0 w-full h-px bg-frosted-mint-500"></div>
                <div className="absolute bottom-20 left-0 w-full h-px bg-frosted-mint-500"></div>
                <div className="absolute top-0 left-1/4 w-px h-full bg-frosted-mint-500"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-frosted-mint-500"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
                {/* Section Header */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <span className="text-frosted-mint-500 font-mono tracking-[0.2em] text-sm uppercase bg-frosted-mint-900/20 px-4 py-1 rounded-full border border-frosted-mint-500/30">
                        Available Missions
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-frosted-mint-50">
                        Choose Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-400 to-ivory-mist-300">
                            Battlefield
                        </span>
                    </h2>
                    <p className="mt-4 text-muted-olive-200 max-w-2xl mx-auto">
                        Pilih kategori kompetisi yang sesuai dengan keahlianmu.
                        Buktikan kemampuanmu di kancah galaksi.
                    </p>
                </div>

                {/* Grid Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {competitions.map((item, index) => (
                        <Link
                            key={item.id}
                            href={`/competitions/${item.slug}`} // Link ke halaman detail
                            className="group relative h-full"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {/* Card Container */}
                            <div className="relative h-full flex flex-col overflow-hidden rounded-2xl border border-frosted-mint-500/20 bg-dark-spruce-900/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-frosted-mint-500 hover:shadow-[0_0_30px_rgba(81,186,69,0.2)]">
                                {/* Image Area */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-spruce-950 to-transparent z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-dark-spruce-950/80 backdrop-blur-sm border border-frosted-mint-500/30 px-3 py-1 rounded-full text-xs font-bold text-frosted-mint-300">
                                        {item.icon}
                                        {item.category}
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="flex flex-1 flex-col p-6">
                                    <h3 className="mb-2 text-xl font-bold text-frosted-mint-50 group-hover:text-frosted-mint-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="mb-6 text-sm text-muted-olive-200 line-clamp-3 flex-1">
                                        {item.desc}
                                    </p>

                                    {/* Footer (Price & Action) */}
                                    <div className="flex items-center justify-between border-t border-frosted-mint-500/10 pt-4 mt-auto">
                                        <div>
                                            <p className="text-xs text-muted-olive-400 uppercase tracking-wider">
                                                Registration Fee
                                            </p>
                                            <p className="font-mono font-bold text-ivory-mist-300">
                                                {item.price}
                                            </p>
                                        </div>
                                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-frosted-mint-500/10 text-frosted-mint-400 transition-all group-hover:bg-frosted-mint-500 group-hover:text-dark-spruce-950">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompetitionsSection;
