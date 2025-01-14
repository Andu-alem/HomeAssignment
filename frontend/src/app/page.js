import LoginLinks from '@/app/LoginLinks'
import axios from '@/lib/axios'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export const metadata = {
    title: 'Laravel',
}

const getData = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/products');
    return response.data;
}

const Home = async () => {
    const { data, links, meta } = await getData();
    console.log("Links are - ", links);
    console.log("Meta data -- ", meta);
    console.log("first Link from meta -- ", meta.links[0])
    return (
        <>
            <div className="grid grid-cols-3 gap-4">
                {
                    data.map((product, index) => (
                        <ProductCard key={index} product={ product } />
                    ))
                }             
            </div>
        </>
    )
}

export default Home
