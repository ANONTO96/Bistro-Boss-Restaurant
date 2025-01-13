import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className='bg-black text-center text-2xl lg:text-3xl py-20'>
            <Link to='/contact'>
            <p className='text-white'>
                Contact Us To Place Your Order:
            </p>
            <div className='flex justify-center gap-2 items-center'>
            <p className='text-white'>999</p>
            <img className='bg-white rounded-md w-6 h-6' src="https://img.icons8.com/?size=100&id=jShwZ2RCyPSO&format=png&color=000000" alt="" />
            </div>
            </Link>
        </div>
    );
};

export default ContactUs;