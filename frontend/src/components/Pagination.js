'use client'
import { useAppContext } from "@/lib/context"

const Pagination = ({ links }) => {
    const { setUrl } = useAppContext()

    return (
        <div className="my-7">
            <ul className="text-[15px] text-zinc-500 flex justify-center gap-4">
                {
                    links.map((link, index) => (
                        <li 
                            key={index} 
                            href={link.url ? link.url:'#'} 
                            className={`cursor-pointer ${link.active && "text-white bg-blue-700 px-1 rounded-lg"}`}
                            onClick={ () => setUrl(link.url) }
                        >{link.label}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination