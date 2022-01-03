<?php

use App\Http\Controllers\Website\Car\ShowCarDetailsController as ShowCarDetails;
use App\Http\Controllers\Website\Home\HomeController as Home;
use App\Http\Controllers\Website\Shop\ShopController as Shop;
use App\Http\Controllers\Website\User\CartController as Cart;
use App\Http\Controllers\Website\User\FavoriteController as Favorite;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['prefix' => '/'], function () {
    Route::get('/', [Home::class, 'index'])->name('home');
    Route::post('getnexttab', [Home::class, 'getNextTabData']);
});

Route::get('/dashboard', [App\Http\Controllers\Website\UserDashboard\DashboardController::class , 'index'])->name('dashboard');

Route::get('Home', function () {
    $props = [
        'Auth' => Auth::check(),
    ];

    return Inertia::render('Home', $props);
})->name("Home");

Route::prefix('shop')->group(function () {
    Route::get('/', [Shop::class, 'index'])->name('shop');

    Route::post('getcardata', [Shop::class, 'store'])->name('getcardata');

    Route::get('search/{search}', [Shop::class, 'show'])->name('search');
});

Route::group(['prefix' => 'profile', 'middleware' => 'Auth'], function () {

    Route::get('favorite', [Favorite::class, 'index'])->name('favorite');

    Route::get('cart', [Cart::class, 'index'])->name('cart');
});



Route::get('showCarDetails/{id}', [ShowCarDetails::class, 'show']);
