import { hover, useTransform } from 'framer-motion';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { SaleHover } from './SaleHover';

export const Navbar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartShow, setcartShow] = useState(false);

    const [navActive, setNavActive] = useState("menu");

    const countryList = [
        { flag: "fi fi-ca", name: "Canada" },
        { flag: "fi fi-fr", name: "France" },
        { flag: "fi fi-de", name: "Germany" },
        { flag: "fi fi-jp", name: "Japan" },
        { flag: "fi fi-nz", name: "New Zealand" },
        { flag: "fi fi-gb", name: "United Kingdom" },
        { flag: "fi fi-us", name: "USA" },
        { flag: "fi fi-vn", name: "Vietnam" },
    ];
    const languageList = [
        { code: 'en', name: 'English' },
        { code: 'ur', name: 'Urdu' },
    ];

    const [isClose, setIsClose] = useState(false);
    const [showCountry, setShowCountry] = useState(false);
    const [showLanguage, setShowLanguage] = useState(false)
    const [selected, setSelected] = useState(countryList[0]);
    const [selectedLanguage, setSelectedLanguage] = useState(countryList[0]);

    const togglelangDropdown = () => setSelectedLanguage(!showLanguage);
    const handleLangSelect = (lang) => {
        setSelectedLanguage(lang);
        setShowLanguage(false);
    }

    const toggleDropdown = () => setShowCountry(!showCountry);
    const handleSelect = (country) => {
        setSelected(country);
        setShowCountry(false);
    };

    const [saleHover, setSaleHover] = useState(false);



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
            <div className="row-2 bg-[#f6f6f8] text-[#878787] py-4 px-4 text-xs regular flex justify-between items-center max-md:flex-col max-md:justify-center">
                <div className="contacts flex gap-3 max-md:hidden">
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
                <div className="flex gap-3 relative">
                    <div>
                        <i className="bi bi-geo-alt mr-2"></i>
                        <span className={hoverEffect}>
                            Location
                        </span>
                    </div>
                    <div className='' onClick={togglelangDropdown}>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <span className={selectedLanguage.name}></span>
                            <i className="bi bi-chevron-down"></i>
                        </div>

                        {showLanguage && (
                            <ul className=' absolute top-full left-10 mt-2 bg-white shadow-md w-[200px] z-10'>
                                {languageList.map((lang, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleLangSelect(lang)}
                                        className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'
                                    >

                                        <span>{lang.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='' onClick={toggleDropdown}>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <span className={selected.flag}></span>
                            <span>{selected.name}</span>
                            <i className="bi bi-chevron-down"></i>
                        </div>

                        {showCountry && (
                            <ul className=' absolute top-full left-10 mt-2 bg-white shadow-md w-[200px] z-10'>
                                {countryList.map((country, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelect(country)}
                                        className='flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer'
                                    >
                                        <span className={country.flag}></span>
                                        <span>{country.name}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <div className="main-nav relative py-3 px-5 flex justify-between items-center">
                <div className='hidden max-md:flex'>
                    <button onClick={() => setMobileOpen(!mobileOpen)}>
                        <i className="bi bi-list-nested"></i>
                    </button>
                </div>
                <h1 className="logo bold text-[2rem]">kalles</h1>
                <div className="nav-links text-sm flex items-center gap-8 max-md:hidd max-md:hidden">
                    <Link to="/" className={hoverEffect}>Home</Link>
                    <Link to="/shop" className={hoverEffect}>Shop</Link>
                    <div
                        onMouseEnter={() => setSaleHover(true)}
                        onMouseLeave={() => setSaleHover(false)}
                        className="overflow-hidden"
                    >
                        <Link to="/" className={hoverEffect}>Sale</Link>
                        {saleHover && (
                            <div className='absolute overflow-hidden top-12 left-1/12 z-100'>
                                <SaleHover />
                            </div>
                        )}
                    </div>

                    <Link to="/" className={hoverEffect}>Pages</Link>
                    <Link to="/" className={hoverEffect}>Lookbook</Link>
                    <Link to="/blog" className={hoverEffect}>Blog</Link>
                </div>
                <div className="user-nav flex items-center gap-4 text-xl">
                    <i className={`bi bi-search ${hoverScaleEffect}`}></i>
                    <i className={`bi bi-person text-2xl ${hoverScaleEffect} max-md:hidden`}></i>
                    <Link to="/cart">
                        <i className={`bi bi-suit-heart ${hoverScaleEffect} max-md:hidden`}></i>
                    </Link>
                    <div onClick={() => setcartShow(!cartShow)}>
                        <i className={`bi bi-cart ${hoverScaleEffect}`}></i>
                    </div>

                </div>

                {/* Cart nav */}
                {cartShow && (
                    <div
                        className="fixed inset-0 bg-black/30 z-40"
                        onClick={() => setcartShow(false)}
                    />
                )}

                <div
                    className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${cartShow ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex justify-between items-center mb-4  p-3">
                        <h2 className="text-lg medium uppercase">Shopping Cart</h2>
                        <button onClick={() => setcartShow(false)}>
                            <i className="bi bi-x-lg"></i>
                        </button>
                    </div>
                    <div className='flex flex-col gap-6 shadow-2xl py-4 px-2'>
                        <span className='text-xs text-[#878787]'>Free Shipping for all orders above <span className='text-[#ff0000] medium'>$100.00</span></span>
                        <div className='relative'>
                            <i className="bi bi-truck absolute -top-5 text-2xl"></i>
                            <div className='w-full h-3 rounded-full bg-[#F3F3F3]'></div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center px-5 py-10'>
                        <i className="bi bi-cart-x text-7xl text-[#878787]"></i>
                        <span className='text-sm text-[#878787]'>Your cart is empty.</span>
                        <button className='uppercase px-6 py-3 bg-[#56cfe1] text-[#fff] text-sm rounded-full medium'>return to shop</button>
                    </div>
                </div>


                {/*  */}


                {
                    mobileOpen &&
                    (
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={() => setMobileOpen(false)}
                        />
                    )}
                <div
                    className={`overflow-y-scroll fixed top-0 left-0 w-2/3 max-w-xs h-full bg-white shadow-md z-50  transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >

                    <div className='flex justify-between items-center'>
                        <button onClick={() => setNavActive("menu")} className={`flex-1 px-5 py-4 text-xs medium uppercase bg-[#F3F3F3] border-b-2  ${navActive === "menu" ? 'border-b-[#56cfe1] bg-[#ddd]' : " border-b-transparent"}`}>Menu</button>
                        <button onClick={() => setNavActive("categories")} className={`flex-1 px-5 py-4 text-xs medium uppercase bg-[#F3F3F3] border-b-2  ${navActive === "categories" ? 'border-b-[#56cfe1] bg-[#ddd]' : " border-b-transparent"}`}>Categories</button>
                    </div>

                    {
                        navActive === "menu" &&
                        <div className="flex flex-col border-b border-[#ddd] text-sm">
                            <Link to="/" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>Home</Link>
                            <Link to="/shop" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>Shop</Link>
                            <Link to="/" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>Sale</Link>
                            <Link to="/" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>Pages</Link>
                            <Link to="/" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>Lookbook</Link>
                            <Link to="/blog" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>Blog</Link>
                            <Link to="/blog" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'> <i className="bi bi-suit-heart mr-2"></i>Wishlist</Link>
                            <Link to="/blog" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'><i className="bi bi-search mr-2"></i>Search</Link>
                            <Link to="/blog" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'><i className="bi bi-suit-heart mr-2"></i>Login / Register</Link>
                            <div className='border-b flex flex-col gap-2 border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'>
                                <span>Need help?</span>
                                <span className='text-sm text-[#878787]'>
                                    <i className="bi bi-telephone mr-2"></i>+01 23456789
                                </span>
                                <span className='text-sm text-[#878787]'>
                                    <i className="bi bi-envelope mr-2"></i>kalles@domain.com
                                </span>
                            </div>
                            <Link to="/blog" className='border-b border-[#ddd] px-5 py-4 focus:bg-[#f3f3f3]'><i className="bi bi-suit-heart mr-2"></i>Login / Register</Link>

                        </div>
                    }
                    {
                        navActive === "categories" &&
                        <div className="flex flex-col gap-4 text-sm">
                            <Link to="/">Home</Link>
                            <Link to="/shop">bag</Link>
                            <Link to="/">hats</Link>
                            <Link to="/">jewellary</Link>
                            <Link to="/">flower</Link>
                            <Link to="/blog">men</Link>
                        </div>
                    }

                </div>
            </div>
            <div className='fixed hidden  left-0 bottom-0 z-10 w-full h-auto bg-white shadow-2xl max-md:flex justify-around px-5 py-2'>
                <div className='flex flex-col items-center justify-center'>
                    <i className="bi bi-grid"></i>
                    <span className='text-sm'>Shop</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <i className="bi bi-suit-heart"></i>
                    <span className='text-sm'>Wishlist</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <i className="bi bi-cart"></i>
                    <span className='text-sm'>Cart</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <i className="bi bi-person text-lg"></i>
                    <span className='text-sm'>Account</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <i className="bi bi-search"></i>
                    <span className='text-sm'>Search</span>
                </div>
            </div>
        </nav>
    )
}

// #56cfe1
// #ec0101
