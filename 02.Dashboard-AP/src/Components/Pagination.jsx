import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Pagination() {
  return (
    <div className='px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-content-between '>
        <div className='flex items-center'>
                <button type="button" className='w-full h-11 px-4 py-2   border text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100'>
                <MdOutlineKeyboardArrowRight />
                </button>
                <button className='w-full h-11 px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100'>
                    1
                </button>
                <button className='w-full h-11 px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100'>
                    2
                </button>
                <button className='w-full h-11 px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100'>
                    3
                </button>
                <button className='w-full h-11 px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100'>
                    4
                </button>
                <button type="button" className='w-full h-11 px-4 py-2   border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100'>
                <MdOutlineKeyboardArrowLeft   />
                </button>
        </div>
    </div>
  )
}

export default Pagination