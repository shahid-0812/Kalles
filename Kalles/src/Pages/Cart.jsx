// ./Pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Components/CartContext';
import { Link } from 'react-router-dom';

export const CartPage = () => {




    return (
        <div className="cart-container  ">
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
            <div className='flex flex-col p-5 items-center justify-center'>

                <h1 className="text-xl font-bold">Your Cart</h1>


                <p>Your cart is empty.</p>

            </div>




        </div>
    );
};
