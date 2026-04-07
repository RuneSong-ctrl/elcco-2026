import React from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { Trophy, Medal, Users, ListOrdered } from "lucide-react";

const CustomSeed = ({ seed, breakpoint }) => {
    return (
        <Seed mobileBreakpoint={breakpoint} style={{ fontSize: 13 }}>
            <SeedItem>
                <div className="bg-dark-spruce-900/80 border border-white/10 rounded-lg overflow-hidden shadow-lg w-48 sm:w-56">
                    <SeedTeam className="p-3 border-b border-white/10 flex justify-between items-center text-slate-200">
                        <span className="font-semibold truncate pr-2">
                            {seed.teams[0]?.name || "TBD"}
                        </span>
                        <span className="text-amber-400 font-bold text-xs">
                            {seed.teams[0]?.score}
                        </span>
                    </SeedTeam>
                    <SeedTeam className="p-3 flex justify-between items-center text-slate-200">
                        <span className="font-semibold truncate pr-2">
                            {seed.teams[1]?.name || "TBD"}
                        </span>
                        <span className="text-amber-400 font-bold text-xs">
                            {seed.teams[1]?.score}
                        </span>
                    </SeedTeam>
                </div>
            </SeedItem>
        </Seed>
    );
};

export default function SumobotStandings() {
    const groupData = [
        "Grup A",
        "Grup B",
        "Grup C",
        "Grup D",
        "Grup E",
        "Grup F",
        "Grup G",
        "Grup H",
        "Grup I",
        "Grup J",
        "Grup K",
        "Grup L",
    ];

    const upperRounds = [
        {
            title: "16 Besar",
            seeds: [
                {
                    id: 1,
                    teams: [
                        { name: "Tim 1", score: "" },
                        { name: "Tim 2", score: "" },
                    ],
                },
                {
                    id: 2,
                    teams: [
                        { name: "Tim 3", score: "" },
                        { name: "Tim 4", score: "" },
                    ],
                },
                {
                    id: 3,
                    teams: [
                        { name: "Tim 5", score: "" },
                        { name: "Tim 6", score: "" },
                    ],
                },
                {
                    id: 4,
                    teams: [
                        { name: "Tim 7", score: "" },
                        { name: "Tim 8", score: "" },
                    ],
                },
                {
                    id: 5,
                    teams: [
                        { name: "Tim 9", score: "" },
                        { name: "Tim 10", score: "" },
                    ],
                },
                {
                    id: 6,
                    teams: [
                        { name: "Tim 11", score: "" },
                        { name: "Tim 12", score: "" },
                    ],
                },
                {
                    id: 7,
                    teams: [
                        { name: "Tim 13", score: "" },
                        { name: "Tim 14", score: "" },
                    ],
                },
                {
                    id: 8,
                    teams: [
                        { name: "Tim 15", score: "" },
                        { name: "Tim 16", score: "" },
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
            title: "Semi Final",
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
            title: "Upper Final",
            seeds: [
                {
                    id: 15,
                    teams: [
                        { name: "Pemenang M13", score: "" },
                        { name: "Pemenang M14", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Grand Final",
            seeds: [
                {
                    id: 16,
                    teams: [
                        { name: "Pemenang Upper", score: "" },
                        { name: "Pemenang Lower", score: "" },
                    ],
                },
            ],
        },
    ];

    const lowerRounds = [
        {
            title: "Lower R1",
            seeds: [
                {
                    id: 17,
                    teams: [
                        { name: "Kalah M1", score: "" },
                        { name: "Kalah M2", score: "" },
                    ],
                },
                {
                    id: 18,
                    teams: [
                        { name: "Kalah M3", score: "" },
                        { name: "Kalah M4", score: "" },
                    ],
                },
                {
                    id: 19,
                    teams: [
                        { name: "Kalah M5", score: "" },
                        { name: "Kalah M6", score: "" },
                    ],
                },
                {
                    id: 20,
                    teams: [
                        { name: "Kalah M7", score: "" },
                        { name: "Kalah M8", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Lower R2",
            seeds: [
                {
                    id: 21,
                    teams: [
                        { name: "Pemenang M17", score: "" },
                        { name: "Kalah M9", score: "" },
                    ],
                },
                {
                    id: 22,
                    teams: [
                        { name: "Pemenang M18", score: "" },
                        { name: "Kalah M10", score: "" },
                    ],
                },
                {
                    id: 23,
                    teams: [
                        { name: "Pemenang M19", score: "" },
                        { name: "Kalah M11", score: "" },
                    ],
                },
                {
                    id: 24,
                    teams: [
                        { name: "Pemenang M20", score: "" },
                        { name: "Kalah M12", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Lower R3",
            seeds: [
                {
                    id: 25,
                    teams: [
                        { name: "Pemenang M21", score: "" },
                        { name: "Pemenang M22", score: "" },
                    ],
                },
                {
                    id: 26,
                    teams: [
                        { name: "Pemenang M23", score: "" },
                        { name: "Pemenang M24", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Lower R4",
            seeds: [
                {
                    id: 27,
                    teams: [
                        { name: "Pemenang M25", score: "" },
                        { name: "Kalah M13", score: "" },
                    ],
                },
                {
                    id: 28,
                    teams: [
                        { name: "Pemenang M26", score: "" },
                        { name: "Kalah M14", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Lower Semi Final",
            seeds: [
                {
                    id: 29,
                    teams: [
                        { name: "Pemenang M27", score: "" },
                        { name: "Pemenang M28", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Lower Final",
            seeds: [
                {
                    id: 30,
                    teams: [
                        { name: "Pemenang M29", score: "" },
                        { name: "Kalah M15", score: "" },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="w-full flex flex-col gap-16">
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Users className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Fase Grup (Round Robin)
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {groupData.map((group, idx) => (
                        <div
                            key={idx}
                            className="bg-dark-spruce-900/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col"
                        >
                            <div className="bg-dark-spruce-950/80 px-4 py-3 border-b border-white/10">
                                <h3 className="font-bold text-amber-400 uppercase tracking-widest text-sm text-center">
                                    {group}
                                </h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse whitespace-nowrap text-xs sm:text-sm">
                                    <thead className="bg-white/5 border-b border-white/5">
                                        <tr>
                                            <th className="p-3 font-semibold text-slate-400">
                                                Tim 1
                                            </th>
                                            <th className="p-3 font-semibold text-slate-500 text-center">
                                                VS
                                            </th>
                                            <th className="p-3 font-semibold text-slate-400">
                                                Tim 2
                                            </th>
                                            <th className="p-3 font-semibold text-amber-400 text-center">
                                                R1
                                            </th>
                                            <th className="p-3 font-semibold text-amber-400 text-center">
                                                R2
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {[1, 2, 3].map((row) => (
                                            <tr
                                                key={row}
                                                className="hover:bg-white/5 transition-colors"
                                            >
                                                <td className="p-3 font-medium text-slate-200">
                                                    Tim A
                                                </td>
                                                <td className="p-3 text-slate-600 text-center text-xs">
                                                    vs
                                                </td>
                                                <td className="p-3 font-medium text-slate-200">
                                                    Tim B
                                                </td>
                                                <td className="p-3 text-center text-amber-400 font-mono">
                                                    -
                                                </td>
                                                <td className="p-3 text-center text-amber-400 font-mono">
                                                    -
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-6">
                    <ListOrdered className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Daftar Tim 32 Besar
                    </h2>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl bg-dark-spruce-900/40">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead className="bg-dark-spruce-950/80 border-b border-white/10">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-slate-400 text-center w-16">
                                    No
                                </th>
                                <th className="p-4 text-sm font-semibold text-slate-400">
                                    Tim yang Lolos
                                </th>
                                <th className="p-4 text-sm font-semibold text-amber-400 text-center w-24">
                                    Poin
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[...Array(32)].map((_, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4 text-center font-bold text-slate-500">
                                        {idx + 1}
                                    </td>
                                    <td className="p-4 font-medium text-slate-300 italic">
                                        Menunggu Hasil...
                                    </td>
                                    <td className="p-4 text-center font-mono text-amber-400">
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
                    <ListOrdered className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Daftar Tim 16 Besar
                    </h2>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-xl bg-dark-spruce-900/40">
                    <table className="w-full text-left border-collapse whitespace-nowrap">
                        <thead className="bg-dark-spruce-950/80 border-b border-white/10">
                            <tr>
                                <th className="p-4 text-sm font-semibold text-slate-400 text-center w-16">
                                    No
                                </th>
                                <th className="p-4 text-sm font-semibold text-slate-400">
                                    Tim yang Lolos
                                </th>
                                <th className="p-4 text-sm font-semibold text-amber-400 text-center w-24">
                                    Poin
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[...Array(16)].map((_, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4 text-center font-bold text-slate-500">
                                        {idx + 1}
                                    </td>
                                    <td className="p-4 font-medium text-slate-300 italic">
                                        Menunggu Hasil...
                                    </td>
                                    <td className="p-4 text-center font-mono text-amber-400">
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
                        Upper Bracket
                    </h2>
                </div>
                <div className="overflow-x-auto w-full custom-scrollbar pb-10">
                    <div className="min-w-[1200px] flex items-center justify-start pt-4">
                        <Bracket
                            rounds={upperRounds}
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
                        Lower Bracket
                    </h2>
                </div>
                <div className="overflow-x-auto w-full custom-scrollbar pb-10">
                    <div className="min-w-[1400px] flex items-center justify-start pt-4">
                        <Bracket
                            rounds={lowerRounds}
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
