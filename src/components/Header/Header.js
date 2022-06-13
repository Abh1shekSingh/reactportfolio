import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import {SiSnapcraft} from "react-icons/si"
import { motion} from "framer-motion"
import HeaderDrawer from './HeaderDrawer'
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
        <Box className='hidden md:block text-white'>
          <ul className='flex justify-center items-center gap-6 tracking-wide font-poppin font-medium cursor-pointer'>
            <a href='/'><li >Home</li></a>
            <a href='#about'><li >About</li></a>
            <a href="#projects"><li >Projects</li></a>
            <a href='#contact'><li >Contact</li></a>
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