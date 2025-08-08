import React, { useState } from 'react'

export const QuickShop = ({ setQuickShop }) => {
    const [count, setCount] = useState(0);


    return (
        <div className='quick-shop flex flex-col gap-5 relative px-8 py-6'>
            <span
                onClick={() => setQuickShop(false)}
                className='absolute -right-2 -top-2 cursor-pointer bg-[#000] text-[#fff] hover:bg-[#56cfe1] transition duration-300 px-3 py-2'>
                <i className="bi bi-x-lg"></i>
            </span>
            <h1 className='font-bold'>Ridley High Waist</h1>
            <h1 className='text-[#878787] text-xl'>$36.00</h1>
            <span className='font-bold'>SIZE: S</span>
            <div className='flex gap-3'>
                <span className='px-4 py-2 rounded-sm hover:bg-[#000] transition duration-300 cursor-pointer hover:text-[#fff] text-[#878787] border border-[#878787]'>S</span>
                <span className='px-4 py-2 rounded-sm hover:bg-[#000] transition duration-300 cursor-pointer hover:text-[#fff] text-[#878787] border border-[#878787]'>L</span>
            </div>
            <div className='flex gap-3'>
                <div className='border border-black rounded-full flex items-center w-fit px-3'>
                    <button onClick={() => count > 0 ? setCount(count - 1) : null} className='px-3 py-1 text-xl hover:text-[#56cfe1] cursor-pointer transition duration-300'>-</button>
                    <span className='px-3 py-1 font-bold w-10 text-center'>{count}</span>
                    <button className='px-3 py-1 text-xl hover:text-[#56cfe1] cursor-pointer transition duration-300' onClick={() => setCount(count + 1)}>+</button>
                </div>
                <button className='border flex items-center justify-center px-3 rounded-full hover:border-[#56cfe1] hover:text-[#56cfe1] cursor-pointer transition duration-300'>
                    <i className="bi bi-suit-heart"></i>
                </button>
                <button className='border flex items-center justify-center px-3 rounded-full hover:border-[#56cfe1] hover:text-[#56cfe1] cursor-pointer transition duration-300'>
                    <i className="bi bi-arrow-left-right"></i>
                </button>
            </div>
            <button className='uppercase cursor-pointer shop-btn bg-[#56cfe1] text-[#fff] medium rounded-full py-2'>
                <span className='z-100'>add to cart</span>
            </button>
            <button className='hover:bg-[#19a3b9] transition duration-300 cursor-pointer uppercase bg-[#000] text-[#fff] medium rounded-full py-2'>But it now</button>

        </div>
    )
}
