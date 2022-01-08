<?php

namespace App\Models;

use App\Models\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Car extends Model
{
    use HasFactory;

    protected $fillable = [
        'brand' ,
        'vin' ,
        'year',
        'style' ,
        'color' ,
        'gear' ,
        'gear_type' ,
        'cylinder' ,
        'cost' ,
        'price' ,
        'drive_type' ,
        'fual_type' ,
        'seats_num' ,
        'date' ,
    ];

    /**
     * Get the carPhotos that owns the Car
     *
     * @return MorphMany
     */
    public function carPhotos(): MorphMany
    {
        return $this->morphMany(CarPhotos::class, 'photoable');
    }

    public function models(): HasOne
    {
        return $this->hasOne(Model::class);
    }

    /**
     * Get the bill_dtl that owns the Car
     *
     * @return MorphOne
     */
    public function bill_dtl(): MorphOne
    {
        return $this->morphOne(bill_dtl::class, 'desc');
    }

    /**
     * Get the carDtl that owns the Car
     *
     * @return MorphOne
     */
    public function carDtls(): MorphOne
    {
        return $this->morphOne(CarDtl::class, 'detailable');
    }


    /**
     * Get the pres_dtl that owns the Car
     *
     * @return BelongsTo
     */
    public function preserve_dtl(): BelongsTo
    {
        return $this->belongsTo(PreserveDtl::class, 'vin', 'vin');
    }

    public function user(): BelongsToMany{
        return $this->belongsToMany(User::class,'users_cars' , 'car_id' , 'user_id')->withTimestamps();
    }

}
