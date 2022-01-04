<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Model;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->hasPhoto(1)->count(10)->create();
        Car::factory()->has(Model::factory()->count(1))->hasCarPhotos(1)->hasCarDtls(1)->count(10)->create();
        foreach (Car::all() as $car) {
            $user = User::inRandomOrder()->take(rand(1,3))->pluck('id');
            foreach($user as $u)
                $car->user()->attach($u , ['is_manager' => rand(0,1)]);
        }
        // $user = User::factory()->has(Car::factory()->count(5)->hasCarPhotos(1)->hasCarDtls(1))->count(5)->create();
    }
}
