<?php

namespace App\Http\Controllers\Website\UserDashboard;

use App\Http\Controllers\Controller;
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
        $props = [
            'Auth' => Auth::check(),
            'user' => Auth::user(),
        ];
        return Inertia::render('Website/UserDashboard/index',$props);
    }


}
