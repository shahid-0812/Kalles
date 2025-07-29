import React, { useState } from 'react'


export const ProductDetails = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="product-container">
            <div className='text-sm py-5 flex gap-3 px-10 bg-[#f6f6f6] text-[#878787]'>
                <span className='text-[#000]'>Home</span>
                <i className="bi bi-chevron-right"></i>
                <span>Product Name</span>
            </div>
            <div className="product-detail gap-5 flex px-10 py-10">
                <div className='flex flex-col  flex-wrap gap-2'>
                    <img src="/images/men/pro-1.webp" alt="" className='w-[100px] h-auto' />
                    <img src="/images/men/pro-1-1.webp" alt="" className='w-[100px] h-auto' />
                </div>

                <div className=''>
                    <img src="/images/men/pro-1.webp" className='w-[800px] h-auto' alt="" />
                </div>

                <div className='flex flex-col gap-5 px-5'>
                   
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

                    <img src="/images/ok.jpg" className='w-[400px] h-auto' alt="" />

                    <div className='medium text-sm flex gap-2'>
                        <span>Delivery & Return</span>
                        <span>Ask a Question</span>
                    </div>

                    <div className='flex flex-col text-sm'>
                        <span className='text-[#878787]'>SKU: <span className='text-[#000]'>Beauty 01</span></span>
                        <span className='text-[#878787]'>Availability: <span className='text-[#000]'>In Stock</span></span>
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
        </div>
    )
}
