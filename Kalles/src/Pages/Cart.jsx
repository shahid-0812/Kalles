// ./Pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';

export const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((sum, item) => sum + item.qty * 15, 0); // assuming fixed price $15

    return (
        <div className="cart-container">
            <div
                style={{
                    backgroundImage: `url('/images/women/bg-heading.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '150px',
                    width: '100%',
                }} className='bg-header flex items-center justify-center'>
                <h1 className='text-[#fff] z-10 text-xl medium'>Collection</h1>
            </div>
            <h1 className="text-xl font-bold mb-5">Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map((item, index) => (
                    <div key={index} className="border border-[#ddd] p-5 flex gap-8 items-center justify-between mb-4">
                        <Link to="/productDetails">
                            <img src={item.img} className="h-[150px]" alt="cart-product" />
                        </Link>

                        <div className="text-[#696969] text-sm flex flex-col w-full">
                            <Link to="/productDetails" className="text-[#000] font-semibold hover:text-[#56cfe1]">Tovi Girl With Cat Printed</Link>
                            <span>Qty: {item.qty}</span>
                            <span>$15.00</span>
                            <button onClick={() => removeFromCart(item.id)} className="mt-2 text-sm text-red-500">Remove</button>
                        </div>
                    </div>
                ))
            )}


        </div>
    );
};
