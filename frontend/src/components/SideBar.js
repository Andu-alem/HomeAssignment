
const SideBar = ({ categories, onPageChange }) => {
    return (
        <>
            <h3>Additional Filters</h3>
            <div className="my-4">
                <h4>By price range</h4>
                <input className="h-7 w-[200px] rounded-md" type="number" />
            </div>
            <div>
                <h4>By category</h4>
                <ul className="text-[15px] text-zinc-700">
                    {
                        categories.map(category => (
                            <li 
                                className="my-1 cursor-pointer hover:bg-gray-50" 
                                key={ category.id }
                                onClick={ () => onPageChange(`http://127.0.0.1:8000/api/getProductByCategory/${category.id}`) }
                            >{ category.name }</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default SideBar