import axios from '@/lib/axios'

export default async function getProducts(url='http://127.0.0.1:8000/api/products') {
    const response = await axios.get(url);

    return response.data;
}