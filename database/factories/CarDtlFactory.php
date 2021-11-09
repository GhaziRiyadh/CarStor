<?php

namespace Database\Factories;

use App\Models\CarDtl;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarDtlFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CarDtl::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'detail' => $this->faker->text(255)
        ];
    }
}
