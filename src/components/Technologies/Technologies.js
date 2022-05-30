import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from "@mui/material/Grid"
import { technologies } from '../../constant/constant';
const Technologies = () => {
  return (
    <div className=' md:mx-auto pt-24 py-10 px-10 md:px-48 md:mt-24'>
        <div>
           <h1 className='text-green font-league font-black text-4xl md:text-6xl'>Technologies</h1>
           <span className='flex w-40 h-1 my-6 bg-green border-2 border-green'></span>
        </div>
        <div className='md:w-1/2'>
          <p className="text-white opacity-75 font-inter text-lg md:text-lg">
            Started with some basics of HTML and CSS, now I have been 
            working with some modern technologies to build my websites.
          </p>
        </div>
        <div className="mt-6">
        <Grid container spacing={2}>
        {technologies.map((item) => (
          <Grid item md={3} xs={12} sm={6} >
          <Card sx={{ minWidth: 240 }}>
            <CardContent className="flex flex-col gap-3">
              <h1 className="flex justify-left items-center gap-2 text-dark font-inter font-semibold">{item.logo}{item.phase}</h1>
                <p className='font-inter'>
                  {item.description}
                </p>
            </CardContent>
          </Card>
          </Grid>
        ))}
        </Grid>
        </div>
    </div>
  )
}

export default Technologies