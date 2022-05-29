import React from 'react'
import Card from '@mui/material/Card';
import Grid from "@mui/material/Grid"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {FiGithub, FiExternalLink} from "react-icons/fi"
import {projects} from "../../constant/constant"
const Work = () => {
  return (
    <div id="projects" className=' md:mx-auto pt-24 py-10 px-10 md:px-48 md:mt-24'>
      <div className=''>
          <h1 className='text-green font-league font-black text-4xl md:text-6xl'>What I have build</h1>
          <span className='flex w-40 h-1 my-6 bg-green border-2 border-green'></span>
      </div>
      
      <Grid container rowGap={6} columnGap={0} >
      {projects.map((item) =>(
        <Grid  item md={6} xs={12} sm={6} className="GridItem">
          <Card  sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="140"
              image={item.thumbnail}
              alt="Project 1"
            />
            <CardContent>
              <h1 className='font-league text-2xl font-bold' >
                {item.projectName}
              </h1>
              <p className="font-inter text-md">
                {item.description}
                <br></br><br></br>
                <span className='font-fira text-sm'>{item.techStack}</span>
              </p>
            </CardContent>
            <CardActions className='mx-2 text-xl flex gap-4 items-center'>
                <a href={item.repo}><FiGithub /></a>
                <a href={item.live}><FiExternalLink /></a>
            </CardActions>
          </Card>
        </Grid>
      ))}
      
      </Grid>
    </div>
  )
}

export default Work