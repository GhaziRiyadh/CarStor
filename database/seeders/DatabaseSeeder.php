<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\Model;
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
        $car = Car::factory()->has(Model::factory()->count(1))->hasCarPhotos(1)->hasCarDtls(1)->count(10)->create();
        return $car;
    }
}
