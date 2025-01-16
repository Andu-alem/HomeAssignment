'use client'
import { useAppContext } from '@/lib/context'

const AddButton = ({ product }) => {
    const { cart, setCart } = useAppContext()
    const clickHandler = () => {
        //add item to the cart
        setCart([...cart, product])
    }

    return (
        <>
            <button 
                className="px-2 bg-sky-700 text-white rounded-md"
                onClick={ clickHandler }
            >Add+</button>
        </>
    )
}

export default AddButton