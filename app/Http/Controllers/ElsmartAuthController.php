<?php

namespace App\Http\Controllers;

use App\Models\ElsmartTeam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Illuminate\Support\Facades\Cache;

class ElsmartAuthController extends Controller
{
    public function showLogin()
    {
        if (session()->has('elsmart_team_id')) {
            return redirect()->route('elsmart.dashboard');
        }

        return Inertia::render('Elsmart/Login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'team_name' => 'required|string',
            'password' => 'required|string',
        ]);

        $team = ElsmartTeam::where('team_name', $request->team_name)->first();

        if ($team && Hash::check($request->password, $team->password)) {
            session([
                'elsmart_team_id' => $team->id,
                'elsmart_team_name' => $team->team_name
            ]);

            return redirect()->route('elsmart.dashboard');
        }

        return back()->withErrors([
            'team_name' => 'Nama tim atau password yang Anda masukkan salah.',
        ]);
    }

    public function showRegister()
    {
        if (session()->has('elsmart_team_id')) {
            return redirect()->route('elsmart.dashboard');
        }

        return Inertia::render('Elsmart/Register');
    }

    // INI ADALAH FUNGSI YANG HILANG SEBELUMNYA
    public function register(Request $request)
    {
        // 1. Validasi input dari form
        $request->validate([
            'team_name' => 'required|string|unique:elsmart_teams,team_name|max:255',
            'school_name' => 'required|string|max:255',
            'ketua_name' => 'required|string|max:255',
            'anggota1_name' => 'nullable|string|max:255',
            'anggota2_name' => 'nullable|string|max:255',
            'password' => 'required|string|min:6|confirmed',
        ], [
            'team_name.unique' => 'Nama tim ini sudah terdaftar.',
            'team_name.required' => 'Nama tim wajib diisi.',
            'school_name.required' => 'Asal instansi wajib diisi.',
            'ketua_name.required' => 'Nama ketua wajib diisi.',
            'password.min' => 'Password minimal 6 karakter.',
            'password.confirmed' => 'Konfirmasi password tidak cocok.',
        ]);

        // 2. Simpan ke database
        $team = ElsmartTeam::create([
            'team_name' => $request->team_name,
            'school_name' => $request->school_name,
            'ketua_name' => $request->ketua_name,
            'anggota1_name' => $request->anggota1_name,
            'anggota2_name' => $request->anggota2_name,
            'password' => Hash::make($request->password), // Password harus di-hash
        ]);

        // 3. Set session agar langsung login setelah daftar
        session([
            'elsmart_team_id' => $team->id,
            'elsmart_team_name' => $team->team_name
        ]);

        // 4. Arahkan ke dashboard
        return redirect()->route('elsmart.dashboard');
    }

    public function logout(Request $request)
    {
        $request->session()->forget(['elsmart_team_id', 'elsmart_team_name']);
        
        return redirect()->route('elsmart.login');
    }

public function dashboard()
    {
        if (!session()->has('elsmart_team_id')) {
            return redirect()->route('elsmart.login');
        }
        
        $team = ElsmartTeam::find(session('elsmart_team_id'));

        return Inertia::render('Elsmart/Dashboard', [
            'team_name' => $team->team_name,
            'school_name' => $team->school_name ?? 'Tidak ada data',
            'members' => [
                ['name' => $team->ketua_name ?? '-', 'role' => 'Ketua'],
                ['name' => $team->anggota1_name ?? '-', 'role' => 'Anggota 1'],
                ['name' => $team->anggota2_name ?? '-', 'role' => 'Anggota 2'],
            ]
        ]);
    }

    /**
     * TAHAP 1: Multiple Choice [cite: 111, 125]
     * 40 Soal, 30 Menit, Benar +2.5 
     */
   public function startStage1()
{
    
    if (!session()->has('elsmart_team_id')) {
        return redirect()->route('elsmart.login');
    }

    return Inertia::render('Elsmart/Quiz/MultipleChoice', [
        'team_name' => session('elsmart_team_name'),
    ]);
}

public function submitStage1(Request $request)
{
    // Ambil ID tim dari session login
    $teamId = session('elsmart_team_id');
    if (!$teamId) return response()->json(['error' => 'Unauthorized'], 401);

    $team = ElsmartTeam::find($teamId);

    // Simpan hasil sesuai data yang dikirim dari React
    $team->update([
        't1_score' => $request->score, // Poin maksimal 100 [cite: 128, 137]
        't1_time_used' => $request->time_used, // Digunakan untuk urutan ranking jika nilai sama [cite: 142]
        'current_stage' => 't2' // Lanjut ke tahap berikutnya [cite: 107]
    ]);

    return redirect()->route('elsmart.dashboard')->with('success', 'Tahap 1 Selesai!');
}

    /**
     * TAHAP 2: Find Words [cite: 112, 150]
     * 20 Kata, 15 Menit, Benar +5 
     */
    public function startStage2()
    {
        if (!session()->has('elsmart_team_id')) return redirect()->route('elsmart.login');

        return Inertia::render('Elsmart/Quiz/FindWords', [
            'config' => [
                'duration' => 15 * 60, // 15 menit dalam detik [cite: 170]
                'total_words' => 20, 
                'point_per_correct' => 5, 
            ]
        ]);
    }

    /**
     * TAHAP 3: Match The Box [cite: 113, 188]
     * 10 Pasang, 15 Menit, Benar +1 [cite: 204, 206, 210]
     */
    public function startStage3()
    {
        if (!session()->has('elsmart_team_id')) return redirect()->route('elsmart.login');

        return Inertia::render('Elsmart/Quiz/MatchTheBox', [
            'config' => [
                'duration' => 15 * 60, // 15 menit dalam detik [cite: 206]
                'total_pairs' => 10, 
                'point_per_correct' => 10, // Disesuaikan agar Max Nilai 100 [cite: 207]
            ]
        ]);
    }

    public function checkGameStatus()
    {
        return response()->json([
            'stage_1' => Cache::get('elsmart_stage_1', false),
            'stage_2' => Cache::get('elsmart_stage_2', false),
            'stage_3' => Cache::get('elsmart_stage_3', false),
        ]);
    }
}