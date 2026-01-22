<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('merch_orders', function (Blueprint $table) {
        $table->id();
        $table->string('name');
        $table->string('phone');
        $table->string('size');
        $table->integer('quantity');
        $table->enum('payment_type', ['lunas', 'dp']);
        $table->string('payment_proof'); 
        $table->string('merch_type');
        $table->enum('status', ['pending', 'verified', 'rejected'])->default('pending');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('merch_orders');
    }
};
