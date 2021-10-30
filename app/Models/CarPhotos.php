<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class CarPhotos extends Model
{
    use HasFactory;

    /**
     * Get the carPhotos that owns the CarPhotos
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function carPhotos(): BelongsTo
    {
        return $this->belongsTo(Car::class);
    }
}
