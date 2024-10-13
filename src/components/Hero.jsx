import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import beachVid from '../assets/beachVid.mp4';

const Hero = () => {
  return (
    <div className='w-full h-screen relative mb-5'>
          <a onClick={() => {
          const elementDestinations = document.getElementById("services")
          elementDestinations?.scrollIntoView({
            behavior: 'smooth'
          })
        }}><div className='scrollDown'></div></a>
      <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      
    </div>
  );
};

export default Hero;
