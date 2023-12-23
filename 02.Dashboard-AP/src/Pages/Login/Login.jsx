import React from 'react'
import Header from '../../Components/Header/Header'
import { MdEmail } from "react-icons/md";


function Login() {
  return (
    <div className='content w-full'>
    <Header />
    <div className='w-full h-screen flex justify-center items-center'>
    <div className='flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
        ورود به پنل کاربری
      </div>

      <div className='mt-8'>
        <form className='' autoComplete='off'>
            <div className='flex flex-col mb-2'>
              <div className='flex relative'>
                <span className='rounded-r-md inline-flex items-center px-3 border-t border-r border-b border-gray-300 text-gray-300 shadow-sm text-sm'>
                  <MdEmail />
                </span>
                <input type="email" className='rounded-l-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
              </div>
            </div>
        </form>
      </div>

    </div>
    </div>
   
  </div>
  )
}

export default Login