<?php

namespace App\Http\Controllers;

use App\Models\Car;
use Facade\FlareClient\Http\Response;
use Illuminate\Database\DatabaseManager;
use Illuminate\Http\Request;

class CarController extends Controller
{

    public function showCarCard(){
        return DatabaseManagementController::getPagination(Car::class , 8);
    }

    public function getShowCarCard(Request $request){
        $data = [
            'data' => DatabaseManagementController::getPagination(Car::class , 8)
        ];
        return response()->json($data);
    }

    public function hoverCard(){
        return DatabaseManagementController::getPagination(Car::class , 9);
    }

    public function getHoverCarCard(Request $request){
        $data = [
            'data' => DatabaseManagementController::getPagination(Car::class , 8)
        ];
        return response()->json($data);
    }
}
