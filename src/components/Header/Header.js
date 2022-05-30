import React from 'react'
import logo from "../../assets/images/Logo.png"
import {GiHamburgerMenu} from  "react-icons/gi"
const Header = ({navbar, setNavbar}) => {

  function handleClick(){
      setNavbar(!navbar)
  }

  return (
    <div className='relative fixed top-0 left-0 right-0 md:border-none '>
        <div className='bg-amber-500 py-4 px-6 md:px-24 flex justify-between items-center'>
          <div>
            <img src={logo} alt='logo' className='w-12 md:w-16'></img>
          </div>
          <div className='md:block hidden' >
              <ul className='font-fira text-sm font-medium flex text-white gap-12'>
                  <a href='#about'><li className='hover:text-green'> About</li></a>
                  <a href="#projects"><li className='hover:text-green'>Projects</li></a>
                  <a href="#contact"><li className='hover:text-green'>Contact </li></a>
              </ul>
          </div>
          <div className='z-10 relative text-white md:hidden'>
              <GiHamburgerMenu onClick={handleClick} className='text-2xl' />
              <div className={`shadow-xl bg-green w-44 h-72 absolute right-6 top-8 flex justify-center items-center ${navbar ? 'visible' :'hidden'}`}>
                <ul className='font-inter  font-semibold flex flex-col gap-8'>
                <a href='#about'><li>About</li></a>
                  <a href="#projects"><li>Projects</li></a>
                  <a href="#contact"><li>Contact</li></a>
                </ul>
              </div>
          </div>
          
        </div>
    </div>
  )
}

export default Header;