<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\LazyCollection;
use Inertia\Inertia;

class ShoppingCountroller extends Controller
{
    // private $carData ;
    // private $perPage;

    // public function __construct() {
    //     $this->carData = DatabaseManagementController::fromCarTable();
    //     $this->carImage = DatabaseManagementController::fromCarTable(image);
    // }

    public function shopRout() {
        $props = [
            'Auth' => Auth::check(),
            'card' => Car::paginate(6),
        ];

        return Inertia::render('shopping',$props);
    }

    public function search($word){

    }
}
