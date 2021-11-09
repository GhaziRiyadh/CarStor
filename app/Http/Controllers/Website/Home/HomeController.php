<?php

namespace App\Http\Controllers\Website\Home;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\Model;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Request;

class HomeController extends Controller
{
    public function index()
    {
        $tabs = $this->getTabsData();
        $firstModels = $tabs[0]['model'];
        $props = [
            'Auth' => Auth::check(),
            'cart' => $this->getCartData($firstModels),
            'hoverCart' => $this->getHoverCardData(),
            'tabData' => $tabs,
            'currentTab' => $firstModels,
        ];

        return Inertia::render('Website/index', $props);
    }

    public function headerImage()
    {
        return '/images/homeHeader.jpg';
    }

    public function getCartData($model)
    {
        $cars = Car::with('carPhotos', 'carDtls', 'models')->get();
        $end = [];
        foreach ($cars->toArray() as $key => $value) {
            if ($value['models']['model'] === $model)
                array_push($end, $value);
        }
        return $end;
    }

    public function getHoverCardData()
    {
        $cars = Car::with('carPhotos')->get();
        return $cars->random(9)->toArray();
    }

    public function getTabsData()
    {
        $model = collect(Model::select('model')->get())->unique();
        return $model->toArray();
    }

    public function getNextTabData(Request $request)
    {
        $data = array([
            'data' => $this->getCartData($request->current),
        ]);

        return response()->json($data);
    }
}
