'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

const Search = () => {
    const router = useRouter()
    const [searchParam, setSearchParam] = useState('')

    const handleSearch = () => {
        if (searchParam === '') return

        router.push(`?name=${searchParam}`)
    }

    return (
        <div className="w-full mt-2 sm:mt-0 sm:w-3/5 flex">
            <input 
                type="search" 
                className="rounded-md w-10/12 h-7 py-1 text-[13px]"
                placeholder="Search by name"
                onChange={ (e) => setSearchParam(e.target.value) }
            />
            <MagnifyingGlassIcon className="w-6 h-6 mt-[2px] mx-[2px] hover:bg-gray-100 rounded-md text-black cursor-pointer" onClick={ handleSearch }/>
        </div>
    )
}

export default Search