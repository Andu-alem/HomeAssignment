'use client'
import { useState } from "react"

const FileInput = ({ name, register, errors, setImage }) => {
    const [src, setSrc] = useState('')

    const fileHandler = (e) =>{
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setImage(file)
        setSrc(url)
    }

    return (
        <div className="flex flex-row items-end gap-2 my-2 text-[15px]">
            <label 
                className="capitalize text-white bg-gray-700 rounded-md px-2" 
                htmlFor="upload">Choose Image</label>
            <img className="w-[200px] h-[150px]" src={ src } />
            <input 
                className="hidden"
                type="file" 
                multiple 
                accept="image/*" name={ name } { ...register(name, { required: "Image is required" }) } 
                id="upload"
                onChange={ fileHandler } />
            { errors[name] && (<p className="text-red-400">{ errors.name.messages }</p>) }
        </div>
    )
}

export default FileInput