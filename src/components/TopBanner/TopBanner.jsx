import React from 'react';

const TopBanner = ({pageName}) => {
    return (
        <div className='py-[40px] sm:py-[75px] relative bg-[#f9f9ff]'>
            <h1 className='text-center text-2xl font-bold'>{pageName}</h1>
            <div className='absolute right-0 top-0'>
                <img className='w-[120px] sm:w-[200px]' src="/images/watermark/vector-1.png" alt="" />
            </div>
            <div className='absolute left-0 bottom-0'>
                <img className='w-[120px] sm:w-[200px]' src="/images/watermark/vector-2.png" alt="" />
            </div>
        </div>
    );
};

export default TopBanner;