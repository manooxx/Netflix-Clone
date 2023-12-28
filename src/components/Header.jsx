import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai"
import Logo from '../assests/logo/logo.png'

const Header = () => {
  return (
    <div className='bg-black text-slate-300 font-medium text-md  flex gap-10 items-center px-6'>

      <img className='w-28 h-16' src={Logo} alt="logo" />


      <ul className='flex w-[1100px]  '>

        <li className='px-4 transition duration-300 ease-in-out hover:text-red-500'>
          <Link className="" to="/">Home</Link>
        </li>

        <li className='px-4 transition duration-300 ease-in-out hover:text-red-500'>
          <Link to="/About">About</Link>
        </li>

        <li className='px-4 transition duration-300 ease-in-out hover:text-red-500'>
          <Link to="/Contact">Contact Us</Link>
        </li>

      </ul>
      <AiOutlineSearch className='cursor-pointer  hover:text-red-400 text-xl  ' />

    </div>
  )
}

export default Header
