import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#f9f9ff] border-b'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 pt-4 pb-3 md:py-5'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-2xl md:text-3xl font-bold'>
                        <Link to="/">Job Fair</Link>
                    </h2>
                    <ul className='hidden md:block'>
                        <Link to="/statistics" className='text-lg font-semibold px-2 md:px-4 hover:text-purple-500 transition-colors'>Statistics</Link>
                        <Link to="/applied-jobs" className='text-lg font-semibold px-2 md:px-4 hover:text-purple-500 transition-colors'>Applied Jobs</Link>
                        <Link to="/blog" className='text-lg font-semibold px-2 md:px-4 hover:text-purple-500 transition-colors'>Blog</Link>
                    </ul>
                    <button className='text-sm md:text-lg bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-2 px-3 md:py-3 md:px-4 rounded-md text-white font-semibold'>Start Applying</button>
                </div>
                <ul className='md:hidden mt-4 text-center border-t pt-2'>
                    <Link to="/statistics" className='text-md font-semibold px-2 md:px-4 hover:text-purple-500 transition-colors'>Statistics</Link>
                    <Link to="/applied-jobs" className='text-md font-semibold px-2 md:px-4 hover:text-purple-500 transition-colors'>Applied Jobs</Link>
                    <Link to="/blog" className='text-md font-semibold px-2 md:px-4 hover:text-purple-500 transition-colors'>Blog</Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;