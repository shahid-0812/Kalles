import React, { useState } from 'react'
import { GlassMagnifier } from 'react-image-magnifiers';


export const ProductDetails = () => {
    const [count, setCount] = useState(0);

    const [activeTab, setActiveTab] = useState("size");
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
                    <div className="colors flex flex-col gap-1">
                        <span className='bold'>Color: Select</span>
                        <div className="flex gap-3">
                            <div className='border border-[#ddd] flex items-center  justify-center w-8 h-8 rounded-full text-[#878787] cursor-pointer hover:border-[#000] hover:text-[#000] transition duration-300'>
                                <div className='w-6 h-6 bg-red-500 rounded-full'></div>
                            </div>
                            <div className='border border-[#ddd] flex items-center  justify-center w-8 h-8 rounded-full text-[#878787] cursor-pointer hover:border-[#000] hover:text-[#000] transition duration-300'>
                                <div className='w-6 h-6 bg-[#000] rounded-full'></div>
                            </div>

                        </div>
                    </div>
                    <div className="sizes flex flex-col gap-1">
                        <span className='bold'>SIZE: S</span>
                        <div className="flex gap-3">
                            <span className='border border-[#ddd] px-3 py-1 rounded-full text-[#878787] cursor-pointer hover:border-[#000] hover:text-[#000] transition duration-300'>S</span>
                            <span className='border border-[#ddd] px-3 py-1 rounded-full text-[#878787] cursor-pointer hover:border-[#000] hover:text-[#000] transition duration-300'>L</span>
                        </div>
                    </div>

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
            <div className='desc flex flex-col gap-8 px-12 py-10 items-center bg-[#f6f6f8]'>
                <div className='flex gap-5'>
                    <button
                        onClick={() => setActiveTab('size')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 cursor-pointer ${activeTab === "size" ? 'border-black' : 'border-transparent'}`}>Description</button>
                    <button
                        onClick={() => setActiveTab('addInfo')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 cursor-pointer ${activeTab === "addInfo" ? 'border-black' : 'border-transparent'}`}>Addition Information</button>
                    <button
                        onClick={() => setActiveTab('custom')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 cursor-pointer ${activeTab === "custom" ? 'border-black' : 'border-transparent'}`}>Custom Tab</button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 cursor-pointer ${activeTab === "reviews" ? 'border-black' : 'border-transparent'}`}>Reviews</button>
                </div>
                {activeTab === "size" &&
                    <div className='flex gap-15'>
                        <div className=' flex-1 flex flex-col gap-5 text-[#878787]'>
                            <h1 className='text-[#000] medium'>FIGHTING FIT</h1>
                            <div className="flex flex-col gap-5 text-sm">
                                <span>Go sporty this summer with this vintage navy and white striped v-neck t-shirt from the Abercrombie & Fitch. Perfect for pairing with denim and white kicks for a stylish sporty vibe. Will fit a UK 8-10, model shown is a UK 8 and 5’5. !!
                                </span>
                                <span>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</span>
                                <span>Hit your next boxing workout with a combination it’s never seen before in the Combat Drop Arm Tank, including a freedom-instilling regular fit and dropped armhole to allow you to throw jabs and hooks at the punching bag with ease. A lightweight material keeps you fighting fit, and fresh.</span>
                            </div>
                        </div>
                        <div className=' flex-1 flex flex-col gap-5 '>
                            <h1 className='text-[#000] medium text-lg'>FIND YOUR SIZE</h1>
                            <div className="overflow-x-auto  uppercase text-[#878787]">
                                <table className="min-w-full border border-[#878787] text-sm text-left">
                                    <thead>
                                        <tr className='medium'>
                                            <th className="border px-4 py-2">Size</th>
                                            <th className="border px-4 py-2">Chest</th>
                                            <th className="border px-4 py-2">Waist</th>
                                            <th className="border px-4 py-2">Hips</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 p-2 bold">S</td>
                                            <td className="border px-4 py-2">39</td>
                                            <td className="border px-4 py-2">31</td>
                                            <td className="border px-4 py-2">35</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 bold">M</td>
                                            <td className="border px-4 py-2">41</td>
                                            <td className="border px-4 py-2">33</td>
                                            <td className="border px-4 py-2">37</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 bold">L</td>
                                            <td className="border px-4 py-2">43</td>
                                            <td className="border px-4 py-2">35</td>
                                            <td className="border px-4 py-2">39</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 bold">XL</td>
                                            <td className="border px-4 py-2">45</td>
                                            <td className="border px-4 py-2">37</td>
                                            <td className="border px-4 py-2">41</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 bold">XXL</td>
                                            <td className="border px-4 py-2">47</td>
                                            <td className="border px-4 py-2">39</td>
                                            <td className="border px-4 py-2">43</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
                {activeTab === "addInfo" &&
                    <div className='flex gap-15'>
                        
                        <div className='flex flex-col gap-5 '>
                            <h1 className='text-[#000] medium text-lg'>FIND YOUR SIZE</h1>
                            <div className="overflow-x-auto  uppercase text-[#878787]">
                                <table className="w-full border border-[#878787] text-sm text-left">
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 p-2 bold">Color</td>
                                            <td className="border px-4 py-2">Red, Black, Grey</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 bold">Size</td>
                                            <td className="border px-4 py-2">S, M, L, XL</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
