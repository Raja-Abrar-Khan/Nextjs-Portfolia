"use client";
import React from 'react';
import Navbar from '../nav/page';
import Footer from "../footer/page";
import "../static/comp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faPalette, faMobileAlt, faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from "../context/DarkModeContext";


const Services = () => {
  const { darkMode } = useDarkMode();
  
  console.log("Dark Mode is", darkMode); 
  return (
    <>
    <Navbar/>
    <div className={`h-full services flex flex-col pt-20 items-center min-h-screen ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}}`}>
      <div className="container text-center pb-7">
        <h2 className="dark:text-darkText text-6xl font-bold">Services</h2>
        <p className="dark:text-darkText pl-60 pr-60 text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.Lorem ipsum dolor sit amet consectetur. Tristique amet sed.Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa.
        </p>
        </div>
        <div className="pl-20 pr-20 mt-8 flex justify-center space-x-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-60 w-60 flex flex-col">
            <div>
           <FontAwesomeIcon icon={faVectorSquare} className="text-orange-500 h-10 w-12 m-2" /> </div>
            <div className=" text-2xl font-bold">UI/UX</div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-60 w-60 ml-10">
          <div>
          <FontAwesomeIcon icon={faLaptopCode} className="text-orange-500 h-10  w-12 m-2 mb-2" />
          </div>
            <div className=" text-2xl font-bold">Web Design</div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-60 w-60 ml-10">
          <div>
          <FontAwesomeIcon icon={faMobileAlt} className="text-orange-500 h-10  w-12 mb-2 " /> </div>
            <div className=" text-2xl font-bold">App Design</div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-60 w-60 ml-10">
          <div>
          <FontAwesomeIcon icon={faPalette} className="text-orange-500 h-10 w-12 m-1" /> </div>
            <div className=" text-2xl font-bold">Graphic Design</div>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.
            </p>
          </div>
        </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default Services;
