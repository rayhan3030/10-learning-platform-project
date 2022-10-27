import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import CourseTopicCard from './CourseTopicCard';

const Category = () => {
    const courseCategory = useLoaderData();
    return (
        <div className='grid h-screen place-items-center'>
            This  Category has Course: {courseCategory.length}

            {
                courseCategory.map(crsctgry => <div
                    key={crsctgry._id}
                    crsctgry={crsctgry}
                >

                    <div className=" max-w-4xl p-4 shadow-md dark:bg-teal-800 dark:text-gray-100 mb-5">
                        <div className="flex justify-between pb-4 border-bottom">
                            <div className="flex items-center">
                                <Link rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Course Duration : {crsctgry.pro_course2}</Link>
                            </div>
                            <Link rel="noopener noreferrer" href="#">Total Enrollment: {crsctgry.total_view}</Link>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={crsctgry.image_url
                                } alt="" className="block object-cover object-center w-full rounded-md h-80 dark:bg-gray-500" />
                                <div className="flex items-center text-xs">
                                    <span>{crsctgry.pro_course4}</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Link rel="noopener noreferrer" href="#" className="block">
                                    <h3 className="text-xl font-semibold dark:text-yellow-400">{crsctgry.title}</h3>
                                </Link>
                                <p className="leading-snug dark:text-white-600">Reward: {crsctgry.pro_course3} </p>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div >
    );
};

export default Category;