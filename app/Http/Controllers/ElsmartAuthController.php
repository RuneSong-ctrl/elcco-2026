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

        if ($team && $request->password === $team->password) {
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

        return Inertia::render('Elsmart/Dashboard', [
            'team_name' => session('elsmart_team_name')
        ]);
    }
}