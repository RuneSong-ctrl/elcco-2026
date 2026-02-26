import React from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    Users,
    Lock,
    UserPlus,
    GraduationCap,
    User,
    ShieldCheck,
} from "lucide-react";
import elsmart from "/public/images/elsmart.png";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        team_name: "",
        school_name: "",
        ketua_name: "",
        anggota1_name: "",
        anggota2_name: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/elsmart/register");
    };

    // Class input yang sudah dioptimalkan agar lebih lega dan kontrasnya nyaman di mata
    const inputClasses =
        "w-full bg-black/20 hover:bg-black/30 border border-white/10 rounded-xl pl-11 pr-4 py-3.5 text-base text-white focus:outline-none focus:border-frosted-mint-400 focus:ring-1 focus:ring-frosted-mint-400 focus:bg-black/40 transition-all font-semibold placeholder:text-slate-400/60 placeholder:font-normal shadow-inner";

    return (
        <div className="min-h-screen bg-dark-spruce-950 flex items-center justify-center p-4 font-sans relative overflow-hidden contain-paint py-12">
            <Head title="Register ELSMART 2026" />

            <div className="stars absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen"></div>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/5 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-frosted-mint-500/10 blur-[80px] rounded-full pointer-events-none z-0 transform-gpu"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-3xl bg-dark-spruce-900/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/10 overflow-hidden relative z-10"
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
                            className="h-20 w-auto object-contain drop-shadow-[0_0_25px_rgba(81,186,69,0.4)] mb-4"
                        />
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            Pendaftaran Tim
                        </h2>
                        <p className="text-sm text-frosted-mint-400 font-bold tracking-widest uppercase mt-2">
                            ELSMART 2026
                        </p>
                    </div>
                </div>

                <div className="p-6 md:p-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* SECTION: DATA INSTANSI */}
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-frosted-mint-400 border-b border-white/10 pb-2 flex items-center gap-2">
                                <Users size={20} /> Data Instansi & Tim
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-200 ml-1 block">
                                        Nama Tim
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Users
                                                size={18}
                                                className="text-slate-400 group-focus-within:text-frosted-mint-400 transition-colors"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={data.team_name}
                                            onChange={(e) =>
                                                setData(
                                                    "team_name",
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClasses}
                                            placeholder="Masukkan nama tim"
                                            autoComplete="off"
                                        />
                                    </div>
                                    {errors.team_name && (
                                        <p className="text-xs text-red-400 font-bold ml-1">
                                            {errors.team_name}
                                        </p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-200 ml-1 block">
                                        Asal Instansi
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <GraduationCap
                                                size={18}
                                                className="text-slate-400 group-focus-within:text-frosted-mint-400 transition-colors"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={data.school_name}
                                            onChange={(e) =>
                                                setData(
                                                    "school_name",
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClasses}
                                            placeholder="Contoh: Universitas Udayana"
                                            autoComplete="off"
                                        />
                                    </div>
                                    {errors.school_name && (
                                        <p className="text-xs text-red-400 font-bold ml-1">
                                            {errors.school_name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* SECTION: KETUA TIM */}
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-frosted-mint-400 border-b border-white/10 pb-2 flex items-center gap-2">
                                <User size={20} /> Data Ketua Tim
                            </h3>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-200 ml-1 block">
                                    Nama Lengkap Ketua
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <User
                                            size={18}
                                            className="text-slate-400 group-focus-within:text-frosted-mint-400 transition-colors"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={data.ketua_name}
                                        onChange={(e) =>
                                            setData(
                                                "ketua_name",
                                                e.target.value,
                                            )
                                        }
                                        className={inputClasses}
                                        placeholder="Ketik nama lengkap ketua tim"
                                    />
                                </div>
                                {errors.ketua_name && (
                                    <p className="text-xs text-red-400 font-bold ml-1">
                                        {errors.ketua_name}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* SECTION: ANGGOTA TIM */}
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-slate-300 border-b border-white/10 pb-2 flex items-center gap-2">
                                <Users size={20} /> Data Anggota Tim
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2 bg-black/10 p-5 rounded-2xl border border-white/5">
                                    <label className="text-sm font-bold text-slate-300 ml-1 block">
                                        Nama Anggota 1
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User
                                                size={18}
                                                className="text-slate-500 group-focus-within:text-frosted-mint-400 transition-colors"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={data.anggota1_name}
                                            onChange={(e) =>
                                                setData(
                                                    "anggota1_name",
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClasses}
                                            placeholder="Ketik nama anggota 1"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 bg-black/10 p-5 rounded-2xl border border-white/5">
                                    <label className="text-sm font-bold text-slate-300 ml-1 block">
                                        Nama Anggota 2
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User
                                                size={18}
                                                className="text-slate-500 group-focus-within:text-frosted-mint-400 transition-colors"
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            value={data.anggota2_name}
                                            onChange={(e) =>
                                                setData(
                                                    "anggota2_name",
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClasses}
                                            placeholder="Ketik nama anggota 2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION: KEAMANAN */}
                        <div className="space-y-5">
                            <h3 className="text-lg font-bold text-frosted-mint-400 border-b border-white/10 pb-2 flex items-center gap-2">
                                <ShieldCheck size={20} /> Keamanan Akun
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-200 ml-1 block">
                                        Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Lock
                                                size={18}
                                                className="text-slate-400 group-focus-within:text-frosted-mint-400 transition-colors"
                                            />
                                        </div>
                                        <input
                                            type="password"
                                            value={data.password}
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClasses}
                                            placeholder="••••••••"
                                        />
                                    </div>
                                    {errors.password && (
                                        <p className="text-xs text-red-400 font-bold ml-1">
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-200 ml-1 block">
                                        Konfirmasi Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Lock
                                                size={18}
                                                className="text-slate-400 group-focus-within:text-frosted-mint-400 transition-colors"
                                            />
                                        </div>
                                        <input
                                            type="password"
                                            value={data.password_confirmation}
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value,
                                                )
                                            }
                                            className={inputClasses}
                                            placeholder="••••••••"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full py-4 mt-8 bg-gradient-to-r from-frosted-mint-600 to-frosted-mint-500 hover:from-frosted-mint-500 hover:to-frosted-mint-400 text-white font-bold text-lg rounded-xl flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(34,197,94,0.3)] border border-frosted-mint-400/50 disabled:opacity-70 transition-all active:scale-95"
                        >
                            <UserPlus size={22} />
                            <span>
                                {processing
                                    ? "Memproses Data..."
                                    : "Selesaikan Pendaftaran"}
                            </span>
                        </button>
                    </form>

                    <div className="mt-8 text-center border-t border-white/10 pt-6">
                        <p className="text-sm text-slate-400">
                            Sudah memiliki akun tim?{" "}
                            <Link
                                href="/elsmart/login"
                                className="text-frosted-mint-400 hover:text-frosted-mint-300 font-bold transition-colors ml-1"
                            >
                                Masuk ke Lobby
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
