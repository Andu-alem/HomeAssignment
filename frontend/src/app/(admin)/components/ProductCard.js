import Link from 'next/link'

const ProductCard = ({ product }) => {
    const { id, name, image_path, price, quantity } = product
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/image/${image_path}`
    return (
        <div className="border border-zinc-400 rounded-lg p-2 text-[17px] text-zinc-700">
            <img
                className="mb-1"
                src={ url }
                alt={ name }
            />
            <p className="font-bold">{ name }</p>
            <p>Price - { price }ETB</p>
            <p>In stock - { quantity }</p>
            <div className="flex justify-evenly py-2 mt-1 border-t border-zinc-400">
                <Link href={`/admin/update/${id}`} className="hover:text-blue-400">Update</Link>
                <button className="hover:text-blue-400">Delete</button>
                <Link href={`/admin/product/${id}`} className="hover:text-blue-400">Detail</Link>
            </div>
        </div>
    )
}

export default ProductCard