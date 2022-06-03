import React from 'react'
// import logo from "../../assets/images/Logo.png"
import {SiSnapcraft} from "react-icons/si"
import { motion,useMotionValue,useTransform } from "framer-motion"
const Header = () => {

  // const variants = {
  //   hidden: { opacity: 0 },
  //   visible: { opacity: 1 },
  // }

  const x = useMotionValue(0)
const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  return (
    <div>
      <div className='backdrop-blur z-10 text-white shadow-sm py-3 px-5 md:px-32 flex justify-between items-center w-full fixed'>
          <motion.div 
            className='flex justify-center items-center gap-1 font-fira md:font-league font-black text-3xl md:text-4xl'
            drag="x" style={{ x, opacity }} 
            initial = {{opacity:0}}
            animate = {{opacity:1}}
            transition ={{duration:0.6 , delay:0.2}}
          >
            
            <SiSnapcraft className='text-green md:text-5xl' />
            
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
                    About
                  </motion.li>
                </a>
                <a href="#projects">
                  <motion.li className='hover:text-green text-md'
                    initial = {{translateY:-20, opacity:0}}
                    animate = {{translateY: 0, opacity:1}}
                    transition = {{duration:0.2, delay:0.6}}
                  >
                    Project
                  </motion.li>
                </a>
                <a href="#contact">
                  <motion.li className='hover:text-green text-md'
                    initial = {{translateY:-20, opacity:0}}
                    animate = {{translateY: 0, opacity:1}}
                    transition = {{duration:0.3, delay:0.6}}
                  >
                    Contact
                  </motion.li>
                </a>
             </ul>
          </div>
      </div>
    </div>
  )
}

export default Header