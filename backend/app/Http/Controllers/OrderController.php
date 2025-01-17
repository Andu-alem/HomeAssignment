<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Http\Request;

use App\Models\Order;
use App\Models\OrderProduct;

class OrderController extends Controller implements HasMiddleware
{

    public static function middleware(): array
    { 
        return  [new Middleware('auth', except: ['index','show'])];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::with('products')->get();
        return response()->json($orders);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $totalPrice = $request->total_price;
        $user = $request->user();
        $order = Order::create([
            'user_id' => $user->id,
            'total_price' => $totalPrice
        ]);
        $products = $request->products;
        $count = 0;
        for($i=0; $i < count($products) ; $i++){ 
            $product = json_decode(json_encode($products[$i]));  
            $order->products()->attach([$product->id => ["quantity" => $product->amount]]);
        }
        return response()->json([
            'price'=> $totalPrice,
            'user' => $user->id,
            'products' => $products,
            'count' => 333
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
