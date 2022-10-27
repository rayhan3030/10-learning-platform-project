import React from 'react';
import { Link } from 'react-router-dom';

const CourseTopicCard = ({ course }) => {
    const { title, details, thumbnail_url, pro_course4, _id } = course
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={thumbnail_url} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                    <p className="dark:text-gray-100">{pro_course4}</p>
                </div>
                <Link to={`/course/${_id}`} className="border rounded-full text-lg font-semibold hover:bg-sky-700 ">Course Overview</Link>
            </div>
        </div>
    );
};

export default CourseTopicCard;