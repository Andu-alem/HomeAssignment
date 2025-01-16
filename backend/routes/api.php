<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

use App\Models\Category;
use App\Models\Product;


Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/api', function () {
    return response()->json(['name'=>'andualem']);
});

Route::apiResource('products', ProductController::class);

Route::get('/image/{path}', function($path) {
    return Storage::get("images\\${path}");
});

Route::get('/search', [ProductController::class, 'search']);

Route::get('/categories', function () {
    $categories = Category::all();
    return response()->json($categories);
});


