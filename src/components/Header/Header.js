import React from 'react'
// import logo from "../../assets/images/Logo.png"
import {SiSnapcraft} from "react-icons/si"
import { motion,useMotionValue,useTransform } from "framer-motion"
const Header = () => {

  // const variants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // }


  return (
    <div>
      <div className='backdrop-blur z-10 text-white  py-3 px-5 md:px-32 flex justify-between items-center w-full fixed'>
          <motion.div 
            className='flex justify-center items-center gap-1 font-fira md:font-league font-black text-3xl md:text-4xl'
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition = {{duration:0.5}}
          >
            
            <SiSnapcraft className='text-green md:text-5xl' />
            <h1 className='hidden md:block'>&nbsp;abhishek.</h1>
            
          </motion.div>
          <div >
             <ul className='font-poppin font-regular flex justify-center items-center gap-3 md:gap-14 '>
                <a href='#about'>
                  <motion.li 
                    className='hover:text-green text-md'
                    initial = {{translateY:-20, opacity:0}}
                    animate = {{translateY: 0, opacity:1}}
                    transition = {{duration:0.1, delay:0.6}}

                  >
                    <span className='font-bold text-light'>01&nbsp; </span>About
                  </motion.li>
                </a>
                <a href="#projects">
                  <motion.li className='hover:text-green text-md'
                    initial = {{translateY:-20, opacity:0}}
                    animate = {{translateY: 0, opacity:1}}
                    transition = {{duration:0.2, delay:0.6}}
                  >
                    <span className='font-bold text-light'>02&nbsp; </span>Project
                  </motion.li>
                </a>
                <a href="#contact">
                  <motion.li className='hover:text-green text-md'
                    initial = {{translateY:-20, opacity:0}}
                    animate = {{translateY: 0, opacity:1}}
                    transition = {{duration:0.3, delay:0.6}}
                  >
                    <span className='font-bold text-light'>03&nbsp; </span>Contact
                  </motion.li>
                </a>
             </ul>
          </div>
      </div>
    </div>
  )
}

export default Header