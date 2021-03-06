import React,{useRef} from 'react'
import hand3d from "../../assets/images/hand.png"
import {motion} from "framer-motion"
import { Box } from '@material-ui/core'
const Footer = () => {
   const scrollRef = useRef(null)
  return (
    <Box id='contact' className='text-center md:mx-auto pt-14 px-10 md:px-48 bg-dark'>
       <Box>
          <motion.h1 initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6}} className='text-white font-league font-black text-4xl md:text-7xl'>Lets Connect</motion.h1>
          <span className='flex w-40 h-1 my-6 mr-auto ml-auto bg-white border-2 border-white'></span>
       </Box>
       <Box>
          <motion.p initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6,delay:0.3}} className='text-paragraph font-poppin  text-md md:text-lg md:px-80 '>Let's Connect & Talk. Though I&apos;m a university student, but, if you have any question or query, feel free ask.</motion.p>
       </Box>
       <Box className='flex justify-center items-center text-white opacity-75 mt-8 '>
          <motion.a initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6}} href="mailto:abhinav210702@gmail.com"><button className='gap-2 flex items-center justify-center border py-2 px-4 bg-purple border-purple border-2 font-poppin hover:bg-purple md:text-xl font-bold transition-all shadow-[5px_5px_0px_0px_rgba(255,255,255,255)]  hover:shadow-[0_0px_0px_0px_rgba(255,255,255,255)] '>Say hello 👋</button></motion.a>
       </Box>
       <Box>
         <motion.img initial={{opacity:0, translateY:100}} whileInView={{opacity:1, translateY:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6, delay:0.3, type:"spring", stiffness:200}} src ={hand3d} alt=" hand3d"className='relative bottom-11 w-36 mr-auto ml-auto mt-14 md:w-44 md:bottom-0 md:mt-0' />
       </Box>
    </Box>
  )
}

export default Footer