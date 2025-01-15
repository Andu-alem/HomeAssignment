'use client'
import { useEffect, useState } from 'react'
import LoginLinks from '@/app/LoginLinks'
import axios from '@/lib/axios'
import ProductCard from '@/components/ProductCard'
import Pagination from '@/components/Pagination'
import SideBar from '@/components/SideBar'
import Link from 'next/link'
import getProducts from '@/actions/getProducts'
import getCategories from '@/actions/getCategories'

//export const metadata = {
//    title: 'Laravel',
//}

const Home = () => {
    const [url, setUrl] = useState('http://127.0.0.1:8000/api/products')
    const [data, setData] = useState([])
    const [meta, setMeta] = useState({})
    const [categories, setCategories] = useState([])

    useEffect(() => {
        console.log("hello andi")
        async function getData() {
            if (categories.length < 1) {
                const catData = await getCategories()
                setCategories(catData)
            }
            const response = await getProducts(url)
            if (response) {
                setData(response.data)
                setMeta(response.meta)
            }
            console.log("the resopnse data is ----- ", response)
        }
        getData()
    },[url]);
    if (data.length < 1) {
        return (
            <div>
                Loading....
            </div>
        )
    }
    //console.log("Meta data ", meta)
    const onPageChange = (pageUrl) => {
        setUrl(pageUrl)
    }

    return (
        <main className="flex gap-4">
                <section className="w-4/5">
                    <div className="grid grid-cols-3 gap-5 mx-7">
                        {
                            data.map((product, index) => (
                                <ProductCard key={index} product={ product } />
                            ))
                        }             
                    </div>
                    <Pagination links={ meta.links } onPageChange={ onPageChange } />
                </section>
                <aside className="w-1/5 py-7">
                    <div className="sticky top-24">
                        <SideBar categories={ categories } onPageChange={ onPageChange } />
                    </div>
                </aside>
        </main>
    )
}

export default Home
