'use client'
import { useState } from 'react'
import Link from "next/link"
import {
    ShoppingCartIcon,
    MagnifyingGlassIcon,
    Bars3CenterLeftIcon
} from '@heroicons/react/24/outline'
import Drawer from './Drawer'
import Search from './Search'
import Cart from './Cart'

const Header = () => {
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <header className="flex flex-col items-center justify-center sm:flex-row sm:justify-between px-1 sm:px-10 py-3 sm:py-5 bg-white sticky top-0 z-50 border-b border-zinc-500">
            <div className="w-full flex justify-between items-end sm:w-2/5"> 
                <div className="block sm:hidden">
                    <Bars3CenterLeftIcon 
                        className="block sm:hidden w-7 h-7 text-black cursor-pinter"
                        onClick={ () => setShowDrawer(true) } 
                    />
                    <Drawer showDrawer={ showDrawer } setShowDrawer={ setShowDrawer } />
                </div>
                <Link href="/" className="font-bold text-lg text-slate-700">E-commerce</Link>
                <nav className="block sm:hidden text-[15px] text-zinc-500 flex gap-5">
                    <Cart />
                    <Link href="/login" className="bg-green-500 text-white py-1 px-3 rounded-md">Log in</Link>
                </nav>

            </div>
            <div className="sm:w-3/5 flex justify-between text-[15px]">
                <Search />
                <nav className="hidden sm:flex w-2/5 text-zinc-500 flex-row justify-end gap-5">
                    <Cart />
                    <Link href="/login" className="bg-green-500 text-white py-1 px-3 rounded-md">Log in</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header