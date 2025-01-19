'use client'
import { useState } from 'react'
import axios from '@/lib/axios'

const CategoryForm = ({ showForm }) => {
    if (!showForm) return
    const [category, setCategory] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = async () => {
        if (category == "") return
        const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`
        await axios.get('/sanctum/csrf-token')
        const response = await axios.post(url, { name: category })

        if (response.data.success) {
            setMessage("Category created")
            setSuccess(true)
            setTimeout(() => {
                setMessage("")
            }, 5000)
        } else {
            setMessage("operation failed")
            setSuccess(false)
            setTimeout(() => {
                setMessage("")
            }, 5000)
        }
    }

    return (
        <div className="text-[15px] w-[75%] mx-auto flex flex-col items-center">
            <input className="text-[15px] border-gray-300 py-1 rounded-lg" type="text" value={ category } onChange={ (e) => setCategory(e.target.value) }/>
            <button onClick={ handleSubmit }>Create</button>
            { message != "" && (<p className={ success ? 'text-green-500':'text-red-400' }>{ message }</p>) }
        </div>
    )
}

export default CategoryForm