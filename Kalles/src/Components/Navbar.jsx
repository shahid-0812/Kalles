import { hover } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [isClose, setIsClose] = useState(false);
    const [isCountry, setshowCountry] = useState(false);

    const Country = [
        {
            flag: "fi fi-us",
            name: "Usa",
        },
        {
            flag: "fi fi-ca",
            name: "Canada",
        },
        {
            flag: "fi fi-de",
            name: "Germany",
        },
        {
            flag: "fi fi-jp",
            name: "Japan",
        },
        {
            flag: "fi fi-nz",
            name: "New Zealand",
        },
        {
            flag: "fi fi-gb",
            name: "United Kingdom",
        },
    ]

    const hoverEffect = "hover:text-[#56cfe1] cursor-pointer transition duration-300"
    const hoverScaleEffect = "hover:text-[#56cfe1] hover:scale-115 transform  cursor-pointer transition duration-300"

    return (
        <nav className='navbar-container'>
            {!isClose && (
                <div className="row-1 cursor-pointer regular text-xs py-1 text-[#fff] bg-[#e91e63] px-4 justify-between flex items-center">
                    <div className="w-10 h-10"></div>
                    <span>
                        Today deal sale off
                        <span className='medium text-sm'> 70%</span> End In.
                        <span className='group hover:text-[#e6e6e6] inline-flex items-center cursor-pointer'>
                            Hurry Up
                            <i className="bi bi-arrow-right ml-0.5 transform transition-all duration-300 group-hover:translate-x-1"></i>
                        </span>
                    </span>

                    <span className='flex items-center cursor-pointer' onClick={() => setIsClose(true)}>
                        <i className="bi bi-x text-lg"></i> close
                    </span>
                </div>
            )}
            <div className="row-2 bg-[#f6f6f8] text-[#878787] py-4 px-4 text-xs regular flex justify-between items-center">
                <div className="contacts flex gap-3">
                    <div>
                        <i className="bi bi-telephone mr-2"></i>
                        <span className={hoverEffect}>
                            +01 23456789
                        </span>
                    </div>
                    <div>
                        <i className="bi bi-envelope mr-2"></i>
                        <span className={hoverEffect}>
                            kalles@domain.com
                        </span>
                    </div>
                </div>
                <div className="sale">
                    <span>
                        Summer sale discount off
                        <span className='text-[#ec0101] px-1'>
                            50%!
                        </span>
                        <span className={`text-[#000] ${hoverEffect}`}>
                            Shop Now
                        </span>
                    </span>
                </div>
                <div className="flex gap-3">
                    <div>
                        <i className="bi bi-geo-alt mr-2"></i>

                        <span className={hoverEffect}>
                            Location
                        </span>
                    </div>
                    <div>

                        <span className={hoverEffect}>
                            English
                        </span>
                        <i className="bi bi-chevron-down ml-2"></i>
                    </div>
                    <div className='relative' onClick={() => setshowCountry(!isCountry)}>
                        <span className='fi fi-us'></span>
                        <span className={hoverEffect}>

                            {Country.name}
                        </span>
                        <i className="bi bi-chevron-down ml-2"></i>
                        {isCountry &&
                            <ul className='absolute -left-10 top-10'>
                                {
                                    Country.map((country, index) => (
                                        <li key={index}>
                                            <span className={country.flag}></span>
                                            <span>{country.name}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
            <div className="main-nav py-3 px-5 flex justify-between items-center">
                <h1 className="logo bold text-[2rem]">kalles</h1>
                <div className="nav-links text-sm flex items-center gap-8">
                    <Link to="/" className={hoverEffect}>Home</Link>
                    <Link to="/shop" className={hoverEffect}>Shop</Link>
                    <Link to="/" className={hoverEffect}>Sale</Link>
                    <Link to="/" className={hoverEffect}>Pages</Link>
                    <Link to="/" className={hoverEffect}>Lookbook</Link>
                    <Link to="/blog" className={hoverEffect}>Blog</Link>
                </div>
                <div className="user-nav flex items-center gap-4 text-xl">
                    <i className={`bi bi-search ${hoverScaleEffect}`}></i>
                    <i className={`bi bi-person text-2xl ${hoverScaleEffect}`}></i>
                    <i className={`bi bi-suit-heart ${hoverScaleEffect}`}></i>
                    <i className={`bi bi-cart ${hoverScaleEffect}`}></i>
                </div>
            </div>
        </nav>
    )
}

// #56cfe1
// #ec0101