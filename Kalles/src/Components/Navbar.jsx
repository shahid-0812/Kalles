import React from 'react'

export const Navbar = () => {
    return (
        <nav className='navbar-container'>
            <div className='row-1 regular text-xs py-1 text-[#fff] bg-[#e91e63] px-4 justify-between flex items-center'>
                <div className="w-10 h-10 "></div>
                <span>Today deal sale off <span className='medium text-sm'> 70% </span>End In. <span className=''>Hurry Up </span> <i className="bi bi-arrow-right"></i>
                </span>
                <span className='flex items-center'><i className="bi bi-x text-lg"></i>close</span>
            </div>
            <div className="row-2 bg-[#f6f6f8] text-[#878787] py-4 px-4 text-xs regular flex justify-between">
                <div className="contacts  flex gap-3">
                    <span>
                        <i className="bi bi-telephone mr-2"></i>
                        +01 23456789
                    </span>
                    <span>
                        <i className="bi bi-envelope mr-2"></i>
                        kalles@domain.com
                    </span>
                </div>
                <div className="sale">
                    <span>
                        Summer sale discount off
                        <span className='text-[#ec0101] px-1'>
                            50%!
                        </span>
                        <span className='text-[#000]'>
                            Shop Now
                        </span>
                    </span>
                </div>
                <div className="flex gap-3">
                    <span>
                        <i className="bi bi-geo-alt mr-2"></i>
                        Location
                    </span>
                    <span>
                        English
                        <i className="bi bi-chevron-down ml-2"></i>
                    </span>
                    <span>
                        USD
                        <i className="bi bi-chevron-down ml-2"></i>
                    </span>
                </div>
            </div>
            <div className="main-nav py-3 px-5 flex justify-between items-center">
                <h1 className="logo bold text-[2rem]">kalles</h1>
                <div className="nav-links text-sm flex items-center gap-8">
                    <span>Shop</span>
                    <span>Product</span>
                    <span>Sale</span>
                    <span>Pages</span>
                    <span>Lookbook</span>
                    <span>Blog</span>
                </div>
                <div className="user-nav flex items-center gap-4 text-xl">
                    <i className='bi bi-search'></i>
                    <i className='bi bi-person text-2xl'></i>
                    <i className='bi bi-suit-heart'></i>
                    <i className='bi bi-cart'></i>
                </div>
            </div>
        </nav>
    )
}

// #56cfe1
// #ec0101