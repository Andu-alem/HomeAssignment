'use client'
import { useAppContext } from "@/lib/context"
import { 
    ChevronLeftIcon, 
    ChevronRightIcon
} from "@heroicons/react/24/outline"
import Link from "next/link"

const Pagination = ({ links }) => {
    const { setUrl } = useAppContext()

    return (
        <div className="my-7">
            <ul className="text-[15px] text-zinc-500 flex justify-center gap-1 md:gap-4">
                {
                    links.map((link, index) => {
                        const url = link.label ? `?page=${link.label}`:''
                        return (
                            <Link 
                                key={index} 
                                href={ url } 
                                className={`cursor-pointer ${link.active && "text-white bg-blue-700 px-1 rounded-lg"}`}
                            >{
                                link.label.includes('Next') ? (
                                    <ChevronRightIcon className="w-5 h-5 text-black" />
                                ) : link.label.includes('Previous') ? (
                                    <ChevronLeftIcon className="w-5 h-5 text-black" />
                                ) : link.label
                            }</Link>
                    )})
                }
            </ul>
        </div>
    )
}

export default Pagination