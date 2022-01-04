<?php

namespace App\Http\Controllers\Website\Home;

use App\Http\Controllers\Controller;
use App\Models\Car;
use App\Models\Model;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        $tabs = $this->getTabsData();
        $firstModels = $tabs[0]['model'];
        $props = [
            'Auth' => Auth::check(),
            'user' => User::with('photo')->find(Auth::id()),
            'cart' => $this->getCartData($firstModels),
            'hoverCart' => $this->getHoverCardData(),
            'tabData' => $tabs,
            'currentTab' => $firstModels,
        ];

        return Inertia::render('Website/index', $props);
    }

    public function headerImage(): string
    {
        return '/images/homeHeader.jpg';
    }

    public function getCartData($model): array
    {
        $cars = Car::with(['carPhotos', 'carDtls', 'models'])->get();
        $end = [];
        foreach ($cars->toArray() as $value) {
            if ($value['models']['model'] === $model)
                array_push($end, $value);
        }
        return $end;
    }

    public function getHoverCardData(): array
    {
        $cars = Car::with('carPhotos')->get();
        return $cars->random(9)->toArray();
    }

    public function getTabsData(): array
    {
        $model = collect(Model::all('model'))->unique();
        return $model->toArray();
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function getNextTabData( Request $request): JsonResponse
    {
        $data = array( [
            'data' => $this->getCartData( $request->input( 'current' ) ),
        ] );
        return response()->json( $data );
    }
}
