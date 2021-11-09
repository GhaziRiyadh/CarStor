<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Website\Car\ShowCarDetailsController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FavoriteController extends Controller
{
    public function index()
    {
        $props = [
            'Auth' => Auth::check(),
        ];
        return Inertia::render('Admin/Profile/favorite', $props);
    }

    public function show($id)
    {
        ShowCarDetailsController::show($id);
    }
}
