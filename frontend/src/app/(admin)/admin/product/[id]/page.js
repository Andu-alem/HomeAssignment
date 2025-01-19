
async function getProduct(id) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`
    const response = await fetch(url)


    return response.json()
}

const Page = async ({ params }) => {
    const { id: param } = params
    const product = await getProduct(param)
    const { id, name, description, image_path, quantity, price, category } = product
    
    return (
        <div className="flex flex-col items-center lg:flex-row">
            <div className="w-[75%] lg:w-1/2">
                <img className="p-2"  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/image/${image_path}`} />
            </div>
            <div className="w-[75%] lg:w-1/2 p-3">
                <h3 className="text-zinc-700 text-lg">{ name }</h3>
                <p className="text-stone-700 text-[15px] my-4">{ description }</p>
                <p className="text-zinc-700 text-[15px]">Price = { price } &nbsp;&nbsp;&nbsp; Quantity = { quantity } </p>
                <div className="flex gap-5 my-3">
                    <button className="rounded-md bg-indigo-700 text-white text-[15px] px-2 py-1 hover:bg-indigo-500">Update</button>
                    <button className="rounded-md bg-indigo-700 text-white text-[15px] px-2 py-1 hover:bg-indigo-500">Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Page