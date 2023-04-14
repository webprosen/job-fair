import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 first-letter'>
            <div className='max-w-6xl mx-auto px-6 md:px-4 py-20'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-white border-b'>
                    <div className=''>
                        <h2 className='text-3xl font-bold mb-4'>Job Fair</h2>
                        <p className='leading-[22px] mb-6'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    </div>
                    <div className='md:pl-10'>
                        <h2 className='text-xl font-bold mb-4'>Quick Links</h2>
                        <ul>
                            <li className='mb-2'>FAQ</li>
                            <li className='mb-2'>About</li>
                            <li className='mb-2'>Shipping</li>
                            <li className='mb-2'>Privacy</li>
                        </ul>
                    </div>
                    <div className='md:pl-10'>
                        <h2 className='text-xl font-bold mb-4'>Hot Job</h2>
                        <ul>
                            <li className='mb-2'>Jobs</li>
                            <li className='mb-2'>Viva</li>
                            <li className='mb-2'>Circular</li>
                            <li className='mb-2'>Latest</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold mb-4'>Contact</h2>
                        <p className='mb-2'>524 Broadway , NYC</p>
                        <p className='mb-5'>+1 777 - 978 - 5570</p>
                        <img className='max-w-[120px]' src="/images/categories/footer.png" alt="" />
                    </div>
                </div>
                <div className='text-sm text-white pt-10'>
                    <p>@2023 JobFair. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;