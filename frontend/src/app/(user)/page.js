import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'
import SideBar from '@/components/SideBar'

export const metadata = {
    title: 'Cool-Market|Products',
}

async function getCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);

    return response.json();
}
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

    //const response = await axios.get(url)
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, { next: { revalidate: 36000 } });


    return response.json();
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
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 mx-1 sm:mx-7">
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
