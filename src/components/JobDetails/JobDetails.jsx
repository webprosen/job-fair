import React from 'react';
import { useLoaderData } from 'react-router-dom';
import jobs from '../../../public/jobs.json';
import TopBanner from '../TopBanner/TopBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSackDollar, faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToDb } from '../../utilities/db';
import { useState } from 'react';
import { useEffect } from 'react';

const JobDetails = () => {
    const jobId = useLoaderData();

    const job = jobs.find(job => job.id == jobId);
    const {id, job_description, job_responsibility, location, educational_requirments, experiences, salary, job_title, contact_information} = job;

    const handleApplyNow = (id) => {
        addToDb(id);
    }
    const pageName = 'Job Details';

    return (
        <div>
            <TopBanner pageName={pageName}></TopBanner>
            <div className='max-w-6xl mx-auto px-4 md:px-8 py-16'>
                <div className='md:flex justify-between'>
                    <div className='md:w-[55%]'>
                        <p>
                            <span className='font-bold'>Job Description:</span> {job_description}
                        </p>
                        <p className='mt-5'>
                            <span className='font-bold'>Job Responsibility:</span> {job_responsibility}
                        </p>
                        <p className='font-bold mt-5'>Educational Requirements:</p>
                        <p>{educational_requirments}</p>

                        <p className='font-bold mt-5'>Experiences:</p>
                        <p>{experiences}</p>
                    </div>
                    <div className='md:w-[35%] mt-10 md:mt-0'>
                        <div className='p-6 rounded-lg bg-[#f4f2ff]'>
                            <h2 className='font-bold border-b border-gray-400 pb-3 mb-3'>Job Details</h2>
                            <p className='mb-2'><span className='font-semibold'><FontAwesomeIcon className='text-purple-600 text-lg mr-1' icon={faSackDollar} /> Salary:</span> {salary}</p>
                            <p className='mb-8'><span className='font-semibold'><FontAwesomeIcon className='text-purple-600 text-lg mr-1' icon={faCalendarDays} /> Job Title:</span> {job_title}</p>
                            <h2 className='font-bold border-b border-gray-400 pb-3 mb-3'>Contact Information</h2>
                            <p className='mb-2'><span className='font-semibold'><FontAwesomeIcon className='text-purple-600 text-lg mr-1' icon={faPhone} /> Phone:</span> {contact_information.phone}</p>
                            <p className='mb-2'><span className='font-semibold'><FontAwesomeIcon className='text-purple-600 text-lg mr-1' icon={faEnvelope} /> Email:</span> {contact_information.email}</p>
                            <p className='mb-2'><span className='font-semibold'><FontAwesomeIcon className='text-purple-600 text-lg mr-1' icon={faLocationDot} /> Address:</span> {location}</p>
                        </div>
                        <button onClick={()=> handleApplyNow(id)} className='w-full bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-3 px-6 rounded-md text-white font-semibold mt-6 text-lg'>Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;