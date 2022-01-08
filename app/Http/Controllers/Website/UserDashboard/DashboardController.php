<?php

namespace App\Http\Controllers\Website\UserDashboard;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    // protected $middleware = ['auth:sanctum', 'verified'];

    public function __construct(){
        $this->middleware( ['auth:sanctum', 'verified']);
    }

    public function index(){
        $user = User::with('photo')->find(Auth::user()->id);
        $props = [
            'Auth' => Auth::check(),
            'user' => $user,
            'show' => Car::with('carPhotos')->get()
        ];
        return Inertia::render('Website/UserDashboard/index',$props);
    }


}
