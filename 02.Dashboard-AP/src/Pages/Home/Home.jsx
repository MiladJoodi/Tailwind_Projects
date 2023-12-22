import React from 'react'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/Header'

function Home() {
  return (
    <div className='home-section flex flex-start justify-between'>
      <Nav />
      <div className="content flex flex-col w-full pl-0 md:p-4 md:space-y-4">
      <Header />

      </div>
    </div>
  )
}

export default Home