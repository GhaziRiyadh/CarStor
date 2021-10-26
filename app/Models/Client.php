<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Client extends Model
{
    use HasFactory;

    /**
     * Get the bill_dtl that owns the Client
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function bill_dtl()
    {
        return $this->belongsTo(bill_dtl::class, 'cid', 'id');
    }

    /**
     * Get the billMst that owns the Client
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function billMst(): BelongsTo
    {
        return $this->belongsTo(Client::class, 'cid', 'id');
    }

    /**
     * Get the user associated with the Client
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function user(): HasOne
    {
        return $this->hasOne(User::class, 'uid', 'uid');
    }

    /**
     * Get the preserve_msts that owns the client
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function preserve_msts(): BelongsTo
    {
        return $this->belongsTo(PreserveMst::class, 'cid', 'id');
    }

     /**
     * Get the preserve_dtl that owns the client
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function preserve_dtl(): BelongsTo
    {
        return $this->belongsTo(PreserveDtl::class, 'cid', 'id');
    }
}
