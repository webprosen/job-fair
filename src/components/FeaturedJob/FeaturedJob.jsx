import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSackDollar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    const {company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary} = job;

    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/job-details/${job.id}`)
    }

    return (
        <div className='border rounded-md p-8'>
            <img className='max-w-[150px]' src={company_logo} alt="" />
            <h2 className='text-xl font-bold mt-4 mb-2 text-gray-800'>{job_title}</h2>
            <p className='text-gray-600'>{company_name}</p>
            <div className='flex mt-4'>
                <button className='font-semibold border border-purple-600 rounded-md text-purple-600 px-3 py-1 mr-4'>{remote_or_onsite}</button>
                <button className='font-semibold border border-purple-600 rounded-md text-purple-600 px-3 py-1'>{fulltime_or_parttime}</button>
            </div>
            <div className='sm:flex mt-4 text-gray-600'>
                <p className='mb-2 sm:mb-0 sm:order-1'><FontAwesomeIcon icon={faSackDollar} /> Salary: {salary}</p>
                <p className='sm:order-0 sm:mr-5'><FontAwesomeIcon icon={faLocationDot} /> {location}</p>
            </div>
            <button onClick={handleViewDetails} className='bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-2 px-4 rounded-md text-white font-semibold mt-4'>View Details</button>
        </div>
    );
};

export default FeaturedJob;