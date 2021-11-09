<?php

namespace Database\Factories;

use App\Models\Car;
use Illuminate\Database\Eloquent\Factories\Factory;

class CarFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Car::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'vin' => $this->faker->unique()->isbn13() . $this->faker->unique()->text(5),
            'brand' => $this->faker->text(7),
            'color' => $this->faker->colorName(),
            'year' => $this->faker->date('Y-m-d'),
            'style' => $this->faker->text(8),
            'gear' => $this->faker->numberBetween(4, 6),
            'gear_type' => $this->faker->text(5),
            'cylinder' => $this->faker->numberBetween(4, 6),
            'cost' => $this->faker->priceNumberBetween(500, 10000),
            'price' => $this->faker->priceNumberBetween(500, 10000),
            'drive_type' => $this->faker->text(5),
            'fual_type' => $this->faker->text(25),
            'seats_num' => $this->faker->numberBetween(0, 10),
            'date' => $this->faker->dateTime(),
        ];
    }
}
