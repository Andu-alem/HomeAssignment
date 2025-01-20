'use client'
import Image from 'next/image'
import {
    PlusCircleIcon,
    MinusCircleIcon,
    MinusIcon,
    PlusIcon,
    XMarkIcon
} from '@heroicons/react/24/solid'
import { useAppContext } from "@/lib/context"


const ProductBox = ({ product }) => {
    const { cart, setCart } = useAppContext()
    const { id, name, image_path, price, amount } = product
    const total = amount * Number(price)

    const removeHandler = (id) => {
        const filterdCart = cart.filter(product => product.id !== id)
        setCart(filterdCart)
    }

    const minusHandler = (product) => {
        const index = cart.findIndex(item => item.id === product.id)
        const filterdCart = cart.filter((item, i) => i !== index)
        setCart(filterdCart)
    }

    return (
        <div className="my-2 border border-zinc-300 p-3 flex gap-3 rounded-md">
            <Image
                className="rounded-md"
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${image_path}`}
                alt={ product.name }
                width={ 150 }
                height={ 90 }
            />
            <div className="flex-grow flex justify-between">
                <div>
                    <h4 className="text-[15px] font-bold text-zinc-700">{ name }</h4>
                    <p className="text-[14px]">
                        <span>Price = { price }</span>
                        <span  className="mx-4">Amount = { amount }</span>
                        <br/>
                        <span>Total = { amount } x { price } = { total.toFixed(2) }</span>
                    </p>
                    <div className="flex gap-3">
                        <MinusIcon 
                            className="w-5 h-5 text-black cursor-pointer"
                            onClick={ () => minusHandler(product) } 
                        />
                        <PlusCircleIcon 
                            className="w-5 h-5 text-green-500 cursor-pointer" 
                            onClick={ () => setCart([...cart, product]) }
                        />
                    </div>
                </div>
                <XMarkIcon 
                    className="w-7 h-7 text-red-700 cursor-pointer" 
                    onClick={ () => removeHandler(id) }
                />
            </div>
        </div>
    )
}

export default ProductBox