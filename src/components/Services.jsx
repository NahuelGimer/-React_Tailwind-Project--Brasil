import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaPlaneDeparture, FaHotel, FaMapMarkedAlt } from "react-icons/fa";
import ServicesImg from "../assets/services.jpg";

const Services = () => {
  return (
    <div className="mx-auto h-auto mb-5 grid relative" id="services">
      <h1 className="absolute center_h1-services z-20">Our Services</h1>
      <div className="w-9/12 absolute center_div-services z-10">
        <a className="cursor-pointer hoverServices m-2" href="#">
          <FaPlaneDeparture className="icon faPlane" size={140} />
          <div className="center_text-services_1">
            <h1 color="#fff">Travel</h1>
            <h3 color="#fff">
              On time to <br></br>new places.
            </h3>
          </div>
        </a>
        <a className="cursor-pointer hoverServices m-2" href="#">
          <FaMapMarkedAlt className="icon faMap" size={140} />
          <div className="center_text-services_2">
            <h1>Adventure</h1>
            <h3>
              Get to know <br></br> Brasil.
            </h3>
          </div>
        </a>
        <a className="cursor-pointer hoverServices m-2" href="#">
          <FaHotel className="icon faHotel" size={140} />
          <div className="center_text-services_3">
            <h1>Hotel</h1>
            <h3>
              5 star hotel <br></br> booking.
            </h3>
          </div>
        </a>
      </div>
      <img className="w-full h-screen object-cover  z-0" src={ServicesImg} alt="/" />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/40 z-0'></div>
    </div>
  );
};

export default Services;
