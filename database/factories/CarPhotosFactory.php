<?php

namespace Database\Factories;

use App\Models\Car;
use App\Models\CarPhotos;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarPhotosFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CarPhotos::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'image' => '/images/cardImage.jpg',
        ];
    }
}
