import React from 'react'
import hand3d from "../../assets/images/hand.png"
const Footer = () => {
  return (
    <div id='contact' className='text-center md:mx-auto pt-24 px-10 md:px-48 md:mt-24'>
       <div>
          <h1 className='text-green font-league font-black text-4xl md:text-7xl'>Lets Connect</h1>
          <span className='flex w-40 h-1 my-6 mr-auto ml-auto bg-green border-2 border-green'></span>
       </div>
       <div>
          <p className='text-white opacity-75 text-lg md:text-xl md:px-80 '>Let's Connect & Talk. Though I&apos;m a university student, but, if you have any question or query, feel free ask.</p>
       </div>
       <div className='flex justify-center items-center text-white opacity-75 mt-8 '>
          <a href="mailto:abhinav210702@gmail.com"><button className='gap-2 flex items-center justify-center border py-2 px-4 border-green border-2 font-inter hover:bg-green md:text-xl font-bold transition-all '>Say hello</button></a>
       </div>
       <div>
         <img src ={hand3d} alt=" hand3d"className='w-44 mr-auto ml-auto mt-3 md:w-44' />
       </div>
    </div>
  )
}

export default Footer