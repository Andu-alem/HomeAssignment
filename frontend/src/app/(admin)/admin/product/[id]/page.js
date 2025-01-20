import Link from 'next/link'
import Image from 'next/image'
import Delete from '../../../components/Delete'

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
                <Image 
                    className="p-2"  
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${image_path}`}
                    width={ 400 }
                    height={ 300 }
                    layout= "responsive" />
            </div>
            <div className="w-[75%] lg:w-1/2 p-3">
                <h3 className="text-zinc-700 text-lg">{ name }</h3>
                <p className="text-stone-700 text-[15px] my-4">{ description }</p>
                <p className="text-zinc-700 text-[15px]">Price = { price } &nbsp;&nbsp;&nbsp; Quantity = { quantity } </p>
                <div className="flex gap-5 my-3">
                    <Link href={`/admin/update/${id}`} className="rounded-md bg-indigo-700 text-white text-[15px] px-2 py-1 hover:bg-indigo-500">Update</Link>
                    <Delete id={ id } back={ true } className="rounded-md bg-indigo-700 text-white text-[15px] px-2 py-1 hover:bg-indigo-500"/>
                </div>
            </div>
        </div>
    )
}

export default Page