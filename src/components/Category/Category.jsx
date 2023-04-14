import React from 'react';

const Category = ({category}) => {
    const {img, title, description} = category;
    return (
        <div className='bg-[#faf8ff] p-8'>
            <img src={img} alt="" className='bg-[#edeeff] p-4 rounded-md'/>
            <h2 className='text-xl font-bold mt-4 mb-2 text-gray-800'>{title}</h2>
            <p className='text-gray-600'>{description}</p>
        </div>
    );
};

export default Category;