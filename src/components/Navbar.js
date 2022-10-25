import { useContext } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { AuthContext } from "../contexts/UserContext"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(toast.warning('User Logged Out'))
      .catch(error => console.error(error))
  }

  return (
    <header className='text-gray-600 body-font'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>

          <span className='ml-3 text-xl'>Language-Biz</span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link to='/home' className='mr-5 hover:text-gray-900'>
            Home
          </Link>

          {user?.email ? <><Link to='/profile' className='mr-5 hover:text-gray-900'>
            <span className="font-bold"> {user.displayName}</span>
          </Link>
            <Link to='/wallet' className='mr-5 hover:text-gray-900'>
              Wallet
            </Link>
            <button onClick={handleLogOut} className='inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
              Logout
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='w-4 h-4 ml-1'
                viewBox='0 0 24 24'
              >
                <path d='M5 12h14M12 5l7 7-7 7'></path>
              </svg>
            </button></>
            :
            <Link to='/login' className='mr-5 hover:text-gray-900'>
              Login
            </Link>
          }




        </nav>
      </div>
    </header>
  )
}

export default Navbar
