import React from 'react'
import RioDeJaneiro from '../assets/riodejaneiro.jpg';
import PraiaDoArpoador from '../assets/praiadoarpoador.jpg';
import Buzios from '../assets/buzios.jpeg';
import PanDeAzucar from '../assets/pandeazucar.jpg';

const Selects = () => {

  return (
    <div className=' mx-auto grid lg:grid-cols-2 gap-4' id="destinations">
    <a className=' relative max_height_480 cursor-pointer' href='#'>
      <img id="rioDeJaneiro" className='w-full h-full object-cover cursor-pointer' src={RioDeJaneiro} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Río De Janeiro
        </p>
      </div>
    </a>
    <a className='relative max_height_480 cursor-pointer' href='#'>
      <img className='w-full h-full object-cover cursor-pointer' src={PraiaDoArpoador} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Praia Do Arpoador
        </p>
      </div>
    </a>
    <a className='relative max_height_480 cursor-pointer' href='#'>
      <img className='w-full h-full object-cover cursor-pointer' src={Buzios} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Buzios
        </p>
      </div>
    </a>
    <a className='relative max_height_480 cursor-pointer' href='#'>
      <img className='w-full h-full object-cover cursor-pointer' src={PanDeAzucar} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Pan De Azucar
        </p>
      </div>
    </a>
    </div>
    
  )
}


export default Selects