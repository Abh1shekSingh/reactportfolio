import React from 'react'
import { motion } from 'framer-motion'
import { Box } from '@mui/material'
const Hero = () => {

  return (
    <Box className='flex justify-center items-center'>
      <Box className='flex flex-col pt-10 px-4 md:pt-14'>
        <motion.h1 
          initial = {{translateY:20, opacity:0}}
          animate = {{translateY:0, opacity:1}}
          transition = {{duration:0.5 , delay:1.5}}
        >
          <span className='font-league text-xl text-green leading-loose'>👋 Hi, my name is</span><br></br><span className='hidden md:block'><br></br></span>
          <span className='font-black font-league text-4xl md:text-7xl text-light leading-normal'>Abhishek Singh.</span><br></br><span className='hidden md:block'><br></br></span>
          <span className='font-black font-league text-4xl md:text-7xl text-light opacity-80 leading-tightest'>I Turn Rasmalai into Code.</span>
        </motion.h1>

        <motion.p 
          className='font-poppin font-regular leading-8 text-subtext opacity-80 text-md my-4 md:text-md md:w-1/2'
          initial = {{translateY:20, opacity:0}}
          animate = {{translateY:0, opacity:1}}
          transition = {{duration:0.2 , delay:1.6}}
        >
          I&apos;m 3<sup>rd</sup> year computer science undergrad at 
          Chandigarh University, India. Currently I&apos;m React JS Developer intern at
          <a href='https://stakesmen.com' className='text-green'> stakesmen</a>.

        </motion.p>

        <a href='https://drive.google.com/file/d/1tqRMCQP1My5vcowOWVNSzGXqWOsSGRB1/view?usp=sharing' className='mt-6 bg-orange w-0'>
          <motion.button 
            className='transtition duration-300 bg-transparent hover:bg-green text-white font-poppin font-medium border border-green hover:border-transparent md:text-sm px-11 py-3 text-sm md:px-11 md:py-3'
            initial = {{translateY:20, opacity:0}}
            animate = {{translateY:0, opacity:1}}
            transition = {{duration:0.1 , delay:1.7}}
          >
            Resume
          </motion.button>
        </a>
      </Box>
    </Box>
  )
}

export default Hero