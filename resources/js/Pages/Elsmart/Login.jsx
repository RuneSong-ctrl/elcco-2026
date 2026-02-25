import React from "react";
import { useForm, Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Users, Lock, LogIn } from "lucide-react";
import elsmart from "/public/images/elsmart.png";

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
        <div className="min-h-screen bg-dark-spruce-950 flex items-center justify-center p-4 font-sans relative overflow-hidden contain-paint">
            <Head title="Login ELSMART 2026" />

            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"></div>
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-frosted-mint-500/20 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md bg-dark-spruce-900/60 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden relative z-10"
            >
                <div className="p-8 text-center border-b border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-frosted-mint-500/20 rounded-full blur-2xl opacity-60"></div>
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-24 h-24 bg-white/5 rounded-full blur-2xl opacity-40"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <motion.img
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                            src={elsmart}
                            alt="Elsmart"
                            className="h-24 w-auto object-contain drop-shadow-[0_0_25px_rgba(81,186,69,0.4)]"
                        />
                    </div>
                </div>

                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-300 ml-1">
                                Nama Tim
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Users
                                        size={16}
                                        className="text-slate-400 group-focus-within:text-frosted-mint-500 transition-colors"
                                    />
                                </div>
                                <input
                                    type="text"
                                    value={data.team_name}
                                    onChange={(e) =>
                                        setData("team_name", e.target.value)
                                    }
                                    className="w-full bg-dark-spruce-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-frosted-mint-500 focus:bg-dark-spruce-900 transition-all font-bold placeholder:font-normal placeholder:text-slate-500 shadow-inner"
                                    placeholder="Masukkan nama tim"
                                    autoComplete="off"
                                />
                            </div>
                            {errors.team_name && (
                                <p className="text-[10px] text-red-400 font-bold ml-1">
                                    {errors.team_name}
                                </p>
                            )}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-300 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                    <Lock
                                        size={16}
                                        className="text-slate-400 group-focus-within:text-frosted-mint-500 transition-colors"
                                    />
                                </div>
                                <input
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    className="w-full bg-dark-spruce-950/50 border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-sm text-white focus:outline-none focus:border-frosted-mint-500 focus:bg-dark-spruce-900 transition-all font-bold placeholder:font-normal placeholder:text-slate-500 shadow-inner"
                                    placeholder="••••••••"
                                />
                            </div>
                            {errors.password && (
                                <p className="text-[10px] text-red-400 font-bold ml-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-3.5 mt-4 bg-frosted-mint-600 hover:bg-frosted-mint-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] border border-frosted-mint-400/50 disabled:opacity-70 transition-all active:scale-95"
                        >
                            <LogIn size={18} />
                            <span>
                                {processing
                                    ? "Memverifikasi..."
                                    : "Masuk ke Lobby"}
                            </span>
                        </button>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
