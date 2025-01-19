'use client'

const TextArea = ({ name, register, errors }) => {
    return (
        <div className="flex flex-col gap-2 my-2 text-[15px]">
            <label className="capitalize font-bold">description</label>
            <textarea 
                className="rounded-md py-1 focus:border-indigo-500 resize-none text-[14px]"
                name={ name }
                { ...register(name, { required: "Description is required." }) } 
                rows="5"
                required />
            { errors[name] && (<p className="text-red-400">{ errors.name.message }</p>) }
        </div>
    )
}

export default TextArea