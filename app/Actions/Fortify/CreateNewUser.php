<?php
/**
 * File for create new user;
 *
 * @category RiyadhGhazi
 * @package  App
 * @author   "ghaziriaydh <ghaziriyadh2@gmail.com>"
 * @license  tag in file comment
 * @link     tag in file comment
 */
namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

/**
 * Class for create User;
 *
 * @category RiyadhGhazi
 * @package  App
 * @author   "App <ghaziriyadh2@gmail.com>"
 * @license  tag in file comment
 * @link     tag in file comment
 */
class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        $nameValRoles =['required', 'string', 'max:255'];

        $passwordValRoles = Jetstream::hasTermsAndPrivacyPolicyFeature() ?
                            ['required', 'accepted'] : '';

        $emailValRoles = ['required', 'string', 'email', 'max:255', 'unique:users'];

        $roles = [
            'name' => $nameValRoles,
            'email' => $emailValRoles,
            'password' => $this->passwordRules(),
            'terms' => $passwordValRoles,
        ];

        $newUser = [
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ];

        Validator::make($input, $roles)->validate();

        return User::create($newUser);
    }
}
