import React from "react";
import { Trophy, Info } from "lucide-react";

export default function LineFollowerStandings() {
    return (
        <div className="w-full flex flex-col gap-8">
            <section className="w-full">
                <div className="flex items-center gap-3 mb-6">
                    <Trophy
                        className="text-frosted-mint-400 shrink-0"
                        size={28}
                    />
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                        Live Standings & Bracket Line Follower
                    </h2>
                </div>

                <div className="w-full h-[75vh] min-h-[600px] bg-white border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col">
                    <div className="w-full p-3 bg-dark-spruce-950/95 text-frosted-mint-400 text-xs sm:text-sm font-bold text-center flex justify-center items-center gap-2 z-10 border-b border-white/10 backdrop-blur-md">
                        <Info size={16} className="animate-pulse shrink-0" />
                        <span>
                            Data di bawah ini di-update secara real-time oleh
                            Panitia ELCCO 2026.
                        </span>
                    </div>

                    <div className="flex-grow w-full relative">
                        <iframe
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRH2wFdEwg485aF8yahIWNV6laxebyV5-qfCeqMlmNxTQbxyRlo91Iqd1Dp4L2mjotUIj_7pZ_uhIQ_/pubhtml?widget=true&amp;headers=false&amp;chrome=false"
                            className="absolute top-0 left-0 w-full h-full"
                            title="Live Standings Line Follower"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}
