<?php

namespace App\Http\Controllers;

use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

use Illuminate\Http\Request;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\Category;

class ProductController extends Controller implements HasMiddleware
{
    /**
     * Get the middleware that should be assigned to the controller.
     */
    public static function middleware(): array
    {
        return  [new Middleware('auth', except: ['index','show','search'])];
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with('category')
                            ->orderBy('created_at', 'desc')
                            ->paginate(10);
        return ProductResource::collection($products);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required',
            'price' => 'required',
            'quantity' => 'required',
            'image' => 'required',   
            'category' => 'required'
        ]);

        $path = $request->file('image')->store('images');

        //$user = auth()->user();
        $category = Category::find($request->category);
        
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'quantity' => $request->quantity,
            'image_path' => $path,
            'category_id' => $category->id,
        ]);

        return response()->json($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::with('category')->find($id);

        return response()->json($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) 
    {
        //$name = $request->name;
        $product = Product::where('id', $id)
                            ->update([
                                'name' => $request->name,
                                'description' => $request->description,
                                'price' => $request->price,
                                'quantity' => $request->quantity
                            ]);

        return response()->json($product);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $product = Product::where('id', $id)
                            ->delete();
        return response()->json(['success', true]);
    }

    public function search(Request $request)
    {
        if ($request->query('name')) {
            $param = $request->query('name');
            $products = Product::where('name', 'like', "%$param%")
                        ->with('category')
                        ->get();

        } else if ($request->query('category')) {
            $id = $request->query('category');
            $products = Product::where('category_id', $id)
                        ->get();
        }
        return ProductResource::collection($products);
    }
}
