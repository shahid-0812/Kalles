import React from 'react'
import { Link } from 'react-router-dom';

export const Shop = () => {

    const CatogaryCard = [
        {
            img: "/images/shop/cat-1.jpg",
            title: "women",
        },
        {
            img: "/images/shop/cat-2.jpg",
            title: "Men",
        },
        {
            img: "/images/shop/cat-3.jpg",
            title: "Accessories",
        },
        {
            img: "/images/shop/cat-4.jpg",
            title: "Footwear",
        },
        {
            img: "/images/shop/cat-5.jpg",
            title: "Tops",
        },
        {
            img: "/images/shop/cat-6.jpg",
            title: "Sale",
        },
    ];

    return (
        <div className="shop-container">
            <div
                style={{
                    backgroundImage: `url('/images/shop/bg-heading.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '120px',
                    width: '100%',
                }} className='bg-header flex items-center justify-center'>
                <h1 className='text-[#fff] z-10 text-xl medium'>Collection</h1>
            </div>
            <div className="catogary-cards flex py-15 flex-wrap justify-center items-center gap-5 max-w-screen-xl mx-auto ">

                {CatogaryCard.map((item, index) => (
                    <div key={index} className='relative flex justify-center cursor-pointer group overflow-hidden h-full'>
                        <img src={item.img} className="h-[400px] object-cover group-hover:scale-105 transition duration-300" alt="" />
                        <Link to={`/${item.title.toLowerCase()}`} className='bg-[#fff] w-35 text-center text-[#000] hover:bg-[#000] cursor-pointer hover:text-[#fff] medium px-6 py-3 absolute bottom-5 text-sm transition duration-300'>{item.title}</Link>
                    </div>
                ))}


            </div>
        </div>
    )
}
