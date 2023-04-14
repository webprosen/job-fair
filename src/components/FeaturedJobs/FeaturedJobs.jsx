import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [showall, setShowAll] = useState(false);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    let dataToShow = jobs.slice(0, 4);

    if(showall){
        dataToShow = jobs;
    }

    const handleSeeAllJobs = () => {
        setShowAll(true);
    }

    return (
        <div className='max-w-6xl mx-auto px-6 md:px-4 pt-10 pb-20'>
            <h2 className='text-3xl text-center font-bold'>Featured Jobs</h2>
            <p className='text-center mt-3 mx-auto'>You will continuously look for better ways to improve our products and integration with partners.</p>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8'>
                {
                    dataToShow.map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
                }
            </div>
            {
                dataToShow.length < jobs.length &&
                <div className='text-center mt-6'>
                    <button onClick={handleSeeAllJobs} className='bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-3 px-6 rounded-md text-white font-semibold mt-4 text-lg'>See All Jobs</button>
                </div>
            }
        </div>
    );
};

export default FeaturedJobs;