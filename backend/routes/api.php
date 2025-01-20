<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CategoryController;

use App\Models\Product;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/api', function () {
    return response()->json(['name'=>'andualem']);
});

Route::apiResource('products', ProductController::class);
Route::apiResource('orders', OrderController::class);
Route::apiResource('categories', CategoryController::class);


Route::get('/images/{path}', function($path) {
    return Storage::get("images\\${path}");
});

Route::get('/search', [ProductController::class, 'search']);


