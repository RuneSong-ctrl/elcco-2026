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
    ];

    protected $hidden = [
        'password',
    ];
}