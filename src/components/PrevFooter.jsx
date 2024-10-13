import React from 'react';
import beachVid2 from '../assets/beachVid2.mp4';

const PrevFooter = () => {
  return (
    <div className='w-full h-screen relative mt-5'>
      <video
        className='w-full h-full object-cover relative'
        src={beachVid2}
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default PrevFooter;


