<?php

namespace App\Models;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Car extends Model
{
    use HasFactory;

    /**
     * Get the carPhotos that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function carPhotos()
    {
        return $this->morphMany(CarPhotos::class, 'photoable');
    }

    public function models()
    {
        return $this->hasOne(Model::class);
    }

    /**
     * Get the bill_dtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function bill_dtl()
    {
        return $this->morphOne(bill_dtl::class, 'desc');
    }

    /**
     * Get the carDtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function carDtls()
    {
        return $this->morphOne(CarDtl::class, 'detailable');
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
