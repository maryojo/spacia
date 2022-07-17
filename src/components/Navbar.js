
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import menu from '../images/shared/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center pt-5 sm:pt-10 lg:pt-3'>
      <div className='ml-5 sm:ml-10 lg:ml-20 w-[50px]'>
        <img src={logo} alt="" className='w-[50%] md:w-[70%] cursor-pointer'/>
      </div>
      <div>
        <img src={menu} alt="" className='lg:hidden mr-5 sm:mr-10 cursor-pointer'/>
        <nav className='nav-text list-none hidden lg:flex flex-row items-center space-x-10 h-[80px] backdrop-blur-sm bg-white/5 pl-40 pr-52'>
        <Link to="/">
        <li className='cursor-pointer'><span className='font-bold pr-2'>00</span> Home</li>
        </Link>
        <Link to="/destination">
          <li className='cursor-pointer'><span className='font-bold pr-2'>01</span> Destination</li>
        </Link>
        <Link to="/crew">
          <li className='cursor-pointer'><span className='font-bold pr-2'>02</span> Crew</li>
        </Link>
        <Link to="/technology">
          <li className='cursor-pointer'><span className='font-bold pr-2'>03</span> Technology</li>
        </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar