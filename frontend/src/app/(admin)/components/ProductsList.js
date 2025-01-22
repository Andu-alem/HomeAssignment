'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import ProductCard from './ProductCard'
import { useAppContext } from '@/lib/context'

const ProductList = ({ products }) => {
    const [data, setData] = useState([])
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()
    const { changeMade, setChangeMade } = useAppContext()

    useEffect(() => {
        if (changeMade) {
            setChangeMade(false)
            router.refresh()
        }
    },[changeMade])
    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 mx-1 sm:mx-7">
            {
                products.map((product, index) => (
                    <ProductCard key={index} product={ product } />
                ))
            }             
        </div>
    )
}

export default ProductList