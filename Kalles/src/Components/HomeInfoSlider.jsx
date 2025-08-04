import React, { useState } from 'react'

export const HomeInfoSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const infoSlide = [
        <div className="info-card flex gap-5">
            <i className='bi bi-car-front bounce-btn text-3xl text-[#878787]'></i>
            <div className='flex flex-col gap-1'>
                <span className='medium'>FREE SHIPPING</span>
                <span className='text-sm text-[#878787]'>Free shipping on all US order or order above $100</span>
            </div>
        </div>,
        <div className="info-card flex gap-5">
            <i className='bi bi-pie-chart bounce-btn text-3xl text-[#878787]'></i>
            <div className='flex flex-col gap-1'>
                <span className='medium'>SUPPORT 24/7</span>
                <span className='text-sm text-[#878787]'>Contact us 24 hours a day, 7 days a week</span>
            </div>
        </div>,
        <div className="info-card flex gap-5">
            <i className='bi bi-arrow-repeat bounce-btn text-3xl text-[#878787]'></i>
            <div className='flex flex-col gap-1'>
                <span className='medium'>30 DAYS RETURN</span>
                <span className='text-sm text-[#878787]'>Simply return it within 30 days for an exchange.</span>
            </div>
        </div>,
        <div className="info-card flex gap-5">
            <i className='bi bi-shield-lock bounce-btn text-3xl text-[#878787]'></i>
            <div className='flex flex-col gap-1'>
                <span className='medium'>100% PAYMENT SECURE</span>
                <span className='text-sm text-[#878787]'>We ensure secure payment with PEV</span>
            </div>
        </div>,
    ];
    return (
        <div className="info-slider w-full h-full overflow-hidden py-10">
            <div className="info flex transition-transform duration-500 "
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {infoSlide.map((slide, index) => (
                    <div key={index} className="min-w-full px-10 ">{slide}</div>
                ))}
            </div>
            <div className="flex justify-center my-4 gap-2">
                {infoSlide.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSlide(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${activeSlide === index ? 'bg-black' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>
        </div>
    )
}
