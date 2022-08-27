import React from 'react'
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="bg-desktop h-screen mt-0 bg-cover bg-no-repeat bg-right">
      <Navbar/>
      <Landing/>
    </div>
  )
}

export default Home