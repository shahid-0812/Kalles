import React from 'react'

export const ShopHeader = ({ title }) => {
    return (
        <div
            style={{
                backgroundImage: `url('/images/men/bg-heading.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '220px',
                width: '100%',
            }} className='bg-header flex items-center justify-center'>
            <div className="flex flex-col gap-1 items-center">
                <h1 className='text-[#fff] z-10 text-xl medium'>{title}</h1>
                <span className='text-sm text-[#fff] z-10 medium'>Home &gt; {title}</span>
            </div>
        </div>
    )
}
