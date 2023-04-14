import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(()=>{
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className='max-w-6xl mx-auto px-6 md:px-4 pt-20 pb-10'>
            <h2 className='text-3xl text-center font-bold'>Job Category List</h2>
            <p className='text-center mt-3 mx-auto'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;