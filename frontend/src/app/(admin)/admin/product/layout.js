'use client'
import { useRouter } from 'next/navigation'
import {
    ArrowLeftIcon
} from '@heroicons/react/24/solid'

const Layout = ({ children }) => {
    const router = useRouter()
    return (
        <div className="min-h-[110vh]">
            <div className="flex justify-start gap-7 px-5 pb-3 mb-2 border-b border-zinc-300">
                <ArrowLeftIcon className="w-5 h-5 text-black cursor-pointer" onClick={ () => {
                    router.back()
                    router.refresh()
                }} />
                <h3>Products</h3>
            </div>
            { children }
        </div>
    )
}

export default Layout