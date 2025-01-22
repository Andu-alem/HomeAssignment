'use client'
import { 
    ChevronLeftIcon, 
    ChevronRightIcon
} from "@heroicons/react/24/outline"
import Link from "next/link"

const Pagination = ({ links }) => {
    
    return (
        <div className="my-7">
            <ul className="text-[15px] text-zinc-500 flex justify-center gap-1 md:gap-4">
                {
                    links.map((link, index) => {
                        let url = ''
                        if (link.url) {
                            const startIndex = link.url.lastIndexOf("?")
                            url = link.url.slice(startIndex)
                        }
                        
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