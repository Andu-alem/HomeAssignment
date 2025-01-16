import axios from '@/lib/axios'
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'
import SideBar from '@/components/SideBar'

export const metadata = {
    title: 'Products-page',
}

async function getCategories() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);

    return response.data;
}
async function getProducts(searchParams) {
    let endPoint;

    if (searchParams.page) {
        endPoint = `api/products?page=${searchParams.page}`
    } else if (searchParams.name) {
        endPoint = `api/search?name=${searchParams.name}`
    } else if (searchParams.category) {
        endPoint = `api/search?category=${searchParams.category}`
    } else {
        endPoint = `api/products`
    }

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${endPoint}`
    const response = await axios.get(url);

    return response.data;
}

const Home = async ({ searchParams }) => {
    const categories = await getCategories()
    const { data, meta } = await getProducts(searchParams)


    if (data.length < 1) {
        return (
            <div>
                Loading....
            </div>
        )
    }
    

    return (
        <main className="flex">
                <section className="w-full sm:w-[70%] md:w-4/5">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-5 mx-1 sm:mx-7">
                        {
                            data.map((product, index) => (
                                <ProductCard key={index} product={ product } />
                            ))
                        }             
                    </div>
                    { meta?.links && (<Pagination links={ meta.links } />)}
                </section>
                <aside className="hidden sm:block sm:w-[30%] md:w-1/5 py-7 pr-4">
                    <div className="sticky sm:top-10 md:top-24">
                        <SideBar categories={ categories } />
                    </div>
                </aside>
        </main>
    )
}

export default Home
