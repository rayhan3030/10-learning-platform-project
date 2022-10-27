import { useContext } from "react";
import { Link, useLoaderData, } from "react-router-dom"
import { AuthContext } from "../contexts/UserContext";
import biz from "../assets/Language Biz.gif"
import CourseTopicCard from "./Courses/CourseTopicCard";



const Home = () => {
  const { user } = useContext(AuthContext);
  const courses = useLoaderData();

  return (
    <section>
      <div className='min-h-screen'>

        <div className='container flex flex-col 
        items-center px-4 py-0 pb-24 mx-auto 
        text-center lg:pb-56 md:py-32 md:px-0 md:pt-0
        lg:px-0 text-gray-900'>
          <h1 className='text-2xl font-bold leading-none sm:text-2xl xl:max-w-2xl text-gray-900'>
            Welcome To Language Biz eDTech : {courses.length}
          </h1>
          <div className="">
            <img src={biz} alt="" className=" rounded-t-full h-12  lg:h-32 pr-14 " />
          </div>
          <div className="grid md:grid-cols-3 gap-5 grid-cols-1">
            {
              courses.map(course => <CourseTopicCard
                key={course._id}
                course={course}
              ></CourseTopicCard>)
            }
          </div>

          <p className='mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900'>
            Here, an user can authenticate using google or create an account
            using email password. Powered by Firebase.!
          </p>
          <div className='flex flex-wrap justify-center'>


            {user && user.uid ?

              <Link to='/profile'>
                <button
                  type='button'
                  className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
                >
                  Visit Profile
                </button>
              </Link>

              :
              <>
                <Link to='/login'>
                  <button
                    type='button'
                    className='px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-50'
                  >
                    Login
                  </button>
                </Link>

                <Link to='/register'>
                  <button
                    type='button'
                    className='px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900'
                  >
                    Register
                  </button>
                </Link>
              </>
            }


          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
