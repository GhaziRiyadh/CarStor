<?php

namespace App\Http\Controllers\Website\UserDashboard;

use App\Http\Controllers\Controller;
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
        // ddd(User::with('photo')->find(Auth::user()->id));
        $user = User::with('photo')->find(Auth::user()->id);
        // ddd($user);
        $props = [
            'Auth' => Auth::check(),
            'user' => $user,
        ];
        return Inertia::render('Website/UserDashboard/index',$props);
    }


}
