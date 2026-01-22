<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MerchOrder extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'phone',
        'size',
        'quantity',
        'payment_type',
        'payment_proof',
        'repayment_proof',
        'merch_type',
        'status',
    ];
}