import React, { useState } from 'react';
import BestSeller from "../jsonFiles/BestSellersCards.json";
import { motion } from 'framer-motion';
import { Compare } from '../Elements/Compare';
import { Heart } from '../Elements/Heart';

export const BestSellers = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="BestSeller flex flex-col items-center gap-8 px-10 py-10 overflow-hidden max-w-screen-xl mx-auto">
            <div className='flex flex-col items-center gap-1'>

                <div className="flex items-center gap-3">
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                    <span className='uppercase bold text-2xl'>Best Seller</span>
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                </div>
                <span className='italic'>Top view in this week</span>
            </div>

            <div className="BestSeller-cards flex gap-5 flex-wrap cursor-pointer items-center justify-center">
                {
                    BestSeller.map((item, index) => (
                        <div
                            key={index}
                            className='BestSellers-card flex flex-col gap-3'
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
                                        <button className='bg-[#fff] flex-1 h-12 rounded-full px-6 py-3 text-sm'>Quick view</button>
                                        <button className='bg-[#fff] flex-1 h-12 rounded-full px-6 py-3 text-sm'>Quick shop</button>
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

                            <div className="trendingBestSellers-detail">
                                <h1 className='medium'>{item.title}</h1>
                                <span className='text-[#696969]'>${item.price}.00</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className='swipe-btn group border-2 border-[#000] medium cursor-pointer flex-1 h-12 my-10 rounded-full px-10 py-3 hover:border-[#23b2c7] transition duration-150'>
                <span className='z-10 relative group-hover:text-[#fff] transition duration-300'>
                    Load More
                </span>
            </button>

        </div>
    );
};
