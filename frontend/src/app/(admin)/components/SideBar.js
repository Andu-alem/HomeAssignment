import Link from "next/link";
import Collapse from "./Collapse"

async function getCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);

    return response.json();
}

const SideBar = async () => {
    const categories = await getCategories()

    return (
        <div className="w-full h-[100vh] bg-zinc-800 sticky top-0 pt-5">
            <h3 className="text-lg sm:text-xl md:text-2xl text-white py-1 border-b border-white px-3">Cool-Market</h3>
            <div className="text-white mt-4 px-4">
                <Collapse title="Add New">
                    <div className="flex flex-col">
                        <Link 
                            className="text-gray-200 cursor-default text-[15px] pl-3 py-1 hover:text-gray-300 hover:bg-zinc-700"
                            href="/admin/create"
                        >Product</Link>
                        <Link 
                            className="text-gray-200 cursor-default text-[15px] pl-3 py-1 hover:text-gray-300 hover:bg-zinc-700"
                            href="/category"
                        >Category</Link>
                    </div>
                </Collapse>
                <Collapse title="Categories">
                    <div className="h-[55vh] flex flex-col pl-3 overflow-y-auto scrollbar-hide">
                        {
                            categories.map(item => (
                                <Link 
                                    key={ item.id } 
                                    className="text-[15px] py-1 text-gray-200 cursor-default hover:text-gray-300 hover:bg-zinc-700"
                                    href={`?category=${item.id}`}
                                >{ item.name }</Link>
                            ))
                        }
                    </div>
                </Collapse>
                <Collapse title="Orders">
                    <p className="text-gray-200 cursor-default text-[15px] pl-3 py-1 hover:text-gray-300 hover:bg-zinc-700">orders list goes here</p>
                </Collapse>
            </div>
        </div>
    )
}

export default SideBar