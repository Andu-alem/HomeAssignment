'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useAppContext } from '@/lib/context'
import ProductBox from '@/components/ProductBox'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import PopupAlert from '@/components/PopupAlert'

const CartPage = () => {
    const router = useRouter()
    const { user } = useAuth()
    const { cart, setCart } = useAppContext()
    const [totalPrice, setTotalPrice] = useState(0)
    const [newCart, setNewCart] = useState([])
    const [showAlert, setShowAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)


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

    const orderHandler = async () => {
        //csrf protection
        await axios.get('/sanctum/csrf-cookie')
        const order = {
            products: newCart,
            total_price: totalPrice
        }
        setLoading(true)
        const response = await axios.post('/api/orders', order)
        if (response.data.success) {
            setCart([])
            setSuccess(true)
            setShowAlert(true)
            setLoading(false)
            setTimeout(() => {
                setSuccess(false)
                setShowAlert(false)
                router.push('/')
            }, 5000)
        } else {
            setSuccess(false)
            setShowAlert(true)
            setLoading(false)
            setTimeout(setShowAlert(false), 5000)
        }
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
                    onClick={ orderHandler }
                    className={`${ cart.length < 1 ? 'opacity-25':'opacity-100' } ${ loading ? 'animate-pulse':'animate-none' } w-[30%] mx-auto bg-blue-500 py-1 mt-2 text-white font-bold rounded-md hover:bg-blue-700`}
                    disable={ cart.length < 1 && user ? 'true': 'false' }
                >Order</button>
                { 
                    !user && (
                        <div className="mt-1 font-normal text-center">
                            You must 
                                <Link href="/login?callback=/cart" className="text-sky-500 font-bold"> Log-in </Link>
                            to make an order
                        </div>
                    )
                }
            </div>
            <PopupAlert show={ showAlert } success={ success } />
        </div>
    )
}

export default CartPage