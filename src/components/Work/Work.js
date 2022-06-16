import React,{useRef} from 'react'
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {FiGithub, FiExternalLink} from "react-icons/fi"
import {projects} from "../../constant/constant"

import {motion} from 'framer-motion'
const Work = () => {
  const scrollRef = useRef(null);

  return (
    <div id="projects" className=' md:mx-auto pt-20 pb-20 py-10 px-10 md:px-48 bg-dark'>
      <motion.div 
        initial={{ opacity: 0,translateY:40 }}
        whileInView={{ opacity: 1,translateY:0 }}
        transition = {{duration:0.6}}
        viewport={{ root: scrollRef,once: true }}
      >
          <h1 
            
            className='text-white font-league font-black text-4xl md:text-6xl'>
            What I have build
          </h1>
          <span 
            className='flex w-40 h-1 my-6 bg-white border-2 border-white'>
          </span>
      </motion.div>
      
      <Grid container rowGap={6} columnGap={0} >
      {projects.map((item) =>(
        <Grid  item md={6} xs={12} sm={6} className="GridItem">
        <motion.div 
          initial={{ opacity: 0,translateY:40 }}
            whileInView={{ opacity: 1,translateY:0 }}
            transition = {{duration:0.6}}
            viewport={{ root: scrollRef,once: true }}
        >
          <Card  sx={{ maxWidth: 400 }} className='project-cards'>
            <CardMedia
              component="img"
              height="140"
              image={item.thumbnail}
              alt="Project 1"
            />
            <CardContent>
              <h1 className='font-league text-white text-2xl font-bold' >
                {item.projectName}
              </h1>
              <p className="font-poppin text-paragraph text-md">
                {item.description}
                <br></br><br></br>
                <span className='font-fira text-paragraph text-sm '>{item.techStack}</span>
              </p>
            </CardContent>
            <CardActions className='mx-2 text-xl text-white flex gap-4 items-center'>
                <a href={item.repo}><FiGithub /></a>
                <a href={item.live}><FiExternalLink /></a>
            </CardActions>
          </Card>
          </motion.div>
        </Grid>
      ))}
      
      </Grid>
    </div>
  )
}

export default Work