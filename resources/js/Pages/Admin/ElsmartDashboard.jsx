import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import axios from "axios";
import {
    LogOut,
    Users,
    Activity,
    ClipboardList,
    Search,
    GraduationCap,
    Download,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

const ElsmartDashboard = ({ admin_name, registeredTeams }) => {
    const { post } = useForm();
    const [searchTerm, setSearchTerm] = useState("");

    const handleLogout = (e) => {
        e.preventDefault();
        post("/admin/logout");
    };

    const filteredTeams = (registeredTeams || []).filter(
        (team) =>
            team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            team.school.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    const exportToCSV = () => {
        if (!registeredTeams || registeredTeams.length === 0) {
            alert("Tidak ada data untuk diexport");
            return;
        }

        const headers = [
            "No",
            "Nama Tim",
            "Asal Instansi",
            "Nama Ketua",
            "Status",
            "Skor Tahap 1",
            "Skor Tahap 2",
            "Skor Tahap 3",
            "Total Skor",
        ];

        const csvRows = registeredTeams.map((team, index) => [
            index + 1,
            `"${team.name}"`,
            `"${team.school}"`,
            `"${team.ketua || "-"}"`,
            team.status,
            team.t1,
            team.t2,
            team.t3,
            team.total,
        ]);

        const csvContent = [
            headers.join(","),
            ...csvRows.map((row) => row.join(",")),
        ].join("\n");

        const blob = new Blob([csvContent], {
            type: "text/csv;charset=utf-8;",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute(
            "download",
            `Rekap_Nilai_ELSMART_${new Date().toISOString().split("T")[0]}.csv`,
        );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const cardClass =
        "bg-[#16202a] border border-[#2a3744] rounded-3xl shadow-lg";

    return (
        <div className="min-h-screen bg-[#0d141c] font-sans relative overflow-hidden text-slate-300">
            <Head title="Game Master - ELSMART 2026" />

            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-frosted-mint-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <nav className="relative z-20 border-b border-[#2a3744] bg-[#0d141c]/95 backdrop-blur-lg top-0 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4">
                            <img
                                src={elsmart}
                                alt="Elsmart"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="hidden sm:block h-8 w-px bg-slate-700"></div>
                            <div>
                                <span className="block text-slate-100 font-bold tracking-wider text-sm uppercase">
                                    Game Master Panel
                                </span>
                                <span className="block text-xs text-frosted-mint-400 font-medium">
                                    Status: Secure Connection
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex bg-[#16202a] border border-[#2a3744] px-4 py-2.5 rounded-full items-center gap-3">
                                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-semibold text-slate-200">
                                    {admin_name}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-full transition-colors border border-red-500/20"
                                title="Keluar"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-20">
                {/* STATISTIK RINGKAS */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className={`${cardClass} p-6 flex items-center gap-5`}>
                        <div className="p-4 bg-blue-500/10 rounded-2xl">
                            <Users className="text-blue-400" size={28} />
                        </div>
                        <div>
                            <span className="block text-2xl font-black text-slate-100">
                                {registeredTeams?.length || 0}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                Total Tim
                            </span>
                        </div>
                    </div>
                    <div className={`${cardClass} p-6 flex items-center gap-5`}>
                        <div className="p-4 bg-frosted-mint-500/10 rounded-2xl">
                            <Activity
                                className="text-frosted-mint-400"
                                size={28}
                            />
                        </div>
                        <div>
                            <span className="block text-2xl font-black text-slate-100">
                                {registeredTeams?.filter(
                                    (t) => t.status !== "Offline",
                                ).length || 0}
                            </span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                                Tim Aktif
                            </span>
                        </div>
                    </div>
                </div>

                {/* DATABASE PESERTA */}
                <div className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <ClipboardList
                                className="text-blue-400"
                                size={28}
                            />
                            <h2 className="text-2xl font-bold text-slate-100">
                                Database & Rekap Nilai
                            </h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Search
                                        size={18}
                                        className="text-slate-500"
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    placeholder="Cari tim..."
                                    className="w-full sm:w-64 bg-[#16202a] border border-[#2a3744] rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-500"
                                />
                            </div>
                            <button
                                onClick={exportToCSV}
                                className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors shadow-lg shadow-green-600/20"
                            >
                                <Download size={18} />
                                <span className="hidden sm:inline">
                                    Export Excel
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className={`${cardClass} overflow-hidden`}>
                        <div className="overflow-x-auto custom-scrollbar">
                            <table className="w-full text-left border-collapse whitespace-nowrap">
                                <thead className="bg-[#1a2530] border-b border-[#2a3744]">
                                    <tr>
                                        <th className="p-5 text-sm font-semibold text-slate-400 text-center w-16">
                                            No
                                        </th>
                                        <th className="p-5 text-sm font-semibold text-slate-400">
                                            Profil Tim
                                        </th>
                                        <th className="p-5 text-sm font-semibold text-slate-400 text-center">
                                            Status
                                        </th>
                                        <th className="p-5 text-sm font-semibold text-slate-400 text-center">
                                            Tahap 1
                                        </th>
                                        <th className="p-5 text-sm font-semibold text-slate-400 text-center">
                                            Tahap 2
                                        </th>
                                        <th className="p-5 text-sm font-semibold text-slate-400 text-center">
                                            Tahap 3
                                        </th>
                                        <th className="p-5 text-sm font-bold text-frosted-mint-400 text-right">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-[#2a3744]">
                                    {filteredTeams.length > 0 ? (
                                        filteredTeams.map((team, index) => (
                                            <tr
                                                key={team.id}
                                                className="hover:bg-[#1a2530]/50 transition-colors"
                                            >
                                                <td className="p-5 text-center text-slate-500 font-medium">
                                                    {index + 1}
                                                </td>
                                                <td className="p-5">
                                                    <p className="font-bold text-slate-200 text-base">
                                                        {team.name}
                                                    </p>
                                                    <p className="text-sm text-slate-500 mt-1 flex items-center gap-1.5">
                                                        <GraduationCap
                                                            size={14}
                                                        />{" "}
                                                        {team.school}
                                                    </p>
                                                </td>
                                                <td className="p-5 text-center">
                                                    <span
                                                        className={`inline-flex px-3 py-1.5 rounded-md text-[10px] uppercase tracking-wider font-bold ${
                                                            team.status ===
                                                            "Terdaftar"
                                                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                                                : team.status ===
                                                                    "Selesai"
                                                                  ? "bg-frosted-mint-500/10 text-frosted-mint-400 border border-frosted-mint-500/20"
                                                                  : "bg-[#2a3744] text-slate-300"
                                                        }`}
                                                    >
                                                        {team.status ||
                                                            "Terdaftar"}
                                                    </span>
                                                </td>
                                                <td className="p-5 text-center font-mono text-slate-400">
                                                    {team.t1 || 0}
                                                </td>
                                                <td className="p-5 text-center font-mono text-slate-400">
                                                    {team.t2 || 0}
                                                </td>
                                                <td className="p-5 text-center font-mono text-slate-400">
                                                    {team.t3 || 0}
                                                </td>
                                                <td className="p-5 text-right">
                                                    <span className="text-xl font-bold text-slate-200">
                                                        {team.total || 0}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="7"
                                                className="p-20 text-center text-slate-500"
                                            >
                                                <div className="flex flex-col items-center gap-3">
                                                    <Search
                                                        size={40}
                                                        className="opacity-20"
                                                    />
                                                    <p className="text-lg">
                                                        {searchTerm
                                                            ? "Tim tidak ditemukan."
                                                            : "Belum ada tim yang mendaftar."}
                                                    </p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <style jsx="true">{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #16202a;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #2a3744;
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #3f5266;
                }
            `}</style>
        </div>
    );
};

export default ElsmartDashboard;
