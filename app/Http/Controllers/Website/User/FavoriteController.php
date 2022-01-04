<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Website\Car\ShowCarDetailsController;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class FavoriteController extends Controller
{
    public function __construct() {
        $this->middleware( ['auth:sanctum', 'verified']);
    }
    
    public function index(): Response
    {
        $props = [
            'Auth' => Auth::check(),
        ];
        return Inertia::render('Website/UserDashboard/favorite', $props);
    }

    public function show($id)
    {
        ShowCarDetailsController::show($id);
    }
}
