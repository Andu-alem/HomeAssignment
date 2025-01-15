'use client'
import { useState, useEffect } from 'react'
import {
    ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { useAppContext } from '@/lib/context'
import getCategories from '@/actions/getCategories'


const Drawer = ({ showDrawer, setShowDrawer }) => {
    const { setUrl } = useAppContext()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function getCats() {
            const response = await getCategories()
            if (response) {
                setCategories(response)
            }
        }
        getCats()
    },[])

    return (
        <div className={`${ showDrawer ? 'block':'hidden'} bg-white fixed top-0 left-0 h-[100vh] w-[70vw] pl-7 py-5`}>
            <div className="flex gap-5">
                <ArrowLeftIcon 
                    className="w-5 h-5 text-black cursor-pointer" 
                    onClick={ () => setShowDrawer(false) }
                />
                <h3>Additional Filters</h3>
            </div>
            <div className="my-4">
                <h4 className="text-sm">By price range</h4>
                <input className="h-7 w-[70%] rounded-md" type="number" />
            </div>
            <div>
                <h4 className="text-sm">By category</h4>
                <div className="h-[55vh] overflow-auto">
                    <ul className="text-[15px] text-zinc-700 pl-3">
                        {
                            categories.map(category => (
                                <li 
                                    className="my-1 cursor-pointer hover:bg-gray-100" 
                                    key={ category.id }
                                    onClick={ () => {
                                        setUrl(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getProductByCategory/${category.id}`) 
                                        setShowDrawer(false)
                                    }}
                                >{ category.name }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Drawer
