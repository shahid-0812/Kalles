import React, { useState } from 'react'
import { CatNav } from '../Components/CatNav';
import { motion } from 'framer-motion';
import { Compare } from '../Elements/Compare';
import { Heart } from '../Elements/Heart';

export const Men = () => {
    const [quantity, setQuantity] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);

    const MenProducts = [
        {
            img: "/images/men/pro-1.webp",
            img2: "/images/men/pro-1-1.webp",
        },
        {
            img: "/images/men/pro-1.webp",
            img2: "/images/men/pro-1-1.webp",
        },
        {
            img: "/images/men/pro-1.webp",
            img2: "/images/men/pro-1-1.webp",
        },
        {
            img: "/images/men/pro-1.webp",
            img2: "/images/men/pro-1-1.webp",
        },
        {
            img: "/images/men/pro-1.webp",
            img2: "/images/men/pro-1-1.webp",
        },
        {
            img: "/images/men/pro-1.webp",
            img2: "/images/men/pro-1-1.webp",
        },
    ];

    return (
        <div className='men-container'>
            <CatNav />
            <div
                style={{
                    backgroundImage: `url('/images/men/bg-heading.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '220px',
                    width: '100%',
                }} className='bg-header flex items-center justify-center'>
                <h1 className='text-[#fff] z-10 text-xl medium'>Collection</h1>
            </div>
            <div className="products flex gap-8 flex-col px-10 py-10">
                <div className="product-nav flex items-center justify-between">
                    <div className='text-sm flex gap-2 text-[#878787]'>
                        <i className='bi bi-funnel'></i>
                        <span>Filter</span>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-8 h-7 flex flex-col gap-0.75 p-1 border border-[#878787]'>
                            <div className='w-full  flex-1 bg-black'></div>
                            <div className='w-full  flex-1 bg-black'></div>
                            <div className='w-full  flex-1 bg-black'></div>
                        </div>
                    </div>
                    <div className='text-sm text-[#878787]'>Feautred</div>
                </div>
                <div className="product-cards">
                    {
                        MenProducts.map((item, index) => (
                            <div key={index} className='border border-[#ddd] p-5 flex gap-8 items-center justify-between'>
                                <motion.div
                                    className='relative cursor-pointer group'
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    whileHover="hover"
                                    initial="rest"
                                    animate={hoverIndex === index ? "hover" : "rest"}
                                >


                                    <motion.img
                                        src={item.img2}
                                        className=" absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                                        alt=""

                                    />
                                    <div className="overlay absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>


                                    <motion.img
                                        src={item.img}
                                        className="   object-cover opacity-100 group-hover:opacity-0 transition duration-300"
                                        alt=""

                                    />

                                    <motion.div className='max-md:flex hidden absolute flex-col top-0 left-0 text-[#fff] text-lg mx-3 my-2'>

                                        <i className="bi bi-suit-heart hover:text-[#000] inline-block"></i>
                                        <i className="bi bi-arrow-left-right hover:text-[#000] inline-block"></i>


                                    </motion.div>

                                    <motion.div className='flex max-md:hidden absolute flex-col top-0 left-0 text-[#fff] text-lg mx-3 my-2'>
                                        <Compare index={index} hoverIndex={hoverIndex} />
                                        <Heart index={index} hoverIndex={hoverIndex} />
                                    </motion.div>

                                </motion.div>
                                <div className='text-[#696969] flex-1/2 gap-1 text-sm  flex flex-col'>
                                    <h1 className='text-[#000] medium '>Tovi Girl With Cat Printed</h1>
                                    <span>$15.00</span>
                                    <span className='max-md:hidden'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication,...</span>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <button className='text-[#56cfe1] border border-[#56cfe1] rounded-full py-3 text-sm'>Quick view</button>
                                    <div className="flex items-center bg-[#56cfe1] text-sm rounded-full overflow-hidden">
                                        <button className="bg-[#56cfe1] text-white px-2 py-3 max-md:px-2 hover:bg-[#31bcd1] transition duration-200 cursor-pointer" onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}>-</button>
                                        <span className="bg-[#56cfe1] border-l-[0.2px] border-r-[0.2px] hover:bg-[#31bcd1] transition duration-200 cursor-pointer border-[#FFFFFF26] text-white py-3 w-[40px] text-center">{quantity}</span>
                                        <button className="bg-[#56cfe1] text-white px-2 py-3 max-md:px-2 hover:bg-[#31bcd1] transition duration-200 cursor-pointer" onClick={() => setQuantity(quantity + 1)}>+</button>
                                        <button className="text-white px-1 max-md:px-1 py-3 cursor-pointer" onClick={() => addToCart(item, quantity)}>Add to cart</button>
                                    </div>

                                </div>
                            </div>
                        ))
                    }



                </div>
            </div>
        </div>
    )
}
