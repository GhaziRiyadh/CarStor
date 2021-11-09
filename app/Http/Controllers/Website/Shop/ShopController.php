<?php

namespace App\Http\Controllers\Website\Shop;

use App\Http\Controllers\Controller;
use App\Models\Car;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use function PHPUnit\Framework\isEmpty;

class ShopController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $carData = Car::with('carPhotos', 'carDtls', 'models')->paginate(6);
        $props = [
            'Auth' => Auth::check(),
            'carData' => $carData,
            'pages' => $carData->lastPage(),
            'colorOptions' => Car::distinct('color')->get('color'),
            'brandOptions' => Car::distinct('brand')->get('brand'),
        ];
        return Inertia::render('Website/Shop/index', $props);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $carData = [];
        if (isEmpty($request->search)) {
            $carData = Car::with('carPhotos', 'carDtls', 'models')->paginate(6);
        } else {
            ddd($request);
            $carData = Car::with('carPhotos', 'carDtls', 'models')
                ->where('vin', 'like',  $request->search, 'or')
                ->where('brand', 'like',  $request->search, 'or')
                ->where('year', 'like',  $request->search, 'or')
                ->where('color', 'like',  $request->search, 'or')
                ->where('style', 'like',  $request->search)
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($search)
    {
        $search = '%' . $search . '%';
        $cars = Car::with('carPhotos', 'carDtls', 'models')
            ->where('vin', 'like', $search, 'or')
            ->where('brand', 'like', $search, 'or')
            ->where('year', 'like', $search, 'or')
            ->where('color', 'like', $search, 'or')
            ->where('style', 'like', $search)
            ->paginate(12);
        $props = [
            'carData' => $cars,
            'Auth' => Auth::check(),
            'pages' => $cars->lastPage(),
            'issearch' => $search,
        ];
        return Inertia::render('Website/Shop/index', $props);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
