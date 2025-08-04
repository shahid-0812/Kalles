import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='h-screen flex flex-col items-center gap-6 justify-center'>
            <span className='text-[6rem] bold leading-20 '>404</span>
            <span className="uppercase text-lg medium">sorry! Page you are looking can’t be found.</span>
            <span className='tracking-wider text-sm'>Go back to the <Link className="underline p-1 transition duration-300 hover:text-[#fff] hover:bg-[#000] bold text-[1rem]">homepage</Link></span>
        </div>
    )
}
