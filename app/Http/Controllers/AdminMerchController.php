<?php

namespace App\Http\Controllers;

use App\Models\MerchOrder;
use App\Exports\MerchOrdersExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminMerchController extends Controller
{
    public function index()
    {
        
        $orders = MerchOrder::latest()->get();

        $totalRevenue = $orders->where('status', 'verified')->sum(function ($order) {
            $price = 0;

            
            $shortFull = 120000;
            $shortDP = 70000;
            $longFull = 150000;
            $longDP = 90000;
            
            if ($order->merch_type === 'short') {
           
                $price = ($order->payment_type === 'lunas') ? $shortFull : $shortDP;
            } else {
               
                $price = ($order->payment_type === 'lunas') ? $longFull : $longDP;
            }
            
            return $price * $order->quantity;
        });

        return Inertia::render('Admin/Dashboard', [
            'orders' => $orders,
            'stats' => [
                'total_orders' => $orders->count(),
                'pending' => $orders->where('status', 'pending')->count(),
                'revenue' => $totalRevenue
            ]
        ]);
    }

  
    public function verify($id)
    {
        $order = MerchOrder::findOrFail($id);

   
        $updateData = ['status' => 'verified'];

       
        if ($order->payment_type === 'dp' && $order->repayment_proof) {
            $updateData['payment_type'] = 'lunas';
        }

        $order->update($updateData);

        return redirect()->back();
    }

    public function reject($id)
    {
        MerchOrder::findOrFail($id)->update(['status' => 'rejected']);
        return redirect()->back();
    }

    public function export()
    {
        return Excel::download(new MerchOrdersExport, 'rekap_pesanan_elcco.xlsx');
    }
}