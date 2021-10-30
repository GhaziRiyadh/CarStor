<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Car extends Model
{
    use HasFactory;

    /**
     * Get the carPhotos that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function carPhotos(): HasMany
    {
        return $this->hasMany(CarPhotos::class);
    }

    /**
     * Get the bill_dtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function bill_dtl()
    {
        return $this->hasOne(bill_dtl::class, 'vin', 'vin');
    }

    /**
     * Get the carDtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function carDtl(): HasOne
    {
        return $this->HasOne(Car::class);
    }


    /**
     * Get the pres_dtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function preserv_dtl(): BelongsTo
    {
        return $this->belongsTo(PreserveDtl::class, 'vin', 'vin');
    }
}
