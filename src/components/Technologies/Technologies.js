import React,{useRef} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { technologies } from '../../constant/constant';
import {motion} from 'framer-motion'
const Technologies = () => {
  const scrollRef = useRef(null);
  return (
    <Box className=' md:mx-auto pt-20 py-10 pb-20 px-10 md:px-48 bg-lightDark'>
        <Box>
           <motion.h1 initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6}} className='text-white font-league font-black text-4xl md:text-6xl'>Technologies</motion.h1>
           <span className='flex w-40 h-1 my-6 bg-green border-2 border-white'></span>
        </Box>
        <Box className='md:w-1/2'>
          <motion.p initial={{opacity:0, translateY:40}} whileInView={{opacity:1, translateY:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6,delay:0.2}} className="text-paragraph font-inter text-md md:text-lg">
            Started with some basics of HTML and CSS, now I have been 
            working with some modern technologies to build my websites.
          </motion.p>
        </Box>
        <Box className="mt-6">
        <Grid container spacing={2}>
        {technologies.map((item) => (
          <Grid item md={3} xs={12} sm={6} >
          <motion.div initial={{opacity:0, translateX:-100}} whileInView={{opacity:1, translateX:0}} viewport={{ root: scrollRef,once: true }} transition={{duration:0.6, delay:0.3}} >
          <Card sx={{ minWidth: 240 }} className='techCards'>
            <CardContent className="flex flex-col gap-6">
              <Box className="flex justify-left items-center gap-3">
                <img src={item.logo} alt={item.phase} className="border border-4 border-black" />
                <h1 className="flex justify-left text-xl items-center gap-2 text-white font-inter font-semibold">{item.phase}</h1>
              </Box>
               <p className='font-poppin text-paragraph leading-loose'>
                  {item.description}
                </p>
            </CardContent>
          </Card>
          </motion.div>
          </Grid>
        ))}
        </Grid>
        </Box>
    </Box>
  )
}

export default Technologies