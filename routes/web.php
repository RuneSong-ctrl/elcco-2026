<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MerchOrderController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminMerchController;
use App\Http\Middleware\CheckAdminSession;
use App\Http\Controllers\ElsmartAuthController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/admin/login', [AdminAuthController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [AdminAuthController::class, 'login']);
Route::post('/admin/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
Route::get('/admin/elsmart-master', [AdminAuthController::class, 'elsmartDashboard'])->name('admin.elsmart.dashboard');

Route::middleware([CheckAdminSession::class])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminMerchController::class, 'index'])->name('admin.dashboard');
    Route::get('/export', [AdminMerchController::class, 'export'])->name('admin.export'); 
    Route::post('/order/{id}/verify', [AdminMerchController::class, 'verify'])->name('admin.verify');
    Route::post('/order/{id}/reject', [AdminMerchController::class, 'reject'])->name('admin.reject');
});

Route::post('/merch-order', [MerchOrderController::class, 'store'])->name('merch.store');
Route::post('/merch-order/check', [MerchOrderController::class, 'check'])->name('merch.check');
Route::post('/merch-order/repayment', [MerchOrderController::class, 'repayment'])->name('merch.repayment');

Route::get('/elsmart/login', [ElsmartAuthController::class, 'showLogin'])->name('elsmart.login');
Route::post('/elsmart/login', [ElsmartAuthController::class, 'login'])->name('elsmart.login.post');
Route::post('/elsmart/logout', [ElsmartAuthController::class, 'logout'])->name('elsmart.logout');
Route::get('/elsmart/dashboard', [ElsmartAuthController::class, 'dashboard'])->name('elsmart.dashboard');

Route::get('/elsmart/register', [ElsmartAuthController::class, 'showRegister'])->name('elsmart.register');
Route::post('/elsmart/register', [ElsmartAuthController::class, 'register'])->name('elsmart.register.post');

Route::post('/admin/elsmart-master/toggle-stage', [App\Http\Controllers\AdminAuthController::class, 'toggleStage'])->name('admin.elsmart.toggleStage');
Route::get('/elsmart/game-status', [App\Http\Controllers\ElsmartAuthController::class, 'checkGameStatus'])->name('elsmart.gameStatus');

Route::get('/elsmart/quiz/multiple-choice', [ElsmartAuthController::class, 'startStage1'])->name('elsmart.stage1');
Route::get('/elsmart/quiz/find-words', [ElsmartAuthController::class, 'startStage2'])->name('elsmart.stage2');
Route::get('/elsmart/quiz/match-the-box', [ElsmartAuthController::class, 'startStage3'])->name('elsmart.stage3');
Route::post('/elsmart/quiz/submit', [ElsmartAuthController::class, 'submitStage1'])->name('elsmart.stage1.submit');
Route::post('/elsmart/quiz/submit-stage2', [ElsmartAuthController::class, 'submitStage2'])->name('elsmart.stage2.submit');
Route::post('/elsmart/quiz/submit-stage3', [ElsmartAuthController::class, 'submitStage3'])->name('elsmart.stage3.submit');
Route::post('/admin/elsmart-master/reset-password', [App\Http\Controllers\AdminAuthController::class, 'resetPassword'])->name('admin.elsmart.resetPassword');
Route::post('/admin/elsmart-master/delete-team', [App\Http\Controllers\AdminAuthController::class, 'deleteTeam'])->name('admin.elsmart.deleteTeam');

require __DIR__.'/auth.php';