import { motion } from 'framer-motion';
import React from 'react'


export const BlogsCards = () => {

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
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className=" cursor-pointer blogs flex items-center justify-center flex-wrap gap-5 px-10 py-10 max-w-screen-xl mx-auto">
            {
                BlogCards.map((blog, index) => (
                    <div key={index} className='flex flex-col gap-3 w-[380px] group '>
                        <div  className='h-[280px] w-[380px]  z-10 relative flex items-center justify-center overflow-hidden'>
                            <img src={blog.img} className="h-[280px] w-[380px] object-cover  absolute z-0 transform scale-110 group-hover:-translate-y-3 transition duration-500" alt="no" />
                            <div className="box ">
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='medium text-lg'>{blog.title}</span>
                            <span className='text-[#878787] text-sm'>{blog.date}</span>
                        </div>
                        <span className='text-[#878787] text-sm max-w-[90%] leading-6'>{blog.desc}</span>
                    </div>
                ))
            }

        </motion.div>
    )
}
