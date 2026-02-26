<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
public function up()
{
    Schema::table('elsmart_teams', function (Blueprint $table) {
        // Kolom untuk menyimpan skor per tahap
        $table->float('t1_score')->default(0); // Tahap 1: Multiple Choice [cite: 125, 128]
        $table->float('t2_score')->default(0); // Tahap 2: Find Words [cite: 149, 171]
        $table->float('t3_score')->default(0); // Tahap 3: Match the Box [cite: 188, 208]
        
        // Kolom untuk menyimpan waktu pengerjaan (dalam detik) untuk tie-breaker [cite: 141]
        $table->integer('t1_time_used')->nullable();
        $table->integer('t2_time_used')->nullable();
        $table->integer('t3_time_used')->nullable();
        
        // Status pengerjaan
        $table->string('current_stage')->default('t1');
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('elsmart_teams', function (Blueprint $table) {
            //
        });
    }
};
