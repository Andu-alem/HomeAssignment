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
import { useAppContext } from '@/lib/context'

//export const metadata = {
//    title: 'Laravel',
//}

const Home = () => {
    const [data, setData] = useState([])
    const [meta, setMeta] = useState({})
    const [categories, setCategories] = useState([])
    const { url, cart, setCart } = useAppContext()

    useEffect(() => {
        async function getCats() {
            const catData = await getCategories()
            setCategories(catData)
        }

        async function getData() {
            const response = await getProducts(url)
            if (response) {
                if (response.data) {
                    setData(response.data)
                    setMeta(response.meta)
                } else {
                    setData(response)
                    setMeta({})
                }
            }
        }

        if (categories.length < 1) {
            getCats()
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
                    { meta.links && (<Pagination links={ meta.links } />)}
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
