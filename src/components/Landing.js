import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
      <div className="ml-0 lg:ml-20 flex flex-col justify-center lg:flex-row lg:justify-between items-center my-[5rem]">
      <div className="flex flex-col lg:items-start md:max-w-[60%] max-w-[80%] justify-center text-center lg:text-left">
      <h5>So you want to travel to</h5>
        <h1>space</h1>
        <p className="text-center lg:text-left w-full md:w-full lg:w-[80%] mb-[2rem] lg:mb-0">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <div className="transparent hover:bg-white/20 w-60 h-60 md:w-72 md:h-72 rounded-[100%] mr-20 relative cursor-pointer transition duration-500 delay-100">
      <Link to="/explore">
      <div className="bg-white w-48 h-48 md:w-56 md:h-56 rounded-[100%] mr-20 absolute top-[11%] left-[11%] visible">
        <h4 className="absolute z-10 text-primary top-[40%] left-[20%]">Explore</h4>
      </div>
      </Link>
      </div>
      </div>
  )
}

export default Landing