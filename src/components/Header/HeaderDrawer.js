import { Box } from '@mui/material'
import React from 'react'
import {GoHome} from "react-icons/go"
import {BsPencil,BsPhone} from "react-icons/bs"
import {HiOutlineStar} from "react-icons/hi"

const HeaderDrawer = () => {
  return (
    <Box className='fixed z-10 block md:hidden bottom-0 left-0 right-0 bg-dark p-4 border-l-0 border-r-0 border-b-0 border-solid border-purple border-2'>
        <Box className='flex justify-center items-center gap-7'>
            <a href='/'><h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center text-xs'><GoHome />Home</h1></a>
            <a href='#about'><h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center text-xs'><BsPencil />About</h1></a>
            <a href='#projects'><h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center text-xs'><HiOutlineStar />Projects</h1></a>
            <a href='#contact'><h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center text-xs'><BsPhone />Contact</h1></a>
        </Box>
    </Box>
  )
}

export default HeaderDrawer