'use client'
import { useState, useEffect } from "react"
import Link from 'next/link'
import Collapse from './Collapse';
import {
    Bars3CenterLeftIcon,
    ArrowLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid'
import CategoryForm from "./CategoryForm";

async function getCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);

    return response.json();
}

const SideBar = () => {
    const [show, setShow] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getData() {
            const cats = await getCategories()
            setCategories(cats)
        }
        getData()
    },[])

    return (
        <div className="w-full h-full sm:h-[100vh] bg-zinc-800 sm:sticky top-0 pt-2 sm:pt-5">
            <div className="w-full flex gap-3">
                <Bars3CenterLeftIcon className="w-7 h-7 mx-2 mt-1 sm:hidden cursor-pointer text-white" onClick={ () => setShow(true) } />
                <Link href="/admin" className="text-lg flex-grow sm:text-xl md:text-2xl text-white py-1 cursor-pointer sm:border-b border-white px-3">Cool-Market</Link>
            </div>
            <div className={`${ show ? 'block':'hidden' } fixed sm:static sm:block top-0 w-full h-[100vh] sm:h-full z-50 pt-[5%] sm:pt-0 bg-zinc-800 sm:bg-transparent text-white mt-0 sm:mt-4 px-4`}>
                <ArrowLeftIcon className="w-5 h-5 text-white sm:hidden mb-5 sm:mb-0" onClick={ () => setShow(false) } />
                <Collapse title="Add New">
                    <div className="flex flex-col">
                        <Link 
                            className="text-gray-200 cursor-default text-[15px] pl-3 py-1 hover:text-gray-300 hover:bg-zinc-700"
                            href="/admin/create"
                        >Product</Link>
                        <div className="pl-3 py-1">
                            <div className="flex justify-between cursor-default" onClick={ () => setShowForm(!showForm) }>
                                <span className="text-gray-200 cursor-default text-[15px] py-1 hover:text-gray-300 hover:bg-zinc-700">Category</span>
                                {
                                    showForm ? (
                                        <ChevronDownIcon className="w-4 h-4 text-white" />
                                    ):(
                                        <ChevronRightIcon className="w-4 h-4 text-white" />
                                    )
                                }
                            </div>
                            <CategoryForm show={ showForm } />
                        </div>
                    </div>
                </Collapse>
                <Collapse title="Categories">
                    <div className="h-[55vh] flex flex-col pl-3 overflow-y-auto scrollbar-hide">
                        {
                            categories.map(item => (
                                <Link 
                                    key={ item.id } 
                                    className="text-[15px] py-1 text-gray-200 cursor-default hover:text-gray-300 hover:bg-zinc-700"
                                    href={`/admin/?category=${item.id}`}
                                >{ item.name }</Link>
                            ))
                        }
                    </div>
                </Collapse>
                <Collapse title="Orders">
                    <p className="text-gray-200 cursor-default text-[15px] pl-3 py-1 hover:text-gray-300 hover:bg-zinc-700">orders list goes here</p>
                </Collapse>
            </div>
        </div>
    )
}

export default SideBar