import React, { useState } from 'react'
import './Users.css'
import Header from '../../Components/Header/Header'
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { IoBanOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function Users() {

  const [blockUser, setBlockUser] = useState(true);

   const blockHandler = ()=>{
    setTimeout( () => {
      setBlockUser(!blockUser)
      toast.success('تغییر با موفقیت انجام شده', {
        toastId: 'success1',
        position: 'bottom-right',
        closeOnClick: true
  
    })
    }, 1000);
    
  }

  return (
    <div className='content w-full'>
      <Header />
      <div className='users flex flex-col flex-wrap sm:flex-row'>
        <div className='container mx-auto p-4 sm:px-8 max-w-8xl'>
            <div className='py-8'>
              {/* users header */}
              <div className='flex flex-row mb-1 sm:mb-0 justify-between'>
                <h2 className='text-2xl leading-tight'>کاربران</h2>
                <div className='text-end'>
                  <form className='flex flex-col gap-0 md:flex-row md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center'>
                    <div className='relative'>
                      <input type="text" className='rounded-r-lg border-transparent appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-300 shadow-sm text-base focus:outline-none  focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:rounded-r-lg' placeholder="جستجو در کاربران" />
                    </div>
                    <button className='flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-l-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:bg-purple-500 focus: ring-offset-2 focus:ring-offset-purple-200'>
                      بگرد
                    </button>
                  </form>
                </div>
              </div>
              {/* /users header */}

              <div className='mx-4 sm:mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                  {/* users table */}
                  <table className='min-w-full leading-normal'>
                        <thead>
                          <tr>
                            <th scope='col' className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-right text-sm font-normal'>
                                 کاربران
                            </th>
                            <th scope='col' className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-right text-sm font-normal'>
                                 نقش
                            </th>
                            <th scope='col' className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-right text-sm font-normal'>
                                 ایجاد شده در
                            </th>
                            <th scope='col' className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-right text-sm font-normal'>
                                 وضعیت
                            </th>
                            <th scope='col' className='px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-right text-sm font-normal'>
                                 اقدامات
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {/* td name and profile photo */}
                            <td className='p-5 border-b border-gray-200 bg-white text-sm'>
                              <div className='flex items-center'>
                                <div className='flex-shrink-0'>
                                  <a href="#" className='block relative'>
                                    <img src="./images/joodi.jpg" className='mx-auto object-cover rounded-full w-10 h-10' />
                                  </a>
                                </div>
                                <div className='mr-3'>
                                    <p className='text-gray-900 whitespace-nowrap'>میلاد جودی</p>
                                </div>
                              </div>
                            </td>
                            {/* /td name and profile photo */}

                            {/* td naghsh */}
                            <td className='p-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-nowrap'>نویسنده</p>
                            </td>
                            {/* /td naghsh */}
                            {/* td create */}
                            <td className='p-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-nowrap'>1402-10-02</p>
                            </td>
                            {/* /td created */}
                            {/* td status */}
                            <td className='p-5 border-b border-gray-200 bg-white text-sm'>
                              {
                                blockUser ?
                                (<span className='relative flex justify-center w-20 px-3 py-1 text-green-900 leading-tight'>
                                <span aria-hidden="true" className='absolute inset-0 bg-green-300 opacity-50 rounded-full'></span>
                                <span className='relative'>فعال</span>
                              </span>)
                                 : 
                                 ((<span className='relative flex justify-center w-20 inline-block px-3 py-1 text-red-900 leading-tight'>
                                 <span aria-hidden="true" className='absolute inset-0 bg-red-300 opacity-50 rounded-full'></span>
                                 <span className='relative'>غیرفعال</span>
                               </span>))
                              }
                            </td>
                            {/* /td status */}
                            {/* td action */}
                            <td className='p-5 border-b border-gray-200 bg-white text-sm'>
                            <div className='flex items-center gap-1'>
                              <a href="#">
                              <CiEdit size={25} color='orange' />
                              </a>
                              <a href="#">
                              <CiTrash size={25} color='red' />
                              </a>
                              <a href="#" onClick={blockHandler}>
                              {blockUser ?
                              <IoBanOutline  size={22} color='#820300' />
                               : 
                              <IoCheckmarkCircleOutline  size={24} color='green' />
                               }
                              </a>
                            </div>
                            </td>
                            {/* /td action */}
                          </tr>
                        </tbody>
                  </table>
                  {/* /users table */}
                </div>
              </div>
            </div>
        </div>
      </div>
      <ToastContainer rtl/>
    </div>
  )
}

export default Users