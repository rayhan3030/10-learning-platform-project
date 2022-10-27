
import React from 'react';
import { Outlet } from 'react-router-dom';
// import Ad from '../components/Ad/Ad';
import Footer from '../components/Footer/Footer';
import LeftSidebar from '../components/LeftSideBar/LeftSidebar';
import Navbar from '../components/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar />
            <div className='lg:flex grid-cols-2 gap-0'>
                <div className=' col-span-2 w-full lg:w-1/6'>
                    <LeftSidebar>
                    </LeftSidebar>
                </div>
                <div className=' col-span-1 w-full lg:w-5/6'>
                    <Outlet />
                </div>
                {/* <div className=' col-span-2 w-full lg:w-1/6'><Ad /> </div> */}
            </div>
            <Footer />

        </div>
    );
};

export default Main;