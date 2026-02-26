<?php

namespace App\Http\Controllers;
use App\Models\ElsmartTeam;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{
    public function showLoginForm()
    {
        if (Session::has('admin_user')) {
   
            if (Session::get('admin_user') === 'Game Master ELSMART') {
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
            'Game Master ELSMART' 
        ];

        $globalPassword = 'FosteringTheYouth2026';

        if (in_array($request->username, $allowedAdmins) && $request->password === $globalPassword) {
            
            Session::put('admin_user', $request->username);
            
            
            if ($request->username === 'Game Master ELSMART') {
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
        
      
        if (!$user || !in_array($user, ['SuperAdminELCCO', 'Game Master ELSMART'])) {
            return redirect()->route('admin.dashboard')->withErrors(['akses' => 'Anda tidak memiliki akses ke halaman ini.']);
        }

     
        $teams = ElsmartTeam::all()->map(function($team) {
            return [
                'id' => $team->id,
                'name' => $team->team_name,
                'school' => $team->school_name,
                'ketua' => $team->ketua_name,

                't1' => 0, 
                't2' => 0,
                't3' => 0,
                'total' => 0,
                'status' => 'Terdaftar' 
            ];
        });

        return Inertia::render('Admin/ElsmartDashboard', [
            'admin_name' => $user,
            'registeredTeams' => $teams 
        ]);
    }
}
