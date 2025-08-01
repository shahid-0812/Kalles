import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { TrendingCards } from '../Components/TrendingCards';
import { BestSellers } from '../Components/BestSellers';
import { BlogsCards } from '../Components/BlogsCards';

export const Home = () => {

    const [activeSlide, setActiveSlide] = useState(0);


    const slides = [
        <div className="slide-1  flex items-center" style={{
            backgroundImage: `url('./images/home/slider-01.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="titles leading-none px-[10%] flex flex-col gap-2 max-w-screen-xl">
                <span className='medium text-[1.35rem]'>SUMMER 2023</span>
                <h1 className='bold text-[3rem]'>New Arrival Collection</h1>
                <Link to="/shop" className='slide-btn bg-[#000] w-fit text-[#fff] medium px-6 py-3'>
                    <span>
                        Explore Now
                    </span>
                </Link >
            </div>
        </div>,
        <div className="slide-1  flex items-center justify-end" style={{
            backgroundImage: `url('./images/home/slider-02.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="titles leading-none px-[10%] flex flex-col gap-2 max-w-screen-xl">
                <span className='medium text-[1.35rem]'>New Season</span>
                <h1 className='bold text-[3rem]'>Lookbook Collection</h1>
                <Link to="/shop" className='slide-btn bg-[#000] w-fit text-[#fff] medium px-6 py-3'>
                    <span>
                        Explore Now
                    </span>
                </Link >

            </div>
        </div>,
        <div className="slide-1  flex items-center" style={{
            backgroundImage: `url('./images/home/slider-03.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
        }}>
            <div className="titles leading-none px-[10%] flex flex-col gap-2 max-w-screen-xl">
                <span className='medium text-[1.35rem]'>SUMMER 2023</span>
                <h1 className='bold text-[3rem]'>New Arrival Collection</h1>
                <Link to="/shop" className='slide-btn bg-[#000] w-fit text-[#fff] medium px-6 py-3'>
                    <span>
                        Explore Now
                    </span>
                </Link >

            </div>
        </div>
    ];

    const infoData = [
        {
            icon: "bi bi-car-front",
            info: "FREE SHIPPING",
            desc: "Free shipping on all US order or order above $100",
        },
        {
            icon: "bi bi-pie-chart",
            info: "SUPPORT 24/7",
            desc: "Contact us 24 hours a day, 7 days a week",
        },
        {
            icon: "bi bi-arrow-repeat",
            info: "30 DAYS RETURN",
            desc: "Simply return it within 30 days for an exchange.",
        },
        {
            icon: "bi bi-shield-lock",
            info: "100% PAYMENT SECURE",
            desc: "We ensure secure payment with PEV",
        },
    ]




    return (
        <div className="home-container ">
            <div className="hero-section w-full h-full overflow-hidden">
                <div className="slider flex transition-transform duration-500 "
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}>


                    {slides.map((slide, index) => (
                        <div key={index} className="min-w-full ">{slide}</div>
                    ))}
                </div>
                <div className="flex justify-center my-4 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full cursor-pointer ${activeSlide === index ? 'bg-black' : 'bg-gray-400'}`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className="home-grid max-w-screen-xl mx-auto px-10 w-full flex gap-8 py-15 h-[800px]">
                <div className='grid-1 relative flex justify-center  h-full flex-1 w-full group overflow-hidden cursor-pointer'>
                    <img src="/images/home/grid-1.jpg" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" alt="" />
                    <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm hover:text-[#fff] hover:bg-[#000] transition duration-300 cursor-pointer'>Women</button>
                </div>
                <div className="grid-2 flex flex-col gap-8 flex-1 w-1/3 ">
                    <div className="relative flex justify-center bg-center group overflow-hidden cursor-pointer">
                        <img src="/images/home/grid-2-1.jpg" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" alt="" />
                        <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm hover:text-[#fff] hover:bg-[#000] transition duration-300 cursor-pointer'>Accessories</button>
                    </div>
                    <div className="relative flex justify-center overflow-hidden cursor-pointer group">
                        <img src="/images/home/grid-2-2.jpg" className="w-full h-full object-cover bg-center transform group-hover:scale-105 transition duration-300" alt="" />

                        <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm hover:text-[#fff] hover:bg-[#000] transition duration-300 cursor-pointer'>Footwear</button>
                    </div>
                </div>
                <div className='grid-3 relative flex justify-center h-full flex-1 w-1/2 group overflow-hidden cursor-pointer'>
                    <img src="/images/home/grid-3.jpg" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300" alt="" />
                    <button className='bg-[#fff] w-fit text-[#000] medium px-6 py-3 absolute bottom-5 text-sm hover:text-[#fff] hover:bg-[#000] transition duration-300 cursor-pointer'>Women</button>
                </div>
            </div>
            <TrendingCards />
            <div className='relative w-full px-10 py-10 flex gap-5 items-center justify-center max-w-screen-xl mx-auto'>
                <div className='relative flex items-center justify-center overflow-hidden'>
                    <img src="/images/home/img-1.jpg" className='transfrom hover:scale-150 hover:rotate-12 transition duration-1000' alt="" />
                    <div className='medium absolute flex flex-col text-center text-[#fff] leading-5'>
                        <h1 className=' text-3xl'>LOOKBOOK 2023</h1>
                        <span>MAKE LOVE THIS LOOK</span>
                    </div>
                </div>
                <div className='relative flex items-center justify-center overflow-hidden'>
                    <img src="/images/home/img-2.jpg" className='transfrom scale-120 hover:-translate-y-8 bg-repeat transition duration-500' alt="" />
                    <div className='medium absolute flex flex-col text-center text-[#fff] leading-5'>
                        <span>SUMMER SALE</span>
                        <h1 className=' bold text-5xl'>UP TO 70% </h1>
                    </div>
                </div>
            </div>
            <BestSellers />
            <BlogsCards />
            <div className="insta w-full flex gap-5 flex-col py-10">
                <div className="flex justify-center items-center gap-3">
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                    <span className='uppercase bold text-2xl'>@ FOLLOW US ON INSTAGRAM</span>
                    <div className="w-20 h-0.5 bg-[#000]"></div>
                </div>
                <div className="insta-cards flex flex-col">
                    <div className='flex flex-wrap'>
                        <div className='bg-red-500 group overflow-hidden  w-[16.66%] cursor-pointer'>
                            <img src="/images/home/insta-1.webp" className=' group-hover:scale-105 transform transition duration-300' alt="" />
                        </div>
                        <div className='bg-yellow-500 group overflow-hidden  w-[16.66%] cursor-pointer'>
                            <img src="/images/home/insta-2.jpg" className=' group-hover:scale-105 transform transition duration-300' alt="" />
                        </div>
                        <div className='bg-red-500 group overflow-hidden  w-[16.66%] cursor-pointer'>
                            <img src="/images/home/insta-3.webp" className=' group-hover:scale-105 transform transition duration-300' alt="" />
                        </div>
                        <div className='bg-purple-500 group overflow-hidden w-[16.66%] cursor-pointer'>
                            <img src="/images/home/insta-1.webp" className=' group-hover:scale-105 transform transition duration-300' alt="" />
                        </div>
                        <div className='bg-yellow-500 group overflow-hidden w-[16.66%] cursor-pointer'>
                            <img src="/images/home/insta-2.jpg" className=' group-hover:scale-105 transform transition duration-300' alt="" />
                        </div>
                        <div className='bg-red-500 group overflow-hidden w-[16.66%] cursor-pointer'>
                            <img src="/images/home/insta-3.webp" className=' group-hover:scale-105 transform transition duration-300' alt="" />
                        </div>
                    </div>
                </div>
                <div className="info-cards flex gap-10 py-10 px-10 justify-center bgred-600">

                    {
                        infoData.map((info, index) => (
                            <div key={index} className="info-card flex gap-5">
                                <i className={`${info.icon} bounce-btn text-3xl text-[#878787]`}></i>

                                <div className='flex flex-col gap-1'>
                                    <span className='medium'>{info.info}</span>
                                    <span className='text-sm text-[#878787]'>{info.desc}</span>
                                </div>
                            </div>
                        ))
                    }




                </div>
            </div>
        </div >
    )
}










