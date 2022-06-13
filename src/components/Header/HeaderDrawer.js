import { Box } from '@mui/material'
import React from 'react'
import {GoHome} from "react-icons/go"
import {BsPencil,BsPhone} from "react-icons/bs"
import {HiOutlineStar} from "react-icons/hi"

const HeaderDrawer = () => {
  return (
    <Box className='fixed z-10 block md:hidden bottom-0 left-0 right-0 bg-dark p-4 border-l-0 border-r-0 border-b-0 border-solid border-green border-2'>
        <Box className='flex justify-center items-center gap-7'>
            <h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center'><GoHome />Home</h1>
            <h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center'><BsPencil />About</h1>
            <h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center'><HiOutlineStar />Projects</h1>
            <h1 className='text-white font-poppin font-medium flex flex-col justify-center items-center'><BsPhone />Contact</h1>
        </Box>
    </Box>
  )
}

export default HeaderDrawer