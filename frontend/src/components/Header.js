'use client'
import { useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import {
    ShoppingCartIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { useAppContext } from '@/lib/context'

const Header = () => {
    const { setUrl } = useAppContext()
    const [searchParam, setSearchParam] = useState('')
    const router = useRouter()
    
    const onSearch = () => {
        if (searchParam === '') return
        const searchUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getProductByName/${searchParam}`
        setUrl(searchUrl)

    }

    return (
        <header className="flex justify-between md:px-10 md:py-5 bg-white sticky top-0 z-50 border-b border-green-500">
            <div className="md:w-2/5"> 
                <h1 className="cursor-pointer font-bold text-lg text-slate-700" onClick={ () => {
                        setUrl(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`) 
                        router.push('/')
                    }}>E-Commerce</h1>
            </div>
            <div className="md:w-3/5 flex justify-between text-[15px]">
                <div className="w-2/5 flex">
                    <input 
                        type="search" 
                        className="rounded-md w-10/12 h-7 py-1" 
                        onChange={ (e) => setSearchParam(e.target.value) }
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 mt-[2px] mx-[2px] hover:bg-gray-100 rounded-md text-black cursor-pointer" onClick={ onSearch }/>
                </div>
                <nav className="w-2/5 text-zinc-500 flex gap-5">
                    <Link href="#">
                        <ShoppingCartIcon className="w-7 h-7 text-green-500" />
                    </Link>
                    <Link href="/login" className="bg-green-500 text-white py-1 px-3 rounded-md">Log in</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header