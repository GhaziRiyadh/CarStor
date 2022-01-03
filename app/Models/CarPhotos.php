<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarPhotos extends Model
{
    use HasFactory;

    protected $fillable = [
        'photoable_id',
        'photoable_type',
        'image',
    ];

    /**
     * Get the carPhotos that owns the CarPhotos
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function photoable()
    {
        return $this->morphTo();
    }
}
