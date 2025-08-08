import React from 'react'

export const ReturnExchange = () => {
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
                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-2xl'>RETURNS & EXCHANGES POLICY </span>
                    <span className='text-sm'>We want you to be happy with your purchase and we apologize if it is not. For whatever reason that you are not satisfied, we would be most happy to provide exchanges and returns for all items purchased from us if the following conditions are met :</span>
                    <ul className='list-disc mx-4 marker:text-[#878787]'>
                        <li>All items must be in their original packaging with product tags intact</li>
                        <li>All items must be unworn, unused, unwashed and in its original condition</li>
                        <li>Footwear should have no scuff marks on its outsole</li>
                        <li>Originals receipts would need to be included</li>
                        <li>All items would need to be purchased originally fromSingapore</li>
                    </ul>
                    <span className="text-sm">If non of the above conditions are met, we regret to inform that we are unable to process any claims for exchanges or refund regardless that the items have been mailed back to us.
                        <span className='italic medium'>
                            Sales item(s) are non-exchangeable nor returnable either in our retail boutique or via our online portal.
                        </span>
                    </span>
                </div>
                <ol className='list-decimal flex flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <li className='mx-4 font-bold text-xl'>VALIDITY FOR EXCHANGES & RETURNS</li>
                        <span className="text-sm">
                            All exchanges and returns would need to be raised within 10 days of the invoice date for Singapore orders, and 20 days for overseas orders. For local deliveries, there is an option to exchange at any of our boutiques within Singapore or through our online portal at www.company.com. All requests for returns however, would need to be strictly made online at www.company.com for both local and overseas deliveries.
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <li className='mx-4 font-bold text-xl'>EXCHANGES AT OUR BOUTIQUES</li>
                        <span className="text-sm">2.1You will need to bring along your original invoice together with the item(s) in its original condition and packaging to any of our boutiques.
                        </span>
                        <span className="text-sm">
                            2.2You will be entitled to an exchange of any item(s) in the boutique immediately after evaluation by our retail associates that it is valid.
                        </span>
                        <span className="text-sm">
                            2.3If the value of the exchange item(s) is higher than the original item(s), you will be required to top up the difference in cash.
                        </span>
                        <span className="text-sm">
                            2.4There will be no refund if the value of the exchange item(s) is lower than the original item(s).
                        </span>
                        <span className="text-sm">
                            2.5No other forms of exchanges (such as boutique cash vouchers or online store credit) will be given at our boutiques.
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <li className='mx-4 font-bold text-xl'>EXCHANGES & RETURNS ONLINE</li>
                        <span className="text-sm">3.1You will need to include your original invoice together with the item(s) in its original condition and packaging.
                        </span>
                        <span className="text-sm">
                            3.2Kindly print and fill up the Exchange/Return Request Form here and follow the steps indicated in the form for your exchange.
                        </span>
                        <span className="text-sm">
                            3.3Mail us your parcel via a traceable mode of postage.
                        </span>
                        <span className="text-sm">
                            3.4Wait for our email confirmation and you will be notified once your online Store Credit Voucher is ready.  Generally, the processing period is 5 working days upon receipt of your parcel.
                        </span>
                        <span className="text-sm">
                            3.5All requests for returns will be refunded via online Store Credit Vouchers only. Your online Store Credit Voucher is valid for 30 days and can be used for your next purchase online. It is strictly non refundable, non extendable, non exchangeable for cash and non exchangeable for boutique vouchers. The online Store Credit Voucher is applicable online only and cannot be used in our Retail boutiques.
                        </span>
                        <span className="text-sm">
                            3.6Online Store Credit Vouchers are to be used in a singular transaction and any excess amount not utilized, would not be refunded.
                        </span>
                        <span className="text-sm">
                            3.7Online Store Credit Vouchers given will be at the buying price of the product as stated in the original invoice. No refunds will be given for delivery charges incurred in the original, returned and onward shipping charges of exchanged items.
                        </span>
                        <span className="text-sm">
                            3.8However, if any of the products received is deemed defective or a wrong shipment, BeetleBug.com will bear the cost of shipping the item(s) back to you. Please note that all exchanges are subjected to stock availability and whilst we endeavour to ship a replacement item(s) back to you, we reserve the right to do an exchange by way of an item(s) of a similar value or providing online store credits or any other methods at the discretion of BeetleBug.com.
                        </span>
                        <span className="text-sm">
                            3.9No refunds will be given for taxes, duties, tariffs and excise charges levied for overseas orders either for refunds or exchanged items.
                        </span>
                        <span className="text-sm">
                            3.10All returns and exchanges made via our online portal at www.company.com would need to be shipped to :
                        </span>
                        <ul className='list-disc mx-5 text-sm marker:text-[#878787]'>
                            <li>The Company Pte Ltd</li>
                            <li>Changi South Lane</li>
                            <li>#03-01/03NanWahBuilding</li>
                            <li>Singapore</li>
                            <li>Tel: +65 6214 1490</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <li className='mx-4 font-bold text-xl'>OTHER TERMS & CONDITIONS</li>
                        <span className="text-sm">4.1All items that are returned and exchanged, can only be made once.
                        </span>
                        <span className="text-sm">
                            4.2We reserve the right and full discretion to disqualify you from enjoying free returns if the subsequent item(s) for return or exchange are of the same item(s) as a previous order
                        </span>
                        <span className="text-sm">
                            4.3Our returns and exchanges policy does not cover damage resulting from unique, accidental, or random damage that is the result of use by you or wear and tear of a product.
                        </span>
                        <span className="text-sm">
                            4.4BeetleBug makes no warranty in respect of any product, express or implied, including any implied warranties of merchantability, quality, compliance with description and fitness for a particular purpose.
                        </span>
                        <span className="text-sm">
                            4.5Such returns are at all times governed by the provisions of the Consumer Protection (Fair Trading) Act of Singapore.
                        </span>
                        <span className="text-sm">
                            4.6All decisions made by BeetleBug.com is final.
                        </span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <li className='mx-4 font-bold text-xl'>REPAIR POLICY</li>
                        <span className="text-sm">
                            We offer repair services for all our products. Kindly visit us at any of our boutiques in Singapore for more information or contact us
                            <span className='underline mx-1'>
                                atmarketing@company.com
                            </span>
                        </span>
                    </div>
                </ol>
            </div>
        </div>
    )
}
