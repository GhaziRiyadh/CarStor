<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class bill_dtl extends Model
{
    use HasFactory;
    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Get the car associated with the bill_dtl
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function client()
    {
        return $this->hasOne(Client::class,'cid','id');
    }

    /**
     * Get the billMst associated with the bill_dtl
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function billMst(): HasOne
    {
        return $this->hasOne(billMst::class, 'bid', 'id');
    }

    /**
     * Get the car associated with the bill_dtl
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function car(): HasOne
    {
        return $this->hasOne(Car::class, 'vin', 'vin');
    }
}
