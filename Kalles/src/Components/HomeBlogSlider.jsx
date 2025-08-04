import React, { useState } from 'react'
import { Link } from 'react-router-dom';


export const HomeBlogSlider = () => {
    const [currIndex, setcurrIndex] = useState(0);
    const itemsPer = 1;
    const BlogCards = [
        {
            img: "/images/home/blog-1.webp",
            title: "Spring – Summer Trending 2020",
            date: "By admin on May 11, 2022",
            desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
        },
        {
            img: "/images/home/blog-2.webp",
            title: "Spring – Summer Trending 2020",
            date: "By admin on May 11, 2022",
            desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
        },
        {
            img: "/images/home/blog-3.webp",
            title: "Spring – Summer Trending 2020",
            date: "By admin on May 11, 2022",
            desc: "Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, ...",
        },
    ];
    const handleNext = () => {
        if (currIndex + itemsPer < BlogCards.length) {
            setcurrIndex(currIndex + itemsPer);
        }
    }
    const handlePrev = () => {
        if (currIndex - itemsPer >= 0) {
            setcurrIndex(currIndex - itemsPer);
        }
    }
    return (
        <div className="relative w-full overflow-hidden">
            <div className='flex flex-col items-center gap-1 my-5'>
                <div className="flex items-center gap-3">
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                    <span className='uppercase medium text-xl'>lates from blog</span>
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                </div>
                <span className='italic'>Top view in this week</span>
            </div>
            <button onClick={handlePrev} className='absolute left-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={handleNext} className='absolute right-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                <i className="bi bi-chevron-right"></i>
            </button>
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${(100 / BlogCards.length) * currIndex}%)`,
                    width: `${(BlogCards.length) * (100 / itemsPer)}%`
                }}
            >
                {
                    BlogCards.map((item, index) => (
                        <div key={index} className=' w-[33.3333%] relative h-[400px] flex items-end justify-center group overflow-hidden bg-black'>
                            <Link to="/blogDetails">
                                <img src={item.img} className='absolute transform hover:scale-105 transition duration-500 cursor-pointer top-0 left-0 w-full h-full object-cover' alt="" />
                            </Link>
                            <span className="splash absolute top-1/2 left-1/2 rounded-full bg-white opacity-30 group-hover:animate-splash -translate-x-1/2 -translate-y-1/2"></span>
                            <div className='flex flex-col items-center absolute bottom-0 left-0 bg-black/80 w-full py-5 gap-2'>
                                <span className=' text-[#fff] text-xs'>
                                    <span className='text-[#878787] mx-0.5'>By</span>
                                    admin
                                    <span className='text-[#878787] mx-0.5'>In</span>
                                    Fashion,Lifestyle
                                </span>
                                <Link to="/blogDetails" className='text-[#fff] medium text-sm tracking-[2px] hover:text-[#56cfe1] transition duration-300 uppercase'>{item.title}</Link>
                                <span className='text-[#878787] text-sm'>{item.date}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
