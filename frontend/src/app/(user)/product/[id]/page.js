import Image from 'next/image'
import RelatedProductSection from '@/components/RelatedProductSection'
import AddButton from '@/components/AddToCartButton'
import AmountOfProductInCart from '@/components/SingleProductInCart'

async function getProduct(id) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`)


    return response.json()
}

async function getRelatedProducts(cat_id) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search?category=${cat_id}`
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`)

    return response.json()
}

const Page = async ({ params }) => {
    const { id } = params
    const productData = await getProduct(id)
    const relatedProducts = await getRelatedProducts(productData.category_id)

    return (
        <div className="w-[90vw] sm:w-[94vw] md:w-[86vw] lg:w-[82vw] mx-auto">
            <div className="flex flex-col sm:flex-row gap-5 my-10">
                <img 
                    className="w-full mx-auto sm:w-1/2 rounded md" 
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/image/${productData.image_path}`}
                    alt={ productData.name } 
                />
                <div className="w-full mx-auto sm:w-1/2">
                    <h3 className="text-zinc-700 text-lg">{ productData.name }</h3>
                    <p className="text-stone-700 text-[15px] my-4">{ productData.description }</p>
                    <AmountOfProductInCart product_id={ productData.id } />
                    <AddButton product={ productData } />
                </div>
            </div>
            <RelatedProductSection products={ relatedProducts.data } />
        </div>
    )
}

export default Page