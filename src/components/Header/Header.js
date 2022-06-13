import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import {SiSnapcraft} from "react-icons/si"
import { motion} from "framer-motion"
import HeaderDrawer from './HeaderDrawer'
import {GoHome} from "react-icons/go"
import {BsPencil,BsPhone} from "react-icons/bs"
import {HiOutlineStar} from "react-icons/hi"
const Header = () => {
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  const [isOn,setIsOn] = useState(false);

  const toggleSwitch = () => {
      setIsOn(!isOn);
  }

  return (
    <Box className='flex justify-between py-4 px-6 md:px-14'>
      <Box>
        <SiSnapcraft className='text-green text-4xl'  />
      </Box>
      <Box className='flex justify-center items-center gap-6'>
        <Box className='hidden md:block text-subtext'>
          <ul className='flex justify-center items-center gap-6 tracking-wide font-poppin font-medium cursor-pointer'>
            <a href='/'><li className='flex justify-center items-center gap-2'><GoHome />Home</li></a>
            <a href='#about'><li className='flex justify-center items-center gap-2'><BsPencil />About</li></a>
            <a href="#projects"><li className='flex justify-center items-center gap-2'><HiOutlineStar />Projects</li></a>
            <a href='#contact'><li className='flex justify-center items-center gap-2'><BsPhone />Contact</li></a>
          </ul>
        </Box>
        <Box className="switch" data-isOn={isOn} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </Box>
      </Box>
      <HeaderDrawer />
    </Box>
  )
}

export default Header