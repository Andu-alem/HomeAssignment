'use client'
import { useState } from 'react'
import {
    ChevronRightIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid'

const Collapse = ({ title, children }) => {
    const [show, setShow] = useState(false)
    
    return (
        <div>
            <div className="flex justify-between items-center my-2" onClick={ () => setShow(!show) }>
                <h2 className="text-sm">{ title }</h2>
                {
                    show ? (
                        <ChevronDownIcon className="w-5 h-5 text-white" />
                    ) : (
                        <ChevronRightIcon className="w-5 h-5 text-white" />
                    )
                }
            </div>
            { show && (<div className="">{ children }</div>) }
        </div>
    )
}

export default Collapse