<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class billMst extends Model
{
    use HasFactory;

    /**
     * Get the client associated with the billMst
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function client(): HasOne
    {
        return $this->hasOne(Client::class, 'cid', 'id');
    }
    /**
     * Get the bill_dtl that owns the billMst
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bill_dtl(): BelongsTo
    {
        return $this->belongsTo(bill_dtl::class, 'bid');
    }
}
