"use client";

import Navbar from "../nav/page";
import Footer from "../footer/page";
import "../static/comp.css";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useDarkMode } from "../context/DarkModeContext";
export default function Hero() {
  const { darkMode } = useDarkMode();
  
  console.log("Dark Mode is", darkMode); 
    return (
      <>
      <Navbar/>
        <div className={`hero flex flex-row h-full  pb-2 ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}'}}`}>
       <div className={` container mx-auto flex flex-col pl-52 justify-center  py-20}`}>
        <p className={`dark:text-darkText text-left text-2xl max-w-md font-bold  `}>Hi I am</p>
        <p className={`text-start text-2xl font-bold text-orange-600`}>Muhammad Umair</p>
        <h1 className={`dark:text-darkText text-7xl font-bold }`}>UI & UX </h1>
        <h1 className={`dark:text-darkText text-7xl font-bold pl-44 `}>Designer</h1>
        <p className={` max-w-md mt-6 ${darkMode ? 'bg-darkBg text-darkText' : 'bg-white text-black'}`}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Lorem ipsum dolor sit amet consectetur. Tristique amet sed.
        </p>
        <button className="w-44 rounded mt-8 bg-orange-600 text-white px-6 py-3  hover:bg-orange-700">
          Hire Me
        </button>
      </div>
      <div className="container flex- col items-center justify-center">
        <div>
            <img src="/Screenshot_2024-08-14_180543-removebg-preview.png" alt="hero" className="pl-2 w-30 h-30 " />
        </div>
        <div className="flex pr-30 mt-4 space-x-4 pl-20">
        <a className="pl-28" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-2xl dark:text-darkText text-black" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl dark:text-darkText text-black" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl dark:text-darkText text-black" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl dark:text-darkText text-black" />
        </a>
      </div>
      </div>
      </div>
      <Footer/>
      </>
    );
  }