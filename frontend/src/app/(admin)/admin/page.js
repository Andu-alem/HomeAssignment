import ProductCard from "../components/ProductCard"
import Pagination from "@/components/Pagination"

async function getProducts(searchParams) {
    let url;

    if (searchParams.page) {
        url = `/api/products?page=${searchParams.page}`
    } else if (searchParams.name) {
        url = `/api/search?name=${searchParams.name}`
    } else if (searchParams.category) {
        url = `/api/search?category=${searchParams.category}`
    } else {
        url = `/api/products`
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, { next: { revalidate: 36000 } });

    return response.json();
}

const Page = async ({ searchParams }) => {
    const { data, meta } = await getProducts(searchParams)

    return (
        <div>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5 mx-1 sm:mx-7">
                {
                    data.map((product, index) => (
                        <ProductCard key={index} product={ product } />
                    ))
                }             
            </div>
            { meta?.links && (<Pagination links={ meta.links } />)}
        </div>
    )
}

export default Page