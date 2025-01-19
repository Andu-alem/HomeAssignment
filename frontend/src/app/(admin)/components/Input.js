'use client'

const Input = ({ type, name, register, errors, ...others }) => {
    return (
        <div className="flex flex-col gap-2 my-2">
            <label className="capitalize font-bold text-[15px]">{ name }</label>
            <input 
                className="rounded-md py-1 focus:border-indigo-500 text-[14px]"
                type={ type } 
                { ...register(name, { required: "This field is required" }) } 
                { ...others }
            />
            { errors[name] && (<p className="text-red-400 text-[15px]">{ errors.name.message }</p>) }
        </div>
    )
}

export default Input