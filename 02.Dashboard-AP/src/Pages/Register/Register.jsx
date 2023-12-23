import React from 'react'
import Header from '../../Components/Header/Header'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";

function Register() {
  return (
    <div className='content w-full'>
    <Header />
    <div className="container mx-auto p-4 sm:px-8">
          <div className="py-8">
            <div className="flex flex-col mb-1 sm:mb:0 justify-between w-full">
              <h2 className="text-2xl leading-tight">ورود و اعتبار سنجی</h2>
              <div className='flex flex-col w-full mx-auto  max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
        ثبت نام در پنل کاربری
      </div>

          {/* form group */}
          <div className='mt-8'>
        <form autoComplete='off'>
          {/* username */}
            <div className='flex flex-col mb-2'>
              <div className='flex relative'>
                <span className='rounded-r-md inline-flex items-center px-3 border-t border-r border-b border-gray-400 text-gray-400 shadow-sm text-sm'>
                  <MdEmail />
                </span>
                <input type="email" placeholder='ایمیل'
                className='rounded-l-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
              </div>
            </div>
          {/* /username */}
          {/* phone */}
            <div className='flex flex-col mb-2'>
              <div className='flex relative'>
                <span className='rounded-r-md inline-flex items-center px-3 border-t border-r border-b border-gray-400 text-gray-400 shadow-sm text-sm'>
                  <FaPhone />
                </span>
                <input type="email" placeholder='شماره'
                className='rounded-l-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
              </div>
            </div>
          {/* /phone */}
          {/* password */}
            <div className='flex flex-col mb-2'>
              <div className='flex relative'>
                <span className='rounded-r-md inline-flex items-center px-3 border-t border-r border-b border-gray-400 text-gray-400 shadow-sm text-sm'>
                  <FaLock />
                </span>
                <input type="email" placeholder='رمز عبور'
                className='rounded-l-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
              </div>
            </div>
          {/* /password */}
          {/* confirm password */}
            <div className='flex flex-col mb-6'>
              <div className='flex relative'>
                <span className='rounded-r-md inline-flex items-center px-3 border-t border-r border-b border-gray-400 text-gray-400 shadow-sm text-sm'>
                  <FaLock />
                </span>
                <input type="email" placeholder='تایید عبور'
                className='rounded-l-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
              </div>
            </div>
            {/* confirm password */}
            <div className='flex items-center mb-6 mt-4'>
              <div className='flex mr-auto'>
                  <a href="#" className='inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white'>
                      رمز عبور خود را فراموش کرده اید؟
                  </a>
              </div>
            </div>
            <div className='flex w-full'>
              <button type='submit' className='py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 w-full transition ease-in duration-200 text-white text-base font-semibold shadow-md focus:outline-none focus-ring-2 focus:ring-offset-2 rounded-lg'>
                ثبت نام
              </button>
            </div>
        </form>
      </div>
          {/* /form group  */}

          <div className='flex items-center justify-center mt-4'>
              <Link to="/login" className='inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white'>ورود</Link>
            </div>

    </div>
    </div>

              </div>
              </div>
              </div>
  )
}

export default Register