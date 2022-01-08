<?php

namespace App\Http\Controllers\Website\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class ProfileController extends Controller
{
    public function update(Request $request, User $id)
    {
        $request->validate([
            'name' => 'required',
            'username' => 'required',
            'email' => 'email|required',
            'password' => [Password::min(8)],
            'photo' => $request->hasFile('photo') ? 'image' : ''
        ]);

        if ($request->has('password')) {
            if ($request->input('password') === $request->input('vPass'))
                $id->update([
                    'name' => $request->input('name'),
                    'username' => $request->input('username'),
                    'email' => $request->input('email'),
                    'password' => Hash::make($request->input('password'))
                ]);
            else{
                return response()->json('Password not match!' , 404);
            }
        } else {
            $id->update([
                'name' => $request->input('name'),
                'username' => $request->input('username'),
                'email' => $request->input('email'),
            ]);
        }

        if (File::exists($id->photo->image))
            File::delete($id->photo->image);

        dd($id->photo()->update([
            'image' => $request->file('photo')->store('images/user','public'),
        ]));

        return response()->json([
            'user' => User::with('photo')->find(Auth::user()->id)
        ]);
    }
}
