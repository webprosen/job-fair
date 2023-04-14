import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='max-w-6xl mx-auto px-4'>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>
                    <h2 className='text-7xl text-center mb-4'>☹️</h2>
                    <h2 className='font-bold text-5xl md:text-7xl text-center mb-8 leading-[60px]'>Page Not Found</h2>
                    <button className='bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-3 px-6 rounded-md text-white font-semibold text-lg'>
                        <Link to="/">Go to Homepage</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Error;