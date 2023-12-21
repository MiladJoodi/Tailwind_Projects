import React from 'react'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import Header from '../../Components/Header/Header'

function Home() {
  return (
    <div className='home-section flex-start justify-between'>
      <Nav />
      <Header />
    </div>
  )
}

export default Home