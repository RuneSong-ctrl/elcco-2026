import React from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";
import { Medal } from "lucide-react";

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
    const rounds = [
        {
            title: "16 Besar",
            seeds: [
                {
                    id: 1,
                    teams: [
                        { name: "Juara Grup A", score: "2" },
                        { name: "Runner Up B", score: "1" },
                    ],
                },
                {
                    id: 2,
                    teams: [
                        { name: "Juara Grup C", score: "0" },
                        { name: "Runner Up D", score: "2" },
                    ],
                },
                {
                    id: 3,
                    teams: [
                        { name: "Juara Grup E", score: "" },
                        { name: "Runner Up F", score: "" },
                    ],
                },
                {
                    id: 4,
                    teams: [
                        { name: "Juara Grup G", score: "" },
                        { name: "Runner Up H", score: "" },
                    ],
                },
            ],
        },
        {
            title: "8 Besar",
            seeds: [
                {
                    id: 5,
                    teams: [
                        { name: "Juara Grup A", score: "" },
                        { name: "Runner Up D", score: "" },
                    ],
                },
                {
                    id: 6,
                    teams: [
                        { name: "TBD", score: "" },
                        { name: "TBD", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Semi Final",
            seeds: [
                {
                    id: 7,
                    teams: [
                        { name: "TBD", score: "" },
                        { name: "TBD", score: "" },
                    ],
                },
            ],
        },
        {
            title: "Final",
            seeds: [
                {
                    id: 8,
                    teams: [
                        { name: "TBD", score: "" },
                        { name: "TBD", score: "" },
                    ],
                },
            ],
        },
    ];

    return (
        <div className="w-full flex flex-col gap-12">
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <Medal className="text-amber-400" size={28} />
                    <h2 className="text-2xl font-bold text-white">
                        Bagan Turnamen Sumobot
                    </h2>
                </div>
                <div className="overflow-x-auto w-full custom-scrollbar pb-10">
                    <div className="min-w-[800px] flex items-center justify-start pt-4">
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
