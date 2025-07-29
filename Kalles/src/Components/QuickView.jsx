import React, { useState } from 'react'

export const QuickView = ({ setQuickView }) => {
    const [count, setCount] = useState(0);
    return (
        <div className='quick-view-container relative flex bg-[#fff] max-w-[1000px] w-full mx-auto'>
            <span
                onClick={() => setQuickView(false)}
                className='absolute -right-2 -top-2 cursor-pointer bg-[#000] text-[#fff] hover:bg-[#56cfe1] transition duration-300 px-3 py-2'>
                <i className="bi bi-x-lg"></i>
            </span>
            <div>
                <img className='w-[900px] h-[auto]' src="/images/men/pro-1.webp" alt="" />
            </div>
            <div className='flex flex-col gap-5 px-5 py-5'>
                <div>
                    <h1 className='medium text-xl'>Procut name</h1>
                    <h1 className='text-2xl text-[#696969]'>$199.00</h1>
                </div>

                <span className='text-sm text-[#696969]'>Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe.</span>

                <div className='flex gap-2'>
                    <div className='border border-black rounded-full flex items-center w-fit px-3'>
                        <button onClick={() => count > 0 ? setCount(count - 1) : null} className='px-3 py-1 text-xl hover:text-[#56cfe1] cursor-pointer transition duration-300'>-</button>
                        <span className='px-3 py-1 text-xl'>{count}</span>
                        <button className='px-3 py-1 text-xl hover:text-[#56cfe1] cursor-pointer transition duration-300' onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <button className='px-6 py-2 bg-[#56cfe1] text-[#fff] rounded-full uppercase medium'>Add to Cart</button>
                    <button className='border flex items-center justify-center px-3 rounded-full hover:border-[#56cfe1] hover:text-[#56cfe1] cursor-pointer transition duration-300'>
                        <i className="bi bi-suit-heart"></i>
                    </button>
                    <button className='border flex items-center justify-center px-3 rounded-full hover:border-[#56cfe1] hover:text-[#56cfe1] cursor-pointer transition duration-300'>
                        <i className="bi bi-arrow-left-right"></i>
                    </button>
                </div>

                <div className="sizes flex flex-col">
                    <span className='bold'>SIZE: S</span>
                    <div className="flex gap-3">
                        <span className='border border-[#ddd] px-3 py-1 rounded-full text-[#878787] cursor-pointer hover:border-[#000] hover:text-[#000] transition duration-300'>S</span>
                        <span className='border border-[#ddd] px-3 py-1 rounded-full text-[#878787] cursor-pointer hover:border-[#000] hover:text-[#000] transition duration-300'>L</span>
                    </div>
                </div>

                <div className='bold text-sm flex gap-4'>
                    <span className='hover:text-[#56cfe1] cursor-pointer transition duration-300'>Size Guide</span>
                    <span className='hover:text-[#56cfe1] cursor-pointer transition duration-300'>Delivery & Return</span>
                    <span className='hover:text-[#56cfe1] cursor-pointer transition duration-300'>Ask a Question</span>
                </div>

                <div className='flex flex-col text-sm'>
                    <span className='text-[#878787]'>Availability: <span className='text-[#000]'>In Stock</span></span>
                    <span className='text-[#878787]'>Categories: <span className='text-[#000]'>Dress</span></span>
                    <span className='text-[#878787]'>Tags: <span className='text-[#000]'>Tag 1, </span>
                        <span className='text-[#000]'>Tag 1, </span>
                        <span className='text-[#000]'>Tag 1, </span>
                    </span>
                </div>

                <div className="social-links flex gap-6">
                    <i className="bi bi-facebook transform hover:-translate-y-1 hover:text-[#3b5998] text-xl transition duration-300 cursor-pointer "></i>
                    <i className="bi bi-twitter-x transform hover:-translate-y-1 hover:text-[#1da1f2] text-xl transition duration-300 cursor-pointer "></i>
                    <i className="bi bi-instagram transform hover:-translate-y-1 hover:text-[#1da1f2] text-xl transition duration-300 cursor-pointer "></i>
                    <i className="bi bi-linkedin transform hover:-translate-y-1 hover:text-[#0077b5] text-xl transition duration-300 cursor-pointer "></i>
                    <i className="bi bi-pinterest transform hover:-translate-y-1 hover:text-[#cb2027] text-xl transition duration-300 cursor-pointer "></i>
                </div>

            </div>
        </div>
    )
}
