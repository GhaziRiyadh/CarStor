<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarDtl extends Model
{
    use HasFactory;

    /**
     * Get the car associated with the CarDtl
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function detailable()
    {
        return $this->morphTo(self::class);
    }
}
