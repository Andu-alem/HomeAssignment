<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['total_price', 'user_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function products() {
        return $this->belongsToMany('App\Models\Product', 'order_product', 'order_id', 'product_id')->withPivot('quantity');
    }

}
