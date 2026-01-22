import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Search,
    Filter,
    CheckCircle2,
    XCircle,
    Clock,
    MoreHorizontal,
    Eye,
    Download,
    Shirt,
    CreditCard,
    Calendar,
    X,
    ZoomIn,
    Heart,
    TrendingUp,
    Package,
    ArrowUpRight,
    FileSpreadsheet,
} from "lucide-react";
import { Head } from "@inertiajs/react";

export default function Dashboard({ orders, stats }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [zoomedImage, setZoomedImage] = useState(null);

    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

    const totalShort = orders
        .filter((o) => o.merch_type === "short")
        .reduce((acc, curr) => acc + curr.quantity, 0);
    const totalLong = orders
        .filter((o) => o.merch_type === "long")
        .reduce((acc, curr) => acc + curr.quantity, 0);

    const shortSizeStats = sizes.reduce((acc, size) => {
        acc[size] = orders
            .filter((o) => o.merch_type === "short" && o.size === size)
            .reduce((sum, curr) => sum + curr.quantity, 0);
        return acc;
    }, {});

    const longSizeStats = sizes.reduce((acc, size) => {
        acc[size] = orders
            .filter((o) => o.merch_type === "long" && o.size === size)
            .reduce((sum, curr) => sum + curr.quantity, 0);
        return acc;
    }, {});

    const filteredOrders = orders.filter(
        (order) =>
            order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.phone.includes(searchTerm),
    );

    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(number);
    };

    const handleStatusUpdate = (id, status) => {
        if (confirm(`Yakin ingin mengubah status menjadi ${status}?`)) {
            const url =
                status === "verified"
                    ? `/admin/order/${id}/verify`
                    : `/admin/order/${id}/reject`;

            router.post(
                url,
                {},
                {
                    onSuccess: () => setSelectedOrder(null),
                },
            );
        }
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] p-6 md:p-8 font-sans text-slate-800 flex flex-col">
            <Head title="Admin Dashboard - ELCCO 2026" />
            <div className="max-w-7xl mx-auto w-full mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        <div className="p-3.5 bg-white rounded-2xl shadow-sm border border-slate-200">
                            <LayoutDashboard
                                className="text-fern-600"
                                size={28}
                            />
                        </div>
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                                Dashboard
                            </h1>
                            <p className="text-sm text-slate-500 font-medium">
                                Overview Penjualan Merchandise
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="/admin/export"
                            target="_blank"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full shadow-lg shadow-emerald-200 flex items-center gap-2 transition-all active:scale-95 font-bold text-sm"
                        >
                            <FileSpreadsheet size={18} />
                            Export Excel
                        </a>
                        <div className="bg-white px-5 py-2.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-xs font-bold text-slate-600">
                                System Online
                            </span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-fern-700 to-emerald-600 p-6 rounded-3xl shadow-lg shadow-fern-200/50 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={120} />
                        </div>
                        <div className="relative z-10">
                            <p className="text-fern-100 font-medium text-sm mb-1">
                                Total Pendapatan (Verified)
                            </p>
                            <h2 className="text-4xl font-black tracking-tight">
                                {formatRupiah(stats.revenue)}
                            </h2>
                            <div className="mt-4 flex gap-2">
                                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                                    {stats.total_orders} Transaksi Total
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between hover:border-amber-200 transition-colors group">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-amber-50 rounded-2xl text-amber-600 group-hover:bg-amber-100 transition-colors">
                                <Clock size={24} />
                            </div>
                            <span className="flex items-center text-[10px] font-bold bg-slate-50 px-2 py-1 rounded text-slate-400">
                                ACTION NEEDED
                            </span>
                        </div>
                        <div>
                            <h3 className="text-3xl font-black text-slate-800 mt-4">
                                {stats.pending}
                            </h3>
                            <p className="text-sm text-slate-500 font-medium">
                                Pesanan Menunggu Verifikasi
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-center">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                            Total Terjual (Pcs)
                        </p>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-bold text-slate-600 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>{" "}
                                    Lengan Pendek
                                </span>
                                <span className="text-lg font-black text-slate-800">
                                    {totalShort}
                                </span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-500"
                                    style={{
                                        width: `${(totalShort / (totalShort + totalLong || 1)) * 100}%`,
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-between items-center pt-1">
                                <span className="text-sm font-bold text-slate-600 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>{" "}
                                    Lengan Panjang
                                </span>
                                <span className="text-lg font-black text-slate-800">
                                    {totalLong}
                                </span>
                            </div>
                            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-purple-500"
                                    style={{
                                        width: `${(totalLong / (totalShort + totalLong || 1)) * 100}%`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-blue-100">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                Lengan Pendek (Pcs)
                            </p>
                        </div>
                        {/* UPDATE GRID COLS JADI 6 AGAR XS MUAT */}
                        <div className="grid grid-cols-6 gap-2 text-center divide-x divide-slate-100">
                            {Object.entries(shortSizeStats).map(
                                ([size, qty]) => (
                                    <div
                                        key={size}
                                        className="flex flex-col items-center group cursor-default"
                                    >
                                        <span className="text-xs font-bold text-slate-400 mb-1 group-hover:text-blue-600 transition-colors">
                                            {size}
                                        </span>
                                        <span className="text-xl font-black text-slate-800">
                                            {qty}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-purple-100">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                Lengan Panjang (Pcs)
                            </p>
                        </div>
                        {/* UPDATE GRID COLS JADI 6 AGAR XS MUAT */}
                        <div className="grid grid-cols-6 gap-2 text-center divide-x divide-slate-100">
                            {Object.entries(longSizeStats).map(
                                ([size, qty]) => (
                                    <div
                                        key={size}
                                        className="flex flex-col items-center group cursor-default"
                                    >
                                        <span className="text-xs font-bold text-slate-400 mb-1 group-hover:text-purple-600 transition-colors">
                                            {size}
                                        </span>
                                        <span className="text-xl font-black text-slate-800">
                                            {qty}
                                        </span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex-1 flex flex-col">
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-white sticky top-0 z-10">
                    <h3 className="font-bold text-lg text-slate-800">
                        Daftar Pesanan
                    </h3>
                    <div className="relative w-full md:w-80 group">
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-fern-600 transition-colors"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Cari nama, no HP..."
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-fern-500 focus:bg-white transition-all text-sm font-medium"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/80 text-[11px] text-slate-500 uppercase tracking-wider border-b border-slate-100">
                                <th className="p-4 pl-6 font-bold">Tanggal</th>
                                <th className="p-4 font-bold">Pemesan</th>
                                <th className="p-4 font-bold">Detail Item</th>
                                <th className="p-4 font-bold">Metode</th>
                                <th className="p-4 font-bold text-center">
                                    Status
                                </th>
                                <th className="p-4 pr-6 font-bold text-right">
                                    Opsi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50 text-sm">
                            {filteredOrders.map((order) => (
                                <tr
                                    key={order.id}
                                    className="hover:bg-slate-50/60 transition-colors group"
                                >
                                    <td className="p-4 pl-6 text-slate-500 whitespace-nowrap font-mono text-xs">
                                        {new Date(
                                            order.created_at,
                                        ).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                        <div className="text-[10px] opacity-60">
                                            {new Date(
                                                order.created_at,
                                            ).toLocaleTimeString("id-ID", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="font-bold text-slate-900">
                                            {order.name}
                                        </p>
                                        <p className="text-xs text-slate-500 font-mono mt-0.5">
                                            {order.phone}
                                        </p>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-8 h-8 rounded-lg flex items-center justify-center ${order.merch_type === "short" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"}`}
                                            >
                                                <Shirt size={16} />
                                            </div>
                                            <div>
                                                <div className="flex gap-2 items-center">
                                                    <span className="font-bold text-slate-700 capitalize">
                                                        {order.merch_type ===
                                                        "short"
                                                            ? "Lengan Pendek"
                                                            : "Lengan Panjang"}
                                                    </span>
                                                    <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500 font-bold">
                                                        Size {order.size}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-slate-400">
                                                    Qty: {order.quantity} pcs
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span
                                            className={`px-2.5 py-1 rounded-lg text-[11px] font-black uppercase tracking-wide border ${order.payment_type === "lunas" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-orange-50 text-orange-700 border-orange-100"}`}
                                        >
                                            {order.payment_type}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">
                                        {order.status === "pending" && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-yellow-50 text-yellow-700 border border-yellow-200">
                                                <Clock size={12} /> Pending
                                            </span>
                                        )}
                                        {order.status === "verified" && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                                <CheckCircle2 size={12} />{" "}
                                                Verified
                                            </span>
                                        )}
                                        {order.status === "rejected" && (
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
                                                <XCircle size={12} /> Rejected
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4 pr-6 text-right">
                                        <button
                                            onClick={() =>
                                                setSelectedOrder(order)
                                            }
                                            className="text-slate-600 hover:text-fern-700 hover:bg-fern-50 border border-slate-200 hover:border-fern-200 font-bold text-xs px-4 py-2 rounded-xl transition-all flex items-center gap-2 ml-auto"
                                        >
                                            Review
                                            <ArrowUpRight
                                                size={14}
                                                className="opacity-50"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {filteredOrders.length === 0 && (
                        <div className="p-16 text-center">
                            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Package size={32} className="text-slate-300" />
                            </div>
                            <p className="text-slate-500 font-medium">
                                Tidak ada pesanan ditemukan.
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <div className="max-w-7xl mx-auto w-full mt-8 text-center pb-4">
                <p className="text-sm text-fern-700 font-bold mb-1 flex items-center justify-center gap-2">
                    Semangat Panitia ELCCO 2026 🔥
                </p>
                <p className="text-xs text-slate-400 font-mono flex items-center justify-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-default">
                    Code with{" "}
                    <Heart size={12} className="fill-red-400 text-red-400" /> by
                    Rama Devantara
                </p>
            </div>

            <AnimatePresence>
                {selectedOrder && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedOrder(null)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="relative bg-white rounded-[2rem] w-full max-w-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh] border border-white/20"
                        >
                            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                        Order ID
                                    </p>
                                    <h3 className="text-2xl font-black text-slate-900 font-mono">
                                        #
                                        {selectedOrder.id
                                            .toString()
                                            .padStart(4, "0")}
                                    </h3>
                                </div>
                                <button
                                    onClick={() => setSelectedOrder(null)}
                                    className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 overflow-y-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <div className="w-1 h-4 bg-fern-500 rounded-full"></div>
                                                Data Pemesan
                                            </h4>
                                            <div className="bg-slate-50 p-5 rounded-2xl space-y-4 border border-slate-100">
                                                <div>
                                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                                                        Nama Lengkap
                                                    </p>
                                                    <p className="font-bold text-slate-800 text-lg">
                                                        {selectedOrder.name}
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                                                            WhatsApp
                                                        </p>
                                                        <p className="font-mono text-slate-700 font-medium">
                                                            {
                                                                selectedOrder.phone
                                                            }
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                                                            Tanggal
                                                        </p>
                                                        <p className="font-mono text-slate-700 font-medium">
                                                            {new Date(
                                                                selectedOrder.created_at,
                                                            ).toLocaleDateString(
                                                                "id-ID",
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                                <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                                                Item Detail
                                            </h4>
                                            <div className="flex gap-4 p-4 border border-slate-100 rounded-2xl hover:border-blue-200 transition-colors">
                                                <div
                                                    className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${selectedOrder.merch_type === "short" ? "bg-blue-50 text-blue-500" : "bg-purple-50 text-purple-500"}`}
                                                >
                                                    <Shirt size={32} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <p className="font-bold text-slate-900 capitalize">
                                                                {selectedOrder.merch_type ===
                                                                "short"
                                                                    ? "Lengan Pendek"
                                                                    : "Lengan Panjang"}
                                                            </p>
                                                            <p className="text-sm text-slate-500 mt-1">
                                                                Size{" "}
                                                                {
                                                                    selectedOrder.size
                                                                }
                                                            </p>
                                                            <p className="text-xs text-slate-400 font-medium mt-1 font-mono">
                                                                {selectedOrder.payment_type ===
                                                                "lunas"
                                                                    ? `@ ${formatRupiah(selectedOrder.merch_type === "short" ? 120000 : 150000)} (Full)`
                                                                    : `@ ${formatRupiah(selectedOrder.merch_type === "short" ? 70000 : 90000)} (DP)`}
                                                            </p>
                                                        </div>
                                                        <span className="text-xl font-black text-slate-800">
                                                            x
                                                            {
                                                                selectedOrder.quantity
                                                            }
                                                        </span>
                                                    </div>
                                                    {selectedOrder.payment_type ===
                                                        "dp" && (
                                                        <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                                                            <span className="text-slate-400 font-bold">
                                                                Total DP Masuk
                                                            </span>
                                                            <span className="font-bold text-fern-600 bg-fern-50 px-2 py-0.5 rounded">
                                                                {formatRupiah(
                                                                    (selectedOrder.merch_type ===
                                                                    "short"
                                                                        ? 70000
                                                                        : 90000) *
                                                                        selectedOrder.quantity,
                                                                )}
                                                            </span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                            <div className="w-1 h-4 bg-orange-500 rounded-full"></div>
                                            Bukti Transfer
                                        </h4>

                                        {/* Bukti Utama */}
                                        <div
                                            className="group relative h-48 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 cursor-zoom-in shadow-inner"
                                            onClick={() =>
                                                setZoomedImage(
                                                    "/storage/" +
                                                        selectedOrder.payment_proof,
                                                )
                                            }
                                        >
                                            <img
                                                src={
                                                    "/storage/" +
                                                    selectedOrder.payment_proof
                                                }
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <ZoomIn
                                                    className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all"
                                                    size={32}
                                                />
                                            </div>
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-slate-800 shadow-sm border border-white/50">
                                                    PEMBAYARAN 1 (
                                                    {selectedOrder.payment_type.toUpperCase()}
                                                    )
                                                </span>
                                            </div>
                                        </div>

                                        {/* Bukti Pelunasan */}
                                        {selectedOrder.repayment_proof ? (
                                            <div
                                                className="group relative h-48 bg-emerald-50 rounded-2xl overflow-hidden border border-emerald-200 cursor-zoom-in shadow-inner"
                                                onClick={() =>
                                                    setZoomedImage(
                                                        "/storage/" +
                                                            selectedOrder.repayment_proof,
                                                    )
                                                }
                                            >
                                                <img
                                                    src={
                                                        "/storage/" +
                                                        selectedOrder.repayment_proof
                                                    }
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <ZoomIn
                                                        className="text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all"
                                                        size={32}
                                                    />
                                                </div>
                                                <div className="absolute top-3 left-3">
                                                    <span className="bg-emerald-500/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-white shadow-sm border border-white/20">
                                                        BUKTI PELUNASAN
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            selectedOrder.payment_type ===
                                                "dp" && (
                                                <div className="h-32 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
                                                    <Clock
                                                        size={24}
                                                        className="mb-2 opacity-50"
                                                    />
                                                    <p className="text-xs font-medium">
                                                        Belum ada bukti
                                                        pelunasan
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3 justify-end items-center">
                                {selectedOrder.status === "verified" &&
                                selectedOrder.payment_type === "lunas" ? (
                                    <div className="w-full flex justify-between items-center bg-green-100/50 px-4 py-3 rounded-xl border border-green-200">
                                        <span className="flex items-center gap-2 text-green-700 font-bold text-sm">
                                            <CheckCircle2
                                                size={18}
                                                className="fill-green-600 text-white"
                                            />
                                            Pesanan LUNAS & Terverifikasi
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleStatusUpdate(
                                                    selectedOrder.id,
                                                    "pending",
                                                )
                                            }
                                            className="text-xs text-green-600 underline hover:text-green-800"
                                        >
                                            Batalkan
                                        </button>
                                    </div>
                                ) : selectedOrder.status === "verified" &&
                                  selectedOrder.payment_type === "dp" ? (
                                    <div className="w-full flex justify-between items-center bg-blue-50 px-4 py-3 rounded-xl border border-blue-100">
                                        <span className="flex items-center gap-2 text-blue-700 font-bold text-sm">
                                            <Clock size={18} />
                                            DP Terverifikasi. Menunggu Pelunasan
                                            User.
                                        </span>
                                        <button
                                            onClick={() =>
                                                handleStatusUpdate(
                                                    selectedOrder.id,
                                                    "pending",
                                                )
                                            }
                                            className="text-xs text-blue-600 underline hover:text-blue-800"
                                        >
                                            Batalkan Verifikasi DP
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mr-auto text-xs text-slate-400 font-medium hidden md:block">
                                            Pastikan bukti valid sebelum
                                            verifikasi.
                                        </div>

                                        {selectedOrder.status !==
                                            "rejected" && (
                                            <button
                                                onClick={() =>
                                                    handleStatusUpdate(
                                                        selectedOrder.id,
                                                        "rejected",
                                                    )
                                                }
                                                className="px-6 py-3 bg-white border border-red-100 text-red-500 font-bold rounded-xl hover:bg-red-50 hover:border-red-200 transition-all text-sm shadow-sm"
                                            >
                                                Tolak
                                            </button>
                                        )}

                                        <button
                                            onClick={() =>
                                                handleStatusUpdate(
                                                    selectedOrder.id,
                                                    "verified",
                                                )
                                            }
                                            className="px-8 py-3 bg-gradient-to-r from-fern-600 to-emerald-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-fern-200 hover:-translate-y-0.5 transition-all text-sm flex items-center gap-2"
                                        >
                                            <CheckCircle2 size={18} />
                                            {selectedOrder.payment_type ===
                                                "dp" &&
                                            selectedOrder.repayment_proof
                                                ? "Verifikasi Pelunasan"
                                                : "Verifikasi Pesanan"}
                                        </button>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {zoomedImage && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out backdrop-blur-xl">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full h-full flex items-center justify-center"
                        >
                            <img
                                src={zoomedImage}
                                className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                            />
                            <button
                                onClick={() => setZoomedImage(null)}
                                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
