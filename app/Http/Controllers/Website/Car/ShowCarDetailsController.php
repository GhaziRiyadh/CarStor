<?php

namespace App\Http\Controllers\Website\Car;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowCarDetailsController extends Controller
{
    public static function show($id)
    {
        $data = Car::with('carPhotos', 'carDtls')->findOrFail($id);

        $props = [
            'data' => $data,
        ];

        return Inertia::render('Website/Car/index', $props);
    }

    public function store(Request $request)
    {
        $role = [];
        $this->validate($request, $role);

        $backUrl = [];
        return response()->json($backUrl);
    }
}
