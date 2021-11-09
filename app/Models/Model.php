<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model as models;

class Model extends models
{
    use HasFactory;

    public function cars()
    {
        return $this->belongsTo(Car::class);
    }
}
