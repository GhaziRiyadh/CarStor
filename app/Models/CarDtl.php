<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CarDtl extends Model
{
    use HasFactory;

    /**
     * Get the car associated with the CarDtl
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function car(): HasOne
    {
        return $this->hasOne(Car::class, 'vin', 'vin');
    }
}
