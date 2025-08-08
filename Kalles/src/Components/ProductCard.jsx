import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Compare } from '../Elements/Compare';
import { Heart } from '../Elements/Heart';


export const ProductCard = () => {


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
    const [quantities, setQuantities] = useState(Array(MenProducts.length).fill(0));

    const decrease = (index) => {
        if (quantities[index] > 0) {
            const newQuantities = [...quantities];
            newQuantities[index] -= 1;
            setQuantities(newQuantities);
        }
    }
    const increase = (index) => {
        const newQuantities = [...quantities];
        newQuantities[index] += 1;
        setQuantities(newQuantities);
    }
    return (
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
                        <div key={index} className='border border-[#ddd] p-3 flex gap-8 items-center justify-between'>
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
                                    className="w-[300px] absolute top-0 left-0 object-cover opacity-0 group-hover:opacity-100 transition duration-300"
                                    alt=""
                                />
                                <div className="overlay absolute top-0 left-0 w-full h-full bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                                <motion.img
                                    src={item.img}
                                    className="w-[300px]   object-cover opacity-100 group-hover:opacity-0 transition duration-300"
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
                            <div className='max-sm:flex max-sm:flex-col max-sm:gap-1'>
                                <div className='text-[#696969] flex-1/2 gap-1 text-sm  flex flex-col'>
                                    <h1 className='text-[#000] medium hover:text-[#56cfe1] transition duration-300 cursor-pointer'>Tovi Girl With Cat Printed</h1>
                                    <span>$15.00</span>
                                    <span className='max-md:hidden'>
                                        Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication,...
                                    </span>
                                </div>
                                <div className='flex flex-col gap-2 flex-1/4 max-md:flex-1/2'>
                                    <button className="relative w-full max-sm:h-8 h-12 px-6 text-sm rounded-full text-[#56cfe1] border border-[#56cfe1] bg-white hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                                        <span className="absolute  inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                                            Quick View
                                        </span>
                                        <i className="bi bi-eye absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                                    </button>
                                    <div className='flex overflow-hidden  bg-[#56cfe1] rounded-full h-12 max-sm:h-8 items-center text-sm text-[#fff]'>
                                        <span className='bg-[#2eb6cb] hover:bg-[#26a2b5] cursor-pointer transition duration-300 p-4 select-none' onClick={() => decrease(index)}>-</span>
                                        <span className='bg-[#2eb6cb] hover:bg-[#26a2b5] cursor-pointer transition duration-300 p-4 select-none inline-block min-w-[60px] text-center border-x border-[#dddddd8a]'>{quantities[index]}
                                        </span>
                                        <span className='bg-[#2eb6cb] hover:bg-[#26a2b5] cursor-pointer transition duration-300 p-4 select-none' onClick={() => increase(index)}>+</span>
                                        <button className="relative flex-1 h-12 px-6 text-sm text-[#fff] border border-[#56cfe1] hover:bg-[#000] overflow-hidden cursor-pointer group transition-all duration-300">
                                            <span className="absolute  inset-0 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-8">
                                                Quick View
                                            </span>
                                            <i className="bi bi-cart absolute inset-0 flex items-center justify-center translate-y-8 opacity-0 transition-all duration-300 text-lg group-hover:text-[#fff] group-hover:translate-y-0 group-hover:opacity-100"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
