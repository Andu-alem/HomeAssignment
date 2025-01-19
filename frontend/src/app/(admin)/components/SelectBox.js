'use client'

const SelectBox = ({ categories, name, register, errors }) => {
    return (
        <div className="flex flex-col gap-2 my-2">
            <select className="rounded-md py-1 focus:border-indigo-500 text-[14px]" 
                { ...register(name, {
                    required: "Category is required",
                    validate: {
                        checkDefault: (value) => value != "",
                    }
                }) } >
                <option value="">Select Category</option>
                {
                    categories.map(category => (
                        <option className="hover:bg-gray-200" key={ category.id } value={ category.id }>{ category.name }</option>
                    ))
                }
            </select>
            { errors[name] && (<p className="text-red-400 text-[15px]">{ errors[name].message }</p>) }
        </div>
    )
}

export default SelectBox