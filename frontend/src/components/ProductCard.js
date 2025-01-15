import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({ product }) => {
    return (
        <div className="border border-zinc-200 p-2 rounded-md">
            <img src={`http://127.0.0.1:8000/api/image/${product.image_path}`} />
            <h2 className="text-sm text-zinc-700 my-1">{ product.name }</h2>
            <p className="text-[12px] my-1">Price - {product.price}ETB</p>
            <div className="p-2 border-t border-zinc-200 flex justify-between text-[15px] text-zinc-500">
                <button className="px-2 bg-sky-700 text-white">Add+</button>
                <p>See detail</p>
            </div>
        </div>
    )
}

export default ProductCard