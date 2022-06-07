import React from 'react'
import Header from '../Header/Header'
import { motion } from 'framer-motion'
const Hero = () => {

 

  return (
    <>
      <Header/>
      
        
          <div className='container md:pt-40 flex flex-col justify-center items-left pt-32  px-10 md:px-48'>

            <motion.h1 
              className='font-league text-5xl leading-tight font-black text-white md:text-7xl md:leading-tight'
              initial = {{translateY:20, opacity:0}}
              animate = {{translateY:0, opacity:1}}
              transition = {{duration:0.5 , delay:1.5}}
            >
              <span className='text-5xl'>Hi !👋</span><br></br> <span className='text-green'>I'm Abhishek</span> <br></br> <span className='text-light'>I Turn Rasmalai Into Code</span>
            </motion.h1>

            <motion.p 
              className='font-inter font-medium leading-8 text-white text-xl my-4 md:text-xl'
              initial = {{translateY:20, opacity:0}}
              animate = {{translateY:0, opacity:1}}
              transition = {{duration:0.2 , delay:1.6}}
            >
              I'm <span className='text-green'>Web Developer</span> based in India <span className='md:hidden'>🇮🇳</span>
            </motion.p>

            <a href='https://drive.google.com/file/d/1tqRMCQP1My5vcowOWVNSzGXqWOsSGRB1/view?usp=sharing'>
              <motion.button 
                className='transtition duration-300 bg-transparent mt-6 hover:bg-green text-xl text-white font-fira font-medium py-2 px-6 border border-green hover:border-transparent md:text-sm md:mt-6 md:px-11 md:py-3'
                initial = {{translateY:20, opacity:0}}
                animate = {{translateY:0, opacity:1}}
                transition = {{duration:0.1 , delay:1.7}}
              >
                Resume
              </motion.button>
            </a>

          </div>
       
    </>
  )
}

export default Hero