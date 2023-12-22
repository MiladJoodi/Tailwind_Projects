import React from 'react'
import Header from '../../Components/Header/Header'
import Boxes from './Boxes';
import { FaQuoteRight } from "react-icons/fa6";

function Home() {
  return (
    <div className='content w-full'>
      <Header />
       <div className='overflow-scroll  h-screen p-44 md:pt-0 md:pr-0 md:pl'>
          <section className='text-gray-500 '>
            <div className='container px-5 py-24 mx-auto'>
              <section className='flex flex-wrap m-4 text-center'>
                <Boxes color="bg-blue-500" />
                <Boxes color="bg-green-500" />
                <Boxes color="bg-violet-500" />
                <Boxes color="bg-pink-500" />
              </section>
            </div>
          </section>

          <div className='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
            <FaQuoteRight />
            <p className='leading-relaxed text-lg'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <span className='inline-block w-10 h-1 rounded-lg bg-purple-500 mt-8 mb-2'></span>
              <h2 className='text-gray-900 font-medium tracking-wider text-sm mb-1'>جودی</h2>
              <p className='text-gray-500'>توسعه دهنده وب</p>
            
          </div>
       </div>
    </div>
  )
}

export default Home