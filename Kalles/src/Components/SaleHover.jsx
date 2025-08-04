import React, { useState } from 'react'
import trending from "../jsonFiles/trendingCards.json";
import { hover, motion } from 'framer-motion';
import { Compare } from '../Elements/Compare';
import { Heart } from '../Elements/Heart';



export const SaleHover = () => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const hoverEffect = "hover:text-[#56cfe1] cursor-pointer transition duration-300"


    return (
        <div className='sale-hover-container w-full overflow-hidden flex gap-2 px-5 py-5 bg-white'>
            <div className='catogary flex flex-col w-[15%] uppercase text-sm medium'>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>Accessories</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>Men</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>women</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>bag</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>fashion</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>shoes</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>dress</span>
                <span className={`mx-2 p-2 border-b border-[#ddd] ${hoverEffect}`}>watch</span>
            </div>
            <div className="trending-cards flex gap-5 flex-wrap cursor-pointer items-center justify-center">
                {
                    trending.slice(0, 4).map((item, index) => (
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
                                                className="h-auto w-[240px] object-cover"
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
                                            className="h-auto w-[240px] object-cover"
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
    )
}
