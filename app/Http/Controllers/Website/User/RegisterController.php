<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class RegisterController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
            'name' => "required|min:3",
            'email' => "required|min:3|email",
            'username' => "required|min:3",
            'password' => "required|min:8",
            'photo' => 'required|image'
        ]);

        if ($request->input('password') === $request->input('password_confirmation')) {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'username' => $request->input('username'),
                'password' => Hash::make($request->input('password')),
            ]);
            $user->photo()->create([
                'image' => $request->file('photo')->store('user','public')
            ]);

            Auth::login($user);
            if (Auth::check()) {
                Inertia::share('user',Auth::user());
                return redirect(route('dashboard'));
            }
        }
        return back();
    }
}
