<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ElsmartTeam extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_name',
        'school_name',
        'ketua_name',
        'anggota1_name',
        'anggota2_name',
        'password',
        't1_score',
        't2_score',
        't3_score',
        't1_time_used',
        't2_time_used',
        't3_time_used',
        'current_stage',
    ];

    protected $hidden = [
        'password',
    ];
}