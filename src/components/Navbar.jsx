import React from 'react';
import {useState} from 'react';
import {useRef} from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 background_nav text-white' id="home">

      <div>
        <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BRASIL</h1>
      </div>
      <ul className='hidden md:flex'>
        <li><h3><a href='#home'>Home</a></h3></li>
        <li><h3><a onClick={() => {
          const elementServices = document.getElementById("services")
          elementServices?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Services</a></h3></li>
        <li><h3><a onClick={() => {
          const elementDestinations = document.getElementById("destinations")
          elementDestinations?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Destinations</a></h3></li>
        <li><h3><a onClick={() => {
          const elementContact = document.getElementById("contact")
          elementContact?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Contact</a></h3></li>       
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className='md:hidden z-10'>
        {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} />}
      </div>

      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? ' absolute text-black left-0 top-0 w-full bg-gray-100/80 px-4 py-1 flex flex-col md:hidden' : 'absolute left-[-200%]'}>
      <h1>BRASIL</h1>
        <ul className='navbar_ul_mobile'>
          <li className='border-b w-screen text-center'><a><h3>Home</h3></a></li>
          <li className='border-b w-screen text-center'><a onClick={() => {
          const elementDestinations = document.getElementById("destinations")
          elementDestinations?.scrollIntoView({
            behavior: 'smooth'
          })
        }}><h3>Destinations</h3></a></li>
          <li className='border-b w-screen text-center'><a onClick={() => {
          const elementContact = document.getElementById("contact")
          elementContact?.scrollIntoView({
            behavior: 'smooth'
          })
        }}><h3>Contact</h3></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

