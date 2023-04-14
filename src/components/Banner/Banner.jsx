import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#f9f9ff]'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 py-5'>
                <div className='md:flex flex-row-reverse justify-between items-center'>
                    <div className='md:w-1/2'>
                        <img src="/images/banner/hero.png" alt="" />
                    </div>
                    <div className='md:w-1/2 mt-8'>
                        <h2 className='text-4xl md:text-5xl font-bold leading-[45px] md:leading-[55px]'>
                            One Step<br></br>Closer To Your<br></br><span className='text-purple-600'>Dream Job</span>
                        </h2>
                        <p className='mt-5 max-w-[460px]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-3 px-6 rounded-md text-white font-semibold mt-8 text-lg'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Banner;