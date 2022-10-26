import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <h1>This is courses  {allCourses.length}</h1>
        </div>
    );
};

export default Courses;