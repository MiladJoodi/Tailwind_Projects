import React from 'react'
import './Nav.css'
import { AiFillCaretLeft } from "react-icons/ai";


function Nav() {
  return (
    <div className='h-screen hidden lg:block my-4 mr-4 shadow-lg relative w-80'>
        <div className='bg-white h-full rounded-2xl'>
            <div className='flex items-center justify-center pt-6'>
                <img src="./images/joodi.jpg" className='w-14 rounded-full' />
            </div>
            <nav className='pt-6'>
                <div>
                    <a href="#" className='w-full font-thin text-blue-500 flex items-center p-4 my-2 transition-colors duration-200  bg-gradient-to-l from-white to-blue-100 border-l-4 border-blue-500'>
                        <span className='text-left'>
                            <AiFillCaretLeft />
                        </span>
                        <span className='mx-4 font-normal text-lg'>داشبورد</span>
                    </a>
                    <a href="#" className='w-full font-thin text-blue-500 flex items-center p-4 my-2 transition-colors duration-200  bg-gradient-to-l from-white to-blue-100 border-l-4 border-blue-500'>
                        <span className='text-left'>
                            <AiFillCaretLeft />
                        </span>
                        <span className='mx-4 font-normal text-lg'>داشبورد</span>
                    </a>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Nav