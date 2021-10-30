<?php

use App\Http\Controllers\Routeing;
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

Route::get('/', function () {
    $props = [
        'Auth' => Auth::check(),
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

Route::prefix('shop')->group(function(){
    Route::get('/', [ShoppingCountroller::class , 'shope'])->name('shopping');

    Route::get('search/{word}' , [ShoppingCountroller::class , 'search'])->name('search');
});

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

