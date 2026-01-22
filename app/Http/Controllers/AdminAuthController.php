<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{

    public function showLoginForm()
    {
       
        if (Session::has('admin_user')) {
            return redirect()->route('admin.dashboard');
        }
        return Inertia::render('Admin/Login');
    }

    // Proses Login
    public function login(Request $request)
    {
     
        $allowedAdmins = [
            'SuperAdminELCCO',
            'Sekretaris ELCCO',
            'Bendahara ELCCO' 
        ];

    
        $globalPassword = 'FosteringTheYouth2026';

        if (in_array($request->username, $allowedAdmins) && $request->password === $globalPassword) {
            
        
            Session::put('admin_user', $request->username);
            
          
            return redirect()->route('admin.dashboard');
        }

      
        return back()->withErrors(['login' => 'Username atau Password salah!']);
    }

 
    public function logout()
    {
        Session::forget('admin_user');
        return redirect()->route('admin.login');
    }
}