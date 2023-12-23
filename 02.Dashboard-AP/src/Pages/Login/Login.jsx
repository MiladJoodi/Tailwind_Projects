import React from 'react'
import Header from '../../Components/Header/Header'
import { MdEmail } from "react-icons/md";


function Login() {
  return (
    <div className='content w-full'>
    <Header />

    <div className="container mx-auto p-4 sm:px-8 max-w-8xl">
          <div className="py-8">
            <div className="flex flex-col mb-1 sm:mb:0 justify-between w-full">
              <h2 className="text-2xl leading-tight">ورود و اعتبار سنجی</h2>
              <div className='flex flex-col w-full mx-auto  mt-8 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
      <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
        ورود به پنل کاربری
      </div>

      <div className='mt-8'>
        <form className='' autoComplete='off'>
            <div className='flex flex-col هفثئ mb-2'>
              <div className='flex relative'>
                <span className='rounded-r-md inline-flex items-center px-3 border-t border-r border-b border-gray-400 text-gray-400 shadow-sm text-sm'>
                  <MdEmail />
                </span>
                <input type="email" placeholder='ایمیل شما'
                className='rounded-l-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent' />
              </div>
            </div>
        </form>
      </div>

    </div>
    </div>

              </div>
              </div>
              </div>


    
   
  )
}

export default Login