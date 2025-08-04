import React from 'react'

export const ContactUs = () => {
    return (
        <div className="contact-us-container ">
            <div
                style={{
                    backgroundImage: `url('/images/aboutUs/contact.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                    width: '100%',
                }} className='bg-header flex text-[#fff] items-center justify-center flex-col gap-1'>
                <h1 className=' z-10 text-xl medium'>Collection</h1>
                <span className='z-10 text-sm'>Follow your passion, and success will follow you</span>
            </div>
            <div className='w-full h-[400px] bg-[#ddd]'></div>
            <div className='w-full px-10 py-10 flex justify-between gap-10'>
                <div className='flex flex-1 flex-col gap-8'>
                    <h1 className='uppercase text-xl font-bold'>drop us a line</h1>
                    <form action="" className='flex flex-col gap-5'>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-[#878787]'>Your Name (required)</label>
                            <input type="text" id='name' className='outline outline-[#ddd] transition duration-500  focus:outline-[#000] h-10 px-2 py-1' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-[#878787]'>Your Email (required)</label>
                            <input type="email" id='name' className='outline outline-[#ddd] transition duration-500  focus:outline-[#000] h-10 px-2 py-1' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-[#878787]'>Your Phone Number</label>
                            <input type="text" id='name' className='outline outline-[#ddd] transition duration-500  focus:outline-[#000] h-10 px-2 py-1' />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label className='text-sm text-[#878787]'>Your Message (required)</label>
                            <textarea rows={10} name="comment" id="comment" className='outline outline-[#ddd] transition duration-500  focus:outline-[#000]  px-2 py-1'></textarea>
                        </div>

                        <button type="submit" className='self-start w-full bold cursor-pointer rounded-full px-8 py-2 border-2 text-sm hover:bg-[#56cfe3] hover:border-[#56cfe3] hover:text-[#fff] transition duration-300'>Send</button>

                    </form>
                </div>
                <div className='flex flex-1 flex-col gap-8'>
                    <h1 className='uppercase text-xl font-bold'>contact information</h1>
                    <form action="" className='flex flex-col gap-5'>
                        <div className='flex flex-col text-sm text-[#878787] gap-5'>
                            <span>We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be appreciated. Please complete the form below.</span>
                            <span>
                                <i className="bi bi-house mr-2"></i>
                                184 Main Rd E, St Albans Victoria 3021, Australia
                            </span>
                            <span>
                                <i className="bi bi-telephone mr-2"></i>
                                1800-123-222 / 1900-1570-230
                            </span>
                            <span>
                                <i className="bi bi-envelope mr-2"></i>
                                contact@company.com
                            </span>
                            <span>
                                <i className="bi bi-clock mr-2"></i>
                                Everyday 9:00-17:00
                            </span>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}
