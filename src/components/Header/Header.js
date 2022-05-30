import React from 'react'
// import logo from "../../assets/images/Logo.png"
import {SiSnapcraft} from "react-icons/si"
const Header = () => {
  return (
    <div>
      <div className='z-10 text-white bg-dark shadow-sm py-3 px-5 md:px-32 flex justify-between items-center w-full fixed'>
          <div className='flex justify-center items-center gap-1 font-fira md:font-league font-black text-3xl md:text-4xl'>
            {/* <img src={logo} alt="logo" className='w-14' /> */}
            <SiSnapcraft className='text-green' />
            
          </div>
          <div >
             <ul className='font-poppin font-medium flex justify-center items-center gap-3 md:gap-14 text-sm'>
               <a href='#about'><li className='hover:text-green'>About</li></a>
               <a href="#projects"><li className='hover:text-green'>Project</li></a>
               <a href="#contact"><li className='hover:text-green'>Contact</li></a>
             </ul>
          </div>
      </div>
    </div>
  )
}

export default Header