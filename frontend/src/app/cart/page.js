'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAppContext } from '@/lib/context'
import ProductBox from '@/components/ProductBox'

const CartPage = () => {
    const { cart } = useAppContext()
    const [totalPrice, setTotalPrice] = useState(0)
    const [newCart, setNewCart] = useState([])

    useEffect(() => {
        let updatedCart = []
        let summedPrice = 0
        cart.forEach(product => {
            //sum up each products price in the cart
            summedPrice = summedPrice + Number(product.price)

            if (updatedCart.find(item => item.id === product.id)) {
                //update quantity
                updatedCart = updatedCart.map(item => {
                    if (item.id === product.id) {
                        return {
                            ...item,
                            amount: item.amount + 1
                        }
                    }
                    return item
                })
            } else {
                //add it to the new cart
                updatedCart.push({
                    ...product,
                    amount: 1
                })
            }

        });
        setTotalPrice(summedPrice)
        setNewCart(updatedCart)
    },[cart])

    const orderHandler = () => {
        //
    }


    return (
        <div className="w-[90vw] sm:w-[77vw] md:w-[54vw] mx-auto my-3 py-2 border border-zinc-300 rounded-md shadow-md">
            <h2 className="text-center text-zinc-700 font-bold py-2 border-b border-zinc-300 text-lg">CheckOut</h2>
            <div className="h-[70vh] overflow-y-auto scrollbar-hide p-3 text-zinc-700">
                {
                    newCart.length < 1 ? (
                        <h4 className="text-[15px] text-center mt-[25%]">Your Cart is Empty please add items to the cart!</h4>
                    ) : (
                        <>
                            {
                                newCart.map(product =>(
                                    <ProductBox 
                                        key={ product.id } 
                                        product={ product }
                                    />
                                ))
                            }
                        </>
                    )              
                }
            </div>
            <div className="flex flex-col text-[17px] text-zinc-700 p-4 border-t border-zinc-400 shadow-t font-bold">
                <div className="flex justify-between border-b border-zinc-200">
                    <span>Summed Price</span>
                    <span>{ totalPrice.toFixed(2) }</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200">
                    <span>Tax 15%</span>
                    <span>{ (totalPrice * (15/100)).toFixed(2) }</span>
                </div>
                <div className="flex justify-between border-b border-zinc-200">
                    <span>Total Price</span>
                    <span>{ (totalPrice + (totalPrice * (15/100) )).toFixed(2) }</span>
                </div>
                <button 
                    className={`${ cart.length < 1 ? 'opacity-25':'opacity-100' } w-[30%] mx-auto bg-blue-500 py-1 mt-2 text-white font-bold rounded-md`}
                    disable={ cart.length < 1 ? true: false }
                >Order</button>
                <div className="mt-1 font-normal text-center">
                    You must 
                        <Link href="/login" className="text-sky-500 font-bold"> Log-in </Link>
                    to make an order
                </div>
            </div>
        </div>
    )
}

export default CartPage