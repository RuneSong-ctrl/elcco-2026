import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { router } from "@inertiajs/react";
import axios from "axios";
import {
    ShoppingBag,
    X,
    Shirt,
    ArrowRight,
    ArrowLeft,
    Star,
    CheckCircle2,
    Copy,
    UploadCloud,
    Check,
    CreditCard,
    ChevronDown,
    ChevronUp,
    Loader2,
    Search,
    MessageCircle,
    Package,
    AlertCircle,
} from "lucide-react";
import longsleeve from "/public/images/long-sleeve.jpeg";
import tshirt from "/public/images/t-shirt.jpeg";

const MerchModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [view, setView] = useState("details");
    const [activeType, setActiveType] = useState("short");
    const [isZoomed, setIsZoomed] = useState(false);
    const [showHint, setShowHint] = useState(true);
    const [isSummaryOpen, setIsSummaryOpen] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        size: "L",
        quantity: 1,
        paymentType: "lunas",
        name: "",
        phone: "",
        paymentProof: null,
        paymentProofPreview: null,
    });

    const [checkPhone, setCheckPhone] = useState("");
    const [orderResult, setOrderResult] = useState(null);
    const [repaymentProof, setRepaymentProof] = useState(null);
    const [repaymentPreview, setRepaymentPreview] = useState(null);
    const [checkLoading, setCheckLoading] = useState(false);
    const [remainingPayment, setRemainingPayment] = useState(0);

    const [copied, setCopied] = useState(false);

    const merchData = {
        short: {
            title: "Lengan Pendek",
            image: tshirt,
            rawPrice: 120000,
            rawDp: 70000,
            price: "Rp120.000",
            dp: "Rp70.000",
        },
        long: {
            title: "Lengan Panjang",
            image: longsleeve,
            rawPrice: 150000,
            rawDp: 90000,
            price: "Rp150.000",
            dp: "Rp90.000",
        },
    };

    const currentItem = merchData[activeType];

    const basePrice =
        formData.paymentType === "lunas"
            ? currentItem.rawPrice
            : currentItem.rawDp;
    const totalPrice = basePrice * formData.quantity;
    const formattedTotal = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    }).format(totalPrice);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 3000);
        const hintTimer = setTimeout(() => setShowHint(false), 8000);
        return () => {
            clearTimeout(timer);
            clearTimeout(hintTimer);
        };
    }, []);

    useEffect(() => {
        if (isOpen || showSuccessModal) {
            document.body.style.overflow = "hidden";
            setShowHint(false);
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen, showSuccessModal]);

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => setView("details"), 300);
            setIsSummaryOpen(false);
            setOrderResult(null);
            setCheckPhone("");
        }
    }, [isOpen]);

    const handleCopyRekening = () => {
        navigator.clipboard.writeText("1852351666");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1 * 1024 * 1024) {
                alert("Ukuran file maksimal 1MB");
                e.target.value = null;
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({
                    ...formData,
                    paymentProof: file,
                    paymentProofPreview: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRepaymentFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 1 * 1024 * 1024) {
                alert("Ukuran file maksimal 1MB");
                e.target.value = null;
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setRepaymentProof(file);
                setRepaymentPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.paymentProof) {
            alert("Mohon lengkapi semua data termasuk bukti transfer.");
            return;
        }

        setProcessing(true);

        const dataToSend = {
            ...formData,
            merchType: activeType,
            totalPrice: totalPrice,
        };

        router.post("/merch-order", dataToSend, {
            forceFormData: true,
            onSuccess: () => {
                setProcessing(false);
                setIsOpen(false);
                setSuccessMessage("Pesanan Berhasil!");
                setShowSuccessModal(true);
                setFormData({
                    size: "L",
                    quantity: 1,
                    paymentType: "lunas",
                    name: "",
                    phone: "",
                    paymentProof: null,
                    paymentProofPreview: null,
                });
                setView("details");
            },
            onError: (errors) => {
                setProcessing(false);
                console.error(errors);
                alert("Terjadi kesalahan. Periksa inputan anda.");
            },
        });
    };

    const handleCheckOrder = async (e) => {
        e.preventDefault();
        if (!checkPhone) return;
        setCheckLoading(true);
        setOrderResult(null);

        try {
            const response = await axios.post("/merch-order/check", {
                phone: checkPhone,
            });
            const data = response.data;
            setOrderResult(data);

            if (data.payment_type === "dp") {
                let sisaSatuan = 0;

                if (data.merch_type === "short") {
                    sisaSatuan = 120000 - 70000;
                } else if (data.merch_type === "long") {
                    sisaSatuan = 150000 - 90000;
                }

                const totalSisa = sisaSatuan * data.quantity;
                setRemainingPayment(totalSisa);
            }
        } catch (error) {
            alert("Nomor tidak ditemukan atau terjadi kesalahan.");
        } finally {
            setCheckLoading(false);
        }
    };

    const handleSubmitRepayment = (e) => {
        e.preventDefault();
        if (!repaymentProof) {
            alert("Mohon upload bukti pelunasan.");
            return;
        }
        setProcessing(true);

        router.post(
            "/merch-order/repayment",
            {
                phone: checkPhone,
                repaymentProof: repaymentProof,
            },
            {
                forceFormData: true,
                onSuccess: () => {
                    setProcessing(false);
                    setIsOpen(false);
                    setSuccessMessage("Pelunasan Berhasil Dikirim!");
                    setShowSuccessModal(true);
                    setOrderResult(null);
                    setRepaymentProof(null);
                    setRepaymentPreview(null);
                    setCheckPhone("");
                    setView("details");
                },
                onError: () => {
                    setProcessing(false);
                    alert("Gagal mengupload pelunasan.");
                },
            },
        );
    };

    return (
        <>
            <AnimatePresence>
                {showHint && !isOpen && !showSuccessModal && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="fixed bottom-24 right-6 z-[9990] md:hidden flex flex-col items-end pointer-events-none"
                    >
                        <div className="bg-white text-fern-800 text-xs font-bold px-3 py-2 rounded-xl shadow-lg border border-fern-100 relative mb-2 animate-bounce">
                            Tap to Buy Merch!
                            <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white border-b border-r border-fern-100 transform rotate-45"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-[9990] flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-frosted-mint-600 to-fern-600 text-white rounded-full font-bold shadow-[0_4px_20px_rgba(81,186,69,0.4)] border border-white/20 group transition-all"
            >
                <ShoppingBag className="w-5 h-5 text-white" />
                <span className="hidden md:inline font-bold tracking-wide text-white">
                    OFFICIAL MERCH
                </span>
                <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
                </span>
            </motion.button>

            <AnimatePresence>
                {isZoomed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsZoomed(false)}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-white/90 p-4 cursor-zoom-out touch-none backdrop-blur-sm"
                    >
                        <motion.img
                            src={currentItem.image}
                            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-gray-100"
                        />
                        <button className="absolute top-6 right-6 p-3 bg-white shadow-md rounded-full text-gray-500 hover:text-red-500 hover:bg-gray-50 transition-colors">
                            <X size={24} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-dark-spruce-950/40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl bg-[#fff8e5] border border-fern-100 rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[520px] z-10"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 z-50 p-2 bg-white/60 text-fern-700 hover:text-red-500 hover:bg-white rounded-full transition-all backdrop-blur-md border border-fern-100 shadow-sm"
                            >
                                <X size={20} />
                            </button>

                            {view === "details" && (
                                <>
                                    <div className="w-full md:w-5/12 relative bg-[#fff8e5] group h-48 md:h-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-frosted-mint-100 via-[#fff8e5] to-[#fff8e5] opacity-100"></div>
                                        <img
                                            src={currentItem.image}
                                            className="w-full h-full object-contain p-6 cursor-zoom-in transition-transform duration-700 group-hover:scale-105 relative z-10 drop-shadow-xl"
                                            onClick={() => setIsZoomed(true)}
                                        />
                                        <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur text-fern-700 text-[10px] font-bold px-3 py-1 rounded-full shadow-md border border-fern-100 flex items-center gap-1">
                                            <Star
                                                size={10}
                                                fill="currentColor"
                                                className="text-frosted-mint-500"
                                            />{" "}
                                            OFFICIAL MERCH
                                        </div>
                                    </div>

                                    <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col h-full overflow-y-auto custom-scrollbar bg-[#fff8e5] min-h-0">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2 text-fern-600 text-xs font-mono tracking-widest uppercase">
                                                <Shirt size={14} />{" "}
                                                <span>ELCCO 2026 Series</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-fern-900 mb-5 leading-tight">
                                                Official ELCCO <br />
                                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-frosted-mint-600 to-fern-600">
                                                    Merchandise
                                                </span>
                                            </h3>

                                            <div className="bg-white p-1 rounded-2xl flex mb-6 w-fit border border-fern-100 shadow-sm">
                                                {Object.keys(merchData).map(
                                                    (type) => (
                                                        <button
                                                            key={type}
                                                            onClick={() =>
                                                                setActiveType(
                                                                    type,
                                                                )
                                                            }
                                                            className={`px-5 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                                                                activeType ===
                                                                type
                                                                    ? "bg-frosted-mint-100 text-fern-800 shadow-sm border border-frosted-mint-200"
                                                                    : "text-gray-400 hover:text-fern-600 hover:bg-[#fff8e5]"
                                                            }`}
                                                        >
                                                            {type === "short"
                                                                ? "Lengan Pendek"
                                                                : "Lengan Panjang"}
                                                        </button>
                                                    ),
                                                )}
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 mb-6">
                                                <div className="bg-white p-4 rounded-2xl border border-frosted-mint-100 relative overflow-hidden shadow-sm">
                                                    <span className="text-[10px] md:text-xs text-fern-600/70 uppercase tracking-wider block mb-1 font-bold">
                                                        Harga Lunas
                                                    </span>
                                                    <span className="text-lg md:text-xl font-black text-fern-900">
                                                        {currentItem.price}
                                                    </span>
                                                </div>
                                                <div className="bg-white p-4 rounded-2xl border border-fern-100 relative overflow-hidden shadow-sm">
                                                    <span className="text-[10px] md:text-xs text-fern-600/70 uppercase tracking-wider block mb-1 font-bold">
                                                        Min. DP
                                                    </span>
                                                    <span className="text-lg md:text-xl font-bold text-fern-600 font-mono">
                                                        {currentItem.dp}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mt-4 md:mt-0">
                                            <button
                                                onClick={() => setView("form")}
                                                className="w-full py-3.5 bg-gradient-to-r from-frosted-mint-600 to-fern-600 hover:from-frosted-mint-500 hover:to-fern-500 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-fern-200 hover:shadow-fern-300 active:scale-[0.98] mt-4 md:mt-0"
                                            >
                                                <span className="text-sm md:text-base tracking-wide">
                                                    Lanjut Pemesanan
                                                </span>
                                                <ArrowRight size={18} />
                                            </button>
                                            <button
                                                onClick={() => setView("check")}
                                                className="w-full py-3 text-sm font-bold text-fern-600 hover:text-fern-800 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Search size={16} /> Sudah
                                                pesan? Cek Status
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {view === "form" && (
                                <div className="flex flex-col md:flex-row h-full w-full overflow-hidden">
                                    <div className="hidden md:flex md:w-4/12 bg-[#f4ebd0]/50 p-6 flex-col justify-between border-r border-fern-100">
                                        <div>
                                            <button
                                                onClick={() =>
                                                    setView("details")
                                                }
                                                className="flex items-center gap-2 text-fern-600/70 hover:text-fern-800 text-xs mb-6 transition-colors"
                                            >
                                                <ArrowLeft size={14} /> Kembali
                                            </button>
                                            <h4 className="text-fern-900 font-bold mb-3 tracking-wide border-b border-fern-200 pb-2 text-sm">
                                                Ringkasan Pesanan
                                            </h4>
                                            <div className="flex gap-3 items-start mb-4">
                                                <img
                                                    src={currentItem.image}
                                                    className="w-14 h-14 rounded-xl object-cover border border-white bg-white shadow-sm"
                                                />
                                                <div>
                                                    <p className="text-xs text-fern-900 font-bold line-clamp-2">
                                                        {currentItem.title}
                                                    </p>
                                                    <p className="text-[10px] text-fern-600 mt-1 font-mono font-medium">
                                                        {currentItem.price} /
                                                        pcs
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="bg-white rounded-xl p-3 space-y-2 border border-fern-100 shadow-sm">
                                                <div className="flex justify-between text-[10px] text-fern-500">
                                                    <span>Jumlah</span>
                                                    <span className="text-fern-900 font-mono font-bold">
                                                        x{formData.quantity}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-[10px] text-fern-500">
                                                    <span>Ukuran</span>
                                                    <span className="text-fern-900 font-mono font-bold">
                                                        {formData.size}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between text-[10px] text-fern-500">
                                                    <span>Metode</span>
                                                    <span className="uppercase text-fern-600 font-bold">
                                                        {formData.paymentType}
                                                    </span>
                                                </div>
                                                <div className="h-px bg-fern-100 my-1"></div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-xs font-bold text-fern-900">
                                                        Total Bayar
                                                    </span>
                                                    <span className="text-sm font-bold text-fern-700 font-mono">
                                                        {formattedTotal}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[9px] text-fern-400 text-center">
                                            Pastikan data yang diisi sudah
                                            benar.
                                        </p>
                                    </div>

                                    <div className="w-full md:w-8/12 bg-[#fff8e5] flex flex-col h-full min-h-0">
                                        <div className="md:hidden bg-[#fff8e5] shrink-0 sticky top-0 z-20 border-b border-fern-100 shadow-sm">
                                            <div className="p-4 flex items-center gap-3">
                                                <button
                                                    onClick={() =>
                                                        setView("details")
                                                    }
                                                    className="p-2 bg-white rounded-full text-fern-600 shadow-sm"
                                                >
                                                    <ArrowLeft size={18} />
                                                </button>
                                                <div className="flex-1">
                                                    <p className="text-fern-900 font-bold leading-tight">
                                                        Formulir Pesanan
                                                    </p>
                                                    <p className="text-[10px] text-fern-500">
                                                        Lengkapi data anda
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        setIsSummaryOpen(
                                                            !isSummaryOpen,
                                                        )
                                                    }
                                                    className="flex items-center gap-1 text-xs font-bold text-frosted-mint-600 bg-frosted-mint-50 px-3 py-1.5 rounded-full"
                                                >
                                                    {isSummaryOpen
                                                        ? "Tutup"
                                                        : "Lihat"}{" "}
                                                    Ringkasan
                                                    {isSummaryOpen ? (
                                                        <ChevronUp size={14} />
                                                    ) : (
                                                        <ChevronDown
                                                            size={14}
                                                        />
                                                    )}
                                                </button>
                                            </div>

                                            <AnimatePresence>
                                                {isSummaryOpen && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        className="overflow-hidden bg-[#fbf8ee] border-t border-fern-100"
                                                    >
                                                        <div className="p-4 space-y-3 text-xs">
                                                            <div className="flex gap-3 items-center">
                                                                <img
                                                                    src={
                                                                        currentItem.image
                                                                    }
                                                                    className="w-12 h-12 rounded-lg object-contain bg-white border border-fern-100"
                                                                />
                                                                <div>
                                                                    <p className="font-bold text-fern-900">
                                                                        {
                                                                            currentItem.title
                                                                        }
                                                                    </p>
                                                                    <p className="text-fern-500">
                                                                        Size{" "}
                                                                        {
                                                                            formData.size
                                                                        }{" "}
                                                                        x{" "}
                                                                        {
                                                                            formData.quantity
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between pt-2 border-t border-fern-200">
                                                                <span className="text-fern-600 font-medium">
                                                                    Total
                                                                    Pembayaran (
                                                                    {
                                                                        formData.paymentType
                                                                    }
                                                                    )
                                                                </span>
                                                                <span className="text-fern-800 font-bold font-mono">
                                                                    {
                                                                        formattedTotal
                                                                    }
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="flex-1 overflow-y-auto p-5 md:p-8 custom-scrollbar pb-28">
                                            <form
                                                onSubmit={handleSubmit}
                                                className="space-y-4 max-w-2xl mx-auto"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-fern-600 ml-1">
                                                            Nama Lengkap
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={
                                                                formData.name
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    name: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className="w-full bg-white border border-fern-200 rounded-xl px-4 py-2.5 text-sm text-fern-900 focus:outline-none focus:border-fern-500 shadow-sm"
                                                            placeholder="Masukkan nama"
                                                        />
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-fern-600 ml-1">
                                                            No. WhatsApp
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            value={
                                                                formData.phone
                                                            }
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    phone: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                            className="w-full bg-white border border-fern-200 rounded-xl px-4 py-2.5 text-sm text-fern-900 focus:outline-none focus:border-fern-500 shadow-sm"
                                                            placeholder="08..."
                                                        />
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3 pt-1">
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-fern-600 ml-1">
                                                            Ukuran
                                                        </label>
                                                        <select
                                                            className="w-full bg-white border border-fern-200 rounded-xl px-4 py-2.5 text-sm text-fern-900 focus:outline-none focus:border-fern-500 shadow-sm"
                                                            onChange={(e) =>
                                                                setFormData({
                                                                    ...formData,
                                                                    size: e
                                                                        .target
                                                                        .value,
                                                                })
                                                            }
                                                        >
                                                            {[
                                                                "XS",
                                                                "S",
                                                                "M",
                                                                "L",
                                                                "XL",
                                                                "XXL",
                                                            ].map((s) => (
                                                                <option
                                                                    key={s}
                                                                    value={s}
                                                                >
                                                                    {s}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        <label className="text-xs font-bold text-fern-600 ml-1">
                                                            Jumlah
                                                        </label>
                                                        <div className="flex items-center bg-white border border-fern-200 rounded-xl overflow-hidden shadow-sm">
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setFormData(
                                                                        (
                                                                            p,
                                                                        ) => ({
                                                                            ...p,
                                                                            quantity:
                                                                                Math.max(
                                                                                    1,
                                                                                    p.quantity -
                                                                                        1,
                                                                                ),
                                                                        }),
                                                                    )
                                                                }
                                                                className="px-3 py-2.5 text-fern-400 hover:text-fern-700 hover:bg-frosted-mint-50"
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="number"
                                                                className="w-full bg-transparent text-center text-sm text-fern-900 focus:outline-none font-bold"
                                                                value={
                                                                    formData.quantity
                                                                }
                                                                readOnly
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setFormData(
                                                                        (
                                                                            p,
                                                                        ) => ({
                                                                            ...p,
                                                                            quantity:
                                                                                p.quantity +
                                                                                1,
                                                                        }),
                                                                    )
                                                                }
                                                                className="px-3 py-2.5 text-fern-400 hover:text-fern-700 hover:bg-frosted-mint-50"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 gap-3 pt-1">
                                                    {["lunas", "dp"].map(
                                                        (type) => (
                                                            <div
                                                                key={type}
                                                                onClick={() =>
                                                                    setFormData(
                                                                        {
                                                                            ...formData,
                                                                            paymentType:
                                                                                type,
                                                                        },
                                                                    )
                                                                }
                                                                className={`cursor-pointer p-3 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all shadow-sm ${
                                                                    formData.paymentType ===
                                                                    type
                                                                        ? "bg-frosted-mint-100 border-frosted-mint-500"
                                                                        : "bg-white border-fern-200 hover:border-fern-300"
                                                                }`}
                                                            >
                                                                <span
                                                                    className={`text-xs font-bold ${formData.paymentType === type ? "text-fern-700" : "text-fern-500"}`}
                                                                >
                                                                    {type ===
                                                                    "lunas"
                                                                        ? "Lunas"
                                                                        : "DP"}
                                                                </span>
                                                                <span className="text-[9px] text-fern-400">
                                                                    {type ===
                                                                    "lunas"
                                                                        ? "Bayar Penuh"
                                                                        : "Bayar Sebagian"}
                                                                </span>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>

                                                <div className="bg-white p-3 rounded-xl border border-fern-200 relative group shadow-sm">
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <CreditCard
                                                                size={16}
                                                                className="text-fern-600"
                                                            />
                                                            <span className="text-[10px] font-bold text-fern-600 tracking-widest">
                                                                BANK BNI
                                                            </span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={
                                                                handleCopyRekening
                                                            }
                                                            className="text-[9px] bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded text-fern-500 hover:text-fern-700 transition-colors flex items-center gap-1 border border-gray-100"
                                                        >
                                                            {copied ? (
                                                                <Check
                                                                    size={10}
                                                                />
                                                            ) : (
                                                                <Copy
                                                                    size={10}
                                                                />
                                                            )}{" "}
                                                            {copied
                                                                ? "Copied"
                                                                : "Copy"}
                                                        </button>
                                                    </div>
                                                    <p className="text-base font-mono font-bold text-fern-800 tracking-wider mb-1">
                                                        1852351666
                                                    </p>
                                                    <p className="text-[9px] text-fern-400 uppercase tracking-wide">
                                                        SERLY SAFIRA
                                                    </p>
                                                </div>

                                                <label className="flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-fern-500 hover:bg-fern-50 transition-all group overflow-hidden relative">
                                                    {formData.paymentProofPreview ? (
                                                        <>
                                                            <img
                                                                src={
                                                                    formData.paymentProofPreview
                                                                }
                                                                alt="Preview"
                                                                className="w-full h-full object-cover"
                                                            />
                                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                <p className="text-white text-xs font-bold flex items-center gap-1">
                                                                    <UploadCloud
                                                                        size={
                                                                            16
                                                                        }
                                                                    />{" "}
                                                                    Ganti Gambar
                                                                </p>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="flex flex-col items-center justify-center">
                                                            <UploadCloud
                                                                size={20}
                                                                className="text-gray-400 mb-2 group-hover:text-fern-500 transition-colors"
                                                            />
                                                            <p className="text-xs text-gray-400 group-hover:text-fern-600 text-center px-4">
                                                                <span className="font-bold text-gray-600 group-hover:text-fern-700">
                                                                    Upload Bukti
                                                                </span>{" "}
                                                                <br />
                                                                <span className="text-[9px] opacity-70">
                                                                    Max 1MB
                                                                </span>
                                                            </p>
                                                        </div>
                                                    )}
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={
                                                            handleFileChange
                                                        }
                                                    />
                                                </label>
                                            </form>
                                        </div>

                                        <div className="p-4 md:p-6 border-t border-fern-100 bg-[#fff8e5] sticky bottom-0 z-20 shrink-0">
                                            <button
                                                onClick={handleSubmit}
                                                disabled={processing}
                                                className="w-full py-3.5 bg-gradient-to-r from-frosted-mint-600 to-fern-600 hover:from-frosted-mint-500 hover:to-fern-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                                            >
                                                {processing ? (
                                                    <Loader2
                                                        size={18}
                                                        className="animate-spin"
                                                    />
                                                ) : (
                                                    <CheckCircle2 size={18} />
                                                )}
                                                <span>
                                                    {processing
                                                        ? "Memproses..."
                                                        : "Konfirmasi Pesanan"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {view === "check" && (
                                <div className="flex flex-col h-full w-full bg-[#fff8e5]">
                                    <div className="p-6 border-b border-fern-100 flex items-center gap-3 bg-white">
                                        <button
                                            onClick={() => setView("details")}
                                            className="p-2 bg-gray-50 rounded-full text-fern-600 shadow-sm hover:bg-gray-100 transition-colors"
                                        >
                                            <ArrowLeft size={18} />
                                        </button>
                                        <h3 className="text-lg font-bold text-fern-900">
                                            Cek Status Pesanan
                                        </h3>
                                    </div>

                                    <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                                        {!orderResult ? (
                                            <form
                                                onSubmit={handleCheckOrder}
                                                className="max-w-md mx-auto space-y-6 mt-4"
                                            >
                                                <div className="text-center space-y-2">
                                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm border border-fern-50">
                                                        <Search
                                                            size={28}
                                                            className="text-fern-400"
                                                        />
                                                    </div>
                                                    <p className="text-sm text-fern-600 leading-relaxed px-4">
                                                        Masukkan nomor WhatsApp
                                                        yang terdaftar untuk
                                                        melihat detail pesanan
                                                        atau melakukan
                                                        pelunasan.
                                                    </p>
                                                </div>

                                                <div className="space-y-4 bg-white p-6 rounded-2xl border border-fern-100 shadow-sm">
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-bold text-fern-600 ml-1">
                                                            Nomor WhatsApp
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            value={checkPhone}
                                                            onChange={(e) =>
                                                                setCheckPhone(
                                                                    e.target
                                                                        .value,
                                                                )
                                                            }
                                                            className="w-full bg-[#effbea] border border-fern-200 rounded-xl px-4 py-3 text-sm text-fern-900 focus:outline-none focus:border-fern-500 focus:bg-white transition-all text-center font-bold tracking-wide placeholder:font-normal"
                                                            placeholder="08..."
                                                        />
                                                    </div>
                                                    <button
                                                        type="submit"
                                                        disabled={
                                                            checkLoading ||
                                                            !checkPhone
                                                        }
                                                        className="w-full py-3.5 bg-fern-600 hover:bg-fern-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-md disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                                                    >
                                                        {checkLoading ? (
                                                            <Loader2
                                                                size={18}
                                                                className="animate-spin"
                                                            />
                                                        ) : (
                                                            <span>
                                                                Cari Data
                                                            </span>
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <div className="max-w-md mx-auto space-y-6">
                                                <div className="bg-white rounded-2xl border border-fern-100 shadow-sm overflow-hidden">
                                                    <div className="bg-[#effbea] p-4 border-b border-fern-100 flex justify-between items-center">
                                                        <div>
                                                            <p className="text-[10px] text-fern-500 font-bold uppercase tracking-wider mb-0.5">
                                                                Pesanan Atas
                                                                Nama
                                                            </p>
                                                            <h4 className="text-lg font-black text-fern-900 truncate max-w-[150px]">
                                                                {
                                                                    orderResult.name
                                                                }
                                                            </h4>
                                                        </div>
                                                        <div
                                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 ${
                                                                orderResult.payment_type ===
                                                                "lunas"
                                                                    ? "bg-green-100 text-green-700 border border-green-200"
                                                                    : "bg-amber-100 text-amber-700 border border-amber-200"
                                                            }`}
                                                        >
                                                            {orderResult.payment_type ===
                                                            "lunas" ? (
                                                                <CheckCircle2
                                                                    size={12}
                                                                />
                                                            ) : (
                                                                <AlertCircle
                                                                    size={12}
                                                                />
                                                            )}
                                                            {orderResult.payment_type.toUpperCase()}
                                                        </div>
                                                    </div>

                                                    <div className="p-5 space-y-4">
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <div className="bg-[#fff8e5] p-3 rounded-xl border border-[#f4ebd0] text-center">
                                                                <p className="text-[10px] text-gray-500 mb-1">
                                                                    Ukuran
                                                                </p>
                                                                <p className="font-bold text-gray-800 text-lg">
                                                                    {
                                                                        orderResult.size
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div className="bg-[#fff8e5] p-3 rounded-xl border border-[#f4ebd0] text-center">
                                                                <p className="text-[10px] text-gray-500 mb-1">
                                                                    Jumlah
                                                                </p>
                                                                <p className="font-bold text-gray-800 text-lg">
                                                                    {
                                                                        orderResult.quantity
                                                                    }{" "}
                                                                    <span className="text-xs font-normal text-gray-500">
                                                                        pcs
                                                                    </span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {orderResult.payment_type ===
                                                    "dp" &&
                                                    !orderResult.repayment_proof && (
                                                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                                                            <div className="bg-[#effbea] p-4 rounded-xl border border-fern-200 flex flex-col gap-3">
                                                                <div className="flex gap-3">
                                                                    <div className="mt-0.5">
                                                                        <div className="w-5 h-5 bg-fern-100 rounded-full flex items-center justify-center">
                                                                            <UploadCloud
                                                                                size={
                                                                                    12
                                                                                }
                                                                                className="text-fern-600"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-xs text-fern-800 leading-relaxed">
                                                                        <p className="font-bold mb-1">
                                                                            Konfirmasi
                                                                            Pelunasan
                                                                        </p>
                                                                        <p className="mb-2">
                                                                            Sisa
                                                                            tagihan:
                                                                            <span className="font-bold text-fern-900 bg-white px-1.5 py-0.5 rounded ml-1 border border-fern-100">
                                                                                {new Intl.NumberFormat(
                                                                                    "id-ID",
                                                                                    {
                                                                                        style: "currency",
                                                                                        currency:
                                                                                            "IDR",
                                                                                        minimumFractionDigits: 0,
                                                                                    },
                                                                                ).format(
                                                                                    remainingPayment,
                                                                                )}
                                                                            </span>
                                                                        </p>
                                                                        <p className="mb-2 text-fern-600 font-medium">
                                                                            Anda
                                                                            melunasi:{" "}
                                                                            <span className="font-bold">
                                                                                {orderResult.merch_type ===
                                                                                "short"
                                                                                    ? "Lengan Pendek"
                                                                                    : "Lengan Panjang"}
                                                                            </span>{" "}
                                                                            -
                                                                            Size{" "}
                                                                            {
                                                                                orderResult.size
                                                                            }{" "}
                                                                            x{" "}
                                                                            {
                                                                                orderResult.quantity
                                                                            }{" "}
                                                                            pcs
                                                                        </p>
                                                                        Silakan
                                                                        transfer
                                                                        sisa
                                                                        pembayaran
                                                                        ke
                                                                        rekening
                                                                        yang
                                                                        sama,
                                                                        lalu
                                                                        upload
                                                                        bukti
                                                                        transfer
                                                                        di bawah
                                                                        ini.
                                                                    </div>
                                                                </div>

                                                                <div className="bg-white p-3 rounded-xl border border-fern-200 relative group shadow-sm">
                                                                    <div className="flex justify-between items-start mb-2">
                                                                        <div className="flex items-center gap-2">
                                                                            <CreditCard
                                                                                size={
                                                                                    16
                                                                                }
                                                                                className="text-fern-600"
                                                                            />
                                                                            <span className="text-[10px] font-bold text-fern-600 tracking-widest">
                                                                                BANK
                                                                                BNI
                                                                            </span>
                                                                        </div>
                                                                        <button
                                                                            type="button"
                                                                            onClick={
                                                                                handleCopyRekening
                                                                            }
                                                                            className="text-[9px] bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded text-fern-500 hover:text-fern-700 transition-colors flex items-center gap-1 border border-gray-100"
                                                                        >
                                                                            {copied ? (
                                                                                <Check
                                                                                    size={
                                                                                        10
                                                                                    }
                                                                                />
                                                                            ) : (
                                                                                <Copy
                                                                                    size={
                                                                                        10
                                                                                    }
                                                                                />
                                                                            )}{" "}
                                                                            {copied
                                                                                ? "Copied"
                                                                                : "Copy"}
                                                                        </button>
                                                                    </div>
                                                                    <p className="text-base font-mono font-bold text-fern-800 tracking-wider mb-1">
                                                                        1852351666
                                                                    </p>
                                                                    <p className="text-[9px] text-fern-400 uppercase tracking-wide">
                                                                        SERLY
                                                                        SAFIRA
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="bg-white p-4 rounded-2xl border border-fern-100 shadow-sm space-y-4">
                                                                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-fern-500 hover:bg-[#fff8e5] transition-all group overflow-hidden relative">
                                                                    {repaymentPreview ? (
                                                                        <>
                                                                            <img
                                                                                src={
                                                                                    repaymentPreview
                                                                                }
                                                                                className="w-full h-full object-cover"
                                                                            />
                                                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                                                <p className="text-white text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                                                                    Ubah
                                                                                    Foto
                                                                                </p>
                                                                            </div>
                                                                        </>
                                                                    ) : (
                                                                        <div className="flex flex-col items-center justify-center text-center p-4">
                                                                            <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                                                                <UploadCloud
                                                                                    size={
                                                                                        20
                                                                                    }
                                                                                    className="text-gray-400 group-hover:text-fern-600"
                                                                                />
                                                                            </div>
                                                                            <p className="text-xs font-bold text-gray-600 group-hover:text-fern-700">
                                                                                Klik
                                                                                untuk
                                                                                Upload
                                                                            </p>
                                                                            <p className="text-[10px] text-gray-400 mt-1">
                                                                                JPG/PNG
                                                                                Max
                                                                                1MB
                                                                            </p>
                                                                        </div>
                                                                    )}
                                                                    <input
                                                                        type="file"
                                                                        className="hidden"
                                                                        accept="image/*"
                                                                        onChange={
                                                                            handleRepaymentFileChange
                                                                        }
                                                                    />
                                                                </label>

                                                                <button
                                                                    onClick={
                                                                        handleSubmitRepayment
                                                                    }
                                                                    disabled={
                                                                        processing ||
                                                                        !repaymentProof
                                                                    }
                                                                    className="w-full py-3.5 bg-gradient-to-r from-frosted-mint-600 to-fern-600 text-white font-bold rounded-xl shadow-md disabled:opacity-70 flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                                                                >
                                                                    {processing ? (
                                                                        <Loader2
                                                                            size={
                                                                                18
                                                                            }
                                                                            className="animate-spin"
                                                                        />
                                                                    ) : (
                                                                        <CheckCircle2
                                                                            size={
                                                                                18
                                                                            }
                                                                        />
                                                                    )}
                                                                    <span>
                                                                        Kirim
                                                                        Bukti
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}

                                                {orderResult.payment_type ===
                                                    "dp" &&
                                                    orderResult.repayment_proof && (
                                                        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 text-center animate-in zoom-in-95">
                                                            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                                                <Check
                                                                    size={24}
                                                                    className="text-emerald-600"
                                                                />
                                                            </div>
                                                            <h5 className="font-bold text-emerald-900 mb-1">
                                                                Bukti Diterima
                                                            </h5>
                                                            <p className="text-xs text-emerald-700 leading-relaxed px-4">
                                                                Terima kasih!
                                                                Admin sedang
                                                                memverifikasi
                                                                pembayaran Anda.
                                                                Silakan cek
                                                                berkala.
                                                            </p>
                                                        </div>
                                                    )}

                                                {orderResult.payment_type ===
                                                    "lunas" && (
                                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100 text-center relative overflow-hidden">
                                                        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-16 h-16 bg-green-100 rounded-full blur-xl opacity-50"></div>
                                                        <Package
                                                            size={32}
                                                            className="mx-auto mb-3 text-green-600"
                                                        />
                                                        <h5 className="font-black text-green-900 text-lg mb-1">
                                                            LUNAS
                                                        </h5>
                                                        <p className="text-xs text-green-700">
                                                            Pesanan Anda sudah
                                                            lunas dan siap
                                                            diproses.
                                                        </p>
                                                    </div>
                                                )}

                                                <button
                                                    onClick={() => {
                                                        setOrderResult(null);
                                                        setCheckPhone("");
                                                    }}
                                                    className="w-full py-3 text-xs font-bold text-gray-400 hover:text-fern-600 transition-colors border-t border-dashed border-gray-200 mt-4"
                                                >
                                                    Cari Nomor Lain
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSuccessModal && (
                    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccessModal(false)}
                            className="absolute inset-0 bg-dark-spruce-950/60 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-sm bg-white rounded-3xl p-6 text-center shadow-2xl z-10"
                        >
                            <div className="w-16 h-16 bg-frosted-mint-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2
                                    size={32}
                                    className="text-fern-600"
                                />
                            </div>
                            <h3 className="text-xl font-black text-fern-900 mb-2">
                                {successMessage}
                            </h3>
                            <p className="text-sm text-fern-600 mb-6">
                                Terima kasih! Jangan lupa gabung grup WA untuk
                                info pengiriman.
                            </p>

                            <a
                                href="https://chat.whatsapp.com/KSMKVfqhrmL42ZsUBRba95"
                                target="_blank"
                                rel="noreferrer"
                                className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-200 active:scale-[0.98] mb-3"
                            >
                                <MessageCircle size={20} />
                                <span>Join Grup WhatsApp</span>
                            </a>

                            <button
                                onClick={() => setShowSuccessModal(false)}
                                className="w-full py-3 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                Tutup
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MerchModal;
