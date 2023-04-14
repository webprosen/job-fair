import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import TopBanner from '../TopBanner/TopBanner';
import AppliedJob from '../AppliedJob/AppliedJob';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getJobsCart } from '../../utilities/db';

const AppliedJobs = () => {
    const pageName = 'Applied Jobs';
    const [remote, setRemote] = useState(false);
    const [onsite, setOnsite] = useState(false);

    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    const storedJobs = getJobsCart();
    let appliedJobs = [];
    if(jobs.length > 0){
        for (const id in storedJobs) {
            const addedJob = jobs.find(job => job.id == id);
            if (addedJob) {
                appliedJobs.push(addedJob);
            }
        }
    }


    if(remote){
        appliedJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite == 'Remote');
    }
    if(onsite){
        appliedJobs = appliedJobs.filter(appliedJob => appliedJob.remote_or_onsite == 'Onsite');
    }

    const handleRemoteJob = () => {
        setRemote(true);
        setOnsite(false);
    }
    const handleOnsiteJob = () => {
        setOnsite(true);
        setRemote(false);
    }

    return (
        <div>
            <TopBanner pageName={pageName}></TopBanner>
            <div className='max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-11'>
                <div className="mb-4 flex flex-row-reverse">
                    <button onClick={handleOnsiteJob} className='bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-2 px-4 rounded-md text-white font-semibold mt-4 ml-4'>On Site</button>
                    <button onClick={handleRemoteJob} className='bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 py-2 px-4 rounded-md text-white font-semibold mt-4'>Remote</button>
                </div>
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AppliedJobs;