<?php

namespace App\Http\Controllers\Website\Cart;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use function PHPUnit\Framework\returnSelf;

class UserCartController extends Controller
{
    public function addToCart($id)
    {
        if(Auth::check()){
                $user = User::find(Auth::user()->id);
                if (!$user->car()->exists($id)) {
                    $user->car()->attach($id);
                }
                return response()->json([
                    'state' => $user->car()->exists($id),
                ]);
            }
        else
            return response()->json([
                'state' => Auth::check(),
                'url' => 'login',
            ]);
    }
}
