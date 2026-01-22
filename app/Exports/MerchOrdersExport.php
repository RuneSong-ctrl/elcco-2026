<?php

namespace App\Exports;

use App\Models\MerchOrder;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class MerchOrdersExport implements FromCollection, WithHeadings, WithMapping, ShouldAutoSize, WithStyles
{
    public function collection()
    {
        return MerchOrder::all();
    }

    public function headings(): array
    {
        return [
            'ID',
            'Tanggal Order',
            'Nama Pemesan',
            'No. WhatsApp',
            'Item',
            'Ukuran',
            'Qty',
            'Metode Bayar',
            'Harga DP (Satuan)',
            'Harga Full (Satuan)',
            'Total Uang Masuk',
            'Sisa Tagihan',
            'Status Order',
        ];
    }

    public function map($order): array
    {
        $shortFull = 120000;
        $shortDP = 70000;
        $longFull = 150000;
        $longDP = 90000;

        $dpPrice = 0;
        $fullPrice = 0;

        if ($order->merch_type === 'short') {
            $dpPrice = $shortDP;
            $fullPrice = $shortFull;
        } else {
            $dpPrice = $longDP;
            $fullPrice = $longFull;
        }

        $moneyIn = 0;
        $remaining = 0;

        if ($order->payment_type === 'lunas') {
            $moneyIn = $fullPrice * $order->quantity;
            $remaining = 0;
        } else {
            $moneyIn = $dpPrice * $order->quantity;
            $remaining = ($fullPrice - $dpPrice) * $order->quantity;
        }

        return [
            $order->id,
            $order->created_at->format('d-m-Y H:i'),
            $order->name,
            "'" . $order->phone,
            $order->merch_type === 'short' ? 'Lengan Pendek' : 'Lengan Panjang',
            $order->size,
            $order->quantity,
            strtoupper($order->payment_type),
            $dpPrice,
            $fullPrice,
            $moneyIn,
            $remaining,
            strtoupper($order->status),
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => ['font' => ['bold' => true]],
        ];
    }
}