import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

function HeroSection() {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl text-center tracking-wid sm:text-6xl lg:text-7xl'>
        VirtualR Build Tools 
        <span className='text-transparent bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text'>{" "}For Developers</span>
      </h1>
      <p className="max-w-4xl mt-10 text-lg text-center text-neutral-500">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className='flex justify-center my-10'>
        <a className='px-4 py-3 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800' href="#">Start for free</a>
        <a className='px-4 py-3 mx-3 border rounded-md' href="#">Documentation</a>
      </div>
      <div className='flex justify-center mt-10'>
        <video autoPlay muted loop className='w-1/2 mx-2 my-4 border-[1px] border-orange-700 rounded-md shadow-orange-500' src={video1}></video>
        <video autoPlay muted loop className='w-1/2 mx-2 my-4 border-[1px] border-orange-700 rounded-md shadow-orange-500' src={video2}></video>
      </div>
    </div>
  )
}

export default HeroSection
