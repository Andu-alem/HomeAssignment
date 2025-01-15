import axios from '@/lib/axios'

export default async function getCategories() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/categories`);

    return response.data;
}