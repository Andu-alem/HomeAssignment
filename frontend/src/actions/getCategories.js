import axios from '@/lib/axios'

export default async function getCategories() {
    const response = await axios.get('http://127.0.0.1:8000/api/categories');

    return response.data;
}