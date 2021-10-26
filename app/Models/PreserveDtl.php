<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class PreserveDtl extends Model
{
    use HasFactory;

    /**
     * Get the car associated with the car
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function car(): HasOne
    {
        return $this->hasOne(Car::class, 'vin', 'vin');
    }

    /**
     * Get the client associated with the PreserveDtl
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function client(): HasOne
    {
        return $this->hasOne(Client::class, 'cid', 'cid');
    }
}
