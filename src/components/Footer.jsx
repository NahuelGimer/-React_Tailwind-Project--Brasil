import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16' id="contact">
      <div className=' mx-auto flex flex-col px-4'>
      <h1 className='flex justify-center w-full '>BRASIL</h1>
        <div className=' text-center w-full justify-between items-center'>
          <div className='flex justify-center w-full my-4'>
            <a target="_blank" href="https://www.linkedin.com/in/nahuel-gimer" className='m-3 cursor-pointer'>
            <FaLinkedin className='icon icon_footer icon_footer-linkedin' />
            <h3>LinkedIn</h3>
            </a>
            <a target="_blank" href="https://github.com/NahuelGimer" className='m-3 cursor-pointer'>
            <FaGithub className='icon icon_footer  icon_footer-github' />
            <h3>GitHub</h3>
            </a>
            <a target="_blank" href='https://wa.me/5491126101998' className='m-3 cursor-pointer'>
            <FaWhatsapp className='icon icon_footer  icon_footer-whatsapp' />
            <h3>WhatsApp</h3>
            </a>
            <a href="mailto:gimernahuel.work@gmail.com" className='m-3 cursor-pointer'>
            <FaEnvelope className='icon icon_footer  icon_footer-email' />
            <h3>Email</h3>
            </a>
          </div>
        </div>
        <h3 className='flex justify-center w-full '>© Nahuel Gimer. All right reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
