<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;

class UpdateController extends Controller
{
    public function update(Request $request , Car $id )
    {
        // dd($request->all());
        $store = $request->validate([
            'brand' =>'required',
            'vin' => 'required',
            'year' => 'required|date',
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

        $id->update($store);

        // $request->validate([
        //     'photo' => 'image|required'
        // ]);

        // $id->carPhotos()->update([
        //     'image' => $request->file('photo')->store('images/car','public'),
        // ]);

        return response()->json([
            'data' => Car::with('carPhotos')->get()
        ]);

    }
}
