import React from 'react'

export const ResetPassword = () => {
    const hoverEffect = "hover:text-[#56cfe1] cursor-pointer transition duration-300"

    return (
        <div className='reset-password'>
            <div
                style={{
                    backgroundImage: `url('/images/men/bg-heading.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                    width: '100%',
                }} className='bg-header flex items-center justify-center'>
                <div className="flex flex-col gap-1 items-center">
                    <h1 className='text-[#fff] z-10 text-xl medium uppercase'>Login</h1>

                </div>
            </div>
            <div className='py-10 flex flex-col items-center justify-center max-md:px-5'>
                <div className='flex flex-col gap-3'>

                    <h1 className='uppercase text-xl font-bold'>Reset your password</h1>

                    <span className='max-w-110 text-sm text-[#878787]'>Lost your password? Please enter your email address. You will receive a link to create a new password via email.</span>
                    <form action="#" className='flex flex-col gap-5'>
                        <input type="email" name="email" id="email" placeholder='Email address' className='w-full border my-2 border-[#ddd] p-3 text-sm' />
                        <button className='capitilize w-full px-8 py-3 bg-[#000] text-[#fff] text-sm rounded-full medium hover:bg-[#44b6c7] transition duration-300 cursor-pointer'>Sign In</button>
                        <span className={`text-sm underline text-[#878787] ${hoverEffect} cursor-pointer`}>Cancel</span>
                    </form>
                </div>
            </div>
        </div>
    )
}
