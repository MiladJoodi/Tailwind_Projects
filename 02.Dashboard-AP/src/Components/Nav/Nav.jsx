import React from 'react'
import './Nav.css'
import { AiFillCaretLeft } from "react-icons/ai";
import { HiOutlineUsers, HiListBullet } from "react-icons/hi2";
import { TbLogin } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";
import { BsPatchCheck } from "react-icons/bs";


function Nav() {
  return (
    <div className='h-screen hidden lg:block my-4 mr-4 shadow-lg relative w-80'>
        <div className='bg-white h-full rounded-2xl'>
            <div className='flex items-center justify-center pt-6'>
                <img src="./images/joodi.jpg" className='w-14 rounded-full' />
            </div>
            <nav className='pt-6'>
                {/* sidebar items start */}
                <div>
                    <a href="#" className='w-full font-thin text-blue-500 flex items-center p-4 my-2 transition-colors duration-200  bg-gradient-to-l from-white to-blue-100 border-l-4 border-blue-500'>
                        <span className='text-left'>
                            <AiFillCaretLeft />
                        </span>
                        <span className='mx-4 font-normal text-lg'>داشبورد</span>
                    </a>
                    <a href="#" className='w-full font-thin text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'>
                        <span >
                            <HiOutlineUsers size={17} />
                        </span>
                        <span className='mx-4 font-normal text-lg'>کاربران</span>
                    </a>
                    <a href="#" className='w-full font-thin text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'>
                        <span >
                            <HiListBullet size={20} />
                        </span>
                        <span className='mx-4 font-normal text-lg'>فرم ها</span>
                    </a>
                    <a href="#" className='w-full font-thin text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'>
                        <span >
                            <TbLogin size={20} />
                        </span>
                        <span className='mx-4 font-normal text-lg'>لاگین</span>
                    </a>
                    <a href="#" className='w-full font-thin text-gray-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500'>
                        <span >
                            <FiUserPlus size={19} />
                        </span>
                        <span className='mx-4 font-normal text-lg'>عضویت </span>
                    </a>
                </div>
                {/* /sidebar items end */}
            </nav>
            <div className='absolute bottom-0 my-10'>
                <a href="https://github.com/MiladJoodi/Tailwind_Projects/tree/main/02.Dashboard-AP" className='text-gray-500 hover:text-gray-800 transition-colors duration-200 flex items-center py-2 px-8'>
                    <BsPatchCheck className='text-blue-600' />
                <span className='mx-4'>نسخه 2</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Nav