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
        return $this->hasMany(CarPhotos::class, 'photos_id', 'id');
    }

    /**
     * Get the bill_dtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bill_dtl(): BelongsTo
    {
        return $this->belongsTo(bill_dtl::class, 'vin', 'vin');
    }

    /**
     * Get the carDtl that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function carDtl(): BelongsTo
    {
        return $this->belongsTo(Car::class, 'vin', 'vin');
    }

    /**
     * Get the carPhoto that owns the Car
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function carPhoto(): BelongsTo
    {
        return $this->belongsTo(CarPhotos::class, 'vin', 'vin');
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
