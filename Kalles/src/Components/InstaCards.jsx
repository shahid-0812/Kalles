import React, { useState } from 'react'

export const InstaCards = () => {
    const [currIndex, setcurrIndex] = useState(0);
    const itemsPer = 6;



    const Instaimages = [
        "/images/home/insta-1.webp",
        "/images/home/insta-2.webp",
        "/images/home/insta-3.webp",
        "/images/home/insta-4.webp",
        "/images/home/insta-5.webp",
        "/images/home/insta-6.webp",
        "/images/home/insta-7.webp",
        "/images/home/insta-8.webp",
        "/images/home/insta-9.webp",
        "/images/home/insta-10.webp"
    ];

    const handleNext = () => {
        if (currIndex + itemsPer < Instaimages.length) {
            setcurrIndex(currIndex + itemsPer);
        }
    }
    const handlePrev = () => {
        if (currIndex - itemsPer >= 0) {
            setcurrIndex(currIndex - itemsPer);
        }
    }

    return (
        <div className="relative insta-cards flex flex-col overflow-hidden">
            <button onClick={handlePrev} className='absolute left-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                <i className="bi bi-chevron-left"></i>
            </button>
            <button onClick={handleNext} className='absolute right-3 top-1/2 -translate-y-1/2 z-10 border border-black hover:bg-[#56cfe1] cursor-pointer hover:text-[#fff] hover:border-[#56cfe1] transition duration-300 px-2 py-1 rounded-full'>
                <i className="bi bi-chevron-right"></i>
            </button>
            <div className='flex w-full flex-nowrap transition-transform duration-500'
                style={{
                    transform: `translateX(-${(100 / (Instaimages.length / itemsPer)) * (currIndex / itemsPer)}%)`,
                    width: `${(Instaimages.length / itemsPer) * 100}%`
                }}
            >
                {Instaimages.map((img, index) => {

                    return (<div key={index} className='bg-red-500 group overflow-hidden  w-1/6 cursor-pointer'>
                        <img src={img} className='w-full group-hover:scale-105 transform transition duration-300' alt="" />
                    </div>)
                })}
            </div>
        </div>
    )
}
