'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Image from 'next/image'
import axios from '@/lib/axios'
import Input from './UpdateInput'
import TextArea from './UpdateTextArea'
import PopupAlert from '@/components/PopupAlert'
import { useRouter } from 'next/navigation'


const UpdateForm = ({ product }) => {
    const router = useRouter()
    const [image, setImage] = useState(null)
    const [sending, setSending] = useState(false)
    const [message, setMessage] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [success, setSuccess] = useState(false)
    const [src, setSrc] = useState(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/${product.image_path}`)
    const { register, handleSubmit, formState:{ errors } } = useForm({
        defaultValues: {
            name: product.name,
            description: product.description,
            price: product.price,
            quantity: product.quantity
        }
    })

    const submitHandler = async (data) => {
        let isDataModified = false
        const formData = new FormData()
        for (let item in data) {
            if (item !== "image" && (data[item] !== product[item])) {
                isDataModified = true
            }
            formData.append(item, data[item])
        }
        if (image !== null) {
            isDataModified = true
        }
        formData.append("image", image)
        formData.append("category", product.category.id)

        if (!isDataModified) {
            setMessage("Nothing has changed!")
            return
        }
        setSending(true)
        setMessage('')

        await axios.get('/sanctum/csrf-cookie')
        const response = await axios.put(`/api/products/${product.id}`, data)
        
        if (response.data) {
            setSending(false)
            setShowAlert(true)
            setSuccess(true)
            setTimeout(() => { 
                setShowAlert(false)
                router.push(`/admin/product/${product.id}`)
            }, 10000)
        } else {
            setSending(false)
            setShowAlert(true)
            setSuccess(false)
            setTimeout(setShowAlert(false), 10000)
        }
    }

    const fileHandler = (e) => {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setImage(file)
        setSrc(url)
    }

    return (
        <form className="w-10/12 sm:w-[70%] md:w-[50%]" onSubmit={ handleSubmit(submitHandler) }>
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

            <div className="flex flex-row items-end gap-2 my-2 text-[15px]">
                <label 
                    className="capitalize text-white bg-gray-700 cursor-pointer rounded-md px-2" 
                    htmlFor="upload">Change Image</label>
                <Image 
                    src={ src }
                    width={ 200 }
                    height={ 150 } />
                <input 
                    className="hidden"
                    type="file" 
                    multiple 
                    accept="image/*" { ...register('image') } 
                    id="upload"
                    onChange={ fileHandler } />
                { errors["image"] && (<p className="text-red-400">Image is required</p>) }
            </div>
            <div className="text-green-500 mt-2 text-[15px]">{ message }</div>
            <button 
                className={`${ sending ? 'animate-pulse':'animate-none' } w-full mt-3 text-white text-[15px] rounded-md py-1 bg-indigo-700 hover:bg-indigo-400`}
            >Submit</button>
            <PopupAlert show={ showAlert } message="Update made" success={ success } />
        </form>
    )
}

export default UpdateForm