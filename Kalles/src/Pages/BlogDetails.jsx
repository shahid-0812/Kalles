import React, { useState } from 'react'

export const BlogDetails = () => {
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
    return (
        <div className='blog-details-container'>
            <div
                style={{
                    backgroundImage: `url('/images/blog/blog-card-1.webp')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '120px',
                    width: '100%',
                }} className='bg-header flex items-center justify-center'>
                <h1 className='text-[#fff] z-10 text-xl medium'>Collection</h1>
            </div>
            <div className="blog-details flex flex-col px-15 py-15 gap-12">
                <img src="/images/blog/blog-card-1.webp" alt="" />
                <span className='text-[#878787] text-sm'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</span>
                <span className='px-10 py-8 flex bg-[#ececec] text-[#878787]'>
                    <i className="bi bi-quote text-[1.5rem]"></i>
                    <span className='text-sm leading-5 pt-2 italic'>Until the Digital Age, typography was a specialized occupation. Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</span>
                </span>
                <div className="looks flex flex-col items-center gap-5">
                    <h1 className='medium text-sm'>SHOP THE LOOK</h1>
                    <img src="/images/blog/look.webp" alt="" />
                </div>
                <span className='text-[#878787] text-sm'>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga artists, comic book artists, graffiti artists, and now—anyone who arranges words, letters, numbers, and symbols for publication, display, or distribution—from clerical workers and newsletter writers to anyone self-publishing materials.</span>
                <div className="outfit flex flex-col items-center gap-5">
                    <h1 className='medium text-sm'>OUTFIT COLLECTIONS</h1>
                    <div className="flex gap-3">
                        <img src="/images/blog/outfit-1.webp" className='w-[33%] h-auto' alt="" />
                        <img src="/images/blog/outfit-2.webp" className='w-[33%] h-auto' alt="" />
                        <img src="/images/blog/outfit-3.webp" className='w-[33%] h-auto' alt="" />
                    </div>
                </div>
                <span className='text-[#878787] text-sm'>Until the Digital Age, typography was a specialized occupation. Digitization opened up typography to new generations of previously unrelated designers and lay users, and David Jury, head of graphic design at Colchester Institute in England, states that “typography is now something everybody does. As the capability to create typography has become ubiquitous, the application of principles and best practices developed over generations of skilled workers and professionals has diminished. Ironically, at a time when scientific techniques.</span>
            </div>
            <div className="tags flex items-center flex-col gap-8 px-15 py-15">
                <div className='flex w-full justify-between border border-[#ddd] px-6 py-4'>
                    <div className="flex gap-2 items-center">
                        <i className="bi bi-tags text-xl"></i>
                        <span className='text-sm text-[#878787]'>Fashion, </span>
                        <span className='text-sm text-[#878787]'>Lifestyle</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className="bi bi-chat-text text-xl"></i>
                        <span className='text-sm text-[#878787]'>comments</span>
                    </div>
                </div>
                <div className="social-links flex gap-6">
                    <span className='bg-[#000] text-[#fff] px-3 py-2 rounded-full transform hover:-translate-y-1  hover:bg-[#fff] hover:text-[#000] transition duration-300 cursor-pointer'>
                        <i className="bi bi-facebook"></i>
                    </span>
                    <span className='bg-[#000] text-[#fff] px-3 py-2 rounded-full transform hover:-translate-y-1  hover:bg-[#fff] hover:text-[#000] transition duration-300 cursor-pointer'>
                        <i className="bi bi-twitter-x"></i>
                    </span>
                    <span className='bg-[#000] text-[#fff] px-3 py-2 rounded-full transform hover:-translate-y-1  hover:bg-[#fff] hover:text-[#000] transition duration-300 cursor-pointer'>
                        <i className="bi bi-pinterest"></i>
                    </span>
                    <span className='bg-[#000] text-[#fff] px-3 py-2 rounded-full transform hover:-translate-y-1  hover:bg-[#fff] hover:text-[#000] transition duration-300 cursor-pointer'>
                        <i className="bi bi-instagram"></i>
                    </span>
                    <span className='bg-[#000] text-[#fff] px-3 py-2 rounded-full transform hover:-translate-y-1  hover:bg-[#fff] hover:text-[#000] transition duration-300 cursor-pointer'>
                        <i className="bi bi-telegram"></i>
                    </span>
                    <span className='bg-[#000] text-[#fff] px-3 py-2 rounded-full transform hover:-translate-y-1  hover:bg-[#fff] hover:text-[#000] transition duration-300 cursor-pointer'>
                        <i className="bi bi-envelope"></i>
                    </span>
                </div>
                <div className='flex gap-10 text-xl'>
                    <i className="bi bi-chevron-left transition duration-300 hover:text-[#56cfe1] cursor-pointer"></i>
                    <i className="bi bi-grid-3x3-gap text-2xl transition duration-300 hover:text-[#56cfe1] cursor-pointer"></i>
                    <i className="bi bi-chevron-right hidden transition duration-300 hover:text-[#56cfe1] cursor-pointer"></i>
                </div>
            </div>
            <div className="related flex flex-col items-center gap-5 px-10 py-5 ">
                <h1 className='bold uppercase text-xl'>Related Articles</h1>

                <div className="relative  w-full overflow-hidden ">
                    {/* Arrows */}
                    <button onClick={handlePrev} className='absolute left-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                        <i className="bi bi-chevron-left"></i>
                    </button>
                    <button onClick={handleNext} className='absolute right-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                        <i className="bi bi-chevron-right"></i>
                    </button>

                    {/* Slider Container */}
                    <div
                        className="flex gap-4 transition-transform duration-500 "
                        style={{
                            transform: `translateX(-${(100 / Blogs.length) * currIndex}%)`,
                            width: `${(Blogs.length) * (100 / itemsPer)}%`
                        }}
                    >
                        {
                            Blogs.map((item, index) => (
                                <>
                                    <div key={index} className=' w-[33.3333%] flex flex-col items-center justify-center group gap-3'>
                                        <img src={item.img} className='w-full h-full object-cover' alt="" />
                                        <div className='flex flex-col items-center gap-2'>
                                            <span className='border-b pb-1 text-sm'>The Easiest Way to Break Out on Top</span>
                                            <span className='text-[#878787] italic pb-1 text-sm'>May 11, 2022</span>
                                        </div>

                                    </div>
                                </>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

