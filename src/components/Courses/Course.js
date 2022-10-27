import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

import Pdf from "react-to-pdf";

const ref = React.createRef();

const Course = () => {
    const { user } = useContext(AuthContext)
    const newCourse = useLoaderData();
    return (
        <div>
            <Pdf targetRef={ref} filename="Language_Biz(Programming-Hero.pdf">
                {({ toPdf }) =>
                    <button type="button" className="relative px-5 py-2 ml-4 overflow-hidden  font-semibold rounded-full dark:bg-gray-100 dark:text-gray-900" onClick={toPdf}>
                        Download
                        <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-400">pdf</span>
                    </button>}
            </Pdf>
            <div ref={ref}>

                <div>
                    <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
                        <div className="container mx-auto">
                            <img src={newCourse.image_url
                            } alt="" className="block object-cover object-center w-full rounded-md h-80 dark:bg-gray-500" />
                            <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
                                <h2 className="text-2xl font-bold leading-none sm:text-4xl text-yellow-600">{newCourse.title}</h2>
                                <p className="px-8 my-4"><span className='font-bold text-blue-400'>Course Overview</span> <br /> {newCourse.details}</p>

                            </div>

                            <div className="grid grid-cols-5 p-4 md:p-8">
                                <div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
                                    {user?.displayName ?
                                        <button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50 border hover:bg-red-600"><Link to={`../checkout/${newCourse._id}`} > Get Premium Access</Link></button>
                                        :
                                        <>

                                        </>
                                    }



                                </div>
                                <div className=" grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
                                    <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                        </svg>
                                        <h5 className="text-xl font-semibold text-yellow-200">{newCourse.details1}</h5>
                                        <p> <span className='text-purple-400'>Summary:</span> {newCourse.details1_info} </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                        </svg>
                                        <h5 className="text-xl font-semibold text-yellow-200">{newCourse.details2}</h5>
                                        <p> <span className='text-purple-400'>Summary:</span> {newCourse.details2_info} </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                        </svg>
                                        <h5 className="text-xl font-semibold text-yellow-200">{newCourse.details3}</h5>
                                        <p> <span className='text-purple-400'>Summary:</span> {newCourse.details3_info} </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                        </svg>
                                        <h5 className="text-xl font-semibold text-yellow-200">{newCourse.details4}</h5>
                                        <p> <span className='text-purple-400'>Summary:</span> {newCourse.details4_info} </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                        </svg>
                                        <h5 className="text-xl font-semibold text-yellow-200">{newCourse.details5}</h5>
                                        <p> <span className='text-purple-400'>Summary:</span> {newCourse.details5_info} </p>
                                    </div>
                                    <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                        </svg>
                                        <h5 className="text-xl font-semibold text-yellow-200">{newCourse.details6}</h5>
                                        <p> <span className='text-purple-400'>Summary:</span> {newCourse.details6_info} </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>

    );
};

export default Course;