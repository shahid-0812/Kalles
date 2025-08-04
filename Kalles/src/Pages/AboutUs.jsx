import { motion } from 'framer-motion'
import React from 'react'

export const AboutUs = () => {
    const aboutUs = [
        {
            title: "our mission",
            desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam."
        },

        {
            title: "OUR STORIES",
            desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            title: "our APPROACH",
            desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        },
        {
            title: "our PHILOSOPHY",
            desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem ullam."
        },

    ]

    const emoloyee = [
        {
            img: "/images/aboutUs/img-1.jpg",
            name: "Lisa John",
            designation: "Fashion Designer",
            social: ["instagram", "facebook", "twitter-x", "behance"]
        },
        {
            img: "/images/aboutUs/img-2.jpg",
            name: "Jane Doe",
            designation: "Fashion Designer",
            social: ["instagram", "facebook", "twitter-x", "dribbble"]
        },
        {
            img: "/images/aboutUs/img-3.jpg",
            name: "Cartherin Forres",
            designation: "Marketing Director",
            social: ["instagram", "facebook", "twitter-x", "tiktok"]
        },
    ];

    return (
        <div className='about-us-container '>
            <div
                style={{
                    backgroundImage: `url('/images/aboutUs/bg-heading.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                    width: '100%',
                }} className='bg-header flex text-[#fff] items-center justify-center flex-col gap-1'>
                <h1 className=' z-10 text-xl medium'>Collection</h1>
                <span className='z-10 text-sm'>Follow your passion, and success will follow you</span>
            </div>
            <div className="about-us px-10 py-10">
                <div className='flex flex-wrap gap-8'>
                    {aboutUs.map((item, index) => (
                        <div key={index} className="max-w-[48%] flex flex-col gap-2">
                            <h1 className='uppercase font-bold text-xl'>{item.title}</h1>
                            <span className='text-sm text-[#878787]'>{item.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
            <span className='px-10 mx-10 py-8 flex bg-[#ececec] text-[#878787]'>
                <i className="bi bi-quote text-[1.5rem]"></i>
                <span className='text-sm leading-5 pt-2 italic'>
                    I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Quis nostrum exercitationem ullam.</span>
            </span>
            <div className="about-cards px-10 flex gap-5 py-15 w-full">
                {emoloyee.map((item, index) => (
                    <div key={index} className='flex flex-col gap-1 relative group cursor-pointer items-center'>
                        <div className="about-overlay opacity-0 group-hover:opacity-100 flex transition duration-500 justify-center py-10 gap-3 text-xl text-[#878787] items-end absolute w-full h-full bg-[#f6f6f6e6]">
                            {item.social.map((social, index) => (
                                <i key={index} className={`bi bi-${social} hover:text-[#3b5998] transition duration-300 cursor-pointer`}></i>
                            ))}

                        </div>
                        <img src={item.img} className='w-[400px] h-auto' alt="" />
                        <div className='text-center'>
                            <h1 className='font-bold text-lg leading-8'>{item.name}</h1>
                            <span className='text-sm text-[#878787]'>{item.designation}</span>
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}
