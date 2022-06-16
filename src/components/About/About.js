import React,{useRef} from 'react'
// import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import {Box} from "@material-ui/core"
import me from "../../assets/images/Me.png"
import { motion } from 'framer-motion'

const About = () => {
  const scrollRef = useRef(null);
  const DOB = (new Date().getFullYear()) -2002

  return (
    <Box id="about" className='flex justify-center items-center bg-lightDark'>
      <Box  className='flex flex-col md:mt-16 md:pb-32 mt-20 pb-20 px-4 md:px-72'>
        <motion.h1 
          className='text-white font-league font-black text-4xl md:text-6xl'
          initial={{ opacity: 0,translateY:40 }}
          whileInView={{ opacity: 1,translateY:0 }}
          transition = {{duration:0.6}}
          viewport={{ root: scrollRef,once: true }}
        >
            Me,<br></br> Myself<br></br> and I
        </motion.h1>

        <motion.div 
          className='flex pt-3'
          initial={{ opacity: 0,translateY:40 }}
          whileInView={{ opacity: 1,translateY:0 }}
          transition = {{duration:0.6}}
          viewport={{ root: scrollRef,once: true }}
        >
          <span className='w-40 h-1 bg-white border-2 border-white'> </span>
          {/* <a href="https://www.instagram.com/invites/contact/?i=1mwje5839nx13&utm_content=eeootg6" className=' rounded-full'><FaInstagram className='text-2xl text-instagram' /></a>
          <a href="https://github.com/Abh1shekSingh"  className=' rounded-full'><FaGithub className='text-2xl text-green' /></a>
          <a href="https://www.linkedin.com/in/abhishek-764a791bb/" className='rounded-full'><FaLinkedin className='text-2xl text-linkdin' /></a> */}
        </motion.div>
        
        <Box className='md:flex pt-4'>
          <Box className='md:flex md:flex-col'>
            <motion.p 
              initial={{ opacity: 0,translateY:40 }}
              whileInView={{ opacity: 1,translateY:0 }}
              transition = {{duration:0.6}}
              viewport={{ root: scrollRef,once: true }}
              className='text-paragraph opacity-80 pt-6 md:w-11/12 text-md font-poppin leading-relaxed md:text-md'>
                Hello! (ਸਤ ਸ੍ਰੀ ਅਕਾਲ) my name is <span className='text-paragraph font-black'>Abhishek Singh</span>, I&apos;m {DOB} years old passionate web developer,
                based in Punjab, India. I enjoy bulding stuff for the web. In my high school I learned C++ which build 
                my interest in coding. Later, When I got into university, I started learning making website
                out of my interest and ended up making some cool <span className='text-paragraph font-black'>front-end</span> as well as <span className='text-paragraph font-black'>full-stack</span> Web applications 
                <br></br><br></br>
                Fast forwarding to today, I have developed really lovely side 
                projects which have taught me and let me learn new technologies with time, 
                such as  &#8212; Firebase, Material UI, Tailwind CSS, etc.
                <br></br><br></br>
                Here are some of the technologies that I have worked with &#8212;
            </motion.p>

            <motion.div 
              className=' text-paragraph tech flex mt-5 ml-8 font-mono text-sm md:text-lg font-light justify-left items-center gap-14'
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
            </Box>
          
            {/* <motion.div 
              className='mt-7'
              initial={{ opacity: 0,translateY:40 }}
              whileInView={{ opacity: 1,translateY:0 }}
              transition = {{duration:0.6,delay:0.5}}
              viewport={{ root: scrollRef,once: true }}
            > */}
              <motion.img initial={{opacity:0, translateX:100}} whileInView={{opacity:1, translateX:0}} transition={{duration:0.6, type:"spring",stiffness: 100}} viewport={{ root: scrollRef,once: true }} src={me} alt="me" className='myimage'></motion.img>
            {/* </motion.div> */}
        </Box>
      </Box>
    </Box>
  )
}

export default About