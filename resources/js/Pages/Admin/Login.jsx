import React, { useState } from "react";
import { router } from "@inertiajs/react";
import {
    User,
    Lock,
    KeyRound,
    Loader2,
    ShieldCheck,
    Heart,
} from "lucide-react";
import { Head } from "@inertiajs/react";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setProcessing(true);
        setError("");

        router.post(
            "/admin/login",
            { username, password },
            {
                onSuccess: () => {},
                onError: (err) => {
                    setProcessing(false);
                    setError(err.login || "Terjadi kesalahan, coba lagi.");
                },
            },
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#fff8e5] p-4 font-sans">
            <Head title="Admin Login - ELCCO 2026" />
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-fern-100">
                {/* Header */}
                <div className="bg-fern-600 p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50"></div>
                    <div className="relative z-10 flex justify-center mb-4">
                        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                    </div>
                    <h2 className="relative z-10 text-2xl font-black text-white tracking-wide">
                        Admin Portal
                    </h2>
                    <p className="relative z-10 text-fern-100 text-sm mt-1">
                        Silakan login untuk mengelola pesanan
                    </p>
                </div>

                {/* Form */}
                <div className="p-8 pt-10">
                    <form onSubmit={handleLogin} className="space-y-5">
                        {error && (
                            <div className="p-3 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm text-center font-bold">
                                {error}
                            </div>
                        )}

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-fern-600 ml-1">
                                Username
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fern-300">
                                    <User size={18} />
                                </div>
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-800 focus:outline-none focus:border-fern-500 focus:bg-white transition-all placeholder:font-normal"
                                    placeholder="Masukkan Username Admin"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-fern-600 ml-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-fern-300">
                                    <KeyRound size={18} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-bold text-gray-800 focus:outline-none focus:border-fern-500 focus:bg-white transition-all placeholder:font-normal"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 bg-gradient-to-r from-frosted-mint-600 to-fern-600 hover:from-frosted-mint-500 hover:to-fern-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                        >
                            {processing ? (
                                <Loader2 size={20} className="animate-spin" />
                            ) : (
                                <Lock size={20} />
                            )}
                            <span>Masuk Dashboard</span>
                        </button>
                    </form>
                </div>

                {/* FOOTER  */}
                <div className="bg-gray-50 p-5 text-center border-t border-gray-100">
                    <p className="text-xs text-fern-700 font-bold mb-1 flex items-center justify-center gap-1">
                        Semangat Panitia ELCCO 2026 🔥
                    </p>
                    <p className="text-[10px] text-gray-400 font-mono flex items-center justify-center gap-1">
                        Code with{" "}
                        <Heart
                            size={10}
                            className="fill-red-400 text-red-400"
                        />{" "}
                        by Rama Devantara
                    </p>
                </div>
            </div>
        </div>
    );
}
