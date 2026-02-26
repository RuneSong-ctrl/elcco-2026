<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
{
    Schema::create('elsmart_teams', function (Blueprint $table) {
        $table->id();
        $table->string('team_name')->unique();
        $table->string('school_name');
        $table->string('ketua_name');
        $table->string('anggota1_name')->nullable();
        $table->string('anggota2_name')->nullable();
        $table->string('password');
        $table->timestamps();
    });
}

    public function down(): void
    {
        Schema::dropIfExists('elsmart_teams');
    }
};