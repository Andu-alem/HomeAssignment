import UpdateForm from "@/app/(admin)/components/UpdateForm"

async function getProduct(id) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`
    const response = await fetch(url)


    return response.json()
}

const Page = async ({ params }) => {
    const { id:param } = params
    const productData = await getProduct(param)
    if (!productData) {
        return (
            <div>Loading....</div>
        )
    }

    return (
        <div className="p-2 flex justify-center items-center">
            <UpdateForm product={ productData } />
        </div>
    )
}

export default Page