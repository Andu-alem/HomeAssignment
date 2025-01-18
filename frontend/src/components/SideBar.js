import Link from "next/link"

const SideBar = ({ categories }) => {

    return (
        <>
            <h3>Additional Filters</h3>
            <div className="my-4">
                <h4>By price range</h4>
                <input className="h-7 w-[70%] rounded-md" type="number" />
            </div>
            <div>
                <h4>By category</h4>
                <div className="h-[70vh] overflow-y-auto scrollbar-hide">
                    <ul className="text-[15px] text-zinc-700">
                        {
                            categories.map(category => (
                                <li 
                                    className="my-1 cursor-pointer hover:bg-gray-50" 
                                    key={ category.id }
                                >
                                    <Link href={`?category=${category.id}`}>{ category.name }</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideBar