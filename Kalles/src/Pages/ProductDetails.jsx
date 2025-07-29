import React, { useState } from 'react'
import trending from "../jsonFiles/trendingCards.json";
import { motion } from "framer-motion"
import { Compare } from '../Elements/Compare';
import { Heart } from '../Elements/Heart';


export const ProductDetails = () => {
    const [count, setCount] = useState(0);
    const [likeCount, setlikeCount] = useState(0);
    const [dislikeCount, setdislikeCount] = useState(0);

    const [activeTab, setActiveTab] = useState("size");

    const [currIndex, setcurrIndex] = useState(0);
    const itemsPer = 3;
    const [hoverIndex, setHoverIndex] = useState(null);


    

    const handleNext = () => {
        if (currIndex + itemsPer < trending.length) {
            setcurrIndex(currIndex + itemsPer);
        }
    }
    const handlePrev = () => {
        if (currIndex - itemsPer >= 0) {
            setcurrIndex(currIndex - itemsPer);
        }
    }
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
            <div className='desc flex flex-col gap-8 px-12 py-10  bg-[#f6f6f8]'>
                <div className='flex gap-5 items-center justify-center'>
                    <button
                        onClick={() => setActiveTab('size')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 cursor-pointer 
                            ${activeTab === "size"
                                ? 'border-black text-black'
                                : 'border-transparent text-[#878787] hover:text-black'
                            }`}>
                        Description
                    </button>

                    <button
                        onClick={() => setActiveTab('addInfo')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 text-[#878787] hover:text-[#000] cursor-pointer 
                        ${activeTab === "addInfo"
                                ? 'border-black text-black'
                                : 'border-transparent text-[#878787] hover:text-black'
                            }`}>Addition Information</button>
                    <button
                        onClick={() => setActiveTab('custom')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 text-[#878787] hover:text-[#000] cursor-pointer ${activeTab === "custom" ? 'border-black text-black'
                            : 'border-transparent text-[#878787] hover:text-black'}`}>Custom Tab</button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`bold text-sm rounded-full px-8 py-3 border transition duration-300 text-[#878787] hover:text-[#000] cursor-pointer ${activeTab === "reviews" ? 'border-black text-black'
                            : 'border-transparent text-[#878787] hover:text-black'}`}>Reviews</button>
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

                        <div className='flex flex-col items-center  gap-5 '>
                            <h1 className='text-[#000] medium text-lg'>FIND YOUR SIZE</h1>
                            <div className="w-full uppercase text-[#878787]">
                                <table className="w-full border border-[#878787] text-sm text-left">
                                    <tbody>
                                        <tr>
                                            <td className="border px-4 p-2 bold">Color</td>
                                            <td className="border w-[900px] px-4 py-2">Red, Black, Grey</td>
                                        </tr>
                                        <tr>
                                            <td className="border px-4 py-2 bold">Size</td>
                                            <td className="border w-[900px] px-4 py-2">S, M, L, XL</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }
                {activeTab === "custom" &&
                    <div className='flex flex-col gap-6'>
                        <div className="flex gap-3 items-center justify-center">
                            <span>
                                <svg viewBox="0 0 40 40"
                                    width="35"
                                    height="35" className="text-black">
                                    <path fill="currentColor" d="M8.7 30.7h22.7c.3 0 .6-.2.7-.6l4-25.3c-.1-.4-.3-.7-.7-.8s-.7.2-.8.6L34 8.9l-3-1.1c-2.4-.9-5.1-.5-7.2 1-2.3 1.6-5.3 1.6-7.6 0-2.1-1.5-4.8-1.9-7.2-1L6 8.9l-.7-4.3c0-.4-.4-.7-.7-.6-.4.1-.6.4-.6.8l4 25.3c.1.3.3.6.7.6zm.8-21.6c2-.7 4.2-.4 6 .8 1.4 1 3 1.5 4.6 1.5s3.2-.5 4.6-1.5c1.7-1.2 4-1.6 6-.8l3.3 1.2-3 19.1H9.2l-3-19.1 3.3-1.2zM32 32H8c-.4 0-.7.3-.7.7s.3.7.7.7h24c.4 0 .7-.3.7-.7s-.3-.7-.7-.7zm0 2.7H8c-.4 0-.7.3-.7.7s.3.6.7.6h24c.4 0 .7-.3.7-.7s-.3-.6-.7-.6zm-17.9-8.9c-1 0-1.8-.3-2.4-.6l.1-2.1c.6.4 1.4.6 2 .6.8 0 1.2-.4 1.2-1.3s-.4-1.3-1.3-1.3h-1.3l.2-1.9h1.1c.6 0 1-.3 1-1.3 0-.8-.4-1.2-1.1-1.2s-1.2.2-1.9.4l-.2-1.9c.7-.4 1.5-.6 2.3-.6 2 0 3 1.3 3 2.9 0 1.2-.4 1.9-1.1 2.3 1 .4 1.3 1.4 1.3 2.5.3 1.8-.6 3.5-2.9 3.5zm4-5.5c0-3.9 1.2-5.5 3.2-5.5s3.2 1.6 3.2 5.5-1.2 5.5-3.2 5.5-3.2-1.6-3.2-5.5zm4.1 0c0-2-.1-3.5-.9-3.5s-1 1.5-1 3.5.1 3.5 1 3.5c.8 0 .9-1.5.9-3.5zm4.5-1.4c-.9 0-1.5-.8-1.5-2.1s.6-2.1 1.5-2.1 1.5.8 1.5 2.1-.5 2.1-1.5 2.1zm0-.8c.4 0 .7-.5.7-1.2s-.2-1.2-.7-1.2-.7.5-.7 1.2.3 1.2.7 1.2z">
                                    </path>
                                </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 40 40"
                                    width="35"
                                    height="35"
                                    className="text-black" > <path fill="currentColor" d="M36.7 31.1l-2.8-1.3-4.7-9.1 7.5-3.5c.4-.2.6-.6.4-1s-.6-.5-1-.4l-7.5 3.5-7.8-15c-.3-.5-1.1-.5-1.4 0l-7.8 15L4 15.9c-.4-.2-.8 0-1 .4s0 .8.4 1l7.5 3.5-4.7 9.1-2.8 1.3c-.4.2-.6.6-.4 1 .1.3.4.4.7.4.1 0 .2 0 .3-.1l1-.4-1.5 2.8c-.1.2-.1.5 0 .8.1.2.4.3.7.3h31.7c.3 0 .5-.1.7-.4.1-.2.1-.5 0-.8L35.1 32l1 .4c.1 0 .2.1.3.1.3 0 .6-.2.7-.4.1-.3 0-.8-.4-1zm-5.1-2.3l-9.8-4.6 6-2.8 3.8 7.4zM20 6.4L27.1 20 20 23.3 12.9 20 20 6.4zm-7.8 15l6 2.8-9.8 4.6 3.8-7.4zm22.4 13.1H5.4L7.2 31 20 25l12.8 6 1.8 3.5z"></path> </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 40 40"
                                    width="35"
                                    height="35"
                                    className="text-black"> <path fill="currentColor" d="M5.9 5.9v28.2h28.2V5.9H5.9zM19.1 20l-8.3 8.3c-2-2.2-3.2-5.1-3.2-8.3s1.2-6.1 3.2-8.3l8.3 8.3zm-7.4-9.3c2.2-2 5.1-3.2 8.3-3.2s6.1 1.2 8.3 3.2L20 19.1l-8.3-8.4zM20 20.9l8.3 8.3c-2.2 2-5.1 3.2-8.3 3.2s-6.1-1.2-8.3-3.2l8.3-8.3zm.9-.9l8.3-8.3c2 2.2 3.2 5.1 3.2 8.3s-1.2 6.1-3.2 8.3L20.9 20zm8.4-10.2c-1.2-1.1-2.6-2-4.1-2.6h6.6l-2.5 2.6zm-18.6 0L8.2 7.2h6.6c-1.5.6-2.9 1.5-4.1 2.6zm-.9.9c-1.1 1.2-2 2.6-2.6 4.1V8.2l2.6 2.5zM7.2 25.2c.6 1.5 1.5 2.9 2.6 4.1l-2.6 2.6v-6.7zm3.5 5c1.2 1.1 2.6 2 4.1 2.6H8.2l2.5-2.6zm18.6 0l2.6 2.6h-6.6c1.4-.6 2.8-1.5 4-2.6zm.9-.9c1.1-1.2 2-2.6 2.6-4.1v6.6l-2.6-2.5zm2.6-14.5c-.6-1.5-1.5-2.9-2.6-4.1l2.6-2.6v6.7z"></path> </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 40 40"
                                    width="35"
                                    height="35"
                                    className="text-black"> <path fill="currentColor" d="M35.1 33.6L33.2 6.2c0-.4-.3-.7-.7-.7H13.9c-.4 0-.7.3-.7.7s.3.7.7.7h18l.7 10.5H20.8c-8.8.2-15.9 7.5-15.9 16.4 0 .4.3.7.7.7h28.9c.2 0 .4-.1.5-.2s.2-.3.2-.5v-.2h-.1zm-28.8-.5C6.7 25.3 13 19 20.8 18.9h11.9l1 14.2H6.3zm11.2-6.8c0 1.2-1 2.1-2.1 2.1s-2.1-1-2.1-2.1 1-2.1 2.1-2.1 2.1 1 2.1 2.1zm6.3 0c0 1.2-1 2.1-2.1 2.1-1.2 0-2.1-1-2.1-2.1s1-2.1 2.1-2.1 2.1 1 2.1 2.1z"></path> </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 40 40" width="35"
                                    height="35"
                                    className="text-black"> <path fill="currentColor" d="M20 33.8c7.6 0 13.8-6.2 13.8-13.8S27.6 6.2 20 6.2 6.2 12.4 6.2 20 12.4 33.8 20 33.8zm0-26.3c6.9 0 12.5 5.6 12.5 12.5S26.9 32.5 20 32.5 7.5 26.9 7.5 20 13.1 7.5 20 7.5zm-.4 15h.5c1.8 0 3-1.1 3-3.7 0-2.2-1.1-3.6-3.1-3.6h-2.6v10.6h2.2v-3.3zm0-5.2h.4c.6 0 .9.5.9 1.7 0 1.1-.3 1.7-.9 1.7h-.4v-3.4z"></path> </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 40 40"
                                    width="35"
                                    height="35"
                                    className="text-black"> <path fill="currentColor" d="M30.2 29.3c2.2-2.5 3.6-5.7 3.6-9.3s-1.4-6.8-3.6-9.3l3.6-3.6c.3-.3.3-.7 0-.9-.3-.3-.7-.3-.9 0l-3.6 3.6c-2.5-2.2-5.7-3.6-9.3-3.6s-6.8 1.4-9.3 3.6L7.1 6.2c-.3-.3-.7-.3-.9 0-.3.3-.3.7 0 .9l3.6 3.6c-2.2 2.5-3.6 5.7-3.6 9.3s1.4 6.8 3.6 9.3l-3.6 3.6c-.3.3-.3.7 0 .9.1.1.3.2.5.2s.3-.1.5-.2l3.6-3.6c2.5 2.2 5.7 3.6 9.3 3.6s6.8-1.4 9.3-3.6l3.6 3.6c.1.1.3.2.5.2s.3-.1.5-.2c.3-.3.3-.7 0-.9l-3.8-3.6z"></path> </svg>
                            </span>
                            <span>
                                <svg viewBox="0 0 40 40"
                                    width="35"
                                    height="35"
                                    className="text-black"> <path fill="currentColor" d="M34.1 34.1H5.9V5.9h28.2v28.2zM7.2 32.8h25.6V7.2H7.2v25.6zm13.5-18.3a.68.68 0 0 0-.7-.7.68.68 0 0 0-.7.7v10.9a.68.68 0 0 0 .7.7.68.68 0 0 0 .7-.7V14.5z"></path> </svg>
                            </span>
                        </div>
                        <span className='text-[#878787] text-sm'>LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt</span>
                    </div>
                }
                {activeTab === "reviews" &&
                    <div className='flex flex-col gap-15 px-10 py-5'>
                        <div className='flex items-center gap-20 '>
                            <div className='flex flex-col items-center gap-1'>
                                <h1 className='text-[#878787] bold text-[3rem] leading-12'>4.2</h1>
                                <div className='flex gap-1'>
                                    <i className="bi bi-star-fill text-[1.5rem] text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[1.5rem] text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[1.5rem] text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[1.5rem] text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[1.5rem] text-[#fdbc00]"></i>
                                </div>
                                <span className='text-[#878787] text-sm'>6 reviews</span>
                                <button className='bg-[#fdbc00] text-[#fff] my-2 text-sm px-6 py-2 rounded-sm'>Write a review</button>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <i className="bi bi-star-fill  text-[#fdbc00]"></i>
                                        <span className='text-sm text-[#878787]'>5</span>
                                    </div>
                                    <div className="relative w-[200px] h-1.5 bg-[#EFEFEF]">
                                        <div className="absolute top-0 left-0 h-full w-[80%] bg-[#fdbc00]"></div>
                                    </div>
                                    <span className=' px-1.5 border text-sm rounded-xs border-[#e0e0e0] bg-[#fff] text-[#4A4949]'>5</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <i className="bi bi-star-fill  text-[#fdbc00]"></i>
                                        <span className='text-sm text-[#878787]'>4</span>
                                    </div>
                                    <div className="relative w-[200px] h-1.5 bg-[#EFEFEF]">
                                        <div className="absolute top-0 left-0 h-full w-[40%] bg-[#fdbc00]"></div>
                                    </div>
                                    <span className=' px-1.5 border text-sm rounded-xs border-[#e0e0e0] bg-[#fff] text-[#4A4949]'>5</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <i className="bi bi-star-fill  text-[#fdbc00]"></i>
                                        <span className='text-sm text-[#878787]'>3</span>
                                    </div>
                                    <div className="relative w-[200px] h-1.5 bg-[#EFEFEF]">
                                        <div className="absolute top-0 left-0 h-full w-[20%] bg-[#fdbc00]"></div>
                                    </div>
                                    <span className=' px-1.5 border text-sm rounded-xs border-[#e0e0e0] bg-[#fff] text-[#4A4949]'>5</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <i className="bi bi-star-fill  text-[#fdbc00]"></i>
                                        <span className='text-sm text-[#878787]'>2</span>
                                    </div>
                                    <div className="relative w-[200px] h-1.5 bg-[#EFEFEF]">
                                        <div className="absolute top-0 left-0 h-full w-[0%] bg-[#fdbc00]"></div>
                                    </div>
                                    <span className=' px-1.5 border text-sm rounded-xs border-[#e0e0e0] bg-[#fff] text-[#4A4949]'>5</span>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='flex gap-1 items-center'>
                                        <i className="bi bi-star-fill  text-[#fdbc00]"></i>
                                        <span className='text-sm text-[#878787]'>1</span>
                                    </div>
                                    <div className="relative w-[200px] h-1.5 bg-[#EFEFEF]">
                                        <div className="absolute top-0 left-0 h-full w-[10%] bg-[#fdbc00]"></div>
                                    </div>
                                    <span className=' px-1.5 border text-sm rounded-xs border-[#e0e0e0] bg-[#fff] text-[#4A4949]'>5</span>
                                </div>
                            </div>
                            <div className="images flex  gap-2">
                                <div className='w-[40px] h-[40px] bg-amber-500'></div>
                                <div className='w-[40px] h-[40px] bg-amber-500'></div>
                                <div className='w-[40px] h-[40px] bg-amber-500'></div>
                                <div className='w-[40px] h-[40px] bg-amber-500'></div>
                            </div>
                        </div>
                        <div className="all-reviews flex flex-col gap-4">
                            <div className="nav flex justify-between items-center">
                                <span className='text-[#878787] text-sm'>Showing 1-6 of 6 reviews</span>
                                <div className='flex gap-2'>
                                    <div className='flex gap-10 text-sm text-[#333333] items-center bg-[#fff] border border-[#f2f2f2] px-4 py-2'>
                                        <select name="" id="">
                                            <option value="all">

                                                <span>All</span>
                                                <i className="bi bi-caret-down-fill text-xs"></i>
                                            </option>
                                            <option value="1">Excellent</option>
                                            <option value="2">Very Good</option>
                                            <option value="3">Terrible</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-10 text-sm text-[#333333] items-center bg-[#fff] border border-[#f2f2f2] px-4 py-2'>
                                        <select name="" id="">
                                            <option value="all">

                                                <span>Latest</span>
                                                <i className="bi bi-caret-down-fill text-xs"></i>
                                            </option>
                                            <option value="1">Oldest</option>
                                            <option value="2">Images</option>
                                            <option value="3">Most Likes</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <div className='w-6 h-6 rounded-full bg-red-200'></div>
                                    <h1 className='text-[#333333] bold'>Name</h1>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <i className="bi bi-star-fill text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[#fdbc00]"></i>
                                    <i className="bi bi-star-fill text-[#fdbc00]"></i>
                                    <span className='mx-1 bg-green-400 text-xs rounded-full px-0.5 text-[#fff]'><i class="bi bi-check"></i></span>
                                    <span className="text-xs text-[#999999]">9 months ago</span>
                                </div>
                                <h1 className='text-[#333333] bold'>Title</h1>
                                <span className='text-sm text-[#999999]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, commodi!</span>
                                <div className='flex gap-2 text-[#999999] text-sm'>
                                    <span>Is this helpful?</span>
                                    <i onClick={() => setlikeCount(likeCount + 1)} class="bi bi-hand-thumbs-up-fill cursor-pointer hover:text-[#000] transition duration-300 "></i>
                                    <span>{likeCount}</span>
                                    <i onClick={() => setdislikeCount(dislikeCount + 1)} class="bi bi-hand-thumbs-down-fill cursor-pointer hover:text-[#000] transition duration-300 "></i>
                                    <span>{dislikeCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="suggestions flex flex-col gap-8 items-center px-10 py-15 ">
                <h1 className='text-[1.5rem] text-[#222222] bold'>You may also like</h1>
                <div className="relative w-full overflow-hidden">
                    {/* Arrows */}
                    <button onClick={handlePrev} className='absolute left-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button onClick={handleNext} className='absolute right-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    {/* Slider Container */}
                    <div
                        className="trending-cards flex gap-5 cursor-pointer transition-transform duration-500"
                        style={{
                            transform: `translateX(-${(100 / trending.length) * currIndex}%)`,
                            width: `${(trending.length) * (100 / itemsPer)}%`
                        }}
                    >
                        {
                            trending.map((item, index) => (
                                <div
                                    key={index}
                                    className='trending-card flex flex-col gap-3'
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >
                                    <motion.div
                                        className='relative flex justify-center items-stretch overflow-hidden'
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                    >
                                        {
                                            hoverIndex === index ? (
                                                <>
                                                    <motion.img
                                                        src={`/images/home/trending/trending-${item.id}-hover.webp`}
                                                        className="h-[350px] w-[280px] object-cover"
                                                        alt=""
                                                        variants={{
                                                            rest: { opacity: 0, scale: 1 },
                                                            hover: { opacity: 1, scale: 1.1 },
                                                        }}
                                                        animate="hover"
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black/20"></div>
                                                </>
                                            ) : (
                                                <motion.img
                                                    src={`/images/home/trending/trending-${item.id}.webp`}
                                                    className="h-[350px] w-[280px] object-cover"
                                                    alt=""
                                                    variants={{
                                                        rest: { opacity: 1, scale: 1 },
                                                        hover: { opacity: 0, scale: 1 },
                                                    }}
                                                    animate="rest"
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )
                                        }

                                        {/* Overlay Buttons and Icons */}
                                        <motion.div
                                            className='absolute flex flex-col items-center h-full w-full'
                                            animate={{ opacity: hoverIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <motion.div className='flex absolute flex-col top-0 left-0 text-[#fff] text-lg mx-3 my-2'>
                                                <Compare index={index} hoverIndex={hoverIndex} />
                                                <Heart index={index} hoverIndex={hoverIndex} />
                                            </motion.div>

                                            <motion.div
                                                variants={{ rest: { y: -50 }, hover: { y: 0 } }}
                                                initial="rest"
                                                animate={hoverIndex === index ? "hover" : "rest"}
                                                transition={{ duration: 0.3 }}
                                                className="trending-buttons flex flex-col gap-2 m-auto"
                                            >
                                                <button className="relative w-40 h-12 px-6 text-sm rounded-full bg-white hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                                                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                                                        Quick View
                                                    </span>
                                                    <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                                                </button>
                                                <button className="relative w-40 h-12 px-6 text-sm rounded-full bg-white hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                                                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                                                        Quick shop
                                                    </span>
                                                    <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                                                </button>
                                            </motion.div>

                                            <motion.div
                                                className='text-sm text-[#fff] mb-2'
                                                variants={{ rest: { y: -30 }, hover: { y: 0 } }}
                                                initial="rest"
                                                animate={hoverIndex === index ? "hover" : "rest"}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span>S, </span>
                                                <span>M, </span>
                                                <span>L</span>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    <div className="trending-detail">
                                        <h1 className='medium'>{item.title}</h1>
                                        <span className='text-[#696969]'>${item.price}.00</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="recently flex flex-col gap-8 items-center px-10 py-15 ">
                <h1 className='text-[1.5rem] text-[#222222] bold'>Recently viewed products</h1>
                <div className="relative w-full overflow-hidden">
                    {/* Arrows */}
                    <button onClick={handlePrev} className='absolute left-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button onClick={handleNext} className='absolute right-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    {/* Slider Container */}
                    <div
                        className="trending-cards flex gap-5 cursor-pointer transition-transform duration-500"
                        style={{
                            transform: `translateX(-${(100 / trending.length) * currIndex}%)`,
                            width: `${(trending.length) * (100 / itemsPer)}%`
                        }}
                    >
                        {
                            trending.map((item, index) => (
                                <div
                                    key={index}
                                    className='trending-card flex flex-col gap-3'
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                >
                                    <motion.div
                                        className='relative flex justify-center items-stretch overflow-hidden'
                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                    >
                                        {
                                            hoverIndex === index ? (
                                                <>
                                                    <motion.img
                                                        src={`/images/home/trending/trending-${item.id}-hover.webp`}
                                                        className="h-[350px] w-[280px] object-cover"
                                                        alt=""
                                                        variants={{
                                                            rest: { opacity: 0, scale: 1 },
                                                            hover: { opacity: 1, scale: 1.1 },
                                                        }}
                                                        animate="hover"
                                                        transition={{ duration: 0.5 }}
                                                    />
                                                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black/20"></div>
                                                </>
                                            ) : (
                                                <motion.img
                                                    src={`/images/home/trending/trending-${item.id}.webp`}
                                                    className="h-[350px] w-[280px] object-cover"
                                                    alt=""
                                                    variants={{
                                                        rest: { opacity: 1, scale: 1 },
                                                        hover: { opacity: 0, scale: 1 },
                                                    }}
                                                    animate="rest"
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )
                                        }

                                        {/* Overlay Buttons and Icons */}
                                        <motion.div
                                            className='absolute flex flex-col items-center h-full w-full'
                                            animate={{ opacity: hoverIndex === index ? 1 : 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <motion.div className='flex absolute flex-col top-0 left-0 text-[#fff] text-lg mx-3 my-2'>
                                                <Compare index={index} hoverIndex={hoverIndex} />
                                                <Heart index={index} hoverIndex={hoverIndex} />
                                            </motion.div>

                                            <motion.div
                                                variants={{ rest: { y: -50 }, hover: { y: 0 } }}
                                                initial="rest"
                                                animate={hoverIndex === index ? "hover" : "rest"}
                                                transition={{ duration: 0.3 }}
                                                className="trending-buttons flex flex-col gap-2 m-auto"
                                            >
                                                <button className="relative w-40 h-12 px-6 text-sm rounded-full bg-white hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                                                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                                                        Quick View
                                                    </span>
                                                    <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                                                </button>
                                                <button className="relative w-40 h-12 px-6 text-sm rounded-full bg-white hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                                                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                                                        Quick shop
                                                    </span>
                                                    <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                                                </button>
                                            </motion.div>

                                            <motion.div
                                                className='text-sm text-[#fff] mb-2'
                                                variants={{ rest: { y: -30 }, hover: { y: 0 } }}
                                                initial="rest"
                                                animate={hoverIndex === index ? "hover" : "rest"}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <span>S, </span>
                                                <span>M, </span>
                                                <span>L</span>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    <div className="trending-detail">
                                        <h1 className='medium'>{item.title}</h1>
                                        <span className='text-[#696969]'>${item.price}.00</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
