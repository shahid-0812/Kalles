import React, { useState } from 'react'

export const Home = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        <div className="slide-1 flex items-center" style={{
            backgroundImage: `url('./images/home/slider-01.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="titles leading-none mx-12 flex flex-col gap-2">
                <span className='medium text-[1.35rem]'>SUMMER 2023</span>
                <h1 className='bold text-[3rem]'>New Arrival Collection</h1>
                <button className='bg-[#000] w-fit text-[#fff] medium px-6 py-3'>Explore Now</button>
            </div>
        </div>,
        <div className="slide-1 flex items-center justify-end" style={{
            backgroundImage: `url('./images/home/slider-02.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="titles leading-none mx-12 flex flex-col gap-2">
                <span className='medium text-[1.35rem]'>New Season</span>
                <h1 className='bold text-[3rem]'>Lookbook Collection</h1>
                <button className='bg-[#000] w-fit text-[#fff] medium px-6 py-3'>Explore Now</button>
            </div>
        </div>,
        <div className="slide-1 flex items-center" style={{
            backgroundImage: `url('./images/home/slider-03.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="titles leading-none mx-12 flex flex-col gap-2">
                <span className='medium text-[1.35rem]'>SUMMER 2023</span>
                <h1 className='bold text-[3rem]'>New Arrival Collection</h1>
                <button className='bg-[#000] w-fit text-[#fff] medium px-6 py-3'>Explore Now</button>
            </div>
        </div>
    ]

    return (
        <div className="home-container">
            <div className="hero-section w-full h-full overflow-hidden">
                <div className="slider flex transition-transform duration-500"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}>


                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full">{slide}</div>
                    ))}
                </div>
                <div className="flex justify-center my-4 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full ${activeSlide === index ? 'bg-black' : 'bg-gray-400'}`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="home-grid px-10 w-full h-[500px] flex gap-8 py-15">

                <div className='relative flex justify-center flex-1 h-full'>
                    <img src="/images/home/grid-1.jpg" className="w-full h-full object-cover" alt="" />
                    <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm'>Women</button>
                </div>
                <div className="flex flex-col gap-8 flex-1">
                    <div className="relative flex justify-center flex-1 h-1/2 bg-center">
                        <img src="/images/home/grid-2-1.jpg" className="w-full h-full object-cover bg-center" alt="" />
                        <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm'>Accessories</button>
                    </div>
                    <div className="relative flex justify-center flex-1 h-1/2 overflow-hidden">
                        <img src="/images/home/grid-2-2.jpg" className="w-full h-full  object-cover " alt="" />
                        <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm'>Footwear</button>
                    </div>
                </div>
                <div className='relative flex justify-center flex-1 h-full'>
                    <img src="/images/home/grid-3.jpg" className="w-full h-full object-cover" alt="" />
                    <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm'>Women</button>
                </div>
            </div>
            <div className="trending flex flex-col items-center gap-1 px-10">
                <div className="flex items-center gap-3">
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                    <span className='uppercase bold text-2xl'>Trending</span>
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                </div>
                <span className='italic'>Top view in this week</span>
                <div className="trending-cards flex gap-5 flex-wrap">
                    <div className='trending-card'>
                        <div className='group relative'>
                            <img src="/images/home/trending-1.webp" className="h-[350px] group-hover:opacity-0" alt="" />
                            <img src="/images/home/trending-1.webp" className="absolute top-0 left-0 h-[350px] opacity-0 group-hover:opacity-100" alt="" />
                        </div>
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                    <div className='trending-card'>
                        <img src="/images/home/trending-1.webp" className="h-[350px]" alt="" />
                        <div className="trending-detail">
                            <h1>
                                Title
                            </h1>
                            <span className='text-[#696969]'>Price</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}










