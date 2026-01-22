<?php

namespace App\Http\Controllers;

use App\Models\MerchOrder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class MerchOrderController extends Controller
{
    /**
     * 1. Membuat Pesanan Baru
     */
    public function store(Request $request)
    {
        
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'size' => 'required|string',
            'quantity' => 'required|integer|min:1',
            'paymentType' => 'required|in:lunas,dp',
            'paymentProof' => 'required|image|max:1024', 
        ]);

       
        $path = null;
        if ($request->hasFile('paymentProof')) {
            $path = $request->file('paymentProof')->store('payment_proofs', 'public');
        }

        // Simpan ke Database
        MerchOrder::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'size' => $request->size,
            'quantity' => $request->quantity,
            'payment_type' => $request->paymentType, 
            'payment_proof' => $path,
            'merch_type' => $request->merchType,
            'status' => 'pending', 
        ]);

        return redirect()->back()->with('message', 'Pesanan berhasil dibuat!');
    }

    /**
     * 2. Cek Pesanan (Dipanggil via Axios di Frontend)
     */
    public function check(Request $request)
    {
        $request->validate([
            'phone' => 'required|string',
        ]);

        
        $order = MerchOrder::where('phone', $request->phone)->first();

        if (!$order) {
           
            return response()->json(['message' => 'Nomor WhatsApp tidak ditemukan.'], 404);
        }

        
        return response()->json($order);
    }

    /**
     * 3. Upload Bukti Pelunasan
     */
    public function repayment(Request $request)
    {
        $request->validate([
            'phone' => 'required|string',
            'repaymentProof' => 'required|image|max:1024', 
        ]);

        
        $order = MerchOrder::where('phone', $request->phone)->firstOrFail();

        // Upload Gambar Pelunasan
        if ($request->hasFile('repaymentProof')) {
            $path = $request->file('repaymentProof')->store('repayment_proofs', 'public');

          
            $order->update([
                'repayment_proof' => $path,
            ]);
        }

        return redirect()->back()->with('message', 'Bukti pelunasan berhasil dikirim!');
    }
}