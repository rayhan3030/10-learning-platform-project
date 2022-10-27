import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import Wallet from '../components/Wallet'
import Profile from '../components/Profile'
import ErrorPage from "../components/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Category from "../components/Courses/Category";
import Course from "../components/Courses/Course";
import Checkout from "../components/Checkout/Checkout";
import FaQ from "../components/Faq&bloG/FaQ";
import Blog from "../components/Faq&bloG/Blog";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://new-server-after-crash.vercel.app/courses')

            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch('https://new-server-after-crash.vercel.app/courses')
            },

            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://new-server-after-crash.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://new-server-after-crash.vercel.app/course/${params.id}`)
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
                path: '/checkout/:id',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://new-server-after-crash.vercel.app/course/${params.id}`)

            },
            {
                path: '/profile',
                element:
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>

            },

            {
                path: '/faq',
                element: <FaQ></FaQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ],
    },

])
export default router;