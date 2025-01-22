'use client'
import { useState } from 'react'
import axios from '@/lib/axios'

const CategoryForm = ({ show }) => {
    if (!show) return
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [sending, setSending] = useState(false)

    const handleSubmit = async () => {
        if (category == "") return
        setSending(true)
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
        await axios.get('/sanctum/csrf-cookie')
        const response = await axios.post(url, { name: category })

        if (response.data.success) {
            setSending(false)
            setMessage("Category created")
            setSuccess(true)
            setTimeout(() => {
                setMessage("")
            }, 5000)
        } else {
            setSending(false)
            setMessage("operation failed")
            setSuccess(false)
            setTimeout(() => {
                setMessage("")
            }, 5000)
        }
    }

    return (
        <div className="text-[15px] w-[35%] mx-auto flex flex-col items-center my-2">
            <input className="text-[15px] border-gray-300 py-[1px] rounded-lg text-black bg-gray-200" type="text" value={ category } onChange={ (e) => setCategory(e.target.value) }/>
            <button className={`${ sending ? 'animate-pulse':'animate-none' } mt-2 bg-zinc-700 rounded-md px-2 py-1 hover:bg-zinc-500`} onClick={ handleSubmit }>Create</button>
            { message != "" && (<p className={ success ? 'text-green-500':'text-red-400' }>{ message }</p>) }
        </div>
    )
}

export default CategoryForm