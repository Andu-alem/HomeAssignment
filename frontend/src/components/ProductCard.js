import Link from 'next/link'
import Image from 'next/image'
import AddButton from './AddToCartButton'

const ProductCard = ({ product, className='' }) => {
    return (
        <div className={`border border-zinc-300 p-2 rounded-md ${className}`}>
            <Image 
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${product.image_path}`}
                alt={ product.name }
                width={ 400 }
                height={ 200 }
                layout='reponsive' />
            <h2 className="text-sm text-zinc-700 my-1">{ product.name }</h2>
            <p className="text-[12px] my-1">Price - {product.price}ETB</p>
            <div className="p-2 border-t border-zinc-200 flex justify-between text-[15px] text-zinc-700">
                <AddButton product={ product } />
                <Link href={`/product/${product.id}`} className="hover:underline hover:text-sky-400">See detail</Link>
            </div>
        </div>
    )
}

export default ProductCard