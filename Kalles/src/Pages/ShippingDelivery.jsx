import React from 'react'

export const ShippingDelivery = () => {
    return (
        <div className='return-and-exchange-container'>
            <div
                style={{
                    backgroundImage: `url('/images/aboutUs/contact.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                    width: '100%',
                }} className='bg-header flex text-[#fff] items-center justify-center flex-col gap-1'>
                <h1 className=' z-10 text-xl medium'>RETURNS & EXCHANGES POLICY</h1>
                <span className='z-10 text-sm'>Follow your passion, and success will follow you</span>
            </div>
            <div className="flex flex-col gap-5 terms px-10 py-15">
                <div className="flex flex-col gap-5">
                    <span className='font-bold text-xl'>
                        Delivery
                    </span>
                    <span className="text-sm text-[#878787]">
                        All orders shipped with UPS Express
                    </span>
                    <span className="text-sm text-[#878787]">
                        Always free shipping for orders over US $250.
                    </span>
                    <span className="text-sm text-[#878787]">
                        All orders are shipped with a UPS tracking number.
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <span className='font-bold text-xl'>
                        Returns
                    </span>
                    <span className="text-sm text-[#878787]">
                        Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.
                    </span>
                    <span className="text-sm text-[#878787]">
                        Refunds will be charged back to the original form of payment used for purchase.
                    </span>
                    <span className="text-sm text-[#878787]">
                        Customer is responsible for shipping charges when making returns and shipping/handling fees of original purchase is non-refundable.
                    </span>
                    <span className="text-sm text-[#878787]">
                        All sale items are final purchases.
                    </span>
                </div>
                <div className="flex flex-col gap-5">
                    <span className='font-bold text-xl'>
                        Help
                    </span>
                    <span className="text-sm text-[#878787]">
                        Give us a shout if you have any other questions and/or concerns.
                    </span>
                    <span className="text-sm text-[#878787]">
                        Email:
                        <span className='underline mx-1 hover:text-[#56cfe1] transition duration-300 cursor-pointer'>
                            contact@domain.com
                        </span>
                    </span>
                    <span className="text-sm text-[#878787]">
                        Phone:
                        <span className='mx-1'>
                            +1 (23) 456 789
                        </span>
                    </span>
                </div>
            </div>
        </div >
    )
}
