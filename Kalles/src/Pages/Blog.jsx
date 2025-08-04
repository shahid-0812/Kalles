import React, { useRef, useState } from 'react'
import { Link } from "react-router-dom"

export const Blog = () => {


    const [currIndex, setcurrIndex] = useState(0);
    const itemsPer = 3;

    const Blogs = [
        {
            img: "/images/blog/blog-card-1.webp",
            title: "Spring - Summer trending 2020",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-2.webp",
            title: "The Easiest way to break out on top",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-3.webp",
            title: "Style for couple in wedding season",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-4.webp",
            title: "Style advice all men should hear",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-5.webp",
            title: "Cool spring street style looks",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-6.webp",
            title: "101 beauty every girl should know",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-2.webp",
            title: "The Easiest way to break out on top",
            date: "May 11, 2022",
        },
        {
            img: "/images/blog/blog-card-3.webp",
            title: "Style for couple in wedding season",
            date: "May 11, 2022",
        },
    ]

    const handleNext = () => {
        if (currIndex + itemsPer < Blogs.length) {
            setcurrIndex(currIndex + itemsPer);
        }
    }
    const handlePrev = () => {
        if (currIndex - itemsPer >= 0) {
            setcurrIndex(currIndex - itemsPer);
        }
    }


    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    const currentCards = Blogs.slice(indexOfFirstCard, indexOfLastCard);

    const totalPages = Math.ceil(Blogs.length / cardsPerPage);
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="blog-container">
            <div className="relative w-full overflow-hidden max-md:hidden">
                <button onClick={handlePrev} className='absolute left-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                    <i className="bi bi-chevron-left"></i>
                </button>
                <button onClick={handleNext} className='absolute right-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                    <i className="bi bi-chevron-right"></i>
                </button>

                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${(100 / Blogs.length) * currIndex}%)`,
                        width: `${(Blogs.length) * (100 / itemsPer)}%`
                    }}
                >
                    {
                        Blogs.map((item, index) => (
                            <div key={index} className=' w-[33.3333%] max-md:w-full relative h-[300px] flex items-end justify-center group overflow-hidden bg-black'>
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
            <div className="blogs flex flex-wrap items-center justify-center gap-10 px-10 py-15">
                {
                    currentCards.map((blog, index) => (
                        <div key={index} className="blog flex flex-col gap-2 w-[48%] max-md:w-full overflow-hidden">
                            <Link to="/blogDetails" className='overflow-hidden cursor-pointer'>
                                <img src={blog.img} className='hover:scale-105 transition duration-500' alt="no" />
                            </Link>
                            <Link to="/blogDetails" className='medium hover:text-[#56cfe1] transition duration-300'>{blog.title}</Link>
                            <span className=' text-[#000] text-sm'>
                                <span className='text-[#878787] mx-0.5'>By</span>
                                admin
                                <span className='text-[#878787] mx-0.5'>In</span>
                                Fashion,Lifestyle
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="pages mx-auto flex items-center justify-center gap-5 py-10 border-t border-[#ddd] w-[80%]">
                {
                    [...Array(totalPages)].map((_, index) => (
                        <button key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`text-[#878787] cursor-pointer ${currentPage === index + 1 ? 'text-[#ec0101] ' : 'text-[#878787]'}`}>{index + 1}</button>
                    ))
                }
            </div>
        </div>
    )
}
