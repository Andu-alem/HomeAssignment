'use client'
import { useAppContext } from "@/lib/context"

const SideBar = ({ categories }) => {
    const { setUrl } = useAppContext()

    return (
        <>
            <h3>Additional Filters</h3>
            <div className="my-4">
                <h4>By price range</h4>
                <input className="h-7 w-[70%] rounded-md" type="number" />
            </div>
            <div>
                <h4>By category</h4>
                <div className="h-[70vh] overflow-auto">
                    <ul className="text-[15px] text-zinc-700">
                        {
                            categories.map(category => (
                                <li 
                                    className="my-1 cursor-pointer hover:bg-gray-50" 
                                    key={ category.id }
                                    onClick={ () => setUrl(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getProductByCategory/${category.id}`) }
                                >{ category.name }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar