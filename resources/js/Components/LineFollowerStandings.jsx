import React from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { Trophy, Timer, Medal, Users } from "lucide-react";

const CustomSeed = ({ seed, breakpoint }) => {
    return (
        <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 13 }}>
            <SeedItem>
                <div className="bg-dark-spruce-900/80 border border-white/10 rounded-lg overflow-hidden shadow-lg w-48 sm:w-56">
                    <SeedTeam className="p-3 border-b border-white/10 flex justify-between items-center text-slate-200">
                        <span className="font-semibold truncate pr-2">
                            {seed.teams[0]?.name || "TBD"}
                        </span>
                        <span className="text-frosted-mint-400 font-bold text-xs">
                            {seed.teams[0]?.score}
                        </span>
                    </SeedTeam>
                    <SeedTeam className="p-3 flex justify-between items-center text-slate-200">
                        <span className="font-semibold truncate pr-2">
                            {seed.teams[1]?.name || "TBD"}
                        </span>
                        <span className="text-frosted-mint-400 font-bold text-xs">
                            {seed.teams[1]?.score}
                        </span>
                    </SeedTeam>
                </div>
            </SeedItem>
        </Seed>
    );
};

export default function LineFollowerStandings() {
    const groupData = [
        {
            id: "A",
            name: "Grup A",
            teams: [
                "GRED | Hype abizZ",
                "GRED | Nyemek Bangladesh",
                "GRED | Karie Ayam",
                "CyberTron",
            ],
        },
        {
            id: "B",
            name: "Grup B",
            teams: [
                "JASUKE",
                "Panom LineHunters",
                "UDUN_LAGRANGIAN",
                "Corvus Own",
            ],
        },
        {
            id: "C",
            name: "Grup C",
            teams: [
                "GRED | Baso Granat",
                "UDUN_LORENTZ",
                "GRED | iga penyett",
                "UDUN_BOYLE",
            ],
        },
        {
            id: "D",
            name: "Grup D",
            teams: [
                "UDUN_PLANCK",
                "UDUN_MAXWELL",
                "MONELT Arbian Daptar MAN",
                "MONELT KANARAZU KATSU",
            ],
        },
        {
            id: "E",
            name: "Grup E",
            teams: [
                "GRED | Jeletot",
                "Corvus RJ Parley",
                "ThecnoTracker",
                "GRED | Gacoan lvlmax",
            ],
        },
        {
            id: "F",
            name: "Grup F",
            teams: [
                "Tom&Jerry",
                "TETAP DI JALUR",
                "Bravos",
                "ARITMA TRON SYSTEM",
            ],
        },
        { id: "G", name: "Grup G", teams: ["MONELT Harra Hetta"] },
    ];

    const mainBracket = [
        {
            title: "16 Besar",
            seeds: [
                {
                    id: 1,
                    teams: [
                        { name: "Peringkat 1", score: "" },
                        { name: "Peringkat 16", score: "" },
                    ],
                },
                {
                    id: 2,
                    teams: [
                        { name: "Peringkat 8", score: "" },
                        { name: "Peringkat 9", score: "" },
                    ],
                },
                {
                    id: 3,
                    teams: [
                        { name: "Peringkat 4", score: "" },
                        { name: "Peringkat 13", score: "" },
                    ],
                },
                {
                    id: 4,
                    teams: [
                        { name: "Peringkat 5", score: "" },
                        { name: "Peringkat 12", score: "" },
                    ],
                },
                {
                    id: 5,
                    teams: [
                        { name: "Peringkat 2", score: "" },
                        { name: "Peringkat 15", score: "" },
                    ],
                },
                {
                    id: 6,
                    teams: [
                        { name: "Peringkat 7", score: "" },
                        { name: "Peringkat 10", score: "" },
                    ],
                },
                {
                    id: 7,
                    teams: [
                        { name: "Peringkat 3", score: "" },
                        { name: "Peringkat 14", score: "" },
                    ],
                },
                {
                    id: 8,
                    teams: [
                        { name: "Peringkat 6", score: "" },
                        { name: "Peringkat 11", score: "" },
                    ],
                },
            ],
        },
        {
            title: "8 Besar",
            seeds: [
                {
                    id: 9,
                    teams: [
                        { name: "Pemenang M1", score: "" },
                        { name: "Pemenang M2", score: "" },
                    ],
                },
                {
                    id: 10,
                    teams: [
                        { name: "Pemenang M3", score: "" },
                        { name: "Pemenang M4", score: "" },
                    ],
                },
                {
                    id: 11,
                    teams: [
                        { name: "Pemenang M5", score: "" },
                        { name: "Pemenang M6", score: "" },
                    ],
                },
                {
                    id: 12,
                    teams: [
                        { name: "Pemenang M7", score: "" },
                        { name: "Pemenang M8", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Top 4 (Race 1 & 2)",
            seeds: [
                {
                    id: 13,
                    teams: [
                        { name: "Pemenang M9", score: "" },
                        { name: "Pemenang M10", score: "" },
                    ],
                },
                {
                    id: 14,
                    teams: [
                        { name: "Pemenang M11", score: "" },
                        { name: "Pemenang M12", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Final (Juara 1 & 2)",
            seeds: [
                {
                    id: 15,
                    teams: [
                        { name: "Menang Race 1", score: "" },
                        { name: "Menang Race 2", score: "" },
                    ],
                },
            ],
        },
    ];

    const thirdPlaceBracket = [
        {
            title: "Perebutan Juara 3",
            seeds: [
                {
                    id: 16,
                    teams: [
                        { name: "Kalah Race 1", score: "" },
                        { name: "Kalah Race 2", score: "" },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="w-full flex flex-col gap-16">
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Users className="text-frosted-mint-400" size={28} />
                    <div>
                        <h2 className="text-2xl font-bold text-white">
                            Daftar Tim & Grup
                        </h2>
                        <p className="text-sm text-slate-400 mt-1">
                            Sistem Kualifikasi Global: Diambil 16 tim tercepat
                            dan terjauh.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {groupData.map((group) => (
                        <div
                            key={group.id}
                            className="bg-dark-spruce-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col"
                        >
                            <div className="bg-dark-spruce-950/80 px-4 py-3 border-b border-white/10">
                                <h3 className="font-bold text-frosted-mint-400 uppercase tracking-widest text-sm text-center">
                                    {group.name}
                                </h3>
                            </div>
                            <div className="p-4">
                                <ul className="space-y-3">
                                    {group.teams.map((team, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center gap-3 text-sm font-medium text-slate-200"
                                        >
                                            <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-slate-400 shrink-0">
                                                {idx + 1}
                                            </span>
                                            {team}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Timer className="text-frosted-mint-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Leaderboard Kualifikasi (Top 16 Lolos)
                    </h2>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl bg-dark-spruce-900/40">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead className="bg-dark-spruce-950/80 border-b border-white/10">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-slate-400 text-center w-16">
                                    Rank
                                </th>
                                <th className="p-4 text-sm font-semibold text-slate-400">
                                    Nama Tim
                                </th>
                                <th className="p-4 text-sm font-semibold text-slate-400">
                                    Jarak
                                </th>
                                <th className="p-4 text-sm font-semibold text-frosted-mint-400 text-right">
                                    Waktu Tercepat
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[...Array(16)].map((_, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4 text-center">
                                        <span
                                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${idx < 3 ? "bg-amber-500/20 text-amber-400" : "bg-frosted-mint-500/20 text-frosted-mint-400"}`}
                                        >
                                            {idx + 1}
                                        </span>
                                    </td>
                                    <td className="p-4 font-medium text-slate-400 italic">
                                        Menunggu Hasil...
                                    </td>
                                    <td className="p-4 text-slate-500 text-sm">
                                        -
                                    </td>
                                    <td className="p-4 text-right font-mono text-slate-500">
                                        -
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Trophy className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Bagan Turnamen 16 Besar
                    </h2>
                </div>
                <div className="overflow-x-auto w-full custom-scrollbar pb-10">
                    <div className="min-w-[1000px] flex items-center justify-start pt-4">
                        <Bracket
                            rounds={mainBracket}
                            renderSeedComponent={CustomSeed}
                            lineColor="rgba(255, 255, 255, 0.2)"
                            lineWidth={2}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Medal className="text-slate-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Perebutan Juara 3
                    </h2>
                </div>
                <div className="overflow-x-auto w-full custom-scrollbar pb-10">
                    <div className="min-w-[300px] flex items-center justify-start pt-4">
                        <Bracket
                            rounds={thirdPlaceBracket}
                            renderSeedComponent={CustomSeed}
                            lineColor="rgba(255, 255, 255, 0.2)"
                            lineWidth={2}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
