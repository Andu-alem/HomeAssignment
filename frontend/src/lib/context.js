'use client'
import { createContext, useContext, useState } from 'react'

const CustomContext = createContext();

const ContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [changeMade, setChangeMade] = useState(false)

    return (
        <CustomContext.Provider 
            value={{ cart, setCart, changeMade, setChangeMade }} 
        >
            { children }
        </CustomContext.Provider>
    )
}

const useAppContext = () => {
    const appContext = useContext(CustomContext)
    if (!appContext) {
        throw new Error("The appContext should be used inside ContextProvider")
    }
    return appContext
}

export { ContextProvider, useAppContext }