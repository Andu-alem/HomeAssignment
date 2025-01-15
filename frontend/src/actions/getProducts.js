import axios from '@/lib/axios'

export default async function getProducts(url=`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products`) {
    const response = await axios.get(url);

    return response.data;
}