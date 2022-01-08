<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Website\Car\ShowCarDetailsController;
use App\Models\Car;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class CartController extends Controller
{
    public function __construct() {
        $this->middleware( ['auth:sanctum', 'verified']);
    }

    public function index(): Response
    {
        $user =  User::with(['photo','car'])->find(Auth::id());
        $data = array();
        foreach ($user->car as  $value) {
            array_push($data , Car::with('carPhotos')->find($value->id));
        }
        $props = [
            'Auth' => Auth::check(),
            'user' =>$user,
            'data' => $data
        ];
        return Inertia::render('Website/UserDashboard/Cart/cart', $props);
    }

    public function show($id)
    {
        ShowCarDetailsController::show($id);
    }

    public function addToCart($id = 1)
    {
        dd($id);
    }
}
