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

Route::get('/categories', function () {
    $categories = Category::all();
    return response()->json($categories);
});

Route::get('/getProductByName/{param}', function ($param) {
    $products = Product::where('name', 'like', "%$param%")
                        ->with('category')
                        ->get();
    return response()->json($products);
});

Route::get('/getProductByCategory/{id}', function ($id) {
    $products = Product::where('category_id', $id)
                        ->paginate(5)
                        ->get();
    
    return response()->json($products);
});

