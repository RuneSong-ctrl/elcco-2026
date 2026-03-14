<?php

namespace App\Http\Controllers;

use App\Models\ElsmartTeam;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;

class AdminAuthController extends Controller
{
    public function showLoginForm()
    {
        if (Session::has('admin_user')) {
            if (Session::get('admin_user') === 'Game Master LCC' || Session::get('admin_user') === 'Game Master ELSMART'){
                return redirect()->route('admin.elsmart.dashboard');
            }
            return redirect()->route('admin.dashboard');
        }
        
        return Inertia::render('Admin/Login');
    }

    public function login(Request $request)
    {
        $allowedAdmins = [
            'SuperAdminELCCO',
            'Sekretaris ELCCO',
            'Bendahara ELCCO',
            'Game Master ELSMART',
            'Game Master LCC',
        ];

        $globalPassword = 'FosteringTheYouth2026';

        if (in_array($request->username, $allowedAdmins) && $request->password === $globalPassword) {
            Session::put('admin_user', $request->username);
            
            if (in_array($request->username, ['Game Master ELSMART', 'Game Master LCC'])) {
                return redirect()->route('admin.elsmart.dashboard');
            }
            
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors(['login' => 'Username atau Password salah!']);
    }

    public function logout()
    {
        Session::forget('admin_user');
        return redirect()->route('admin.login');
    }

    public function elsmartDashboard()
    {
        $user = Session::get('admin_user');
        
        if (!$user || !in_array($user, ['SuperAdminELCCO', 'Game Master ELSMART', 'Game Master LCC'])) {
            return redirect()->route('admin.dashboard')->withErrors(['akses' => 'Anda tidak memiliki akses ke halaman ini.']);
        }

        $teams = ElsmartTeam::all()->map(function($team) {
            $t1 = $team->t1_score ?? 0;
            $t2 = $team->t2_score ?? 0;
            $t3 = $team->t3_score ?? 0;
            $total = $t1 + $t2 + $t3;

            return [
                'id' => $team->id,
                'name' => $team->team_name,
                'school' => $team->school_name,
                'ketua' => $team->ketua_name,
                't1' => $t1,
                't2' => $t2,
                't3' => $t3,
                'total' => $total,
                'status' => ($team->current_stage === 'finished' || $t3 > 0) ? 'Selesai' : 'Terdaftar' 
            ];
        });

        $gameStatus = [
            'stage_1' => Cache::get('elsmart_stage_1', false),
            'stage_2' => Cache::get('elsmart_stage_2', false),
            'stage_3' => Cache::get('elsmart_stage_3', false),
        ];

        return Inertia::render('Admin/ElsmartDashboard', [
            'admin_name' => $user,
            'registeredTeams' => $teams,
            'gameStatus' => $gameStatus
        ]);
    }

    public function toggleStage(Request $request)
    {
        $stageId = $request->input('id');
        $status = $request->input('isOpen');

        Cache::put('elsmart_stage_' . $stageId, $status, now()->addHours(24));

        return response()->json(['success' => true]);
    }
    public function resetPassword(Request $request)
    {
        $team = ElsmartTeam::find($request->input('id'));
        if ($team) {
            $team->password = Hash::make('0000');
            $team->save();
            return back()->with('success', 'Password berhasil direset menjadi 0000');
        }
        return back()->withErrors(['error' => 'Tim tidak ditemukan.']);
    }

    
    public function deleteTeam(Request $request)
    {
        $team = ElsmartTeam::find($request->input('id'));
        if ($team) {
            $team->delete();
            return back()->with('success', 'Akun tim berhasil dihapus.');
        }
        return back()->withErrors(['error' => 'Tim tidak ditemukan.']);
    }
}