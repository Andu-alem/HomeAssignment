'use'
import ProductCard from "../components/ProductCard"
import ProductsList from "../components/ProductsList"
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, { cache: "no-store"});

    return response.json();
}

const Page = async ({ searchParams }) => {
    const { data, meta } = await getProducts(searchParams)

    return (
        <div>
            <ProductsList products={ data } />
            { meta?.links && (<Pagination links={ meta.links } />)}
        </div>
    )
}

export default Page