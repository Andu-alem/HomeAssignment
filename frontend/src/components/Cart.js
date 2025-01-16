'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
    ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { useAppContext } from '@/lib/context'

const Cart = () => {
    const { cart } = useAppContext()
    return (
        <div className="relative">
            <Link href="#">
                <ShoppingCartIcon className="w-7 h-7 text-green-500" />
            </Link>
            { 
                cart.length > 0 && (<span className="absolute bg-red-700 text-white z-5 top-0 right-0 px-1 text-[12px] rounded-full">{ cart.length }</span>)
            }
        </div>
    )
}

export default Cart