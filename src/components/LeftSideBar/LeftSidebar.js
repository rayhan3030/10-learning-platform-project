import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const LeftSideBar = () => {
    const [catagories, setCatagoroes] = useState([])
    useEffect(() => {
        fetch('https://new-server-after-crash.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCatagoroes(data));
    }, [])


    return (
        <div className='lg:mt-32' >
            <h1 className='text-lg font-bold text-center'>ALL Course Catetgories : {catagories.length} </h1>
            <div className='className="max-w-xs  shadow-md dark:bg-gray-900 dark:text-gray-100 md:visible invisibl  "'>
                {
                    catagories.map(category => <p
                        className=" text-center p-2 space-y-8 border"
                        key={category.id} ><Link to={`/category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>

        </div>
    );
};

export default LeftSideBar;