import React, { useState } from 'react';
import trending from "../jsonFiles/trendingCards.json";
import { motion } from 'framer-motion';
import { Heart } from '../Elements/Heart';
import { Compare } from '../Elements/Compare';

export const TrendingCards = () => {
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className="trending flex flex-col items-center gap-8 px-10 py-10 overflow-hidden max-w-screen-xl mx-auto">
            <div className='flex flex-col items-center gap-1'>

                <div className="flex items-center gap-3">
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                    <span className='uppercase bold text-2xl'>Trending</span>
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                </div>
                <span className='italic'>Top view in this week</span>
            </div>

            <div className="trending-cards flex gap-5 flex-wrap cursor-pointer items-center justify-center">
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
<<<<<<< HEAD
                                        <Compare index={index} hoverIndex={hoverIndex} />
                                        <Heart index={index} hoverIndex={hoverIndex} />
=======
                                        <motion.i
                                            variants={{ rest: { x: -100 }, hover: { x: 0 } }}
                                            initial="rest"
                                            animate={hoverIndex === index ? "hover" : "rest"}
                                            transition={{ duration: 0.3 }}
                                            className="bi bi-suit-heart hover:scale-115 hover:text-[#000] transition-transform duration-200"
                                        ></motion.i>
                                        <motion.i
                                            variants={{ rest: { x: -100 }, hover: { x: 0 } }}
                                            initial="rest"
                                            animate={hoverIndex === index ? "hover" : "rest"}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                            className="bi bi-arrow-left-right hover:scale-115 hover:text-[#000] transition-transform duration-200"
                                        ></motion.i>
>>>>>>> f5afe155e88f559a6cea65ae1d3f56e9626bfba6
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
            <button className='swipe-btn group border-2 border-[#000] medium cursor-pointer flex-1 h-12 my-10 rounded-full px-10 py-3 hover:border-[#23b2c7] transition duration-150'>
                <span className='z-10 relative group-hover:text-[#fff] transition duration-300'>
                    Load More
                </span>


            </button>
<<<<<<< HEAD
            <div class="tooltip">
                ❤️
                <div class="tooltip-text">Like</div>
            </div>
=======
>>>>>>> f5afe155e88f559a6cea65ae1d3f56e9626bfba6

        </div>
    );
};
