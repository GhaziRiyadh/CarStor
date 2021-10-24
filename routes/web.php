<?php

use App\Models\User;
use GuzzleHttp\Psr7\Request;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function (Request $request) {
    $props = [
        'Auth' => Auth::check(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ];
    return Inertia::render('Welcome', $props);
})->name('home');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    $props = [
        'Auth' => Auth::check(),
    ];
    return Inertia::render('Dashboard',$props);
})->name('dashboard');

Route::get('Home', function () {
    $props = [
        'Auth' => Auth::check(),
    ];
    return Inertia::render('Home',$props);
})->name("Home");

Route::get('shopping', function () {
    $props = [
        'Auth' => Auth::check(),
    ];
    return Inertia::render('shopping',$props);
})->name('shopping');

Route::get('favorite', function () {
    $props = [
        'Auth' => Auth::check(),
    ];
    return Inertia::render('Profile/favorite',$props);
})->name('favorite');

Route::get('cart', function () {
    $props = [
        'Auth' => Auth::check(),
    ];
    return Inertia::render('Profile/cart', $props );
})->name('cart');

