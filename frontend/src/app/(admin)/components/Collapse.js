'use client'
import { useState } from 'react'
import {
    ChevronRightIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid'

const Collapse = ({ title, children }) => {
    const [show, setShow] = useState(false)
    
    return (
        <div className="">
            <div className="flex justify-between items-center my-2 border-b border-zinc-700" onClick={ () => setShow(!show) }>
                <h2 className="text-sm mb-2">{ title }</h2>
                {
                    show ? (
                        <ChevronDownIcon className="w-4 h-4 text-white" />
                    ) : (
                        <ChevronRightIcon className="w-4 h-4 text-white" />
                    )
                }
            </div>
            { show && (<div className="">{ children }</div>) }
        </div>
    )
}

export default Collapse