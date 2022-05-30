import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import me from "../../assets/images/Me.png"
const About = () => {
  return (
    <div id="about" className='container md:mx-auto pt-24 py-10 px-7 md:px-48 md:mt-24'>
        <div>
          <h1 className='text-green font-league font-black text-4xl md:text-6xl'>Me,<br></br> Myself<br></br> and I</h1>
          <div className='flex justify-left items-center gap-3 pt-3'>
              <span className='w-40 h-1 bg-green border-2 border-green'></span>
              <FaInstagram className='text-2xl text-white' />
              <FaGithub className='text-2xl text-white' />
              <FaLinkedin className='text-2xl text-white' />
          </div>
          <div className='md:flex  md:gap-6 mx-auto pt-4'>
             <p className='text-white opacity-80 pt-6 md:w-1/2  mx-auto text-md font-inter text-white leading-relaxed md:text-lg'>
                Hello! My name is <span >Abhishek Singh</span>, I&apos;m 20 years old passionate web developer,
                based in India. I started coding back in my high school. My interest in 
                web developement came back in 2020.
                <br></br><br></br>
                Fast forwarding to today, I have developed really lovely side 
                projects which have taught me and let me learn new technologies 
                along with my studies.
                <br></br><br></br>
                Here are some of the technologies that I have worked with &#8212;
                <div className='tech flex mt-5 mx-8 font-fira text-sm md:text-lg font-regular justify-left items-center gap-14'>
                   <ul>
                     <li>React</li>
                     <li>Next.JS</li>
                     <li>Node</li>
                   </ul>
                   <ul>
                     <li>Mongo DB</li>
                     <li>Express.JS</li>
                     <li>Figma</li>
                   </ul>
                </div>
             </p>
          
            <div className='mx-auto mt-3 '>
              <img src={me} alt="me" className='md:w-3/4 myimage' ></img>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About