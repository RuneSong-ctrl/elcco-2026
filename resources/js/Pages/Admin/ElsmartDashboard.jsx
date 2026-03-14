import React, { useState } from "react";
import { Head, useForm, router } from "@inertiajs/react";
import axios from "axios";
import {
    LogOut,
    Users,
    Activity,
    ClipboardList,
    Search,
    GraduationCap,
    Download,
    Settings2,
    Unlock,
    Lock,
    AlertCircle,
    Key,
    Trash2,
} from "lucide-react";
import LCC from "/public/images/lcc.png"; // Diubah ke logo LCC saja karena yang Elsmart sudah dihapus

const ElsmartDashboard = ({ admin_name, registeredTeams, gameStatus }) => {
    const { post } = useForm();
    const [searchTerm, setSearchTerm] = useState("");

    const [stages, setStages] = useState([
        {
            id: 1,
            name: "Tahap 1 - Multiple Choice",
            isOpen: gameStatus?.stage_1 || false,
        },
        {
            id: 2,
            name: "Tahap 2 - Find Words",
            isOpen: gameStatus?.stage_2 || false,
        },
        {
            id: 3,
            name: "Tahap 3 - Match The Box",
            isOpen: gameStatus?.stage_3 || false,
        },
    ]);

    const handleLogout = (e) => {
        e.preventDefault();
        post("/admin/logout");
    };

    const toggleStage = (id) => {
        const stage = stages.find((s) => s.id === id);
        const newStatus = !stage.isOpen;

        setStages(
            stages.map((s) => (s.id === id ? { ...s, isOpen: newStatus } : s)),
        );

        axios
            .post("/admin/elsmart-master/toggle-stage", {
                id: id,
                isOpen: newStatus,
            })
            .catch((error) => console.error(error));
    };

    const resetPassword = (id, name) => {
        if (
            window.confirm(
                `Yakin ingin reset password tim "${name}" menjadi "0000"?`,
            )
        ) {
            router.post("/admin/elsmart-master/reset-password", { id: id });
        }
    };

    const deleteTeam = (id, name) => {
        if (
            window.confirm(
                `Peringatan Keras! Yakin ingin menghapus akun tim "${name}" beserta seluruh nilainya?`,
            )
        ) {
            router.post("/admin/elsmart-master/delete-team", { id: id });
        }
    };

    const filteredTeams = (registeredTeams || [])
        .filter(
            (team) =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                team.school.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .sort((a, b) => b.total - a.total);

    const exportToCSV = () => {
        if (!registeredTeams || registeredTeams.length === 0) {
            alert("Tidak ada data untuk diexport");
            return;
        }

        const headers = [
            "No",
            "Nama Tim",
            "Asal Instansi",
            "Ketua",
            "Status",
            "Tahap 1",
            "Tahap 2",
            "Tahap 3",
            "Total",
        ];

        const csvRows = filteredTeams.map((team, index) => [
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
            `Rekap_Skor_LCC_${new Date().toISOString().split("T")[0]}.csv`,
        );
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Card class menggunakan border hijau pudar
    const cardClass =
        "bg-white/95 backdrop-blur-sm border border-fern-200 rounded-3xl shadow-lg";

    return (
        <div className="min-h-screen bg-gradient-to-br from-fern-100 via-fern-50 to-white font-sans relative overflow-hidden text-muted-olive-900">
            <Head title="Game Master - LCC 2026" />

            {/* Ambient Background & Blur hijau cerah */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-frosted-mint-200/50 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fern-200/40 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <nav className="relative z-20 border-b border-fern-200 bg-white/80 backdrop-blur-lg top-0 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex items-center gap-4">
                            <img
                                src={LCC}
                                alt="LCC"
                                className="h-10 w-auto object-contain"
                            />
                            <div className="hidden sm:block h-8 w-px bg-fern-300"></div>
                            <div>
                                <span className="block text-muted-olive-900 font-bold tracking-wider text-sm uppercase">
                                    Game Master LCC
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex bg-white border border-fern-200 px-4 py-2.5 rounded-full items-center gap-3 shadow-sm">
                                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                                <span className="text-sm font-bold text-muted-olive-800">
                                    {admin_name}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="p-2.5 bg-red-50 hover:bg-red-100 text-red-500 rounded-full transition-colors border border-red-100 focus:ring-2 focus:ring-red-400/50 outline-none"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-3 mb-2">
                            <Settings2
                                className="text-frosted-mint-600"
                                size={26}
                            />
                            <h2 className="text-xl font-black text-muted-olive-900">
                                Master Control
                            </h2>
                        </div>

                        <div className={`${cardClass} p-6`}>
                            <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                                <AlertCircle
                                    className="text-amber-600 shrink-0 mt-0.5"
                                    size={18}
                                />
                                <p className="text-sm text-amber-800 font-medium leading-relaxed">
                                    Membuka kunci tahapan ini akan memberikan
                                    akses kepada seluruh peserta di Lobby.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {stages.map((stage) => (
                                    <div
                                        key={stage.id}
                                        className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${
                                            stage.isOpen
                                                ? "bg-frosted-mint-50 border-frosted-mint-200"
                                                : "bg-white border-fern-100"
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`p-2.5 rounded-xl ${
                                                    stage.isOpen
                                                        ? "bg-frosted-mint-100 text-frosted-mint-600"
                                                        : "bg-slate-50 text-slate-400"
                                                }`}
                                            >
                                                {stage.isOpen ? (
                                                    <Unlock size={20} />
                                                ) : (
                                                    <Lock size={20} />
                                                )}
                                            </div>
                                            <div>
                                                <p
                                                    className={`text-[15px] font-bold ${
                                                        stage.isOpen
                                                            ? "text-muted-olive-900"
                                                            : "text-muted-olive-600"
                                                    }`}
                                                >
                                                    {stage.name}
                                                </p>
                                                <p className="text-xs text-muted-olive-400 font-bold mt-0.5">
                                                    Status:{" "}
                                                    {stage.isOpen
                                                        ? "UNLOCKED"
                                                        : "LOCKED"}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() =>
                                                toggleStage(stage.id)
                                            }
                                            className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none ${
                                                stage.isOpen
                                                    ? "bg-frosted-mint-500 shadow-md shadow-frosted-mint-500/40"
                                                    : "bg-slate-300"
                                            }`}
                                        >
                                            <span
                                                className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform ${
                                                    stage.isOpen
                                                        ? "translate-x-7"
                                                        : "translate-x-1"
                                                }`}
                                            />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div
                                className={`${cardClass} p-6 flex flex-col items-center justify-center text-center`}
                            >
                                <Users
                                    className="text-blue-500 mb-3"
                                    size={32}
                                />
                                <span className="text-3xl font-black text-muted-olive-900">
                                    {registeredTeams?.length || 0}
                                </span>
                                <span className="text-sm font-bold text-muted-olive-500 mt-1">
                                    Total Tim
                                </span>
                            </div>
                            <div
                                className={`${cardClass} p-6 flex flex-col items-center justify-center text-center`}
                            >
                                <Activity
                                    className="text-frosted-mint-500 mb-3"
                                    size={32}
                                />
                                <span className="text-3xl font-black text-muted-olive-900">
                                    {registeredTeams?.filter((t) => t.total > 0)
                                        .length || 0}
                                </span>
                                <span className="text-sm font-bold text-muted-olive-500 mt-1">
                                    Tim Mengerjakan
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
                            <div className="flex items-center gap-3">
                                <ClipboardList
                                    className="text-frosted-mint-600"
                                    size={28}
                                />
                                <h2 className="text-xl font-black text-muted-olive-900">
                                    Database & Rekap Nilai
                                </h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Search
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-olive-400"
                                    />
                                    <input
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        placeholder="Cari tim..."
                                        className="w-full sm:w-64 bg-white border border-fern-200 rounded-xl pl-11 pr-4 py-2.5 text-sm text-muted-olive-900 placeholder-muted-olive-400 focus:outline-none focus:border-frosted-mint-400 focus:ring-1 focus:ring-frosted-mint-400 transition-all shadow-sm"
                                    />
                                </div>
                                <button
                                    onClick={exportToCSV}
                                    className="flex items-center gap-2 bg-gradient-to-r from-frosted-mint-500 to-frosted-mint-600 hover:from-frosted-mint-600 hover:to-frosted-mint-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-frosted-mint-500/30 active:scale-95"
                                >
                                    <Download size={18} /> Export Excel
                                </button>
                            </div>
                        </div>

                        <div
                            className={`${cardClass} overflow-hidden h-[calc(100%-4rem)]`}
                        >
                            <div className="overflow-x-auto h-full max-h-[700px] custom-scrollbar">
                                <table className="w-full text-left border-collapse whitespace-nowrap">
                                    <thead className="sticky top-0 z-10 bg-fern-50 border-b border-fern-200 shadow-sm">
                                        <tr>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600 text-center w-16">
                                                No
                                            </th>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600">
                                                Profil Tim
                                            </th>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600 text-center">
                                                Status
                                            </th>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600 text-center">
                                                Tahap 1
                                            </th>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600 text-center">
                                                Tahap 2
                                            </th>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600 text-center">
                                                Tahap 3
                                            </th>
                                            <th className="p-5 text-sm font-black text-frosted-mint-600 text-right">
                                                Total
                                            </th>
                                            <th className="p-5 text-sm font-bold text-muted-olive-600 text-center">
                                                Aksi
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-fern-100">
                                        {filteredTeams.length > 0 ? (
                                            filteredTeams.map((team, index) => (
                                                <tr
                                                    key={team.id}
                                                    className="hover:bg-fern-50/50 transition-colors group"
                                                >
                                                    <td className="p-5 text-center text-muted-olive-500 font-bold">
                                                        {index + 1}
                                                    </td>
                                                    <td className="p-5">
                                                        <p className="font-black text-muted-olive-900 text-base">
                                                            {team.name}
                                                        </p>
                                                        <p className="text-sm text-muted-olive-500 mt-1 flex items-center gap-1.5 font-medium">
                                                            <GraduationCap
                                                                size={14}
                                                            />{" "}
                                                            {team.school}
                                                        </p>
                                                    </td>
                                                    <td className="p-5 text-center">
                                                        <span
                                                            className={`inline-flex px-3 py-1.5 rounded-md text-[10px] uppercase font-black ${
                                                                team.status ===
                                                                "Selesai"
                                                                    ? "bg-frosted-mint-100 text-frosted-mint-700 border border-frosted-mint-200"
                                                                    : "bg-slate-100 text-slate-500 border border-slate-200"
                                                            }`}
                                                        >
                                                            {team.status}
                                                        </span>
                                                    </td>
                                                    <td className="p-5 text-center font-mono text-muted-olive-700 font-medium">
                                                        {team.t1}
                                                    </td>
                                                    <td className="p-5 text-center font-mono text-muted-olive-700 font-medium">
                                                        {team.t2}
                                                    </td>
                                                    <td className="p-5 text-center font-mono text-muted-olive-700 font-medium">
                                                        {team.t3}
                                                    </td>
                                                    <td className="p-5 text-right">
                                                        <span className="text-xl font-black text-muted-olive-900">
                                                            {team.total}
                                                        </span>
                                                    </td>
                                                    <td className="p-5 text-center">
                                                        <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <button
                                                                onClick={() =>
                                                                    resetPassword(
                                                                        team.id,
                                                                        team.name,
                                                                    )
                                                                }
                                                                title="Reset Password ke 0000"
                                                                className="p-2 bg-blue-50 text-blue-500 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200 outline-none"
                                                            >
                                                                <Key
                                                                    size={16}
                                                                />
                                                            </button>
                                                            <button
                                                                onClick={() =>
                                                                    deleteTeam(
                                                                        team.id,
                                                                        team.name,
                                                                    )
                                                                }
                                                                title="Hapus Akun Peserta"
                                                                className="p-2 bg-red-50 text-red-500 hover:bg-red-100 rounded-lg transition-colors border border-red-200 outline-none"
                                                            >
                                                                <Trash2
                                                                    size={16}
                                                                />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td
                                                    colSpan="8"
                                                    className="p-20 text-center text-muted-olive-400"
                                                >
                                                    <div className="flex flex-col items-center gap-3">
                                                        <Search
                                                            size={40}
                                                            className="opacity-20"
                                                        />
                                                        <p className="text-lg font-medium">
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
                </div>
            </main>

            <style jsx="true">{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f8faf8; /* fern-50 approx */
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #bddbbd; /* fern-200 */
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #96d68f; /* frosted-mint-300 */
                }
            `}</style>
        </div>
    );
};

export default ElsmartDashboard;
