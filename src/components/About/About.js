import React,{useRef} from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import me from "../../assets/images/Me.png"
import { motion } from 'framer-motion'

const About = () => {
  const scrollRef = useRef(null);
  return (
    <div id="about" className='container md:mx-auto pt-24 py-10 px-7 md:px-48 md:mt-24'>
        <div>

          <motion.h1 
            className='text-green font-league font-black text-4xl md:text-6xl'
            initial={{ opacity: 0,translateY:40 }}
            whileInView={{ opacity: 1,translateY:0 }}
            transition = {{duration:0.6}}
            viewport={{ root: scrollRef,once: true }}
          >
            Me,<br></br> Myself<br></br> and I
          </motion.h1>

          <motion.div 
            className='flex justify-left items-center gap-3 pt-3'
            initial={{ opacity: 0,translateY:40 }}
            whileInView={{ opacity: 1,translateY:0 }}
            transition = {{duration:0.6}}
            viewport={{ root: scrollRef,once: true }}
          >
              <span className='w-40 h-1 bg-green border-2 border-green'> </span>
              <a href="https://www.instagram.com/invites/contact/?i=1mwje5839nx13&utm_content=eeootg6" className='bg-green py-2 px-2 rounded-full'><FaInstagram className='text-2xl text-white' /></a>
              <a href="https://github.com/Abh1shekSingh"  className='bg-green py-2 px-2 rounded-full'><FaGithub className='text-2xl text-white' /></a>
              <a href="https://www.linkedin.com/in/abhishek-764a791bb/" className='bg-green py-2 px-2 rounded-full'><FaLinkedin className='text-2xl text-white' /></a>
              
                            
          </motion.div>
          <div className='md:flex pt-4'>

          <div className='md:flex md:flex-col md:gap-6 '>
             <motion.p 
              initial={{ opacity: 0,translateY:40 }}
              whileInView={{ opacity: 1,translateY:0 }}
              transition = {{duration:0.6}}
              viewport={{ root: scrollRef,once: true }}
              className='text-white opacity-80 pt-6 md:w-3/4 text-md font-inter text-white leading-relaxed md:text-lg'>
                Hello! My name is <span >Abhishek Singh</span>, I&apos;m 20 years old passionate web developer,
                based in India. I started coding back in my high school. My interest in 
                web developement came back in 2020.
                <br></br><br></br>
                Fast forwarding to today, I have developed really lovely side 
                projects which have taught me and let me learn new technologies 
                along with my studies.
                <br></br><br></br>
                Here are some of the technologies that I have worked with &#8212;
                
             </motion.p>

             <motion.div 
              className=' text-white tech flex mt-5 ml-8 font-mono text-sm md:text-lg font-light justify-left items-center gap-14'
              initial={{ opacity: 0,translateY:40 }}
              whileInView={{ opacity: 1,translateY:0 }}
              transition = {{duration:0.6}}
              viewport={{ root: scrollRef,once: true }}
             >
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
                
              </motion.div>
              </div>
          
            <motion.div 
              className='mt-3 md:w-7/12 '
              initial={{ opacity: 0,translateY:40 }}
              whileInView={{ opacity: 1,translateY:0 }}
              transition = {{duration:0.6,delay:0.5}}
              viewport={{ root: scrollRef,once: true }}
            >
              <img src={me} alt="me" className='myimage' ></img>
            </motion.div>
          </div>
        </div>
    </div>
  )
}

export default About