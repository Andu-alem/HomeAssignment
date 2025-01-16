'use client'
import { useEffect, useState } from "react"
import { useAppContext } from "@/lib/context"

const AmountOfProductInCart = ({ product_id }) => {
    const { cart } = useAppContext()
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (cart.length < 1) return
        const newCart = cart.filter(product => product.id == product_id)
        setCount(newCart.length)
    }, [cart])

    return (
        <div className="text-zinc-700 text-[15px] my-2">
            Quantity of this product in cart = <span className="text-green-500 text-sm font-bold">{ count }</span>
        </div>
    )
}

export default AmountOfProductInCart