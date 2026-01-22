<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\MerchOrderController;
use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminMerchController;
use App\Http\Middleware\CheckAdminSession;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/admin/login', [AdminAuthController::class, 'showLoginForm'])->name('admin.login');
Route::post('/admin/login', [AdminAuthController::class, 'login']);
Route::post('/admin/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');

Route::middleware([CheckAdminSession::class])->prefix('admin')->group(function () {
    Route::get('/dashboard', [AdminMerchController::class, 'index'])->name('admin.dashboard');
    Route::get('/export', [AdminMerchController::class, 'export'])->name('admin.export'); // <--- INI BARU
    Route::post('/order/{id}/verify', [AdminMerchController::class, 'verify'])->name('admin.verify');
    Route::post('/order/{id}/reject', [AdminMerchController::class, 'reject'])->name('admin.reject');
});

Route::post('/merch-order', [MerchOrderController::class, 'store'])->name('merch.store');
Route::post('/merch-order/check', [MerchOrderController::class, 'check'])->name('merch.check');
Route::post('/merch-order/repayment', [MerchOrderController::class, 'repayment'])->name('merch.repayment');

require __DIR__.'/auth.php';