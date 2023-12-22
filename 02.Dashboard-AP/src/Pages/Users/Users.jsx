import React from 'react'
import './Users.css'
import Header from '../../Components/Header/Header'

function Users() {
  return (
    <div className='content w-full'>
      <Header />
      <div className='users flex flex-col flex-wrap sm:flex-row'>
        <div className='container mx-auto p-4 sm:px-8 max-w-8xl'>
            <div className='py-8'>
              <div className='flex flex-row mb-1 sm:mb-0 justify-between'>
                <h2 className='text-2xl leading-tight'>کاربران</h2>
                <div className='text-end'>
                  <form className='flex flex-col gap-0 md:flex-row md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center'>
                    <div className='relative'>
                      <input type="text" className='rounded-r-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-300 shadow-sm text-base focus:outline-none  focus:ring-2 focus:ring-purple-600 focus:border-transparent' placeholder="جستجو در کاربران" />
                    </div>
                    <button className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-l-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:bg-purple-500 focus: ring-offset-2 focus:ring-offset-purple-200'>
                      بگرد
                    </button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Users