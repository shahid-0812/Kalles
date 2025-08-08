import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    const hoverEffect = "hover:text-[#56cfe1] cursor-pointer transition duration-300"

    return (
        <>

            <footer className='text-sm footer-container flex px-10 gap-5 items-start justify-center  py-18 bg-[#f6f6f8]'>
                <div className="column-1 px-5 flex  flex-col gap-4">
                    <h1 className="logo bold text-[2rem]">kalles</h1>
                    <div className='flex flex-col gap-4 text-[#878787] '>
                        <div className='flex justify-start gap-3'>
                            <i className='bi bi-geo-alt text-2xl '></i>
                            <span>
                                184 Main Rd E, St Albans VIC 3021, Australia
                            </span>
                        </div>
                        <div className='flex justify-start gap-3'>
                            <i className='bi bi-envelope text-2xl '></i>
                            <span>
                                contact@company.com
                            </span>
                        </div>
                        <div className='flex justify-start gap-3'>
                            <i className='bi bi-telephone text-2xl '></i>
                            <span>
                                +001 2233 456
                            </span>
                        </div>
                        <div className="social-links flex gap-6">
                            <i className="bi bi-facebook transform hover:-translate-y-1 hover:text-[#3b5998] text-lg transition duration-300 cursor-pointer "></i>
                            <i className="bi bi-twitter-x transform hover:-translate-y-1 hover:text-[#1da1f2] text-lg transition duration-300 cursor-pointer "></i>
                            <i className="bi bi-instagram transform hover:-translate-y-1 hover:text-[#e03566] text-lg transition duration-300 cursor-pointer "></i>
                            <i className="bi bi-linkedin transform hover:-translate-y-1 hover:text-[#0077b5] text-lg transition duration-300 cursor-pointer "></i>
                            <i className="bi bi-pinterest transform hover:-translate-y-1 hover:text-[#cb2027] text-lg transition duration-300 cursor-pointer "></i>
                        </div>
                    </div>
                </div>
                <div className="column-2 px-5 w-fit flex flex-col gap-4">
                    <h1 className="logo medium ">Categories</h1>
                    <div className='flex flex-col gap-2 text-[#878787] '>
                        <Link className={hoverEffect} to="/men">Men</Link>
                        <Link className={hoverEffect} to="/women">Women</Link>
                        <Link className={hoverEffect} to="/accessories">Accessories</Link>
                        <Link className={hoverEffect} to="/shoes">Shoes</Link>
                        <Link className={hoverEffect} to="/watch">Watch</Link>
                        <Link className={hoverEffect} to="/dress">Dress</Link>
                    </div>
                </div>
                <div className="column-3 px-5 w-fit flex flex-col gap-4">
                    <h1 className="logo medium ">Information</h1>
                    <div className='flex flex-col whitespace-nowrap gap-2 text-[#878787] '>
                        <Link className={hoverEffect} to="/aboutUs">About us</Link>
                        <Link className={hoverEffect} to="/contactUs">Contact us</Link>
                        <Link className={hoverEffect} to="/termsCondition">Terms & Conditions </Link>
                        <Link className={hoverEffect} to="/return">Return & Exchange</Link>
                        <Link className={hoverEffect} to="/shipping">Shipping & Delivery</Link>
                        <Link className={hoverEffect} to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
                <div className="column-4 px-5 w-fit flex flex-col gap-4">
                    <h1 className="logo medium ">Useful links</h1>
                    <div className='flex flex-col whitespace-nowrap gap-2 text-[#878787] '>
                        <span className={hoverEffect}>Latest News</span>
                        <span className={hoverEffect}>My Account</span>
                        <span className={hoverEffect}>Size Guide</span>
                        <span className={hoverEffect}>FAQs</span>
                        <span className={hoverEffect}>FAQs 2</span>
                    </div>
                </div>
                <div className="column-5 px-5  flex-col gap-4">
                    <h1 className="logo medium ">Newsletter Signup</h1>
                    <div className='flex flex-col gap-2 text-[#878787] '>
                        <span>Subscribe to our newsletter and get 10% off your first purchase</span>
                        <form className='w-full bg--500 h-full rounded-full border border-black flex items-center px-1 py-1'>
                            <input type="text" placeholder='Your email address' className='focus:outline-0 mx-1 focus:border-b-1 placeholder:text-sm' />
                            <button type='submit' className='bg-black text-[#fff] rounded-full w-full h-full py-2 px-6  medium'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </footer>
            <div className='bg-[#fff] text-[#878787] text-sm flex justify-between px-10 py-4'>
                <span>
                    All Rights Reserved ©&nbsp;
                    {new Date().getFullYear()}
                    <span className='mx-2 text-[#56cfe1]'>
                        Kalles
                    </span>
                    -Developed by
                    <span className='text-[#000] mx-1'>
                        The4
                    </span>
                </span>
                <div className='flex gap-4'>
                    <span className={hoverEffect}>Shop</span>
                    <Link to="/aboutUs" className={hoverEffect}>About Us</Link>
                    <Link to="/contactUs" className={hoverEffect}>Contact Us</Link>
                    <span className={hoverEffect}>Blog</span>
                </div>
            </div>
        </>
    )
}
