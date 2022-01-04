<?php

namespace App\Http\Controllers\Website\Car;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ShowCarDetailsController extends Controller
{
    /**
     * @param $id
     * @return Response
     */
    public static function show( $carId): Response
    {
        $carId = Car::with(['carPhotos', 'models', 'carDtls', 'user'])->findOrFail($carId);

        $props = [
            'data' => $carId,
            'Auth' => Auth::check(),
            'cart' => $carId->user()->exists(Auth::id())
        ];

        return Inertia::render('Website/Car/index', $props);
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function store( Request $request): JsonResponse
    {
        $request->validate([]);

        return response()->json([]);
    }
}
