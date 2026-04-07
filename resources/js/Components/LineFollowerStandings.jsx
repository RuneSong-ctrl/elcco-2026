import React from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { Trophy, Timer, Medal } from "lucide-react";

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
    const leaderboardData = [
        {
            rank: 1,
            team: "GRED | Hype abizZ",
            school: "Univ. A",
            time: "01:12.45",
        },
        { rank: 2, team: "JASUKE", school: "Univ. B", time: "01:15.20" },
        { rank: 3, team: "UDUN_PLANCK", school: "Univ. C", time: "01:16.88" },
        { rank: 4, team: "CyberTron", school: "Univ. D", time: "01:18.05" },
        { rank: 5, team: "Corvus Own", school: "Univ. E", time: "01:19.30" },
    ];

    const rounds = [
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
            title: "Final",
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
    ];

    return (
        <div className="w-full flex flex-col gap-16">
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Timer className="text-frosted-mint-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Global Leaderboard (Top 16)
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
                                    Instansi
                                </th>
                                <th className="p-4 text-sm font-semibold text-frosted-mint-400 text-right">
                                    Waktu (Best)
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {leaderboardData.map((team, idx) => (
                                <tr
                                    key={idx}
                                    className="hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4 text-center">
                                        <span
                                            className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${idx < 3 ? "bg-amber-500/20 text-amber-400" : "bg-white/5 text-slate-300"}`}
                                        >
                                            {team.rank}
                                        </span>
                                    </td>
                                    <td className="p-4 font-bold text-slate-200">
                                        {team.team}
                                    </td>
                                    <td className="p-4 text-slate-400 text-sm">
                                        {team.school}
                                    </td>
                                    <td className="p-4 text-right font-mono text-frosted-mint-400 font-bold">
                                        {team.time}
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
                            rounds={rounds}
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
