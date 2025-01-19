'use client'

const Input = ({ type, name, register, errors, ...others }) => {
    return (
        <div className="flex flex-col gap-2 my-2">
            <label className="capitalize font-bold text-[15px]">{ name }</label>
            <input 
                className="rounded-md py-1 focus:border-indigo-500 text-[14px]"
                type={ type } 
                { ...register(name, { validate: (value) => value !== "" }) } 
                { ...others }
            />
            { errors[name] && (<p className="text-red-400 text-[15px]">This field is required.</p>) }
        </div>
    )
}

export default Input