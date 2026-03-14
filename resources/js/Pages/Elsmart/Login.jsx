import React from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Users, Lock, LogIn } from "lucide-react";
import LCC from "/public/images/lcc.png";

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        team_name: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
      
        post("/elsmart/login");
    };

    return (
        <div className="min-h-screen bg-fern-50 flex items-center justify-center p-4 font-sans relative overflow-hidden contain-paint">
            <Head title="Login LCC 2026" />

            {/* Efek Stars & Background Ambient yang Lembut */}
            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-40"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/60 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-frosted-mint-300/20 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-xl border border-fern-100 overflow-hidden relative z-10"
            >
                <div className="p-8 text-center border-b border-fern-100 relative overflow-hidden bg-white">
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-frosted-mint-200/40 rounded-full blur-2xl opacity-70"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-fern-300/20 rounded-full blur-2xl opacity-60"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            src={LCC}
                            alt="LCC"
                            className="h-24 w-auto object-contain drop-shadow-sm mb-2"
                        />
                        <h2 className="text-xl md:text-2xl font-black text-muted-olive-900 tracking-tight">
                            Selamat Datang
                        </h2>
                        <p className="text-sm text-frosted-mint-600 font-bold tracking-widest uppercase mt-1">
                            LCC 2026
                        </p>
                    </div>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-olive-800 ml-1">
                                Nama Tim
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Users
                                        size={16}
                                        className="text-muted-olive-400 group-focus-within:text-frosted-mint-500 transition-colors"
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={data.team_name}
                                    onChange={(e) =>
                                        setData("team_name", e.target.value)
                                    }
                                    className="w-full bg-fern-50/60 hover:bg-fern-100/50 border border-fern-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-muted-olive-900 focus:outline-none focus:border-frosted-mint-400 focus:ring-1 focus:ring-frosted-mint-400 focus:bg-white transition-all font-bold placeholder:font-normal placeholder:text-muted-olive-400 shadow-sm"
                                    placeholder="Masukkan nama tim"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.team_name && (
                                <p className="text-[10px] text-red-500 font-bold ml-1">
                                    {errors.team_name}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-muted-olive-800 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock
                                        size={16}
                                        className="text-muted-olive-400 group-focus-within:text-frosted-mint-500 transition-colors"
                                    />
                                </div>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full bg-fern-50/60 hover:bg-fern-100/50 border border-fern-200 rounded-xl pl-10 pr-4 py-3.5 text-sm text-muted-olive-900 focus:outline-none focus:border-frosted-mint-400 focus:ring-1 focus:ring-frosted-mint-400 focus:bg-white transition-all font-bold placeholder:font-normal placeholder:text-muted-olive-400 shadow-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-[10px] text-red-500 font-bold ml-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 mt-4 bg-gradient-to-r from-frosted-mint-500 to-frosted-mint-600 hover:from-frosted-mint-600 hover:to-frosted-mint-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-frosted-mint-500/25 disabled:opacity-70 transition-all active:scale-95"
                        >
                            <LogIn size={18} />
                            <span>
                                {processing
                                    ? "Memverifikasi..."
                                    : "Masuk ke Lobby"}
                            </span>
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-muted-olive-600">
                            Belum punya akun?{" "}
                            <Link
                                href="/elsmart/register"
                                className="text-frosted-mint-600 hover:text-frosted-mint-700 font-bold transition-colors"
                            >
                                Silakan daftar
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
