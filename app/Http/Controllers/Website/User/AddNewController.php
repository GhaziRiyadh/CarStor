<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class AddNewController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());
        $store = $request->validate([
            'brand' =>'required',
            'vin' => 'required',
            'year' => 'required',
            'style' => 'required',
            'color' => 'required',
            'gear' => 'required',
            'gear_type' => 'required',
            'cylinder' => 'required',
            'cost' => 'required',
            'price' => 'required',
            'drive_type' => 'required',
            'fual_type' => 'required',
            'seats_num' => 'required',
            'date' => 'required',
        ]);
        $request->validate([
            'photo' => 'required'
        ]);

        $store = Car::create($store);


        $store->carPhotos()->create([
            'image' => $request->file('photo')->store('images/car','public'),
        ]);

        return response()->json();
    }
}
