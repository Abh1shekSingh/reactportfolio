import React,{useState} from 'react'
import Header from '../Header/Header'
const Hero = () => {

  const [navbar, setNavbar] = useState(false)

  return (
    <>
      <Header setNavbar = {setNavbar} navbar ={navbar} />
      
        <div className={`md:mt-16 ${navbar ? 'Hero' : null}`}>
          <div className='py-10 px-10 md:px-48'>
            <h1 className='font-league text-5xl leading-tight font-black text-white md:text-7xl md:leading-normal '>Hi <br></br> <span className='text-green'>I'm Abhishek</span> <br></br> I Turn Rasmalai Into Code</h1>
            <p className='font-inter font-medium leading-8 text-white text-xl my-4 md:text-2xl'>I'm <span className='text-green'>Web Developer</span> based in India 🇮🇳</p>
            <button className='bg-transparent mt-6 hover:bg-green text-xl text-white font-inter font-medium py-2 px-6 border border-green hover:border-transparent md:text-xl md:mt-6 md:px-11 md:py-3'>Resume</button>
          </div>
        </div>
    </>
  )
}

export default Hero