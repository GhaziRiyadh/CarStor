<?php

namespace App\Http\Controllers\Website\Car;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function delete(Car $id)
    {
            $id->carPhotos()->delete() && $id->delete();
            return response()->json([
                'data' => Car::with('carPhotos')->get()
            ]);
    }
}
