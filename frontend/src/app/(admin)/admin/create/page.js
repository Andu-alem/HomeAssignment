'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import axios from '@/lib/axios'
import Input from '../../components/Input'
import FileInput from '../../components/FileInput'
import TextArea from '../../components/TextArea'
import SelectBox from '../../components/SelectBox'
import PopupAlert from '@/components/PopupAlert'


async function getCategories() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`);

    return response.json();
}

const Page = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [image, setImage] = useState(null)
    const [categories, setCategories] = useState([])
    const [sending, setSending] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        async function getData() {
            const cats = await getCategories()
            if (cats) {
                setCategories(cats)
            }
        }
        getData()
    }, [])

    const submitHandler = async (data) => {
        setSending(true)
        const formData = new FormData()
        for (let item in data) {
            formData.append(item, data[item])
        }
        formData.append("image", image)

        await axios.get('/sanctum/csrf-cookie')
        const response = await axios.post('/api/products', formData)
        if (response) {
            setSending(false)
            setShowAlert(true)
            setSuccess(true)
            setTimeout(() => {
                setShowAlert(false)
                router.push(`/admin/product/${response.data.id}`)
            }, 5000)
        } else {
            setSending(false)
            setShowAlert(true)
            setSuccess(false)
            setTimeout(setShowAlert(false), 5000)
        }
    }

    return (
        <div className="flex justify-center items-center text-zinc-700 text-[17px]">
            <form className="px-7 py-2 border border-zinc-300 rounded-md" onSubmit={ handleSubmit(submitHandler) }>
                <SelectBox 
                    categories={ categories }
                    name="category" 
                    register={ register } 
                    errors={ errors } />
                <Input type="text" name="name" register={ register } errors={ errors } />
                <TextArea name="description" register={ register } errors={ errors } />
                <Input 
                    type="number" 
                    name="price" 
                    register={ register } 
                    errors={ errors } 
                    min="0"
                    step="0.01" />
                <Input 
                    type="number" 
                    name="quantity" 
                    register={ register } 
                    errors={ errors }
                    min="0" />
                <FileInput name="image" register={ register } errors={ errors } setImage={ setImage } />

                <button 
                    className={`${ sending ? 'animate-pulse':'animate-none' } w-full mt-3 text-white rounded-md py-1 bg-indigo-700`}
                >Submit</button>
            </form>
            <PopupAlert show={ showAlert } message="Product created" success={ success } />
        </div>
    )
}

export default Page