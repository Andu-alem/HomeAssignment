'use client'
import axios from "@/lib/axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Delete = ({ id, back=false, className }) => {
    const router = useRouter()
    const [showModal, setShowModal] = useState(false)

    const deleteHandler = async () => {
        await axios('/sanctum/csrf-cookie/')
        const response = await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products/${id}`)
        if (back) {
            router.back()
            router.refresh()
        } else {
            router.refresh()
        }
    }
    return (
        <div>
            <button className={ className } onClick={ () => setShowModal(true) }>Delete</button>
            <div className={`${ showModal ? 'block':'hidden' } fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center z-50`}>
                <div className="w-[320px] h-[250px] flex flex-col justify-center items-center rounded-lg bg-gray-100 border border-zinc-500">
                    <p className="text-normal text-zinc-700">Are you sure, you want to delete?</p>
                    <div className="flex justify-center gap-4 my-2">
                        <button className="bg-indigo-700 px-3 py-1 rounded-md text-white" onClick={ () => {
                            deleteHandler()
                            setShowModal(false)
                        } }>Yes</button>

                        <button className="bg-zinc-700 px-3 py-1 rounded-md text-white" onClick={ () => setShowModal(false) }>No</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delete