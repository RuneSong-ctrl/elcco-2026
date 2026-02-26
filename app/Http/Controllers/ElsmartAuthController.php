<?php

namespace App\Http\Controllers;

use App\Models\ElsmartTeam;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

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
                ['name' => $team->anggota2_name ?? '-', 'role' => 'Anggota 2',],
            ]
        ]);
    }
}