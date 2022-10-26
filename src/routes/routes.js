import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import Wallet from '../components/Wallet'
import Profile from '../components/Profile'
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Testing from "../components/Testing"
import Courses from "../components/Courses/Courses";
import Course from "../components/Course/Course";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://language-biz-server.vercel.app/allCourses')
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('https://language-biz-server.vercel.app/allCourses')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/wallet',
                element: <PrivateRoute>
                    <Wallet />
                </PrivateRoute>
            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
            },
            {
                path: '/testing',
                element: <Testing></Testing>
            },
            {
                path: '/courses/:id',  // per topic
                element: <Courses></Courses>,

            },
            {
                path: '/course/:name', //details course
                element: <Course></Course>
            },

        ],
    },

])
export default router;