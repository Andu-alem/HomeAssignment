import Link from 'next/link'
import Image from 'next/image'
import Delete from './Delete'

const ProductCard = ({ product }) => {
    const { id, name, image_path, price, quantity } = product
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${image_path}`
    return (
        <div className="border border-zinc-300 rounded-lg p-2 text-[15px] text-zinc-700">
            <Image
                className="mb-1"
                src={ url }
                alt={ name }
                width={ 400 }
                height={ 200 }
                layout='reponsive'
            />
            <p className="font-bold">{ name }</p>
            <p>Price - { price }ETB</p>
            <p>In stock - { quantity }</p>
            <div className="flex justify-evenly py-2 mt-1 border-t border-zinc-400">
                <Link href={`/admin/update/${id}`} className="hover:text-blue-500 text-white bg-indigo-400 rounded-md px-1">Update</Link>
                <Delete id={ id } className="hover:text-blue-500 text-white bg-zinc-400 rounded-md px-1" />
                <Link href={`/admin/product/${id}`} className="hover:text-blue-500 text-sky-500 font-bold">Detail</Link>
            </div>
        </div>
    )
}

export default ProductCard