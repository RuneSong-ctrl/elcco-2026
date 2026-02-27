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

    public function register(Request $request)
    {
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

        $team = ElsmartTeam::create([
            'team_name' => $request->team_name,
            'school_name' => $request->school_name,
            'ketua_name' => $request->ketua_name,
            'anggota1_name' => $request->anggota1_name,
            'anggota2_name' => $request->anggota2_name,
            'password' => Hash::make($request->password),
        ]);

        session([
            'elsmart_team_id' => $team->id,
            'elsmart_team_name' => $team->team_name
        ]);

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
            'current_stage' => $team->current_stage,
            'members' => [
                ['name' => $team->ketua_name ?? '-', 'role' => 'Ketua'],
                ['name' => $team->anggota1_name ?? '-', 'role' => 'Anggota 1'],
                ['name' => $team->anggota2_name ?? '-', 'role' => 'Anggota 2'],
            ]
        ]);
    }

    public function startStage1()
    {
        if (!session()->has('elsmart_team_id')) {
            return redirect()->route('elsmart.login');
        }

        if (!Cache::get('elsmart_stage_1', false)) {
            return redirect()->route('elsmart.dashboard')->withErrors(['error' => 'Tahap 1 belum dibuka oleh Admin.']);
        }

        return Inertia::render('Elsmart/Quiz/MultipleChoice', [
            'team_name' => session('elsmart_team_name'),
            'config' => [
                'duration' => 30 * 60,
                'total_questions' => 40,
                'point_per_correct' => 2.5,
            ]
        ]);
    }

    public function submitStage1(Request $request)
    {
        $teamId = session('elsmart_team_id');
        if (!$teamId) return response()->json(['error' => 'Unauthorized'], 401);

        $team = ElsmartTeam::find($teamId);

        $team->update([
            't1_score' => $request->score,
            't1_time_used' => $request->time_used,
            'current_stage' => 't2'
        ]);

        return redirect()->route('elsmart.dashboard');
    }

    public function startStage2()
    {
        if (!session()->has('elsmart_team_id')) {
            return redirect()->route('elsmart.login');
        }

        if (!Cache::get('elsmart_stage_2', false)) {
            return redirect()->route('elsmart.dashboard')->withErrors(['error' => 'Tahap 2 belum dibuka oleh Admin.']);
        }

        return Inertia::render('Elsmart/Quiz/FindWords', [
            'team_name' => session('elsmart_team_name'),
            'config' => [
                'duration' => 15 * 60,
                'total_words' => 20,
                'point_per_correct' => 5,
            ]
        ]);
    }

    public function submitStage2(Request $request)
    {
        $teamId = session('elsmart_team_id');
        if (!$teamId) return response()->json(['error' => 'Unauthorized'], 401);

        $team = ElsmartTeam::find($teamId);

        $team->update([
            't2_score' => $request->score,
            't2_time_used' => $request->time_used,
            'current_stage' => 't3'
        ]);

        return redirect()->route('elsmart.dashboard');
    }

    public function startStage3()
    {
        if (!session()->has('elsmart_team_id')) {
            return redirect()->route('elsmart.login');
        }

        if (!Cache::get('elsmart_stage_3', false)) {
            return redirect()->route('elsmart.dashboard')->withErrors(['error' => 'Tahap 3 belum dibuka oleh Admin.']);
        }

        return Inertia::render('Elsmart/Quiz/MatchTheBox', [
            'team_name' => session('elsmart_team_name'),
            'config' => [
                'duration' => 15 * 60,
                'total_pairs' => 10,
                'point_per_correct' => 10,
            ]
        ]);
    }

    public function submitStage3(Request $request)
    {
        $teamId = session('elsmart_team_id');
        if (!$teamId) return response()->json(['error' => 'Unauthorized'], 401);

        $team = ElsmartTeam::find($teamId);

        $team->update([
            't3_score' => $request->score,
            't3_time_used' => $request->time_used,
            'current_stage' => 'finished'
        ]);

        return redirect()->route('elsmart.dashboard');
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