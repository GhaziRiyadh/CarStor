<?php

namespace App\Http\Controllers\Website\Shop;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use Inertia\Response;
use function PHPUnit\Framework\isEmpty;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        $carData = Car::with('carPhotos', 'carDtls', 'models')->paginate(6);
        $props = [
            'Auth' => Auth::check(),
            'carData' => $carData,
            'user' => User::with('photo')->find(Auth::id()),
            'pages' => $carData->lastPage(),
            'colorOptions' => Car::distinct('color')->get('color'),
            'brandOptions' => Car::distinct('brand')->get('brand'),
        ];
        return Inertia::render('Website/Shop/index', $props);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     * @throws \Exception
     */
    public function store(Request $request): JsonResponse
    {
        if (isEmpty($request->search)) {
            $carData = Car::with('carPhotos', 'carDtls', 'models')->paginate(6);
        } else {
            $search = '%' . $request->search . '%';
            $carData = Car::with('carPhotos', 'carDtls', 'models')
                ->orWhere('vin', 'like', $search)
                ->orWhere('brand', 'like', $search)
                ->orWhere('year', 'like', $search)
                ->orWhere('color', 'like', $search)
                ->orWhere('style', 'like', $search)
                ->paginate(12);
        }
        $props = [
            'carData' => $carData,
        ];

        return response()->json($props);
    }

    /**
     * Display the specified resource.
     *
     * @param $search
     * @return Response
     */
    public function show($search): Response
    {
        $search = '%' . $search . '%';
        $cars = Car::with('carPhotos', 'carDtls', 'models')
            ->orWhere('vin', 'like', $search)
            ->orWhere('brand', 'like', $search)
            ->orWhere('year', 'like', $search)
            ->orWhere('color', 'like', $search)
            ->orWhere('style', 'like', $search)
            ->paginate(12);
        $props = [
            'carData' => $cars,
            'Auth' => Auth::check(),
            'pages' => $cars->lastPage(),
            'user' => User::with('photo')->find(Auth::id()),
            'issearch' => $search,
        ];
        return Inertia::render('Website/Shop/index', $props);
    }
}
