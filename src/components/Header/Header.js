import React from 'react'
// import logo from "../../assets/images/Logo.png"
import {SiSnapcraft} from "react-icons/si"
const Header = () => {
  return (
    <div>
      <div className='backdrop-blur z-10 text-white shadow-sm py-3 px-5 md:px-32 flex justify-between items-center w-full fixed'>
          <div className='flex justify-center items-center gap-1 font-fira md:font-league font-black text-3xl md:text-4xl'>
            {/* <img src={logo} alt="logo" className='w-14' /> */}
            <SiSnapcraft className='text-green md:text-5xl' />
            
          </div>
          <div >
             <ul className='font-poppin font-regular flex justify-center items-center gap-3 md:gap-14 '>
               <a href='#about'><li className='hover:text-green text-md'>About</li></a>
               <a href="#projects"><li className='hover:text-green text-md'>Project</li></a>
               <a href="#contact"><li className='hover:text-green text-md'>Contact</li></a>
             </ul>
          </div>
      </div>
    </div>
  )
}

export default Header