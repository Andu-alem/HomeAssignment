import { Nunito } from 'next/font/google'
import '@/app/global.css'
import Link from 'next/link'
import {
    ShoppingCartIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const Header = () => {
    return (
        <header className="flex justify-between px-24 py-7 bg-white sticky top-0 z-50 border-b border-zinc-500">
            <div className="w-1/2"> 
                <Link className="text-lg text-zinc-700" href="#">E-Commerce</Link>
            </div>
            <div className="w-1/2 flex justify-between gap-5">
                <div className="flex">
                    <input type="search" className="rounded-md h-7 py-1" />
                    <MagnifyingGlassIcon className="w-6 h-6 text-black" />
                </div>
                <nav className="text-zinc-500 flex gap-5">
                    <Link href="#">
                        <ShoppingCartIcon className="w-7 h-7 text-black" />
                    </Link>
                    <Link href="#" className="bg-green-300 text-white py-1 px-3 rounded-md">Sign up</Link>
                </nav>
            </div>
        </header>
    )
}
const Footer = () => {
    return (
        <footer className="py-7 h-[100vh] bg-black">
            <div className="text-white"> the footer </div>
        </footer>
    )
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="antialiased">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
