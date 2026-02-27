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
        $table->float('t1_score')->default(0); 
        $table->float('t2_score')->default(0); 
        $table->float('t3_score')->default(0); 
        
     
        $table->integer('t1_time_used')->nullable();
        $table->integer('t2_time_used')->nullable();
        $table->integer('t3_time_used')->nullable();
   
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
